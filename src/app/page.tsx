"use client";

import { motion } from "framer-motion";
import {
  Users,
  Library,
  Cpu,
  Building2,
  Award,
  ArrowRight,
  CheckCircle2,
  Users2,
  Layout,
  TrendingUp,
  Zap,
  Globe,
  Calendar,
  MapPin,
  ShieldCheck,
  Compass
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MandatePage() {
  const pillars = [
    { 
      name: "Teacher Professionalisation", 
      icon: Award, 
      color: "#a43700", 
      desc: "Comprehensive cascade training model with professional development pathways and mentorship support.",
      points: ["Cascade training model", "Development pathways", "Competency assessment", "Mentorship support"]
    },
    { 
      name: "Curriculum Modernisation", 
      icon: Library, 
      color: "#1b6d24", 
      desc: "Development of 41,163 learning resources integrating digital literacy, STEAM, and character education.",
      points: ["41,163 resources", "STEAM integration", "Character education", "Social-emotional learning"]
    },
    { 
      name: "Digital Transformation", 
      icon: Cpu, 
      color: "#004a77", 
      desc: "Abia eLEARN platform and Google Workspace integration for virtual collaboration and resource sharing.",
      points: ["Abia eLEARN platform", "Google Workspace", "Digital resources", "Collaboration tools"]
    },
    { 
      name: "School Improvement", 
      icon: Building2, 
      color: "#4d2c8d", 
      desc: "Enhanced governance and data-driven decision making through School Improvement Partners (SIPs).",
      points: ["Governance structures", "Data-driven decisions", "SIPs implementation", "Leadership development"]
    },
    { 
      name: "Community Engagement", 
      icon: ShieldCheck, 
      color: "#c29858", 
      desc: "Fostering local ownership and engagement to ensure the sustainability of education reforms.",
      points: ["Stakeholder collaboration", "Parental involvement", "Local ownership", "Sustainable impact"]
    },
  ];

  const roadmap = [
    {
      year: "2024", quarters: [
        { q: "Q1", title: "Diagnostic", desc: "Baseline assessment and program design" },
        { q: "Q2", title: "Engagement", desc: "Stakeholder engagement and planning" },
        { q: "Q3", title: "Training", desc: "Initial training of Master Trainers" },
        { q: "Q4", title: "Pilot", desc: "Pilot implementation in select schools" }
      ]
    },
    {
      year: "2025", quarters: [
        { q: "Q1", title: "Launch", desc: "Program launch and scale-up" },
        { q: "Q2", title: "Cascade", desc: "Cascade training implementation" },
        { q: "Q3", title: "Deployment", desc: "Digital platform deployment" },
        { q: "Q4", title: "Assessment", desc: "Impact assessment and evaluation" }
      ]
    }
  ];

  const outcomes = [
    { val: "7,454", label: "Educators trained", icon: Users2, trend: null },
    { val: "2,200", label: "Master & Lead Trainers", icon: Award, trend: null },
    { val: "97.1%", label: "Skill application", icon: CheckCircle2, trend: "scroll into view" },
    { val: "71.5%", label: "Teacher mastery levels", icon: TrendingUp, trend: "from 31.7%" },
    { val: "8.9%", label: "Low performers", icon: Zap, trend: "from 39.9%" },
    { val: "69.8%", label: "Improved interactions", icon: Layout, trend: null },
    { val: "74.2%", label: "Overall performance", icon: Globe, trend: "from 55.2%" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
        <Image
          src="/govt_mandate_hero.png"
          alt="Classroom Transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 to-black/40 backdrop-blur-[4px] flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex items-center gap-3"
            >
              <Image src="/pdf_images/page_1_img_4.jpeg" alt="Logo" width={40} height={40} className="md:w-16 md:h-16" />
              <div>
                <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] opacity-60">Abia State Government</p>
                <p className="text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Ministry of Basic and Secondary Education</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6 uppercase tracking-tighter drop-shadow-2xl">
                EXECUTIVE <br /> SUMMARY
              </h1>
              <p className="text-[#c29858] text-lg sm:text-xl md:text-3xl font-black uppercase tracking-widest mb-6 leading-tight">
                TRANSFORMING ABIA'S <br /> EDUCATION LANDSCAPE
              </p>
              <p className="text-white/60 text-sm md:text-lg font-medium max-w-lg leading-relaxed mb-10">
                Unleashing the potential of every Abia Youth through systematic education reform and digital transformation.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#c29858]" size={18} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Period Under Review</p>
                    <p className="text-xs font-bold text-white">2024 — 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#c29858]" size={18} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Launch Venue</p>
                    <p className="text-xs font-bold text-white">ICC Umuahia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-on-surface mb-8 uppercase tracking-widest"
        >
          TRANSFORMING ABIA'S EDUCATION LANDSCAPE
          <div className="h-1 w-24 bg-[#c29858] mx-auto mt-4" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-on-surface-variant font-medium text-base md:text-lg leading-relaxed text-center"
        >
          <p>
            The AbiaFIRST Education Transformation Programme demonstrates how visionary leadership and technical expertise can revolutionize a state's education system within one year. Under Governor Alex Otti's leadership, Ministry of Basic and Secondary Education Abia and ERIT's guidance, this initiative has delivered remarkable results through a modern, digital-first approach to education reform. It demonstrates that significant, cost-effective improvements can be achieved with a clear vision, capable partners, and disciplined execution.
          </p>
          <p>
            The program was developed following a comprehensive statewide assessment that revealed significant systemic weaknesses, including outdated teaching methods, low digital readiness, and unsuitable learning environments. Abia responded by implementing a comprehensive reform strategy built on five pillars:
          </p>
        </motion.div>
      </section>

      {/* The Five Pillars */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl font-black text-on-surface mb-16 uppercase tracking-widest"
          >
            THE FIVE PILLARS
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-outline-variant hover:border-primary transition-all duration-500 group hover:shadow-2xl flex flex-col items-center text-center relative overflow-hidden shadow-sm"
              >
                {/* Executive Icon Presentation */}
                <div className="relative mb-8">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700 shadow-lg bg-white"
                    style={{ border: `1px solid ${pillar.color}20` }}
                  >
                    <pillar.icon size={32} color={pillar.color} strokeWidth={1.2} />
                  </div>
                  {/* Decorative Background Element */}
                  <div 
                    className="absolute inset-0 scale-150 blur-2xl opacity-10 rounded-full"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div className="absolute inset-0 scale-125 opacity-20 group-hover:rotate-45 transition-transform duration-1000">
                     <div className="w-full h-full rounded-full border border-dashed" style={{ borderColor: pillar.color }} />
                  </div>
                </div>

                <h4 className="font-black text-xs md:text-sm uppercase tracking-widest mb-6 text-on-surface leading-tight min-h-[3rem] flex items-center">
                  {pillar.name}
                </h4>
                
                {/* Points List - Visible on Touch/Hover */}
                <div className="space-y-4 mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-left w-full">
                  {pillar.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                      <p className="text-xs md:text-[11px] text-on-surface-variant font-bold leading-tight">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="w-2 h-2 rounded-full mt-auto transition-all duration-500 group-hover:w-12 group-hover:rounded-full" style={{ backgroundColor: pillar.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl font-black text-on-surface mb-20 uppercase tracking-widest"
        >
          IMPLEMENTATION TIMELINE
        </motion.h3>

        <div className="space-y-24">
          {roadmap.map((yearData, yearIdx) => (
            <div key={yearIdx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className={`h-px flex-1 ${yearIdx === 0 ? 'bg-[#a43700]/20' : 'bg-[#1b6d24]/20'}`} />
                <div className={`text-4xl md:text-5xl font-black ${yearIdx === 0 ? 'text-[#a43700]' : 'text-[#1b6d24]'}`}>
                  {yearData.year}
                </div>
                <div className={`h-px flex-1 ${yearIdx === 0 ? 'bg-[#a43700]/20' : 'bg-[#1b6d24]/20'}`} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {yearData.quarters.map((q, qIdx) => (
                  <motion.div
                    key={qIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: qIdx * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] border border-outline-variant hover:border-primary transition-all group shadow-sm hover:shadow-xl"
                  >
                    <div className="text-3xl font-black mb-2" style={{ color: yearIdx === 0 ? '#a43700' : '#1b6d24' }}>{q.q}</div>
                    <div className="text-sm font-black text-on-surface uppercase tracking-widest mb-3">{q.title}</div>
                    <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{q.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Remarkable Outcomes */}
      <section className="py-24 px-6 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl font-black text-on-surface mb-16 uppercase tracking-widest"
          >
            REMARKABLE OUTCOMES
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {outcomes.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-xl transition-all duration-500 ${i >= 4 ? 'md:col-span-1' : ''}`}
              >
                <div className="p-2 md:p-3 rounded-xl bg-orange-100/50 w-fit mb-4">
                  <stat.icon size={20} className="md:w-6 md:h-6 text-[#a43700]" />
                </div>
                <div className="text-2xl md:text-4xl font-black text-on-surface mb-2">{stat.val}</div>
                <div className="text-[9px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
                {stat.trend && (
                  <div className="mt-2 text-[8px] md:text-[9px] font-black text-orange-600 uppercase tracking-widest opacity-60">
                    {stat.trend}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final Quote Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-bold text-on-surface leading-relaxed"
        >
          Within the period under review, Abia State has demonstrated that systemic education reform is possible in Nigeria when political will is matched with disciplined technical execution.
        </motion.p>
      </section>

      {/* Footer Branding */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src="/pdf_images/page_1_img_4.jpeg" alt="Abia State" width={40} height={40} />
            <div className="flex flex-col">
              <p className="text-[#a43700] text-sm font-black uppercase tracking-widest">AbiaFIRST</p>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Transformation Impact</p>
            </div>
          </div>
          
          <div className="hidden md:block h-8 w-px bg-outline-variant" />
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Image src="/pdf_images/page_1_img_5.png" alt="ERIT" width={32} height={32} className="opacity-80" />
              <span className="font-black text-sm text-on-surface tracking-widest">ERIT</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-on-surface-variant font-black text-[10px] uppercase tracking-[0.3em] opacity-40">
          <span>Official Executive Review</span>
          <span>•</span>
          <span>5</span>
        </div>
      </div>

      {/* Call to Action to Dashboard */}
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:bottom-8 md:right-8 z-40">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 md:py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all group"
          style={{ backgroundColor: "#a43700" }}
        >
          Enter Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
