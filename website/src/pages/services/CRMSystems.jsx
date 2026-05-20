import React, { useState, useEffect } from 'react';

const CRMSystems = (props) => {
  const { navigateTo } = props;
  const [leads, setLeads] = useState([
    { id: 1, name: 'Advait Kulkarni', status: 'incoming', phone: '9890123456', course: '5th standard' },
    { id: 2, name: 'Priya Deshmukh', status: 'contacted', phone: '9123456789', course: 'Nursery Prep' },
    { id: 3, name: 'Rohan Patil', status: 'enrolled', phone: '9988776655', course: '11th Sci JEE' }
  ]);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advanceLead = (id) => {
    setLeads(prev => prev.map(l => {
      if (l.id === id) {
        const nextStatus = l.status === 'incoming' ? 'contacted' : l.status === 'contacted' ? 'enrolled' : 'incoming';
        return { ...l, status: nextStatus };
      }
      return l;
    }));
  };

  return (
    <>
      <style>{`
        .crm-systems-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #10B981 0%, #34D399 50%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #D1FAE5;
          border: 1px solid #A7F3D0;
          color: #047857;
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
        .kanban-board {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        @media (max-width: 640px) {
          .kanban-board { grid-template-columns: 1fr; }
        }
        .kanban-col {
          background: #F1F5F9;
          border-radius: 8px;
          padding: 16px;
          border: 1px solid #E2E8F0;
          min-height: 200px;
        }
        .lead-card {
          background: #FFFFFF;
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 12px;
          cursor: pointer;
          border: 1px solid #E2E8F0;
          transition: all 0.2s;
        }
        .lead-card:hover {
          border-color: #10B981;
          background: #F8FAFC;
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

      <div className="crm-systems-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#059669', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / CRM Systems</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> 100% Secure Student Pipeline Sync</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              Smart Sales & <span className="gradient-text">Coaching CRM Systems</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Automate tracking pipelines. We design custom internal Kanban leads boards that automatically sync enrollment queries, logging candidate progress from inquiry to enrollment.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Build Custom CRM</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Run Kanban Simulator ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom, CMS configurations) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Live Kanban CRM Pipeline Simulator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Click on a candidate lead card below to advance their enrollment status stage in real time, simulating database webhooks.
            </p>

            <div className="interactive-simulator">
              <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>CRM KANBAN INTERACTIVE (Point 3)</span>
              
              <div className="kanban-board">
                {/* INCOMING */}
                <div className="kanban-col">
                  <div style={{ borderBottom: '2px solid #EF4444', paddingBottom: '8px', marginBottom: '12px', fontSize: '12px', fontWeight: 700, color: '#EF4444' }}>
                    INCOMING LEADS ({leads.filter(l => l.status === 'incoming').length})
                  </div>
                  {leads.filter(l => l.status === 'incoming').map(l => (
                    <div key={l.id} className="lead-card" onClick={() => advanceLead(l.id)}>
                      <strong style={{ fontSize: '13px', display: 'block', color: '#0F172A' }}>{l.name}</strong>
                      <span style={{ fontSize: '11px', color: '#475569' }}>{l.course} • (+91 {l.phone})</span>
                      <span style={{ display: 'block', fontSize: '9px', color: '#10B981', textAlign: 'right', marginTop: '6px' }}>Click to Advance →</span>
                    </div>
                  ))}
                </div>

                {/* CONTACTED */}
                <div className="kanban-col">
                  <div style={{ borderBottom: '2px solid #F59E0B', paddingBottom: '8px', marginBottom: '12px', fontSize: '12px', fontWeight: 700, color: '#F59E0B' }}>
                    IN CONSULTATION ({leads.filter(l => l.status === 'contacted').length})
                  </div>
                  {leads.filter(l => l.status === 'contacted').map(l => (
                    <div key={l.id} className="lead-card" onClick={() => advanceLead(l.id)}>
                      <strong style={{ fontSize: '13px', display: 'block', color: '#0F172A' }}>{l.name}</strong>
                      <span style={{ fontSize: '11px', color: '#475569' }}>{l.course} • (+91 {l.phone})</span>
                      <span style={{ display: 'block', fontSize: '9px', color: '#10B981', textAlign: 'right', marginTop: '6px' }}>Click to Enroll →</span>
                    </div>
                  ))}
                </div>

                {/* ENROLLED */}
                <div className="kanban-col">
                  <div style={{ borderBottom: '2px solid #10B981', paddingBottom: '8px', marginBottom: '12px', fontSize: '12px', fontWeight: 700, color: '#10B981' }}>
                    ENROLLED ({leads.filter(l => l.status === 'enrolled').length})
                  </div>
                  {leads.filter(l => l.status === 'enrolled').map(l => (
                    <div key={l.id} className="lead-card" onClick={() => advanceLead(l.id)}>
                      <strong style={{ fontSize: '13px', display: 'block', color: '#0F172A' }}>{l.name}</strong>
                      <span style={{ fontSize: '11px', color: '#475569' }}>{l.course} • (+91 {l.phone})</span>
                      <span style={{ display: 'block', fontSize: '9px', color: '#EF4444', textAlign: 'right', marginTop: '6px' }}>Click to Reset ⟲</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Custom CRM Systems Capabilities
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct developer layouts. We bypass heavy integrations (like Salesforce) to write clean, lightweight pipelines tailored to school budgets.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>2. E-Commerce Integration</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Checkouts sync. Pay application fees or seat bookings which immediately log under the candidate’s billing profile in the dashboard.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Clear drag-and-drop column boards, color tags, and simplified lists so administrative staff can update records without confusion.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Mobile-optimized columns. Principal or coordinator can view candidate records and click to trigger calls directly from mobile browsers.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#059669' }}>5. CMS Dashboard Controls</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Centralized Google Sheet databases to edit lead statuses, course tables, sitemap links, and FAQ directories easily.
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
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Amazon AWS hosting. Databases are synced across cloud endpoints to prevent record loss during server interruptions.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  CI/CD continuous delivery integration. Apply rules, permissions, or custom reports updates immediately.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  NLP webhook automations. Automatically log conversational chat leads direct to CRM boards.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  React client state caching. Fetching lead cards, notes, or search queries completes under 200ms.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  AES-256 database level encryption. Prevent parent telephone lists or student details from public leakages.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Proven Pipeline Efficiency in Pune</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We design specialized pipelines that organize parent inquiries, billing logs, and class allotments in one place.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #059669', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "Our administrative staff was losing half our student queries to scattered WhatsApp chats. The custom CRM CreovixAI built centralized everything, reducing response times to minutes and boosting admissions by 40%."
                </p>
                <strong style={{ fontSize: '12px', color: '#059669' }}>— Principal S. Patil, Orchid Nursery Pune</strong>
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
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Orchid Preschool CRM Integration</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Manually recording admissions leads across Google sheets causing lost student inquiries.<br />
                  <strong>Solution:</strong> Designed a centralized CRM Kanban Board with AWS backend data synchronization.<br />
                  <strong>Result:</strong> Admissions coordination efficiency increased by 90%, zero lost leads.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Strategic industries: <strong>Educational Academies, Local Clinics, Retail Stores, and Professional Offices in Pune.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['Centralized Lead Board', 'Student Application Tracker', 'Automated Inquiry Webhook'].map((proj, i) => (
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
              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>CRM IMPLEMENTATION STAGES</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Workflow Mapping', desc: 'Detailing current admissions steps, lead sources, and team roles.' },
                { step: '02', title: 'Custom Fields Routing (Pt 17)', desc: 'Building secure registration inputs and status endpoints inside custom React code.' },
                { step: '03', title: 'AWS Cloud Sync', desc: 'Syncing database endpoints with AWS servers for live multi-user collaboration.' },
                { step: '04', title: 'Post-Launch Support (Pt 16)', desc: 'Auditing system loading speeds, DB backups, and coordinator usage feedback monthly.' }
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
              CRM Systems FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'Why build a custom CRM instead of buying Hubspot?', a: 'Custom CRM systems bypass expensive monthly per-user license fees. You own 100% of your codebase and database, tailored to your exact business workflow without clutter.' },
                { q: 'Is our parents data secure?', a: 'Yes. We host your CRM system on your own AWS infrastructure with secure API endpoints and AES-256 database level encryption.' },
                { q: 'Can it integrate with our existing website?', a: 'Absolutely. We set up simple API endpoints or webhook triggers that automatically push form submissions to your Kanban board instantly.' }
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
            background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
            border: '1px solid #6EE7B7',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#047857', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET A CRM CONSULTATION (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#064E3B' }}>Book a Free CRM Workflow Consult</h3>
            <p style={{ color: '#065F46', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will map your lead drop-off points, analyze spreadsheet inefficiencies, and structure a custom CRM blueprint free of charge.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book a CRM Consult</button>
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

export default CRMSystems;
