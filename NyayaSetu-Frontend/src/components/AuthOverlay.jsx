import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from "../features/themeSlices";
import { Mail, Lock, EyeOff, Eye, ArrowRight, X, User, Sun, Moon, ShieldCheck, Scale, Users } from 'lucide-react';
import logo from '../assets/logo.png';

/* ─── Injected keyframe styles (once, at module level) ─────────────────────── */
const ANIM_STYLE = `
  @keyframes ns-sway {
    0%,100% { transform: rotate(-6deg); }
    50%      { transform: rotate(6deg);  }
  }
  @keyframes ns-sway-r {
    0%,100% { transform: rotate(6deg); }
    50%      { transform: rotate(-6deg);  }
  }
  @keyframes ns-float {
    0%,100% { transform: translateY(0px);  }
    50%      { transform: translateY(-10px); }
  }
  @keyframes ns-float2 {
    0%,100% { transform: translateY(0px);  }
    50%      { transform: translateY(-7px); }
  }
  @keyframes ns-bob {
    0%,100% { transform: translateY(0px) rotate(-1deg); }
    50%      { transform: translateY(8px) rotate(1deg);  }
  }
  @keyframes ns-bob-r {
    0%,100% { transform: translateY(8px) rotate(1deg); }
    50%      { transform: translateY(0px) rotate(-1deg); }
  }
  @keyframes ns-spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes ns-pulse-ring {
    0%,100% { opacity: 0.15; transform: scale(1);    }
    50%      { opacity: 0.35; transform: scale(1.08); }
  }
  @keyframes ns-drift1 {
    0%,100% { transform: translate(0,0);       opacity:0.5; }
    33%      { transform: translate(6px,-10px); opacity:0.8; }
    66%      { transform: translate(-4px,5px);  opacity:0.4; }
  }
  @keyframes ns-drift2 {
    0%,100% { transform: translate(0,0);        opacity:0.4; }
    33%      { transform: translate(-8px,-6px);  opacity:0.7; }
    66%      { transform: translate(5px,9px);    opacity:0.3; }
  }
  @keyframes ns-drift3 {
    0%,100% { transform: translate(0,0);        opacity:0.6; }
    50%      { transform: translate(7px,-12px);  opacity:0.9; }
  }
  @keyframes ns-glow {
    0%,100% { opacity:0.18; }
    50%      { opacity:0.38; }
  }
  @keyframes ns-scan {
    0%   { transform: translateY(0%);   opacity:0.6; }
    100% { transform: translateY(100%); opacity:0;   }
  }
`;

function injectStyles() {
  if (typeof document !== 'undefined' && !document.getElementById('ns-auth-anim')) {
    const el = document.createElement('style');
    el.id = 'ns-auth-anim';
    el.textContent = ANIM_STYLE;
    document.head.appendChild(el);
  }
}

