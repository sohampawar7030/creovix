import React, { useState, useEffect } from 'react';

export const SERVICES_DATA = [
  {
    id: 'web-design',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    title: 'Website Design & Development',
    category: 'web',
    shortDesc: 'Pixel-perfect, high-performance websites built to captivate and convert web visitors into long-term commercial customers.',
    metric: '+140% Conversion Lift',
    features: [
      'Responsive design (Mobile/Tablet/Desktop)',
      'Modern glassmorphic and neon visual styling',
      'SEO structured semantic HTML tags',
      'Core Web Vitals optimized'
    ]
  },
  {
    id: 'admission-portals',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>,
    title: 'School & Academy Admission Portals',
    category: 'web',
    shortDesc: 'Dedicated admission-focused portals built for educational institutes to capture leads, display results, and fill seats faster.',
    metric: '92% Automation Rate',
    features: [
      'Integrated seat booking and application tracking',
      'Instant parent SMS and WhatsApp receipts',
      'Admin lead status management dashboard',
      'Fast document upload and verification links'
    ]
  },
  {
    id: 'ai-chatbots',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>,
    title: 'AI Chatbot Integrations',
    category: 'ai',
    shortDesc: 'Smart 24/7 bots trained on your unique business context to answer common parent/client queries and capture contact details.',
    metric: '24/7 Instant Response',
    features: [
      'Pre-programmed context logic based on FAQs',
      'Seamless human agent handoff via WhatsApp link',
      'Lead name and phone capture database syncing',
      'Custom styling that sits natively on your portal'
    ]
  },
  {
    id: 'whatsapp-automation',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
    title: 'WhatsApp Automation',
    category: 'ai',
    shortDesc: 'Automate entire follow-up sequences, send immediate fee reminders, and deliver digital brochures instantly via automated flows.',
    metric: '98% Message Open Rate',
    features: [
      'Custom API hooks connecting web forms to WhatsApp API',
      'Automated greeting templates and brochure deliveries',
      'Scheduled payment alerts and admission reminders',
      'Multi-agent shared team inbox workflows'
    ]
  },
  {
    id: 'seo-optimization',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
    title: 'Local SEO & Optimization',
    category: 'seo',
    shortDesc: 'Dominate localized searches in Pune and across Maharashtra. Get qualified visitors who are actively searching for your service.',
    metric: 'Top 3 Google Rankings',
    features: [
      'High-intent local keyword mapping',
      'Google Maps listing validation and optimization',
      'Schema markup injection for rich results',
      'Fast core rendering for search engine bots'
    ]
  },
  {
    id: 'marketing-campaigns',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l11 11"/></svg>,
    title: 'Digital Marketing Campaigns',
    category: 'seo',
    shortDesc: 'High-performing Google and Meta/Instagram ad campaigns optimized specifically for low cost-per-lead and verified outcomes.',
    metric: '3.5x Average Ad ROI',
    features: [
      'Meta and Google Pixel/API tracking setups',
      'A/B creative testing (graphic layouts and copy)',
      'Highly targeted geographical settings',
      'Weekly transparent performance analytics reports'
    ]
  },
  {
    id: 'lead-funnels',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Lead Generation Funnels',
    category: 'seo',
    shortDesc: 'Full-funnel strategies featuring high-converting landing pages, structured forms, and auto-delivery of informational guides.',
    metric: '+220% Enquiry Growth',
    features: [
      'Value-driven lead magnet design (brochures)',
      'Multi-step forms designed to prevent dropoffs',
      'Exit-intent overlays and discount vouchers',
      'Dropoff tracing logs to optimize conversions'
    ]
  },
  {
    id: 'crm-systems',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
    title: 'CRM & Enquiry Systems',
    category: 'ai',
    shortDesc: 'Integrate automated central dashboards so that no admission inquiry, callback request, or business proposal gets missed.',
    metric: 'Zero Missed Enquiries',
    features: [
      'Central database connection (Google Sheets/HubSpot)',
      'Status pipelines (New, Callback Needed, Joined)',
      'Immediate mobile notification triggers for agents',
      'Source attribution and lead tracking logs'
    ]
  },
  {
    id: 'landing-pages',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'Strategic Landing Pages',
    category: 'web',
    shortDesc: 'Ultra-fast, distraction-free single-page setups created exclusively to generate massive actions on high-intent advertisements.',
    metric: '8.5% Average Conversion',
    features: [
      'Zero external header links to prevent user leakage',
      'High-impact hooks and trust-building social proofs',
      'Speed optimized to load in under 1 second',
      'Clear, accessible floating WhatsApp call-to-action'
    ]
  },
  {
    id: 'speed-tuning',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Performance & Speed Tuning',
    category: 'web',
    shortDesc: 'Improve search rankings and web retention by boosting loading times. Optimized for Core Web Vitals and instant rendering.',
    metric: '99/100 Lighthouse Score',
    features: [
      'Next-generation WebP image conversion and scaling',
      'Javascript bundle minification and lazy loading',
      'Elimination of render-blocking stylesheet scripts',
      'Cumulative Layout Shift (CLS) repair'
    ]
  }
];

