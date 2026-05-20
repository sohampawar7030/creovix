import React from 'react';

const Portfolio = (props) => {
  const {
    navOpen, setNavOpen,
    scrolled, setScrolled,
    activeIndustry, setActiveIndustry,
    testimonialIdx, setTestimonialIdx,
    formData, setFormData,
    formSent, setFormSent,
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
    useCounter,
    projects
  } = props;

  return (
    <>
      {/* PAGE 4: PORTFOLIO PAGE */}
{/* PAGE 4: PORTFOLIO PAGE */}
        
          <section className="section-pad animate-fade-in" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="container">
              
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <div className="mono-font" style={{ fontSize: '12px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                  Proven Case Studies
                </div>
                <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '16px' }}>
                  Work That Delivers High Returns
                </h1>
                <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                  We don't build generic brochure sites. We launch digital engines designed to achieve tangible growth metrics.
                </p>
              </div>

              {/* 5 Project Cards in Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '32px' }} className="portfolio-grid">
                <style>{`
                  @media (max-width: 768px) {
                    .portfolio-grid { grid-template-columns: 1fr !important; }
                  }
                `}</style>

                {projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="hover-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 1px 3px rgba(15,23,42,0.05)'
                    }}
                  >
                    <div>
                      {/* Top Category Badge */}
                      <span className="mono-font" style={{
                        backgroundColor: '#EFF6FF',
                        color: '#2563EB',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.06em',
                        display: 'inline-block',
                        marginBottom: '16px'
                      }}>
                        {proj.category}
                      </span>
                      
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                        {proj.name}
                      </h3>
                      
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '24px' }}>
                        {proj.desc}
                      </p>
                    </div>

                    {/* Metric Box */}
                    <div style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '24px'
                    }}>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#2563EB' }}>
                        {proj.metricNum}
                      </div>
                      <div className="mono-font" style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
                        {proj.metricLabel}
                      </div>
                    </div>

                    {/* Action link */}
                    <div style={{ marginTop: '20px' }}>
                      <span
                        onClick={() => navigateTo('contact')}
                        style={{
                          color: '#2563EB',
                          fontSize: '14px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'gap 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.gap = '8px'}
                        onMouseLeave={(e) => e.currentTarget.style.gap = '4px'}
                      >
                        Request Case Study Briefing →
                      </span>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </section>
        
    </>
  );
};

export default Portfolio;
