"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Plus,
  X,
  Maximize2
} from "lucide-react";

// Full asset lists from specified folders
const teacherImages = [
  "/Teacher and Leadership Transformation Projects/DSC_0150.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0001.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0002.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0002-1-1.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0024.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0037.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0063.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0087.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0095.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0167-1.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0189.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0201.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0235.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0278.jpg",
  "/Teacher and Leadership Transformation Projects/DSC_0288-1.jpg",
];

const schoolImages = [
  "/School Transformation & Remodelling Projects/2025_08_25_15_40_IMG_6969.jpg",
  "/School Transformation & Remodelling Projects/2025_08_26_10_34_IMG_7076.jpg",
  "/School Transformation & Remodelling Projects/2025_08_26_11_06_IMG_7096-1.jpg",
  "/School Transformation & Remodelling Projects/2025_08_26_13_49_IMG_7119.jpg",
  "/School Transformation & Remodelling Projects/2025_08_26_13_50_IMG_7125.jpg",
  "/School Transformation & Remodelling Projects/2025_08_27_09_11_IMG_7159.jpg",
  "/School Transformation & Remodelling Projects/2025_08_27_12_44_IMG_7275.jpg",
  "/School Transformation & Remodelling Projects/2025_08_28_08_44_IMG_7698.jpg",
  "/School Transformation & Remodelling Projects/2025_08_28_09_03_IMG_7309.jpg",
  "/School Transformation & Remodelling Projects/2025_08_28_09_58_IMG_7342.jpg",
];

const carouselImages = [
  teacherImages[0],
  schoolImages[5],
  teacherImages[14],
];

export default function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleTeacherImages, setVisibleTeacherImages] = useState(6);
  const [visibleSchoolImages, setVisibleSchoolImages] = useState(6);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const loadMoreTeachers = () => setVisibleTeacherImages((prev) => Math.min(prev + 6, teacherImages.length));
  const loadMoreSchools = () => setVisibleSchoolImages((prev) => Math.min(prev + 6, schoolImages.length));

  return (
    <div className="bg-white min-h-screen selection:bg-primary/20">
      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 cursor-zoom-out overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            {/* Optimized Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <Image 
                src={selectedImage} 
                alt="Blur Background" 
                fill 
                className="object-cover blur-2xl brightness-[0.2] scale-105 transform-gpu"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-20 text-white/80 hover:text-white transition-colors p-3 bg-white/20 rounded-full border border-white/30"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="md:w-7 md:h-7" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-[16/10] z-10 overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Selected Project" 
                fill 
                className="object-contain transform-gpu"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Carousel Section */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] md:min-h-[600px] overflow-hidden flex items-center justify-center bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" } 
            }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={carouselImages[currentSlide]} 
              alt={`Slide ${currentSlide + 1}`} 
              fill 
              className="object-cover brightness-[0.4] transform-gpu"
              priority
              sizes="100vw"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        <div className="relative z-20 text-center px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-white tracking-widest uppercase leading-none mb-4 md:mb-6">
              Projects
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 text-white/60 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
              <span className="w-8 md:w-12 h-[1px] bg-white/20" />
              Empowering Abia
              <span className="w-8 md:w-12 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === i ? "w-8 md:w-12 bg-white" : "w-2 md:w-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Teacher & Leadership Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#1b1c1c] mb-4 md:mb-6 leading-tight">
            Teacher and Leadership Transformation Projects
          </h2>
          <p className="text-primary font-bold italic mb-4 md:mb-6 text-sm md:text-base">Reimagining the teacher’s journey.</p>
          <p className="text-[#5a4138] max-w-2xl mx-auto font-medium leading-relaxed text-sm md:text-base">
            This flagship programme equips teachers and school leaders with the competencies, confidence, and community to improve learning outcomes sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teacherImages.slice(0, visibleTeacherImages).map((src, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05 }}
              key={src}
            >
              <ProjectImage 
                src={src} 
                height={i % 3 === 1 ? "h-[350px] md:h-[500px]" : "h-[300px] md:h-[400px]"} 
                onClick={() => setSelectedImage(src)}
                priority={i < 3}
              />
            </motion.div>
          ))}
        </div>
        
        {visibleTeacherImages < teacherImages.length && (
          <div className="flex justify-center mt-12 md:mt-20">
            <button 
              onClick={loadMoreTeachers}
              className="group w-full sm:w-auto px-12 py-5 bg-white border-2 border-[#1b1c1c]/5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:border-primary hover:text-primary transition-all duration-500 flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
            >
              Load More <Plus size={16} className="group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        )}
      </section>

      {/* School Transformation Section */}
      <section className="py-16 md:py-24 bg-[#fbf9f8]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#1b1c1c] mb-4 md:mb-6 leading-tight">
                  School Transformation & Remodelling Projects
              </h2>
              <p className="text-secondary font-bold italic mb-4 md:mb-6 text-sm md:text-base">Modern, inclusive, and child-friendly learning environments.</p>
              <p className="text-[#5a4138] max-w-2xl mx-auto font-medium leading-relaxed text-sm md:text-base">
                  ERIT partners with state governments to assess, remodel, and revitalise public schools to meet 21st century learning standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {schoolImages.slice(0, visibleSchoolImages).map((src, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.05 }}
                  key={src}
                >
                  <ProjectImage 
                    src={src} 
                    height={i % 2 === 0 ? "h-[320px] md:h-[450px]" : "h-[280px] md:h-[350px]"} 
                    onClick={() => setSelectedImage(src)}
                    priority={i < 3}
                  />
                </motion.div>
              ))}
            </div>
            
            {visibleSchoolImages < schoolImages.length && (
              <div className="flex justify-center mt-12 md:mt-20">
                <button 
                  onClick={loadMoreSchools}
                  className="group w-full sm:w-auto px-12 py-5 bg-white border-2 border-[#1b1c1c]/5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:border-secondary hover:text-secondary transition-all duration-500 flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
                >
                  Load More <Plus size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>
            )}
        </div>
      </section>
    </div>
  );
}

function ProjectImage({ src, height, onClick, priority }: { src: string, height: string, onClick: () => void, priority?: boolean }) {
    return (
        <motion.div 
            whileHover={{ y: -6 }}
            onClick={onClick}
            className={`relative ${height} rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg border border-black/5 cursor-zoom-in transform-gpu`}
        >
            <Image 
                src={src} 
                alt="Project Image" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={priority}
                loading={priority ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white/30 rounded-full flex items-center justify-center border border-white/40 text-white shadow-xl">
                    <Maximize2 size={20} className="md:w-6 md:h-6" />
                </div>
            </div>
        </motion.div>
    );
}
