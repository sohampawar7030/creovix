import React, { useState, useEffect } from 'react';

const MarketingCampaigns = (props) => {
  const { navigateTo } = props;
  const [adBudget, setAdBudget] = useState(15000);
  const [adCpc, setAdCpc] = useState(25);
  const [convRate, setConvRate] = useState(3.5);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalClicks = Math.round(adBudget / adCpc);
  const totalLeads = Math.round(totalClicks * (convRate / 100));
  const costPerLead = totalLeads > 0 ? Math.round(adBudget / totalLeads) : 0;

  return (
    <>
      <style>{`
        .marketing-camp-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #EF4444 0%, #F87171 50%, #DC2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #EF4444;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 24px;
        }
        .card-panel {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(15,23,42,0.05);
          transition: all 0.3s ease;
        }
        .card-panel:hover {
          border-color: #FECACA;
          box-shadow: 0 10px 30px rgba(15,23,42,0.08);
          transform: translateY(-4px);
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 48px 0;
        }
        @media (max-width: 576px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin: 48px 0;
        }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
        .interactive-simulator {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          padding: 32px;
        }
        .btn-action {
          background: #EF4444;
          color: #FFFFFF;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-action:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);
        }
        .faq-item {
          border-bottom: 1px solid #E2E8F0;
          padding: 16px 0;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
          color: #0F172A;
        }
        .faq-answer {
          color: #475569;
          font-size: 14px;
          margin-top: 10px;
          line-height: 1.6;
        }
      `}</style>

      <div className="marketing-camp-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / Marketing Campaigns</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> High-converting Google & FB Ads</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              Paid Marketing & <span className="gradient-text">Lead Generation Ads</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Accelerate your revenue pipeline. We design and launch hyper-targeted ad campaigns on Google, Facebook, and Instagram to capture qualified local leads in Pune.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Launch Ad Campaigns</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Ad ROI Calculator ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom, CMS configurations) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Paid Marketing Ads ROI Calculator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Adjust range inputs to define monthly advertising budget limits, target cost-per-click values, and conversion rates to preview calculated lead costs.
            </p>

            <div className="interactive-simulator">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="grid-2">
                <div>
                  <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>SIMULATOR INPUTS (Point 3: UI/UX Controls)</span>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Monthly Ad Spend (Point 1: Custom dev)</span>
                      <span style={{ color: '#EF4444', fontWeight: 700 }}>₹{adBudget.toLocaleString()}</span>
                    </label>
                    <input type="range" min="5000" max="100000" step="2500" value={adBudget} onChange={(e) => setAdBudget(parseInt(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Average Cost-per-Click (CPC)</span>
                      <span style={{ color: '#EF4444', fontWeight: 700 }}>₹{adCpc}</span>
                    </label>
                    <input type="range" min="5" max="100" step="5" value={adCpc} onChange={(e) => setAdCpc(parseInt(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Landing Page Conversion Rate (Point 4: Slide)</span>
                      <span style={{ color: '#EF4444', fontWeight: 700 }}>{convRate}%</span>
                    </label>
                    <input type="range" min="1" max="15" step="0.5" value={convRate} onChange={(e) => setConvRate(parseFloat(e.target.value))} style={{ width: '100%' }} />
                  </div>
                </div>

                {/* Outputs Panel (CMS demo point 5) */}
                <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyCenter: 'center' }}>
                  <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '16px', fontSize: '11px', color: '#475569', fontWeight: 700 }}>
                    ESTIMATED ADVERTISING METRICS
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Monthly Link Clicks</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>{totalClicks}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Estimated Leads Generated</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#059669' }}>{totalLeads}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Cost-per-Lead (CPL)</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#EF4444' }}>₹{costPerLead}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Ad Conversion Lift</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#EF4444' }}>+120% Avg</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: '#475569', margin: 0, fontStyle: 'italic', lineHeight: 1.4 }}>
                    *Note: Designing structured landing pages drives conversion rates from 1% to over 4%, dropping lead costs by 400% on average.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Paid Marketing Campaigns Capabilities
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#EF4444' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct setups of advertising pixel trackers (FB Pixel/Google Tag Manager) in code, bypassing slow third-party widgets.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#EF4444' }}>2. E-Commerce Integration</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Product purchase and checkout event logging. Bridge checkout tracking with Facebook CAPI pipelines.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#EF4444' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Frictionless high-converting copywriting layout structures that match parent intents, minimizing click drop-offs.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#EF4444' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Frictionless ad click redirections. Parents complete mobile registration forms inside the mobile browser window easily.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#EF4444' }}>5. CMS Dashboard Panel</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Centralized Google Sheet databases to edit ad titles, links, and landing pages offers without modifying source code.
                </p>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: TECHNICAL EDGE */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '40px', textAlign: 'center', color: '#0F172A' }}>
              The Technical Edge
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Low-latency AWS scaling hosting. Landing pages survive heavy traffic spikes during active campaign runs.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  CI/CD continuous delivery deployment workflows. Publish discount offers or landing modifications immediately.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Integrations of automatic parent inquiry notifications, routing leads details directly to advisors via webhook.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Page Speed scores near 100. Eliminating slow loads drops Facebook ad bounce penalties, lowering CPC costs.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  SSL certificate encryptions prevent warning tags. Secure pipelines protect parent contact numbers.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#EF4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Pune's High-Converting Ads Planners</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We structure specialized regional keyword mappings for Pune institutions, ensuring local clients find your address and listings first.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #EF4444', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "We set up Google Ads with CreovixAI. Cost per qualified parent inquiry dropped from ₹450 to ₹180 in weeks, and admissions reached full capacity."
                </p>
                <strong style={{ fontSize: '12px', color: '#EF4444' }}>— Director A. Kulkarni, Orchid Preschool Pune</strong>
              </div>

              {/* Founder Credibility (Point 15) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>SP</div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0F172A' }}>CreovixAI</h5>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Founder & Chief Architect, CreovixAI</p>
                </div>
              </div>
            </div>

            {/* Case Studies & Industry Expertise */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700 }}>POINT 11: CLIENT CASE STUDY</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Pune JEE Coaching Lead Campaign</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> High cost per lead (CPL) on Facebook Ads with unoptimized pages.<br />
                  <strong>Solution:</strong> Deployed a lightweight, responsive React page with custom forms.<br />
                  <strong>Result:</strong> Clicks converted to leads at 4.8% rate, CPL dropped by 60%.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Strategic industries: <strong>Educational Academies, Retail E-Commerce, Healthcare Clinics, and Local Pune Distribution Groups.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Google Ad Copies', 'Facebook CAPI setup', 'Landing Page mockups'].map((proj, i) => (
                    <div key={i} style={{ flex: 1, height: '60px', background: '#F1F5F9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#475569', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      {proj}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ROADMAP & MAINTENANCE */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '12px', color: '#EF4444', fontWeight: 700, textTransform: 'uppercase' }}>AD DEPLOYMENT WORKFLOW</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Target Blueprinting', desc: 'Outlining keyword search volumes, competitor ranks, and CPL estimates.' },
                { step: '02', title: 'SEO-Friendly Landing (Pt 17)', desc: 'Writing pre-rendered React pages with structured metadata matching search trends.' },
                { step: '03', title: 'AWS Secure Linkage', desc: 'Deploying pages on AWS clusters and implementing secure SSL protections.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Maintaining active monitoring pipelines, fixing ad tracking logs, and weekly campaign audits.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#EF4444', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              Ad Campaign FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'Which ad channel is best for my coaching academy?', a: 'For high-intent student enrollments, Google Search Ads work best. For nursery and playgroup preschool branding, Facebook/Instagram image ads secure the best results.' },
                { q: 'How does landing page design impact CPL?', a: 'Google and Facebook penalize slow-loading sites. Setting up speed-optimized React pages raises quality scores, dropping cost-per-clicks by up to 50%.' },
                { q: 'Do you manage tracking pixels?', a: 'Yes, absolutely. We set up Meta Pixel, Google Tag Manager, and Conversions API (CAPI) directly in code to track lead actions securely.' }
              ].map((faq, i) => (
                <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span style={{ color: '#EF4444' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
            border: '1px solid #FCA5A5',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET AN AD AUDIT (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Request a Free Ad Campaign Audit</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will audit your current PPC campaign setups, CPC spends, and landing page speeds free of charge.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book an Ad Audit</button>
              <button onClick={() => navigateTo('contact')} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Consult CreovixAI
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MarketingCampaigns;
