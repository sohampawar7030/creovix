import React, { useState, useEffect } from 'react';

const AISystems = (props) => {
  const { navigateTo } = props;

  // Local state for interactive simulators
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! I am the CreovixAI helper bot. Click any question below to see how I respond to parent queries in real time!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // track clicked options to disable them or keep flow
  
  const [roiVolume, setRoiVolume] = useState(150);
  const [activeFaq, setActiveFaq] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  // WhatsApp sequence flow states
  const [flowStep, setFlowStep] = useState(0);
  const [flowRunning, setFlowRunning] = useState(false);
  const [flowLogs, setFlowLogs] = useState([
    '// System idle. Click "Run Sequence Test" below to simulate a live event pipeline...'
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 4000);
  };

  const handleChatOption = (question, answer) => {
    if (isTyping) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: answer }]);
    }, 1000);
  };

  const startWorkflowSimulation = () => {
    if (flowRunning) return;
    setFlowRunning(true);
    setFlowStep(1);
    setFlowLogs(['[1/4] Webhook Triggered: Candidate form submitted on frontend portal.']);

    const steps = [
      { step: 2, log: '[2/4] Syncing Secure Database: Contact logged into Zoho CRM & Google Sheets (Status: 200 OK).' },
      { step: 3, log: '[3/4] Dispatching WhatsApp API: Custom brochure PDF and greeting sent to parent (+91 98230 11223).' },
      { step: 4, log: '[4/4] Administrative Alert: WhatsApp lead alert pushed to Principal & Admissions Team.' }
    ];

    steps.forEach((s, idx) => {
      setTimeout(() => {
        setFlowStep(s.step);
        setFlowLogs(prev => [...prev, s.log]);
        if (s.step === 4) {
          setFlowRunning(false);
        }
      }, (idx + 1) * 1200);
    });
  };

  // ROI computations
  const getRoiValues = (volume) => {
    switch (volume) {
      case 50:
        return { hours: 25, leads: 8, savings: '₹15,000' };
      case 150:
        return { hours: 75, leads: 24, savings: '₹45,000' };
      case 300:
        return { hours: 150, leads: 48, savings: '₹90,000' };
      case 500:
        return { hours: 250, leads: 80, savings: '₹1,50,000' };
      default:
        return { hours: 75, leads: 24, savings: '₹45,000' };
    }
  };

  const roi = getRoiValues(roiVolume);

  return (
    <>
      <style>{`
        .ai-page {
          background-color: #FFFFFF;
          color: #0F172A;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }
        @media (max-width: 992px) {
          .ai-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .card-panel {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
          text-align: left;
        }
        .pain-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }
        .pain-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background-color: #FFF5F5;
          border: 1px solid #FED7D7;
          border-radius: 10px;
          padding: 14px;
          font-size: 13.5px;
          color: #C53030;
          line-height: 1.5;
        }
        .solution-box {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background-color: #ECFDF5;
          border: 1px solid #D1FAE5;
          border-radius: 10px;
          padding: 16px;
          font-size: 14px;
          color: #065F46;
          line-height: 1.6;
          margin-top: 20px;
        }
        
        /* Chat Simulator Styling */
        .chat-frame {
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          background-color: #FFFFFF;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          height: 480px;
        }
        .chat-header {
          background-color: #0F172A;
          color: #FFFFFF;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chat-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
        }
        .chat-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background-color: #F8FAFC;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-bubble {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 13px;
          line-height: 1.5;
        }
        .chat-bubble.bot {
          background-color: #FFFFFF;
          color: #0F172A;
          align-self: flex-start;
          border: 1px solid #E2E8F0;
          border-bottom-left-radius: 4px;
        }
        .chat-bubble.user {
          background-color: #2563EB;
          color: #FFFFFF;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .chat-options {
          padding: 12px;
          border-top: 1px solid #E2E8F0;
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .chat-option-btn {
          background-color: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          color: #334155;
          text-align: left;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .chat-option-btn:hover {
          background-color: #EFF6FF;
          border-color: #BFDBFE;
          color: #2563EB;
        }

        /* Stepper Flow */
        .stepper-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          margin-top: 24px;
        }
        .stepper-container::before {
          content: '';
          position: absolute;
          left: 17px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background-color: #E2E8F0;
          z-index: 1;
        }
        .stepper-node {
          display: flex;
          gap: 20px;
          position: relative;
          z-index: 2;
        }
        .stepper-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #F1F5F9;
          border: 2px solid #E2E8F0;
          color: #64748B;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .stepper-node.active .stepper-badge {
          background-color: #EFF6FF;
          border-color: #BFDBFE;
          color: #2563EB;
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.15);
        }
        .stepper-content {
          padding-top: 6px;
          text-align: left;
        }

        /* Tabs & Buttons */
        .volume-btn {
          border: 1px solid #E2E8F0;
          background-color: #FFFFFF;
          color: #475569;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .volume-btn.active {
          background-color: #2563EB;
          border-color: #2563EB;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }
        
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .faq-tab {
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          overflow: hidden;
          background-color: #FFFFFF;
          transition: all 0.2s ease;
        }
        .faq-header {
          padding: 16px;
          background-color: #F8FAFC;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 14px;
          color: #0F172A;
          user-select: none;
        }
        .faq-body {
          padding: 16px;
          border-top: 1px solid #E2E8F0;
          font-size: 13px;
          color: #475569;
          line-height: 1.6;
          text-align: left;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10B981;
          display: inline-block;
          animation: pulse-green 1.5s infinite;
        }
        @keyframes pulse-green {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .typing-bubble span {
          width: 6px;
          height: 6px;
          background-color: #94A3B8;
          border-radius: 50%;
          display: inline-block;
          margin: 0 2px;
          animation: bounce 1.3s infinite both;
        }
        .typing-bubble span:nth-child(2) { animation-delay: 0.2s; }
        .typing-bubble span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>

      <section className="ai-page">
        <div className="container">
          
          {/* 1. System Hero Header & USP */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '99px',
              padding: '6px 16px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#2563EB',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '16px'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 2v9M8 5h8"/></svg>
              AI & Automation Engineering
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '16px', lineHeight: 1.15 }}>
              Scale Enrollment & Inquiries <span style={{ color: '#2563EB' }}>On Autopilot</span>
            </h1>
            <p style={{ fontSize: '15.5px', color: '#64748B', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              CreovixAI designs automated parent registration triggers, conversational chatbots, and WhatsApp notifications that run 24 hours a day.
            </p>
          </div>

          {/* Main 2-Column Responsive Layout */}
          <div className="ai-grid">
            
            {/* Left Column: Solution description, WhatsApp Sequence Visualizer, ROI calculator, FAQs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* 2. Pain Points & Targeted Solution */}
              <div className="card-panel">
                <span className="badge-sub" style={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.05em', fontSize: '11px', textTransform: 'uppercase' }}>Operational Impact</span>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>
                  Solving Manual Office Delays
                </h2>
                
                {/* Pain Points */}
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Standard Administrative Struggles</h4>
                  <div className="pain-list">
                    <div className="pain-item">
                      <span style={{ fontSize: '14px', marginTop: '2px' }}>⚠️</span>
                      <span>Parents ask for class catalogs but drop out during slow manual office processing.</span>
                    </div>
                    <div className="pain-item">
                      <span style={{ fontSize: '14px', marginTop: '2px' }}>⚠️</span>
                      <span>Manual spreadsheet updates waste hours of administrative labor every week.</span>
                    </div>
                    <div className="pain-item">
                      <span style={{ fontSize: '14px', marginTop: '2px' }}>⚠️</span>
                      <span>No follow-up sequences are initiated, letting valuable business leads leak.</span>
                    </div>
                  </div>
                </div>

                {/* Targeted System Solution */}
                <div className="solution-box">
                  <span style={{ fontSize: '16px', marginTop: '2px' }}>⚙️</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#047857' }}>Targeted System Solution:</strong>
                    We construct custom React database listeners and official WhatsApp triggers. The moment a registration is submitted, parent information details sync automatically, brochures are pushed to WhatsApp, and team alerts dispatch instantly.
                  </div>
                </div>
              </div>

              {/* 3. WhatsApp Sequence Flow Visualizer & Activity Console */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>WhatsApp Sequence Flow Visualizer</h3>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>Visualize the automated step-by-step trigger pipeline when a parent registers.</p>

                <div className="stepper-container">
                  {[
                    { title: '1. Form Submission Trigger', desc: 'Parent enters admission details and submits form on your website.' },
                    { title: '2. Central Database Log', desc: 'System automatically logs applicant name, standard, and phone into CRM.' },
                    { title: '3. Instant WhatsApp Delivery', desc: 'Meta APIs deliver personalized brochure & welcome letter in 3 seconds.' },
                    { title: '4. Administrative WhatsApp Alert', desc: 'Instant notify text dispatched to the school principal or counselor.' }
                  ].map((s, idx) => (
                    <div key={idx} className={`stepper-node ${flowStep >= idx + 1 ? 'active' : ''}`}>
                      <div className="stepper-badge">{idx + 1}</div>
                      <div className="stepper-content">
                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>{s.title}</h4>
                        <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '28px', borderTop: '1px dashed #E2E8F0', paddingTop: '20px' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Simulated Developer Activity Feed</h4>
                  
                  <div style={{
                    backgroundColor: '#0F172A',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#10B981',
                    padding: '16px',
                    borderRadius: '8px',
                    minHeight: '80px',
                    lineHeight: '1.5',
                    marginBottom: '16px'
                  }}>
                    {flowLogs.map((log, lIdx) => (
                      <div key={lIdx}>{log}</div>
                    ))}
                  </div>

                  <button
                    onClick={startWorkflowSimulation}
                    disabled={flowRunning}
                    className="volume-btn active"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '13px' }}
                  >
                    {flowRunning ? 'Processing Automation Sequences...' : '⚡ Run Workflow Simulation'}
                  </button>
                </div>
              </div>

              {/* 4. ROI & Time Savings Calculator */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>ROI & Time Savings Estimator</h3>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>Select your monthly inquiry volume to estimate automation value return.</p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {[50, 150, 300, 500].map((vol) => (
                    <button
                      key={vol}
                      onClick={() => setRoiVolume(vol)}
                      className={`volume-btn ${roiVolume === vol ? 'active' : ''}`}
                    >
                      {vol} Leads / mo
                    </button>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#2563EB', display: 'block' }}>{roi.hours} Hrs</span>
                    <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Manual Work Saved/mo</span>
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#10B981', display: 'block' }}>{roi.leads} Leads</span>
                    <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Saved from Drop-off</span>
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', display: 'block' }}>{roi.savings}</span>
                    <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Admin Value Conserved</span>
                  </div>
                </div>
              </div>

              {/* 5. AI & Automation FAQs */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>System FAQ & Tech Architecture</h3>
                <p style={{ fontSize: '13px', color: '#64748B' }}>Common answers regarding costs, setup, API guidelines, and capabilities.</p>

                <div className="faq-accordion">
                  {[
                    { q: 'How does the WhatsApp Automation connect with our brand?', a: 'We utilize the official Meta WhatsApp Business Cloud API. This allows us to secure a verified green-tick profile, construct automated message templates, and connect triggers directly to your React forms.' },
                    { q: 'Are there any hidden monthly server charges?', a: 'No. We deploy your systems using serverless code on AWS. You only pay for what you use, which typically costs less than ₹500/month for active databases, and your first 1,000 WhatsApp conversations each month are free!' },
                    { q: 'Can your chatbots handle Marathi and English?', a: 'Yes, our systems are built with multilingual capabilities, allowing them to answer parent queries in Marathi, English, or Hindi, which significantly increases conversion rates in Pune districts.' }
                  ].map((faq, idx) => (
                    <div key={idx} className="faq-tab">
                      <div className="faq-header" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                        <span>{faq.q}</span>
                        <span style={{ color: '#2563EB', fontSize: '16px' }}>{activeFaq === idx ? '−' : '+'}</span>
                      </div>
                      {activeFaq === idx && (
                        <div className="faq-body">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Chatbot Simulator, Metrics, Status Dashboard, Security & Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* 6. Interactive Chatbot Playground */}
              <div className="chat-frame">
                <div className="chat-header">
                  <div className="chat-avatar">ST</div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>CreovixAI Bot</h4>
                    <span style={{ fontSize: '10px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span className="status-dot"></span> Online Assistant
                    </span>
                  </div>
                </div>

                <div className="chat-body">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`chat-bubble ${msg.sender}`}>
                      {msg.text}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="chat-bubble bot typing-bubble">
                      <span></span><span></span><span></span>
                    </div>
                  )}
                </div>

                <div className="chat-options">
                  <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingLeft: '4px', marginBottom: '2px' }}>
                    Click a question to test bot auto-reply:
                  </span>
                  {[
                    { q: 'What AI services do you build?', a: 'We build custom WhatsApp automation drip sequences, parent registration portals, localized lead trackers, and conversational database integrations.' },
                    { q: 'Can we connect Zoho CRM & Sheets?', a: 'Yes! We configure API webhooks that instantly bridge customer submissions into Zoho, Google Sheets, or your existing ERP platform.' },
                    { q: 'Where are you based?', a: 'We are based in Pune, Maharashtra. We provide on-site team onboarding, local Marathi support, and custom face-to-face setups.' },
                    { q: 'How long does deployment take?', a: 'A standard custom portal with WhatsApp automation goes live within 14-21 business days, including rigorous QA testing.' }
                  ].map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChatOption(opt.q, opt.a)}
                      className="chat-option-btn"
                    >
                      {opt.q}
                    </button>
                  ))}
                </div>
              </div>

              {/* 7. Measurable Outcomes & Metric Cards */}
              <div style={{
                backgroundColor: '#0F172A',
                borderRadius: '16px',
                padding: '28px',
                color: '#FFFFFF',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(15,23,42,0.15)'
              }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#10B981', display: 'block', marginBottom: '4px' }}>3 Seconds</span>
                <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 6px', color: '#FFFFFF' }}>WhatsApp Brochure Delivery Time</h4>
                <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0 }}>
                  Meta APIs instantly deliver requested documents and welcome guides.
                </p>
              </div>

              {/* 8. Live Integration & Status Dashboard */}
              <div className="card-panel">
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Simulated API Gateway Health
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Chatbot Engine API', desc: 'GPT-4o response pipeline', status: 'ACTIVE' },
                    { label: 'WhatsApp Business API', desc: 'Meta cloud template gateway', status: 'STABLE' },
                    { label: 'Google Sheets DB Listener', desc: 'Realtime row insert trigger', status: 'SYNCHRONIZED' }
                  ].map((api, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div>
                        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', display: 'block' }}>{api.label}</span>
                        <span style={{ fontSize: '10.5px', color: '#64748B' }}>{api.desc}</span>
                      </div>
                      <span style={{
                        backgroundColor: '#EFF6FF',
                        border: '1px solid #BFDBFE',
                        color: '#2563EB',
                        fontSize: '9px',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '4px'
                      }}>
                        {api.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Local Support, Security, Compliance */}
              <div className="card-panel" style={{ backgroundColor: '#F8FAFC' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Data Security & Local Support</h4>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  <strong>🔒 Encryption:</strong> Parent data is fully encrypted under AES-256 standards, conforming to GDPR and local data protection guidelines.
                </p>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  <strong>☁️ Scalability:</strong> System builds are deployed on serverless AWS Lambda pipelines to handle registration peaks.
                </p>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  <strong>📍 Pune Support:</strong> On-premises integration, team training, and support across Pune, Pimpri-Chinchwad, and Maharashtra.
                </p>
              </div>

              {/* 10. Client Testimonials */}
              <div className="card-panel" style={{ borderLeft: '4px solid #2563EB' }}>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#475569', lineHeight: 1.5, marginBottom: '10px' }}>
                  "We automated our follow-ups and WhatsApp material push. Leads from Instagram sync in 3 seconds, and manual office data entry dropped to zero."
                </p>
                <strong style={{ fontSize: '12px', color: '#2563EB' }}>— Director R. Deshmukh, Zenith Coaching Pune</strong>
              </div>

              {/* 11. Downloadable Blueprint Blueprint Asset */}
              <div className="card-panel" style={{ textAlign: 'center', border: '1px dashed #BFDBFE', backgroundColor: '#EFF6FF' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#2563EB', marginBottom: '6px' }}>AI Automation Blueprint</h4>
                <p style={{ fontSize: '11px', color: '#64748B', marginBottom: '16px' }}>Download the layout checklist on how to structure WhatsApp automations.</p>
                <button
                  onClick={() => triggerToast('Simulation: Downloaded "CreovixAI_Automation_Blueprint.pdf" to your system.')}
                  className="volume-btn active"
                  style={{ width: '100%', fontSize: '12px', padding: '10px' }}
                >
                  📥 Download Free Guide (PDF)
                </button>
              </div>

              {/* 12. Tech Stack Credentials & Badges */}
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Credentials & Tech stack
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                  {['React SPA', 'AWS Serverless', 'NodeJS API', 'Meta API Partner', 'GDPR Encrypted'].map((bdg, bIdx) => (
                    <span
                      key={bIdx}
                      style={{
                        backgroundColor: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        fontSize: '10.5px',
                        color: '#475569',
                        fontWeight: 600
                      }}
                    >
                      {bdg}
                    </span>
                  ))}
                </div>
              </div>

              {/* 13. Direct Action CTA */}
              <div style={{
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Ready to Automate?</h4>
                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px' }}>Book a 1-on-1 strategy call with CreovixAI today.</p>
                <button
                  onClick={() => navigateTo('contact')}
                  className="volume-btn active"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '13px' }}
                >
                  Book Free Call
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Simulated Toast Alerts */}
      {toastMsg && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          fontSize: '13px',
          fontWeight: 600,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderLeft: '4px solid #10B981',
          animation: 'fadeInUpKey 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <span>✅</span>
          <span>{toastMsg}</span>
        </div>
      )}
    </>
  );
};

export default AISystems;
