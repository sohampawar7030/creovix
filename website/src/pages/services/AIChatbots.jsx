import React, { useState, useEffect } from 'react';

const AIChatbots = (props) => {
  const { navigateTo } = props;
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I am CreovixAI's Virtual Advisor. How can I help you automate your Pune business or coaching academy today?" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setBotTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botResponse = "I can definitely help you with that! CreovixAI specialises in custom React pages, speed optimization, and WhatsApp notification pipelines. Would you like to schedule a free systems audit?";
      
      const query = textToSend.toLowerCase();
      if (query.includes('fee') || query.includes('pricing') || query.includes('price')) {
        botResponse = "Our development packages are completely transparent. Standard web development starts at ₹25,000, and advanced portal systems or custom AI chatbots depend on your exact requirements. We will give you a detailed blueprint and fixed quote during a free consultation!";
      } else if (query.includes('time') || query.includes('duration') || query.includes('days')) {
        botResponse = "Custom React pages and WhatsApp pipelines are typically engineered and launched in 2-3 weeks. Complex admissions portal syncs or custom CRM setups can take 3-4 weeks.";
      } else if (query.includes('contact') || query.includes('call') || query.includes('book')) {
        botResponse = "You can book a free consultation with CreovixAI directly by clicking the 'Book Free Call' button on our page, or filling out the contact form!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setBotTyping(false);
    }, 1000);
  };

  return (
    <>
      <style>{`
        .ai-chatbots-container {
          background-color: #FFFFFF;
          color: #0F172A;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 48px 0;
          overflow-x: hidden;
        }
        .gradient-text {
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #5B21B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-section {
          text-align: center;
          padding: 48px 24px;
          position: relative;
        }
        .hero-badge {
          background: #F5F3FF;
          border: 1px solid #DDD6FE;
          color: #7C3AED;
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
          border-color: #DDD6FE;
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
          padding: 24px;
          max-width: 600px;
          margin: 0 auto;
        }
        .chat-box {
          height: 300px;
          overflow-y: auto;
          background: #F1F5F9;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
          border: 1px solid #E2E8F0;
        }
        .message {
          margin-bottom: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          max-width: 80%;
          font-size: 13px;
          line-height: 1.5;
        }
        .msg-bot {
          background: #FFFFFF;
          color: #0F172A;
          align-self: flex-start;
          border-bottom-left-radius: 0;
          border: 1px solid #E2E8F0;
        }
        .msg-user {
          background: #7C3AED;
          color: #FFFFFF;
          margin-left: auto;
          border-bottom-right-radius: 0;
        }
        .btn-action {
          background: #7C3AED;
          color: #FFFFFF;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-action:hover {
          background: #6D28D9;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
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

      <div className="ai-chatbots-container">
        <div className="container">
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#7C3AED', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← back to Services
            </button>
            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>CreovixAI / Services / AI Chatbots</span>
          </div>

          {/* HERO */}
          <div className="hero-section">
            <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 2v9M8 5h8"/></svg> 24/7 Automated NLP Pipeline</span>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
              Intelligent <span className="gradient-text">AI Conversational Bots</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '720px', margin: '0 auto 32px', lineHeight: '1.7' }}>
              Automate support queries, capture qualified inbound leads, and route booking pipelines to your team using Gemini-pro integrations and natural language flows.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Integrate AI Chatbots</button>
              <button onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', padding: '12px 28px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Try Live Simulator ↓
              </button>
            </div>
          </div>

          {/* SIMULATOR & INTERACTIVE PLAYGROUND (UI/UX, Mobile Responsive, Custom, CMS bot templates) */}
          <div id="simulator" style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Live AI Advisor Simulator
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px' }}>
              Test our conversational automation. Ask about pricing, project timelines, or custom website integrations below to view NLP pipeline execution.
            </p>

            <div className="interactive-simulator">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', color: '#7C3AED', fontWeight: 700 }}>PREVIEW INTERACTIVE (Point 3)</span>
                <span style={{ fontSize: '10px', background: '#F5F3FF', color: '#7C3AED', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, border: '1px solid #DDD6FE' }}>MOBILE OPTIMISED (Point 4)</span>
              </div>

              <div className="chat-box" style={{ display: 'flex', flexDirection: 'column' }}>
                {messages.map((m, idx) => (
                  <div key={idx} className={`message ${m.sender === 'bot' ? 'msg-bot' : 'msg-user'}`}>
                    {m.text}
                  </div>
                ))}
                {botTyping && (
                  <div className="message msg-bot" style={{ color: '#475569', fontStyle: 'italic' }}>
                    Agent is typing response...
                  </div>
                )}
              </div>

              {/* Quick suggestions (CMS demo point 5) */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['How much does a React site cost?', 'What is the project timeline?', 'Book a consultation'].map((txt, i) => (
                  <button key={i} onClick={() => handleSendMessage(txt)} style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#7C3AED', fontSize: '11px', padding: '6px 12px', borderRadius: '50px', cursor: 'pointer' }}>
                    {txt}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={(e) => { if(e.key === 'Enter') handleSendMessage(inputVal); }} placeholder="Type your query..." style={{ flex: 1, background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '8px', outline: 'none' }} />
                <button onClick={() => handleSendMessage(inputVal)} className="btn-action" style={{ padding: '12px 20px' }}>Send</button>
              </div>
            </div>
          </div>

          {/* 5 POINTS GRID: CORE SERVICES */}
          <div style={{ margin: '48px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
              Chatbot Engineering Capabilities
            </h2>
            <div className="grid-3">
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 2v9M8 5h8"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#7C3AED' }}>1. Custom Web Development</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Direct injection of interactive conversational panels using React. Zero bloated widgets or slow frames slowing down layouts.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#7C3AED' }}>2. E-Commerce Integration</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Product recommendation AI engines. Chatbots link directly to online payment checkouts for deposit settlement.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32635 19.4678 5.48512 20.1581 5.25368 20.7686C5.11181 21.1428 4.79255 21.4293 4.41018 21.5249L3.58579 21.731C2.92388 21.8965 2.50291 22.5855 2.76615 23.2104C2.96919 23.6924 3.44026 24 3.96131 24H4.5C5.03043 24 5.53913 23.7893 5.91421 23.4142L7.32843 22H12Z"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#7C3AED' }}>3. UI/UX Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Polished interfaces featuring custom fonts, clean chat bubble visual alignment, and quick action preset selections.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#7C3AED' }}>4. Mobile-Responsive Design</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Full viewport mobile configurations ensuring parent chat overlays function perfectly across Safari and Android browsers.
                </p>
              </div>
              <div className="card-panel">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#7C3AED' }}>5. CMS Bot Templates</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Headless dashboard platforms letting managers update school details or fee tables parsed by the AI chatbot pipeline.
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
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', fontFamily: 'monospace' }}>POINT 6</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Cloud Infrastructure (AWS)</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Low-latency API proxy tunnels hosted on AWS EC2 servers, delivering NLP conversational responses in under 80ms.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', fontFamily: 'monospace' }}>POINT 7</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>DevOps Automation</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  CI/CD continuous delivery deployment workflows to push new trained keywords or response blueprints immediately.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', fontFamily: 'monospace' }}>POINT 8</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>AI-Powered Solutions</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Trained deep NLP engines utilizing custom system prompts to ensure professional school or agency representation.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', fontFamily: 'monospace' }}>POINT 9</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Performance Optimization</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  Asynchronous stream parsing. Avoid blocking main browser threads, guaranteeing pure 100/100 Lighthouse speed scores.
                </p>
              </div>
              <div className="card-panel">
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', fontFamily: 'monospace' }}>POINT 10</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 12px', color: '#0F172A' }}>Advanced Security</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  GDPR compliance. Chats are sandboxed, preventing public API keys leakages and encrypting user telephone identifiers.
                </p>
              </div>
            </div>
          </div>

          {/* TRUST & CREDIBILITY SECTION */}
          <div className="grid-2" style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#7C3AED', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>TRUST & CREDIBILITY</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '12px 0 24px', color: '#0F172A' }}>Automated Support for Pune Organizations</h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                We engineer low-latency chat systems for Pune education institutes, preschool portals, and local e-commerce services to drive parent/client registrations.
              </p>

              {/* Testimonial (Point 13) */}
              <div style={{ background: '#F1F5F9', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #7C3AED', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>
                  "We added CreovixAI's chatbot on our admissions page. It resolved 75% of parent FAQ queries automatically overnight, sending hot leads to our team's phone."
                </p>
                <strong style={{ fontSize: '12px', color: '#7C3AED' }}>— Founder R. Joshi, Pune JEE Academy</strong>
              </div>

              {/* Founder Credibility (Point 15) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>SP</div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0F172A' }}>CreovixAI</h5>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Founder & Chief Architect, CreovixAI</p>
                </div>
              </div>
            </div>

            {/* Case Studies & Industry Expertise */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 700 }}>POINT 11: CLIENT CASE STUDY</span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', marginBottom: '8px', color: '#0F172A' }}>Pune JEE Prep AI Systems Integration</h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> Parents dropped off support lines outside working hours.<br />
                  <strong>Solution:</strong> Installed conversational AI trained on syllabus and fee structure FAQs.<br />
                  <strong>Result:</strong> Support overheads reduced by 60%, Captured 80+ leads monthly after 8 PM.
                </p>
              </div>

              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>POINT 14: INDUSTRY EXPERTISE</span>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  Active domains: <strong>Science & Commerce Academies, Digital Agencies, Preschool portals, and E-Commerce Retail operations.</strong>
                </p>
              </div>

              {/* Portfolio Showcase (Point 12) */}
              <div className="card-panel">
                <span style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 700 }}>POINT 12: PORTFOLIO SHOWCASE</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  {['JEE QA System', 'Parent FAQ Agent', 'Lead Routing Script'].map((proj, i) => (
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
              <span style={{ fontSize: '12px', color: '#7C3AED', fontWeight: 700, textTransform: 'uppercase' }}>SYSTEM INTEGRATION STAGES</span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>Blueprint to Launch Roadmap (Point 18)</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { step: '01', title: 'Intent Mapping', desc: 'Outlining custom student inquiries, support FAQs, and webhook schemas.' },
                { step: '02', title: 'SEO-Friendly Routing (Pt 17)', desc: 'Optimising metadata keywords and search parameters to display bot reviews in SERP.' },
                { step: '03', title: 'AWS Server Deployment', desc: 'Deploying deep learning networks on AWS and integrating SSL keys.' },
                { step: '04', title: 'Post-Launch Care (Pt 16)', desc: 'Reviewing conversation transcripts, tuning responses weekly, and guaranteeing API continuity.' }
              ].map((rd, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#7C3AED', display: 'block', marginBottom: '8px' }}>{rd.step}</span>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{rd.title}</h5>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{rd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION (Point 19) */}
          <div style={{ padding: '48px 0', borderTop: '1px solid #E2E8F0', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#0F172A' }}>
              AI Chatbot FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'Can the chatbot handle Marathi and Hindi queries?', a: 'Yes! Our custom-trained models parse Marathi, Hindi, and English (Hinglish/Marathlish) naturally, allowing local parents to get answers easily.' },
                { q: 'How does it send leads to our sales team?', a: 'When the AI identifies a hot enrollment request, it triggers webhooks linking directly to your team’s WhatsApp, sending student name and details instantly.' },
                { q: 'How secure is the parent conversation history?', a: 'All dialogues are secure and sandboxed. We follow GDPR guidelines, ensuring parent phone numbers are never stored in plain-text logs.' }
              ].map((faq, i) => (
                <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span style={{ color: '#7C3AED' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
            border: '1px solid #DDD6FE',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <span style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET A CHATBOT (POINT 20)</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', marginBottom: '12px', color: '#0F172A' }}>Book a Free AI Agent Audit</h3>
            <p style={{ color: '#475569', fontSize: '15px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Connect with CreovixAI today. We will build a customized mock AI bot for your school or academy and outline support savings.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-action" onClick={() => navigateTo('contact')}>Book an AI Audit</button>
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

export default AIChatbots;
