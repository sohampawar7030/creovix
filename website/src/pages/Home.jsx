import React, { useState } from 'react';
import { SERVICES_DATA } from './Services';

const Home = (props) => {
  const {
    terminalTab, setTerminalTab,
    terminalLogs, setTerminalLogs,
    selectedCompetitor,
    auditRunning,
    auditProgress,
    auditResults,
    userScanUrl, setUserScanUrl,
    isScanningUserSite,
    userScanProgress,
    userScanReport,
    calcTraffic, setCalcTraffic,
    calcConv, setCalcConv,
    calcValue, setCalcValue,
    runSpeedAudit,
    triggerUserSiteScan,
    triggerTerminalAction,
    navigateTo,
    testimonials = [],
    userScanConsoleLogs = []
  } = props;

  // Local state for testimonial slider index if needed
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // List of keywords for moving tech ribbon
  const techKeywords = [
    'Agentic AI', 'AI-Artificial General Intelligence', 'AI Ethics', 'Cognitive Computing',
    'Big Data', 'Autonomous', 'Computer Vision', 'NLP', 'Reinforcement Learning',
    'Data Mining', 'Large Language Model (LLM)', 'Machine Translation', 'Sentiment Analysis', 'Transfer Learning'
  ];

  return (
    <>
      <style>{`
        .home-page-corp {
          background-color: #FFFFFF;
          color: #0F172A;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          text-align: left;
        }

        .section-pad {
          padding: 56px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Typography */
        .hero-title {
          font-size: clamp(34px, 5.5vw, 56px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.035em;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .section-tag {
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          color: #2563EB;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 8px;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin: 0 0 16px;
          line-height: 1.25;
        }
        .section-subtitle {
          font-size: 16px;
          color: #64748B;
          max-width: 720px;
          line-height: 1.6;
        }

        /* CTAs */
        .btn-primary {
          background-color: #2563EB;
          border: 1px solid #2563EB;
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background-color: #1D4ED8;
          border-color: #1D4ED8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background-color: #F8FAFC;
          border-color: #94A3B8;
          color: #0F172A;
        }

        /* Grids */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .grid-3 { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 576px) {
          .grid-3 { grid-template-columns: 1fr; }
          .grid-4 { grid-template-columns: 1fr; }
        }

        /* Card styles */
        .card-panel {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          transition: all 0.3s ease;
          box-sizing: border-box;
          height: 100%;
        }
        .card-panel:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #EFF6FF;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Tech ribbon marquee styling */
        .marquee-container {
          background-color: #0F172A;
          padding: 16px 0;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid #1E293B;
          border-bottom: 1px solid #1E293B;
        }
        .marquee-track {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        .marquee-item {
          display: inline-block;
          color: #94A3B8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          margin-right: 48px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .marquee-item::after {
          content: '•';
          color: #2563EB;
          margin-left: 48px;
        }
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        /* Custom stepper numbers */
        .step-num {
          font-size: 32px;
          font-weight: 900;
          color: #E2E8F0;
          margin-bottom: 12px;
          line-height: 1;
        }
        .card-panel:hover .step-num {
          color: #2563EB;
        }

        /* Pulse glow for dashboard */
        .animated-pulse-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10B981;
          display: inline-block;
          animation: pulse-g 1.5s infinite;
        }
        @keyframes pulse-g {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `}</style>

      <div className="home-page-corp">

        {/* 1. HERO SECTION */}
        <section className="section-pad" style={{ background: 'radial-gradient(circle at 80% 20%, #F0F9FF 0%, #FFFFFF 100%)' }}>
          <div className="container">
            <div className="grid-2">
              
              {/* Left Column: Headline & Propositions */}
              <div>
                <h1 className="hero-title">
                  Revolutionize Your Business with <span style={{ color: '#2563EB' }}>Cutting-Edge AI</span> Solutions.
                </h1>
                <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, marginBottom: '32px' }}>
                  Empowering innovation with AI-driven tools tailored for your success. We build high-performance custom applications, web networks, and automated agent flows.
                </p>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
                  <button onClick={() => navigateTo('services')} className="btn-primary">
                    Discover More
                  </button>
                  <button onClick={() => navigateTo('contact')} className="btn-secondary">
                    Contact Us
                  </button>
                </div>

                {/* Partner logos row */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                    Trusted by local and global partners:
                  </span>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {['Hillgreen High', 'Udaan Academy', 'Happyland Prep', 'Careweigh Clinic', 'Soulful Escapes'].map((p, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '50px',
                          padding: '6px 16px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#64748B',
                          boxShadow: '0 2px 8px rgba(15,23,42,0.02)'
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Code IDE Panel Placeholder (Keep interactive terminal here!) */}
              <div style={{ width: '100%' }}>
                <div style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '16px',
                  border: '1px solid #334155',
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
                  overflow: 'hidden',
                  fontFamily: "'DM Mono', monospace"
                }}>
                  {/* IDE Header Bar */}
                  <div style={{
                    backgroundColor: '#1E293B',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #334155'
                  }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }}></span>
                      <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }}></span>
                      <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {['App.jsx', 'whatsappWebhook.js', 'leads.db'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTerminalTab(tab)}
                          style={{
                            backgroundColor: terminalTab === tab ? '#0F172A' : 'transparent',
                            color: terminalTab === tab ? '#38BDF8' : '#94A3B8',
                            border: 'none',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    <span style={{ fontSize: '10px', color: '#64748B' }}>bash / node</span>
                  </div>

                  {/* Code Panel text */}
                  <div style={{ padding: '20px', minHeight: '180px', color: '#E2E8F0', fontSize: '13px', lineHeight: '1.6', overflowX: 'auto' }}>
                    {terminalTab === 'App.jsx' && (
                      <div>
                        <span style={{ color: '#F472B6' }}>import</span> React <span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#34D399' }}>'react'</span>;<br/>
                        <span style={{ color: '#38BDF8' }}>const</span> <span style={{ color: '#FBBF24' }}>CreovixAgency</span> = () =&gt; &#123;<br/>
                        &nbsp;&nbsp;<span style={{ color: '#F472B6' }}>return</span> (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38BDF8' }}>div</span> className=<span style={{ color: '#34D399' }}>"pune-elite-vitals"</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38BDF8' }}>SpeedTarget</span> value=&#123;<span style={{ color: '#FBBF24' }}>100</span>&#125; /&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38BDF8' }}>WhatsAppRouter</span> autoResponse=&#123;<span style={{ color: '#FBBF24' }}>true</span>&#125; /&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#38BDF8' }}>div</span>&gt;<br/>
                        &nbsp;&nbsp;);<br/>
                        &#125;;
                      </div>
                    )}
                    
                    {terminalTab === 'whatsappWebhook.js' && (
                      <div>
                        <span style={{ color: '#64748B' }}>// Webhook Router configuration</span><br/>
                        exports.<span style={{ color: '#FBBF24' }}>receivePayload</span> = (req, res) =&gt; &#123;<br/>
                        &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>const</span> lead = req.body.lead;<br/>
                        &nbsp;&nbsp;<span style={{ color: '#F472B6' }}>if</span> (lead.category === <span style={{ color: '#34D399' }}>"admissions"</span>) &#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;triggerWhatsApp(<span style={{ color: '#34D399' }}>"Sending fee structures..."</span>);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;syncToLocalCRM(lead);<br/>
                        &nbsp;&nbsp;&#125;<br/>
                        &#125;;
                      </div>
                    )}

                    {terminalTab === 'leads.db' && (
                      <div>
                        &#123;<br/>
                        &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>"lead_origin"</span>: <span style={{ color: '#34D399' }}>"Pune Campus admissions"</span>,<br/>
                        &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>"sync_status"</span>: <span style={{ color: '#34D399' }}>"Verified CRM connector"</span>,<br/>
                        &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>"core_web_vitals"</span>: &#123; <span style={{ color: '#38BDF8' }}>"mobile"</span>: <span style={{ color: '#FBBF24' }}>99</span>, <span style={{ color: '#38BDF8' }}>"desktop"</span>: <span style={{ color: '#FBBF24' }}>100</span> &#125;,<br/>
                        &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>"optimization"</span>: <span style={{ color: '#34D399' }}>"React Single JSX File"</span><br/>
                        &#125;
                      </div>
                    )}
                  </div>

                  {/* Active Simulator triggers */}
                  <div style={{ backgroundColor: '#020617', borderTop: '1px solid #334155', padding: '16px', fontSize: '11px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontWeight: 'bold', color: '#38BDF8' }}>💻 D:\creovixai\console_out:</span>
                      <button
                        onClick={() => setTerminalLogs(['SYSTEM: Terminal cleared.', 'SYSTEM: Ready.'])}
                        style={{
                          background: 'transparent',
                          color: '#EF4444',
                          border: '1px solid #EF4444',
                          borderRadius: '4px',
                          padding: '2px 8px',
                          fontSize: '9px',
                          cursor: 'pointer'
                        }}
                      >
                        Clear
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <button onClick={() => triggerTerminalAction('crm')} style={{ backgroundColor: '#1E293B', color: '#FFFFFF', border: '1px solid #475569', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '10px' }}>
                        Validate Webhook
                      </button>
                      <button onClick={() => triggerTerminalAction('vitals')} style={{ backgroundColor: '#1E293B', color: '#FFFFFF', border: '1px solid #475569', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '10px' }}>
                        Audit Vitals
                      </button>
                      <button onClick={() => triggerTerminalAction('chatbot')} style={{ backgroundColor: '#1E293B', color: '#FFFFFF', border: '1px solid #475569', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '10px' }}>
                        Run AI LLM Flow
                      </button>
                    </div>

                    <div style={{ maxHeight: '100px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {terminalLogs.map((l, i) => (
                        <div key={i} style={{ color: l.includes('✅') || l.includes('🤖') ? '#10B981' : '#E2E8F0' }}>{l}</div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section className="section-pad" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="section-tag">Our Services</span>
              <h2 className="section-title">Intelligent Innovations: Tailored AI Solutions</h2>
              <p className="section-subtitle">We design, build, and optimize AI models tailored to your business needs, delivering high-performance scalable software.</p>
            </div>

            <div className="grid-4">
              {SERVICES_DATA.map((service, idx) => (
                <div key={idx} className="card-panel">
                  <div className="icon-box">
                    {service.icon}
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 10px', color: '#0F172A' }}>{service.title}</h4>
                  <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px' }}>
                    {service.shortDesc}
                  </p>
                  <span onClick={() => navigateTo('services')} style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', cursor: 'pointer' }}>Read More →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MOVING TECH KEYWORDS RIBBON */}
        <div className="marquee-container">
          <div className="marquee-track">
            {techKeywords.concat(techKeywords).map((keyword, idx) => (
              <span key={idx} className="marquee-item">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* 4. SPEED VITALS AUDIT SIMULATOR (Keep this super useful interactive tool!) */}
        <section className="section-pad" style={{ backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
              <span className="section-tag">Performance Check</span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                How Fast is Your Competitor’s Website?
              </h2>
              <p style={{ fontSize: '14.5px', color: '#94A3B8' }}>
                Slow templates (WordPress/Wix) drop conversions by 70%. Choose a sector below to test the loading speed difference:
              </p>
            </div>

            <div className="grid-2" style={{ alignItems: 'start' }}>
              
              {/* Select Sector */}
              <div style={{ backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: '#FFFFFF' }}>1. Select Competitor Platform</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { id: 'avg-school', label: 'Average WordPress School Site', desc: 'Heavy page templates, slow image grids' },
                    { id: 'avg-academy', label: 'Typical Heavy Builder Academy Portal', desc: 'Bloated with multi-plugins, slow mobile load' },
                    { id: 'avg-clinic', label: 'Unoptimized Local Hospital Theme', desc: 'Slow response, layout shifts during load' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => { if (!auditRunning) runSpeedAudit(item.id); }}
                      style={{
                        border: '1px solid',
                        borderColor: selectedCompetitor === item.id ? '#2563EB' : '#334155',
                        backgroundColor: selectedCompetitor === item.id ? 'rgba(37, 99, 235, 0.08)' : '#0F172A',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        cursor: auditRunning ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <strong style={{ fontSize: '13.5px', color: '#FFFFFF', display: 'block' }}>{item.label}</strong>
                      <span style={{ fontSize: '11px', color: '#94A3B8' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => runSpeedAudit(selectedCompetitor)}
                  disabled={auditRunning}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {auditRunning ? `Auditing (${auditProgress}%)` : 'Start Performance Audit ⚡'}
                </button>
              </div>

              {/* Audit Results Dashboard */}
              <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px', padding: '24px', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {auditRunning ? (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '4px solid #1E293B', borderTopColor: '#38BDF8', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }}></div>
                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    <span style={{ color: '#E2E8F0', fontSize: '13.5px' }}>Auditing client load times...</span>
                  </div>
                ) : auditResults ? (
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#F1F5F9', marginBottom: '16px', borderBottom: '1px solid #1E293B', paddingBottom: '10px' }}>
                      Audit Results: {auditResults.competitorName}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                          <span style={{ color: '#94A3B8' }}>Lighthouse Score</span>
                          <span style={{ color: '#10B981' }}>CreovixAI: {auditResults.ourSpeed}/100</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: '#1E293B', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${auditResults.ourSpeed}%`, backgroundColor: '#10B981', height: '100%' }}></div>
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ backgroundColor: '#1E293B', padding: '12px', borderRadius: '6px' }}>
                          <span style={{ fontSize: '10px', color: '#64748B', display: 'block' }}>COMPETITOR SPEED (LCP)</span>
                          <strong style={{ fontSize: '16px', color: '#EF4444' }}>{auditResults.competitorLcp}</strong>
                        </div>
                        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                          <span style={{ fontSize: '10px', color: '#34D399', display: 'block' }}>OUR SPEED (LCP)</span>
                          <strong style={{ fontSize: '16px', color: '#10B981' }}>{auditResults.ourLcp}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: '#64748B', fontSize: '13px' }}>
                    Click "Start Performance Audit" to run simulated vitals.
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* 5. NEXTASTRA COPIED INFO SECTION */}
        <section className="section-pad">
          <div className="container">
            <div className="grid-2">
              
              {/* Stat block */}
              <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '48px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '72px', fontWeight: 900, color: '#38BDF8', display: 'block', lineHeight: 1 }}>75+</span>
                <span style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', margin: '12px 0 20px' }}>
                  AI & Automation Projects
                </span>
                <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                  Delivering high-performance custom applications, web frameworks, and automated integrations.
                </p>
              </div>

              {/* 4 Pillars detail */}
              <div>
                <span className="section-tag">NextAstra Advantage</span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>
                  Redefining Possibility
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-2">
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#0F172A', display: 'block', marginBottom: '4px' }}>01. Expert Team</strong>
                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0 }}>Certified professionals with deep technical knowledge delivering trusted, high-performance solutions.</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#0F172A', display: 'block', marginBottom: '4px' }}>02. Personalized Solutions</strong>
                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0 }}>Customized AI strategies aligned with your goals, challenges, timelines, and operational constraints.</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#0F172A', display: 'block', marginBottom: '4px' }}>03. Innovative Thinking</strong>
                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0 }}>Driven by curiosity and technology trends, we craft forward-looking, future-ready solutions that scale.</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#0F172A', display: 'block', marginBottom: '4px' }}>04. Continuous Commitment</strong>
                    <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0 }}>Dedicated to long-term success through reliable partnerships, transparent processes, and measurable impact.</p>
                  </div>
                </div>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', maxWidth: '800px', margin: '40px auto 0' }}>
              <p style={{ fontSize: '14.5px', color: '#475569', fontStyle: 'italic' }}>
                "Choosing us means partnering with a forward-thinking team that’s as invested in your success as you are. Together, we’ll unlock the full potential of AI to transform your business."
              </p>
            </div>
          </div>
        </section>

        {/* 6. FOUR STAGE WORKFLOW TIMELINE */}
        <section className="section-pad" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="section-tag">Our Workflow</span>
              <h2 className="section-title">The Engineering Pipeline</h2>
            </div>

            <div className="grid-4">
              
              {/* Stage 1 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="step-num">01</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Custom AI Platform Development</h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Specializing in the design, architecture, & building of tailored AI platforms. Selecting technologies, ensuring scalability & integrating.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="step-num">02</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Intelligent Tool & Solution Building</h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Creating specific AI-powered tools that address particular challenges, leveraging ML, deep learning, visual AI, generative AI and IoT.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="step-num">03</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>End-to-End Integration</h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Offering comprehensive services for integrating AI platforms into existing IT infrastructure, support, maintenance, and optimization.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="step-num">04</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Tailored AI Services & Support</h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Providing expert custom development services for a wide range of AI applications, data engineering, and intelligent workflows.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 7. WEB SCRAPER DIAGNOSTIC SIMULATOR (Keep this high-value interactive scraper tool!) */}
        <section className="section-pad" style={{ backgroundColor: '#090D16', color: '#FFFFFF', borderTop: '1px solid #1E293B', borderBottom: '1px solid #1E293B' }}>
          <div className="container">
            
            {/* Header info */}
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <span className="section-tag" style={{ color: '#EF4444' }}>Deep Diagnostic Audit</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Audit Your Website for Code & Speed Errors
              </h2>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6 }}>
                Enter any website URL below. Our engine will live-scrape the site's code to find layout blocking scripts and CMS bloat:
              </p>
            </div>

            {/* Input form */}
            <div style={{ maxWidth: '640px', margin: '0 auto 40px' }}>
              <div style={{
                display: 'flex',
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '12px',
                padding: '8px',
                gap: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1, paddingLeft: '12px', gap: '8px' }}>
                  <span style={{ color: '#6B7280', fontSize: '14px' }}>https://</span>
                  <input
                    type="text"
                    placeholder="e.g. www.youracademy.com"
                    value={userScanUrl}
                    onChange={(e) => setUserScanUrl(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#FFFFFF',
                      fontSize: '14.5px',
                      padding: '8px 0'
                    }}
                  />
                </div>
                <button
                  onClick={() => triggerUserSiteScan(userScanUrl || 'yourcompany.com')}
                  disabled={isScanningUserSite}
                  className="btn-primary"
                  style={{
                    backgroundColor: '#EF4444',
                    borderColor: '#EF4444',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {isScanningUserSite ? (
                    <>
                      <span className="pulse-dot" style={{ backgroundColor: '#EF4444', width: '6px', height: '6px', margin: 0 }} />
                      Scanning... {userScanProgress}%
                    </>
                  ) : (
                    <>Run Scan 🔍</>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated terminal during scanning */}
            {isScanningUserSite && (
              <div style={{
                maxWidth: '720px',
                margin: '0 auto',
                backgroundColor: '#05070C',
                border: '1px solid #1E293B',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
              }} className="animate-fade-in">
                {/* Console header */}
                <div style={{ backgroundColor: '#0F172A', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>bash - live-scraper.sh</span>
                </div>
                {/* Console contents */}
                <div style={{ padding: '20px', fontFamily: "'Courier New', Courier, monospace", fontSize: '13px', lineHeight: 1.6, height: '240px', overflowY: 'auto', color: '#10B981', textAlign: 'left' }}>
                  {userScanConsoleLogs.map((log, i) => (
                    <div key={i} style={{ color: log.includes('⚠️') || log.includes('WARNING') ? '#F59E0B' : log.includes('🚨') || log.includes('FAIL') ? '#EF4444' : '#34D399' }}>
                      <span style={{ color: '#64748B', marginRight: '8px' }}>$</span> {log}
                    </div>
                  ))}
                  <div style={{ color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: '#3B82F6', margin: 0 }} />
                    <span>Analyzing DOM tree payload nodes...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Diagnostic Report Panel */}
            {userScanReport && !isScanningUserSite && (
              <div style={{
                backgroundColor: '#111827',
                border: '1px solid #1F2937',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
                marginTop: '40px',
                textAlign: 'left'
              }} className="animate-fade-in">
                
                {/* Top header bar */}
                <div style={{
                  padding: '24px 32px',
                  backgroundColor: '#1F2937',
                  borderBottom: '1px solid #374151',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                      AUDIT COMPLETE
                    </span>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                      Scan Report for {userScanReport.targetUrl}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{
                      backgroundColor: userScanReport.speedScore < 45 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: userScanReport.speedScore < 45 ? '#F87171' : '#FBBF24',
                      border: `1px solid ${userScanReport.speedScore < 45 ? '#EF4444' : '#F59E0B'}`,
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      Status: {userScanReport.dangerLevel}
                    </span>
                  </div>
                </div>

                {/* Dashboard layout */}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  
                  {/* Left Column - Metrics & Anatomy */}
                  <div style={{
                    flex: '1 1 380px',
                    padding: '32px',
                    borderRight: '1px solid #1F2937',
                    backgroundColor: '#111827'
                  }}>
                    
                    {/* Circle gauge */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px', textAlign: 'center' }}>
                      <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '16px' }}>
                        
                        {/* SVG Gauge */}
                        <svg width="130" height="130" viewBox="0 0 100 100">
                          {/* Track */}
                          <circle cx="50" cy="50" r="42" fill="transparent" stroke="#1E293B" strokeWidth="8" />
                          {/* Indicator */}
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="transparent"
                            stroke={userScanReport.speedScore < 45 ? '#EF4444' : userScanReport.speedScore < 85 ? '#F59E0B' : '#10B981'}
                            strokeWidth="8"
                            strokeDasharray="263.8"
                            strokeDashoffset={263.8 - (263.8 * userScanReport.speedScore) / 100}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dashoffset 1s ease' }}
                          />
                        </svg>
                        
                        {/* Text inside gauge */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <strong style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                            {userScanReport.speedScore}
                          </strong>
                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>/ 100</span>
                        </div>
                      </div>

                      <strong style={{
                        fontSize: '15px',
                        color: userScanReport.speedScore < 45 ? '#F87171' : userScanReport.speedScore < 85 ? '#FBBF24' : '#34D399',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {userScanReport.speedScore < 45 ? 'Critical Speed Deficit' : userScanReport.speedScore < 85 ? 'Average Performance' : 'Optimized Speed'}
                      </strong>
                      <span style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                        Google Core Web Vitals score based on mobile parsing
                      </span>
                    </div>

                    {/* Detected Tech Stack */}
                    <div style={{ backgroundColor: '#1F2937', padding: '16px', borderRadius: '10px', marginBottom: '32px' }}>
                      <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                        Detected Architecture Stack
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px'
                        }}>
                          ⚙️
                        </div>
                        <div>
                          <strong style={{ fontSize: '13.5px', color: '#FFFFFF', display: 'block' }}>{userScanReport.techStack}</strong>
                          <span style={{ fontSize: '11px', color: '#94A3B8' }}>{userScanReport.isMock ? 'Simulated connection profile' : 'Direct DOM inspected'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Page Weight Breakdown */}
                    <div style={{ marginBottom: '32px' }}>
                      <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Page Weight Anatomy
                      </span>
                      
                      {/* Stacked bar */}
                      <div style={{ display: 'flex', height: '14px', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px', backgroundColor: '#1F2937' }}>
                        <div style={{ width: '45%', backgroundColor: '#EF4444' }} title="Images" />
                        <div style={{ width: '35%', backgroundColor: '#F59E0B' }} title="JavaScript" />
                        <div style={{ width: '15%', backgroundColor: '#3B82F6' }} title="CSS Stylesheets" />
                        <div style={{ width: '5%', backgroundColor: '#10B981' }} title="HTML Code" />
                      </div>

                      {/* Legend */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                          <span>Images: {userScanReport.imageCount} files</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                          <span>JS Scripts: {userScanReport.scriptCount} tags</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B82F6' }} />
                          <span>CSS links: {userScanReport.stylesheetCount} files</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                          <span>HTML Size: {userScanReport.htmlSizeKb} KB</span>
                        </div>
                      </div>
                    </div>

                    {/* waterfall loading timeline */}
                    <div>
                      <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Simulated Mobile Loading Timeline
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#CBD5E1' }}>
                            <span>DNS Connection Handshake</span>
                            <strong>0.1s</strong>
                          </div>
                          <div style={{ height: '4px', backgroundColor: '#1F2937', borderRadius: '2px' }}>
                            <div style={{ width: '8%', height: '100%', backgroundColor: '#10B981', borderRadius: '2px' }} />
                          </div>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#CBD5E1' }}>
                            <span>First Paint (Visible elements)</span>
                            <strong>{userScanReport.speedScore > 70 ? '0.5s' : '2.1s'}</strong>
                          </div>
                          <div style={{ height: '4px', backgroundColor: '#1F2937', borderRadius: '2px' }}>
                            <div style={{ width: userScanReport.speedScore > 70 ? '25%' : '65%', height: '100%', backgroundColor: '#F59E0B', borderRadius: '2px' }} />
                          </div>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#CBD5E1' }}>
                            <span>Largest Contentful Paint (Fully loaded)</span>
                            <strong style={{ color: '#EF4444' }}>{userScanReport.lcpTime}</strong>
                          </div>
                          <div style={{ height: '4px', backgroundColor: '#1F2937', borderRadius: '2px' }}>
                            <div style={{ width: userScanReport.speedScore > 70 ? '30%' : '90%', height: '100%', backgroundColor: '#EF4444', borderRadius: '2px' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column - Audits, Benchmarks & Solutions */}
                  <div style={{
                    flex: '1 1 420px',
                    padding: '32px',
                    backgroundColor: '#0F172A'
                  }}>
                    
                    {/* Technology Gap & Feature Analysis */}
                    {userScanReport.featureAnalysis && (
                      <div style={{ marginBottom: '32px' }}>
                        <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700, display: 'block', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          🛠️ System Gap & Intelligent Feature Analysis
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          {userScanReport.featureAnalysis.map((feat, idx) => (
                            <div key={idx} style={{
                              backgroundColor: '#111827',
                              border: '1px solid #1F2937',
                              borderLeft: `4px solid ${feat.status.includes('MISSING') ? '#EF4444' : '#10B981'}`,
                              borderRadius: '8px',
                              padding: '16px'
                            }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                <strong style={{ color: '#FFFFFF', fontSize: '13.5px' }}>{feat.name}</strong>
                                <span style={{
                                  fontSize: '10px',
                                  color: feat.status.includes('MISSING') ? '#F87171' : '#34D399',
                                  backgroundColor: feat.status.includes('MISSING') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                  padding: '2px 8px',
                                  borderRadius: '4px',
                                  fontWeight: 700
                                }}>
                                  {feat.status}
                                </span>
                              </div>
                              <p style={{ fontSize: '12px', color: '#CBD5E1', margin: '0 0 10px', lineHeight: 1.4 }}>
                                <strong>⚠️ Impact:</strong> {feat.impact}
                              </p>
                              <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.05)', border: '1px dashed rgba(56, 189, 248, 0.2)', padding: '10px', borderRadius: '6px' }}>
                                <strong style={{ color: '#38BDF8', fontSize: '12px', display: 'block', marginBottom: '2px' }}>🚀 Recommendation:</strong>
                                <span style={{ fontSize: '11.5px', color: '#BAE6FD', lineHeight: 1.4, display: 'block' }}>{feat.solution}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Failures list */}
                    <div style={{ marginBottom: '32px' }}>
                      <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                        Identified Code Vulnerabilities ({userScanReport.failures.length})
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {userScanReport.failures.map((f, i) => (
                          <div key={i} style={{
                            backgroundColor: '#111827',
                            border: '1px solid #1F2937',
                            borderLeft: '4px solid #EF4444',
                            borderRadius: '8px',
                            padding: '16px'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                              <strong style={{ color: '#EF4444', fontSize: '13.5px' }}>🚨 {f.title}</strong>
                              <span style={{ fontSize: '10px', color: '#EF4444', backgroundColor: 'rgba(239,68,68,0.1)', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>
                                {f.danger}
                              </span>
                            </div>
                            <p style={{ fontSize: '12.5px', color: '#CBD5E1', margin: '0 0 10px', lineHeight: 1.5 }}>
                              {f.description}
                            </p>
                            <p style={{ fontSize: '12px', color: '#94A3B8', borderLeft: '2px solid #374151', paddingLeft: '8px', margin: '0 0 12px', fontStyle: 'italic' }}>
                              ⚠️ <strong>Local Impact ({userScanReport.scrapedCity || 'Pune'}):</strong> {f.dangerConsequence}
                            </p>
                            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px dashed rgba(16, 185, 129, 0.2)', padding: '10px', borderRadius: '6px' }}>
                              <strong style={{ color: '#10B981', fontSize: '12px', display: 'block', marginBottom: '2px' }}>💡 CreovixAI Remedy:</strong>
                              <span style={{ fontSize: '11.5px', color: '#A7F3D0', lineHeight: 1.4, display: 'block' }}>{f.remedy}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Competitor benchmarking table */}
                    <div style={{ marginBottom: '32px' }}>
                      <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                        Local Niche Comparison Benchmarks ({userScanReport.scrapedCity || 'Pune'})
                      </span>
                      <div style={{ overflowX: 'auto', border: '1px solid #1E293B', borderRadius: '8px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ backgroundColor: '#111827', borderBottom: '1px solid #1E293B' }}>
                              <th style={{ padding: '10px 12px', color: '#94A3B8' }}>Site Profile</th>
                              <th style={{ padding: '10px 12px', color: '#94A3B8' }}>Speed Score</th>
                              <th style={{ padding: '10px 12px', color: '#94A3B8' }}>Avg Load</th>
                              <th style={{ padding: '10px 12px', color: '#94A3B8' }}>Lead Conversion</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ borderBottom: '1px solid #1E293B' }}>
                              <td style={{ padding: '10px 12px', fontWeight: 700, color: '#EF4444' }}>Your Site</td>
                              <td style={{ padding: '10px 12px', color: '#EF4444' }}>{userScanReport.speedScore}/100</td>
                              <td style={{ padding: '10px 12px' }}>{userScanReport.lcpTime.split(' ')[0]}s</td>
                              <td style={{ padding: '10px 12px', color: '#EF4444' }}>Heavy Drops (Critical)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #1E293B' }}>
                              <td style={{ padding: '10px 12px', color: '#F59E0B' }}>Pune Local Avg</td>
                              <td style={{ padding: '10px 12px', color: '#F59E0B' }}>34/100</td>
                              <td style={{ padding: '10px 12px' }}>4.2s</td>
                              <td style={{ padding: '10px 12px', color: '#F59E0B' }}>Average (2-3%)</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgba(16, 185, 129, 0.04)' }}>
                              <td style={{ padding: '10px 12px', fontWeight: 700, color: '#10B981' }}>CreovixAI Rebuild</td>
                              <td style={{ padding: '10px 12px', fontWeight: 700, color: '#10B981' }}>99+/100</td>
                              <td style={{ padding: '10px 12px', fontWeight: 700, color: '#10B981' }}>0.6s</td>
                              <td style={{ padding: '10px 12px', fontWeight: 700, color: '#10B981' }}>Maximized (9-12%)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* WhatsApp lead responder simulation preview */}
                    <div style={{
                      backgroundColor: '#111827',
                      border: '1px solid #1F2937',
                      borderRadius: '12px',
                      padding: '16px',
                      marginBottom: '24px'
                    }}>
                      <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                        💬 Auto-Respond Pipeline Preview (Pune Hub)
                      </span>
                      <div style={{
                        backgroundColor: '#0F172A',
                        borderRadius: '8px',
                        border: '1px solid #1F2937',
                        padding: '12px',
                        fontSize: '12px',
                        position: 'relative'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', borderBottom: '1px solid #1F2937', paddingBottom: '6px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366' }} />
                          <strong style={{ color: '#FFFFFF' }}>CreovixAI Auto-Bot</strong>
                          <span style={{ fontSize: '10px', color: '#64748B', marginLeft: 'auto' }}>Just Now</span>
                        </div>
                        <p style={{ margin: 0, color: '#A7F3D0', lineHeight: 1.4 }}>
                          "Hello there! Thank you for inquiring from <strong>{userScanReport.scrapedCity || 'Pune'}</strong>. We have saved your lead automatically. Here is the customized brochure and pricing structure: <em>CreovixAI.com/pdf-brochure</em>"
                        </p>
                      </div>
                    </div>

                    {/* Rebuild CTA button */}
                    <button
                      onClick={() => navigateTo('contact')}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        backgroundColor: '#10B981',
                        borderColor: '#10B981',
                        color: '#FFFFFF',
                        padding: '16px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: 800,
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.2)'
                      }}
                    >
                      Fix Speed & Code Errors: Rebuild with CreovixAI ⚡
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>
        </section>

        {/* 8. INDUSTRIES SECTION */}
        <section className="section-pad">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="section-tag">Industries We Support</span>
              <h2 className="section-title">Unlock Intelligent Transformation in Industry</h2>
              <p className="section-subtitle">We deliver tailored AI solutions that drive innovation, efficiency, and growth across diverse sectors.</p>
            </div>

            <div className="grid-2" style={{ marginBottom: '48px' }}>
              
              {/* Detailed manufacturing block */}
              <div className="card-panel">
                <span className="section-tag" style={{ color: '#10B981' }}>Featured Sector</span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: '8px 0 16px' }}>Manufacturing Automation</h3>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                  At CreovixAI, we enable manufacturers to evolve into intelligent, data-driven enterprises by embedding AI, Machine Learning, and Data Engineering across operations.
                </p>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Our solutions optimize production, reduce downtime, improve quality, and drive sustainable growth. From Predictive Maintenance and Quality Inspection to Smart Energy Management, our models deliver real-time insights that power agility and efficiency.
                </p>
              </div>

              {/* 8 capabilities grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { title: 'AI Cybersecurity', desc: 'Leverage AI-driven threat detection to protect critical assets.' },
                  { title: 'Autonomous Systems', desc: 'Create autonomous systems that adapt to transport & logistics.' },
                  { title: 'Digital Twins', desc: 'Virtual replicas of physical systems for real-time simulation.' },
                  { title: 'Edge AI', desc: 'Deploy AI models directly to IoT and mobile device hardware.' },
                  { title: 'Generative AI', desc: 'Produce realistic text, images, and inputs to speed design.' },
                  { title: 'Multi-Agent Systems', desc: 'Coordinate multiple AI nodes to resolve complex operations.' },
                  { title: 'Predictive Analytics', desc: 'Harness data to forecast trends and stay ahead of competition.' },
                  { title: 'Voice Assistants', desc: 'Natural, human-like voice patterns to enhance client experiences.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '10px' }}>
                    <strong style={{ fontSize: '13.5px', color: '#0F172A', display: 'block', marginBottom: '4px' }}>{item.title}</strong>
                    <span style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.4, display: 'block' }}>{item.desc}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS SECTION */}
        <section className="section-pad" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="section-tag">Testimonials</span>
              <h2 className="section-title">Client Success Stories</h2>
            </div>

            <div className="grid-3" style={{ marginBottom: '32px' }}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="card-panel" style={{ backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '13.5px', fontStyle: 'italic', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '13px',
                      flexShrink: 0
                    }}>
                      {t.initials || (t.author && t.author.split(' ').map(n => n[0]).join('')) || 'A'}
                    </div>
                    <div>
                      <strong style={{ fontSize: '13.5px', color: '#0F172A', display: 'block' }}>{t.author}</strong>
                      <span style={{ fontSize: '11px', color: '#64748B' }}>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. DYNAMIC ROI CALCULATOR TOOL (Keep this high-converting calculator!) */}
        <section className="section-pad">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <span className="section-tag">ROI Opportunity</span>
              <h2 className="section-title">Calculate Your Growth Potential</h2>
            </div>

            <div className="grid-2" style={{ alignItems: 'start' }}>
              
              {/* Sliders */}
              <div className="card-panel">
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span>Monthly Visitors</span>
                    <strong>{calcTraffic.toLocaleString()}</strong>
                  </div>
                  <input type="range" min="1000" max="50000" step="500" value={calcTraffic} onChange={(e) => setCalcTraffic(parseInt(e.target.value))} style={{ width: '100%' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span>Conversion Rate</span>
                    <strong>{calcConv}%</strong>
                  </div>
                  <input type="range" min="0.5" max="5" step="0.1" value={calcConv} onChange={(e) => setCalcConv(parseFloat(e.target.value))} style={{ width: '100%' }} />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span>Tuition / Contract Value</span>
                    <strong>₹{calcValue.toLocaleString()}</strong>
                  </div>
                  <input type="range" min="5000" max="200000" step="5000" value={calcValue} onChange={(e) => setCalcValue(parseInt(e.target.value))} style={{ width: '100%' }} />
                </div>
              </div>

              {/* Projections Card */}
              {(() => {
                const competitorConversions = Math.round(calcTraffic * (calcConv / 100));
                const competitorRevenue = competitorConversions * calcValue;
                const CreovixAIConv = Math.max(calcConv * 3, 4.8);
                const ourConversions = Math.round(calcTraffic * (CreovixAIConv / 100));
                const ourRevenue = ourConversions * calcValue;
                const incrementalRevenue = ourRevenue - competitorRevenue;

                return (
                  <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', borderRadius: '12px', padding: '24px' }}>
                    <h4 style={{ color: '#38BDF8', fontSize: '14px', fontWeight: 800, marginBottom: '16px' }}>PROJECTIONS</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>Current Enquiries:</span>
                        <span>{competitorConversions} leads</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#10B981' }}>
                        <span>Optimized Enquiries:</span>
                        <strong>{ourConversions} leads</strong>
                      </div>
                    </div>
                    <div style={{ borderTop: '1px solid #1E293B', paddingTop: '16px' }}>
                      <span style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>Incremental Annual Revenue Opportunity</span>
                      <strong style={{ fontSize: '28px', color: '#38BDF8' }}>₹{(incrementalRevenue * 12).toLocaleString()}</strong>
                    </div>
                    <button onClick={() => navigateTo('contact')} className="btn-primary" style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}>
                      Claim This Growth
                    </button>
                  </div>
                );
              })()}

            </div>
          </div>
        </section>

        {/* 11. BLOGS / NEWS SECTION */}
        <section className="section-pad" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="section-tag">View All Blogs</span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Latest Case Studies & Insights</h2>
              </div>
              <button onClick={() => navigateTo('contact')} className="btn-secondary">View All Post</button>
            </div>

            <div className="grid-3">
              
              {/* Blog 1 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <span style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '8px' }}>admin • October 8, 2025</span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Real-Time Kitting Validation with AI & Raspberry Pi 5
                </h3>
                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                  Using edge computing and smart sensors to automate component checks on assembly lines.
                </p>
                <span style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, cursor: 'pointer' }}>Read More »</span>
              </div>

              {/* Blog 2 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <span style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '8px' }}>admin • October 15, 2025</span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Harnessing AI for Crowd Safety and Intelligence
                </h3>
                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                  Analyzing video feeds with computer vision models to prevent overcrowding and manage exits.
                </p>
                <span style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, cursor: 'pointer' }}>Read More »</span>
              </div>

              {/* Blog 3 */}
              <div className="card-panel" style={{ backgroundColor: '#FFFFFF' }}>
                <span style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '8px' }}>admin • October 29, 2025</span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Transforming Business Operations with AI and Gen AI Powered Tools
                </h3>
                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                  Integrating LLMs into daily admin workflows to automate emails, reports, and data audits.
                </p>
                <span style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, cursor: 'pointer' }}>Read More »</span>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
