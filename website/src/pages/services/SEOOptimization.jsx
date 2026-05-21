import React, { useState, useEffect } from 'react';

const SEOOptimization = (props) => {
  const { navigateTo } = props;
  const [searchVol, setSearchVol] = useState(5000);
  const [googlePos, setGooglePos] = useState(1);
  const [leadVal, setLeadVal] = useState(10000);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // CTR calculations based on Google Rank positions
  const getCtrByPos = (pos) => {
    if (pos === 1) return 39.6;
    if (pos === 2) return 18.4;
    if (pos === 3) return 10.1;
    if (pos === 4) return 7.2;
    if (pos === 5) return 5.1;
    if (pos < 10) return 2.5;
    return 0.8;
  };

  const ctr = getCtrByPos(googlePos);
  const estimatedClicks = Math.round(searchVol * (ctr / 100));
  const conversionRate = 2.5; // average conversion rate
  const estimatedLeads = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedRevenue = estimatedLeads * leadVal;

  return (
    <>
      <style>{`
        .seo-opt-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #1D4ED8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          color: #2563EB;
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
          border-color: #BFDBFE;
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
          background: #2563EB;
          color: #FFFFFF;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-action:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
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

      <div className="seo-opt-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / Local SEO</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 6H13.5a.5.5 0 0 1-.5-.5V2M17 14v6M13 18v2M21 10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9l7 7Z"/></svg> +320% Organic Search Volume Boost</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              Local SEO & <span className="gradient-text">Google Maps Optimization</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Dominating regional Pune searches. We implement structured JSON-LD schemas, citation architectures, and meta configurations to rank you at position #1.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Rank #1 on Google</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Traffic Calculator ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom, CMS configurations) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Organic Search ROI Estimator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Move sliders to specify monthly Pune keywords search volumes and current search ranking position to preview calculated click-through values.
            </p>

            <div className="interactive-simulator">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="grid-2">
                <div>
                  <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>ESTIMATOR INPUTS (Point 3: UI/UX Controls)</span>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Monthly Pune Search Volume (Point 1: Custom dev)</span>
                      <span style={{ color: '#2563EB', fontWeight: 700 }}>{searchVol.toLocaleString()}</span>
                    </label>
                    <input type="range" min="1000" max="25000" step="500" value={searchVol} onChange={(e) => setSearchVol(parseInt(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Google Ranking Position (Point 4: Responsive slide)</span>
                      <span style={{ color: '#2563EB', fontWeight: 700 }}>#{googlePos}</span>
                    </label>
                    <input type="range" min="1" max="15" step="1" value={googlePos} onChange={(e) => setGooglePos(parseInt(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                      <span>Average Lead/Enrollment Value</span>
                      <span style={{ color: '#2563EB', fontWeight: 700 }}>₹{leadVal.toLocaleString()}</span>
                    </label>
                    <input type="range" min="2000" max="50000" step="1000" value={leadVal} onChange={(e) => setLeadVal(parseInt(e.target.value))} style={{ width: '100%' }} />
                  </div>
                </div>

                {/* Outputs Panel (CMS demo point 5) */}
                <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyCenter: 'center' }}>
                  <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '16px', fontSize: '11px', color: '#475569', fontWeight: 700 }}>
                    ESTIMATED MONTHLY INBOUND REVENUE
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>CTR Click rate</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#2563EB' }}>{ctr}%</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Monthly Inbound Clicks</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>{estimatedClicks}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Est. Leads (at {conversionRate}%)</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#059669' }}>{estimatedLeads}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#475569', display: 'block' }}>Organic Inbound Value</span>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>₹{estimatedRevenue.toLocaleString()}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: '#475569', margin: 0, fontStyle: 'italic', lineHeight: 1.4 }}>
                    *Note: Ranking at position #1 secures nearly 40% of all search clicks, representing high-intent free organic parent traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Our Local SEO Architecture
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct coding of semantic structured headers inside React, keeping tags cleanly organized for Google spider crawling.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>2. E-Commerce Integration</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Product schema JSON-LD mappings allowing prices, reviews, and stock limits to render directly inside Google search outputs.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Frictionless layouts driving high conversion click paths, satisfying Google Core Web Vital metrics.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Ensuring 100% mobile usability compatibility. Google indexes mobile viewports first (mobile-first crawling protocols).
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>5. CMS Dashboard Controls</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Centralized control panels to edit keyword meta targets, page titles, and index descriptions without writing code.
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
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  AWS deployment ensures zero server downtime. Fast server response time (TTFB under 100ms) signals search credibility to Google spiders.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Continuous CI/CD deployments. Keep your metadata, sitemaps, and indexing hooks updated with zero latency blockages.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  AI sitemap indexing webhooks that notify Google Webmaster Console of new updates instantly for indexing under 1 hour.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Lightweight pre-rendered React bundles driving perfect Lighthouse metrics, raising ranks on local search results.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 10</span>
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
              <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Pune's Trusted Local SEO Consultants</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We structure specialized regional keyword mappings for Pune institutions, ensuring local clients find your address and listings first.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #2563EB', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "CreovixAI set up our local school schema and Google Map citations. We climbed from page 3 to the Map Pack #1 position in Pune, doubling parent inquiries."
                </p>
                <strong style={{ fontSize: '12px', color: '#2563EB' }}>— Principal S. Patil, Orchid Nursery Pune</strong>
              </div>

              {/* Founder Credibility (Point 15) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>SP</div>
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
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Orchid Preschool Map Tuning</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Invisible in local Google map searches in Pune Central.<br />
                  <strong>Solution:</strong> Injected School Schema (JSON-LD) and citation audit pipelines.<br />
                  <strong>Result:</strong> Climbed to position #1, organic traffic increased by 3.2x.
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
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Local SEO Audits', 'Map Pack citation script', 'Schema JSON generator'].map((proj, i) => (
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
              <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase' }}>SEO OPTIMIZATION STAGES</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Keyword Blueprinting', desc: 'Detailing search volumes, competitor ranks, and targeted long-tail keywords.' },
                { step: '02', title: 'SEO-Friendly Routing (Pt 17)', desc: 'Writing clean JSON-LD schemas and descriptive metadata directly inside React code.' },
                { step: '03', title: 'AWS Cloud Sync', desc: 'Syncing robot files, sitemaps, and sitemap indexing scripts on AWS EC2 servers.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Auditing Google Console crawl alerts, ranking movements, and keyword adjustments monthly.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#2563EB', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              Local SEO FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'What is a JSON-LD Google Schema?', a: 'It is a structured data format injected in the website header. It tells Google precisely what your business is, where you are located, and what your reviews are, raising ranking rates.' },
                { q: 'How long does it take to see rankings improve?', a: 'For local Pune keywords, search rankings typically rise from position 20+ into the top 5 within 4 to 8 weeks after schemas are indexed.' },
                { q: 'Do you manage Google Map / Google Business Profiles?', a: 'Yes. We set up map coordinates, citation directory logs, and verify details to ensure perfect alignment with your website address.' }
              ].map((faq, i) => (
                <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span style={{ color: '#2563EB' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            border: '1px solid #BFDBFE',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET A SEO AUDIT (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Book a Free Local SEO Audit</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will audit your local keyword ranks, map citation errors, and layout speeds free of charge.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book an SEO Audit</button>
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

export default SEOOptimization;
