import React, { useEffect } from 'react';

const About = (props) => {
  const { navigateTo } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .corp-about-page {
          background-color: #FFFFFF;
          color: #0F172A;
          font-family: 'DM Sans', sans-serif;
          padding: 56px 0;
          line-height: 1.6;
          text-align: left;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 56px;
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
          fontWeight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 15.5px;
          color: #64748B;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Responsive Grids */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        
        @media (max-width: 992px) {
          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          .grid-2 {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 576px) {
          .grid-4 {
            grid-template-columns: 1fr;
          }
        }

        /* Card panels */
        .corp-card {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
          text-align: left;
          height: 100%;
          box-sizing: border-box;
        }
        .corp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.04);
          border-color: #CBD5E1;
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #2563EB;
        }

        .icon-wrapper.emerald {
          background-color: #ECFDF5;
          color: #059669;
        }

        /* Number Badges for Stepper Cards */
        .number-badge {
          font-size: 36px;
          font-weight: 800;
          color: #E2E8F0;
          line-height: 1;
          margin-bottom: 12px;
        }
        .corp-card:hover .number-badge {
          color: #2563EB;
        }

        /* Lists formatting */
        .tick-list {
          list-style: none;
          padding: 0;
          margin: 20px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tick-list li {
          position: relative;
          padding-left: 28px;
          font-size: 14.5px;
          color: #475569;
        }
        .tick-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #2563EB;
          font-weight: 900;
          font-size: 15px;
        }

        /* Highlight box */
        .stat-highlight-box {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          border-radius: 16px;
          padding: 40px;
          color: #FFFFFF;
          text-align: center;
        }

        .btn-cta {
          background-color: #2563EB;
          border: 1px solid #2563EB;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-cta:hover {
          background-color: #1D4ED8;
          border-color: #1D4ED8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .btn-outline {
          background-color: transparent;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-outline:hover {
          background-color: #F8FAFC;
          border-color: #94A3B8;
          color: #0F172A;
        }
      `}</style>

      <div className="corp-about-page">
        <div className="container">

          {/* 1. HERO HEADER SECTION */}
          <div style={{ textAlign: 'center', padding: '40px 0', borderBottom: '1px solid #E2E8F0', marginBottom: '56px' }}>
            <span className="section-tag">Who We Are?</span>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 52px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', margin: '12px 0 20px', lineHeight: 1.1 }}>
              Redefining Possibility Through <span style={{ color: '#2563EB' }}>Intelligent Engineering</span>
            </h1>
            <p style={{ fontSize: '16.5px', color: '#475569', maxWidth: '780px', margin: '0 auto', lineHeight: 1.7 }}>
              CreovixAI pioneers custom-coded software development, web platforms, and automated workflow triggers. We combine technical rigor with absolute operational clarity to deliver systems that scale.
            </p>
          </div>

          {/* 2. FOUR CORE PILLARS GRID */}
          <div style={{ marginBottom: '64px' }}>
            <div className="grid-4">
              
              {/* Pillar 1: Client satisfaction */}
              <div className="corp-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>
                  100% Client Satisfaction
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  We bring a team of software specialists, automation architects, and industry experts committed to pushing boundaries. Every project reflects our commitment to quality and long-term client success.
                </p>
              </div>

              {/* Pillar 2: Future-Ready Solutions */}
              <div className="corp-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>
                  Future-Ready Solutions
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  We don't just solve today's problems — we anticipate tomorrow's. Our forward-thinking approach ensures your business stays competitive, adaptive, and ready for the future of digital transformation.
                </p>
              </div>

              {/* Pillar 3: Commitment to Quality */}
              <div className="corp-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>
                  Commitment to Quality
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Our team of engineers, database experts, and builders ensures precision, reliability, and performance — delivering innovative, custom React/Node structures that consistently drive measurable results.
                </p>
              </div>

              {/* Pillar 4: Transparent Collaboration */}
              <div className="corp-card">
                <div className="icon-wrapper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>
                  Transparent Collaboration
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  We believe in open, honest communication and seamless collaboration, keeping our clients informed and involved at every step of the project lifecycle for absolute clarity, trust, and shared success.
                </p>
              </div>

            </div>
          </div>

          {/* 3. WHAT SETS US APART & STATISTICS */}
          <div style={{ padding: '56px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', marginBottom: '56px' }}>
            <div className="grid-2">
              
              {/* Left Column content */}
              <div>
                <span className="section-tag">Discover More</span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '20px' }}>
                  What Sets Us Apart
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                  We’re a team of software developers, automation architects, and digital specialists with deep, hands-on experience — from deploying custom systems across local enterprises to helping growth-stage companies build their first intelligent workflows.
                </p>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                  We’ve delivered solutions in high-stakes environments:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '0 0 20px', color: '#475569', fontSize: '14.5px', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '6px' }}>Local educational admission networks processing thousands of candidate forms</li>
                  <li style={{ marginBottom: '6px' }}>Mission-critical database integrations handling payments</li>
                  <li style={{ marginBottom: '6px' }}>Enterprise administration panels where system delays cost client dropoffs</li>
                </ul>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  This dual capability sets us apart: enterprise-grade discipline with startup-level agility. Whether you’re optimizing a school portal, automating business follow-ups, or transforming entire administration workflows, we adapt our approach to your reality — your budget, timeline, and operational constraints. No generic templates. Just purpose-built solutions.
                </p>
              </div>

              {/* Right Column: Stat Badge highlight */}
              <div className="stat-highlight-box">
                <span style={{ fontSize: '64px', fontWeight: 900, color: '#38BDF8', display: 'block', lineHeight: 1 }}>50+</span>
                <span style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', margin: '12px 0 24px' }}>
                  Custom Projects Delivered
                </span>
                
                <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.6, margin: '0 0 32px' }}>
                  From educational preschool groups and coaching classes to localized businesses across Pune, Maharashtra, we engineer software that handles active operations.
                </p>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button onClick={() => navigateTo('contact')} className="btn-cta">
                    Contact Us
                  </button>
                  <button onClick={() => navigateTo('services')} className="btn-outline" style={{ color: '#FFFFFF', borderColor: '#475569' }}>
                    Our Services
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 4. OUR APPROACH & WHY CHOOSE US */}
          <div style={{ marginBottom: '64px' }}>
            <div className="grid-2">
              
              {/* Left Column: Our Approach */}
              <div className="corp-card" style={{ backgroundColor: '#FFFFFF' }}>
                <span className="section-tag">How We Work</span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>
                  Our Approach
                </h3>
                <p style={{ fontSize: '14.5px', color: '#475569', marginBottom: '20px' }}>
                  At CreovixAI, we go beyond surface-level web applications:
                </p>
                <ul className="tick-list">
                  <li><strong>Deep Context:</strong> We begin with a deep, comprehensive understanding of your specific business and administrative workflow constraints.</li>
                  <li><strong>Purpose-Built Tools:</strong> We bring the right tech architecture for the job — clean React components, NodeJS webhooks, and AWS Cloud deployments.</li>
                  <li><strong>Result Focused:</strong> We target actual outputs, not marketing hype — delivering systems that are practical, scale automatically, and are built to stay sustainable.</li>
                  <li><strong>Technical Advisory:</strong> We build robust data protection strategies and offer active advisory that empowers your administrative staff.</li>
                </ul>
              </div>

              {/* Right Column: Why choose NextAstra/CreovixAI */}
              <div className="corp-card" style={{ backgroundColor: '#FFFFFF' }}>
                <span className="section-tag">The Advantage</span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>
                  Why Organizations Choose Us
                </h3>
                <p style={{ fontSize: '14.5px', color: '#475569', marginBottom: '20px' }}>
                  Partnering with CreovixAI ensures an engineering partner dedicated to high-standard execution:
                </p>
                <ul className="tick-list">
                  <li>Proven success across multiple local coaching centers, playgroups, and business sectors.</li>
                  <li>Cross-functional teams providing both technical depth and operational strategic clarity.</li>
                  <li>Deep commitment to custom-coded performance improvements, avoiding slow page builders.</li>
                  <li>A product-focused engineering mindset balancing instant performance with usability.</li>
                  <li>Software architectures that are not just built — but built to last.</li>
                </ul>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '32px', maxWidth: '800px', margin: '32px auto 0' }}>
              <p style={{ fontSize: '15px', color: '#475569', fontStyle: 'italic' }}>
                "Choosing us means partnering with a forward-thinking team that’s as invested in your success as you are. Together, we’ll unlock the full potential of custom digital architectures to transform your business."
              </p>
            </div>
          </div>

          {/* 5. KEY SERVICE CAPABILITIES SECTION */}
          <div style={{ padding: '56px 0', borderTop: '1px solid #E2E8F0', marginBottom: '56px' }}>
            <div className="section-header">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Key Service Capabilities</h2>
              <p className="section-subtitle">We design, develop, and deploy tailored digital systems that meet specific operational requirements.</p>
            </div>

            <div className="grid-4">
              
              {/* Capability 1 */}
              <div className="corp-card">
                <div className="number-badge">01</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px' }}>
                  Custom Platform Development
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                  Specializing in the design, architecture, and building of tailored web platforms. This includes selecting the right stack, ensuring scalability, and integrating with legacy systems.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="corp-card">
                <div className="number-badge">02</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px' }}>
                  Intelligent Tool Building
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                  Creating specific automation-powered tools and applications that address particular business challenges, leveraging database triggers, APIs, and Generative AI chatbot interfaces.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="corp-card">
                <div className="number-badge">03</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px' }}>
                  End-to-End Integration
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                  Offering comprehensive services for integrating web platforms into your existing IT/counseling infrastructure, providing ongoing optimizations to ensure maximum value.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="corp-card">
                <div className="number-badge">04</div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px' }}>
                  Tailored Support & Services
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                  Providing expert custom development services for a wide range of web tools, including model training, API webhooks, and the creation of intelligent workflows.
                </p>
              </div>

            </div>
          </div>

          {/* 6. APPLIED DIGITAL CAPABILITIES SECTION */}
          <div style={{ padding: '56px 0', borderTop: '1px solid #E2E8F0' }}>
            <div className="section-header">
              <span className="section-tag">Applied Tech</span>
              <h2 className="section-title">Redefining Operations</h2>
              <p className="section-subtitle">Delivering high-value modules integrated directly into client software.</p>
            </div>

            <div className="grid-4">
              
              {/* App Cap 1 */}
              <div className="corp-card">
                <div className="icon-wrapper emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="2" y2="18"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px' }}>
                  Predictive Analytics
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Harness the power of database records to forecast enrollment trends, optimize advertising pipelines, and stay ahead of competitors.
                </p>
              </div>

              {/* App Cap 2 */}
              <div className="corp-card">
                <div className="icon-wrapper emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 12 12 16 16 12"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px' }}>
                  Autonomous Systems
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Create autonomous status triggers and webhooks that adapt and transform customer logistics, notifications, and client engagement.
                </p>
              </div>

              {/* App Cap 3 */}
              <div className="corp-card">
                <div className="icon-wrapper emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 2v9M8 5h8"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px' }}>
                  Generative AI
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Produce highly realistic automated text, form validations, and custom inquiry summaries to power marketing, support, and office workflow designs.
                </p>
              </div>

              {/* App Cap 4 */}
              <div className="corp-card">
                <div className="icon-wrapper emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px' }}>
                  Voice & Message Assistants
                </h4>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Build natural-sounding chatbot responses and WhatsApp interactions to enhance parent experiences and systematically streamline staff callback workflows.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
