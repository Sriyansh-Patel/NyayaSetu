import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Sun, Moon, ChevronDown, Menu, X, UserRound,
  FileSearch, UserCircle, ClipboardList, ShieldCheck,
  TrendingUp, BookOpen, ChevronRight, ArrowRight,
  LogIn, Star, MapPin, Clock, MessageSquare, Gavel,
  Scale, Landmark, Heart, Wifi, Home, Car, Globe,
  Briefcase, Award, Users, CheckCircle, BadgeCheck,
} from "lucide-react";
import { toggleTheme } from "../features/themeSlices";
import AuthOverlay from "./AuthOverlay";
import logo from "../assets/logo.png";

// ─── Theme Toggle ──────────────────────────────────────────────────────────────
const ThemeToggle = ({ theme }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light"
        ? <Moon size={17} className="text-gray-500" />
        : <Sun size={17} className="text-yellow-400" />}
    </button>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const expertiseData = [
  {
    emoji: "⚖️", label: "Criminal", sub: "FIR, bail, trial",
    color: "from-red-950 to-red-900", border: "border-red-800/50",
    dot: "bg-red-500", featured: true,
  },
  {
    emoji: "👨‍👩‍👧", label: "Family", sub: "Divorce, custody",
    color: "from-rose-950 to-rose-900", border: "border-rose-800/50",
    dot: "bg-rose-500", featured: false,
  },
  {
    emoji: "🏛️", label: "Civil", sub: "Disputes, contracts",
    color: "from-slate-800 to-slate-700", border: "border-slate-600/50",
    dot: "bg-slate-400", featured: false,
  },
  {
    emoji: "🚗", label: "Challan", sub: "Traffic, motor cases",
    color: "from-amber-950 to-amber-900", border: "border-amber-800/50",
    dot: "bg-amber-500", featured: false,
  },
  {
    emoji: "🏠", label: "Property", sub: "Land, registry",
    color: "from-emerald-950 to-emerald-900", border: "border-emerald-800/50",
    dot: "bg-emerald-500", featured: true,
  },
  {
    emoji: "💻", label: "Cyber", sub: "Fraud, data crimes",
    color: "from-teal-950 to-teal-900", border: "border-teal-800/50",
    dot: "bg-teal-400", featured: false,
  },
  {
    emoji: "🏢", label: "Corporate", sub: "Company, startup",
    color: "from-blue-950 to-blue-900", border: "border-blue-800/50",
    dot: "bg-blue-500", featured: false,
  },
  {
    emoji: "💼", label: "Labour", sub: "Employment, HR",
    color: "from-violet-950 to-violet-900", border: "border-violet-800/50",
    dot: "bg-violet-500", featured: false,
  },
  {
    emoji: "🛡️", label: "Consumer", sub: "Complaints, refunds",
    color: "from-orange-950 to-orange-900", border: "border-orange-800/50",
    dot: "bg-orange-400", featured: false,
  },
  {
    emoji: "📋", label: "Tax", sub: "GST, income tax",
    color: "from-yellow-950 to-yellow-900", border: "border-yellow-800/50",
    dot: "bg-yellow-400", featured: false,
  },
  {
    emoji: "🌍", label: "Immigration", sub: "Visa, passport",
    color: "from-cyan-950 to-cyan-900", border: "border-cyan-800/50",
    dot: "bg-cyan-400", featured: false,
  },
  {
    emoji: "💡", label: "IP Rights", sub: "Patents, copyright",
    color: "from-purple-950 to-purple-900", border: "border-purple-800/50",
    dot: "bg-purple-400", featured: false,
  },
];

const regions = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"];

const findWorkData = {
  opportunities: [
    { icon: FileSearch,    title: "Browse Jobs",        desc: "Open legal briefs & projects" },
    { icon: TrendingUp,    title: "Featured Briefs",    desc: "High-value curated listings" },
    { icon: ShieldCheck,   title: "Verified Listings",  desc: "Vetted, legitimate postings only" },
  ],
  profile: [
    { icon: UserCircle,    title: "Post Your Profile",  desc: "Let clients discover you" },
    { icon: ClipboardList, title: "Track Applications", desc: "Monitor your proposals" },
    { icon: BookOpen,      title: "Resources",          desc: "Grow your legal career" },
  ],
  regions: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Kolkata", "Ahmedabad", "Noida", "Pune"],
};

