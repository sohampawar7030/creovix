import React from 'react';

const Contact = (props) => {
  const {
    navOpen, setNavOpen,
    scrolled, setScrolled,
    activeIndustry, setActiveIndustry,
    testimonialIdx, setTestimonialIdx,
    formData, setFormData,
    formSent, setFormSent,
    formSending, setFormSending,
    currentPage, setCurrentPage,
    statsTriggered, setStatsTriggered,
    calcTraffic, setCalcTraffic,
    calcConv, setCalcConv,
    calcValue, setCalcValue,
    selectedCompetitor, setSelectedCompetitor,
    auditRunning, setAuditRunning,
    auditProgress, setAuditProgress,
    auditResults, setAuditResults,
    userScanUrl, setUserScanUrl,
    isScanningUserSite, setIsScanningUserSite,
    userScanProgress, setUserScanProgress,
    userScanConsoleLogs, setUserScanConsoleLogs,
    userScanReport, setUserScanReport,
    terminalTab, setTerminalTab,
    terminalLogs, setTerminalLogs,
    runSpeedAudit,
    triggerUserSiteScan,
    triggerTerminalAction,
    navigateTo,
    handleFormSubmit,
    handleInputChange,
    useCounter
  } = props;

  return (
    <>
      {/* PAGE 7: CONTACT PAGE */}
{/* PAGE 7: CONTACT PAGE */}
        
          <section className="section-pad animate-fade-in" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="container">
              
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <div className="mono-font" style={{ fontSize: '12px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                  GET IN TOUCH
                </div>
                <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '16px' }}>
                  Let's Build Something Great
                </h1>
                <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                  Fill out the form below or chat with CreovixAI directly. We respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* 2 Column Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px' }} className="contact-layout">
                <style>{`
                  @media (max-width: 768px) {
                    .contact-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
                  }
                `}</style>

                {/* Left Side: Contact Form */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 4px 12px rgba(15,23,42,0.03)'
                }}>
                  
                  {formSent ? (
                    <div style={{
                      backgroundColor: '#EFF6FF',
                      border: '1px solid #DBEAFE',
                      borderRadius: '6px',
                      padding: '24px',
                      textAlign: 'center'
                    }} className="animate-fade-in">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}><polyline points="20 6 9 17 4 12"/></svg>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2563EB', marginBottom: '8px' }}>Message Sent!</h3>
                      <p style={{ fontSize: '14px', color: '#64748B' }}>
                        Thank you for reaching out. CreovixAI will review your requirements and reply within 24 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anand Patil"
                          required
                          style={{
                            width: '100%',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            padding: '12px 16px',
                            fontSize: '15px',
                            color: '#0F172A',
                            fontFamily: "'DM Sans', sans-serif",
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                          Business or School Name
                        </label>
                        <input
                          type="text"
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          placeholder="e.g. Pune International Academy"
                          style={{
                            width: '100%',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            padding: '12px 16px',
                            fontSize: '15px',
                            color: '#0F172A',
                            fontFamily: "'DM Sans', sans-serif",
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                        <style>{`
                          @media (max-width: 500px) {
                            .form-row-2 { grid-template-columns: 1fr !important; }
                          }
                        `}</style>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 99999 99999"
                            required
                            style={{
                              width: '100%',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid #E2E8F0',
                              borderRadius: '6px',
                              padding: '12px 16px',
                              fontSize: '15px',
                              color: '#0F172A',
                              fontFamily: "'DM Sans', sans-serif",
                              outline: 'none'
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. anand@example.com"
                            required
                            style={{
                              width: '100%',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid #E2E8F0',
                              borderRadius: '6px',
                              padding: '12px 16px',
                              fontSize: '15px',
                              color: '#0F172A',
                              fontFamily: "'DM Sans', sans-serif",
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                          Message / Project Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us briefly about your school, academy or business systems requirements..."
                          style={{
                            width: '100%',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            padding: '12px 16px',
                            fontSize: '15px',
                            color: '#0F172A',
                            fontFamily: "'DM Sans', sans-serif",
                            outline: 'none',
                            resize: 'vertical'
                          }}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={formSending}
                        style={{
                          backgroundColor: formSending ? '#93C5FD' : '#2563EB',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '14px',
                          borderRadius: '6px',
                          fontWeight: 700,
                          fontSize: '15px',
                          cursor: formSending ? 'not-allowed' : 'pointer',
                          marginTop: '8px'
                        }}
                      >
                        {formSending ? 'Sending...' : 'Send Inquiry Message →'}
                      </button>

                    </form>
                  )}

                </div>

                {/* Right Side: Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* WhatsApp Block */}
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '28px'
                  }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                          Chat on WhatsApp
                        </h4>
                        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px', lineHeight: '1.5' }}>
                          This is the absolute fastest way to establish direct dialogue.
                        </p>
                        <button
                          onClick={() => window.open('https://wa.me/917030806080', '_blank')}
                          style={{
                            backgroundColor: '#25D366',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          Open WhatsApp Chat →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Email Block */}
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '28px'
                  }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                          Send an Email
                        </h4>
                        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '8px' }}>
                          For project RFPs, institutional documentation, or partnerships:
                        </p>
                        <a href="mailto:contact@creovixai.me" style={{ fontSize: '15px', color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                          contact@creovixai.me
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Book Call Block */}
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '28px'
                  }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                          Schedule a Free Call
                        </h4>
                        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px', lineHeight: '1.5' }}>
                          Setup a dedicated 30-minute consultation call with CreovixAI.
                        </p>
                        <button
                          onClick={() => window.open('https://wa.me/917030806080', '_blank')}
                          style={{
                            backgroundColor: 'transparent',
                            color: '#2563EB',
                            border: '1px solid #2563EB',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Book Free Call →
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>
    </>
  );
};

export default Contact;
