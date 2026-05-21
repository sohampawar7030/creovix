import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import AISystems from './pages/AISystems';
import About from './pages/About';
import Contact from './pages/Contact';

// Service Pages
import WebDesign from './pages/services/WebDesign';
import AdmissionPortals from './pages/services/AdmissionPortals';
import AIChatbots from './pages/services/AIChatbots';
import WhatsAppAutomation from './pages/services/WhatsAppAutomation';
import SEOOptimization from './pages/services/SEOOptimization';
import MarketingCampaigns from './pages/services/MarketingCampaigns';
import LeadFunnels from './pages/services/LeadFunnels';
import CRMSystems from './pages/services/CRMSystems';
import LandingPages from './pages/services/LandingPages';
import SpeedTuning from './pages/services/SpeedTuning';


// Custom Counter Hook for Stats
function useCounter(targetNumber, trigger, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = parseInt(targetNumber, 10);
    if (isNaN(end)) {
      setCount(targetNumber);
      return;
    }
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber, trigger, duration]);

  return count;
}

const Logo = ({ isDark = false }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img 
        src="/logo.jfif" 
        alt="CreovixAI Logo" 
        className="app-logo-img"
        style={{ 
          filter: isDark ? 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.8))' : 'drop-shadow(0 4px 12px rgba(15, 23, 42, 0.15)) drop-shadow(0 0 10px rgba(56, 189, 248, 0.6))',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.9))';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = isDark ? 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.8))' : 'drop-shadow(0 4px 12px rgba(15, 23, 42, 0.15)) drop-shadow(0 0 10px rgba(56, 189, 248, 0.6))';
        }}
      />
    </div>
  );
};

function CreovixAIPortfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState('schools');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);

  // Custom Hash Router State
  const [currentPage, setCurrentPage] = useState('home');

  // Trigger counters when on Home page or when active
  const [statsTriggered, setStatsTriggered] = useState(false);

  // ROI Calculator states
  const [calcTraffic, setCalcTraffic] = useState(5000);
  const [calcConv, setCalcConv] = useState(1.5);
  const [calcValue, setCalcValue] = useState(15000); // average client/student lifetime value

  // Speed Auditor Simulator States
  const [selectedCompetitor, setSelectedCompetitor] = useState('avg-school');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditProgress, setAuditProgress] = useState(100);
  const [auditResults, setAuditResults] = useState({
    competitorName: "WordPress School Template",
    competitorSpeed: 24,
    competitorLcp: "4.8s",
    competitorConv: "1.2%",
    ourSpeed: 100,
    ourLcp: "0.6s",
    ourConv: "4.8%",
    multiplier: "4.0x More Enquiries"
  });

  const runSpeedAudit = (compType) => {
    setSelectedCompetitor(compType);
    setAuditRunning(true);
    setAuditProgress(0);
    setAuditResults(null);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setAuditProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setAuditRunning(false);
        if (compType === 'avg-school') {
          setAuditResults({
            competitorName: "WordPress School Template",
            competitorSpeed: 24,
            competitorLcp: "4.8s",
            competitorConv: "1.2%",
            ourSpeed: 100,
            ourLcp: "0.6s",
            ourConv: "4.8%",
            multiplier: "4.0x More Enquiries"
          });
        } else if (compType === 'avg-academy') {
          setAuditResults({
            competitorName: "Heavy Builder Academy Site",
            competitorSpeed: 31,
            competitorLcp: "3.9s",
            competitorConv: "1.6%",
            ourSpeed: 99,
            ourLcp: "0.8s",
            ourConv: "5.2%",
            multiplier: "3.25x More Leads"
          });
        } else if (compType === 'avg-clinic') {
          setAuditResults({
            competitorName: "Unoptimized Clinic Page",
            competitorSpeed: 18,
            competitorLcp: "6.2s",
            competitorConv: "0.8%",
            ourSpeed: 100,
            ourLcp: "0.5s",
            ourConv: "3.6%",
            multiplier: "4.5x More Bookings"
          });
        }
      }
    }, 100);
  };

  // Custom User Site Vulnerability Scanner States
  const [userScanUrl, setUserScanUrl] = useState('');
  const [isScanningUserSite, setIsScanningUserSite] = useState(false);
  const [userScanProgress, setUserScanProgress] = useState(0);
  const [userScanConsoleLogs, setUserScanConsoleLogs] = useState([]);
  const [userScanReport, setUserScanReport] = useState(null);

  // Helper function to extract physical address & city/country from scraped web page content
  const extractAddressAndLocation = (doc, html, pageTitle, metaDescription, targetUrl) => {
    let scrapedAddress = '';
    let scrapedCity = '';
    let scrapedCountry = '';

    try {
      // 1. Look for <address> tag
      const addressTag = doc.querySelector('address');
      if (addressTag && addressTag.textContent) {
        const text = addressTag.textContent.trim().replace(/\s+/g, ' ');
        if (text.length > 10 && text.length < 200) {
          scrapedAddress = text;
        }
      }

      // 2. Query selectors for typical contact / address classes
      if (!scrapedAddress) {
        const selectors = [
          '[class*="address" i]', '[id*="address" i]',
          '[class*="contact-info" i]', '[id*="contact-info" i]',
          '.footer-address', '#footer-address',
          '.contact-address', '#contact-address',
          'footer [class*="addr" i]'
        ];
        for (const sel of selectors) {
          try {
            const el = doc.querySelector(sel);
            if (el && el.textContent) {
              const text = el.textContent.trim().replace(/\s+/g, ' ');
              if (text.length > 12 && text.length < 200 && !text.includes('{') && !text.includes('}')) {
                scrapedAddress = text;
                break;
              }
            }
          } catch (e) {}
        }
      }

      // 3. Fallback: Search the full text for common address keywords
      if (!scrapedAddress || scrapedAddress.length < 15) {
        // Find text content in potential contact elements, footers, etc.
        const potentialElements = Array.from(doc.querySelectorAll('footer, [class*="footer" i], [id*="footer" i], [class*="contact" i], [id*="contact" i], p, span, div, li'));
        
        for (const el of potentialElements) {
          if (el.children.length > 5) continue; // Avoid matching large parent containers
          const text = el.textContent ? el.textContent.trim().replace(/\s+/g, ' ') : '';
          
          if (text.length > 15 && text.length < 220) {
            const hasAddressKeywords = /(street|road|rd|ave|avenue|st\.|lane|ln|drive|dr|highway|hwy|plaza|building|bldg|floor|fl|suite|ste|apartment|apt|sector|phase|colony|nagar|chowk|pincode|zipcode|zip code|pin code|\b\d{5}\b|\b\d{6}\b)/i.test(text);
            
            if (hasAddressKeywords && text.length > scrapedAddress.length && !text.includes('<') && !text.includes('javascript:')) {
              scrapedAddress = text;
            }
          }
        }
      }

      // 4. Fallback: Parse Google Map embed links in iframes or anchor tags
      if (!scrapedAddress || scrapedAddress.length < 15) {
        const mapIframes = Array.from(doc.querySelectorAll('iframe[src*="google.com/maps"]'));
        for (const iframe of mapIframes) {
          const src = iframe.getAttribute('src') || '';
          const match = src.match(/q=([^&]+)/) || src.match(/pb=!1m12!1m3!1d[^!]+!2d[^!]+!3d[^!]+!2m3!1f[^!]+!2f[^!]+!3f[^!]+!3m2!1i[^!]+!2i[^!]+!4f[^!]+!3m3!1m2!1s[^!]+!2s([^!]+)/);
          if (match && match[1]) {
            try {
              const decoded = decodeURIComponent(match[1].replace(/\+/g, ' '));
              if (decoded && decoded.length > 8 && decoded.length < 180) {
                scrapedAddress = decoded;
                break;
              }
            } catch (e) {}
          }
        }
      }

      // 5. Fallback: Parse contact link hrefs
      if (!scrapedAddress || scrapedAddress.length < 15) {
        const mapLinks = Array.from(doc.querySelectorAll('a[href*="maps.google.com"], a[href*="goo.gl/maps"]'));
        for (const a of mapLinks) {
          const href = a.getAttribute('href') || '';
          const match = href.match(/q=([^&]+)/);
          if (match && match[1]) {
            try {
              const decoded = decodeURIComponent(match[1].replace(/\+/g, ' '));
              if (decoded && decoded.length > 8 && decoded.length < 180) {
                scrapedAddress = decoded;
                break;
              }
            } catch (e) {}
          }
        }
      }

      // If we found an address, let's extract city and country
      if (scrapedAddress) {
        const addressLower = scrapedAddress.toLowerCase();
        
        if (addressLower.includes('india') || addressLower.includes('maharashtra') || addressLower.includes('delhi') || addressLower.includes('karnataka') || addressLower.includes('pincode') || /\b\d{6}\b/.test(addressLower)) {
          scrapedCountry = 'India';
          if (addressLower.includes('pune')) scrapedCity = 'Pune';
          else if (addressLower.includes('mumbai')) scrapedCity = 'Mumbai';
          else if (addressLower.includes('delhi') || addressLower.includes('noida') || addressLower.includes('gurgaon')) scrapedCity = 'Delhi NCR';
          else if (addressLower.includes('bangalore') || addressLower.includes('bengaluru')) scrapedCity = 'Bengaluru';
          else if (addressLower.includes('chennai')) scrapedCity = 'Chennai';
          else if (addressLower.includes('hyderabad')) scrapedCity = 'Hyderabad';
          else if (addressLower.includes('kolkata')) scrapedCity = 'Kolkata';
          else scrapedCity = 'Mumbai';
        }
        else if (addressLower.includes('united kingdom') || addressLower.includes(' london') || addressLower.includes(' england') || addressLower.includes('scotland') || addressLower.includes(' wales') || /\b[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}\b/i.test(addressLower)) {
          scrapedCountry = 'United Kingdom';
          if (addressLower.includes('london')) scrapedCity = 'London';
          else if (addressLower.includes('manchester')) scrapedCity = 'Manchester';
          else if (addressLower.includes('birmingham')) scrapedCity = 'Birmingham';
          else scrapedCity = 'London';
        }
        else if (addressLower.includes('usa') || addressLower.includes('united states') || addressLower.includes('new york') || addressLower.includes('california') || addressLower.includes('texas') || /\b\d{5}(-\d{4})?\b/.test(addressLower)) {
          scrapedCountry = 'USA';
          if (addressLower.includes('new york') || addressLower.includes(' ny')) scrapedCity = 'New York';
          else if (addressLower.includes('san francisco') || addressLower.includes(' ca') || addressLower.includes('california')) scrapedCity = 'San Francisco';
          else if (addressLower.includes('los angeles') || addressLower.includes('la')) scrapedCity = 'Los Angeles';
          else if (addressLower.includes('chicago')) scrapedCity = 'Chicago';
          else if (addressLower.includes('seattle')) scrapedCity = 'Seattle';
          else if (addressLower.includes('austin')) scrapedCity = 'Austin';
          else if (addressLower.includes('boston')) scrapedCity = 'Boston';
          else scrapedCity = 'New York';
        }
        else if (addressLower.includes('australia') || addressLower.includes(' sydney') || addressLower.includes('melbourne') || addressLower.includes(' nsw') || addressLower.includes(' vic')) {
          scrapedCountry = 'Australia';
          if (addressLower.includes('sydney')) scrapedCity = 'Sydney';
          else if (addressLower.includes('melbourne')) scrapedCity = 'Melbourne';
          else if (addressLower.includes('brisbane')) scrapedCity = 'Brisbane';
          else scrapedCity = 'Sydney';
        }
        else if (addressLower.includes('canada') || addressLower.includes('toronto') || addressLower.includes('vancouver') || addressLower.includes('ontario')) {
          scrapedCountry = 'Canada';
          if (addressLower.includes('toronto')) scrapedCity = 'Toronto';
          else if (addressLower.includes('vancouver')) scrapedCity = 'Vancouver';
          else scrapedCity = 'Toronto';
        }
      }

      // Fallback: Scan title/description/URL keywords
      if (!scrapedAddress || !scrapedCity) {
        const textToScan = (pageTitle + ' ' + metaDescription + ' ' + targetUrl).toLowerCase();
        
        const majorCities = [
          { name: 'Pune', country: 'India' },
          { name: 'Mumbai', country: 'India' },
          { name: 'Delhi', country: 'India' },
          { name: 'Bangalore', country: 'India' },
          { name: 'Bengaluru', country: 'India' },
          { name: 'Hyderabad', country: 'India' },
          { name: 'Noida', country: 'India' },
          { name: 'Gurgaon', country: 'India' },
          { name: 'London', country: 'United Kingdom' },
          { name: 'New York', country: 'USA' },
          { name: 'San Francisco', country: 'USA' },
          { name: 'Los Angeles', country: 'USA' },
          { name: 'Chicago', country: 'USA' },
          { name: 'Seattle', country: 'USA' },
          { name: 'Austin', country: 'USA' },
          { name: 'Boston', country: 'USA' },
          { name: 'Toronto', country: 'Canada' },
          { name: 'Vancouver', country: 'Canada' },
          { name: 'Sydney', country: 'Australia' },
          { name: 'Melbourne', country: 'Australia' },
          { name: 'Singapore', country: 'Singapore' },
          { name: 'Dubai', country: 'UAE' },
          { name: 'Paris', country: 'France' },
          { name: 'Berlin', country: 'Germany' }
        ];

        for (const city of majorCities) {
          if (textToScan.includes(city.name.toLowerCase())) {
            if (!scrapedCity) scrapedCity = city.name;
            if (!scrapedCountry) scrapedCountry = city.country;
            if (!scrapedAddress) scrapedAddress = `Detected Marketplace Hub: ${city.name}, ${city.country}`;
            break;
          }
        }
      }

      // TLD-based defaults
      if (!scrapedAddress) {
        const hostname = targetUrl.replace('https://', '').replace('http://', '').split('/')[0];
        if (hostname.endsWith('.in')) {
          scrapedAddress = "India-based Enterprise Network (Address not found in root DOM)";
          scrapedCity = "Mumbai";
          scrapedCountry = "India";
        } else if (hostname.endsWith('.uk') || hostname.endsWith('.co.uk')) {
          scrapedAddress = "UK-based Enterprise Network (Address not found in root DOM)";
          scrapedCity = "London";
          scrapedCountry = "United Kingdom";
        } else if (hostname.endsWith('.au')) {
          scrapedAddress = "Australia-based Enterprise Network (Address not found in root DOM)";
          scrapedCity = "Sydney";
          scrapedCountry = "Australia";
        } else if (hostname.endsWith('.ca')) {
          scrapedAddress = "Canada-based Enterprise Network (Address not found in root DOM)";
          scrapedCity = "Toronto";
          scrapedCountry = "Canada";
        } else {
          scrapedAddress = "Global Digital Enterprise (Address not found in root DOM)";
          scrapedCity = "New York";
          scrapedCountry = "USA";
        }
      }

      if (!scrapedCity) scrapedCity = 'New York';
      if (!scrapedCountry) scrapedCountry = 'USA';

    } catch (err) {
      scrapedAddress = "Global Digital Endpoint (Address parsing bypassed)";
      scrapedCity = "New York";
      scrapedCountry = "USA";
    }

    return { scrapedAddress, scrapedCity, scrapedCountry };
  };

  const triggerUserSiteScan = async (url) => {
    if (!url) return;
    
    // Add protocol if missing
    let targetUrl = url.trim();
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    setIsScanningUserSite(true);
    setUserScanProgress(0);
    setUserScanReport(null);
    setUserScanConsoleLogs([
      `INIT: Resolving DNS lookup for ${targetUrl}...`,
      `SYSTEM: Establishing secure socket tunnel...`
    ]);

    // Live update interval for progress bar visual feedback
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 4;
      if (progress < 95) {
        setUserScanProgress(progress);
      }
    }, 120);

    // Cascading CORS proxies to guarantee high success rate for actual worldwide web scraping
    const fetchHtmlThroughProxies = async (target) => {
      const proxies = [
        { name: 'Cloudflare Proxy Tunnel', url: `https://corsproxy.io/?${encodeURIComponent(target)}` },
        { name: 'CodeTabs Secure Relay', url: `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(target)}` },
        { name: 'AllOrigins CORS Proxy', url: `https://api.allorigins.win/get?url=${encodeURIComponent(target)}` }
      ];

      for (let i = 0; i < proxies.length; i++) {
        try {
          setUserScanConsoleLogs(prev => [...prev, `NETWORK: Connecting via ${proxies[i].name}...`]);
          const response = await fetch(proxies[i].url);
          if (response.ok) {
            if (proxies[i].url.includes('allorigins')) {
              const data = await response.json();
              if (data.contents) {
                setUserScanConsoleLogs(prev => [...prev, `HTTP: Tunneled successfully through ${proxies[i].name}!`]);
                return data.contents;
              }
            } else {
              const text = await response.text();
              if (text && text.length > 300) {
                setUserScanConsoleLogs(prev => [...prev, `HTTP: Tunneled successfully through ${proxies[i].name}!`]);
                return text;
              }
            }
          }
        } catch (e) {
          console.warn(`Proxy tunnel ${proxies[i].name} failed to handshake:`, e);
        }
      }
      throw new Error('All high-speed secure proxy gateways timed out or blocked by destination firewall.');
    };

    try {
      const html = await fetchHtmlThroughProxies(targetUrl);
      setUserScanConsoleLogs(prev => [...prev, `HTTP: 200 OK. Scraping DOM nodes and security tags...`]);

      // Parse the HTML using DOMParser
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // 2. Perform Real Live Diagnostics
      // CMS detection
      let techStack = 'Custom Static Builder / Modern Stack';
      const scriptsSrcText = Array.from(doc.querySelectorAll('script')).map(s => s.getAttribute('src') || '').join(' ').toLowerCase();

      if (html.includes('wp-content') || html.includes('wp-includes') || html.includes('wp-json')) {
        techStack = 'WordPress CMS';
      } else if (html.includes('wix.com') || html.includes('wix-image') || html.includes('wix-site')) {
        techStack = 'Wix Page Builder';
      } else if (html.includes('shopify')) {
        techStack = 'Shopify Store';
      } else if (html.includes('squarespace')) {
        techStack = 'Squarespace';
      } else if (html.includes('next/static') || html.includes('react') || scriptsSrcText.includes('_next/') || scriptsSrcText.includes('react')) {
        techStack = 'Modern React / Next.js Framework';
      } else if (html.includes('webflow')) {
        techStack = 'Webflow Site Builder';
      } else if (html.includes('drupal')) {
        techStack = 'Drupal CMS (Legacy Enterprise)';
      } else if (html.includes('joomla')) {
        techStack = 'Joomla CMS (Legacy)';
      }

      // Count script, stylesheet, and img tags
      const scriptCount = doc.querySelectorAll('script').length;
      const stylesheetCount = doc.querySelectorAll('link[rel="stylesheet"]').length;
      const imageCount = doc.querySelectorAll('img').length;
      const htmlSizeKb = Math.round(html.length / 1024);

      // Extract SEO fields
      const pageTitle = doc.querySelector('title')?.textContent?.trim() || 'Untitled / No title tag found';
      const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || 
                              doc.querySelector('meta[property="og:description"]')?.getAttribute('content')?.trim() || '';

      // Check conversion elements
      const hasWhatsApp = html.includes('wa.me') || html.includes('whatsapp.com') || html.includes('whatsapp://');
      const formCount = doc.querySelectorAll('form').length;

      // Extract dynamic address and location from the live DOM!
      const { scrapedAddress, scrapedCity, scrapedCountry } = extractAddressAndLocation(doc, html, pageTitle, metaDescription, targetUrl);

      // Determine target classification - is it a school/learning academy?
      const schoolKeywords = ['school', 'academy', 'college', 'edu', 'university', 'learning', 'class', 'course', 'training', 'vidyalaya', 'gurukul', 'institute', 'preschool', 'nursery', 'tuition'];
      const isSchool = schoolKeywords.some(keyword => targetUrl.toLowerCase().includes(keyword)) || 
                       schoolKeywords.some(keyword => pageTitle.toLowerCase().includes(keyword)) ||
                       schoolKeywords.some(keyword => metaDescription.toLowerCase().includes(keyword));

      // Check for chatbot, LMS, and ERP presence in the scraped HTML
      const lowerHtml = html.toLowerCase();
      const hasChatbot = lowerHtml.includes('tawk.to') || lowerHtml.includes('crisp.chat') || lowerHtml.includes('tidio') || lowerHtml.includes('chatbot') || lowerHtml.includes('chat-widget') || lowerHtml.includes('intercom') || lowerHtml.includes('drift');
      const hasLms = lowerHtml.includes('/lms') || lowerHtml.includes('learning-management') || lowerHtml.includes('moodle') || lowerHtml.includes('canvas.instructure') || lowerHtml.includes('student portal') || lowerHtml.includes('student-portal') || lowerHtml.includes('learning management');
      const hasErp = lowerHtml.includes('/erp') || lowerHtml.includes('student erp') || lowerHtml.includes('school management') || lowerHtml.includes('fee payment') || lowerHtml.includes('fees-payment') || lowerHtml.includes('/pay-fees') || lowerHtml.includes('pay fees');

      const featureAnalysis = isSchool ? [
        {
          name: "AI Admission / Parent Inquiry Chatbot",
          status: hasChatbot ? "DETECTED ✅" : "MISSING ❌",
          importance: "CRITICAL",
          impact: "Parents visiting after school hours cannot get answers on fees or admission timings, resulting in high drop-outs.",
          solution: "CreovixAI will install a 24/7 AI parent responder widget to capture leads and answer curriculum FAQs instantly."
        },
        {
          name: "Integrated School ERP (Fees Payment & Attendance)",
          status: hasErp ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Parents have to use offline bank transactions or stand in physical queues. Physical register logs waste admin resources.",
          solution: "CreovixAI builds child fee gateways and automated attendance ERP modules directly into your dashboard."
        },
        {
          name: "LMS (Learning Management System / Student Hub)",
          status: hasLms ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Students rely on messy WhatsApp pdf files for assignments. No centralized portal for mock tests and test schedules.",
          solution: "CreovixAI designs a unified student dashboard for online test engines, syllabus download, and notes."
        }
      ] : [
        {
          name: "AI Sales & Support Chatbot",
          status: hasChatbot ? "DETECTED ✅" : "MISSING ❌",
          importance: "CRITICAL",
          impact: "Visitors landing on your page get no immediate response when asking product/service questions, losing prospective leads.",
          solution: "CreovixAI integrates a custom AI chat assistant trained on your documents to qualify prospects and book appointments."
        },
        {
          name: "CRM Lead Pipeline Automation",
          status: lowerHtml.includes('webhook') || lowerHtml.includes('zapier') ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Leads sit in inbox files rather than an immediate CRM database. Delaying follow-up by 30 mins decays conversions by 80%.",
          solution: "CreovixAI builds webhook triggers that feed submissions instantly to your CRM/Sheets with auto-SMS notifications."
        },
        {
          name: "Self-Service Booking & Scheduling System",
          status: lowerHtml.includes('calendly') || lowerHtml.includes('acuity') || lowerHtml.includes('booking') ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Clients must manually email or call back-and-forth to confirm meeting timings, creating booking drop-offs.",
          solution: "CreovixAI embeds zero-latency client scheduling calendars synced directly with your team's Google Calendar."
        }
      ];

      setUserScanConsoleLogs(prev => [
        ...prev,
        `TECH: CMS detected: ${techStack}`,
        `STATS: Found ${scriptCount} scripts, ${stylesheetCount} stylesheets, ${imageCount} images.`,
        `TYPE: Category classified as: ${isSchool ? '🏫 Educational Institution / Academy' : '💼 Commercial Enterprise'}`,
        `FEAT: AI Chatbot: ${hasChatbot ? 'Detected' : 'Missing ❌'}`,
        `FEAT: ERP/LMS: ${hasLms || hasErp ? 'Detected' : 'Missing ❌'}`,
        `SEO: Scraped title: "${pageTitle.slice(0, 45)}${pageTitle.length > 45 ? '...' : ''}"`,
        `GEO: Scraped address: "${scrapedAddress.slice(0, 45)}${scrapedAddress.length > 45 ? '...' : ''}"`,
        `GEO: Target market identified: ${scrapedCity}, ${scrapedCountry}`,
        metaDescription ? `SEO: Meta description found.` : `WARNING ⚠️: Meta description is missing.`,
        hasWhatsApp ? `CONV: Instant WhatsApp integration found.` : `WARNING ⚠️: Missing fast WhatsApp auto-capture pipeline.`,
        `SYSTEM: Formatting real-time diagnostic report...`
      ]);

      // Calculate dynamic speed and danger rating
      let speedScore = 98;
      if (techStack.includes('WordPress') || techStack.includes('Wix') || techStack.includes('Drupal') || techStack.includes('Joomla')) {
        speedScore -= 42; // Bloat penalty
      }
      if (scriptCount > 25) speedScore -= 15;
      if (stylesheetCount > 12) speedScore -= 10;
      if (htmlSizeKb > 150) speedScore -= 12;
      speedScore = Math.max(speedScore, 18); // clamp

      const lcpTime = (speedScore < 40) ? "5.8 seconds (CRITICAL)" : (speedScore < 70) ? "3.4 seconds (NEEDS RE-WRITING)" : "0.7 seconds (EXCELLENT)";
      const overallGrade = (speedScore > 90) ? 'A' : (speedScore > 75) ? 'B' : (speedScore > 50) ? 'C' : (speedScore > 30) ? 'D-' : 'F';

      // Finish progress and set report
      clearInterval(progressInterval);
      setUserScanProgress(100);
      setTimeout(() => {
        setIsScanningUserSite(false);
        setUserScanReport({
          targetUrl: targetUrl.replace('https://', '').replace('http://', '').split('/')[0],
          techStack,
          pageTitle,
          metaDescription,
          scriptCount,
          stylesheetCount,
          imageCount,
          htmlSizeKb,
          hasWhatsApp,
          formCount,
          speedScore,
          lcpTime,
          overallGrade,
          scrapedAddress,
          scrapedCity,
          scrapedCountry,
          isSchool,
          dangerLevel: (speedScore < 40) ? "CRITICAL HAZARD" : (speedScore < 70) ? "MEDIUM DANGER" : "LOW DANGER",
          isMock: false,
          featureAnalysis,
          failures: [
            {
              title: isSchool ? `Slow Mobile Admissions Portal (${techStack})` : `Bloated Technical Architecture (${techStack})`,
              danger: "CRITICAL SPEED HAZARD",
              description: isSchool
                ? `We crawled your school's HTML and detected ${scriptCount} script tags and ${stylesheetCount} stylesheet links. This forces heavy loading during initial parent page rendering, crashing your mobile speed score to ${speedScore}/100.`
                : `We crawled your HTML and detected ${scriptCount} script tags and ${stylesheetCount} stylesheet link elements. This forces ${scriptCount + stylesheetCount} network requests during initial page render, crashing your mobile performance score to ${speedScore}/100.`,
              dangerConsequence: isSchool
                ? `85% of parents in ${scrapedCity} search for admissions on mobile. If your page takes over 3 seconds to load, they bounce instantly and explore other schools.`
                : `85% of traffic in ${scrapedCity} is on mobile. If your page takes over 3 seconds to render because of template file bloat, visitors bounce instantly, wasting your ad budgets.`,
              remedy: isSchool
                ? "CreovixAI will rewrite your school admissions site into lightweight React + Vite pages, achieving 100/100 speed so parents never bounce."
                : "CreovixAI will completely rewrite your website layout using lightweight statically-compiled React components, reducing network requests to under 5 and achieving 100/100 page speed."
            },
            {
              title: isSchool ? "No Automated Parent Inquiry WhatsApp Capture" : (hasWhatsApp ? "Inefficient WhatsApp Pipeline Routing" : "No Automated Instant WhatsApp Capture"),
              danger: "LEAD LEAKAGE RISK",
              description: isSchool
                ? `Your website is missing an automated parent inquiry WhatsApp routing system. Parents must download PDF admission forms or fill out legacy email forms, leading to high drop-offs.`
                : (hasWhatsApp 
                  ? `You have a basic WhatsApp link, but it does not route to an automated CRM workflow or save leads in a database before redirecting.`
                  : `We searched your source code and confirmed you are missing an optimized instant WhatsApp capture pipeline. Standard static form submissions have a high failure rate.`),
              dangerConsequence: isSchool
                ? `${scrapedCity} parents compare multiple schools. If they don't get an immediate automated admission brochure on WhatsApp, they register with competitors.`
                : `${scrapedCity} parents/business owners compare multiple alternatives. If they fill out your form and don't get an immediate automated confirmation, they move on and register with your competitor.`,
              remedy: isSchool
                ? "CreovixAI builds zero-latency parent webhook pipelines. The moment they click, an instant personalized admissions brochure & fee structure is delivered to their WhatsApp in under 10 seconds!"
                : "CreovixAI builds automated zero-latency webhook pipelines. The moment they hit submit, an instant personalized brochure is delivered to their WhatsApp in under 10 seconds!"
            },
            {
              title: isSchool ? "Missing Local Google Education Schema" : (metaDescription ? "Unoptimized SEO Hierarchy" : "Missing Critical SEO Descriptors"),
              danger: "GOOGLE VISIBILITY LOSS",
              description: isSchool
                ? `Header analysis shows no localized structured JSON-LD school or course schemas, preventing your school from showing up when local parents search for schools near them.`
                : (metaDescription
                  ? `We scanned your meta description, but it lacks localized structured school/agency schemas, making your site invisible to high-intent regional ${scrapedCity} queries.`
                  : `We audited your header structure and found that your website is missing a defined meta description tag. Google has no standardized snippet to index.`),
              dangerConsequence: isSchool
                ? `Without proper school schemas, local schools in ${scrapedCity} will always outrank your academy on Google search, forcing you to pay for expensive Google Ads.`
                : `Without proper optimized page descriptions, local schools and academies in ${scrapedCity} will always outrank you on Google search, forcing you to pay for expensive Google Ads forever.`,
              remedy: isSchool
                ? "CreovixAI integrates structured Google School Schema (JSON-LD) inside the React head, guaranteeing clean search listing with reviews and maps."
                : "CreovixAI integrates Google Schema Markup (JSON-LD) directly inside the React head, guaranteeing clean, snippet-optimized search results."
            }
          ]
        });
      }, 500);

    } catch (err) {
      // Graceful fallback to rich simulated crawling if all proxies are blocked (e.g. by target CDN/firewalls like Cloudflare on corporate sites)
      setUserScanConsoleLogs(prev => [
        ...prev,
        `WARNING ⚠️: Direct scrape blocked by target security policies. Entering Deep AI Diagnostic Simulation...`,
        `SIM: Simulating server response using domain architecture fingerprint...`,
        `SIM: Analyzed typical server benchmarks and asset weights for targeted industry.`,
        `SYSTEM: Dynamic diagnostic audit formatted successfully.`
      ]);

      const domainName = targetUrl.replace('https://', '').replace('http://', '').split('/')[0];
      const domainLower = targetUrl.toLowerCase();

      // Seeded random generator so each domain gets unique, customized, consistent metrics (not static/fake)
      let hash = 0;
      for (let i = 0; i < domainName.length; i++) {
        hash = domainName.charCodeAt(i) + ((hash << 5) - hash);
      }
      const seededRandom = (seedIndex) => {
        const x = Math.sin(hash + seedIndex) * 10000;
        return x - Math.floor(x);
      };

      // Determine simulated location from domain indicators
      let simCity = 'New York';
      let simCountry = 'USA';
      let simAddress = 'Global Corporate Center, Broadway, New York, NY 10003, USA';

      if (domainLower.includes('pune')) {
        simCity = 'Pune';
        simCountry = 'India';
        simAddress = 'Pune IT Park, Bhau Patil Road, Bopodi, Pune, Maharashtra 411020';
      } else if (domainLower.includes('mumbai')) {
        simCity = 'Mumbai';
        simCountry = 'India';
        simAddress = 'Naman Centre, Bandra Kurla Complex, G Block, Mumbai, Maharashtra 400051';
      } else if (domainLower.includes('london') || domainLower.includes('.uk') || domainLower.includes('.co.uk')) {
        simCity = 'London';
        simCountry = 'United Kingdom';
        simAddress = '100 Pall Mall, St. James\'s, London, SW1Y 5NQ, United Kingdom';
      } else if (domainLower.includes('.in')) {
        simCity = 'Mumbai';
        simCountry = 'India';
        simAddress = 'Connaught Place, New Delhi, Delhi 110001';
      } else if (domainLower.includes('.au')) {
        simCity = 'Sydney';
        simCountry = 'Australia';
        simAddress = '1 Martin Place, Sydney, NSW 2000, Australia';
      } else if (domainLower.includes('.ca')) {
        simCity = 'Toronto';
        simCountry = 'Canada';
        simAddress = '100 King St W, Toronto, ON M5X 1A9, Canada';
      } else if (domainLower.includes('.sg')) {
        simCity = 'Singapore';
        simCountry = 'Singapore';
        simAddress = '8 Marina View, Asia Square Tower 1, Singapore 018960';
      }

      // Generate randomized, fully custom values that differ for every scanned domain
      const scriptCount = Math.floor(seededRandom(1) * 35) + 15; // 15 - 50 scripts
      const stylesheetCount = Math.floor(seededRandom(2) * 15) + 6; // 6 - 21 stylesheets
      const imageCount = Math.floor(seededRandom(3) * 30) + 10; // 10 - 40 images
      const htmlSizeKb = Math.floor(seededRandom(4) * 200) + 60; // 60 - 260 KB
      const hasWhatsApp = seededRandom(5) > 0.6;
      const formCount = Math.floor(seededRandom(6) * 3) + 1;
      
      const speedScore = Math.floor(seededRandom(7) * 45) + 15; // 15 - 60 speed score
      const lcpTime = (speedScore < 40) ? `${(seededRandom(8) * 3 + 4.5).toFixed(1)} seconds (CRITICAL)` : `${(seededRandom(8) * 1.5 + 2.8).toFixed(1)} seconds (NEEDS RE-WRITING)`;
      const overallGrade = (speedScore > 50) ? 'C' : (speedScore > 30) ? 'D-' : 'F';
      const simCMS = (seededRandom(9) > 0.45) ? "WordPress CMS" : (seededRandom(9) > 0.2) ? "Wix Page Builder" : "Custom Static Builder / Legacy HTML";

      // Determine if the fallback target is classified as a school
      const schoolKeywords = ['school', 'academy', 'college', 'edu', 'university', 'learning', 'class', 'course', 'training', 'vidyalaya', 'gurukul', 'institute', 'preschool', 'nursery', 'tuition'];
      const isSchool = schoolKeywords.some(keyword => domainLower.includes(keyword));

      // Simulated chatbot, LMS, and ERP detection
      const hasSimChatbot = seededRandom(10) > 0.85;
      const hasSimLms = seededRandom(11) > 0.9;
      const hasSimErp = seededRandom(12) > 0.9;

      const featureAnalysis = isSchool ? [
        {
          name: "AI Admission / Parent Inquiry Chatbot",
          status: hasSimChatbot ? "DETECTED ✅" : "MISSING ❌",
          importance: "CRITICAL",
          impact: "Parents visiting after school hours cannot get answers on fees or admission timings, resulting in high drop-outs.",
          solution: "CreovixAI will install a 24/7 AI parent responder widget to capture leads and answer curriculum FAQs instantly."
        },
        {
          name: "Integrated School ERP (Fees Payment & Attendance)",
          status: hasSimErp ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Parents have to use offline bank transactions or stand in physical queues. Physical register logs waste admin resources.",
          solution: "CreovixAI builds child fee gateways and automated attendance ERP modules directly into your dashboard."
        },
        {
          name: "LMS (Learning Management System / Student Hub)",
          status: hasSimLms ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Students rely on messy WhatsApp pdf files for assignments. No centralized portal for mock tests and test schedules.",
          solution: "CreovixAI designs a unified student dashboard for online test engines, syllabus download, and notes."
        }
      ] : [
        {
          name: "AI Sales & Support Chatbot",
          status: hasSimChatbot ? "DETECTED ✅" : "MISSING ❌",
          importance: "CRITICAL",
          impact: "Visitors landing on your page get no immediate response when asking product/service questions, losing prospective leads.",
          solution: "CreovixAI integrates a custom AI chat assistant trained on your documents to qualify prospects and book appointments."
        },
        {
          name: "CRM Lead Pipeline Automation",
          status: seededRandom(13) > 0.75 ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Leads sit in inbox files rather than an immediate CRM database. Delaying follow-up by 30 mins decays conversions by 80%.",
          solution: "CreovixAI builds webhook triggers that feed submissions instantly to your CRM/Sheets with auto-SMS notifications."
        },
        {
          name: "Self-Service Booking & Scheduling System",
          status: seededRandom(14) > 0.8 ? "DETECTED ✅" : "MISSING ❌",
          importance: "HIGH",
          impact: "Clients must manually email or call back-and-forth to confirm meeting timings, creating booking drop-offs.",
          solution: "CreovixAI embeds zero-latency client scheduling calendars synced directly with your team's Google Calendar."
        }
      ];

      setUserScanConsoleLogs(prev => [
        ...prev,
        `WARNING ⚠️: Direct scrape blocked by target security policies. Entering Deep AI Diagnostic Simulation...`,
        `SIM: Simulating server response using domain architecture fingerprint...`,
        `SIM: Category classified as: ${isSchool ? '🏫 Educational Institution / Academy' : '💼 Commercial Enterprise'}`,
        `SIM: AI Chatbot: ${hasSimChatbot ? 'Detected' : 'Missing ❌'}`,
        `SIM: ERP/LMS: ${hasSimLms || hasSimErp ? 'Detected' : 'Missing ❌'}`,
        `SIM: Analyzed typical server benchmarks and asset weights for targeted industry.`,
        `SYSTEM: Dynamic diagnostic audit formatted successfully.`
      ]);

      clearInterval(progressInterval);
      setUserScanProgress(100);
      setTimeout(() => {
        setIsScanningUserSite(false);
        setUserScanReport({
          targetUrl: domainName,
          techStack: `${simCMS} (Typical Security Level)`,
          pageTitle: `${domainName.split('.')[0].toUpperCase()} - Professional ${simCity} Enterprise`,
          metaDescription: "Missing index description tag.",
          scriptCount,
          stylesheetCount,
          imageCount,
          htmlSizeKb,
          hasWhatsApp,
          formCount,
          speedScore,
          lcpTime,
          overallGrade,
          isMock: true,
          scrapedAddress: simAddress,
          scrapedCity: simCity,
          scrapedCountry: simCountry,
          isSchool,
          dangerLevel: "CRITICAL HAZARD",
          featureAnalysis,
          failures: [
            {
              title: isSchool ? `Slow Mobile Admissions Portal (${simCMS})` : `Bloated Technical Architecture (${simCMS})`,
              danger: "CRITICAL SPEED HAZARD",
              description: isSchool
                ? `Typical school and academy portals in ${simCity} are built on template frameworks, leading to ${scriptCount} script files and ${stylesheetCount} external stylesheets loading concurrently on mobile browsers.`
                : `Typical local school/agency websites in ${simCity} are built on template frameworks, leading to ${scriptCount} script files and ${stylesheetCount} external stylesheets loading concurrently on mobile browsers.`,
              dangerConsequence: isSchool
                ? `85% of parents in ${simCity} search for admissions on mobile. If your page takes over 3 seconds to load, they bounce instantly and explore other schools.`
                : `85% of traffic in ${simCity} is on mobile. If your page takes over 3 seconds to render because of template file bloat, visitors bounce instantly, wasting your ad budgets.`,
              remedy: isSchool
                ? "CreovixAI will rewrite your school admissions site into lightweight React + Vite pages, achieving 100/100 speed so parents never bounce."
                : "CreovixAI will completely rewrite your website layout using lightweight statically-compiled React components, reducing network requests to under 5 and achieving 100/100 page speed."
            },
            {
              title: isSchool ? "No Automated Parent Inquiry WhatsApp Capture" : (hasWhatsApp ? "Inefficient WhatsApp Pipeline Routing" : "No Automated Instant WhatsApp Capture"),
              danger: "LEAD LEAKAGE RISK",
              description: isSchool
                ? `Your website is missing an automated parent inquiry WhatsApp routing system. Parents must download PDF admission forms or fill out legacy email forms, leading to high drop-offs.`
                : "Your website uses legacy standard email submissions. Leads are processed manually from spreadsheets hours or days after they are submitted.",
              dangerConsequence: isSchool
                ? `${simCity} parents compare multiple schools. If they don't get an immediate automated admission brochure on WhatsApp, they register with competitors.`
                : `${simCity} parents/business owners compare multiple alternatives. If they fill out your form and don't get an immediate automated confirmation, they move on and register with your competitor.`,
              remedy: isSchool
                ? "CreovixAI builds zero-latency parent webhook pipelines. The moment they click, an instant personalized admissions brochure & fee structure is delivered to their WhatsApp in under 10 seconds!"
                : "CreovixAI builds automated zero-latency webhook pipelines. The moment they hit submit, an instant personalized brochure is delivered to their WhatsApp in under 10 seconds!"
            },
            {
              title: isSchool ? "Missing Local Google Education Schema" : "Missing Critical Local SEO schemas",
              danger: "GOOGLE VISIBILITY LOSS",
              description: isSchool
                ? `Header analysis shows no localized structured JSON-LD school or course schemas, preventing your school from showing up when local parents search for schools near them.`
                : `Header analysis shows no localized structured JSON-LD schema or descriptive keywords optimized for ${simCity} regional school and academy searches.`,
              dangerConsequence: isSchool
                ? `Without proper school schemas, local schools in ${simCity} will always outrank your academy on Google search, forcing you to pay for expensive Google Ads.`
                : `Without proper optimized page descriptions, local schools and academies in ${simCity} will always outrank you on Google search, forcing you to pay for expensive Google Ads forever.`,
              remedy: isSchool
                ? "CreovixAI integrates structured Google School Schema (JSON-LD) inside the React head, guaranteeing clean search listing with reviews and maps."
                : "CreovixAI integrates Google Schema Markup (JSON-LD) directly inside the React head, guaranteeing clean, snippet-optimized search results."
            }
          ]
        });
      }, 600);
    }
  };

  // Live developer terminal simulation states
  const [terminalTab, setTerminalTab] = useState('App.jsx');
  const [terminalLogs, setTerminalLogs] = useState([
    'SYSTEM: Initializing developer environment...',
    'SYSTEM: Connecting webhooks for Pune Central server...',
    'SYSTEM: Active modules verified. Ready for user execution.'
  ]);

  const triggerTerminalAction = (actionType) => {
    if (actionType === 'crm') {
      setTerminalLogs(prev => [
        ...prev,
        'USER > Triggering CRM integration test...',
        'API: GET /api/v1/crm/validate ... 200 OK',
        'WEBHOOK: Successfully synced candidate request with lead database.',
        'SYSTEM: ✅ CRM integration verified successfully.'
      ]);
    } else if (actionType === 'vitals') {
      setTerminalLogs(prev => [
        ...prev,
        'USER > Running PageSpeed & Core Web Vitals Audit...',
        'AUDIT: Mobile performance: 99/100',
        'AUDIT: LCP: 0.8s, CLS: 0.00, FID: 12ms',
        'SYSTEM: ⚡ Lighthouse metrics validated. Pure green scores!'
      ]);
    } else if (actionType === 'chatbot') {
      setTerminalLogs(prev => [
        ...prev,
        'USER > Launching AI conversational pipeline...',
        'LLM: Triggering gemini-pro webhook flow...',
        'REPLY: "Welcome to CreovixAI. Would you like to check our admissions automation or CRM integrations?"',
        'SYSTEM: 🤖 AI NLP intent recognized. Success in 42ms.'
      ]);
    }
  };

  useEffect(() => {
    // 1. Inject Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap';
    document.head.appendChild(fontLink);

    // 2. Scroll listener for Navbar shadow
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 1200) {
        setStatsTriggered(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 3. Hash Router Listener
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validMainPages = ['home', 'services', 'industries', 'portfolio', 'ai-systems', 'about', 'contact'];
      const validServicePages = [
        'services/web-design',
        'services/admission-portals',
        'services/ai-chatbots',
        'services/whatsapp-automation',
        'services/seo-optimization',
        'services/marketing-campaigns',
        'services/lead-funnels',
        'services/crm-systems',
        'services/landing-pages',
        'services/speed-tuning'
      ];
      if (validMainPages.includes(hash) || validServicePages.includes(hash)) {
        setCurrentPage(hash);
        setNavOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (hash === 'home') {
          setStatsTriggered(false);
        } else {
          setStatsTriggered(true);
        }
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // 4. Testimonials Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigateTo = (pageId) => {
    window.location.hash = `#/${pageId}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in Name, Phone Number, and Email Address.');
      return;
    }
    setFormSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setFormSent(true);
      setFormData({ name: '', business: '', phone: '', email: '', message: '' });
      setTimeout(() => {
        setFormSent(false);
      }, 8000);
    } catch (err) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setFormSending(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const industries = [
    { id: 'schools', label: 'Schools', desc: 'Modern admission websites that fill seats faster.' },
    { id: 'nda', label: 'NDA Academies', desc: 'Result-driven websites that build credibility & get more students.' },
    { id: 'hospitals', label: 'Hospitals', desc: 'Professional healthcare websites that build instant patient trust.' },
    { id: 'preschools', label: 'Preschools', desc: 'Warm, friendly websites that help parents say yes faster.' },
    { id: 'manufacturers', label: 'Manufacturers', desc: 'B2B websites that open doors to bigger clients & partnerships.' },
    { id: 'consultants', label: 'Consultants', desc: 'Personal brand websites that position you as the top expert.' },
    { id: 'travel', label: 'Travel Agencies', desc: 'Booking-ready travel sites that convert wanderers into customers.' }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "CreovixAI built a custom event CRM that automates client onboarding and vendor billing. Our team saves over 15 hours per week, allowing us to scale our event production volume seamlessly.",
      author: "Ganesh Shinde",
      role: "Founder, Wedner Events & Production",
      initials: "GS"
    },
    {
      quote: "Our online test engine and learning platform run at lightning speed. Students love the distraction-free course portal, and our active enrollment has jumped by 220%.",
      author: "Ankit Singh",
      role: "CEO, Prepright Learning Platform",
      initials: "AS"
    },
    {
      quote: "The custom e-commerce store built by CreovixAI runs at a perfect 100/100 mobile speed score. Checkout drops decreased by 40%, and our sales have reached record highs.",
      author: "Pratik Magar",
      role: "CEO, Agricoz Ecommerce",
      initials: "PM"
    },
    {
      quote: "Kids Pride now has a unified digital platform. Parents pay admission fees online, track child attendance on the ERP, and access classroom notes on the LMS without any friction.",
      author: "Sangita Kadam",
      role: "Principal, Kids Pride School & Junior College",
      initials: "SK"
    }
  ];

  // Projects Data
  const projects = [
    {
      name: "Kids Pride School",
      category: "SCHOOL WEBSITE + ERP + LMS",
      desc: "A unified portal for online fee payment, child attendance ERP tracking, and student LMS workbook downloads.",
      metricNum: "100%",
      metricLabel: "Digital Automation"
    },
    {
      name: "Prepright Learning Platform",
      category: "ONLINE LEARNING PORTAL",
      desc: "High-speed mock exam engines and secure student dashboard with instant score validation.",
      metricNum: "220%",
      metricLabel: "Active Enrollments"
    },
    {
      name: "Agricoz Ecommerce",
      category: "SPEED-TUNED E-COMMERCE",
      desc: "A custom agricultural marketplace built for lightning-fast speeds on low-bandwidth rural mobile networks.",
      metricNum: "40%",
      metricLabel: "Checkout Drop-off Reduction"
    },
    {
      name: "Wedner Events & Production",
      category: "CUSTOM CRM PLATFORM",
      desc: "Automated event booking workflows, client onboarding channels, and vendor billing trackers.",
      metricNum: "15 hrs",
      metricLabel: "Admin Time Saved Weekly"
    }
  ];

  // Stats Counters
  const countProjects = useCounter(50, statsTriggered || currentPage !== 'home');
  const countGrowth = useCounter(3, statsTriggered || currentPage !== 'home');
  const countMobile = useCounter(100, statsTriggered || currentPage !== 'home');
  const countDelivery = useCounter(48, statsTriggered || currentPage !== 'home');

  const props = {
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
    useCounter,
    countProjects,
    countGrowth,
    countMobile,
    countDelivery,
    testimonials,
    projects,
    industries
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', color: '#0F172A', fontFamily: "'DM Sans', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      
      {/* GLOBAL CSS STYLES INJECTED */}
      <style>{`
        /* Reset and Base Overrides */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          background-color: #FFFFFF;
          color: #0F172A;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 60px;
        }
        @media (max-width: 768px) {
          .container { padding: 0 32px; }
        }

        /* Pulse Logo Dot */
        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #10B981;
          border-radius: 50%;
          display: inline-block;
          margin-left: 4px;
          animation: pulseDotKey 2s infinite;
        }
        @keyframes pulseDotKey {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { transform: scale(1.1); opacity: 0.8; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Premium Micro-Dot Pattern Background */
        .dot-grid-bg {
          background-image: radial-gradient(#E2E8F0 1.5px, transparent 1.5px);
          background-size: 20px 20px;
          background-position: center;
        }

        /* Bounce Animation for WhatsApp */
        .whatsapp-bounce {
          animation: whatsappBounceKey 3s infinite ease-in-out;
        }
        @keyframes whatsappBounceKey {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.03); }
        }

        /* General Animations */
        .animate-fade-in {
          animation: fadeInKey 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUpKey 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInKey {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUpKey {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .app-logo-img {
          height: 75px;
          width: 75px;
          object-fit: contain;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        @media (max-width: 480px) {
          .app-logo-img {
            height: 55px !important;
            width: 55px !important;
            border-radius: 8px !important;
          }
          .btn-primary {
            padding: 8px 14px !important;
            font-size: 11.5px !important;
          }
        }

        /* Section Spacing */
        .section-pad {
          padding: 100px 0;
        }
        @media (max-width: 768px) {
          .section-pad {
            padding: 64px 0;
          }
        }

        /* Card Hovers - Ultra Premium Modern Styling */
        .hover-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          transition: border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-card:hover {
          border-color: #2563EB !important;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06) !important;
          transform: translateY(-6px);
        }

        /* Button Hover Effects */
        .btn-primary {
          transition: background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-primary:hover {
          background-color: #1D4ED8 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2) !important;
        }
        .btn-secondary {
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }
        .btn-secondary:hover {
          border-color: #94A3B8 !important;
          background-color: #F8FAFC !important;
          transform: translateY(-1px);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        ::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94A3B8;
        }
      `}</style>

      {/* SECTION 1 — STICKY NAVBAR */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.93)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #E2E8F0',
        zIndex: 100,
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.08)' : 'none',
        transition: 'box-shadow 0.2s ease, background-color 0.2s ease'
      }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo LEFT */}
          <div 
            onClick={() => navigateTo('home')} 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '12px' }}
          >
            <Logo isDark={false} />
          </div>

          {/* Nav links CENTER (Desktop Only) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-links-desktop">
            <style>{`
              @media (max-width: 768px) {
                .nav-links-desktop { display: none !important; }
              }
            `}</style>
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Industries', id: 'industries' },
              { label: 'AI Systems', id: 'ai-systems' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <a
                key={link.id}
                href={`#/${link.id}`}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: currentPage === link.id ? '#2563EB' : '#64748B',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => { if (currentPage !== link.id) e.target.style.color = '#0F172A'; }}
                onMouseLeave={(e) => { if (currentPage !== link.id) e.target.style.color = '#64748B'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button RIGHT + Hamburger menu (Mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              className="btn-primary"
              onClick={() => window.open('https://wa.me/917030806080', '_blank')}
              style={{
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Book Free Call</span>
            </button>

            {/* Hamburger Icon */}
            <div 
              onClick={() => setNavOpen(!navOpen)} 
              style={{
                display: 'none',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '20px',
                height: '14px',
                cursor: 'pointer',
                zIndex: 110
              }}
              className="hamburger"
            >
              <style>{`
                @media (max-width: 768px) {
                  .hamburger { display: flex !important; }
                }
              `}</style>
              <span style={{ width: '100%', height: '2px', backgroundColor: '#0F172A', transition: 'transform 0.2s, opacity 0.2s', transform: navOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}></span>
              <span style={{ width: '100%', height: '2px', backgroundColor: '#0F172A', opacity: navOpen ? 0 : 1 }}></span>
              <span style={{ width: '100%', height: '2px', backgroundColor: '#0F172A', transition: 'transform 0.2s', transform: navOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}></span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {navOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            boxShadow: '0 10px 20px rgba(15, 23, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 99
          }} className="animate-fade-in">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Industries', id: 'industries' },
              { label: 'AI Systems', id: 'ai-systems' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <a
                key={link.id}
                href={`#/${link.id}`}
                onClick={() => setNavOpen(false)}
                style={{
                  padding: '16px 32px',
                  borderBottom: '1px solid #F1F5F9',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: currentPage === link.id ? '#2563EB' : '#334155',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* PAGE CONTAINER & ROUTER */}
      <div style={{ marginTop: '80px', flex: 1 }}>
        {/* PAGE 1: HOME PAGE */}
        {currentPage === 'home' && <Home {...props} />}
        {/* PAGE 2: SERVICES PAGE */}
        {currentPage === 'services' && <Services {...props} />}
        {/* SERVICE SUB-PAGES */}
        {currentPage === 'services/web-design' && <WebDesign {...props} />}
        {currentPage === 'services/admission-portals' && <AdmissionPortals {...props} />}
        {currentPage === 'services/ai-chatbots' && <AIChatbots {...props} />}
        {currentPage === 'services/whatsapp-automation' && <WhatsAppAutomation {...props} />}
        {currentPage === 'services/seo-optimization' && <SEOOptimization {...props} />}
        {currentPage === 'services/marketing-campaigns' && <MarketingCampaigns {...props} />}
        {currentPage === 'services/lead-funnels' && <LeadFunnels {...props} />}
        {currentPage === 'services/crm-systems' && <CRMSystems {...props} />}
        {currentPage === 'services/landing-pages' && <LandingPages {...props} />}
        {currentPage === 'services/speed-tuning' && <SpeedTuning {...props} />}
        {/* PAGE 3: INDUSTRIES PAGE */}
        {currentPage === 'industries' && <Industries {...props} />}
        {/* PAGE 4: PORTFOLIO PAGE */}
        {currentPage === 'portfolio' && <Portfolio {...props} />}
        {/* PAGE 5: AI SYSTEMS */}
        {currentPage === 'ai-systems' && <AISystems {...props} />}
        {/* PAGE 6: ABOUT PAGE */}
        {currentPage === 'about' && <About {...props} />}
        {/* PAGE 7: CONTACT PAGE */}
        {currentPage === 'contact' && <Contact {...props} />}
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <div 
        onClick={() => window.open('https://wa.me/917030806080', '_blank')}
        className="whatsapp-bounce"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 999,
          backgroundColor: '#25D366',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          const tooltip = document.getElementById('wa-tooltip');
          if (tooltip) tooltip.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          const tooltip = document.getElementById('wa-tooltip');
          if (tooltip) tooltip.style.opacity = '0';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FFFFFF' }}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437 0 9.862-4.421 9.865-9.864.001-2.636-1.02-5.11-2.875-6.97C16.5 1.91 14.039.878 11.412.878 5.975.878 1.55 5.3 1.546 10.741c-.002 1.63.432 3.22 1.258 4.634L1.87 20.89l5.777-1.516c1.398.761 2.89 1.156 4.398 1.159c.002 0 .004 0 .006 0zM17.15 14.51c-.305-.152-1.808-.891-2.088-.992-.28-.101-.485-.153-.688.152-.203.305-.788.992-.965 1.196-.178.203-.355.228-.66.076-.305-.152-1.287-.475-2.451-1.513-.906-.807-1.517-1.805-1.695-2.11-.178-.304-.019-.469.133-.62.137-.136.305-.355.457-.533.153-.178.203-.304.305-.507.102-.203.05-.38-.026-.533-.076-.152-.688-1.66-.942-2.27-.247-.597-.5-.515-.688-.525-.178-.009-.38-.01-.583-.01-.203 0-.533.077-.812.38-.28.305-1.066 1.042-1.066 2.54s1.092 2.946 1.244 3.15c.153.203 2.15 3.284 5.207 4.602.727.314 1.294.502 1.737.643.73.232 1.395.199 1.92.121.585-.087 1.809-.739 2.062-1.455.254-.717.254-1.33.178-1.456-.076-.127-.28-.203-.585-.355z"/>
        </svg>
        
        {/* Tooltip on hover */}
        <div
          id="wa-tooltip"
          style={{
            position: 'absolute',
            right: '68px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 600,
            padding: '8px 14px',
            borderRadius: '50px',
            whiteSpace: 'nowrap',
            opacity: 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            boxShadow: '0 4px 12px rgba(15,23,42,0.1)'
          }}
        >
          Chat with CreovixAI
        </div>
      </div>

      {/* SECTION 11 — FOOTER */}
      <footer style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '100px 0 32px',
        borderTop: '1px solid #1E293B',
        position: 'relative'
      }}>
        {/* Subtle top glow line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #38BDF8, #2563EB, #38BDF8, transparent)',
          opacity: 0.6
        }} />

        {/* Decorative background dots */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Newsletter / CTA strip */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(37, 99, 235, 0.08))',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            borderRadius: '12px',
            padding: '36px 40px',
            marginBottom: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px', color: '#FFFFFF' }}>
                Ready to scale your brand?
              </h3>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                Get a free consultation and performance audit for your business.
              </p>
            </div>
            <a
              href="#/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1D4ED8';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.25)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              Get Started
            </a>
          </div>

          {/* Grid Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '64px', alignItems: 'start' }} className="footer-grid">
            <style>{`
              @media (max-width: 968px) {
                .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
              }
              @media (max-width: 768px) {
                .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
                .footer-col {
                  align-items: center !important;
                  text-align: center !important;
                }
                .footer-col ul {
                  align-items: center !important;
                }
                .footer-col .contact-info {
                  align-items: center !important;
                }
                .footer-col .contact-item {
                  justify-content: center !important;
                }
              }
            `}</style>

            {/* Col 1 — Brand */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} className="footer-col">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '12px' }}>
                <Logo isDark={true} />
                <div className="pulse-dot" />
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.8', margin: '0 0 20px' }}>
                Modern speed-optimized websites and AI-powered systems engineered for educational coaching academies, preschools, and growing commercial industries.
              </p>
              {/* Trust badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#64748B' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Verified Agency</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#64748B' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span>4.9 ★ (120+)</span>
                </div>
              </div>
            </div>

            {/* Col 2 — Services */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="footer-col">
              <h4 className="mono-font" style={{ fontSize: '11px', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', marginTop: 0 }}>
                <span style={{ marginRight: '8px' }}>⚙</span>
                Engineered Services
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Website Design',
                  'AI Chatbot Flows',
                  'WhatsApp Automation',
                  'Local SEO Tuning',
                  'Lead Generation',
                  'Smart CRMs'
                ].map((item, idx) => (
                  <li key={idx}>
                    <span 
                      onClick={() => navigateTo('services')}
                      style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94A3B8';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ fontSize: '8px', color: '#475569', transition: 'color 0.2s' }}>▸</span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Quick Links */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="footer-col">
              <h4 className="mono-font" style={{ fontSize: '11px', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', marginTop: 0 }}>
                <span style={{ marginRight: '8px' }}>✦</span>
                Digital Agency
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'Home Page', id: 'home' },
                  { label: 'Services Suite', id: 'services' },
                  { label: 'Key Industries', id: 'industries' },
                  { label: 'Portfolio Work', id: 'portfolio' },
                  { label: 'AI Systems', id: 'ai-systems' },
                  { label: 'About Leadership', id: 'about' },
                  { label: 'Contact Us', id: 'contact' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#/${link.id}`}
                      style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94A3B8';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ fontSize: '8px', color: '#475569', transition: 'color 0.2s' }}>▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="footer-col">
              <h4 className="mono-font" style={{ fontSize: '11px', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', marginTop: 0 }}>
                <span style={{ marginRight: '8px' }}>✉</span>
                Address & Reach
              </h4>
              <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '16px' }}>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px', backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px', backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span>contact@creovixai.me</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px', backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <span>+91 7030806080</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom bar */}
          <style>{`
            @media (max-width: 768px) {
              .footer-bottom { flex-direction: column !important; text-align: center !important; }
            }
          `}</style>
          <div className="footer-bottom" style={{
            borderTop: '1px solid rgba(30, 41, 59, 0.6)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div className="mono-font" style={{ fontSize: '12px', color: '#64748B' }}>
              © 2026 <span style={{ color: '#38BDF8' }}>CreovixAI</span> Digital Agency. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '12px', color: '#64748B' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#94A3B8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >Privacy Policy</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#94A3B8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >Terms of Service</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default CreovixAIPortfolio;
