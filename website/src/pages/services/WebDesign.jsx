import React, { useState, useEffect } from 'react';

const WebDesign = (props) => {
  const { navigateTo } = props;
  const [webTheme, setWebTheme] = useState('dark');
  const [webLayout, setWebLayout] = useState('glass');
  const [webFontSize, setWebFontSize] = useState(16);
  const [customTitle, setCustomTitle] = useState('Elevate Pune Education');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .web-design-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #1E40AF 100%);
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
        }
        .control-pane {
          background: #F1F5F9;
          padding: 24px;
          border-bottom: 1px solid #E2E8F0;
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
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
        }
        .comparison-table th, .comparison-table td {
          border-bottom: 1px solid #E2E8F0;
          padding: 16px;
          text-align: left;
          color: #0F172A;
        }
        .comparison-table th { color: #2563EB; }
      `}</style>

      <div className="web-design-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / Custom Web Design</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> +140% Conversion Lift Guarantee</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              Pixel-Perfect <span className="gradient-text">Custom Web Development</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              We build secure, ultra-responsive, and high-performance frontend interfaces designed to establish digital authority, engage local Pune clients, and maximize client acquisitions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book a Free Consultation</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Layout Customizer ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom Dev, CMS Demo) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Interactive Live UI Customizer
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Test-drive our core UI/UX engineering. Adjust layouts, styling parameters, and responsive widths to preview rendering in real time.
            </p>

            <div className="interactive-simulator">
              <div className="control-pane">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                      UI Theme (Point 3)
                    </label>
                    <select value={webTheme} onChange={(e) => setWebTheme(e.target.value)} style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '10px', borderRadius: '6px', outline: 'none' }}>
                      <option value="dark">Sleek Neon Dark</option>
                      <option value="light">Bright Professional</option>
                      <option value="accent">Corporate Royal Accent</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                      Grid Layout
                    </label>
                    <select value={webLayout} onChange={(e) => setWebLayout(e.target.value)} style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '10px', borderRadius: '6px', outline: 'none' }}>
                      <option value="standard">Standard Grid</option>
                      <option value="centered">Centered Hero Layout</option>
                      <option value="glass">Glassmorphic Floating Bar</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                      Content Customizer CMS (Point 5)
                    </label>
                    <input type="text" value={customTitle} onChange={(e) => setCustomTitle(e.target.value)} style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '10px', borderRadius: '6px', outline: 'none' }} placeholder="Type page title..." />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                      Font Scaling (Body Text)
                    </label>
                    <input type="range" min="12" max="22" value={webFontSize} onChange={(e) => setWebFontSize(parseInt(e.target.value))} style={{ width: '100%', marginTop: '10px' }} />
                  </div>
                </div>
              </div>

              {/* Responsive Container Viewport Mockup */}
              <div style={{ background: '#F1F5F9', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#475569', fontWeight: 600 }}>Mobile Responsive Viewport (Point 4):</span>
                  <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>Auto-adjusting frame</span>
                </div>
                <div style={{
                  width: '100%',
                  maxWidth: '720px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.1)'
                }}>
                  {/* Browser top-bar */}
                  <div style={{ background: '#F8FAFC', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #E2E8F0' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                    <div style={{ background: '#FFFFFF', color: '#64748B', fontSize: '10px', padding: '2px 12px', borderRadius: '4px', marginLeft: '20px', flex: 1, fontFamily: 'monospace', border: '1px solid #E2E8F0' }}>
                      https://creovixai.com/preview/web-development
                    </div>
                  </div>

                  {/* Rendered Frame Area */}
                  <div style={{
                    padding: '32px',
                    background: webTheme === 'dark' ? '#0F172A' : webTheme === 'light' ? '#FFFFFF' : '#0B1528',
                    color: webTheme === 'dark' ? '#F8FAFC' : webTheme === 'light' ? '#0F172A' : '#E0E7FF',
                    transition: 'all 0.3s ease',
                    boxShadow: webLayout === 'glass' ? 'inset 0 0 40px rgba(37,99,235,0.1)' : 'none'
                  }}>
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: webLayout === 'centered' ? 'center' : 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #E2E8F0',
                      paddingBottom: '16px',
                      marginBottom: '24px',
                      borderRadius: webLayout === 'glass' ? '24px' : '0',
                      padding: webLayout === 'glass' ? '8px 20px' : '0 0 16px 0',
                      background: webLayout === 'glass' ? 'rgba(37,99,235,0.1)' : 'transparent',
                      backdropFilter: webLayout === 'glass' ? 'blur(8px)' : 'none'
                    }}>
                      <span style={{ fontWeight: 800, color: '#2563EB' }}>PUNE LEARNING INC.</span>
                      {webLayout !== 'centered' && (
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 600 }}>
                          <span>Courses</span>
                          <span>Admissions</span>
                          <span>Contact</span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div style={{ textAlign: webLayout === 'centered' ? 'center' : 'left' }}>
                      <span style={{ fontSize: '10px', background: '#2563EB', color: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                        Point 1: Custom Web Development Preview
                      </span>
                      <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '12px', marginBottom: '12px' }}>
                        {customTitle || 'Your Vision Constructed'}
                      </h3>
                      <p style={{ fontSize: `${webFontSize}px`, color: webTheme === 'light' ? '#475569' : '#94A3B8', lineHeight: 1.6, marginBottom: '24px' }}>
                        We design interfaces with custom layout flows. Your site will respond instantly to any size screen, rendering clean layouts for parents, students, and target clients.
                      </p>
                      <button style={{ background: '#2563EB', color: '#FFFFFF', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Our Web Development Focus
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Tailored web architectures built to match your specific business requirements. We write clean React/Vite code instead of generic builder setups.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>2. E-Commerce Dev</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Secure, highly scalable online storefronts featuring Stripe, Razorpay, or custom payment gateway API integrations for online bookings and invoice settlement.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  User-centric visual paths that focus on intuitive navigation pathways, glassmorphic accents, high-contrast layouts, and clean typographic hierarchies.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Ensuring websites adjust screen rendering seamlessly across smartphones, tablets, laptops, and ultra-wide desktop monitors for 100% user retention.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#2563EB' }}>5. Content Management (CMS)</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Integrated headless CMS or Google Sheet databases allowing your staff to update details, courses, and pricing directories without writing single lines of code.
                </p>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: TECHNICAL EDGE */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>
              The Technical Edge
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Professional deployment via Amazon AWS and Cloudflare Edge Networks. Fast SSL handshakes, automatic routing, and server load protection.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Continuous Integration and Delivery (CI/CD) pipelines. Pushing updates automatically with zero downtime or maintenance offline blocks.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Integration of NLP smart chatbots, dynamic course recommendations, and automated parent communication webhooks natively in your frontend.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Optimized Core Web Vitals, WebP image scaling, deferred scripts, and minified bundles ensuring page load speeds under 1 second.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  SSL certificate protection, encrypted candidate databases, SQL-injection prevention, and daily automated vulnerability scanning.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION (Points 11-15) */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Pune's Trusted Web Engineering Partner</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We bring specialized technical excellence to Pune businesses, education institutes, and manufacturing groups. We bypass slow templates to write speed-optimized custom layouts.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #2563EB', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "CreovixAI's team rebuilt our institute's website in React. Mobile inquiries climbed by 180% within two months and parents praised the fast document loading."
                </p>
                <strong style={{ fontSize: '12px', color: '#2563EB' }}>— Principal K. Deshmukh, Pune Coaching Group</strong>
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

            {/* Case Studies & Industry Expertise (Points 11, 14, 12) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>POINT 11: CLIENT CASE STUDY</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Pune Coaching Academy Overhaul</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Slow WordPress loads (6.4s) caused 55% mobile parent drop-offs.<br />
                  <strong>Solution:</strong> Deployed a React static page with WebP conversion.<br />
                  <strong>Result:</strong> Load time dropped to 0.7s, organic leads increased by 2.2x.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Active engineering domains: <strong>Schools & Preschoool Portals, Construction ERP Portals, Retail E-Commerce systems, and Professional Healthcare sites.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Preschool portal', 'Industry ERP', 'E-Store UI'].map((proj, i) => (
                    <div key={i} style={{ flex: 1, height: '60px', background: '#F1F5F9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#475569', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      {proj}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ROADMAP & MAINTENANCE (Points 16, 17, 18) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase' }}>DELIVERY PIPELINE</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'System Blueprinting', desc: 'Detailing code specs, wireframes, and payment integrations.' },
                { step: '02', title: 'SEO-Friendly Code (Pt 17)', desc: 'Writing semantic HTML and structured schema markups for top Google visibility.' },
                { step: '03', title: 'AWS Cloud Sync', desc: 'Hosting servers and deploying DevOps pipelines for continuous updates.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Providing 30 days of free API monitors, security audits, and bug adjustments.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#2563EB', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ ACCORDION SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              Web Engineering FAQs (Point 19)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'How long does it take to deploy a custom React site?', a: 'Typically, a fully customized, responsive, speed-optimized website is engineered and launched within 2 to 3 weeks, including design templates and SEO setup.' },
                { q: 'Why is React better than WordPress for my academy?', a: 'React generates pre-compiled static pages that load in under 1 second (WordPress templates often take 3-5 seconds). React has no databases or backend logins, making it virtually hacker-proof and extremely secure.' },
                { q: 'Will I be able to update my own content?', a: 'Yes. We connect the website to custom admin panels or simple cloud sheets, letting you update standards, phone numbers, or achievements instantly without editing any code.' }
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

          {/* FINAL CTA BANNER (Point 20) */}
          <div style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            border: '1px solid #BFDBFE',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET AN AUDIT (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Request a Free Technical Project Audit</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will audit your current site speed, mobile rendering, and security standards free of charge.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book a Free Audit</button>
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

export default WebDesign;
