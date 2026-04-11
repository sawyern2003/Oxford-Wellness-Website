import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, UserCheck, Heart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TreatmentDetails {
  involves: string;
  idealCandidate: string;
  duration: string;
  expectations: string;
}

interface Treatment {
  name: string;
  price: string;
  desc: string;
  details?: TreatmentDetails;
}

interface TreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment | null;
}

export default function TreatmentModal({ isOpen, onClose, treatment }: TreatmentModalProps) {
  if (!treatment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white p-0 z-50 shadow-2xl rounded-none overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-6 md:p-8 relative">
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="font-serif text-3xl md:text-4xl pr-8">{treatment.name}</h2>
              <p className="font-serif italic text-lg opacity-90 mt-2">{treatment.price}</p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <p className="text-lg text-muted-foreground font-normal mb-8 leading-relaxed">
                {treatment.desc}
              </p>

              <div className="space-y-8">
                {/* What it involves */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-2 rounded-full h-fit">
                    <Stethoscope className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">What it involves</h4>
                    <p className="text-muted-foreground font-normal leading-relaxed">
                      {treatment.details?.involves || "Contact us for detailed procedure information."}
                    </p>
                  </div>
                </div>

                {/* Who it's for */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-2 rounded-full h-fit">
                    <UserCheck className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Who it's for</h4>
                    <p className="text-muted-foreground font-normal leading-relaxed">
                      {treatment.details?.idealCandidate || "Suitable for most patients. A consultation is recommended."}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-2 rounded-full h-fit">
                    <Clock className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Duration</h4>
                    <p className="text-muted-foreground font-normal leading-relaxed">
                      {treatment.details?.duration || "Varies by treatment plan."}
                    </p>
                  </div>
                </div>

                {/* What to expect */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-2 rounded-full h-fit">
                    <Heart className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">What to expect</h4>
                    <p className="text-muted-foreground font-normal leading-relaxed">
                      {treatment.details?.expectations || "Results and recovery times vary by individual."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-center">
                 <p className="text-sm text-muted-foreground italic">
                   * Results may vary. A consultation is required prior to treatment.
                 </p>
                 <Button 
                   className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 w-full md:w-auto"
                   onClick={() => window.open('https://www.glowday.com/clinic/the-oxford-wellness-doctor', '_blank')}
                 >
                   Book Consultation
                 </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
