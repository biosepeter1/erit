"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, TrendingUp, ShieldCheck, BookOpen, CheckCircle,
  Video, MapPin, School, Wifi, Calendar, Layout,
  FileText, BarChart3, Users2, Search, Filter, ArrowRight, MoreVertical, UserPlus, X
} from "lucide-react";
import KpiCard from "@/components/dashboard/KpiCard";
import { DASHBOARD_METRICS } from "@/data/dashboardData";
import { PRODUCTION_MATRIX } from "@/data/productionMatrix";

type Tab = "overview" | "education" | "monitoring" | "personnel";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [showEducationReport, setShowEducationReport] = useState(false);
  const [showMonitoringReport, setShowMonitoringReport] = useState(false);
  const [showPersonnelReport, setShowPersonnelReport] = useState(false);
  const [visitedTabs, setVisitedTabs] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"summary" | "details">("summary");

  // Automatically trigger report modals on first visit to a tab
  useEffect(() => {
    if (!visitedTabs.includes(activeTab)) {
      setVisitedTabs(prev => [...prev, activeTab]);
      setViewMode("summary");
      
      // Delay slightly for smooth transition
      const timer = setTimeout(() => {
        if (activeTab === "overview") setShowReport(true);
        if (activeTab === "education") setShowEducationReport(true);
        if (activeTab === "monitoring") setShowMonitoringReport(true);
        if (activeTab === "personnel") setShowPersonnelReport(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [activeTab, visitedTabs]);
  const [isMatrixExpanded, setIsMatrixExpanded] = useState(false);

  const metrics = DASHBOARD_METRICS;

  const TabButton = ({ id, label, icon: Icon }: { id: Tab, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 ${activeTab === id
        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
        : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"
        }`}
      style={activeTab === id ? { backgroundColor: "#a43700" } : {}}
    >
      <Icon size={18} />
      <span className="text-sm md:text-base">{label}</span>
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-pattern min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col xl:flex-row xl:items-center justify-between gap-8"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
              AbiaFIRST Dashboard
            </h1>
          </div>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl font-medium">
            Monitoring the transformation of Abia State's educational ecosystem through data-driven insights.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-surface-container-high p-1.5 rounded-2xl border border-outline-variant shadow-inner overflow-x-auto no-scrollbar max-w-full">
          <div className="flex gap-1.5 min-w-max">
            <TabButton id="overview" label="Overview" icon={Layout} />
            <TabButton id="education" label="Education" icon={BookOpen} />
            <TabButton id="monitoring" label="Monitoring" icon={MapPin} />
            <TabButton id="personnel" label="Personnel" icon={Users2} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-10">
              {viewMode === "summary" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="lg:w-1/2 relative h-[300px] lg:h-auto border-r border-outline-variant/30">
                      <img src="/pdf_images/page_18_img_1.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="AbiaFIRST Transformation" />
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Strategic Mission</div>
                        <h2 className="text-3xl md:text-4xl font-black leading-tight drop-shadow-2xl">Total Ecosystem <br/>Transformation</h2>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-surface-container-low">
                      <div className="space-y-8">
                        <div>
                          <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-6">
                            The AbiaFIRST program is fundamentally re-engineering the state's educational landscape through digital instructional support and rigorous field monitoring.
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div><div className="text-2xl font-black text-primary">7,454</div><div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Educators</div></div>
                          <div><div className="text-2xl font-black text-secondary">235</div><div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Schools</div></div>
                          <div><div className="text-2xl font-black text-on-surface">31.6k</div><div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Students</div></div>
                        </div>
                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                          <button onClick={() => setViewMode("details")} className="w-full sm:w-auto px-8 py-4 md:py-5 bg-[#a43700] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-primary/20">
                            Explore Detailed Metrics <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface">Live Ecosystem Metrics</span>
                    </div>
                    <button onClick={() => setViewMode("summary")} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Back to Summary</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-t-4 border-secondary relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Resources Ready</div>
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-md">72% done</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-on-surface mb-2">{metrics.overview.totalResources.toLocaleString()}</div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '72%', backgroundColor: '#1b6d24' }} />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-t-4 border-primary relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Students Reached</div>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-md">Monitoring</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-on-surface mb-1">{metrics.overview.studentsReached.toLocaleString()}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant/60">Active digital enrollment</div>
                </div>

                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-t-4 border-blue-500 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Teachers Reached</div>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md">Capacity</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-on-surface mb-1">{metrics.overview.teachersReached.toLocaleString()}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant/60">Certified digital educators</div>
                </div>

                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-t-4 border-tertiary relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">School Visits</div>
                    <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-md">8 LGAs</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-on-surface mb-1">{metrics.overview.schoolsMonitored}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant/60">Direct field monitoring</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-xl font-bold text-on-surface">Program Velocity</h3>
                      <p className="text-sm text-on-surface-variant font-medium mt-1">Implementation speed across priority LGAs</p>
                    </div>
                    <MoreVertical className="text-on-surface-variant cursor-pointer" size={20} />
                  </div>
                  <div className="flex items-end justify-between h-64 gap-6 px-4">
                    {metrics.education.terms.map((v: { label: string; value: number }, i: number) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                        <div className="w-full relative flex flex-col justify-end h-full">
                          {/* Hover Percentage */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-on-surface text-white text-[10px] font-black rounded opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {v.value}%
                          </div>

                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${v.value * 2}px` }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            className="w-full rounded-t-xl transition-all duration-300 group-hover:brightness-110 shadow-sm"
                            style={{
                              backgroundColor: i === 0 ? '#1b6d24' : i === 1 ? '#a43700' : '#8f7066',
                              opacity: 0.4 + (i * 0.15)
                            }}
                          />
                        </div>
                        <span className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest group-hover:text-on-surface transition-colors">{v.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f2f2f2] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-6 -top-6 opacity-10 text-on-surface">
                    <Users2 size={160} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface mb-2">Personnel Capacity</h3>
                    <p className="text-sm text-on-surface-variant font-medium leading-tight">Active implementation team and field staff across the state.</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-7xl font-black text-[#a43700] mb-8">{metrics.overview.totalTrainers.toLocaleString()}</div>
                    <div className="flex gap-2">
                      <button onClick={() => setActiveTab("personnel")} className="flex-1 bg-[#a43700] text-white px-6 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                        View Directory
                      </button>
                      <button className="p-4 bg-white border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container-low transition-colors">
                        <UserPlus size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-on-surface">Transformation Impact</h3>
                    <TrendingUp className="text-secondary" size={20} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary/5 rounded-2xl border border-secondary/10">
                      <div className="text-2xl font-black text-secondary">71.5%</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">Mastery Level</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <div className="text-2xl font-black text-primary">8.9%</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">Low Performers</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase">Skill Application</span>
                        <span className="text-[10px] font-black text-secondary">97.1%</span>
                      </div>
                      <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: '97.1%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase">Learning Gain</span>
                        <span className="text-[10px] font-black text-primary">+21%</span>
                      </div>
                      <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '21%' }} />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setShowPersonnelReport(true)} className="w-full mt-8 py-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center gap-2">
                    Detailed Impact Report <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Measurable Outcomes Section */}
              <div className="mt-16 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-4xl font-black text-on-surface uppercase tracking-tight">Measurable Outcomes</h2>
                    <p className="text-on-surface-variant font-medium mt-2 max-w-2xl">Strategic impact across the three primary missions of the AbiaFIRST Transformation Programme.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded border border-primary/20">Mission 01</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest rounded border border-secondary/20">Mission 02</span>
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-black uppercase tracking-widest rounded border border-tertiary/20">Mission 03</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Performance Graph */}
                  <div className="lg:col-span-7 bg-white border border-outline-variant rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-12">
                      <div>
                        <h3 className="text-xl font-bold text-on-surface">Improvement Velocity</h3>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Program Performance Gains</p>
                      </div>
                      <TrendingUp className="text-primary" size={24} />
                    </div>

                    <div className="space-y-10">
                      {[
                        { label: "Teacher Competency", value: 21, color: "bg-primary", sub: "Mission 1: Professional Development" },
                        { label: "Mastery Level Performance", value: 40.4, color: "bg-tertiary", sub: "Mission 3: School Performance" },
                        { label: "Teacher-Learner Interactions", value: 69.8, color: "bg-secondary", sub: "Mission 3: Leadership" },
                      ].map((bar: { label: string; value: number; color: string; sub: string }, i: number) => (
                        <div key={i} className="space-y-3">
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-sm font-black text-on-surface">{bar.label}</div>
                              <div className="text-[10px] font-bold text-on-surface-variant opacity-60">{bar.sub}</div>
                            </div>
                            <div className="text-2xl font-black text-on-surface">+{bar.value}%</div>
                          </div>
                          <div className="h-4 bg-surface-container-high rounded-full overflow-hidden p-1">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.value}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2 }}
                              className={`h-full rounded-full ${bar.color} shadow-sm`}
                              style={bar.color === 'bg-primary' ? { backgroundColor: '#a43700' } : bar.color === 'bg-secondary' ? { backgroundColor: '#1b6d24' } : {}}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Usage Chart */}
                  <div className="lg:col-span-5 bg-on-surface text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-white/10">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

                    <div>
                      <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Mission 02</h3>
                      <p className="text-white/60 font-medium">Digital Learning Adoption</p>
                    </div>

                    <div className="relative flex justify-center py-10">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle cx="96" cy="96" r="88" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16" />
                        <motion.circle
                          cx="96" cy="96" r="88" fill="none" stroke="#1b6d24" strokeWidth="16"
                          strokeDasharray={2 * Math.PI * 88}
                          initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                          whileInView={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - 0.70) }}
                          transition={{ duration: 2 }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-5xl font-black">70%</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Active Usage</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-xs font-bold opacity-60 uppercase tracking-widest">Implementation Rate</div>
                        <div className="text-xl font-black text-secondary">97.1%</div>
                      </div>
                      <div className="text-[10px] font-bold text-white/40 leading-relaxed text-center">
                        Modern methods adopted across 41,163 curriculum assets.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Table */}
                <div className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-outline-variant bg-surface-container-low/30">
                    <h3 className="text-2xl font-black text-on-surface">Key Achievement Matrix</h3>
                    <p className="text-on-surface-variant font-medium mt-1">Consolidated metrics across all transformation pillars.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                        <tr>
                          <th className="px-8 py-5">Mission Pillar</th>
                          <th className="px-8 py-5">Primary Outcome</th>
                          <th className="px-8 py-5 text-center">Metric 01</th>
                          <th className="px-8 py-5 text-center">Metric 02</th>
                          <th className="px-8 py-5 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                        <tr className="group hover:bg-surface-container-low/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="font-black text-primary uppercase text-xs tracking-widest mb-1">Mission 01</div>
                            <div className="text-sm font-bold text-on-surface">Teacher Quality & PD</div>
                          </td>
                          <td className="px-8 py-6 text-sm text-on-surface-variant font-medium max-w-xs">
                            Improved teaching quality and enhanced classroom delivery.
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">7,454</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">Educators</div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">2,200</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">Trainers</div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded">Achieved</span>
                          </td>
                        </tr>
                        <tr className="group hover:bg-surface-container-low/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="font-black text-secondary uppercase text-xs tracking-widest mb-1">Mission 02</div>
                            <div className="text-sm font-bold text-on-surface">Curriculum Modernization</div>
                          </td>
                          <td className="px-8 py-6 text-sm text-on-surface-variant font-medium max-w-xs">
                            Modern methods adopted through digital resource integration.
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">41,163</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">Assets</div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">70%</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">Active Usage</div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded">Scaling</span>
                          </td>
                        </tr>
                        <tr className="group hover:bg-surface-container-low/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="font-black text-tertiary uppercase text-xs tracking-widest mb-1">Mission 03</div>
                            <div className="text-sm font-bold text-on-surface">School Performance</div>
                          </td>
                          <td className="px-8 py-6 text-sm text-on-surface-variant font-medium max-w-xs">
                            Strengthened management and enhanced accountability.
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">8</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">LGAs</div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="text-lg font-black text-on-surface">69.8%</div>
                            <div className="text-[9px] font-bold uppercase opacity-40">Engagement</div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-black uppercase rounded">Optimizing</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Card */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                <div className="md:w-[40%] h-64 md:h-auto relative">
                  <img
                    src="/pdf_images/page_18_img_1.jpeg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Program Milestone"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded">Growth Metric</span>
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">• 2 hours ago</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface leading-tight mb-4">
                    State-wide Digital Literacy Certification Program Reaches Milestone
                  </h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8 max-w-2xl">
                    The ministry has successfully onboarded over 7,454 teachers in the current phase of the AbiaFIRST Digital Transformation initiative, covering 8 priority LGAs with high-fidelity instructional support.
                  </p>
                  <button
                    onClick={() => setShowReport(true)}
                    className="flex items-center gap-2 text-[#a43700] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all self-start"
                  >
                    Read Detailed Report <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="space-y-10">
              {viewMode === "summary" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="lg:w-1/2 relative h-[300px] lg:h-auto border-r border-outline-variant/30">
                      <img src="/pdf_images/page_10_img_2.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Curriculum Development" />
                      <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
                    </div>
                    <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-surface-container-low">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-secondary">Academic Milestone</div>
                        <h2 className="text-4xl font-black leading-tight text-on-surface mb-6">Digital Curriculum: <br/>The New Standard</h2>
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-10">Digitized the entire state curriculum, producing 28,062 instructional assets.</p>
                        <div className="grid grid-cols-2 gap-8 mb-10">
                          <div><div className="text-3xl font-black text-secondary">72%</div><div className="text-[10px] font-black uppercase tracking-widest opacity-60">Efficiency</div></div>
                          <div><div className="text-3xl font-black text-on-surface">28,062</div><div className="text-[10px] font-black uppercase tracking-widest opacity-60">Assets</div></div>
                        </div>
                        <button onClick={() => setViewMode("details")} className="px-8 py-5 bg-[#1b6d24] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-secondary/20">
                          Explore Production Metrics <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface">Academic Level Analysis</span>
                    </div>
                    <button onClick={() => setViewMode("summary")} className="text-[10px] font-black uppercase tracking-widest text-secondary hover:underline">Back to Summary</button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Resource Type Completion Table */}
                <div className="glass-card border border-outline-variant rounded-3xl p-8 shadow-sm overflow-hidden">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="text-primary" size={24} /> Resource Type Performance
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant">
                        <tr>
                          <th className="px-4 py-3">Resource Type</th>
                          <th className="px-4 py-3 text-right">Expected</th>
                          <th className="px-4 py-3 text-right">Completed</th>
                          <th className="px-4 py-3 text-right">Progress</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                      {metrics.education.resourceTypes.map((item: { label: string; expected: number; completed: number; pct: number }, i: number) => (
                          <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="px-4 py-4 text-sm font-bold">{item.label}</td>
                            <td className="px-4 py-4 text-sm text-right font-medium">{item.expected?.toLocaleString()}</td>
                            <td className="px-4 py-4 text-sm text-right font-medium">{item.completed?.toLocaleString()}</td>
                            <td className="px-4 py-4 text-right">
                              <div className="flex items-center justify-end gap-3">
                                <div className="w-16 h-2 bg-surface-container-high rounded-full overflow-hidden">
                                  <div className="bg-primary h-full" style={{ width: `${item.pct}%`, backgroundColor: '#a43700' }} />
                                </div>
                                <span className="text-xs font-black w-8">{item.pct}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Level Metrics Table */}
                <div className="bg-white border border-outline-variant rounded-3xl p-8 shadow-sm overflow-hidden">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={24} /> Academic Level Metrics
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant">
                        <tr>
                          <th className="px-4 py-3">Level</th>
                          <th className="px-4 py-3 text-right">Expected</th>
                          <th className="px-4 py-3 text-right">Done</th>
                          <th className="px-4 py-3 text-right">Digital %</th>
                          <th className="px-4 py-3 text-right">Video %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                        {metrics.education.levels.map((level: { label: string; expected: number; completed: number; pct: number; videoPct: number }, i: number) => (
                          <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="px-4 py-4 text-sm font-bold">{level.label}</td>
                            <td className="px-4 py-4 text-sm text-right font-medium">{level.expected?.toLocaleString()}</td>
                            <td className="px-4 py-4 text-sm text-right font-medium">{level.completed?.toLocaleString()}</td>
                            <td className="px-4 py-4 text-right text-xs font-black text-secondary">{level.pct}%</td>
                            <td className="px-4 py-4 text-right text-xs font-black text-primary">{level.videoPct}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Termly Resource Matrix */}
              <div className="bg-[#0f0f0f] text-white p-10 rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5">
                <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
                  <div className="p-1.5 bg-secondary/20 rounded-lg">
                    <TrendingUp className="text-secondary" size={20} />
                  </div>
                  Term-wise Resource Completion Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Resource Type</th>
                        <th className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Term 1 %</th>
                        <th className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Term 2 %</th>
                        <th className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Term 3 %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metrics.education.resourceTypes.map((res: { label: string; t1: number; t2: number; t3: number }, i: number) => (
                        <tr key={i} className="group">
                          <td className="px-8 py-6 font-bold text-base border-r border-white/5">{res.label}</td>
                          <td className="px-8 py-6 text-center bg-[#1b6d24]/5 border-r border-white/5">
                            <span className="text-[#4caf50] font-black text-lg">{res.t1}%</span>
                          </td>
                          <td className="px-8 py-6 text-center bg-[#a43700]/5 border-r border-white/5">
                            <span className="text-[#ff5722] font-black text-lg">{res.t2}%</span>
                          </td>
                          <td className="px-8 py-6 text-center bg-white/[0.02]">
                            <span className="text-white/30 font-black text-lg">{res.t3}%</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Production Registry Matrix */}
              <div className="bg-white border border-outline-variant rounded-3xl shadow-sm overflow-hidden mt-8">
                <div className="p-8 border-b border-outline-variant bg-surface-container-low/50 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Layout className="text-primary" size={24} /> Detailed Production Registry
                    </h3>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Granular status of digital curriculum assets by term and level.</p>
                  </div>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
                    <input
                      type="text"
                      placeholder="Filter matrix..."
                      className="w-full pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className={`overflow-x-auto overflow-y-auto no-scrollbar transition-all duration-500 ${isMatrixExpanded ? 'max-h-none' : 'max-h-[600px]'}`}>
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant sticky top-0 z-20 shadow-sm">
                      <tr>
                        <th className="px-8 py-4">Term</th>
                        <th className="px-8 py-4">Level</th>
                        <th className="px-8 py-4">Resource</th>
                        <th className="px-8 py-4 text-center">Expected</th>
                        <th className="px-8 py-4 text-center">Done</th>
                        <th className="px-8 py-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {(isMatrixExpanded
                        ? PRODUCTION_MATRIX
                        : PRODUCTION_MATRIX.slice(0, 15)
                      ).filter(item =>
                        item.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.term.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((item: { term: string; level: string; type: string; expected: number; completed: number; status: string; pct: number }, i: number) => (
                        <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                          <td className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant">{item.term}</td>
                          <td className="px-8 py-4 text-sm font-bold text-on-surface">{item.level}</td>
                          <td className="px-8 py-4 text-sm font-medium text-on-surface-variant">{item.type}</td>
                          <td className="px-8 py-4 text-sm text-center font-bold">{item.expected}</td>
                          <td className="px-8 py-4 text-sm text-center font-bold">{item.completed}</td>
                          <td className="px-8 py-4 text-right">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${item.pct === 100 ? 'bg-secondary/10 text-secondary' :
                              item.pct > 0 ? 'bg-primary/10 text-primary' : 'bg-outline-variant/20 text-on-surface-variant/30'
                              }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-surface-container-low/30 border-t border-outline-variant text-center">
                  <button
                    onClick={() => setIsMatrixExpanded(!isMatrixExpanded)}
                    className="text-sm font-black text-primary uppercase tracking-widest hover:underline"
                  >
                    {isMatrixExpanded ? 'Show Fewer Records' : `View All ${PRODUCTION_MATRIX.length} Records`}
                  </button>
                </div>
              </div>
              {/* Visual Analysis Section - Moved here */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-16">
                {/* Term Completion Chart */}
                <div className="bg-[#a43700] rounded-[2.5rem] p-10 relative overflow-hidden shadow-xl">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Output Completion by Term (%)</h3>
                    <div className="flex items-end justify-between gap-4 h-48">
                      {metrics.education.terms.map((term: any, i: number) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                          <div className="w-full relative flex flex-col justify-end h-full">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${term.value}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`w-full ${term.color} rounded-t-xl shadow-lg relative`}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-black text-white">{term.value}%</div>
                            </motion.div>
                          </div>
                          <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">{term.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resource Distribution Donut */}
                <div className="bg-white border border-outline-variant rounded-[2.5rem] p-10 shadow-sm flex flex-col md:flex-row items-center gap-10">
                  <div className="relative w-48 h-48 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                      {metrics.education.resourceTypes.map((type: any, i: number) => {
                        const strokeDasharray = `${(type.pct * 251.2) / 100} 251.2`;
                        let offset = 0;
                        for (let j = 0; j < i; j++) {
                          offset += (metrics.education.resourceTypes[j].pct * 251.2) / 100;
                        }
                        return (
                          <motion.circle
                            key={i}
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: -offset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            cx="50" cy="50" r="40"
                            fill="transparent"
                            stroke={i === 0 ? "#a43700" : i === 1 ? "#1b6d24" : i === 2 ? "#f29900" : i === 3 ? "#000000" : "#64748b"}
                            strokeWidth="12"
                            strokeDasharray="251.2"
                            strokeLinecap="round"
                          />
                        );
                      })}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl font-black text-on-surface">72%</div>
                      <div className="text-[8px] font-black uppercase text-on-surface-variant opacity-40">Overall</div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-black text-on-surface uppercase tracking-tight mb-4">Resource Status</h3>
                    {metrics.education.resourceTypes.slice(0, 4).map((type: any, i: number) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#a43700]" : i === 1 ? "bg-[#1b6d24]" : i === 2 ? "bg-[#f29900]" : "bg-black"}`} />
                          <span className="text-xs font-bold text-on-surface-variant">{type.label}</span>
                        </div>
                        <span className="text-xs font-black text-on-surface">{type.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Video Completion by Level */}
                <div className="bg-white border border-outline-variant rounded-[2.5rem] p-10 shadow-sm">
                  <h3 className="text-xl font-black text-on-surface uppercase tracking-tight mb-8">Video Completion by Level (%)</h3>
                  <div className="space-y-6">
                    {metrics.education.levels.map((level: any, i: number) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">{level.label}</span>
                          <span className="text-xs font-black text-secondary">{level.videoPct}%</span>
                        </div>
                        <div className="h-2 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level.videoPct}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-secondary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completion by Resource Type Horizontal */}
                <div className="bg-on-surface rounded-[2.5rem] p-10 shadow-xl text-white">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-8">Completion by Resource Type (%)</h3>
                  <div className="space-y-6">
                    {metrics.education.resourceTypes.map((type: any, i: number) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{type.label}</span>
                          <span className="text-sm font-black">{type.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${type.pct}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resource Completion Trend Line Chart */}
              <div className="bg-white border border-outline-variant rounded-[2.5rem] p-10 mb-16 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-8">Resource Completion Trend (%)</h3>
                  <div className="h-64 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 100">
                      {/* Grid Lines */}
                      {[0, 25, 50, 75, 100].map((val) => (
                        <line key={val} x1="0" y1={100 - val} x2="1000" y2={100 - val} stroke="#e2e8f0" strokeWidth="0.5" />
                      ))}
                      {/* Trend Line */}
                      <motion.path
                        d="M 0 4 L 333 8 L 666 78 L 1000 78"
                        fill="none"
                        stroke="#a43700"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      {/* Points */}
                      <circle cx="0" cy="4" r="6" fill="#a43700" stroke="white" strokeWidth="2" />
                      <circle cx="333" cy="8" r="6" fill="#a43700" stroke="white" strokeWidth="2" />
                      <circle cx="666" cy="78" r="6" fill="#a43700" stroke="white" strokeWidth="2" />
                    </svg>
                    <div className="flex justify-between mt-6 px-2">
                      <div className="text-[10px] font-black uppercase text-on-surface-variant">Term 1 (96%)</div>
                      <div className="text-[10px] font-black uppercase text-on-surface-variant">Term 2 (92%)</div>
                      <div className="text-[10px] font-black uppercase text-on-surface-variant">Term 3 (22%)</div>
                      <div className="text-[10px] font-black uppercase text-on-surface-variant">Projected (22%)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LGA Asset & School Matrix */}
              <div className="bg-white border border-outline-variant rounded-3xl shadow-sm overflow-hidden mb-16">
                <div className="p-6 border-b border-outline-variant bg-surface-container-low/50">
                  <h3 className="text-xl font-bold">LGA Asset & School Matrix</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant">
                      <tr>
                        <th className="px-6 py-4 border-b border-outline-variant">LGA / Zone</th>
                        <th className="px-6 py-4 border-b border-outline-variant text-center">Total Assets</th>
                        <th className="px-6 py-4 border-b border-outline-variant text-center">Schools Visited</th>
                        <th className="px-6 py-4 border-b border-outline-variant text-center">Video Completed</th>
                        <th className="px-6 py-4 border-b border-outline-variant text-center">Status</th>
                        <th className="px-6 py-4 border-b border-outline-variant text-right">Completion %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {metrics.monitoring.lgaReach.map((lga: any, i: number) => (
                        <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                          <td className="px-6 py-4 text-sm font-bold">{lga.name}</td>
                          <td className="px-6 py-4 text-sm text-center font-medium">5,145</td>
                          <td className="px-6 py-4 text-sm text-center font-medium">{lga.count}</td>
                          <td className="px-6 py-4 text-sm text-center font-medium text-secondary">24</td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-black uppercase">Active</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right font-black text-primary">72%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Education Milestone Feature Card */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow mt-10">
                <div className="md:w-[40%] h-64 md:h-auto relative">
                  <img
                    src="/pdf_images/page_6_img_1.jpeg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Curriculum Development"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded">Academic Progress</span>
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">• Updated Today</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface leading-tight mb-4">
                    Term 1 & 2 Digital Curriculum Matrix Successfully Completed
                  </h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8 max-w-2xl">
                    A major milestone has been reached with 100% of Schemes of Work and Lesson Plans now digitised for the current academic session, covering ECCDE through JSS.
                  </p>
                  <button
                    onClick={() => setShowEducationReport(true)}
                    className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all self-start"
                  >
                    Read Production Report <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        )}

          {/* MONITORING TAB */}
          {activeTab === "monitoring" && (
            <div className="space-y-10">
              {viewMode === "summary" ? (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="lg:w-1/2 relative h-[300px] lg:h-auto border-r border-outline-variant/30">
                      <img src="/pdf_images/page_2_img_1.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Field Monitoring" />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                    </div>
                    <div className="lg:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-surface-container-low">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-primary">Field Intelligence</div>
                        <h2 className="text-4xl font-black leading-tight text-on-surface mb-6">Rigorous Field <br/>Verification</h2>
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-10">Deploying field teams across 8 LGAs to verify digital adoption and instructional quality.</p>
                        <div className="grid grid-cols-3 gap-6 mb-10">
                          <div><div className="text-2xl font-black text-primary">112</div><div className="text-[9px] font-black uppercase tracking-widest opacity-60">Visits</div></div>
                          <div><div className="text-2xl font-black text-secondary">90.3%</div><div className="text-[9px] font-black uppercase tracking-widest opacity-60">Attendance</div></div>
                          <div><div className="text-2xl font-black text-on-surface">8</div><div className="text-[9px] font-black uppercase tracking-widest opacity-60">LGAs</div></div>
                        </div>
                        <button onClick={() => setViewMode("details")} className="px-8 py-5 bg-[#a43700] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-primary/20">
                          Explore Field Data <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface">Field Operations Dashboard</span>
                    </div>
                    <button onClick={() => setViewMode("summary")} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Back to Summary</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                  <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2">Joint Visits</div>
                  <div className="text-4xl font-black text-primary">{metrics.monitoring.visitBreakdown.joint}</div>
                  <div className="text-xs font-bold mt-1 text-on-surface-variant/60">Govt + M&E Personnel</div>
                </div>
                <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                  <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2">Validation</div>
                  <div className="text-4xl font-black text-secondary">{metrics.monitoring.visitBreakdown.validation}</div>
                  <div className="text-xs font-bold mt-1 text-on-surface-variant/60">M&E Team Verification</div>
                </div>
                <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                  <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2">SIP Visits</div>
                  <div className="text-4xl font-black text-tertiary">{metrics.monitoring.visitBreakdown.sip}</div>
                  <div className="text-xs font-bold mt-1 text-on-surface-variant/60">Support Visits</div>
                </div>
                <div className="bg-primary text-white rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#a43700' }}>
                  <div className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">School Coverage</div>
                  <div className="text-4xl font-black">7.7%</div>
                  <div className="text-xs font-bold mt-1 opacity-80">112 of 1,461 Schools</div>
                </div>
              </div>

              {/* Monthly Trend Table */}
              <div className="bg-white border border-outline-variant rounded-3xl p-8 shadow-sm overflow-hidden">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="text-primary" size={24} /> Monthly Monitoring Trends
                </h3>
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant">
                      <tr>
                        <th className="px-4 py-3">Month</th>
                        <th className="px-4 py-3 text-center">Total Visits</th>
                        <th className="px-4 py-3 text-center">Joint</th>
                        <th className="px-4 py-3 text-center">Validation</th>
                        <th className="px-4 py-3 text-center">SIP</th>
                        <th className="px-4 py-3 text-right">Teachers</th>
                        <th className="px-4 py-3 text-right">Students</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {metrics.monitoring.monthlyTrends.map((trend: { month: string; visits: number; joint: number; validation: number; sip: number; teachers: number; students: number }, i: number) => (
                        <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className="px-4 py-4 text-sm font-bold">{trend.month}</td>
                          <td className="px-4 py-4 text-sm text-center font-black text-primary">{trend.visits}</td>
                          <td className="px-4 py-4 text-sm text-center font-medium">{trend.joint}</td>
                          <td className="px-4 py-4 text-sm text-center font-medium">{trend.validation}</td>
                          <td className="px-4 py-4 text-sm text-center font-medium">{trend.sip}</td>
                          <td className="px-4 py-4 text-sm text-right font-black text-secondary">{trend.teachers.toLocaleString()}</td>
                          <td className="px-4 py-4 text-sm text-right font-black text-tertiary">{trend.students.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Geographical Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 glass-card border border-outline-variant rounded-3xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold mb-6">LGA Visit Distribution</h3>
                  <div className="space-y-4">
                    {metrics.monitoring.lgaReach.map((lga: { name: string; count: number }, i: number) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lga.name}</span>
                        <div className="flex items-center gap-3 flex-1 px-4">
                          <div className="h-1.5 bg-surface-container-high flex-1 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${(lga.count / 20) * 100}%`, backgroundColor: '#a43700' }} />
                          </div>
                        </div>
                        <span className="text-xs font-black">{lga.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 bg-on-surface rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-pattern" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Impact Summary</h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Monitoring activity peaked in June with 25 site visits, reaching {metrics.monitoring.monthlyTrends[5].students.toLocaleString()} students in a single month. Average staff attendance recorded stands at 90.3%.
                      </p>
                    </div>
                    <div className="flex gap-12 mt-8">
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Total Coverage</div>
                        <div className="text-3xl font-black text-secondary">112 Schools</div>
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Staff Attendance</div>
                        <div className="text-3xl font-black text-primary">90.3%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitoring Milestone Feature Card */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow mt-10">
                <div className="md:w-[40%] h-64 md:h-auto relative">
                  <img
                    src="/pdf_images/page_2_img_1.jpeg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Field Monitoring"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded">Field Reach</span>
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">• H1 2024 Report</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface leading-tight mb-4">
                    State-wide Field Monitoring Reach Expands to 112 Primary Schools
                  </h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8 max-w-2xl">
                    Our field teams have successfully verified digital transformation adoption across 8 LGAs, recording a consistent 90.3% staff attendance rate during the Q2 validation cycle.
                  </p>
                  <button
                    onClick={() => setShowMonitoringReport(true)}
                    className="flex items-center gap-2 text-[#a43700] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all self-start"
                  >
                    Read Monitoring Report <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        )}

          {/* PERSONNEL TAB */}
          {activeTab === "personnel" && (
            <div className="space-y-10">
              {viewMode === "summary" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="lg:w-1/2 relative h-[300px] lg:h-auto border-r border-outline-variant/30">
                      <img src="/pdf_images/page_10_img_2.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Personnel Development" />
                      <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                    </div>
                    <div className="lg:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-surface-container-low">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-secondary">Human Capital</div>
                        <h2 className="text-4xl font-black leading-tight text-on-surface mb-6">World-Class Trainer <br/>Network</h2>
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-10">Empowering 7,454 educators with digital tools and international-standard pedagogical training.</p>
                        <div className="grid grid-cols-2 gap-8 mb-10">
                          <div><div className="text-3xl font-black text-secondary">7,454</div><div className="text-[10px] font-black uppercase tracking-widest opacity-60">Certified</div></div>
                          <div><div className="text-3xl font-black text-on-surface">2,200</div><div className="text-[10px] font-black uppercase tracking-widest opacity-60">Trainers</div></div>
                        </div>
                        <button onClick={() => setViewMode("details")} className="px-8 py-5 bg-[#1b6d24] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-secondary/20">
                          View Personnel Directory <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface">Certified Personnel Database</span>
                    </div>
                    <button onClick={() => setViewMode("summary")} className="text-[10px] font-black uppercase tracking-widest text-secondary hover:underline">Back to Summary</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-on-surface text-white p-6 rounded-2xl shadow-lg border-4 border-white">
                  <div className="text-4xl font-black">{metrics.personnel.stats.total.toLocaleString()}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Trainers</div>
                </div>
                <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-black text-secondary">{metrics.personnel.stats.lmts}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Lead Trainers (LMT)</div>
                </div>
                <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-black text-primary">{metrics.personnel.stats.mts.toLocaleString()}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Master Trainers (MT)</div>
                </div>
                <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-black text-tertiary">{metrics.personnel.stats.lgas}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Zones Covered</div>
                </div>
              </div>

              {/* Personnel Data Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Level Breakdown Table */}
                <div className="bg-white border border-outline-variant rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Users className="text-primary" size={24} /> Trainers by Level
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant">
                        <tr>
                          <th className="px-4 py-3">Level</th>
                          <th className="px-4 py-3 text-center">LMT</th>
                          <th className="px-4 py-3 text-center">MT</th>
                          <th className="px-4 py-3 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                        {(metrics.personnel.levelBreakdown as { label: string; lmt: number; mt: number; total: number }[]).map((row, i) => (
                          <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="px-4 py-4 text-sm font-bold">{row.label}</td>
                            <td className="px-4 py-4 text-sm text-center font-medium">{row.lmt}</td>
                            <td className="px-4 py-4 text-sm text-center font-medium">{row.mt.toLocaleString()}</td>
                            <td className="px-4 py-4 text-sm text-right font-black text-primary">{row.total.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* LGA Breakdown Table */}
                <div className="bg-white border border-outline-variant rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="text-secondary" size={24} /> Trainers by LGA / Zone
                  </h3>
                  <div className="overflow-x-auto max-h-[300px] no-scrollbar">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-wider text-on-surface-variant sticky top-0">
                        <tr>
                          <th className="px-4 py-3">LGA / Zone</th>
                          <th className="px-4 py-3 text-center">LMT</th>
                          <th className="px-4 py-3 text-center">MT</th>
                          <th className="px-4 py-3 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                        {(metrics.personnel.lgaBreakdown as { name: string; lmt: number; mt: number; total: number }[]).map((row, i) => (
                          <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="px-4 py-4 text-sm font-bold">{row.name}</td>
                            <td className="px-4 py-4 text-sm text-center font-medium">{row.lmt}</td>
                            <td className="px-4 py-4 text-sm text-center font-medium">{row.mt}</td>
                            <td className="px-4 py-4 text-sm text-right font-black text-secondary">{row.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Trend: Trainers by LGA Chart */}
              <div className="bg-[#f29900] rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute top-0 right-0 w-full h-full bg-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                    <div>
                      <h3 className="text-4xl font-black text-on-surface uppercase tracking-tight leading-none">Trend: Trainers by LGA</h3>
                      <p className="text-on-surface/60 font-bold mt-2">Geographic distribution of educational personnel across 16 LGAs.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-on-surface/10 rounded-full border border-on-surface/10">
                      <div className="w-3 h-3 rounded bg-on-surface shadow-sm" />
                      <span className="text-[10px] font-black uppercase text-on-surface">Personnel Count</span>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {(metrics.personnel.lgaBreakdown as { name: string; total: number }[]).map((lga, i) => (
                      <div key={i} className="group flex items-center gap-4 md:gap-6">
                        <div className="w-24 md:w-48 shrink-0">
                          <div className="text-xs font-black text-on-surface/60 uppercase tracking-widest truncate group-hover:text-on-surface transition-colors">{lga.name}</div>
                        </div>
                        <div className="flex-1 h-3 bg-on-surface/5 rounded-full overflow-hidden relative border border-on-surface/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(lga.total / 160) * 100}%` }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full bg-on-surface shadow-lg shadow-black/5"
                          />
                        </div>
                        <div className="w-12 text-right">
                          <span className="text-sm font-black text-on-surface">{lga.total}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-8 border-t border-on-surface/10 flex justify-between items-center text-[10px] font-black uppercase text-on-surface/30 tracking-[0.3em]">
                    <span>Scale: 0 - 160 Personnel</span>
                    <div className="flex gap-4">
                      <span>Abia State Education Transformation</span>
                      <span>•</span>
                      <span>verified data</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-white border border-outline-variant rounded-3xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-low/50">
                  <h3 className="text-xl font-bold">Personnel Registry</h3>
                  <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                    <input
                      type="text"
                      placeholder="Search by name, zone or level..."
                      className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-xs font-black uppercase tracking-wider text-on-surface-variant">
                      <tr>
                        <th className="px-8 py-4">Name</th>
                        <th className="px-8 py-4">Type</th>
                        <th className="px-8 py-4">Level</th>
                        <th className="px-8 py-4">Zone/LGA</th>
                        <th className="px-8 py-4">Organization/School</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      {[...metrics.personnel.trainers, ...metrics.personnel.masterTrainers]
                        .filter(p =>
                          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p as any).zone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p as any).lga?.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((person: { name: string; level: string; type?: string; zone?: string; lga?: string; organization?: string; school?: string }, i: number) => (
                          <tr key={i} className="hover:bg-surface-container-low/50 transition-colors group">
                            <td className="px-8 py-4 font-bold text-on-surface">{person.name}</td>
                            <td className="px-8 py-4">
                              <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${(person as any).type === 'LMT' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
                                {(person as any).type || 'MT'}
                              </span>
                            </td>
                            <td className="px-8 py-4 text-sm font-medium text-on-surface-variant">{person.level}</td>
                            <td className="px-8 py-4 text-sm font-medium text-on-surface-variant">{(person as any).zone || (person as any).lga}</td>
                            <td className="px-8 py-4 text-sm font-medium text-on-surface-variant">{(person as any).organization || (person as any).school}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-surface-container-low/30 border-t border-outline-variant text-center">
                  <p className="text-xs font-bold text-on-surface-variant italic">Showing top results from a database of 7,454 verified educational personnel.</p>
                </div>
              </div>

              {/* Personnel Milestone Feature Card */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow mt-10">
                <div className="md:w-[40%] h-64 md:h-auto relative">
                  <img
                    src="/pdf_images/page_10_img_2.jpeg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Trainer Development"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded">Human Capital</span>
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">• Certified Trainers</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface leading-tight mb-4">
                    Scaling Global Expertise: 7,454 Educators Fully Certified
                  </h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8 max-w-2xl">
                    Our state-wide trainer network has achieved full certification, with 200 Lead Master Trainers and 2,000 Master Trainers now overseeing digital adoption across the 8 piloted LGAs.
                  </p>
                  <button
                    onClick={() => setShowPersonnelReport(true)}
                    className="flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all self-start"
                  >
                    Read Personnel Report <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        )}
        </motion.div>
      </AnimatePresence>

      {/* Detailed Report Modal */}
      <AnimatePresence>
        {showReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReport(false)}
              className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => { setShowReport(false); setViewMode("details"); }}
                className="absolute right-6 top-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-on-surface transition-colors"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/3 bg-primary p-6 md:p-10 text-white flex flex-col justify-between shrink-0" style={{ backgroundColor: '#a43700' }}>
                <div>
                  <div className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-4 md:mb-6">Internal Audit</div>
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4">AbiaFIRST Impact</h2>
                  <p className="text-white/70 font-medium leading-relaxed text-sm md:text-base">
                    A technical summary of the pilot scale-up and instructional transformation across 8 LGAs.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6 mt-6 md:mt-0">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Status</div>
                    <div className="text-lg md:text-xl font-bold">Pilot Completed</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Coverage</div>
                    <div className="text-lg md:text-xl font-bold">8 LGAs Verified</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-16 overflow-y-auto no-scrollbar bg-white">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-black text-on-surface mb-6">Executive Summary</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
                    The AbiaFIRST transformation program has achieved its pilot objectives. As of March 2026, the programme successfully scaled from 30 to 235 school visits, reaching over 7,000 educators across 8 priority LGAs.
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                      <div className="text-3xl font-black text-primary mb-1">7,454</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Trainers Certified</div>
                    </div>
                    <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                      <div className="text-3xl font-black text-secondary mb-1">235</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Schools Visited</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-4">Key Findings</h3>
                  <ul className="space-y-4 mb-12">
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold text-xs">1</div>
                      <p className="text-on-surface-variant font-medium text-sm">Tiered cascade integration has stabilized with 2,000 Master Trainers and 200 Lead MTs driving school-based professional development.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold text-xs">2</div>
                      <p className="text-on-surface-variant font-medium text-sm">Digital resource accessibility reached peak capacity with 41,163 instructional assets developed and deployed.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold text-xs">3</div>
                      <p className="text-on-surface-variant font-medium text-sm">Monitoring velocity increased 110% during the Oct–Mar 2026 window, providing high-fidelity data across 8 transformed LGAs.</p>
                    </li>
                  </ul>

                  <button
                    onClick={() => { setShowReport(false); setViewMode("details"); }}
                    className="w-full py-4 bg-on-surface text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-on-surface/90 transition-colors"
                  >
                    Close Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Education Detailed Report Modal */}
      <AnimatePresence>
        {showEducationReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEducationReport(false)}
              className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => { setShowEducationReport(false); setViewMode("details"); }}
                className="absolute right-6 top-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-on-surface transition-colors"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/3 bg-secondary p-6 md:p-10 text-white flex flex-col justify-between shrink-0" style={{ backgroundColor: '#1b6d24' }}>
                <div>
                  <div className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-4 md:mb-6">Production Report</div>
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4">Curriculum Matrix</h2>
                  <p className="text-white/70 font-medium leading-relaxed text-sm md:text-base">
                    Detailed breakdown of digital resource production across all academic tiers.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6 mt-6 md:mt-0">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Total Assets</div>
                    <div className="text-lg md:text-xl font-bold">28,062 / 38,833</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Efficiency</div>
                    <div className="text-lg md:text-xl font-bold">72% Completed</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-16 overflow-y-auto no-scrollbar bg-white">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-black text-on-surface mb-6">Production Overview</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
                    The digital curriculum team has successfully finalized the schemes and lesson plans for the first two terms of the 2023/2024 academic session.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                      <CheckCircle className="text-secondary" size={20} />
                      <div>
                        <div className="text-sm font-bold">Schemes of Work</div>
                        <div className="text-xs text-on-surface-variant">77% Overall Progress</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                      <CheckCircle className="text-secondary" size={20} />
                      <div>
                        <div className="text-sm font-bold">Lesson Plans</div>
                        <div className="text-xs text-on-surface-variant">75% Overall Progress</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-4">Term-wise Progress</h3>
                  <div className="space-y-4 mb-12">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div><span className="text-xs font-black uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">Term 1</span></div>
                        <div className="text-right"><span className="text-xs font-bold inline-block text-secondary">100%</span></div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container-highest">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary"></div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div><span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">Term 2</span></div>
                        <div className="text-right"><span className="text-xs font-bold inline-block text-primary">92%</span></div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container-highest">
                        <div style={{ width: "92%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div><span className="text-xs font-black uppercase tracking-widest text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">Term 3</span></div>
                        <div className="text-right"><span className="text-xs font-bold inline-block text-on-surface-variant">24%</span></div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container-highest">
                        <div style={{ width: "24%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-on-surface-variant"></div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => { setShowEducationReport(false); setViewMode("details"); }}
                    className="w-full py-4 bg-on-surface text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-on-surface/90 transition-colors"
                  >
                    Close Production Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Monitoring Detailed Report Modal */}
      <AnimatePresence>
        {showMonitoringReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMonitoringReport(false)}
              className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => { setShowMonitoringReport(false); setViewMode("details"); }}
                className="absolute right-6 top-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-on-surface transition-colors"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/3 bg-primary p-6 md:p-10 text-white flex flex-col justify-between shrink-0" style={{ backgroundColor: '#a43700' }}>
                <div>
                  <div className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-4 md:mb-6">H1 2024 Report</div>
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4">Field Reach Analysis</h2>
                  <p className="text-white/70 font-medium leading-relaxed text-sm md:text-base">
                    Monitoring the transformation of Abia's educational ecosystem through on-site verification.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6 mt-6 md:mt-0">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Total Visits</div>
                    <div className="text-lg md:text-xl font-bold">112 Verified Sessions</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Impact</div>
                    <div className="text-lg md:text-xl font-bold">31,660 Students Reached</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-16 overflow-y-auto no-scrollbar bg-white">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-black text-on-surface mb-6">Monitoring Performance</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
                    Field monitoring activity saw a significant peak in June 2024, driven by Term 3 validation visits and the introduction of School Improvement Plans (SIP).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                      <div className="text-2xl font-black text-orange-700">42</div>
                      <div className="text-[10px] font-bold text-orange-600 uppercase">Joint Visits</div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                      <div className="text-2xl font-black text-green-700">54</div>
                      <div className="text-[10px] font-bold text-green-600 uppercase">Validation</div>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                      <div className="text-2xl font-black text-blue-700">16</div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase">SIP Visits</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-4">LGA Coverage Intensity</h3>
                  <div className="space-y-4 mb-12">
                    {(metrics.monitoring.lgaReach as { name: string; count: number }[]).slice(0, 4).map((lga, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                        <span className="font-bold">{lga.name}</span>
                        <div className="flex items-center gap-4">
                          <div className="h-1.5 w-24 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${(lga.count / 20) * 100}%` }} />
                          </div>
                          <span className="text-xs font-black">{lga.count} Visits</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => { setShowMonitoringReport(false); setViewMode("details"); }}
                    className="w-full py-4 bg-on-surface text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-on-surface/90 transition-colors"
                  >
                    Close Monitoring Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Personnel Detailed Report Modal */}
      <AnimatePresence>
        {showPersonnelReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPersonnelReport(false)}
              className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => { setShowPersonnelReport(false); setViewMode("details"); }}
                className="absolute right-6 top-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-on-surface transition-colors"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/3 bg-secondary p-8 md:p-10 text-white flex flex-col justify-between shrink-0" style={{ backgroundColor: '#1b6d24' }}>
                <div className="relative">
                  <div className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-4">Staffing Report</div>
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-3">Human Capital Index</h2>
                  <p className="text-white/70 font-medium leading-relaxed text-xs md:text-base opacity-80">
                    Analyzing the growth and deployment of certified educational trainers across Abia State.
                  </p>
                </div>
                <div className="flex md:flex-col gap-6 md:gap-8 mt-6 md:mt-0 pt-6 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Active Force</div>
                    <div className="text-lg md:text-xl font-bold">7,454 Personnel</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Zone Reach</div>
                    <div className="text-lg md:text-xl font-bold">8 Pilot LGAs</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-16 overflow-y-auto no-scrollbar bg-white">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-black text-on-surface mb-6">Trainer Growth & Deployment</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
                    The March 2026 milestone reflects a significant scale-up in specialized human capital, supporting the state-wide rollout of the digital curriculum in 235 verified schools.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                      <div className="p-3 bg-secondary/10 rounded-xl">
                        <Users2 className="text-secondary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-on-surface">200 Lead Master Trainers</div>
                        <div className="text-[10px] font-black text-on-surface-variant/60 uppercase">Certified Specialists</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Users2 className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-on-surface">2,000 Master Trainers</div>
                        <div className="text-[10px] font-black text-on-surface-variant/60 uppercase">Field Educators</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-6">Training Impact & Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
                    <div className="bg-surface-container-low p-5 md:p-6 rounded-3xl border border-outline-variant/30">
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Mastery-Level Increase</div>
                      <div className="flex items-end gap-3 mb-4">
                        <div className="text-3xl md:text-4xl font-black text-on-surface">{(metrics as any).impact.performance.masteryIncrease.to}%</div>
                        <div className="text-[10px] md:text-sm font-bold text-secondary mb-1 leading-tight">from {(metrics as any).impact.performance.masteryIncrease.from}%</div>
                      </div>
                      <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                         <div className="h-full bg-secondary" style={{ width: `${(metrics as any).impact.performance.masteryIncrease.to}%` }} />
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-5 md:p-6 rounded-3xl border border-outline-variant/30">
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Low Performers Reduction</div>
                      <div className="flex items-end gap-3 mb-4">
                        <div className="text-3xl md:text-4xl font-black text-primary">{(metrics as any).impact.performance.lowPerformersDecrease.to}%</div>
                        <div className="text-[10px] md:text-sm font-bold text-primary/60 mb-1 leading-tight">from {(metrics as any).impact.performance.lowPerformersDecrease.from}%</div>
                      </div>
                      <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                         <div className="h-full bg-primary" style={{ width: `${(metrics as any).impact.performance.lowPerformersDecrease.from}%` }} />
                         <div className="h-full bg-primary/20 -mt-2" style={{ width: `${(metrics as any).impact.performance.lowPerformersDecrease.to}%` }} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-6">Score Distribution (Cascade Training)</h3>
                  <div className="space-y-4 mb-12">
                    {(metrics as any).impact.scoreDistribution.map((score: any, i: number) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-on-surface">{score.label}</span>
                          <span className="text-xs font-black text-on-surface">{score.value}%</span>
                        </div>
                        <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${score.value}%` }}
                            viewport={{ once: true }}
                            className={`h-full ${score.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-[#00121a] rounded-3xl text-white mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <CheckCircle size={80} />
                    </div>
                    <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Classroom Implementation</div>
                      <div className="text-3xl font-black mb-4">{(metrics as any).impact.classroom.skillApplication}%</div>
                      <p className="text-sm text-white/70 font-medium leading-relaxed">
                        Of observed teachers demonstrated consistent use of new skills, with strongest performance in teacher-learner interactions (69.8%).
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-4">Level-wise Trainer Concentration</h3>
                  <div className="space-y-3 mb-12">
                    {(metrics.personnel.levelBreakdown as { label: string; lmt: number; mt: number; total: number }[]).map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10">
                        <span className="font-bold text-on-surface">{row.label}</span>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <div className="text-xs font-black text-secondary">{row.lmt} LMT</div>
                            <div className="text-xs font-black text-primary">{row.mt} MT</div>
                          </div>
                          <div className="w-12 h-12 flex items-center justify-center bg-on-surface text-white rounded-full text-xs font-black">
                            {row.total}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => { setShowPersonnelReport(false); setViewMode("details"); }}
                    className="w-full py-4 bg-on-surface text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-on-surface/90 transition-colors"
                  >
                    Close Staffing Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
