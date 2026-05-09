"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Handshake, Package, CreditCard, FileText, Book, BookOpen, Users, BarChart, ArrowRight, MapPin, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const carouselImages = [
  { src: "/pdf_images/community_hero_1.jpg", alt: "Community Engagement Scene 1" },
  { src: "/pdf_images/community_hero_2.jpg", alt: "Community Engagement Scene 2" },
];

export default function CommunityPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-pattern min-h-screen pb-20">
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
              src={carouselImages[currentSlide].src} 
              alt={carouselImages[currentSlide].alt} 
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
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-widest uppercase leading-none mb-4 md:mb-6">
              Community
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 text-white/60 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
              <span className="w-8 md:w-12 h-[1px] bg-white/20" />
              Building the Future Together
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

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Impact Stats */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight">Impact in Your Backyard</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Real transformation is happening at the grassroots. We are tracking progress LGA by LGA to ensure no school is left behind.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center bg-white p-5 md:p-6 rounded-2xl border border-outline-variant shadow-xl">
              <div className="text-center px-4 md:px-6 sm:border-r border-b sm:border-b-0 border-outline-variant pb-4 sm:pb-0 w-full sm:w-auto">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">8</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">LGAs REACHED (2026)</div>
              </div>
              <div className="text-center px-4 md:px-6 sm:border-x border-y sm:border-y-0 border-outline-variant py-4 sm:py-0 w-full sm:w-auto">
                <div className="text-4xl md:text-5xl font-extrabold text-secondary">149</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">SCHOOLS VERIFIED</div>
              </div>
              <div className="text-center px-4 md:px-6 w-full sm:w-auto">
                <div className="text-4xl md:text-5xl font-extrabold text-on-surface">40k+</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">STUDENTS IMPACTED</div>
              </div>
            </div>
          </div>

          {/* Community Milestones 2025-2026 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { year: "2025", title: "Scale-up Launch", desc: "Statewide expansion of teacher support systems." },
              { year: "2025", title: "Digital Hubs", desc: "Deployment of digital platform across 8 pilot LGAs." },
              { year: "2026", title: "Statewide Rollout", desc: "Full implementation of cascade training models." },
              { year: "2026", title: "149 Schools", desc: "Verified adoption of learner-centred pedagogy." }
            ].map((m, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm border border-outline-variant p-6 rounded-2xl hover:bg-white transition-all group">
                <div className="text-primary font-black text-xl mb-2">{m.year}</div>
                <h4 className="font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{m.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 bg-white border border-outline-variant rounded-2xl overflow-hidden relative min-h-[300px] md:min-h-[500px] shadow-sm group">
              <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-outline-variant shadow-xl max-w-xs">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <MapPin size={18} /> Regional Progress Map
                </h3>
                <p className="text-sm text-on-surface-variant">Interactive view of school improvements and resource distribution in Abia State.</p>
              </div>
              <Image
                src="/pdf_images/page_6_img_1.jpeg"
                alt="Regional Progress Map"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Testimonials / Success Stories */}
        <section className="mb-24">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight">Success Stories & Impact Narratives</h2>
                <p className="text-on-surface-variant text-base md:text-lg">Voices from the field: Teachers and students transformed by AbiaFIRST.</p>
              </div>
              <div className="px-6 py-3 bg-secondary/10 text-secondary rounded-xl font-black uppercase tracking-widest text-sm border border-secondary/20">
                Teacher Testimonials
              </div>
           </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Testimonial 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#1b6d24" }}
              >
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 uppercase shrink-0">
                          EJ
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Mrs. Emmanuel Nnenna Julianna</h4>
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Ohokobe Umuohu Primary School</p>
                       </div>
                    </div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                      "I developed more passion to impact knowledge on my pupils. The training equipped me with the necessary skills, and now my pupils are improving because I am patient and consistent with them."
                    </p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Users size={200} />
                 </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#a43700" }}
              >
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 uppercase shrink-0">
                          OC
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Mrs. Oji Chigozie Eziaha</h4>
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Amuzukwu Senior Secondary School</p>
                       </div>
                    </div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                      "Before, students hated Mathematics and I struggled to reach them. Now, Maths has become exciting, and we are learning together. I can involve every student, and they feel included in the learning process."
                    </p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <BookOpen size={200} />
                 </div>
              </motion.div>

              {/* New Testimonial 3 (from screenshot) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#008a34" }}
              >
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 uppercase shrink-0">
                          JA
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Mrs. Josiah Glory Azubuike</h4>
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Primary School Teacher in Ohafia</p>
                       </div>
                    </div>
                    <p className="text-base md:text-lg font-medium leading-relaxed italic">
                      "I am so happy about all the training that I have received from the ERIT team. Now, when I teach, I try to use resources. When I taught Farm Produce in Agricultural Science, I took rice, garri, beans and other items to the class. This made my pupils very excited. The lesson was practical and they answered so many questions. I even used bottle tops and sticks for teaching addition and subtraction. I thank Governor Otti for making this happen."
                    </p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Users size={200} />
                 </div>
              </motion.div>

              {/* New Testimonial 4 (from screenshot) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#0038a8" }}
              >
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 uppercase shrink-0">
                          GN
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Mrs. Gabriella Nwankwo</h4>
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Umuwaya Road Primary</p>
                       </div>
                    </div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                      "AbiaFIRST has equipped me to focus on what my pupils can do and guide them to improve. I am grateful for this initiative and hope for more training and a better teaching environment in the future."
                    </p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Quote size={200} />
                 </div>
              </motion.div>

              {/* New Testimonial 5 (from screenshot) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group lg:col-span-2"
                style={{ backgroundColor: "#005a32" }}
              >
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 uppercase shrink-0">
                          EK
                       </div>
                       <div>
                          <h4 className="text-xl font-bold">Mrs. Eme Kalu</h4>
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Abia State Educator</p>
                       </div>
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                      "The training has helped me a lot. My pupils in Primary 5, really like making things with cardboard. They have made decorations for the wall and mats as well."
                    </p>
                 </div>
                 <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Package size={200} />
                 </div>
              </motion.div>
            </div>

           {/* Large Featured Story */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
             style={{ backgroundColor: "#4d2c8d" }}
           >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center relative z-10">
                 <div className="lg:col-span-1">
                    <div className="w-full aspect-square rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-lg relative">
                        <Image src="/pdf_images/page_10_img_2.jpeg" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" alt="Samuel Precious" />
                    </div>
                 </div>
                 <div className="lg:col-span-2">
                    <div className="px-4 py-1 bg-white/20 rounded-full inline-block text-[10px] font-black uppercase tracking-widest mb-6">Technological Pioneer</div>
                    <h4 className="text-3xl font-black mb-2">Samuel Precious Ndidi</h4>
                    <p className="text-white/60 font-bold mb-8 uppercase tracking-widest text-sm">Oramze Ihianya community primary School 2</p>
                    <p className="text-2xl font-medium leading-relaxed mb-8">
                      "I am a technological teacher. I can be in Aba and be teaching people in the UK. The area of inclusion and differentiation is also top notch. Now I am able to carry all my students along."
                    </p>
                    <div className="p-6 bg-white/10 rounded-2xl border border-white/10 italic text-white/80 leading-relaxed">
                      "ERIT has transformed education in Abia State, education in my school, everything transformed, the teachers and the students."
                    </div>
                 </div>
              </div>
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
           </motion.div>
        </section>

        {/* Support Options */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4 tracking-tight">How You Can Support</h2>
            <p className="text-on-surface-variant text-lg">Education is a collective responsibility. There is a place for you in our mission.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mentorship", desc: "Share your professional journey and inspire the next generation of Abia leaders.", icon: <Handshake />, color: "primary", action: "Apply to Mentor", link: "https://eriteam.org/contact/" },
              { title: "Resources", desc: "From books to sports equipment, your contributions directly enhance the school experience.", icon: <Package />, color: "secondary", action: "See Wishlist", link: "https://eriteam.org/contact/" },
              { title: "Funding", desc: "Contribute to specific school infrastructure programs through transparent tracking.", icon: <CreditCard />, color: "tertiary", action: "Donate Now", link: "https://eriteam.org/contact/" }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-outline-variant p-6 md:p-10 rounded-2xl text-center group hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-surface-container-low rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform text-${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8 leading-relaxed flex-1">{item.desc}</p>
                <a 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 text-white font-bold rounded-xl uppercase tracking-widest text-xs shadow-lg hover:brightness-110 transition-all"
                  style={{ backgroundColor: `var(--color-${item.color})` }}
                >
                  {item.action}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Resources Section */}
        <section>
          <div className="bg-on-surface text-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 md:gap-16 items-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">Educational Resources</h2>
              <p className="text-xl mb-10 text-white/70 leading-relaxed max-w-lg">Access official guides, parent handbooks, and toolkits designed to help you navigate and support the system.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Parent Handbook 2024", icon: <FileText className="text-primary" /> },
                  { label: "SBMC Guidelines", icon: <Book className="text-secondary" /> },
                  { label: "Impact Analysis", icon: <BarChart className="text-tertiary" /> },
                  { label: "Digital Toolkits", icon: <Package className="text-primary" /> }
                ].map((res, i) => (
                  <Link key={i} href="#" className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl hover:bg-white/20 transition-all border border-white/10 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      {res.icon}
                    </div>
                    <span className="font-bold text-sm">{res.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px] w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <School className="text-primary" size={32} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Resource Hub Preview</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
