import React, { useState, useEffect } from 'react';

const LeadFunnels = (props) => {
  const { navigateTo } = props;
  const [speedChecked, setSpeedChecked] = useState(false);
  const [ctaChecked, setCtaChecked] = useState(false);
  const [reviewsChecked, setReviewsChecked] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate funnel conversions dynamically
  let conversionRate = 1.0;
  if (speedChecked) conversionRate += 1.8;
  if (ctaChecked) conversionRate += 1.2;
  if (reviewsChecked) conversionRate += 1.5;

  const totalVisitors = 10000;
  const totalLeads = Math.round(totalVisitors * (conversionRate / 100));

  return (
    <>
      <style>{`
        .lead-funnels-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          color: #D97706;
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
          border-color: #FDE68A;
          box-shadow: 0 10px 30px rgba(15,23,42,0.08);
          transform: translateY(-4px);
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 48px 0;
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
          background: #F59E0B;
          color: #FFFFFF;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-action:hover {
          background: #D97706;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
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

      <div className="lead-funnels-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#D97706', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / Lead Funnels</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 5.5% Funnel Conversion Rate</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              High-Converting <span className="gradient-text">Lead Funnels</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Plug your traffic leaks. We engineer strategic landing paths, layout hierarchies, and automatic lead routers designed to maximize enrollment registrations.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Build Custom Funnel</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Funnel Optimizer ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom, CMS configurations) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Lead Funnel Leak Fixer Simulator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Toggle the conversion checklists below. Renders the calculated conversion improvements and final lead outputs based on 10,000 mock visitors.
            </p>

            <div className="interactive-simulator">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="grid-2">
                <div>
                  <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>FUNNEL OPTIMIZATIONS (Point 3: UI/UX Controls)</span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F1F5F9', padding: '16px', borderRadius: '8px', marginBottom: '12px', border: '1px solid #E2E8F0', cursor: 'pointer' }} onClick={() => setSpeedChecked(!speedChecked)}>
                    <input type="checkbox" checked={speedChecked} readOnly style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: '#0F172A' }}>Speed Optimize Code (Point 1: Custom dev)</strong>
                      <span style={{ fontSize: '12px', color: '#475569' }}>Bypass slow builder scripts (+1.8% CR)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F1F5F9', padding: '16px', borderRadius: '8px', marginBottom: '12px', border: '1px solid #E2E8F0', cursor: 'pointer' }} onClick={() => setCtaChecked(!ctaChecked)}>
                    <input type="checkbox" checked={ctaChecked} readOnly style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: '#0F172A' }}>Optimise CTA Copy</strong>
                      <span style={{ fontSize: '12px', color: '#475569' }}>Apply high-contrast strategic buttons (+1.2% CR)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F1F5F9', padding: '16px', borderRadius: '8px', marginBottom: '12px', border: '1px solid #E2E8F0', cursor: 'pointer' }} onClick={() => setReviewsChecked(!reviewsChecked)}>
                    <input type="checkbox" checked={reviewsChecked} readOnly style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: '#0F172A' }}>Inject Trust Signals (Reviews)</strong>
                      <span style={{ fontSize: '12px', color: '#475569' }}>Display social proof and badges (+1.5% CR)</span>
                    </div>
                  </div>
                </div>

                {/* Funnel Visualisation Panel (CMS demo point 5) */}
                <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '16px', fontSize: '11px', color: '#475569', fontWeight: 700 }}>
                    CONVERSION PERFORMANCE (Point 4: Mobile Frame)
                  </div>
                  
                  {/* Funnel Graphic */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '100%', height: '30px', background: 'rgba(245, 158, 11, 0.4)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#78350F' }}>
                      Traffic (10,000 Visitors)
                    </div>
                    <div style={{ width: '70%', height: '30px', background: 'rgba(245, 158, 11, 0.6)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#78350F' }}>
                      Clicks
                    </div>
                    <div style={{ width: '40%', height: '30px', background: 'rgba(245, 158, 11, 0.8)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, transition: 'all 0.3s', color: '#FFFFFF' }}>
                      Leads ({totalLeads})
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Conversion Rate</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#D97706' }}>{conversionRate.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Inbound Leads</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#059669' }}>{totalLeads}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Custom Lead Funnel Capabilities
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#D97706' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Individually blueprinting custom landing page layouts to bypass conversion blockages of standard templates.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#D97706' }}>2. E-Commerce Integration</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct online seat bookings. Secure checkouts allow parents to submit deposits and confirm slots instantly.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#D97706' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Aesthetic layout structures featuring contrast ratios, visual directions, and bold value copy to hold attention.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#D97706' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Frictionless mobile layouts. Forms and checklists scale down cleanly to support parent mobile inquiries.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#D97706' }}>5. CMS Dashboard Controls</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Centralized Google Sheet databases to edit lead statuses, pricing tables, sitemap links, and FAQs instantly.
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
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  AWS deployment ensures zero server downtime. Fast server response time (TTFB under 100ms) signals search credibility to Google spiders.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Continuous CI/CD deployments. Keep registration forms, CTA buttons, and analytics scripts up to date instantly.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  AI lead-routing webhooks that notify your CRM or advisors instantly, ensuring a follow-up call is placed under 3 minutes.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Lightweight pre-rendered React bundles driving perfect Lighthouse metrics, raising ranks on local search results.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  SSL setups, HSTS encryptions, and secured directories to eliminate Google spam flag warnings and malware notices.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#D97706', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Proven Funnel Conversion Uplifts in Pune</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We structure specialized regional keyword mappings for Pune institutions, ensuring local clients find your address and listings first.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #D97706', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "We set up our preschool admissions funnel with CreovixAI. Form submission conversion rate went from 1.2% to 4.5%, reducing our lead costs by 70%."
                </p>
                <strong style={{ fontSize: '12px', color: '#D97706' }}>— Principal S. Patil, Orchid Nursery Pune</strong>
              </div>

              {/* Founder Credibility (Point 15) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>SP</div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0F172A' }}>CreovixAI</h5>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Founder & Chief Architect, CreovixAI</p>
                </div>
              </div>
            </div>

            {/* Case Studies & Industry Expertise */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700 }}>POINT 11: CLIENT CASE STUDY</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Preschool Admissions Funnel Tuning</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> High cost-per-lead and form drops on old preschool template site.<br />
                  <strong>Solution:</strong> Implemented a 3-step high-converting React lead funnel with instant WhatsApp alerts.<br />
                  <strong>Result:</strong> Form completions increased by 280%, securing full batch registrations.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Strategic industries: <strong>Educational Academies, Local Clinics, Retail Stores, and Pune Manufacturing Hubs.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Preschool Funnel', 'Coaching Academy Form', 'Multi-step Lead Quiz'].map((proj, i) => (
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
              <span style={{ fontSize: '12px', color: '#D97706', fontWeight: 700, textTransform: 'uppercase' }}>FUNNEL DEPLOYMENT STAGES</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Target Blueprinting', desc: 'Detailing user personas, main pain-points, and value offerings.' },
                { step: '02', title: 'High-Converting Routing (Pt 17)', desc: 'Writing frictionless form structures and clear direction badges in React.' },
                { step: '03', title: 'AWS Cloud Launch', desc: 'Deploying lightweight bundles on AWS infrastructure for sub-second speeds.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Monitoring form drop-off analytics, CTA click maps, and lead logs monthly.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#D97706', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              Lead Funnel FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'What is a high-converting lead funnel?', a: 'A lead funnel is a focused series of web pages designed to guide parents or students toward taking a single action, such as booking a visit, bypassing standard website clutter.' },
                { q: 'How fast can we launch a custom funnel?', a: 'Typically, we research, draft, design, and deploy a complete custom funnel on AWS within 7 to 10 days.' },
                { q: 'Do you integrate with CRM tools?', a: 'Yes. Leads are routed instantly to your CRM, Google Sheets, or directly to your phone via custom automated notifications.' }
              ].map((faq, i) => (
                <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span style={{ color: '#D97706' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
            border: '1px solid #FCD34D',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET A FUNNEL AUDIT (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Book a Free Lead Funnel Audit</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will audit your current landing page conversion rate, form usability, and mobile speeds free of charge.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book a Funnel Audit</button>
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

export default LeadFunnels;
