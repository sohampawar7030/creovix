import React, { useState } from 'react';

const INDUSTRY_DETAILS = {
  schools: {
    heroHeader: "Digital Transformation & Accelerated Enrollment for Schools",
    painPoints: [
      "Manual admission paperwork causing parent frustration and high dropouts.",
      "High marketing spend with zero attribution on which newspaper ads work.",
      "Poor website loading speed dropping Google Search rankings in Pune."
    ],
    targetedSolution: "We deploy static, headless React portals linked to an automated CRM and WhatsApp API. The second a parent fills a form, they receive a school brochure on WhatsApp and a fee payment link instantly, cutting admission cycle times from 14 days to 4 minutes.",
    engineeredWorkflow: [
      { step: "1. Parent Scan", desc: "Parent scans QR or clicks localized Pune Google Ad." },
      { step: "2. Autopilot WhatsApp", desc: "WhatsApp bot instantly delivers PDF brochure & video tour." },
      { step: "3. Fast Admission Portal", desc: "Parent uploads student documents & pays deposit in a 3-tap React portal." },
      { step: "4. CRM Auto-Sync", desc: "Data automatically flows to Google Sheets/CRM and alerts the principal." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Tailwind CSS", "WhatsApp Cloud API", "AWS S3/CloudFront", "PostgreSQL"],
    measurableOutcomes: { value: "340%", label: "Increase in Parent Enquiry Conversions" },
    featureHighlights: ["Parent Admission Portal", "Instant PDF Invoice Generator", "Google Local SEO Optimization", "Integrated Enquiry Tracker"],
    caseStudy: { name: "Hillgreen High School", linkText: "View Hillgreen High Case Study (340% Growth)", link: "portfolio" },
    testimonial: { quote: "CreovixAI completely transformed our school's online presence. Parent inquiries went up 3x in just one semester and admission workload dropped by 80%!", author: "Rajesh Kulkarni", role: "Principal, Hillgreen High School" },
    interactiveDemo: { label: "Trigger Sample Parent Alert", toast: "Simulated Alert: Parent Rahul Deshmukh registered for Admission & received WhatsApp Brochure!" },
    scalability: "Engineered on AWS Serverless architecture to handle 50,000+ simultaneous page visits during Pune board results without slowdown.",
    securityCompliance: "Fully GDPR and PDPB-compliant data storage. All student files encrypted via AES-256 and hosted on secure AWS Indian servers (ap-south-1).",
    automationLogic: "When a lead enters the landing page, a Node.js webhook fires. Within 1.8 seconds, our system runs a backend PDF builder, compiles a personalized fee schedule, and triggers the WhatsApp API template.",
    integration: ["Google Sheets", "Zoho CRM", "Tally ERP", "Razorpay Payment Gateway"],
    localAuthority: "Built and supported locally in Pune, Maharashtra. Optimized for Marathi and English parent support and geo-targeted local Google rankings in regions like Kothrud, Hadapsar, and Hinjawadi.",
    faqs: [
      { q: "Can we integrate this with our existing school fee management software?", a: "Yes, our systems communicate via secure REST APIs to sync enrollment databases with Tally, Razorpay, or local database systems." },
      { q: "How long does the setup take?", a: "A standard school admission portal is fully configured, tested, and deployed within 14 business days." }
    ],
    downloadableBrochure: "PDF School Admission Blueprint",
    customizationPromise: "100% Custom React codebase. We write clean, optimized code tailored to your school's unique admission workflow. No cheap WordPress templates.",
    professionalBadges: ["AWS Certified Cloud Architect", "React Enterprise Architect"]
  },
  nda: {
    heroHeader: "Automated Student Acquisition & Batch Management for NDA Academies",
    painPoints: [
      "High volume of phone queries during entrance seasons overloading reception staff.",
      "Lack of parent trust in academy results and selection lists online.",
      "Difficult manual coordination of hostel registration and batch allocations."
    ],
    targetedSolution: "We deploy speed-optimized batch admission systems linked to automated CRM webhooks. The second a student registers interest, they are automatically sent selection success lists and fee details via WhatsApp, followed by batch alerts.",
    engineeredWorkflow: [
      { step: "1. Lead Captured", desc: "Student submits interest form for upcoming NDA batch." },
      { step: "2. Results Showcase", desc: "Automated trust-pack of successful past cadets is sent via WhatsApp." },
      { step: "3. Slot Reservation", desc: "Student completes online seat registration and hostel opt-in." },
      { step: "4. CRM Onboarding", desc: "Batch seat count is updated dynamically on the website." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Tailwind CSS", "WhatsApp Cloud API", "Google Sheets API", "AWS"],
    measurableOutcomes: { value: "280%", label: "Admissions Growth YoY" },
    featureHighlights: ["Batch Availability Tracker", "NDA Success Gallery", "Automated WhatsApp Alerts", "Hostel Seat Register"],
    caseStudy: { name: "Udaan NDA Academy", linkText: "View Udaan NDA Academy Case Study (280% Admissions)", link: "portfolio" },
    testimonial: { quote: "Our batch seats now get filled within days of opening. The automated WhatsApp follow-ups build instant credibility with defense aspirants.", author: "Priya Deshmukh", role: "Director, Udaan NDA Academy" },
    interactiveDemo: { label: "Simulate NDA Enquiry Response", toast: "Autopilot Alert: Sent NDA batch brochures and cadet success PDF to parent phone." },
    scalability: "Serverless static-hosting scales to handle 10,000+ concurrent students checking batch announcements.",
    securityCompliance: "Secure transaction flows with direct payment gateway integrations. Personal records are kept private and compliant.",
    automationLogic: "User registers -> Webhook fires -> Automated PDF selection engine outputs success cadet list and forwards to parent's WhatsApp.",
    integration: ["Google Sheets", "Razorpay", "Zoho Desk", "Slack API"],
    localAuthority: "Supported by Pune-based developers with deep local knowledge of Maharashtra state board and defense recruitment cycles.",
    faqs: [
      { q: "Can the system limit admissions once a batch is full?", a: "Yes, the batch availability tracker turns off form submissions dynamically once the batch threshold is reached." },
      { q: "Can we send automated reminders to cadets for fees?", a: "Yes, automated cron jobs run daily to query pending fees and notify parents via WhatsApp API." }
    ],
    downloadableBrochure: "PDF NDA Enrollment Strategy Blueprint",
    customizationPromise: "Tailored Batch and Admission tracker custom coded to fit your academy's scheduling rules.",
    professionalBadges: ["React Native Expert", "Google Local SEO Expert"]
  },
  hospitals: {
    heroHeader: "Patient Trust Portals & Digital Appointment Workflows for Healthcare",
    painPoints: [
      "No-shows and scheduling gaps causing idle hours for specialist doctors.",
      "Patients struggle to find clear details on doctor timings and consulting fees.",
      "Lack of immediate response to online queries leads patients to choose competitors."
    ],
    targetedSolution: "We configure patient trust portals with direct calendar synching. Patients can book slots instantly, receive automatic appointment confirmations on WhatsApp, and view transparent profiles of hospital doctors.",
    engineeredWorkflow: [
      { step: "1. Patient Search", desc: "Patient lands on local clinic page through optimized local SEO search." },
      { step: "2. Direct Scheduling", desc: "Selects preferred doctor, date, and time slot from active calendar." },
      { step: "3. Instant Confirmation", desc: "Patient receives clinic location link and WhatsApp appointment card." },
      { step: "4. Doctor Sync", desc: "Clinic receptionist dashboard updates with zero manual typing." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Google Calendar API", "WhatsApp Business Platform", "PostgreSQL"],
    measurableOutcomes: { value: "4.8★", label: "Average Patient Satisfaction Rating" },
    featureHighlights: ["Live Appointment Calendar", "Doctor Timings Dashboard", "WhatsApp Scheduling Bot", "Patient Review Collector"],
    caseStudy: { name: "Careweigh Clinic", linkText: "View Careweigh Clinic Success Story", link: "portfolio" },
    testimonial: { quote: "Our patient appointments became streamlined. The automated reminder bot reduced clinic no-shows by 45%.", author: "Dr. Amit Sharma", role: "Careweigh Clinic" },
    interactiveDemo: { label: "Trigger Mock Appointment Confirmation", toast: "Simulation: Confirmed slot with Dr. Sharma. Location and clinic details pushed to WhatsApp." },
    scalability: "System is fully cloud-elastic to support rapid clinic expansions and doctor profile additions.",
    securityCompliance: "HIPAA-aligned data storage. Patient medical histories and booking details are secured under double-layer SSL and AES encryption.",
    automationLogic: "Slot selection -> Appointment webhook checks availability -> Google Calendar reservation made -> WhatsApp API confirmation sent.",
    integration: ["Google Calendar", "Razorpay", "Practo", "Whatsapp API"],
    localAuthority: "Optimized for localized medical search terms in Pune (e.g. 'best cardiologist near Kothrud') to rank higher on Google Maps.",
    faqs: [
      { q: "Can we support multiple doctors and clinic branches?", a: "Yes, our clinic portals support branch-wise routing so patients choose the correct location and available doctor." },
      { q: "Is patient medical data kept confidential?", a: "Yes, we prioritize security by avoiding browser database logs for clinical notes and encrypting patient records." }
    ],
    downloadableBrochure: "PDF Clinic Automation Handbook",
    customizationPromise: "Custom built patient flows without monthly third-party scheduling fees.",
    professionalBadges: ["AWS Cloud Practitioner", "Google Maps Local SEO Architect"]
  },
  preschools: {
    heroHeader: "Lead Generation and Parental Engagement Systems for Preschools",
    painPoints: [
      "Parents hesitate to enroll kids without a visually warm and detailed virtual tour.",
      "Enquiries from school directory sites are cold and rarely convert.",
      "Manual handling of admissions distracts teachers from educational tasks."
    ],
    targetedSolution: "We build warm, parental engagement sites that highlight curriculum, infrastructure, and virtual tours. We integrate quick lead capture forms that immediately invite parents to schedule physical visits.",
    engineeredWorkflow: [
      { step: "1. Parent Enquires", desc: "Parent submits a contact form requesting class details." },
      { step: "2. Immediate Brochure", desc: "Curriculum schedule and fee details delivered to parent via WhatsApp." },
      { step: "3. Visit Scheduling", desc: "Parent clicks link in chat to book a physical tour slot." },
      { step: "4. Lead Recorded", desc: "Preschool admin gets direct notification to prepare admission packet." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Tailwind CSS", "WhatsApp Business API", "Google Sheets API"],
    measurableOutcomes: { value: "2.1x", label: "Parent Enquiries Increase in 60 Days" },
    featureHighlights: ["Virtual School Tour Section", "Curriculum Highlights Desk", "Parent Visit Scheduler", "Enquiry Dashboard"],
    caseStudy: { name: "Happyland Preschool", linkText: "View Happyland Preschool Success (2.1x Lead Growth)", link: "portfolio" },
    testimonial: { quote: "Happyland preschool's enquiries grew significantly after launching this portal. Parents love the warm design and instant responses.", author: "Sneha Joshi", role: "Owner, Happyland Preschool" },
    interactiveDemo: { label: "Trigger Virtual Tour Invite", toast: "Simulation: Preschool video tour and parent welcome note pushed to WhatsApp." },
    scalability: "Scales to support multiple child care franchise locations and centralize lead collection.",
    securityCompliance: "Student image privacy is respected. Secure hosting ensures compliance with child safety and data protection principles.",
    automationLogic: "Form fill -> Webhook routes info -> Auto-checks age group -> Delivers age-appropriate syllabus PDF to parent's WhatsApp.",
    integration: ["Google Sheets", "ActiveCampaign", "Razorpay"],
    localAuthority: "Optimized for Pune parent search queries in localized neighborhoods like Aundh, Baner, and Viman Nagar.",
    faqs: [
      { q: "Can we accept monthly preschool fees online?", a: "Yes, we integrate local Pune payment gateways (Razorpay, UPI) to collect secure deposits and recurring fees." },
      { q: "Is the site mobile-friendly for parents?", a: "100%. Our React builds load instantly and render perfectly on all modern iOS and Android mobile screens." }
    ],
    downloadableBrochure: "PDF Preschool Marketing & Admissions Blueprint",
    customizationPromise: "Tailor-designed warm interface that reflects your school's unique care values.",
    professionalBadges: ["Mobile UI/UX Master", "React Front-End Architect"]
  },
  manufacturers: {
    heroHeader: "B2B Lead Generation and Product Catalogues for Manufacturers",
    painPoints: [
      "Distributors and B2B buyers find static PDFs hard to read on outdated websites.",
      "Lack of professional online presence stops doors to export partnerships.",
      "RFP (Request for Proposal) details are unorganized and difficult to track."
    ],
    targetedSolution: "We deploy highly structured, SEO-optimized B2B catalogs with detailed specs and dynamic quote calculators. We link form submissions to engineering managers for faster RFP quotes.",
    engineeredWorkflow: [
      { step: "1. Buyer Visits", desc: "B2B buyer searches for specific manufactured parts." },
      { step: "2. Catalog Browsing", desc: "Reads technical specifications and chooses quantities." },
      { step: "3. Quote Request", desc: "Submits RFP detailing technical customization requirements." },
      { step: "4. Team Actioned", desc: "Automated alert is pushed to Sales Team email and WhatsApp." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Tailwind CSS", "PostgreSQL", "AWS S3"],
    measurableOutcomes: { value: "190%", label: "Increase in Valid B2B RFPs" },
    featureHighlights: ["Dynamic Product Specifications", "RFQ Custom Generator", "B2B Client Showcase", "CAD File Download Manager"],
    caseStudy: { name: "Pune Engineering Works", linkText: "View Manufacturing Success Story", link: "portfolio" },
    testimonial: { quote: "Our export orders grew after replacing our old static site with CreovixAI's B2B React catalogue. Buyers love the technical details.", author: "Milind Patil", role: "MD, Patil Precision Ltd" },
    interactiveDemo: { label: "Trigger Sample Product RFQ Alert", toast: "Simulation: RFQ for 5000 parts registered. Technical CAD files and quote specs compiled." },
    scalability: "Engineered to support over 10,000 product SKUs without lagging search speeds.",
    securityCompliance: "Confidential industrial specs and RFQ files are protected via private cloud containers on AWS.",
    automationLogic: "RFQ submitted -> Backend checks category -> Directs quote email to the respective manufacturing division head automatically.",
    integration: ["Salesforce CRM", "SAP ERP", "Microsoft Dynamics", "Google Drive"],
    localAuthority: "Deeply familiar with Pune industrial hubs (Chakan, Bhosari, PCMC, Talawade) to optimize for B2B procurement searches.",
    faqs: [
      { q: "Can we restrict product specifications to registered dealers only?", a: "Yes, we can construct dealer login portals that hide prices and detailed CAD files until approved." },
      { q: "How are large files like CAD drawings handled?", a: "We leverage secure AWS S3 bucket links to serve large files with high speed and zero server load." }
    ],
    downloadableBrochure: "PDF Manufacturing Digitization Strategy",
    customizationPromise: "Tailored catalog architecture built exactly to your industry specification catalog standards.",
    professionalBadges: ["AWS Solutions Architect", "Enterprise DB Expert"]
  },
  consultants: {
    heroHeader: "Personal Branding and Leads Funnels for Professional Consultants",
    painPoints: [
      "Consultants struggle to convert website visits into high-paying client retainers.",
      "Manual scheduling and timezone coordination wastes valuable consulting hours.",
      "No organized system to showcase case studies and expert articles."
    ],
    targetedSolution: "We build personal brand websites that establish technical authority. We integrate automatic scheduling tools and custom landing page templates that convert traffic into paid consultations.",
    engineeredWorkflow: [
      { step: "1. Client Lands", desc: "Client reads your technical case study or article." },
      { step: "2. Slot Selection", desc: "Selects 15-min discovery call date directly on your calendar." },
      { step: "3. Autopilot Booking", desc: "Client inputs details and completes booking." },
      { step: "4. Meeting Set", desc: "Meeting is added to calendar with a Zoom/Google Meet link." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Calendly API", "Tailwind CSS", "Markdown"],
    measurableOutcomes: { value: "3.2x", label: "Consulting Discovery Bookings" },
    featureHighlights: ["Personal Brand Blog Engine", "Automatic Calendar Sync", "Client Success Case Studies", "Custom Retainer Funnels"],
    caseStudy: { name: "Dr. Shah Consultancy", linkText: "View Consulting Portfolio Success", link: "portfolio" },
    testimonial: { quote: "CreovixAI built a website that positions me as the top consulting expert. I now book paid clients directly through my site.", author: "Vijay Deshpande", role: "B2B Growth Consultant" },
    interactiveDemo: { label: "Simulate Consultant Booking", toast: "Simulation: Discovery call booked. Meeting link and pre-call agenda sent." },
    scalability: "System handles high blog readerships and email signups without speed loss.",
    securityCompliance: "GDPR and private policy compliant. Safe booking transactions secured by Stripe/Razorpay integrations.",
    automationLogic: "Booking made -> Checks CRM records -> Tags lead category -> Sends automated intake questionnaire to client.",
    integration: ["Calendly", "Google Meet / Zoom", "Mailchimp", "ConvertKit"],
    localAuthority: "Optimized to build local authority in Maharashtra for professional tax, law, and financial consultancies.",
    faqs: [
      { q: "Can we charge clients for booking consultations?", a: "Yes, we integrate payment gateways so clients must complete payment before a meeting slot is reserved." },
      { q: "Is there a way to write articles myself?", a: "Yes, we set up markdown-based systems where you can publish articles by dropping files, keeping it fast and lightweight." }
    ],
    downloadableBrochure: "PDF Consulting Funnel Setup Guide",
    customizationPromise: "100% tailor-built portfolio and landing pages. Zero generic templates.",
    professionalBadges: ["React Performance Expert", "SEO Copywriting Master"]
  },
  travel: {
    heroHeader: "Booking-Ready Destination Catalogs for Travel Agencies",
    painPoints: [
      "Customers ask for customized itineraries but drop out during slow manual quoting.",
      "Updating destination packages and pricing on outdated sites is frustrating.",
      "Customers drop off because there is no quick WhatsApp booking option."
    ],
    targetedSolution: "We create beautiful, visual travel directories with automated WhatsApp itinerary delivery. Customers click a package, choose dates, and immediately receive detailed PDF itineraries via WhatsApp.",
    engineeredWorkflow: [
      { step: "1. Package Chosen", desc: "Traveler browses destination packages and clicks 'Get Details'." },
      { step: "2. Dynamic Data", desc: "System compiles custom itinerary based on selected packages." },
      { step: "3. Delivery on Chat", desc: "PDF brochure and detailed pricing sent to WhatsApp in 3 seconds." },
      { step: "4. Inquiry Logged", desc: "Travel agent dashboard logs traveller name, phone, and destination." }
    ],
    techStack: ["React", "Vite", "NodeJS", "Tailwind CSS", "WhatsApp Business Platform", "PostgreSQL"],
    measurableOutcomes: { value: "190%", label: "Increase in Travel Booking Enquiries" },
    featureHighlights: ["Destination Package Catalog", "WhatsApp Itinerary Delivery", "Dynamic Pricing Calculator", "Traveler Review Engine"],
    caseStudy: { name: "Soulful Escapes", linkText: "View Soulful Escapes Success Story (190% Enquiries)", link: "portfolio" },
    testimonial: { quote: "Travel enquiries doubled. The automated itinerary delivery on WhatsApp is a game-changer for conversion rates.", author: "Meera Nair", role: "Founder, Soulful Escapes" },
    interactiveDemo: { label: "Simulate Travel Itinerary Push", toast: "Simulation: Sent Kashmir Tour Itinerary and pricing details via WhatsApp." },
    scalability: "Handles massive holiday season spikes with high speed static image compression.",
    securityCompliance: "Customer payment and booking data are processed securely via SSL links and verified gateways.",
    automationLogic: "Traveller selects package -> Automated PDF itinerary builder pulls package data -> Shoots custom itinerary to WhatsApp API.",
    integration: ["Razorpay", "WhatsApp Business API", "Google Sheets", "Instagram API"],
    localAuthority: "Optimized for tourism searches in Pune and Maharashtra region, bringing in high-value local tour leads.",
    faqs: [
      { q: "Can we update packages and pricing ourselves?", a: "Yes, we construct lightweight admin dashboards where you can add new packages and change prices instantly." },
      { q: "Does the system support group booking queries?", a: "Yes, our custom forms capture group sizing and dates to automatically categorize high-value inquiries." }
    ],
    downloadableBrochure: "PDF Travel Agency Automation Guide",
    customizationPromise: "Tailored travel catalog built with lightning fast static React structures.",
    professionalBadges: ["AWS Cloud Architect", "React SPA Expert"]
  }
};

const Industries = (props) => {
  const {
    activeIndustry, setActiveIndustry,
    navigateTo,
    industries
  } = props;

  const [toastMsg, setToastMsg] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const triggerDemoToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 4500);
  };

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'schools':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>;
      case 'nda':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
      case 'hospitals':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
      case 'preschools':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
      case 'manufacturers':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M5 17V8l4-4 4 4v9M13 17V9l4-3 4 3v8"/></svg>;
      case 'consultants':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
      case 'travel':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
      default:
        return null;
    }
  };

  const details = INDUSTRY_DETAILS[activeIndustry] || INDUSTRY_DETAILS['schools'];

  return (
    <>
      <style>{`
        .section-pad {
          padding: 48px 0;
          background-color: #FFFFFF;
          font-family: 'DM Sans', sans-serif;
        }
        .industry-tab-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .industry-tab {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #475569;
          border-radius: 99px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .industry-tab:hover {
          background-color: #F1F5F9;
          transform: translateY(-1px);
        }
        .industry-tab.active {
          background-color: #EFF6FF;
          border-color: #2563EB;
          color: #2563EB;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.06);
        }
        .industry-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }
        @media (max-width: 992px) {
          .industry-grid {
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
          background-color: #EFF6FF;
          border: 2px solid #BFDBFE;
          color: #2563EB;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
        }
        .stepper-content {
          padding-top: 6px;
          text-align: left;
        }
        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .tech-badge {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: #475569;
          font-weight: 600;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
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
        }
        .outcome-card {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #FFFFFF;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 10px 25px -5px rgba(15,23,42,0.1);
        }
        .outcome-value {
          font-size: 54px;
          font-weight: 900;
          background: linear-gradient(135deg, #38BDF8 0%, #34D399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #475569;
          line-height: 1.5;
        }
        .bullet-dot {
          color: #059669;
          font-weight: bold;
          font-size: 15px;
          line-height: 1;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      {/* Main Layout Container */}
      <section className="section-pad">
        <div className="container">
          
          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="mono-font" style={{ fontSize: '11px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
              Targeted Solutions By Sector
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Tailored Architecture for Maharashtra’s Top Industries
            </h1>
            <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
              Explore how we address operational bottlenecks, automate customer engagement, and build high-performance search authority for your specific industry.
            </p>
          </div>

          {/* Industry Selection Tabs */}
          <div className="industry-tab-container">
            {industries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => {
                  setActiveIndustry(ind.id);
                  setActiveFaq(null);
                }}
                className={`industry-tab ${activeIndustry === ind.id ? 'active' : ''}`}
              >
                <span style={{ display: 'inline-flex' }}>{getIndustryIcon(ind.id)}</span>
                <span>{ind.label}</span>
              </div>
            ))}
          </div>

          {/* Dynamic 2-Column Grid */}
          <div className="industry-grid">
            
            {/* Left Column: Solution details and Workflows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* 1. Hero Header & Solution Description */}
              <div className="card-panel">
                <span className="badge-sub" style={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.05em', fontSize: '11px', textTransform: 'uppercase' }}>Industry Specific Header</span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '16px', lineHeight: 1.3 }}>
                  {details.heroHeader}
                </h2>
                
                {/* Pain Points Analysis */}
                <div style={{ marginTop: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Operational Pain Points</h4>
                  <div className="pain-list">
                    {details.painPoints.map((pain, idx) => (
                      <div key={idx} className="pain-item">
                        <span style={{ fontSize: '14px', marginTop: '2px' }}>⚠️</span>
                        <span>{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Targeted System Solution */}
                <div className="solution-box">
                  <div style={{ fontSize: '16px', marginTop: '2px' }}>🛠️</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#047857' }}>Targeted System Solution:</strong>
                    {details.targetedSolution}
                  </div>
                </div>
              </div>

              {/* 2. Engineered Workflow stepper */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Engineered Workflow</h3>
                <p style={{ fontSize: '13px', color: '#64748B' }}>A step-by-step trace of how our system routes customer leads and coordinates database actions.</p>
                
                <div className="stepper-container">
                  {details.engineeredWorkflow.map((node, i) => (
                    <div key={i} className="stepper-node">
                      <div className="stepper-badge">{i + 1}</div>
                      <div className="stepper-content">
                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>{node.step}</h4>
                        <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>{node.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Tech Stack and Integration Support */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="tech-int-grid">
                <style>{`
                  @media (max-width: 576px) {
                    .tech-int-grid { grid-template-columns: 1fr !important; }
                  }
                `}</style>
                
                {/* Tech Stack */}
                <div className="card-panel" style={{ padding: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Technical Stack</h4>
                  <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>Sought-after, high-speed libraries used to bundle your custom codebase.</p>
                  <div className="tech-badge-container">
                    {details.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Integration Compatibility */}
                <div className="card-panel" style={{ padding: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Integration Compatibility</h4>
                  <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>Fully compatible webhooks connecting to your existing corporate applications.</p>
                  <div className="tech-badge-container">
                    {details.integration.map((intg, idx) => (
                      <span key={idx} className="tech-badge" style={{ borderColor: '#D1FAE5', color: '#059669', backgroundColor: '#ECFDF5' }}>{intg}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Interactive Simulation Playground & FAQ */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Interactive System Demo</h3>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>Click the simulated action below to test the instant response capabilities of this system.</p>
                
                <button
                  onClick={() => triggerDemoToast(details.interactiveDemo.toast)}
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  {details.interactiveDemo.label}
                </button>
              </div>

              {/* FAQs Accordion */}
              <div className="card-panel">
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Industry FAQ</h3>
                <p style={{ fontSize: '13px', color: '#64748B' }}>Common queries regarding database synchronization, custom rules, and deployment lifecycles.</p>
                
                <div className="faq-accordion">
                  {details.faqs.map((faq, idx) => (
                    <div key={idx} className="faq-tab">
                      <div
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="faq-header"
                      >
                        <span>{faq.q}</span>
                        <span>{activeFaq === idx ? '−' : '+'}</span>
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

            {/* Right Column: Outcomes, Proofs, Case Studies & Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* 1. Measurable Outcomes Card */}
              <div className="outcome-card">
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8' }}>Expected Outcome</span>
                <div className="outcome-value">{details.measurableOutcomes.value}</div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#E2E8F0', lineHeight: 1.4 }}>{details.measurableOutcomes.label}</p>
              </div>

              {/* 2. Case Study Link & Social Proof */}
              <div className="card-panel" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <span className="badge-sub" style={{ color: '#059669', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase' }}>Success Case Study</span>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginTop: '6px', marginBottom: '8px' }}>{details.caseStudy.name}</h4>
                
                {/* Social Proof Testimonial */}
                <div style={{ margin: '16px 0', borderLeft: '3px solid #2563EB', paddingLeft: '12px', fontStyle: 'italic', fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                  "{details.testimonial.quote}"
                  <span style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#0F172A', marginTop: '8px', fontStyle: 'normal' }}>
                    — {details.testimonial.author}, {details.testimonial.role}
                  </span>
                </div>

                <button
                  onClick={() => navigateTo(details.caseStudy.link)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #2563EB',
                    color: '#2563EB',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  {details.caseStudy.linkText}
                </button>
              </div>

              {/* 3. Feature Highlights Bullets */}
              <div className="card-panel">
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Feature Highlights</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {details.featureHighlights.map((feat, idx) => (
                    <div key={idx} className="bullet-item">
                      <span className="bullet-dot">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Asset Download Box */}
              <div className="card-panel" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#1E40AF', marginBottom: '6px' }}>Download Resource Blueprint</h4>
                <p style={{ fontSize: '12.5px', color: '#1E40AF', opacity: 0.8, marginBottom: '16px', lineHeight: 1.4 }}>
                  Read our full technical PDF breakdown for setting up automated pipelines in this industry.
                </p>
                <button
                  onClick={() => triggerDemoToast(`Download started: ${details.downloadableBrochure}.pdf`)}
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Get {details.downloadableBrochure}
                </button>
              </div>

              {/* 5. Scalability, Security, Local Authority & Certification Badges */}
              <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
                
                {/* Scalability */}
                <div style={{ fontSize: '12.5px', lineHeight: 1.4 }}>
                  <strong style={{ display: 'block', color: '#0F172A', marginBottom: '2px' }}>⚡ Scalability Assurance</strong>
                  <span style={{ color: '#64748B' }}>{details.scalability}</span>
                </div>

                {/* Security */}
                <div style={{ fontSize: '12.5px', lineHeight: 1.4, borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <strong style={{ display: 'block', color: '#0F172A', marginBottom: '2px' }}>🔒 Security & Compliance</strong>
                  <span style={{ color: '#64748B' }}>{details.securityCompliance}</span>
                </div>

                {/* Local Authority */}
                <div style={{ fontSize: '12.5px', lineHeight: 1.4, borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <strong style={{ display: 'block', color: '#0F172A', marginBottom: '2px' }}>📍 Pune Localized Support</strong>
                  <span style={{ color: '#64748B' }}>{details.localAuthority}</span>
                </div>

                {/* Professional Badges */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Technical Accreditation</span>
                  <div className="tech-badge-container">
                    {details.professionalBadges.map((badge, idx) => (
                      <span key={idx} className="tech-badge" style={{ backgroundColor: '#F8FAFC', borderStyle: 'dashed', fontSize: '11px' }}>{badge}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Action-Oriented CTA Card */}
              <div style={{
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '16px',
                padding: '28px',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>Ready to Configure?</h4>
                <p style={{ fontSize: '13px', color: '#1E40AF', opacity: 0.8, marginBottom: '20px' }}>
                  Schedule a private 15-minute dashboard planning call with CreovixAI.
                </p>
                <button
                  onClick={() => navigateTo('contact')}
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.15)'
                  }}
                >
                  Book Free Consultation →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Floating Simulation Toast Notification */}
      {toastMsg && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '12px',
          borderLeft: '4px solid #10B981',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>{toastMsg}</span>
        </div>
      )}
    </>
  );
};

export default Industries;
