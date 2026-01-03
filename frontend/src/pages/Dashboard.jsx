import React from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter
} from 'recharts';
import { motion } from 'framer-motion';
import { Activity, Code, Cpu, Github, Globe, Linkedin, Mail, Server, Target, Terminal, Users, Zap, BookOpen } from 'lucide-react';
import { intro, skills, projects, experience, contact, achievements } from '../data/portfolio';
import { useTheme } from '../components/ThemeContext';

// --- Theme Constants (Default values for helper components) ---
const DEFAULT_COLORS = {
  primary: '#ff3b3b',
  secondary: '#ffffff',
  accent: 'rgba(255, 59, 59, 0.4)',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#0a0a0a',
  grid: '#262626',
  text: '#ffffff',
  textMuted: '#888888'
};

const GLOW_STYLES_BASE = {
  boxShadow: (color) => `0 0 15px ${color}15, inset 0 0 5px ${color}10`,
  border: (color) => `1px solid ${color}30`
};

// --- Data Transformation ---

// Skill Proficiency Data for Radar
const skillRadarData = [
  ...skills.frontend.map(s => ({ subject: s.name, level: s.level * 20, fullMark: 100 })),
  ...skills.backend.map(s => ({ subject: s.name, level: s.level * 20, fullMark: 100 })),
].slice(0, 7); // Limiting to top 7 for readability

// Project Category distribution
const categoryData = projects.reduce((acc, current) => {
  const existing = acc.find(item => item.name === current.category);
  if (existing) {
    existing.value += 1;
  } else {
    acc.push({ name: current.category, value: 1 });
  }
  return acc;
}, []);

// Mock "Career Growth" data based on experience milestones
const careerGrowthData = [
  { year: '2023', projects: 2, skills: 5, impact: 20 },
  { year: 'Q1 2024', projects: 4, skills: 12, impact: 45 },
  { year: 'Q3 2024', projects: 6, skills: 18, impact: 70 },
  { year: '2025 (Exp)', projects: 12, skills: 25, impact: 95 },
];

// Pie Colors (will be handled dynamically inside Dashboard)

// --- Components ---

const Panel = ({ title, children, className = '', glow = false, primaryColor }) => (
  <div
    className={`bg-[#0a0a0c]/90 backdrop-blur-xl rounded-xl p-5 border border-white/5 flex flex-col ${className}`}
    style={glow ? {
      boxShadow: `0 0 15px ${primaryColor}15, inset 0 0 5px ${primaryColor}10`,
      border: `1px solid ${primaryColor}30`
    } : {}}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
        {title && <span className="w-1.5 h-1.5 bg-primary rounded-sm"></span>}
        {title}
      </h3>
      <div className="flex gap-1.5">
        <div className="w-1 h-1 rounded-full bg-white/10"></div>
        <div className="w-1 h-1 rounded-full bg-white/10"></div>
      </div>
    </div>
    <div className="flex-1 min-h-0">
      {children}
    </div>
  </div>
);

const KPICard = ({ title, value, unit, icon: Icon, color, trend }) => (
  <Panel className="relative overflow-hidden group border-white/10 hover:border-white/20 transition-all duration-500">
    <div className="absolute -right-6 -bottom-6 opacity-[0.03] transition-transform group-hover:scale-110 duration-700">
      <Icon size={120} />
    </div>
    <div className="flex flex-col h-full justify-between relative z-10">
      <div className="flex justify-between items-start">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md">
          <Icon size={18} style={{ color }} />
        </div>
        {trend && (
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded shadow-sm">
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">{title}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white font-display tracking-tight">{value}</span>
          <span className="text-xs text-gray-600 font-medium">{unit}</span>
        </div>
      </div>
    </div>
  </Panel>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a]/95 border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-2xl">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="text-xs text-gray-200 flex items-center gap-3 mb-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.payload.fill }}></span>
            <span className="opacity-70">{entry.name}:</span>
            <span className="font-mono font-bold text-white ml-auto">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// --- Main Dashboard ---