const Services = (props) => {
  const { navigateTo } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Before vs After Speed Simulator State
  const [speedTestRunning, setSpeedTestRunning] = useState(false);
  const [speedProgress, setSpeedProgress] = useState(0);
  const [showSpeedScores, setShowSpeedScores] = useState(false);

  // WhatsApp Simulator State
  const [waName, setWaName] = useState('');
  const [waIndustry, setWaIndustry] = useState('Coaching Academy');
  const [waMessages, setWaMessages] = useState([
    { id: 1, sender: 'system', text: 'Chat started with CreovixAI Autopilot Bot' }
  ]);
  const [waTyping, setWaTyping] = useState(false);
  const [waSimulated, setWaSimulated] = useState(false);

  const runSpeedSimulation = () => {
    setSpeedTestRunning(true);
    setSpeedProgress(0);
    setShowSpeedScores(false);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      setSpeedProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setSpeedTestRunning(false);
        setShowSpeedScores(true);
      }
    }, 100);
  };

  const handleWhatsAppSimulation = (e) => {
    e.preventDefault();
    if (!waName.trim()) return;
    
    setWaSimulated(true);
    setWaMessages(prev => [
      ...prev,
      { id: Date.now(), sender: 'user', text: `Hi! I want to modernise my ${waIndustry} business. Send details for ${waName}.` }
    ]);
    
    // Step 1: Autopilot replying...
    setWaTyping(true);
    setTimeout(() => {
      setWaTyping(false);
      setWaMessages(prev => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: `👋 Hello ${waName}! Thanks for reaching out. We have analyzed the typical bottlenecks in Pune's ${waIndustry} sector.` }
      ]);
      
      // Step 2: Send PDF Brochure simulation
      setWaTyping(true);
      setTimeout(() => {
        setWaTyping(false);
        setWaMessages(prev => [
          ...prev,
          { id: Date.now() + 2, sender: 'bot', text: `📄 [PDF Brochure] Here is your custom automation schema. We configure fast React apps & automated CRMs to get you 3x more students/enquiries.` }
        ]);
        
        // Step 3: Follow up action call
        setWaTyping(true);
        setTimeout(() => {
          setWaTyping(false);
          setWaMessages(prev => [
            ...prev,
            { id: Date.now() + 3, sender: 'bot', text: `💬 Would you like CreovixAI to schedule a 10-minute audit call for your business? Click "Consult with CreovixAI" below!` }
          ]);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <style>{`
        .services-dashboard {
          background-color: #F8FAFC;
          min-height: 85vh;
          padding: 48px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .dashboard-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .badge-sub {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          color: #2563EB;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          display: inline-block;
        }
        .dashboard-title {
          font-size: clamp(32px, 5vw, 48px);
          fontWeight: 800;
          color: #0F172A;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
        }
        .dashboard-desc {
          font-size: 16px;
          color: #64748B;
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }
        .filter-controls {
          max-width: 640px;
          margin: 0 auto 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        .search-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
        }
        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }
        .search-wrapper:focus-within .search-icon {
          color: #2563EB;
        }
        .search-input {
          width: 100%;
          padding: 14px 20px 14px 48px;
          border-radius: 99px;
          border: 1px solid #E2E8F0;
          font-size: 15px;
          outline: none;
          background-color: #FFFFFF;
          color: #0F172A;
          box-shadow: 0 4px 30px rgba(15, 23, 42, 0.03);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .search-input:focus {
          border-color: #2563EB;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.15);
        }
        .tab-btn {
          background-color: #FFFFFF;
          color: #475569;
          border: 1px solid #E2E8F0;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .tab-btn.active {
          background-color: #2563EB;
          color: #FFFFFF;
          border-color: #2563EB;
          box-shadow: 0 4px 12px rgba(37,99,235,0.2);
        }
        .tab-btn:hover:not(.active) {
          border-color: #CBD5E1;
          background-color: #F8FAFC;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .service-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
          border-color: #2563EB;
        }
        .card-icon-bg {
          width: 48px;
          height: 48px;
          background-color: #EFF6FF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
        }
        .metric-badge {
          font-size: 11px;
          font-weight: 700;
          color: #2563EB;
          text-transform: uppercase;
          background-color: #EFF6FF;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        .features-list {
          margin-top: 16px;
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }
        .feature-check {
          color: #10B981;
          font-weight: bold;
        }
        .explore-btn {
          margin-top: 24px;
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          fontWeight: 600;
          color: #2563EB;
        }
      `}</style>

      <section className="services-dashboard">
        <div className="container">
          
          <div className="dashboard-header">
            <span className="badge-sub">Our Services Suite</span>
            <h1 className="dashboard-title">Everything You Need to Scale Online</h1>
            <p className="dashboard-desc">
              Explore our highly advanced, speed-optimized solutions engineered specifically to generate qualified leads and drive structural business growth.
            </p>

            <div className="filter-controls">
              <div className="search-wrapper">
                <span className="search-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Search services (e.g. Website, Chatbot, WhatsApp)..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { label: 'All Services', id: 'all' },
                  { label: 'Web & Portals', id: 'web' },
                  { label: 'AI & Automation', id: 'ai' },
                  { label: 'SEO & Ads', id: 'seo' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setCategoryFilter(tab.id)}
                    className={`tab-btn ${categoryFilter === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="service-grid">
              {filteredServices.map(serv => (
                <div
                  key={serv.id}
                  className="service-card"
                  onClick={() => navigateTo('services/' + serv.id)}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div className="card-icon-bg">
                        {serv.icon}
                      </div>
                      <span className="metric-badge">
                        {serv.metric}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                      {serv.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>
                      {serv.shortDesc}
                    </p>

                    <ul className="features-list">
                      {serv.features.map((feat, i) => (
                        <li key={i} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="explore-btn">
                    <span>Explore Advanced System</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '16px', color: '#0F172A' }}>No Services Match Your Search</h3>
              <p style={{ color: '#64748B', fontSize: '14px', marginTop: '8px' }}>Try adjusting your filtering tags or clear the search query.</p>
              <button 
                onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }}
                style={{
                  marginTop: '16px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Section: Premium Visual Features Playground */}
          <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
            
            {/* 1. Before vs After Speed Test Section */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(15,23,42,0.03)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span className="badge-sub" style={{ color: '#2563EB', fontWeight: 600, letterSpacing: '0.1em', fontSize: '11px', textTransform: 'uppercase' }}>Performance Audit Simulator</span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '12px' }}>Slow Wix/WordPress Templates vs React Headless Code</h2>
                <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                  Traditional template builders choke mobile connections with heavy CSS and Javascript rendering. See how we optimize speed down to milliseconds.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="simulator-grid">
                <style>{`
                  @media (max-width: 768px) {
                    .simulator-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
                  }
                `}</style>
                
                {/* Traditional Card */}
                <div style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '30px',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#475569' }}>Standard Template Builders</h3>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>WordPress / Wix / Elementor</span>
                  </div>

                  {/* Lighthouse metric simulation */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', color: '#64748B' }}>
                        <span>Lighthouse Score</span>
                        <strong style={{ color: '#EF4444' }}>{showSpeedScores ? '32/100' : speedTestRunning ? 'Calculating...' : '--'}</strong>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: '#EF4444',
                          width: showSpeedScores ? '32%' : speedTestRunning ? `${Math.min(speedProgress, 32)}%` : '0%',
                          transition: 'width 0.2s'
                        }}></div>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', color: '#64748B' }}>
                        <span>Load Time (LCP)</span>
                        <strong style={{ color: '#EF4444' }}>{showSpeedScores ? '5.4 seconds' : speedTestRunning ? 'Analyzing...' : '--'}</strong>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: '#EF4444',
                          width: showSpeedScores ? '85%' : speedTestRunning ? `${Math.min(speedProgress, 85)}%` : '0%',
                          transition: 'width 0.2s'
                        }}></div>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', marginTop: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#EF4444', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Result: Drops up to 60% mobile enquiries.
                      </span>
                    </div>
                  </div>
                </div>

                {/* CreovixAI Card */}
                <div style={{
                  backgroundColor: '#0F172A',
                  border: '1px solid #1E293B',
                  borderRadius: '16px',
                  padding: '30px',
                  position: 'relative',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(37,99,235,0.06)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#38BDF8' }}>CreovixAI Headless</h3>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '4px 10px', borderRadius: '4px' }}>React SPA Engine</span>
                  </div>

                  {/* Lighthouse metric simulation */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', color: '#94A3B8' }}>
                        <span>Lighthouse Score</span>
                        <strong style={{ color: '#10B981' }}>{showSpeedScores ? '99/100' : speedTestRunning ? 'Optimizing...' : '--'}</strong>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#1E293B', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: '#10B981',
                          width: showSpeedScores ? '99%' : speedTestRunning ? `${speedProgress}%` : '0%',
                          transition: 'width 0.2s'
                        }}></div>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', color: '#94A3B8' }}>
                        <span>Load Time (LCP)</span>
                        <strong style={{ color: '#10B981' }}>{showSpeedScores ? '0.4 seconds' : speedTestRunning ? 'Optimizing...' : '--'}</strong>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#1E293B', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: '#10B981',
                          width: showSpeedScores ? '10%' : speedTestRunning ? `${Math.max(100 - speedProgress, 10)}%` : '0%',
                          transition: 'width 0.2s'
                        }}></div>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #1E293B', paddingTop: '16px', marginTop: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Result: Zero speed leakage. Sub-second load.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action trigger button */}
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button
                  onClick={runSpeedSimulation}
                  disabled={speedTestRunning}
                  style={{
                    backgroundColor: speedTestRunning ? '#94A3B8' : '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 32px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: speedTestRunning ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: speedTestRunning ? 'none' : '0 8px 24px rgba(37,99,235,0.2)'
                  }}
                >
                  {speedTestRunning ? `Benchmarking Performance (${speedProgress}%)` : 'Run Comparative Speed Simulator'}
                </button>
              </div>
            </div>

            {/* 2. WhatsApp Autopilot Simulation Playground */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(15,23,42,0.03)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span className="badge-sub" style={{ color: '#059669', fontWeight: 600, letterSpacing: '0.1em', fontSize: '11px', textTransform: 'uppercase' }}>Real-time Webhook Simulator</span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '12px' }}>Autopilot CRM & WhatsApp API Integration</h2>
                <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                  Simulate our high-performance automated query flows. Fill the test details to trigger a simulated automated WhatsApp conversion flow in real-time.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '40px' }} className="wa-grid">
                <style>{`
                  @media (max-width: 768px) {
                    .wa-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
                  }
                `}</style>

                {/* Left Side: Test Setup Form */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <form onSubmit={handleWhatsAppSimulation} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Your Name / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Hillgreen School / Dr. Shah"
                        value={waName}
                        onChange={(e) => setWaName(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          outline: 'none',
                          fontSize: '14px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Industry Category</label>
                      <select
                        value={waIndustry}
                        onChange={(e) => setWaIndustry(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          outline: 'none',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF'
                        }}
                      >
                        <option value="Educational Academy">Educational Academy / School</option>
                        <option value="Healthcare Clinic">Healthcare Clinic / Hospital</option>
                        <option value="Manufacturing Unit">Manufacturing Plant</option>
                        <option value="Consultancy Office">Professional Consultancy</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={waTyping || !waName.trim()}
                      style={{
                        backgroundColor: '#059669',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: (!waName.trim() || waTyping) ? 'not-allowed' : 'pointer',
                        boxShadow: '0 4px 14px rgba(5,150,105,0.2)',
                        transition: 'background-color 0.2s',
                        marginTop: '8px'
                      }}
                    >
                      {waTyping ? 'Autopilot Processing...' : 'Simulate WhatsApp Autopilot Flow'}
                    </button>
                  </form>
                </div>

                {/* Right Side: Mock Phone Screen */}
                <div style={{
                  backgroundColor: '#ECE5DD',
                  borderRadius: '24px',
                  border: '12px solid #1E293B',
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  {/* Phone Header */}
                  <div style={{
                    backgroundColor: '#075E54',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#128C7E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>S</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700 }}>CreovixAI Autopilot</div>
                      <div style={{ fontSize: '10px', color: '#34D399' }}>{waTyping ? 'typing...' : 'Online'}</div>
                    </div>
                  </div>

                  {/* Phone Chat Area */}
                  <div style={{
                    flex: 1,
                    padding: '16px',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {waMessages.map((msg) => {
                      if (msg.sender === 'system') {
                        return (
                          <div key={msg.id} style={{
                            alignSelf: 'center',
                            backgroundColor: '#FFE0B2',
                            color: '#5D4037',
                            fontSize: '11px',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            textAlign: 'center'
                          }}>
                            {msg.text}
                          </div>
                        );
                      }
                      
                      const isUser = msg.sender === 'user';
                      return (
                        <div
                          key={msg.id}
                          style={{
                            alignSelf: isUser ? 'flex-end' : 'flex-start',
                            backgroundColor: isUser ? '#DCF8C6' : '#FFFFFF',
                            color: '#000000',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            maxWidth: '85%',
                            fontSize: '13px',
                            lineHeight: 1.4,
                            boxShadow: '0 1px 1px rgba(0,0,0,0.06)'
                          }}
                        >
                          {msg.text}
                        </div>
                      );
                    })}
                    
                    {waTyping && (
                      <div style={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#FFFFFF',
                        color: '#64748B',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontStyle: 'italic'
                      }}>
                        typing...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Live Tech Stack Badges Panel */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <span className="badge-sub" style={{ color: '#2563EB', fontWeight: 600, letterSpacing: '0.1em', fontSize: '11px', textTransform: 'uppercase' }}>Technical Foundation</span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '32px' }}>Modern Tech Stack For Custom Deployments</h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '20px',
                justifyContent: 'center'
              }}>
                {[
                  { name: 'React SPA', color: '#61DAFB', bg: 'rgba(97,218,251,0.08)' },
                  { name: 'Vite Node', color: '#646CFF', bg: 'rgba(100,108,255,0.08)' },
                  { name: 'NextJS Static', color: '#0F172A', bg: 'rgba(15,23,42,0.05)' },
                  { name: 'Tailwind CSS', color: '#38BDF8', bg: 'rgba(56,189,248,0.08)' },
                  { name: 'WhatsApp API', color: '#25D366', bg: 'rgba(37,211,102,0.08)' },
                  { name: 'OpenAI GPT-4', color: '#10a37f', bg: 'rgba(16,163,127,0.08)' },
                  { name: 'Google Cloud', color: '#4285F4', bg: 'rgba(66,133,244,0.08)' },
                  { name: 'PostgreSQL DB', color: '#336791', bg: 'rgba(51,103,145,0.08)' }
                ].map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: tech.bg,
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '20px 10px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 700, color: tech.color }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Service Trust Guarantee Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '24px'
            }} className="guarantee-grid">
              <style>{`
                @media (max-width: 768px) {
                  .guarantee-grid { grid-template-columns: 1fr !important; }
                }
              `}</style>
              
              {[
                {
                  title: '99.9% Uptime Guarantee',
                  desc: 'All React single-page systems are compiled to static files and served via distributed CDN edges.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                },
                {
                  title: 'Zero Security Vulnerabilities',
                  desc: 'Statically-built frontends eliminate server-side injection risks and WordPress database vulnerabilities.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                },
                {
                  title: '14-Day Delivery SLA',
                  desc: 'We launch standard landing pages and API-linked web structures in two weeks or we refund you.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 4px 12px rgba(15,23,42,0.02)'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Consulting Prompt */}
          <div style={{
            marginTop: '64px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #DBEAFE',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#0F172A' }}>Need a Custom Dynamic Solution?</h3>
            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              If your academy or business needs custom integrations, API linkages, or proprietary automated systems, we are ready to assist.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              style={{
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Consult with CreovixAI
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
