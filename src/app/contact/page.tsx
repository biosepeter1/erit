"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Send, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-pattern min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pdf_images/page_1_img_1.jpeg" 
            alt="Abia State Secretariat" 
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm z-10" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 max-w-7xl mx-auto px-6 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold text-xs rounded-full mb-6 uppercase tracking-widest">Official Channels</span>
          <h1 className="text-6xl font-extrabold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            The Ministry of Basic and Secondary Education is committed to transparency and open communication regarding the AbiaFIRST transformation programme.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { 
                title: "Physical Address", 
                content: <>Abia State Secretariat,<br/>Ogurube Layout, Umuahia,<br/>Abia State, Nigeria.</>, 
                icon: <MapPin size={28} />, 
                delay: 0.1 
              },
              { 
                title: "Email Address", 
                content: <a href="mailto:admin@eriteam.org" className="hover:underline break-all">admin@eriteam.org</a>, 
                icon: <Mail size={28} />, 
                delay: 0.2,
                sub: "Official correspondence only."
              },
              { 
                title: "Phone Numbers", 
                content: (
                  <div className="flex flex-col gap-3">
                    <a href="tel:+2347030625898" className="text-xl font-bold hover:text-secondary transition-colors">+234 703 062 5898</a>
                    <a href="tel:+2347032934688" className="text-xl font-bold hover:text-secondary transition-colors">+234 703 293 4688</a>
                    <a href="tel:+2347035685894" className="text-xl font-bold hover:text-secondary transition-colors">+234 703 568 5894</a>
                    <a href="tel:+2348038751415" className="text-xl font-bold hover:text-secondary transition-colors">+234 8038751415</a>
                    <a href="tel:+2348036481475" className="text-xl font-bold hover:text-secondary transition-colors">+234 803 648 1475</a>
                  </div>
                ), 
                icon: <Phone size={28} />, 
                delay: 0.3,
                sub: "Available Mon - Fri, 8:00 AM - 5:00 PM"
              },
              { 
                title: "State Portal", 
                content: <a href="https://www.abiastate.gov.ng" target="_blank" className="hover:underline">www.abiastate.gov.ng</a>, 
                icon: <Globe size={28} />, 
                delay: 0.4,
                sub: "Official State Government Website."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: card.delay }}
                className="bg-white p-8 rounded-3xl border border-outline-variant shadow-sm flex items-start gap-8 group hover:border-secondary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0 text-secondary group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{card.title}</h3>
                  <div className="text-on-surface-variant text-sm leading-relaxed font-medium">
                    {card.content}
                  </div>
                  {card.sub && <p className="text-[10px] text-on-surface-variant/60 mt-2 font-bold uppercase tracking-widest">{card.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-12 rounded-[3rem] border border-outline-variant shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10">
                  <h2 className="text-4xl font-extrabold text-on-surface mb-8 tracking-tight">Send a Message</h2>
                  
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-12 text-center"
                      >
                        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                          <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-on-surface mb-2">Message Sent!</h3>
                        <p className="text-on-surface-variant font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Your Name</label>
                            <input required className="w-full bg-surface-container-low/30 border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-secondary outline-none transition-all placeholder:opacity-30" placeholder="Enter your full name" type="text" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                            <input required className="w-full bg-surface-container-low/30 border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-secondary outline-none transition-all placeholder:opacity-30" placeholder="name@example.com" type="email" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Subject</label>
                          <select className="w-full bg-surface-container-low/30 border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-secondary outline-none transition-all">
                              <option>AbiaFIRST Programme Inquiry</option>
                              <option>School Partnership</option>
                              <option>Teacher Training Support</option>
                              <option>Feedback & Recommendations</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                          <textarea required className="w-full bg-surface-container-low/30 border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-secondary outline-none transition-all placeholder:opacity-30" placeholder="How can we help you?" rows={5}></textarea>
                        </div>
                        <button 
                          disabled={isSubmitting}
                          className="w-full bg-secondary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>Processing <Loader2 size={20} className="animate-spin" /></>
                          ) : (
                            <>Send Message <Send size={20} /></>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
              </div>
            </motion.div>

            {/* Official Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-on-surface text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                      <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Institutional Mandate</h3>
              </div>
              <p className="text-lg text-white/70 leading-relaxed relative z-10">
                <strong>AbiaFIRST</strong> (Fostering Innovation, Reform and Schools Transformation) is the flagship education programme of the Abia State Government. Orchestrated by the Ministry of Basic and Secondary Education, it focuses on elevating teaching standards and learning outcomes through institutional excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