// ─── Reusable WorkCard ────────────────────────────────────────────────────────
const WorkCard = ({ icon: Icon, title, desc, theme }) => {
  const [hov, setHov] = useState(false);
  const isDark = theme === "dark";
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`flex items-start gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all ${
        hov ? isDark ? "bg-gray-800/80" : "bg-gray-50" : "bg-transparent"
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
        hov
          ? isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"
          : isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"
      }`}>
        <Icon size={16} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-tight ${
          hov ? isDark ? "text-white" : "text-gray-900" : isDark ? "text-gray-200" : "text-gray-700"
        }`}>{title}</p>
        <p className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{desc}</p>
      </div>
      <ChevronRight size={13} className={`mt-1 flex-shrink-0 transition-all ${
        hov
          ? isDark ? "text-blue-400 translate-x-0.5" : "text-blue-500 translate-x-0.5"
          : isDark ? "text-gray-700" : "text-gray-200"
      }`} />
    </div>
  );
};

// ─── Region chip ──────────────────────────────────────────────────────────────
const RegionChip = ({ label, theme }) => (
  <span className={`text-xs px-3 py-1.5 rounded-full font-medium cursor-pointer transition-colors whitespace-nowrap ${
    theme === "dark"
      ? "bg-gray-800 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300"
      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
  }`}>
    {label}
  </span>
);

// ─── Improved Hire Mega Panel ─────────────────────────────────────────────────
const HireMegaPanel = ({ theme }) => {
  const isDark = theme === "dark";
  const [hovCard, setHovCard] = useState(null);
  const BRAND = "#2cd38f";

  const stats = [
    { val: "2,400+", label: "Verified Lawyers" },
    { val: "48hr",   label: "Avg. Response" },
    { val: "4.8★",   label: "Client Rating" },
  ];

  return (
    <div className={`absolute top-full left-0 mt-3 w-[780px] rounded-2xl border overflow-hidden z-50 backdrop-blur-xl ${
      isDark
        ? "bg-gray-950/98 border-gray-800 shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
        : "bg-white/98 border-gray-200 shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
    }`}>

      {/* ── Hero banner strip ── */}
      <div className="relative px-6 pt-5 pb-4 overflow-hidden"
        style={{ background: isDark
          ? "linear-gradient(135deg,#0a1628 0%,#0d2b1d 60%,#0f172a 100%)"
          : "linear-gradient(135deg,#f0fdf9 0%,#dcfce7 60%,#f8fafc 100%)" }}>
        {/* glow */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ background: BRAND, transform:"translate(30%,-30%)" }}/>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: BRAND }}>Find Legal Help</p>
            <h3 className={`text-xl font-black tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Connect with a Verified Lawyer
            </h3>
            <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Browse by expertise, location, or get matched by AI instantly.
            </p>
          </div>
          {/* Stats pills */}
          <div className="flex gap-3">
            {stats.map(s => (
              <div key={s.label} className="text-center px-3 py-2 rounded-xl"
                style={{ background: isDark ? "rgba(44,211,143,0.08)" : "rgba(44,211,143,0.1)", border:"1px solid rgba(44,211,143,0.2)" }}>
                <p className="text-sm font-black" style={{ color: BRAND }}>{s.val}</p>
                <p className={`text-[10px] font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="px-6 pt-4 pb-5">

        {/* Expertise label + quick filters */}
        <div className="flex items-center justify-between mb-3">
          <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            By Expertise
          </p>
          <span className={`text-xs font-semibold cursor-pointer flex items-center gap-0.5 ${
            isDark ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-600 hover:text-emerald-700"
          }`}>
            All 24 categories <ChevronRight size={11}/>
          </span>
        </div>

        {/* Expertise grid — 6 cols, 2 rows */}
        <div className="grid grid-cols-6 gap-2 mb-5">
          {expertiseData.map((e, i) => (
            <div
              key={e.label}
              onMouseEnter={() => setHovCard(i)}
              onMouseLeave={() => setHovCard(null)}
              className={`relative rounded-2xl border cursor-pointer group transition-all duration-200 overflow-hidden ${e.border} bg-gradient-to-br ${e.color}`}
              style={{
                aspectRatio: "1/1",
                transform: hovCard === i ? "scale(1.06)" : "scale(1)",
                boxShadow: hovCard === i ? `0 8px 24px rgba(0,0,0,0.4)` : "none",
              }}
            >
              {/* Featured badge */}
              {e.featured && (
                <div className="absolute top-1.5 right-1.5 z-10">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }}/>
                </div>
              )}
              {/* Hover shimmer */}
              {hovCard === i && (
                <div className="absolute inset-0 opacity-10"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${BRAND}, transparent 70%)` }}/>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                <span className="text-2xl leading-none transition-transform duration-200 group-hover:scale-110">
                  {e.emoji}
                </span>
                <p className="text-white text-[10px] font-bold text-center leading-tight">{e.label}</p>
                <p className={`text-[9px] text-center leading-tight transition-all duration-200 ${
                  hovCard === i ? "opacity-80 text-white" : "opacity-0"
                }`}>{e.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom row: Region + AI match CTA ── */}
        <div className={`flex gap-4 pt-4 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>

          {/* Region chips */}
          <div className="flex-1">
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              By Region
            </p>
            <div className="flex flex-wrap gap-1.5">
              {regions.map(r => <RegionChip key={r} label={r} theme={theme}/>)}
              <span className={`text-xs px-3 py-1.5 font-semibold cursor-pointer flex items-center gap-0.5 ${
                isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              }`}>More <ChevronRight size={11}/></span>
            </div>
          </div>

          {/* AI match CTA card */}
          <div className="flex-shrink-0 w-[200px] rounded-xl p-4 flex flex-col justify-between"
            style={{
              background: isDark
                ? "linear-gradient(135deg,rgba(44,211,143,0.08),rgba(44,211,143,0.04))"
                : "linear-gradient(135deg,rgba(44,211,143,0.1),rgba(44,211,143,0.04))",
              border: "1px solid rgba(44,211,143,0.2)",
            }}>
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background:"rgba(44,211,143,0.2)" }}>
                  <span className="text-[10px]">✨</span>
                </div>
                <p className="text-xs font-bold" style={{ color: BRAND }}>AI Match</p>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Describe your issue and get matched to the right lawyer in seconds.
              </p>
            </div>
            <button className="mt-3 w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all hover:opacity-90"
              style={{ background: BRAND, color:"#0f172a" }}>
              Get Matched <ArrowRight size={12} strokeWidth={2.5}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Find Work Panel ──────────────────────────────────────────────────────────
const FindWorkPanel = ({ data, theme }) => {
  const isDark = theme === "dark";
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/3 mt-3 w-[620px] rounded-2xl border p-6 z-50 backdrop-blur-xl ${
      isDark
        ? "bg-gray-950/98 border-gray-800 shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
        : "bg-white/98 border-gray-200 shadow-[0_24px_80px_rgba(0,0,0,0.14)]"
    }`}>
      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Opportunities
          </p>
          {data.opportunities.map(item => <WorkCard key={item.title} {...item} theme={theme}/>)}
        </div>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Your Profile
          </p>
          {data.profile.map(item => <WorkCard key={item.title} {...item} theme={theme}/>)}
        </div>
      </div>
      <div className={`mt-4 pt-4 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Cities Hiring
        </p>
        <div className="flex flex-wrap gap-2">
          {data.regions.map(r => <RegionChip key={r} label={r} theme={theme}/>)}
          <span className={`text-xs px-3 py-1.5 font-semibold cursor-pointer flex items-center gap-0.5 ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
          }`}>More <ChevronRight size={11}/></span>
        </div>
      </div>
    </div>
  );
};

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
const MobileDrawer = ({ open, onClose, theme, navLinks, onAuthOpen }) => {
  const [mobOpen, setMobOpen] = useState(null);
  const isDark = theme === "dark";
  const BRAND = "#2cd38f";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setMobOpen(null);
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black/60 backdrop-blur-sm`}
      />

      {/* Drawer panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-[85vw] max-w-[310px] flex flex-col transition-transform duration-300 ease-out ${
        open ? "translate-x-0" : "translate-x-full"
      } ${isDark ? "bg-gray-950" : "bg-white"}`}>

        {/* Header: logo + name + close */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NyayaSetu" className="w-8 h-8 object-contain"/>
            <span className={`text-base font-black tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              NyayaSetu
            </span>
          </div>
          <button onClick={onClose} className={`p-2 rounded-full transition-colors ${
            isDark ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-500 hover:text-gray-900"
          }`}>
            <X size={18}/>
          </button>
        </div>

        {/* Scrollable nav */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {navLinks.map(link =>
            link.data ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobOpen(mobOpen === link.key ? null : link.key)}
                  className={`flex items-center justify-between w-full text-left text-sm font-semibold py-3.5 px-4 rounded-2xl transition-colors ${
                    mobOpen === link.key
                      ? isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
                      : isDark ? "text-gray-200 hover:bg-gray-800/60" : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={15} className={`transition-transform duration-300 ${mobOpen === link.key ? "rotate-180" : ""}`}/>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  mobOpen === link.key ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="pb-3 pt-1 px-2">
                    {link.key === "hire" ? (
                      <>
                        {/* AI match strip */}
                        <div className="mb-3 p-3 rounded-xl"
                          style={{ background: isDark ? "rgba(44,211,143,0.08)" : "rgba(44,211,143,0.08)", border:"1px solid rgba(44,211,143,0.18)" }}>
                          <p className="text-xs font-bold mb-1" style={{ color: BRAND }}>✨ AI Match</p>
                          <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            Describe your issue, get matched instantly.
                          </p>
                          <button className="mt-2 w-full py-1.5 rounded-lg text-[11px] font-bold transition-all"
                            style={{ background: BRAND, color:"#0f172a" }}
                            onClick={onClose}>
                            Get Matched →
                          </button>
                        </div>

                        <p className={`text-[10px] font-bold uppercase tracking-widest px-1 mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          By Expertise
                        </p>
                        <div className="grid grid-cols-4 gap-1.5 mb-3">
                          {expertiseData.slice(0, 8).map(e => (
                            <div key={e.label} onClick={onClose}
                              className={`rounded-xl border ${e.border} bg-gradient-to-br ${e.color} p-2 flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform`}>
                              <span className="text-lg">{e.emoji}</span>
                              <p className="text-white text-[9px] font-bold text-center leading-tight">{e.label}</p>
                            </div>
                          ))}
                        </div>

                        <p className={`text-[10px] font-bold uppercase tracking-widest px-1 mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          By Region
                        </p>
                        <div className="flex flex-wrap gap-1.5 pb-1">
                          {regions.map(r => (
                            <button key={r} onClick={onClose}
                              className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                                isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }`}>{r}</button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <p className={`text-[10px] font-bold uppercase tracking-widest px-1 mb-2 mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          Opportunities
                        </p>
                        {link.data.opportunities.map(item => (
                          <div key={item.title} onClick={onClose}
                            className={`flex items-center gap-3 px-2 py-2.5 rounded-xl cursor-pointer ${isDark ? "hover:bg-gray-800/60" : "hover:bg-gray-50"}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                              <item.icon size={14} strokeWidth={1.8}/>
                            </div>
                            <div>
                              <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>{item.title}</p>
                              <p className={`text-[11px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                        <p className={`text-[10px] font-bold uppercase tracking-widest px-1 mb-2 mt-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          Your Profile
                        </p>
                        {link.data.profile.map(item => (
                          <div key={item.title} onClick={onClose}
                            className={`flex items-center gap-3 px-2 py-2.5 rounded-xl cursor-pointer ${isDark ? "hover:bg-gray-800/60" : "hover:bg-gray-50"}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                              <item.icon size={14} strokeWidth={1.8}/>
                            </div>
                            <div>
                              <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>{item.title}</p>
                              <p className={`text-[11px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                        <p className={`text-[10px] font-bold uppercase tracking-widest px-1 mb-2 mt-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          Cities Hiring
                        </p>
                        <div className="flex flex-wrap gap-1.5 pb-1">
                          {link.data.regions.map(r => (
                            <button key={r} onClick={onClose}
                              className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                                isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }`}>{r}</button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <button key={link.label} onClick={onClose}
                className={`w-full text-left text-sm font-semibold py-3.5 px-4 rounded-2xl transition-colors ${
                  isDark ? "text-gray-200 hover:bg-gray-800/60" : "text-gray-800 hover:bg-gray-50"
                }`}>
                {link.label}
              </button>
            )
          )}
        </div>

        {/* ── Footer: Login + CTA (both visible in mobile) ── */}
        <div className={`px-4 pb-8 pt-4 border-t space-y-3 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
          <button
            onClick={() => { onAuthOpen(); onClose(); }}
            className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold rounded-full border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-200 hover:text-white hover:bg-gray-800/60 hover:border-gray-600"
                : "border-gray-200 text-gray-800 hover:text-black hover:bg-gray-50"
            }`}
          >
            <UserRound size={15} strokeWidth={2}/>
            Log in
          </button>
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-full text-sm font-bold hover:opacity-85 transition-all flex items-center justify-center gap-2 ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Try NyayaSetu <ArrowRight size={14} strokeWidth={2.5}/>
          </button>
        </div>
      </div>
    </>
  );
};

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar1() {
  const [drawerOpen,      setDrawerOpen]  = useState(false);
  const [activeDropdown,  setActive]      = useState(null);
  const [authOpen,        setAuthOpen]    = useState(false);
  const navRef = useRef(null);
  const theme  = useSelector(s => s.theme.mode);
  const isDark = theme === "dark";

  useEffect(() => {
    const handler = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setActive(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Hire Lawyer", key: "hire", data: { expertise: expertiseData, regions } },
    { label: "Find Work",   key: "work", data: findWorkData },
    { label: "Community" },
    { label: "About Us" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl backdrop-blur-xl border shadow-lg rounded-full transition-all duration-300 ${
          isDark
            ? "bg-gray-950/92 border-gray-800"
            : "bg-white/92 border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-5 py-2">

          {/* ── Brand: logo + name ── */}
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NyayaSetu" className="w-8 h-8 object-contain flex-shrink-0"/>
            <span className={`text-base sm:text-[17px] font-black tracking-tight select-none ${isDark ? "text-white" : "text-gray-900"}`}>
              NyayaSetu
            </span>
          </div>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link =>
              link.data ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setActive(activeDropdown === link.key ? null : link.key)}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                      activeDropdown === link.key
                        ? isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
                        : isDark ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                                 : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={13} strokeWidth={2.5} className={`transition-transform duration-200 ${
                      activeDropdown === link.key ? "rotate-180" : ""
                    }`}/>
                  </button>
                  {activeDropdown === link.key && link.key === "hire" && (
                    <HireMegaPanel theme={theme}/>
                  )}
                  {activeDropdown === link.key && link.key === "work" && (
                    <FindWorkPanel data={link.data} theme={theme}/>
                  )}
                </div>
              ) : (
                <button key={link.label}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isDark ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                           : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70"
                  }`}>
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* ── Right cluster ── */}
          <div className="flex items-center gap-1.5">
            {/* Login — desktop */}
            <button onClick={() => setAuthOpen(true)}
              className={`hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isDark
                  ? "text-gray-200 hover:text-white hover:bg-gray-800/60"
                  : "text-gray-700 hover:text-black hover:bg-gray-100/70"
              }`}>
              <UserRound size={14} strokeWidth={2}/>
              Log in
            </button>

            {/* CTA — desktop */}
            <button className={`hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold hover:opacity-80 transition-all shadow-sm whitespace-nowrap ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}>
              Try NyayaSetu
              <ArrowRight size={13} strokeWidth={2.5}/>
            </button>

            <ThemeToggle theme={theme}/>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`md:hidden p-2 rounded-full transition-colors ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
              aria-label="Open menu"
            >
              <Menu size={19} className={isDark ? "text-white" : "text-gray-900"}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Auth overlay */}
      <AuthOverlay
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        theme={theme}
      />

      {/* Mobile drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme={theme}
        navLinks={navLinks}
        onAuthOpen={() => setAuthOpen(true)}
      />
    </>
  );
}