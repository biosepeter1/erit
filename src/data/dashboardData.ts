export const DASHBOARD_METRICS = {
  overview: {
    totalResources: 41163,
    expectedResources: 41163,
    completionRate: 100,
    studentsReached: 40000,
    teachersReached: 7454,
    schoolsMonitored: 149,
    totalSchools: 1461,
    schoolCoveragePct: 10.2,
    lgaCoverage: 8,
    totalTrainers: 7454,
    videoContent: 187,
  },
  education: {
    terms: [
      { label: "Term 1", expected: 13747, completed: 13747, value: 100, color: "bg-secondary" },
      { label: "Term 2", expected: 13537, completed: 13537, value: 100, color: "bg-primary" },
      { label: "Term 3", expected: 13879, completed: 13879, value: 100, color: "bg-outline" },
    ],
    resourceTypes: [
      { label: "Scheme of Work", expected: 7704, completed: 5916, pct: 77, t1: 100, t2: 100, t3: 24 },
      { label: "Lesson Plans", expected: 15882, completed: 11852, pct: 75, t1: 100, t2: 92, t3: 21 },
      { label: "Lesson Notes", expected: 6366, completed: 4974, pct: 78, t1: 100, t2: 100, t3: 26 },
      { label: "Assessments", expected: 7028, completed: 5133, pct: 73, t1: 94, t2: 99, t3: 22 },
      { label: "Videos", expected: 1853, completed: 187, pct: 10, t1: 28, t2: 0, t3: 0 },
    ],
    levels: [
      { label: "ECCDE", expected: 4902, completed: 2781, pct: 57, videoPct: 1 },
      { label: "PRIMARY", expected: 15456, completed: 9975, pct: 65, videoPct: 11 },
      { label: "JSS", expected: 7752, completed: 7140, pct: 92, videoPct: 36 },
      { label: "SSS", expected: 8520, completed: 6696, pct: 79, videoPct: 79 },
      { label: "ICT", expected: 103, completed: 30, pct: 29, videoPct: 23 },
      { label: "CAREER", expected: 2100, completed: 1440, pct: 69, videoPct: 69 },
    ]
  },
  monitoring: {
    totalSchools: 1461,
    totalVisits: 149,
    visitBreakdown: {
      joint: 62,
      validation: 71,
      sip: 16
    },
    monthlyTrends: [
      { month: "January", visits: 18, joint: 6, validation: 10, sip: 2, teachers: 351, students: 5160 },
      { month: "February", visits: 18, joint: 8, validation: 8, sip: 2, teachers: 345, students: 5260 },
      { month: "March", visits: 17, joint: 6, validation: 10, sip: 1, teachers: 332, students: 4860 },
      { month: "April", visits: 17, joint: 8, validation: 8, sip: 1, teachers: 337, students: 4786 },
      { month: "May", visits: 17, joint: 6, validation: 10, sip: 1, teachers: 337, students: 4720 },
      { month: "June", visits: 25, joint: 8, validation: 8, sip: 9, teachers: 496, students: 6885 },
    ],
    lgaReach: [
      { name: "Aba North", count: 19 },
      { name: "Aba South", count: 16 },
      { name: "Bende", count: 24 },
      { name: "Ikwuano", count: 20 },
      { name: "Ohafia", count: 19 },
      { name: "Osisioma", count: 21 },
      { name: "Umuahia North", count: 16 },
      { name: "Umuahia South", count: 14 },
    ]
  },
  personnel: {
    stats: {
      total: 7454,
      lmts: 200,
      mts: 2000,
      lgas: 8,
    },
    levelBreakdown: [
      { label: "ECCDE", lmt: 40, mt: 660, total: 700 },
      { label: "Primary", lmt: 80, mt: 740, total: 820 },
      { label: "JSS / SSS", lmt: 80, mt: 600, total: 680 },
    ],
    lgaBreakdown: [
      { name: "Umuahia", lmt: 0, mt: 120, total: 120 },
      { name: "Isiala Ngwa North", lmt: 0, mt: 111, total: 111 },
      { name: "Ikwuano", lmt: 0, mt: 150, total: 150 },
      { name: "Isiala Ngwa South", lmt: 0, mt: 95, total: 95 },
      { name: "Bende", lmt: 0, mt: 143, total: 143 },
      { name: "Umunneochi", lmt: 0, mt: 87, total: 87 },
      { name: "Isuikwuato", lmt: 0, mt: 79, total: 79 },
      { name: "Arochukwu", lmt: 0, mt: 109, total: 109 },
      { name: "Ohafia", lmt: 0, mt: 136, total: 136 },
      { name: "Aba South", lmt: 0, mt: 111, total: 111 },
      { name: "Osisioma", lmt: 0, mt: 132, total: 132 },
      { name: "Obingwa", lmt: 0, mt: 155, total: 155 },
      { name: "Ukwa West", lmt: 0, mt: 93, total: 93 },
      { name: "Ugwunagbo", lmt: 0, mt: 86, total: 86 },
      { name: "Ukwa East", lmt: 0, mt: 69, total: 69 },
      { name: "Aba North", lmt: 0, mt: 74, total: 74 },
    ],
    trainers: [
      { name: "Iweala Chinedu", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "MoE", phone: "08136989228" },
      { name: "Ukaegbu Victoria N", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "MoE", phone: "08106413563" },
      { name: "Obinna Ikonne", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "MoE", phone: "08135142338" },
      { name: "Kalu Ekenma", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "MoE", phone: "08039519200" },
      { name: "Ahuruonye Beatrice", type: "LMT", level: "All Levels", zone: "Aba", organization: "MoE", phone: "08036662793" },
      { name: "Igbe Ucha Ifeanyi", type: "LMT", level: "All Levels", zone: "Aba", organization: "MoE", phone: "08062345311" },
      { name: "Onwubiko Ngozi Ugo", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "SEMB", phone: "08139067493" },
      { name: "Nwankwo Victor . C", type: "LMT", level: "All Levels", zone: "Umuahia", organization: "SEMB", phone: "07034338689" },
    ],
    masterTrainers: [
      { name: "Nwogwugwu Sunday", lga: "Obingwa", level: "Primary", school: "Ovom 1 C/S" },
      { name: "David Queen", lga: "Ugwanagbo", level: "Primary", school: "Amorji Amano C/S" },
      { name: "Raphael Ginikanwa", lga: "Ugwanagbo", level: "Primary", school: "Obeaja C/S" },
      { name: "Ozonta Kelechi", lga: "Ugwanagbo", level: "Primary", school: "Akanu Ngwa 1 C/S" },
      { name: "Amaefu Charity", lga: "Ugwanagbo", level: "Primary", school: "Osusu- Umuelendu MFPS" },
    ]
  },
  impact: {
    performance: {
      masteryIncrease: { from: 31.1, to: 71.5, label: "Mastery Level" },
      lowPerformersDecrease: { from: 39.9, to: 8.9, label: "Low Performers" },
      overallGains: { pre: 53.2, post: 74.2, gain: 21, label: "Test Average" },
      cascadeGains: { pre: 64.4, post: 93.3, gain: 29, label: "Learning Gain" }
    },
    classroom: {
      skillApplication: 97.1,
      skillApplicationRate: 43.3,
      interactions: 69.8,
      teachersObserved: 398,
      trainedTeacherPct: 84.7
    },
    scoreDistribution: [
      { label: "Excellent (90-100%)", value: 18.6, color: "bg-green-500" },
      { label: "Very Good (80-89%)", value: 34.2, color: "bg-blue-500" },
      { label: "Good (70-79%)", value: 27.5, color: "bg-yellow-500" },
      { label: "Moderate (60-69%)", value: 12.1, color: "bg-orange-500" },
      { label: "Below 60%", value: 7.6, color: "bg-red-500" }
    ],
    lgaPerformance: [
      { name: "Umuahia North", score: 79.4 },
      { name: "Aba South", score: 77.8 },
      { name: "Ohafia", score: 74.6 },
      { name: "Bende", score: 75.9 },
      { name: "Osisioma", score: 73.2 }
    ]
  }
};
