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
  const hiddenAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const localPreviewRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const backgroundImageRef = React.useRef<HTMLImageElement | null>(null);
  const keyedCanvasRef = React.useRef<HTMLCanvasElement | null>(null);
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
    const localVideoEl = localPreviewRef.current;
    if (!localVideoEl) return;

    if (!localVideoTrack) {
      localVideoEl.srcObject = null;
      return;
    }

    localVideoEl.srcObject = new MediaStream([localVideoTrack]);
    localVideoEl.play().catch(() => undefined);
  }, [localVideoTrack]);

  React.useEffect(() => {
    const img = new Image();
    img.src = "/clinic-background.jpg";
    img.onload = () => {
      backgroundImageRef.current = img;
    };
    img.onerror = () => {
      const fallback = new Image();
      fallback.src = "/clinic%20background/clinic-background.jpg";
      fallback.onload = () => {
        backgroundImageRef.current = fallback;
      };
    };
  }, []);

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

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      if (outputCanvas.width !== canvasWidth || outputCanvas.height !== canvasHeight) {
        outputCanvas.width = canvasWidth;
        outputCanvas.height = canvasHeight;
      }

      // 1) Draw clinic room background (inside the same canvas).
      if (backgroundImageRef.current) {
        ctx.filter = "blur(4px)";
        ctx.drawImage(backgroundImageRef.current, 0, 0, outputCanvas.width, outputCanvas.height);
      } else {
        const gradient = ctx.createLinearGradient(0, 0, outputCanvas.width, outputCanvas.height);
        gradient.addColorStop(0, "#223247");
        gradient.addColorStop(0.5, "#2e4157");
        gradient.addColorStop(1, "#1f3044");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
      }

      // 2) Reset filter before drawing Tavus video.
      ctx.filter = "none";

      const videoAspect = sourceVideo.videoWidth / sourceVideo.videoHeight;
      const targetHeight = outputCanvas.height * 0.94;
      const targetWidth = targetHeight * videoAspect;
      const clampedWidth = Math.min(targetWidth, outputCanvas.width * 0.88);
      const clampedHeight = clampedWidth / videoAspect;
      const videoX = (outputCanvas.width - clampedWidth) / 2;
      const videoY = Math.max(0, outputCanvas.height - clampedHeight);

      // 3) Key video in an offscreen canvas, then composite onto background.
      if (!keyedCanvasRef.current) {
        keyedCanvasRef.current = document.createElement("canvas");
      }
      const keyedCanvas = keyedCanvasRef.current;
      if (keyedCanvas.width !== clampedWidth || keyedCanvas.height !== clampedHeight) {
        keyedCanvas.width = clampedWidth;
        keyedCanvas.height = clampedHeight;
      }
      const keyedCtx = keyedCanvas.getContext("2d", { willReadFrequently: true });
      if (!keyedCtx) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      keyedCtx.clearRect(0, 0, clampedWidth, clampedHeight);
      keyedCtx.drawImage(sourceVideo, 0, 0, clampedWidth, clampedHeight);
      const frame = keyedCtx.getImageData(0, 0, clampedWidth, clampedHeight);
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

      keyedCtx.putImageData(frame, 0, 0);
      ctx.drawImage(keyedCanvas, videoX, videoY, clampedWidth, clampedHeight);
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
      className="min-h-screen w-full relative overflow-hidden bg-black"
    >
      <audio ref={hiddenAudioRef} autoPlay playsInline />
      <video ref={hiddenVideoRef} autoPlay playsInline muted className="hidden" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 h-screen flex flex-col pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="bg-black/35 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm tracking-wide">
            The Oxford Wellness Doctor
          </div>
          <div className="bg-black/35 backdrop-blur-md rounded-full px-4 py-2 text-white/90 text-sm">
            {status}
          </div>
        </div>

        <div className="flex-1 mt-5 md:mt-8 relative overflow-hidden">
          <div className="absolute right-4 top-4 md:right-6 md:top-6 w-44 md:w-56 aspect-[4/5] rounded-2xl overflow-hidden border border-white/40 bg-black/45 shadow-2xl pointer-events-auto">
            {isCamOn && localVideoTrack ? (
              <video
                ref={localPreviewRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover scale-x-[-1]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/75 text-xs text-center px-3">
                Camera preview off
              </div>
            )}
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
          <div className="mt-4 text-sm text-red-100 bg-red-500/35 border border-red-200/40 rounded-xl px-4 py-3 pointer-events-auto">
            {error}
          </div>
        ) : null}

        <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-3 pointer-events-auto">
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