const Dashboard = () => {
  const { currentTheme } = useTheme();

  const COLORS = {
    primary: currentTheme.primary,
    secondary: '#ffffff',
    accent: currentTheme.glow,
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    dark: '#0a0a0a',
    grid: '#262626',
    text: '#ffffff',
    textMuted: '#888888'
  };

  const pieColors = [COLORS.primary, COLORS.accent, COLORS.secondary, COLORS.success, COLORS.warning];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 font-sans selection:bg-primary/30">

      {/* Header Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-white/5 pb-8"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 bg-primary-dim border border-primary/20 text-primary text-[10px] font-bold tracking-widest rounded uppercase">
              Developer Profile v2.1
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 font-display tracking-tighter">
            {intro.name.toUpperCase()} <span className="text-gray-600 font-light">ANALYTICS</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 flex items-center gap-2 font-mono">
            <Globe size={14} /> {intro.location} | {intro.role}
          </p>
        </div>

        <div className="flex gap-4">
          <a href={`mailto:${contact.email}`} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Mail size={20} className="text-gray-400" />
          </a>
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center border border-white/20 shadow-xl shadow-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-xl font-bold">IM</span>
          </div>
        </div>
      </motion.div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard title="Total Projects" value={projects.length} unit="REPOS" icon={Code} color={COLORS.primary} trend="+2 NEW" />
        <KPICard title="Primary CGPA" value="7.1" unit="SCORE" icon={BookOpen} color={COLORS.success} />
        <KPICard title="Stack Efficiency" value="94" unit="%" icon={Zap} color={COLORS.warning} trend="OPTIMAL" />
        <KPICard title="Global Reach" value="1.2k" unit="VIEWS" icon={Globe} color={COLORS.accent} trend="+12%" />
      </div>

      {/* Main Grid Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

        {/* Left Col: Skill Radar & Category */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Panel title="Skill Proficiency Index" className="h-[400px]" glow primaryColor={COLORS.primary}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillRadarData}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: COLORS.textMuted, fontSize: 10, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Expertise"
                  dataKey="level"
                  stroke={COLORS.primary}
                  fill={COLORS.primary}
                  fillOpacity={0.4}
                  animationDuration={2000}
                />
                <RechartsTooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Project Categorization" className="h-[300px]" primaryColor={COLORS.primary}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </Panel>
        </div>

        {/* Center/Right Col: Career Trajectory */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Panel title="Career Trajectory & Technical Impact" className="flex-1 min-h-[450px]" glow primaryColor={COLORS.primary}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={careerGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis dataKey="year" stroke={COLORS.textMuted} tick={{ fontSize: 10, fontWeight: 500 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke={COLORS.textMuted} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="impact"
                  name="Total Impact"
                  stroke={COLORS.primary}
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorImpact)"
                  animationDuration={2500}
                />
                <Line
                  type="monotone"
                  dataKey="skills"
                  name="Skill Count"
                  stroke={COLORS.accent}
                  strokeWidth={2}
                  dot={{ r: 4, fill: COLORS.accent, strokeWidth: 2, stroke: COLORS.dark }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
              <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3">
                <span>Tech Stack Health</span>
                <span className="text-primary">98.2% Accurate</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.concat(skills.backend).slice(0, 6).map((s, i) => (
                  <div key={i} className="px-3 py-1.5 bg-[#0f172a] rounded-lg border border-white/5 text-[11px] font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pieColors[i % 5] }}></div>
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* Lower Row: Experience & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Panel title="Recent Achievements" className="h-[250px]" primaryColor={COLORS.primary}>
              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar h-full">
                {achievements.map((ach, i) => (
                  <div key={i} className="group relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors">
                    <h4 className="text-xs font-bold text-gray-300">{ach.title}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="System Uptime (Productivity)" className="h-[250px]" primaryColor={COLORS.primary}>
              <div className="flex flex-col justify-center h-full gap-4">
                {[
                  { label: 'Coding', val: 85, col: COLORS.primary },
                  { label: 'Hardware/IoT', val: 65, col: COLORS.accent },
                  { label: 'Blockchain', val: 40, col: COLORS.secondary }
                ].map((p, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-1.5 uppercase font-mono tracking-widest px-1">
                      <span className="text-gray-400">{p.label}</span>
                      <span className="text-white font-bold">{p.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${p.val}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        style={{ backgroundColor: p.col, boxShadow: `0 0 10px ${p.col}40` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>

      {/* Analytics Footer */}
      <footer className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono gap-6">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>DATA SOURCE: LOCAL_CORE_V1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
            <span>ANALYSIS: AI_OPTIMIZED</span>
          </div>
        </div>
        <div className="text-right uppercase">
          © {new Date().getFullYear()} {intro.name.toUpperCase()} SYSTEM CORE | ALL METRICS VALIDATED
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
