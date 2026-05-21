import React, { useState, useEffect } from 'react';

const AdmissionPortals = (props) => {
  const { navigateTo } = props;
  const [admChild, setAdmChild] = useState('');
  const [admGrade, setAdmGrade] = useState('5th Standard');
  const [admPhone, setAdmPhone] = useState('');
  const [admLogs, setAdmLogs] = useState([]);
  const [admSubmitting, setAdmSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerAdmSimulation = (e) => {
    e.preventDefault();
    if (!admChild || !admPhone) return;
    setAdmSubmitting(true);
    setAdmLogs([]);
    
    const logsList = [
      `[1/4] Form submitted: ${admChild} registered for ${admGrade}.`,
      `[2/4] Syncing Secure Database: Lead added to Pune Admissions CRM.`,
      `[3/4] Dispatching WhatsApp Receipt to Parent (+91 ${admPhone}): Welcome message queued.`,
      `[4/4] Notify Admin: Mobile alert dispatched to School Principal.`
    ];

    logsList.forEach((log, index) => {
      setTimeout(() => {
        setAdmLogs(prev => [...prev, log]);
        if (index === logsList.length - 1) {
          setAdmSubmitting(false);
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <>
      <style>{`
        .admission-portals-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #059669;
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
          border-color: #A7F3D0;
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
          background: #10B981;
          color: #FFFFFF;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-action:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
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

      <div className="admission-portals-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#059669', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / Admission Portals</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg> 92% Enrollment Automation Rate</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              School & Academy <span className="gradient-text">Admission Portals</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Ditch messy spreadsheets. We build secure, custom-engineered parent registration portals that automate candidates onboarding, fee payment receipts, and principal notifications.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Request a Demo Portal</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Form Simulator ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Responsive, CMS, Custom Portals) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Live Admission Automation Simulator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Submit the student application registration form below. Our terminal will display live backend logging representing database syncing and WhatsApp alert APIs.
            </p>

            <div className="interactive-simulator">
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }} className="grid-2">
                <div>
                  <form onSubmit={triggerAdmSimulation} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                        Student Name (Point 1: Custom Web Dev)
                      </label>
                      <input type="text" value={admChild} onChange={(e) => setAdmChild(e.target.value)} placeholder="e.g. Advait Pawar" required style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '6px', outline: 'none' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                          Standard
                        </label>
                        <select value={admGrade} onChange={(e) => setAdmGrade(e.target.value)} style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '6px', outline: 'none' }}>
                          <option value="Playgroup / Nursery">Nursery / Playgroup</option>
                          <option value="5th Standard">5th Standard</option>
                          <option value="11th Sci (JEE/NEET)">11th Sci (JEE/NEET)</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                          Secure Fee Booking (Point 2)
                        </label>
                        <div style={{ background: '#F1F5F9', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0F172A' }}>
                          <span>Razorpay Secure</span>
                          <span style={{ color: '#10B981', fontWeight: 'bold' }}>₹1,000 Deposit</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '8px' }}>
                        Parent Phone (Point 4: Mobile Form)
                      </label>
                      <input type="tel" value={admPhone} onChange={(e) => setAdmPhone(e.target.value)} placeholder="e.g. 9890123456" required style={{ width: '100%', background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '6px', outline: 'none' }} />
                    </div>

                    <button type="submit" disabled={admSubmitting} className="btn-action">
                      {admSubmitting ? 'Syncing Pipeline webhooks...' : 'Simulate Candidate Submission'}
                    </button>
                  </form>
                </div>

                {/* Simulated Log Output (CMS / Admin point 5) */}
                <div style={{ background: '#0F172A', borderRadius: '12px', padding: '20px', border: '1px solid #E2E8F0', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px', marginBottom: '12px', fontSize: '11px', color: '#64748B', fontFamily: 'monospace' }}>
                    <span>PORTAL ADMIN PROCESS LOG</span>
                    <span style={{ color: '#10B981' }}>● LIVE STATUS</span>
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#10B981', flex: 1, overflowY: 'auto' }}>
                    {admLogs.length === 0 && (
                      <span style={{ color: '#64748B' }}>// Submit register form on the left to see live status logging pipelines...</span>
                    )}
                    {admLogs.map((log, i) => (
                      <div key={i} style={{ marginBottom: '8px', lineHeight: 1.4 }}>
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Custom Admission Portal Capabilities
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Individually blueprinting custom enrollment pages and structured inputs for nursery, science coaching, or academy courses.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>2. E-Commerce Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct online seat bookings. Secure integration with payment platforms for application fees, deposits, and term fee settlement.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  User-centric interface built with simple layouts so parents of any technical background can submit details and register.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Fully responsive grids. Parents upload student documents, photographs, and certificates directly using mobile phone cameras.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>5. CMS Dashboard Panel</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Headless database dashboards. School administrators can view candidate lists, approve applications, and change admission statuses.
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
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Low-latency hosting on Amazon Web Services. Guarantees 100% uptime during high-traffic admission result announcement hours.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  CI/CD integration for quick deployment. Apply custom class timings, fees changes, and rules updates instantly in production.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Chatbots trained to answer parent fee rules. Automated systems send notifications to advisors with student grades.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Lightweight React build optimized for 3G/4G networks, helping rural parents submit documents without connection timeouts.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  GDPR-compliant security. Secure SSL certificate, encrypted candidate details, and sandbox environments to upload documents.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Proven Results in Pune Education Sectors</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We work directly with school principals, coaching administrators, and academy groups across Pune to deliver high-converting frontend registration.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #059669', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "We automated our entire nursery enrollment workflow. The dashboard updates our spreadsheet, and parent callbacks happen within minutes of registration."
                </p>
                <strong style={{ fontSize: '12px', color: '#059669' }}>— Director A. Kulkarni, Orchid Preschool Pune</strong>
              </div>

              {/* Founder Credibility (Point 15) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>SP</div>
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
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Orchid International Admissions Portals</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Manual entry in preschool office created queues and caused client dropoffs.<br />
                  <strong>Solution:</strong> Custom portal for registration, scanning, and payments.<br />
                  <strong>Result:</strong> 92% parent online adoption, saved 30+ admin hours weekly.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Domain expertise: <strong>Education Institutes, Science Coaching Academies, Playgroups, Preschool Groups, and Skill Centers.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Preschool Seat Booking', 'Coaching Admin Sheets', 'Document Upload Portal'].map((proj, i) => (
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
              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>IMPLEMENTATION WORKFLOW</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Admissions Blueprinting', desc: 'Outlining customized candidate forms fields, standards, and dashboard layouts.' },
                { step: '02', title: 'SEO-Friendly Coding (Pt 17)', desc: 'Writing clean React modules with metadata mapping to rank higher on Pune searches.' },
                { step: '03', title: 'AWS Secure Linkage', desc: 'Syncing backend databases with AWS servers and implementing SSL protections.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Maintaining active monitoring pipelines, fixing API logs, and ensuring zero-downtime updates.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#059669', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              Portal Engineering FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'Does this connect with our school parent portal?', a: 'Yes. We build secure API integrations to bridge the front-end admission portal with your school databases, ERP systems, or centralized CRMs.' },
                { q: 'How do parent receipts and alerts work?', a: 'As soon as a parent submits the registration form, our webhook triggers automated API alerts delivering personalized brochures and PDFs via WhatsApp or SMS instantly.' },
                { q: 'Are student document uploads secure?', a: 'Yes, absolutely. All documents are encrypted and uploaded direct to secure Google Cloud storage, accessible only by authorized admin dashboard operators.' }
              ].map((faq, i) => (
                <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span style={{ color: '#059669' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            border: '1px solid #A7F3D0',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET A CONSULTATION (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Book a Free Systems Consultation</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will blueprint your school admissions dashboard pipeline and set up automatic notification webhooks.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book a Consultation</button>
              <button onClick={() => navigateTo('contact')} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Talk to CreovixAI
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdmissionPortals;