/* ─── The animated banner illustration ─────────────────────────────────────── */
const LegalAnimation = ({ isDark }) => {
  useEffect(() => { injectStyles(); }, []);

  const brand   = '#2cd38f';
  const pole    = isDark ? '#334155' : '#94a3b8';
  const armFill = isDark ? '#1e3a5f' : '#bfdbfe';
  const armStr  = isDark ? '#3b82f6' : '#60a5fa';
  const panL    = isDark ? '#162032' : '#dbeafe';
  const panR    = isDark ? '#0d2b1d' : '#bbf7d0';
  const docBg   = isDark ? '#1e3a5f' : '#dbeafe';
  const docStr  = isDark ? '#3b82f6' : '#60a5fa';
  const chkBg   = isDark ? '#0d2b1d' : '#bbf7d0';
  const ringBg  = brand;
  const bg1     = isDark ? '#0f172a' : '#f0fdf9';
  const bg2     = isDark ? '#1e293b' : '#dcfce7';

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', overflow:'hidden' }}>

      {/* Gradient background — theme-reactive */}
      <div style={{
        position:'absolute', inset:0,
        background: `linear-gradient(145deg, ${bg1} 0%, ${bg2} 60%, ${isDark?'#0d2a1f':'#d1fae5'} 100%)`,
        transition: 'background 0.6s ease',
      }}/>

      {/* Glow orb top-right */}
      <div style={{
        position:'absolute', top:-70, right:-70,
        width:240, height:240, borderRadius:'50%',
        background: brand, filter:'blur(72px)',
        animation:'ns-glow 4s ease-in-out infinite',
      }}/>

      {/* Glow orb bottom-left */}
      <div style={{
        position:'absolute', bottom:-50, left:-50,
        width:180, height:180, borderRadius:'50%',
        background: isDark ? '#38bdf8' : '#818cf8', filter:'blur(60px)',
        animation:'ns-glow 6s ease-in-out infinite 1s',
      }}/>

      {/* ── Central SVG scene ── */}
      <svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>

        {/* ── Pulse ring under scale ── */}
        <ellipse cx="170" cy="242" rx="52" ry="10"
          fill={brand} opacity="0.12"
          style={{ animation:'ns-pulse-ring 3s ease-in-out infinite', transformOrigin:'170px 242px' }}/>

        {/* ── Pole ── */}
        <rect x="168" y="98" width="5" height="138" rx="2.5" fill={pole}/>

        {/* ── Crossbar ── */}
        <rect x="100" y="98" width="141" height="7" rx="3.5" fill={brand}/>

        {/* ── Pivot knob ── */}
        <circle cx="170" cy="95" r="7" fill={brand} opacity="0.9"/>
        <circle cx="170" cy="95" r="3.5" fill={isDark?'#0f172a':'#fff'} opacity="0.8"/>

        {/* ── Base ── */}
        <rect x="150" y="232" width="41" height="8" rx="4" fill={pole} opacity="0.8"/>
        <rect x="135" y="238" width="71" height="6" rx="3" fill={pole} opacity="0.5"/>

        {/* ── Left arm + pan (bobs down) ── */}
        <g style={{ transformOrigin:'170px 102px', animation:'ns-sway 4s ease-in-out infinite' }}>
          {/* chain */}
          <line x1="118" y1="102" x2="118" y2="148"
            stroke={isDark?'#475569':'#94a3b8'} strokeWidth="1.5" strokeDasharray="3,3"/>
          {/* pan body */}
          <g style={{ transformOrigin:'118px 158px', animation:'ns-bob 4s ease-in-out infinite' }}>
            <ellipse cx="118" cy="158" rx="28" ry="7.5"
              fill={panL} stroke={armStr} strokeWidth="1.5" opacity="0.95"/>
            {/* document in left pan */}
            <rect x="107" y="149" width="22" height="8" rx="2"
              fill={docBg} stroke={docStr} strokeWidth="1" opacity="0.9"/>
            <line x1="111" y1="153" x2="125" y2="153" stroke={docStr} strokeWidth="1.2"/>
            <line x1="111" y1="155.5" x2="121" y2="155.5" stroke={docStr} strokeWidth="1"/>
          </g>
        </g>

        {/* ── Right arm + pan (bobs up, inverted) ── */}
        <g style={{ transformOrigin:'170px 102px', animation:'ns-sway-r 4s ease-in-out infinite' }}>
          <line x1="222" y1="102" x2="222" y2="148"
            stroke={isDark?'#475569':'#94a3b8'} strokeWidth="1.5" strokeDasharray="3,3"/>
          <g style={{ transformOrigin:'222px 158px', animation:'ns-bob-r 4s ease-in-out infinite' }}>
            <ellipse cx="222" cy="158" rx="28" ry="7.5"
              fill={panR} stroke={brand} strokeWidth="1.5" opacity="0.95"/>
            {/* checkmark in right pan */}
            <g transform="translate(208,149)">
              <rect width="28" height="18" rx="4" fill={chkBg} stroke={brand} strokeWidth="1"/>
              <path d="M7 9 L12 14 L21 5" stroke={brand} strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>
        </g>

        {/* ── Floating document card (left) ── */}
        <g style={{ animation:'ns-float 5s ease-in-out infinite', transformOrigin:'52px 120px' }}>
          <rect x="18" y="90" width="68" height="84" rx="8"
            fill={isDark?'rgba(30,58,95,0.75)':'rgba(219,234,254,0.85)'}
            stroke={isDark?'rgba(59,130,246,0.4)':'rgba(96,165,250,0.6)'}
            strokeWidth="1.5"/>
          {/* scan line */}
          <clipPath id="doc-clip-l"><rect x="18" y="90" width="68" height="84" rx="8"/></clipPath>
          <rect x="18" y="90" width="68" height="18"
            fill={brand} opacity="0.08"
            style={{ animation:'ns-scan 2.4s linear infinite' }}
            clipPath="url(#doc-clip-l)"/>
          {[0,1,2,3,4].map(i=>(
            <line key={i} x1="28" y1={106+i*13} x2={i===4?64:78} y2={106+i*13}
              stroke={isDark?'#3b82f6':'#60a5fa'} strokeWidth="1.5" opacity="0.7"/>
          ))}
          {/* AI badge */}
          <rect x="24" y="152" width="28" height="14" rx="7"
            fill={brand} opacity="0.18"/>
          <text x="38" y="163" textAnchor="middle" fontSize="7.5" fontWeight="700"
            fill={brand} fontFamily="system-ui">AI</text>
        </g>

        {/* ── Floating shield (right) ── */}
        <g style={{ animation:'ns-float2 6s ease-in-out infinite 0.8s', transformOrigin:'282px 140px' }}>
          <path d="M262 108 Q282 100 302 108 L302 148 Q282 168 262 148 Z"
            fill={isDark?'rgba(13,43,29,0.8)':'rgba(187,247,208,0.85)'}
            stroke={brand} strokeWidth="1.5"/>
          {/* checkmark */}
          <path d="M271 136 L278 143 L293 125"
            stroke={brand} strokeWidth="2.5" fill="none"
            strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* ── Floating particles ── */}
        {[
          { cx:58,  cy:58,  r:3.5, d:'ns-drift1', dur:'5.2s', delay:'0s'  },
          { cx:292, cy:72,  r:2.5, d:'ns-drift2', dur:'7.0s', delay:'1.3s'},
          { cx:45,  cy:210, r:4,   d:'ns-drift3', dur:'6.1s', delay:'2.1s'},
          { cx:300, cy:228, r:3,   d:'ns-drift1', dur:'8.3s', delay:'0.7s'},
          { cx:160, cy:48,  r:2,   d:'ns-drift2', dur:'4.8s', delay:'1.9s'},
          { cx:240, cy:260, r:3.5, d:'ns-drift3', dur:'9.0s', delay:'3.2s'},
          { cx:86,  cy:255, r:2.5, d:'ns-drift1', dur:'6.5s', delay:'0.4s'},
          { cx:270, cy:50,  r:3,   d:'ns-drift2', dur:'7.8s', delay:'2.6s'},
        ].map((p,i)=>(
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={brand}
            style={{ animation:`${p.d} ${p.dur} ease-in-out infinite ${p.delay}` }}/>
        ))}

        {/* ── Orbiting ring ── */}
        <circle cx="170" cy="165" r="75" fill="none"
          stroke={brand} strokeWidth="0.75" strokeDasharray="4 8" opacity="0.2"
          style={{ animation:'ns-spin-slow 18s linear infinite', transformOrigin:'170px 165px' }}/>
      </svg>

      {/* ── Trust badge strip ── */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        padding:'10px 16px',
        display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap',
        background: isDark
          ? 'linear-gradient(to top, rgba(15,23,42,0.9) 60%, transparent)'
          : 'linear-gradient(to top, rgba(240,253,249,0.95) 60%, transparent)',
        transition:'background 0.6s',
      }}>
        {[
          { icon: ShieldCheck, label:'Verified Lawyers' },
          { icon: Scale,       label:'AI-Powered'       },
          { icon: Users,       label:'10K+ Clients'     },
        ].map(({ icon: Icon, label }) => (
          <div key={label} style={{
            display:'flex', alignItems:'center', gap:5,
            padding:'5px 12px', borderRadius:999, fontSize:'0.7rem', fontWeight:700,
            background: isDark ? 'rgba(44,211,143,0.1)' : 'rgba(44,211,143,0.15)',
            border: '1px solid rgba(44,211,143,0.3)',
            color: isDark ? '#2cd38f' : '#059669',
            transition:'background 0.5s, color 0.5s',
          }}>
            <Icon size={11}/>{label}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Main AuthOverlay ──────────────────────────────────────────────────────── */
const AuthOverlay = ({ isOpen, onClose, theme }) => {
  const dispatch = useDispatch();
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({ firstName:'', lastName:'', email:'', password:'' });
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (isOpen) setTimeout(() => setAnimateIn(true), 10);
    else setAnimateIn(false);
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log(isLoginView ? 'Login:' : 'Signup:', formData); };

  const isDark = theme === 'dark';
  const brand  = '#2cd38f';

  /* Token map */
  const t = {
    backdrop:     isDark ? 'rgba(0,0,0,0.72)'               : 'rgba(15,23,42,0.28)',
    modal:        isDark ? '#0f172a'                         : '#ffffff',
    modalBorder:  isDark ? 'rgba(51,65,85,0.6)'             : 'rgba(203,213,225,1)',
    shadow:       isDark ? 'rgba(44,211,143,0.12)'          : 'rgba(44,211,143,0.18)',
    panel:        isDark ? '#1e293b'                         : '#f8fafc',
    panelBorder:  isDark ? 'rgba(51,65,85,0.4)'             : 'rgba(226,232,240,0.9)',
    text:         isDark ? '#f1f5f9'                         : '#0f172a',
    sub:          isDark ? '#94a3b8'                         : '#64748b',
    icon:         isDark ? '#64748b'                         : '#94a3b8',
    inputBg:      isDark ? 'rgba(15,23,42,0.6)'             : '#ffffff',
    inputBorder:  isDark ? 'rgba(71,85,105,0.5)'            : '#cbd5e1',
    divider:      isDark ? 'rgba(51,65,85,0.5)'             : '#e2e8f0',
    socialBg:     isDark ? '#1e293b'                         : '#ffffff',
    socialBorder: isDark ? 'rgba(51,65,85,0.6)'             : '#e2e8f0',
    socialText:   isDark ? '#cbd5e1'                         : '#334155',
    headerBorder: isDark ? 'rgba(51,65,85,0.45)'            : '#f1f5f9',
    toggleBg:     isDark ? 'rgba(30,41,59,0.9)'             : 'rgba(241,245,249,0.95)',
    checkBorder:  isDark ? '#475569'                         : '#94a3b8',
  };

  /* Shared focus handlers */
  const onFocus = e => { e.target.style.borderColor = brand; e.target.style.boxShadow = `0 0 0 3px rgba(44,211,143,0.14)`; };
  const onBlur  = e => { e.target.style.borderColor = t.inputBorder; e.target.style.boxShadow = 'none'; };

  const inputStyle = {
    width:'100%', borderRadius:12, padding:'12px 14px',
    fontSize:'0.875rem', outline:'none',
    background: t.inputBg, border:`1.5px solid ${t.inputBorder}`,
    color: t.text, transition:'background 0.5s, border-color 0.2s, color 0.5s',
    boxSizing:'border-box',
  };

  return createPortal(
    <div style={{
      position:'fixed', inset:0, zIndex:1000,
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'16px', overflowY:'auto',
      background: t.backdrop,
      backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
      fontFamily:"'Inter','SF Pro Display',system-ui,sans-serif",
      transition:'background 0.5s',
    }}>
      {/* Modal */}
      <div style={{
        position:'relative', width:'100%', maxWidth:960, maxHeight:'92vh',
        background: t.modal, border:`1px solid ${t.modalBorder}`,
        borderRadius:28, overflow:'hidden',
        boxShadow:`0 32px 80px ${t.shadow}, 0 8px 32px rgba(0,0,0,0.22)`,
        display:'flex', flexDirection:'column', margin:'auto',
        transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
        opacity: animateIn ? 1 : 0,
        transition:'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease, background 0.5s, border-color 0.5s',
      }}>

        {/* ── Header ── */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          padding:'14px 24px', borderBottom:`1px solid ${t.headerBorder}`,
          flexShrink:0, transition:'border-color 0.5s',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <img src={logo} alt="NyayaSetu" style={{ width:32, height:32, objectFit:'contain' }}/>
            <span style={{ fontWeight:800, fontSize:'1.15rem', color:t.text, letterSpacing:'-0.025em', transition:'color 0.5s' }}>
              NyayaSetu
            </span>
            <span style={{
              display:'inline-flex', alignItems:'center',
              padding:'2px 8px', borderRadius:999, fontSize:'0.6rem', fontWeight:800,
              letterSpacing:'0.06em', textTransform:'uppercase',
              background:'rgba(44,211,143,0.1)', color:brand, border:'1px solid rgba(44,211,143,0.22)',
            }}>LEGAL AI</span>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            {/* Theme pill */}
            <button onClick={() => dispatch(toggleTheme())} style={{
              display:'flex', alignItems:'center', gap:6,
              padding:'6px 14px', borderRadius:999, cursor:'pointer',
              background: t.toggleBg, border:`1px solid ${t.panelBorder}`,
              color: isDark ? '#fbbf24' : '#475569', fontSize:'0.75rem', fontWeight:700,
              transition:'all 0.3s',
            }}>
              {isDark ? <><Sun size={13}/><span>Light</span></> : <><Moon size={13}/><span>Dark</span></>}
            </button>

            {/* Close */}
            <button onClick={onClose} style={{
              width:34, height:34, borderRadius:'50%', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
              background:'transparent', border:`1px solid ${t.panelBorder}`,
              color: t.sub, transition:'all 0.2s',
            }}
              onMouseEnter={e=>{ e.currentTarget.style.background=isDark?'#1e293b':'#f1f5f9'; e.currentTarget.style.color=t.text; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color=t.sub; }}>
              <X size={15}/>
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ display:'flex', flexDirection:'row', gap:14, padding:14, overflowY:'auto', flex:1 }}>

          {/* ── Left: form ── */}
          <div style={{
            flex:1, display:'flex', flexDirection:'column',
            background: t.panel, border:`1px solid ${t.panelBorder}`,
            borderRadius:18, padding:'26px 26px 20px',
            transition:'background 0.5s, border-color 0.5s',
          }}>
            {/* Heading */}
            <div style={{ marginBottom:24 }}>
              <p style={{ fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.1em', color:brand, textTransform:'uppercase', marginBottom:5 }}>
                {isLoginView ? 'Welcome back' : 'Get started'}
              </p>
              <h1 style={{ fontSize:'1.55rem', fontWeight:800, color:t.text, letterSpacing:'-0.03em', lineHeight:1.2, margin:0, transition:'color 0.5s' }}>
                {isLoginView ? 'Log in to your account' : 'Create your account'}
              </h1>
              <p style={{ color:t.sub, fontSize:'0.85rem', marginTop:5, transition:'color 0.5s' }}>
                {isLoginView ? 'Access your legal dashboard.' : 'Join our verified legal network.'}
              </p>
            </div>

            {/* Fields */}
            <div style={{ display:'flex', flexDirection:'column', gap:12, flex:1 }}>

              {/* Name row */}
              {!isLoginView && (
                <div style={{ display:'flex', gap:10 }}>
                  {['firstName','lastName'].map((field,i) => (
                    <div key={field} style={{ position:'relative', flex:1 }}>
                      {i===0 && <User size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:t.icon, pointerEvents:'none' }}/>}
                      <input type="text" name={field} placeholder={i===0?'First Name':'Last Name'}
                        value={formData[field]} onChange={handleInputChange} required
                        style={{ ...inputStyle, paddingLeft: i===0?38:14 }}
                        onFocus={onFocus} onBlur={onBlur}/>
                    </div>
                  ))}
                </div>
              )}

              {/* Email */}
              <div style={{ position:'relative' }}>
                <Mail size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:t.icon, pointerEvents:'none' }}/>
                <input type="email" name="email" placeholder="Email address"
                  value={formData.email} onChange={handleInputChange} required
                  style={{ ...inputStyle, paddingLeft:38 }} onFocus={onFocus} onBlur={onBlur}/>
              </div>

              {/* Password */}
              <div style={{ position:'relative' }}>
                <Lock size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:t.icon, pointerEvents:'none' }}/>
                <input type={showPassword?'text':'password'} name="password" placeholder="Password"
                  value={formData.password} onChange={handleInputChange} required
                  style={{ ...inputStyle, paddingLeft:38, paddingRight:44 }} onFocus={onFocus} onBlur={onBlur}/>
                <button type="button" onClick={()=>setShowPassword(!showPassword)}
                  style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:t.icon, display:'flex' }}
                  onMouseEnter={e=>e.currentTarget.style.color=brand}
                  onMouseLeave={e=>e.currentTarget.style.color=t.icon}>
                  {showPassword ? <Eye size={16}/> : <EyeOff size={16}/>}
                </button>
              </div>

              {/* Remember / Forgot */}
              {isLoginView && (
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:2 }}>
                  <label style={{ display:'flex', alignItems:'center', gap:7, cursor:'pointer' }}>
                    <div style={{ position:'relative', width:16, height:16, border:`1.5px solid ${t.checkBorder}`, borderRadius:4, background:'transparent', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <input type="checkbox" className="peer" style={{ position:'absolute', opacity:0, inset:0, width:'100%', height:'100%', cursor:'pointer' }}/>
                      <svg className="hidden peer-checked:block" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.8 7L9 1" stroke={brand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize:'0.78rem', color:t.sub }}>Remember me</span>
                  </label>
                  <a href="#" style={{ fontSize:'0.78rem', color:brand, fontWeight:700, textDecoration:'none' }}
                    onMouseEnter={e=>e.target.style.textDecoration='underline'}
                    onMouseLeave={e=>e.target.style.textDecoration='none'}>Forgot password?</a>
                </div>
              )}

              {/* CTA */}
              <button onClick={handleSubmit} style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                padding:'13px 0', marginTop:6, borderRadius:12, cursor:'pointer', border:'none',
                background: brand, color:'#0f172a', fontWeight:800, fontSize:'0.88rem',
                boxShadow:`0 8px 24px rgba(44,211,143,0.28)`, letterSpacing:'-0.01em',
                transition:'all 0.2s',
              }}
                onMouseEnter={e=>{ e.currentTarget.style.background='#25b87c'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(44,211,143,0.38)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.background=brand; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(44,211,143,0.28)'; }}>
                {isLoginView ? 'Log in' : 'Create account'}
                <ArrowRight size={16} strokeWidth={2.5}/>
              </button>
            </div>

            {/* Social */}
            <div style={{ marginTop:22 }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                <div style={{ flex:1, height:1, background:t.divider, transition:'background 0.5s' }}/>
                <span style={{ fontSize:'0.72rem', color:t.sub, whiteSpace:'nowrap' }}>or continue with</span>
                <div style={{ flex:1, height:1, background:t.divider, transition:'background 0.5s' }}/>
              </div>
              <div style={{ display:'flex', gap:10 }}>
                {[
                  {
                    label:'Google', hoverBorder:'#4285F4',
                    icon:(
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    ),
                  },
                  {
                    label:'Facebook', hoverBorder:'#1877F2',
                    icon:(
                      <svg width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                  },
                ].map(({ label, icon, hoverBorder }) => (
                  <button key={label} style={{
                    flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                    padding:'10px 0', borderRadius:12, cursor:'pointer',
                    background: t.socialBg, border:`1.5px solid ${t.socialBorder}`,
                    color: t.socialText, fontSize:'0.8rem', fontWeight:700,
                    transition:'all 0.2s',
                  }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor=hoverBorder; e.currentTarget.style.transform='translateY(-1px)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.socialBorder; e.currentTarget.style.transform='translateY(0)'; }}>
                    {icon}{label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile toggle */}
            <div style={{ marginTop:18, textAlign:'center' }} className="md:hidden">
              <p style={{ fontSize:'0.8rem', color:t.sub }}>
                {isLoginView ? 'New to NyayaSetu? ' : 'Already have an account? '}
                <button onClick={()=>setIsLoginView(!isLoginView)} style={{ color:brand, fontWeight:700, background:'none', border:'none', cursor:'pointer', fontSize:'inherit' }}>
                  {isLoginView ? 'Create an account' : 'Log in here'}
                </button>
              </p>
            </div>
          </div>

          {/* ── Right: animated banner ── */}
          <div className="hidden md:flex" style={{
            flex:1, flexDirection:'column', borderRadius:18, overflow:'hidden',
            border:`1px solid ${t.panelBorder}`, minHeight:360, position:'relative',
            transition:'border-color 0.5s',
          }}>
            {/* Animation fills top 62% */}
            <div style={{ flex:1, position:'relative', minHeight:200 }}>
              <LegalAnimation isDark={isDark}/>
            </div>

            {/* Bottom CTA strip */}
            <div style={{
              padding:'20px 24px',
              background: t.panel, borderTop:`1px solid ${t.panelBorder}`,
              transition:'background 0.5s, border-color 0.5s',
            }}>
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 }}>
                <div>
                  <h3 style={{ fontSize:'1.15rem', fontWeight:800, color:t.text, letterSpacing:'-0.025em', margin:0, lineHeight:1.25, transition:'color 0.5s' }}>
                    {isLoginView ? 'New to NyayaSetu?' : 'Already a member?'}
                  </h3>
                  <p style={{ fontSize:'0.78rem', color:t.sub, marginTop:4, transition:'color 0.5s' }}>
                    {isLoginView ? 'Connect with verified lawyers instantly.' : 'Pick up right where you left off.'}
                  </p>
                </div>
                <button onClick={()=>setIsLoginView(!isLoginView)} style={{
                  padding:'9px 18px', borderRadius:12, flexShrink:0,
                  border:`2px solid ${brand}`, color:brand, background:'transparent',
                  cursor:'pointer', fontSize:'0.82rem', fontWeight:700, letterSpacing:'-0.01em',
                  transition:'all 0.2s',
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.background=brand; e.currentTarget.style.color='#0f172a'; e.currentTarget.style.transform='translateY(-1px)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color=brand; e.currentTarget.style.transform='translateY(0)'; }}>
                  {isLoginView ? 'Sign Up →' : 'Log In →'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default AuthOverlay;