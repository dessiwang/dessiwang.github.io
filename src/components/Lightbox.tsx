"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  alt: string;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev, alt }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button onClick={onClose} className="absolute top-6 right-6 z-10 rounded-full bg-white/5 p-2 text-white/60 transition-all hover:bg-white/10 hover:text-white" aria-label="Close lightbox">
            <X size={20} />
          </button>
          <div className="absolute top-6 left-6 z-10">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs tracking-wider text-white/40">{currentIndex + 1} / {images.length}</span>
          </div>
          {images.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 z-10 rounded-full bg-white/5 p-3 text-white/60 transition-all hover:bg-white/10 hover:text-white" aria-label="Previous image">
              <ChevronLeft size={20} />
            </button>
          )}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative h-[80vh] w-[90vw] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={images[currentIndex]} alt={`${alt} - Image ${currentIndex + 1}`} fill className="object-contain" sizes="90vw" priority />
          </motion.div>
          {images.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 z-10 rounded-full bg-white/5 p-3 text-white/60 transition-all hover:bg-white/10 hover:text-white" aria-label="Next image">
              <ChevronRight size={20} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
