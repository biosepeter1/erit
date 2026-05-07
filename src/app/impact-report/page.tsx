"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  School, 
  BarChart3, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight,
  BookOpen,
  PieChart,
  Layout,
  FileText,
  MapPin
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Schools Reached", value: "235", sub: "Oct 2025 - Mar 2026", icon: School, color: "text-primary" },
  { label: "Total Visits", value: "235", sub: "Monitoring Integrity", icon: CheckCircle2, color: "text-secondary" },
  { label: "Educators Trained", value: "7,454", sub: "MTs & Lead MTs", icon: Users, color: "text-blue-600" },
  { label: "Geographic Pilot", value: "8 LGAs", sub: "Strategic Coverage", icon: MapPin, color: "text-orange-500" },
];

const distribution = [
  { label: "Primary", value: 483, pct: "50.4%", color: "bg-[#ff0000]" },
  { label: "ECCDE", value: 175, pct: "18.3%", color: "bg-[#ffff00]" },
  { label: "JSS", value: 163, pct: "17.0%", color: "bg-[#008000]" },
  { label: "SSS", value: 137, pct: "14.3%", color: "bg-[#0000ff]" },
];

export default function ImpactReportPage() {
  return (
    <div className="bg-[#fbf9f8] min-h-screen selection:bg-primary/20">
      {/* Hero Header */}
      <section className="bg-white border-b border-outline-variant pt-20 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
          >
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-black text-[10px] rounded mb-6 uppercase tracking-widest border border-primary/20">
                Interim Approach Pilot
              </span>
              <h1 className="text-4xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tight mb-8">
                Cascade <br />Impact Report
              </h1>
              <p className="text-base md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
                A technical audit of teacher professional development and instructional transformation across 149 public schools in Abia State.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="bg-white border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-black text-on-surface mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-on-surface uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs font-medium text-on-surface-variant opacity-60">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Core Shift: Data Visualization */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black text-on-surface mb-8 leading-tight">
              Closing the <br />Knowledge Gap
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              The post-training assessment data indicates a monumental shift in teacher readiness. The average score surged by 33.4 percentage points, transforming the baseline from "developing" to "expert" instructional delivery.
            </p>

            <div className="space-y-6">
               <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-red-100 rounded-2xl">
                  <div className="text-center shrink-0">
                    <div className="text-[10px] font-black text-red-500 uppercase mb-1">Pre</div>
                    <div className="text-xl md:text-2xl font-bold text-red-500 opacity-60">58.4%</div>
                  </div>
                  <div className="flex-1 h-3 bg-red-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "58.4%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-red-500"
                    />
                  </div>
               </div>

               <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border-2 border-secondary rounded-2xl shadow-lg shadow-secondary/5">
                  <div className="text-center shrink-0">
                    <div className="text-[10px] font-black text-secondary uppercase mb-1">Post</div>
                    <div className="text-2xl md:text-3xl font-black text-secondary">91.8%</div>
                  </div>
                  <div className="flex-1 h-3 bg-secondary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "91.8%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-secondary"
                    />
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-outline-variant rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-sm">
            <div className="mb-10 text-center">
                <h3 className="text-xl font-black text-on-surface uppercase tracking-tight mb-4">Pre-Training (%) and Post-Training (%)</h3>
                <div className="flex justify-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-[10px] font-black uppercase text-on-surface-variant">Pre-Training (%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-secondary" />
                        <span className="text-[10px] font-black uppercase text-on-surface-variant">Post-Training (%)</span>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="relative h-[300px] w-full mb-12">
                    <div className="absolute inset-0 flex flex-col justify-between">
                        {[100, 75, 50, 25, 0].map(val => (
                            <div key={val} className={`w-full flex items-center relative ${val === 0 ? "border-t-2 border-on-surface" : "border-t border-outline-variant/30"}`}>
                                <span className="absolute -left-8 text-[10px] font-bold text-on-surface-variant/40">{val}</span>
                            </div>
                        ))}
                    </div>
                    
                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                            d="M 15 41.6 L 50 89 L 85 100" 
                            fill="none" 
                            stroke="#ef4444" 
                            strokeWidth="1.5" 
                        />
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            d="M 15 8.2 L 50 13 L 85 51" 
                            fill="none" 
                            stroke="#1b6d24" 
                            strokeWidth="1.5" 
                        />
                        
                        {[
                            { x: 15, y: 41.6, val: "58.4", postY: 8.2, postVal: "91.8" },
                            { x: 50, y: 89, val: "11", postY: 13, postVal: "87" },
                            { x: 85, y: 100, val: "2", postY: 51, postVal: "49" }
                        ].map((dot, idx) => (
                            <g key={idx}>
                                <circle cx={dot.x} cy={dot.y} r="3" fill="#ef4444" className="shadow-sm" />
                                <text x={dot.x} y={dot.y - 5} textAnchor="middle" className="text-[4px] font-bold fill-on-surface-variant">{dot.val}</text>
                                <circle cx={dot.x} cy={dot.postY} r="3" fill="#1b6d24" className="shadow-sm" />
                                <text x={dot.x} y={dot.postY - 5} textAnchor="middle" className="text-[4px] font-black fill-on-surface">{dot.postVal}</text>
                            </g>
                        ))}
                    </svg>
                </div>

                <div className="relative h-12 mt-2">
                    <div className="absolute left-[15%] -translate-x-1/2 text-center w-[120px]">
                        <div className="text-[9px] font-bold text-on-surface-variant leading-tight">Average Score</div>
                    </div>
                    <div className="absolute left-[50%] -translate-x-1/2 text-center w-[120px]">
                        <div className="text-[9px] font-bold text-on-surface-variant leading-tight">Teachers scoring <br />80% and above</div>
                    </div>
                    <div className="absolute left-[85%] -translate-x-1/2 text-center w-[120px]">
                        <div className="text-[9px] font-bold text-on-surface-variant leading-tight">Teachers scoring <br />100%</div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-on-surface-variant opacity-30">Metric</span>
                </div>
            </div>
          </div>
        </div>

        {/* Recreating the Bar Chart from PDF */}
        <div className="bg-white border border-outline-variant rounded-[3rem] p-12 mb-24 overflow-hidden relative shadow-sm">
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black text-on-surface uppercase tracking-tight">Growth & Expansion</h3>
                        <p className="text-sm md:text-base text-on-surface-variant font-bold">3rd Term 2024/2025 vs 1st Term 2025/2026</p>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-[#1b6d24]" />
                            <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">3rd Term</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-[#ef4444]" />
                            <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">1st Term</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex gap-12">
                    <div className="hidden md:flex flex-col justify-between h-64 text-[10px] font-black text-on-surface-variant/40 pr-4 border-r border-outline-variant/30">
                        <span>200</span>
                        <span>150</span>
                        <span>100</span>
                        <span>50</span>
                        <span className="translate-y-2">0</span>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div key={i} className="w-full border-t border-outline-variant/20" />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { label: "Schools Visited", val1: 30, val2: 119, max: 200 },
                                { label: "Total Visits", val1: 42, val2: 155, max: 200 },
                                { label: "LGAs Covered", val1: 3, val2: 8, max: 200 }
                            ].map((item, i) => (
                                <div key={item.label} className="flex flex-col items-center">
                                    <div className="flex items-end gap-4 h-64 mb-8 relative w-full justify-center">
                                        <div className="relative flex flex-col items-center justify-end h-full">
                                            <div className="text-[10px] font-black text-on-surface-variant mb-2">{item.val1}</div>
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${(item.val1 / item.max) * 100}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="w-10 md:w-12 bg-secondary rounded-t-sm shadow-sm transform-gpu"
                                            />
                                        </div>
                                        <div className="relative flex flex-col items-center justify-end h-full">
                                            <div className="text-sm font-black text-red-600 mb-2">{item.val2}</div>
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${(item.val2 / item.max) * 100}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                                                className="w-10 md:w-12 bg-red-500 rounded-t-sm shadow-sm transform-gpu"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-center text-on-surface-variant">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Detailed Performance Audit Table */}
        <div className="bg-white border border-outline-variant rounded-[2.5rem] overflow-hidden shadow-sm mb-24">
            <div className="p-8 border-b border-outline-variant bg-surface-container-low/50">
                <h3 className="text-2xl font-black text-on-surface">Detailed Learning Outcomes</h3>
                <p className="text-on-surface-variant font-medium mt-1">Granular breakdown of assessment metrics and proficiency shifts.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                        <tr>
                            <th className="px-8 py-5">Performance Metric</th>
                            <th className="px-8 py-5 text-center">Pre-Training</th>
                            <th className="px-8 py-5 text-center">Post-Training</th>
                            <th className="px-8 py-5 text-right">Net Gain</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                        <tr>
                            <td className="px-8 py-6 font-bold text-on-surface">Average Assessment Score</td>
                            <td className="px-8 py-6 text-center text-on-surface-variant">58.4%</td>
                            <td className="px-8 py-6 text-center font-black text-secondary">91.8%</td>
                            <td className="px-8 py-6 text-right font-black text-primary">+33.4 pp</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-6 font-bold text-on-surface">Proficiency (80% and above)</td>
                            <td className="px-8 py-6 text-center text-on-surface-variant">11%</td>
                            <td className="px-8 py-6 text-center font-black text-secondary">87%</td>
                            <td className="px-8 py-6 text-right font-black text-primary">+76 pp</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-6 font-bold text-on-surface">Mastery (100% Score)</td>
                            <td className="px-8 py-6 text-center text-on-surface-variant">2%</td>
                            <td className="px-8 py-6 text-center font-black text-secondary">49%</td>
                            <td className="px-8 py-6 text-right font-black text-primary">+47 pp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Pilot Scope & Expansion Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <h3 className="text-3xl font-black text-on-surface mb-6 leading-tight">Expansion <br />& Reach Audit</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                    Tracking the velocity of the pilot as it expanded from the initiation phase to a consolidated scale-up across 8 Local Government Areas.
                </p>
            </div>
            <div className="lg:col-span-8 bg-white border border-outline-variant rounded-[2rem] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                        <thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                            <tr>
                                <th className="px-8 py-4">Academic Period</th>
                                <th className="px-8 py-4 text-center">Schools</th>
                                <th className="px-8 py-4 text-center">Visits</th>
                                <th className="px-8 py-4 text-right">LGAs</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/20">
                            <tr>
                                <td className="px-8 py-6">
                                    <div className="font-bold text-on-surface">3rd Term 2024/2025</div>
                                    <div className="text-[10px] font-black uppercase text-primary opacity-60">Initiation Phase</div>
                                </td>
                                <td className="px-8 py-6 text-center font-bold">30</td>
                                <td className="px-8 py-6 text-center font-bold">42</td>
                                <td className="px-8 py-6 text-right font-bold">3</td>
                            </tr>
                            <tr>
                                <td className="px-8 py-6">
                                    <div className="font-bold text-on-surface">Oct 2025 – Mar 2026</div>
                                    <div className="text-[10px] font-black uppercase text-secondary">Piloted Scale-up</div>
                                </td>
                                <td className="px-8 py-6 text-center font-black text-secondary">235</td>
                                <td className="px-8 py-6 text-center font-black text-secondary">235</td>
                                <td className="px-8 py-6 text-right font-black text-secondary">8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Interactive 3D Orbiting Pie Chart */}
            <div className="relative flex justify-center order-2 lg:order-1 py-10 md:py-20">
              <div 
                className="relative w-full max-w-[450px] aspect-square" 
                style={{ perspective: "1200px" }}
              >
                <motion.div 
                  className="w-full h-full relative"
                  style={{ 
                    transformStyle: "preserve-3d",
                    rotateX: 45,
                    rotateY: 0
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `rotateX(${45 + (y * -40)}deg) rotateY(${x * 40}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotateX(45deg) rotateY(0deg)`;
                  }}
                >
                  <div className="absolute inset-x-0 bottom-[-30%] h-[100%] w-[100%] mx-auto rounded-full bg-on-surface/5 blur-3xl transform -rotateX(90deg) translate-z-[-80px] pointer-events-none" />
                  
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible relative cursor-move">
                    <g>
                        {[
                          { id: "primary-side", color: "#990000", path: "M 50 50 L 50 10 A 40 40 0 1 1 50 90 Z" },
                          { id: "eccde-side", color: "#cccc00", path: "M 50 50 L 50 90 A 40 40 0 0 1 14.8 68.7 Z" },
                          { id: "jss-side", color: "#004d00", path: "M 50 50 L 14.8 68.7 A 40 40 0 0 1 14.8 31.3 Z" },
                          { id: "sss-side", color: "#000099", path: "M 50 50 L 14.8 31.3 A 40 40 0 0 1 50 10 Z" },
                        ].map((s) => (
                          <path key={s.id} d={s.path} fill={s.color} transform="translate(0, 6)" className="pointer-events-auto" />
                        ))}

                        {[
                          { id: "primary", color: "#ff0000", path: "M 50 50 L 50 10 A 40 40 0 1 1 50 90 Z", labelX: 75, labelY: 52, pct: "50.4%", textColor: "black" },
                          { id: "eccde", color: "#ffff00", path: "M 50 50 L 50 90 A 40 40 0 0 1 14.8 68.7 Z", labelX: 35, labelY: 75, pct: "18.3%", textColor: "black" },
                          { id: "jss", color: "#008000", path: "M 50 50 L 14.8 68.7 A 40 40 0 0 1 14.8 31.3 Z", labelX: 25, labelY: 50, pct: "17.0%", textColor: "white" },
                          { id: "sss", color: "#0000ff", path: "M 50 50 L 14.8 31.3 A 40 40 0 0 1 50 10 Z", labelX: 38, labelY: 25, pct: "14.3%", textColor: "white" },
                        ].map((segment) => (
                          <g key={segment.id} className="group pointer-events-auto">
                            <path d={segment.path} fill={segment.color} stroke="#000" strokeWidth="0.1" className="group-hover:brightness-110 transition-all" />
                            <text x={segment.labelX} y={segment.labelY} textAnchor="middle" className="text-[4px] font-black pointer-events-none" fill={segment.textColor}>{segment.pct}</text>
                          </g>
                        ))}
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-8 leading-tight">Personnel <br />Distribution</h2>
              <p className="text-on-surface-variant text-xl mb-12 font-medium leading-relaxed">
                The pilot spanned all academic levels, ensuring a comprehensive upgrade to the state's teaching workforce from early childhood to senior secondary.
              </p>
              
              <div className="grid gap-3 md:gap-4">
                {[
                  { label: "Primary", count: 539, pct: "50.4%", color: "bg-red-500" },
                  { label: "ECCDE", count: 195, pct: "18.3%", color: "bg-yellow-400" },
                  { label: "JSS", count: 181, pct: "17.0%", color: "bg-secondary" },
                  { label: "SSS", count: 154, pct: "14.3%", color: "bg-blue-700" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 md:p-6 bg-surface-container-low/30 rounded-2xl border border-outline-variant/50 group hover:border-primary transition-all duration-300">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-4 h-4 md:w-5 md:h-5 rounded-md ${item.color} shadow-sm group-hover:scale-110 transition-transform`} />
                      <span className="text-lg md:text-xl font-bold text-on-surface">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-black text-on-surface">{item.pct}</div>
                      <div className="text-[9px] md:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">{item.count} Teachers</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-on-surface mb-6 uppercase tracking-tight"
          >
            The Cascade Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-xl max-w-2xl mx-auto"
          >
            A tiered implementation model designed for state-wide scalability and fidelity.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary text-white p-8 rounded-[2rem] shadow-2xl border-4 border-white z-10 w-full max-w-sm text-center cursor-pointer"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-60">Level 01</div>
              <h4 className="text-2xl font-black mb-1 text-white">Ministry / ERIT</h4>
              <p className="text-sm font-medium opacity-80">Strategic oversight & content development</p>
            </motion.div>
            
            <motion.div variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }} className="w-1 h-12 bg-outline-variant origin-top" />
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white border-2 border-outline text-on-surface p-8 rounded-[2rem] shadow-xl z-10 w-full max-w-sm text-center cursor-pointer"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-on-surface-variant">Level 02</div>
              <h4 className="text-2xl font-black mb-1">SIMs / LMTs</h4>
              <p className="text-sm font-medium text-on-surface-variant">Tiered training & quality assurance</p>
            </motion.div>
            
            <motion.div variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }} className="w-1 h-12 bg-outline-variant origin-top" />

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white border-2 border-outline-variant text-on-surface p-8 rounded-[2rem] shadow-lg z-10 w-full max-w-sm text-center cursor-pointer"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-on-surface-variant">Level 03</div>
              <h4 className="text-2xl font-black mb-1">Master Trainers</h4>
              <p className="text-sm font-medium text-on-surface-variant">School-based peer training delivery</p>
            </motion.div>
            
            <motion.div variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }} className="w-1 h-12 bg-outline-variant origin-top" />

            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              whileHover={{ y: -5, scale: 1.05 }}
              animate={{ boxShadow: ["0 0 0 rgba(27, 109, 36, 0)", "0 0 20px rgba(27, 109, 36, 0.4)", "0 0 0 rgba(27, 109, 36, 0)"] }}
              transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
              className="bg-[#1b6d24] text-white p-10 rounded-[3rem] shadow-2xl border-4 border-white z-10 w-full max-w-md text-center cursor-pointer"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-60">Impact Point</div>
              <h4 className="text-4xl font-black mb-2 text-white italic">The Classroom</h4>
              <p className="text-base font-medium opacity-90">Sustainable learner-centred instruction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - The Human Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image 
                    src="/pdf_images/page_10_img_2.jpeg" 
                    width={600} 
                    height={800} 
                    className="object-cover" 
                    alt="Teacher training session" 
                  />
               </div>
            </div>
            <div className="md:w-1/2">
              <FileText className="text-primary mb-8" size={48} />
              <h2 className="text-4xl font-black text-on-surface mb-8">Evidence of <br />Practice Change</h2>
              
              <blockquote className="relative mb-12">
                <div className="text-7xl font-serif text-primary opacity-20 absolute -top-8 -left-4">“</div>
                <p className="text-2xl font-medium leading-relaxed italic text-on-surface relative z-10">
                  "I developed more passion to impact knowledge on my pupils. The training equipped me with the necessary skills, and now my pupils are improving because I am patient and consistent with them."
                </p>
                <cite className="block mt-6 not-italic">
                  <span className="block font-black text-on-surface uppercase tracking-widest text-sm">Mrs. Emmanuel Nnenna Julianna</span>
                  <span className="text-xs font-bold text-on-surface-variant opacity-60 uppercase">Ohokobe Umuohu Primary School</span>
                </cite>
              </blockquote>

              <div className="p-8 bg-[#fbf9f8] rounded-2xl border border-outline-variant/30 italic text-on-surface-variant">
                Across both terms, leadership engagement emerged as a decisive factor. Strong Headteachers who actively supported cascade sessions recorded higher teacher participation and smoother operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systemic Constraints & Future Roadmap */}
      <section className="py-24 bg-on-surface text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">The Path to <br /><span className="text-primary">State-wide Scaling</span></h2>
              <p className="text-white/60 text-xl font-medium leading-relaxed">While the pilot demonstrated massive potential, several systemic constraints must be addressed to achieve full state-wide transformation across all 17 LGAs.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl space-y-4">
                 <div className="text-primary font-black text-2xl uppercase tracking-[0.2em]">01</div>
                 <h4 className="text-2xl font-bold">Infrastructure</h4>
                 <p className="text-white/40 leading-relaxed">Addressing overcrowded classrooms, inadequate furniture, and decaying structures to create an enabling environment for learner-centred pedagogy.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl space-y-4">
                 <div className="text-primary font-black text-2xl uppercase tracking-[0.2em]">02</div>
                 <h4 className="text-2xl font-bold">Digital Access</h4>
                 <p className="text-white/40 leading-relaxed">Expanding access to smartphones, reliable data, and high-speed internet connectivity for both teachers and monitoring personnel.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl space-y-4">
                 <div className="text-primary font-black text-2xl uppercase tracking-[0.2em]">03</div>
                 <h4 className="text-2xl font-bold">System Reform</h4>
                 <p className="text-white/40 leading-relaxed">Moving from manual results management to digital compilation processes to enhance data-driven decision-making at the state level.</p>
              </div>
           </div>

           <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
              <h3 className="text-3xl font-black mb-8 italic">"Building a resilient and high-performing education system for all learners."</h3>
              <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">— Elder Goodluck Chinedu Ubochi, Honourable Commissioner</p>
           </div>
        </div>
      </section>
    </div>
  );
}
