"use client";

import { motion } from "framer-motion";
import { School, BookOpen, Laptop, Construction, Users, Tablet, Microscope, FileText, TrendingUp, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PartnershipsPage() {

  return (
    <div className="bg-[#fcfaf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#fcfaf9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[600px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 py-24"
          >
            <span className="inline-block px-3 py-1 bg-[#f4e8e1] text-[#a43700] font-bold text-[10px] rounded mb-6 uppercase tracking-widest">
              Global Partnership Invitation
            </span>
            <h1 className="text-4xl lg:text-6xl font-medium text-on-surface mb-6 leading-tight">
              Partner with the Abia Education Revolution
            </h1>
            <p className="text-sm text-on-surface-variant mb-10 max-w-md leading-relaxed">
              Join forces with the Education Reform Team to redefine the educational landscape of Abia State through scalable technology and systemic reform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#a43700] text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded shadow-lg shadow-[#a43700]/30">
                What we do
              </button>
              <button className="bg-[#c29858] text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded shadow-lg shadow-[#c29858]/30">
                Donate Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full w-full relative hidden lg:block"
          >
            <Image
              src="/pdf_images/page_1_img_1.jpeg"
              alt="Educational Technology Partnership"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* The Transformation Story (Pillars) */}
      <section className="py-24 bg-[#fcfaf9]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-on-surface mb-4"
          >
            The Transformation Story
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            className="h-1 bg-[#c29858] mx-auto mb-6"
          />
          <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
            Our holistic approach to systemic change is built upon five foundational pillars of institutional innovation.
          </p>
        </div>
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { title: "Teacher Professionalisation", desc: "Continuous upskilling programs designed to transition 7,000+ educators from traditional methods to 21st-century digital pedagogies.", icon: <Users size={20} />, borderColor: "border-[#8f4722]", iconBg: "bg-[#b75d32]" },
              { title: "Curriculum Modernisation", desc: "Integrating STEAM foundations and digital literacy into every level of basic and secondary education.", icon: <BookOpen size={20} />, borderColor: "border-[#bda67a]", iconBg: "bg-[#c29858]" }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-8 border-b-4 ${pillar.borderColor} rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-5 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-lg ${pillar.iconBg} text-white flex items-center justify-center shrink-0`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{pillar.title}</h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Digital Transformation", desc: "Building the infrastructure for a state-wide digital learning ecosystem.", icon: <Laptop size={18} />, borderColor: "border-[#8f4722]", iconBg: "bg-[#b75d32]" },
              { title: "School Improvement", desc: "Physical and technological rehabilitation of public learning centers.", icon: <Construction size={18} />, borderColor: "border-[#bda67a]", iconBg: "bg-[#c29858]" },
              { title: "Community Engagement", desc: "Fostering ownership and accountability within local Abia communities.", icon: <Globe size={18} />, borderColor: "border-[#bda67a]", iconBg: "bg-[#c29858]" }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.1 }}
                className={`bg-white p-6 border-b-4 ${pillar.borderColor} rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-4 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg ${pillar.iconBg} text-white flex items-center justify-center`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface mb-2">{pillar.title}</h3>
                  <p className="text-on-surface-variant text-[11px] leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar (Impact) */}
      <section className="relative py-32 bg-on-surface overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pdf_images/page_2_img_1.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-60 filter blur-[2px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10"
          >
            Impact
          </motion.h2>
          <div className="max-w-[1000px] mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl">
            {[
              { val: "7,454", label: "Educators Trained" },
              { val: "97.1%", label: "Skill Application" },
              { val: "41,163", label: "Digital Resources" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-5xl font-extrabold mb-2">{stat.val}</p>
                <p className="font-bold uppercase tracking-widest text-[10px] opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
