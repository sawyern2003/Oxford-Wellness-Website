import * as React from "react";
import DailyIframe, { DailyCall, DailyParticipant } from "@daily-co/daily-js";
import { useLocation } from "wouter";

function getConversationUrlFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("url");
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function getPlayableTrack(participant: DailyParticipant | undefined, kind: "audio" | "video") {
  if (!participant) return null;
  const trackInfo = participant.tracks?.[kind];
  if (trackInfo?.state !== "playable") return null;
  return trackInfo.track ?? null;
}

export default function CallPage() {
  const [, setLocation] = useLocation();
  const callObjectRef = React.useRef<DailyCall | null>(null);
  const hiddenVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const previewVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const hiddenAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const [status, setStatus] = React.useState("Connecting...");
  const [error, setError] = React.useState("");
  const [isMicOn, setIsMicOn] = React.useState(true);
  const [isCamOn, setIsCamOn] = React.useState(true);
  const [isLeaving, setIsLeaving] = React.useState(false);
  const [remoteVideoTrack, setRemoteVideoTrack] = React.useState<MediaStreamTrack | null>(null);
  const [remoteAudioTrack, setRemoteAudioTrack] = React.useState<MediaStreamTrack | null>(null);
  const [localVideoTrack, setLocalVideoTrack] = React.useState<MediaStreamTrack | null>(null);

  const conversationUrl = React.useMemo(() => getConversationUrlFromQuery(), []);

  const syncTracksFromParticipants = React.useCallback((callObject: DailyCall) => {
    const participants = callObject.participants();
    const allParticipants = Object.values(participants);
    const remoteParticipant = allParticipants.find((p) => !p.local);
    const localParticipant = allParticipants.find((p) => p.local);

    setRemoteVideoTrack(getPlayableTrack(remoteParticipant, "video"));
    setRemoteAudioTrack(getPlayableTrack(remoteParticipant, "audio"));
    setLocalVideoTrack(getPlayableTrack(localParticipant, "video"));
  }, []);

  React.useEffect(() => {
    if (!conversationUrl) {
      setError("Missing consultation session URL.");
      setStatus("Unable to start call.");
      return;
    }

    const callObject = DailyIframe.createCallObject({
      audioSource: true,
      videoSource: true,
      subscribeToTracksAutomatically: true,
    });
    callObjectRef.current = callObject;

    const onParticipantUpdated = () => syncTracksFromParticipants(callObject);
    const onJoinedMeeting = () => {
      setStatus("Connected");
      setError("");
      syncTracksFromParticipants(callObject);
    };
    const onLeftMeeting = () => setStatus("Call ended");
    const onError = (e: any) => {
      const message = e?.errorMsg || e?.errorMsg?.message || "Call failed to connect.";
      setError(message);
      setStatus("Connection issue");
    };
    const onCameraError = (e: any) => {
      const message =
        e?.errorMsg || "Camera permissions were denied. You can continue with audio only.";
      setError(message);
    };

    callObject.on("participant-updated", onParticipantUpdated);
    callObject.on("joined-meeting", onJoinedMeeting);
    callObject.on("left-meeting", onLeftMeeting);
    callObject.on("error", onError);
    callObject.on("camera-error", onCameraError);

    callObject
      .join({
        url: conversationUrl,
        startAudioOff: false,
        startVideoOff: false,
      })
      .catch((joinError: any) => {
        setError(joinError?.message || "Could not join call.");
        setStatus("Unable to connect");
      });

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      callObject.off("participant-updated", onParticipantUpdated);
      callObject.off("joined-meeting", onJoinedMeeting);
      callObject.off("left-meeting", onLeftMeeting);
      callObject.off("error", onError);
      callObject.off("camera-error", onCameraError);
      callObject.leave().catch(() => undefined);
      callObject.destroy().catch(() => undefined);
      callObjectRef.current = null;
    };
  }, [conversationUrl, syncTracksFromParticipants]);

  React.useEffect(() => {
    const audioEl = hiddenAudioRef.current;
    if (!audioEl || !remoteAudioTrack) return;
    audioEl.srcObject = new MediaStream([remoteAudioTrack]);
    audioEl.play().catch(() => undefined);
  }, [remoteAudioTrack]);

  React.useEffect(() => {
    const videoEl = previewVideoRef.current;
    if (!videoEl || !localVideoTrack) return;
    videoEl.srcObject = new MediaStream([localVideoTrack]);
    videoEl.play().catch(() => undefined);
  }, [localVideoTrack]);

  React.useEffect(() => {
    const sourceVideo = hiddenVideoRef.current;
    const outputCanvas = canvasRef.current;
    if (!sourceVideo || !outputCanvas || !remoteVideoTrack) return;

    sourceVideo.srcObject = new MediaStream([remoteVideoTrack]);
    sourceVideo.play().catch(() => undefined);

    const ctx = outputCanvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const draw = () => {
      if (!sourceVideo.videoWidth || !sourceVideo.videoHeight) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      if (
        outputCanvas.width !== sourceVideo.videoWidth ||
        outputCanvas.height !== sourceVideo.videoHeight
      ) {
        outputCanvas.width = sourceVideo.videoWidth;
        outputCanvas.height = sourceVideo.videoHeight;
      }

      ctx.drawImage(sourceVideo, 0, 0, outputCanvas.width, outputCanvas.height);
      const frame = ctx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
      const pixels = frame.data;

      // Tavus transparent background approach: remove green pixels in real time.
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const greenDominant = g > 90 && g > r * 1.2 && g > b * 1.2;
        if (greenDominant) {
          pixels[i + 3] = 0;
        } else {
          const edgeSpill = Math.max(0, Math.min(255, g - ((r + b) / 2 + 20)));
          if (edgeSpill > 0) {
            pixels[i + 1] = Math.max(0, g - edgeSpill * 0.45);
          }
        }
      }

      ctx.putImageData(frame, 0, 0);
      rafRef.current = requestAnimationFrame(draw);
    };

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [remoteVideoTrack]);

  async function toggleMic() {
    const callObject = callObjectRef.current;
    if (!callObject) return;
    const next = !isMicOn;
    setIsMicOn(next);
    await callObject.setLocalAudio(next);
  }

  async function toggleCam() {
    const callObject = callObjectRef.current;
    if (!callObject) return;
    const next = !isCamOn;
    setIsCamOn(next);
    await callObject.setLocalVideo(next);
  }

  async function endCall() {
    const callObject = callObjectRef.current;
    setIsLeaving(true);
    try {
      if (callObject) {
        await callObject.leave();
        await callObject.destroy();
        callObjectRef.current = null;
      }
    } finally {
      setLocation("/ai-consultation");
    }
  }

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(13,28,45,0.85) 0%, rgba(26,47,66,0.75) 45%, rgba(16,29,44,0.82) 100%), url('/clinic-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <audio ref={hiddenAudioRef} autoPlay playsInline />
      <video ref={hiddenVideoRef} autoPlay playsInline muted className="hidden" />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 h-screen flex flex-col">
        <div className="flex items-center justify-between">
          <div className="bg-white/12 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm tracking-wide">
            The Oxford Wellness Doctor
          </div>
          <div className="bg-white/12 backdrop-blur-md rounded-full px-4 py-2 text-white/90 text-sm">
            {status}
          </div>
        </div>

        <div className="flex-1 mt-5 md:mt-8 rounded-2xl border border-white/25 bg-black/15 backdrop-blur-sm relative overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-full object-contain"
          />

          <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 w-40 md:w-52 rounded-xl overflow-hidden border border-white/20 bg-black/60 shadow-xl">
            <video
              ref={previewVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>

          {!remoteVideoTrack ? (
            <div className="absolute inset-0 flex items-center justify-center text-white/90 text-center px-6">
              <p className="text-sm md:text-base">
                Waiting for consultation video stream...
              </p>
            </div>
          ) : null}
        </div>

        {error ? (
          <div className="mt-4 text-sm text-red-100 bg-red-500/35 border border-red-200/40 rounded-xl px-4 py-3">
            {error}
          </div>
        ) : null}

        <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={toggleMic}
            className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors text-sm"
          >
            {isMicOn ? "Mute Mic" : "Unmute Mic"}
          </button>
          <button
            type="button"
            onClick={toggleCam}
            className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors text-sm"
          >
            {isCamOn ? "Camera Off" : "Camera On"}
          </button>
          <button
            type="button"
            onClick={endCall}
            disabled={isLeaving}
            className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLeaving ? "Ending..." : "End Call"}
          </button>
        </div>
      </div>
    </div>
  );
}
