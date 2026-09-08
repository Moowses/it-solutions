export const siteUrl = "https://karlmosses.com";
export const ownerName = "Karl Mosses Banlasan";
export const location = "Davao City, Philippines";
export const contactEmail = "info@karlmosses.com";
export const linkedInUrl = "https://www.linkedin.com/in/karl-mosses-banlasan-21aab8205/";
export const resumeHref = "/resume.pdf";

export const resumeRequestHref = `mailto:${contactEmail}?subject=Resume%20Request%20-%20Karl%20Mosses%20Banlasan`;
export const projectInquiryHref = `mailto:${contactEmail}?subject=IT%20Business%20Solutions%20Inquiry`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const services = [
  {
    title: "Managed IT Services and Smart Hands",
    result:
      "Remote and onsite IT support for businesses that need a hands-on technical partner to keep users, devices, sites, and vendors moving.",
    capabilities: [
      "Smart hands support for offices, branches, and field sites",
      "User support, workstation setup, troubleshooting, and technical handoff",
      "Printer, router, Wi-Fi, endpoint, and onsite equipment support",
      "Vendor, carrier, and field technician coordination",
      "Incident triage, escalation, documentation, and follow-through",
    ],
  },
  {
    title: "Server and IT Operations Support",
    result:
      "Administration and operational support for the core systems behind users, access, identity, files, backups, and daily IT service continuity.",
    capabilities: [
      "Microsoft 365 and Google Workspace",
      "Windows Server and Active Directory",
      "User provisioning and access controls",
      "Endpoint monitoring, security, backup, and disaster-recovery readiness",
      "IT policies, documentation, budgeting, vendors, and asset management",
    ],
  },
  {
    title: "Network, VPN and PTP Connectivity",
    result:
      "Network planning, troubleshooting, secure remote access, and point-to-point connectivity for offices, sites, and operations teams.",
    capabilities: [
      "Point-to-point internet deployment",
      "TCP/IP, VLAN, routing, switching, DNS, DHCP, and VPN",
      "Fortinet, Palo Alto, pfSense, UniFi, and EdgeRouter",
      "EVPL, IEPL, Metro Ethernet, and business connectivity",
      "Carrier, vendor, and field technician coordination",
    ],
  },
  {
    title: "CCTV, DVR/NVR and Site Infrastructure",
    result:
      "Field-ready security and site technology work from planning and installation through testing, turnover, and user orientation.",
    capabilities: [
      "CCTV site surveys and camera layout planning",
      "Cable routing, DVR/NVR setup, and remote viewing",
      "Router, wireless, printer, and onsite equipment support",
      "Testing, documentation, and technical turnover",
    ],
  },
  {
    title: "Software, Web and Business Applications",
    result:
      "Custom business systems, websites, portals, booking tools, dashboards, and internal applications built around the way the operation works.",
    capabilities: [
      "Next.js, React, Node.js, TypeScript, and Express",
      "Booking systems, dashboards, portals, and internal tools",
      "WordPress and WooCommerce",
      "Firebase, Supabase, DigitalOcean, Vercel, Nginx, PM2, and Cloudflare",
    ],
  },
  {
    title: "Business Systems Integration and Automation",
    result:
      "Connects CRM, POS, accounting, booking, e-commerce, payment, communication, and internal platforms so information moves cleanly with less manual work.",
    capabilities: [
      "CRM, K-Series POS, QuickBooks, Stripe, NMI, booking, and e-commerce platforms",
      "REST APIs, webhooks, JSON, and middleware",
      "Cross-platform synchronization and data-integrity workflows",
      "Business-process analysis and systems planning",
      "n8n, Zapier, Make, GoHighLevel, HubSpot, and ClickFunnels",
      "Lead routing, email, SMS, CRM, and operational workflows",
    ],
  },
];

export const workHighlights = [
  {
    slug: "business-systems",
    label: "Business systems",
    title: "Business systems and operations support",
    summary:
      "Connected business tools and support workflows so operations had clearer handoffs between booking, CRM, finance, and internal systems.",
    context:
      "A vacation-rental operation needed support across booking, CRM, sales, finance, e-commerce, and internal systems.",
    action:
      "Built and supported web tools, middleware, automations, integrations, and cloud deployments around the actual operating workflow.",
    outcome:
      "Created a more connected working environment with clearer handoffs between business tools and support processes.",
  },
  {
    slug: "network-operations",
    label: "Network operations",
    title: "Network operations and connectivity support",
    summary:
      "Supported corporate connectivity work through structured troubleshooting, field coordination, escalation, and documentation.",
    context:
      "Corporate connectivity work required incident response, monitoring, migrations, field coordination, and carrier/vendor escalation.",
    action:
      "Handled NOC and network-support work across VLANs, EVPL, service requests, migrations, outages, and technical escalations.",
    outcome:
      "Improved service-restoration discipline through structured troubleshooting, escalation, documentation, and coordination.",
  },
  {
    slug: "site-infrastructure",
    label: "Site infrastructure",
    title: "Site infrastructure and security systems",
    summary:
      "Planned and deployed site technology foundations for monitoring, secure access, connectivity, documentation, and handover.",
    context:
      "Small business and project-based clients needed onsite technology support for access, monitoring, connectivity, and turnover.",
    action:
      "Planned and deployed CCTV, DVR/NVR, router, VPN, firewall, point-to-point connectivity, and site equipment setups.",
    outcome:
      "Gave operators a clearer technical foundation for monitoring, secure access, documentation, and day-to-day support.",
  },
  {
    slug: "web-applications",
    label: "Web applications",
    title: "Web applications and internal tools",
    summary:
      "Built web systems and internal tools that supported actual operating tasks instead of disconnected standalone pages.",
    context:
      "Teams needed working web systems for booking, dashboards, portals, internal operations, and online business workflows.",
    action:
      "Developed and maintained Next.js, React, Node.js, WordPress, WooCommerce, Firebase, Supabase, and cloud-hosted systems.",
    outcome:
      "Delivered tools that supported real operating tasks instead of standalone pages disconnected from the business process.",
  },
];

export const developmentProjects = [
  {
    slug: "dreamtripclub-booking-system",
    title: "DreamTripClub Membership Booking Platform",
    category: "Web App",
    platform: "Next.js, Node.js, Booking System",
    url: "https://dreamtripclub.com/",
    status: "Live rewards and booking platform",
    theme: "travel",
    image: "/project-uploads/dreamtripclub-booking-system/live-site.webp",
    gallery: ["/project-uploads/dreamtripclub-booking-system/1.webp"],
    isSpotlight: true,
    summary:
      "A membership-focused travel platform with resort search, rewards visibility, points redemption support, account access, and AI-assisted live chat for booking needs.",
    deepDive: [
      "Structured the product around member actions: searching stays, checking rewards, understanding points, and getting support without waiting for manual staff replies.",
      "Added live chat support powered by OpenAI so members can ask about booking needs, reward points, redemption steps, and account guidance.",
      "Designed the app as an operating platform for memberships and reservations, not only a public marketing site.",
    ],
    stack: ["Next.js", "React", "Node.js", "OpenAI", "Booking workflow", "Rewards", "REST APIs", "Vercel"],
    uploadFolder: "/project-uploads/dreamtripclub-booking-system/",
  },
  {
    slug: "damla-training-enrollment-system",
    title: "Damla Training Institute Enrollment and LMS System",
    category: "Website + Web App",
    platform: "Training Website, Enrollment, Dashboard, LMS",
    url: "https://damlatraining.com/",
    status: "Public site with private dashboards",
    theme: "education",
    image: "/project-uploads/damla-training-enrollment-system/live-site.webp",
    gallery: ["/project-uploads/damla-training-enrollment-system/1-redacted.webp"],
    isSpotlight: true,
    summary:
      "A training-institute website and application experience supporting course discovery, online enrollment, dashboard workflows, and learning-management needs.",
    deepDive: [
      "Positioned the public site around TESDA-registered training programs, admissions, course exploration, and enrollment calls to action.",
      "Designed the application side for enrollment handling, learner records, dashboard workflows, and training-operation visibility.",
      "Balanced public credibility with back-office practicality so staff can manage training operations beyond a simple brochure site.",
    ],
    stack: ["React", "Next.js", "Dashboard UI", "Enrollment flow", "LMS workflow", "Forms", "Admin modules"],
    uploadFolder: "/project-uploads/damla-training-enrollment-system/",
  },
  {
    slug: "mosses-and-vanesa-rsvp-dashboard",
    title: "Mosses and Vanesa Wedding Website and RSVP Dashboard",
    category: "Website + Dashboard",
    platform: "RSVP System, Guest Monitoring, Email Blast",
    url: "https://www.mossesandvanesa.com/",
    status: "Public site with private event dashboard",
    theme: "event",
    image: "/project-uploads/mosses-and-vanesa-rsvp-dashboard/online-invitation-redacted.webp",
    gallery: [
      "/project-uploads/mosses-and-vanesa-rsvp-dashboard/1-redacted.webp",
      "/project-uploads/mosses-and-vanesa-rsvp-dashboard/2-redacted.webp",
      "/project-uploads/mosses-and-vanesa-rsvp-dashboard/3-redacted.webp",
    ],
    isSpotlight: true,
    summary:
      "A custom wedding website with guest-specific digital invitations, RSVP collection, guest monitoring, event communications, and email follow-up.",
    deepDive: [
      "Generated signed guest invitation links so each invited group receives a private RSVP experience tied to their record.",
      "Made the guest RSVP flow controlled after submission, reducing accidental changes while keeping the invitation experience polished.",
      "Built admin workflows for guest monitoring, RSVP status, table assignment, message review, announcement opt-in, and email notifications.",
    ],
    stack: ["Next.js", "React", "Firebase", "Signed RSVP links", "Guest dashboard", "Resend", "Email notifications"],
    uploadFolder: "/project-uploads/mosses-and-vanesa-rsvp-dashboard/",
  },
  {
    slug: "dental-clinic-system",
    title: "Dental Clinic Patient, Billing, and Inventory System",
    category: "Web App",
    platform: "Clinic Operations System",
    url: "https://dental-clinic-webapp-rust.vercel.app/",
    status: "Public demo",
    theme: "clinical",
    image: "/project-uploads/dental-clinic-system/1-redacted.webp",
    gallery: [
      "/project-uploads/dental-clinic-system/2..webp",
      "/project-uploads/dental-clinic-system/3..webp",
      "/project-uploads/dental-clinic-system/4-redacted.webp",
    ],
    isSpotlight: true,
    summary:
      "A clinic operations web app covering patient booking, billing, inventory, treatment records, AI-assisted patient support, and admin appointment automation.",
    deepDive: [
      "Integrated a logged-in patient AI assistant powered by Gemini to help with appointment booking, cancellation guidance, service questions, and clinic support needs.",
      "Built admin-side appointment queues and calendar views to reduce manual checking, avoid missed updates, and lower the need for extra staff just to monitor bookings.",
      "Automated appointment coordination for both patients and dentists so scheduling, status changes, and operational handoff are handled with fewer manual errors.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Booking automation", "Billing", "Inventory"],
    uploadFolder: "/project-uploads/dental-clinic-system/",
  },
  {
    slug: "chauffeur-mobile-booking-app",
    title: "Chauffeur Mobile Booking App",
    category: "Mobile App Concept",
    platform: "Mobile Booking Experience",
    status: "Concept cover generated for portfolio",
    theme: "mobility",
    image: "/project-shots/chauffeur-mobile-booking-app.webp",
    isSpotlight: true,
    summary:
      "A premium mobile booking interface concept for chauffeur reservations, route selection, vehicle choice, driver details, pricing, and scheduled rides.",
    deepDive: [
      "Mapped the experience around the booking decision: pickup, drop-off, time, vehicle class, driver trust signals, and fare confirmation.",
      "Designed the UI direction to feel polished enough for an executive transport service while keeping the booking flow direct.",
      "Prepared this as a visual portfolio concept because the production screenshots are not available in the repository.",
    ],
    stack: ["Mobile UI", "SwiftUI-ready structure", "Flutter-ready structure", "Booking UX", "Figma-style design"],
    uploadFolder: "/project-uploads/chauffeur-mobile-booking-app/",
  },
  {
    slug: "investors-growth-syndicate",
    title: "Investor's Growth Syndicate",
    category: "WordPress",
    platform: "Custom WordPress Code",
    url: "https://investorsgrowthsyndicate.com/",
    status: "Live public site",
    theme: "finance",
    image: "/project-shots/investors-growth-syndicate.webp",
    summary:
      "A real-estate education and coaching website positioned around portfolio growth, private community access, courses, events, and mastermind programs.",
    deepDive: [
      "Built the public-facing experience around credibility, transformation-oriented messaging, community positioning, and clear discovery paths.",
      "Supported WordPress customization needs for a content-rich business with coaching, course, event, and member-area touchpoints.",
      "Kept the site suitable for marketing operations where landing pages, content updates, and lead-generation pages need to move quickly.",
    ],
    stack: ["WordPress", "Custom code", "Landing pages", "Responsive layout", "Lead generation", "Content architecture"],
  },
  {
    slug: "ken-dunn",
    title: "Ken Dunn Personal Brand Website",
    category: "WordPress",
    platform: "Founder and Portfolio Website",
    url: "https://kendunn.com/",
    status: "Live public site",
    theme: "founder",
    image: "/project-shots/ken-dunn.webp",
    summary:
      "A founder-led WordPress site connecting personal brand, entrepreneurship, resort ventures, real-estate projects, member access, and media presence.",
    deepDive: [
      "Organized the site to make the founder profile, ventures, authority signals, and member area easy to find from the first visit.",
      "Supported a multi-venture content model where resorts, wellness, real estate, coaching, and updates can live under one professional brand.",
      "Used WordPress as a practical operating platform for ongoing page updates, media publishing, and campaign content.",
    ],
    stack: ["WordPress", "Personal brand", "Responsive pages", "Content management", "Member-area links"],
  },
  {
    slug: "cottage-dream-vacations",
    title: "Cottage Dream Vacations",
    category: "WordPress",
    platform: "Hospitality and Vacation-Rental Website",
    url: "https://cottagedreamvacations.com/",
    status: "Live public site",
    theme: "hospitality",
    image: "/project-shots/cottage-dream-vacations.webp",
    summary:
      "A hospitality website supporting cottage discovery, resort storytelling, business credibility, property content, and vacation-rental interest.",
    deepDive: [
      "Structured the experience around resort discovery, family travel, property content, and business trust rather than a generic rental catalog.",
      "Supported WordPress content operations for listings, resort pages, seasonal messaging, and customer-facing updates.",
      "Aligned the website with a broader hospitality operation that also depends on booking workflows, CRM, marketing, and support systems.",
    ],
    stack: ["WordPress", "Hospitality content", "Property pages", "Responsive design", "Operations support"],
  },
  {
    slug: "calabogie-peaks",
    title: "Calabogie Peaks Resort",
    category: "WordPress",
    platform: "Resort Website",
    url: "https://calabogie.com/",
    status: "Live public site",
    theme: "resort",
    image: "/project-shots/calabogie-peaks.webp",
    summary:
      "A resort website experience for accommodations, mountain and lake activities, amenities, seasonal offers, events, and guest planning.",
    deepDive: [
      "Supported a content model that needs to serve different audiences: guests, event planners, activity seekers, and returning visitors.",
      "Kept the public experience oriented around discovery, booking interest, amenities, and seasonal resort operations.",
      "Worked within WordPress so operational teams can continue publishing offers, pages, and activity information as the resort changes.",
    ],
    stack: ["WordPress", "Resort content", "Guest experience", "Responsive layout", "CMS operations"],
  },
  {
    slug: "canadian-hot-tub",
    title: "Canadian Hot Tub",
    category: "WooCommerce",
    platform: "E-Commerce Store",
    url: "https://canhottub.com/",
    status: "Live commerce site",
    theme: "commerce",
    image: "/project-shots/canadian-hot-tub.webp",
    summary:
      "A WooCommerce product and commerce experience for hot tub sales, product education, order interest, and conversion-focused customer journeys.",
    deepDive: [
      "Supported product presentation, store operations, content updates, customer decision paths, and commerce-ready page structure.",
      "Focused the experience on product clarity, trust, and checkout readiness instead of treating the site as a static catalog.",
      "Kept the platform practical for ongoing offers, product pages, checkout flows, and marketing campaigns.",
    ],
    stack: ["WooCommerce", "WordPress", "Product pages", "Checkout flow", "Payment readiness", "Responsive commerce"],
  },
  {
    slug: "canadian-cold-plunge",
    title: "Canadian Cold Plunge",
    category: "WooCommerce",
    platform: "Product Commerce Website",
    url: "https://canadiancoldplunge.com/",
    status: "Live commerce site",
    theme: "wellness",
    image: "/project-shots/canadian-cold-plunge.webp",
    summary:
      "A WooCommerce product website for cold plunge sales, product positioning, app-led value proposition, promotions, and customer conversion.",
    deepDive: [
      "Structured the experience around product education, promotional urgency, product benefits, and a clear buying path.",
      "Supported commerce content that combines physical product detail with wellness positioning and app-enabled product messaging.",
      "Kept the site ready for changing campaigns, product content, and conversion-focused landing pages.",
    ],
    stack: ["WooCommerce", "WordPress", "Product storytelling", "Landing pages", "Responsive commerce", "Campaign content"],
  },
] as const;

export const developmentSkillGroups = [
  {
    title: "Web Design and UI/UX",
    items: ["Web design", "UI/UX", "Responsive design", "Wireframing", "Design systems", "Landing pages"],
  },
  {
    title: "Front-End Development",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "API integration"],
  },
  {
    title: "Back-End and Integrations",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Webhooks", "Python", "Authentication", "Vercel"],
  },
  {
    title: "CMS and Commerce",
    items: ["WordPress", "WooCommerce", "Webflow", "Custom code", "CMS operations", "Product pages", "Checkout flows"],
  },
  {
    title: "Mobile Development",
    items: ["Xcode", "Swift", "SwiftUI", "Flutter", "Java", "Kotlin", "Mobile booking UX"],
  },
  {
    title: "Software Development",
    items: [".NET", "C#", "Application support", "Dashboards", "Internal tools", "Business systems"],
  },
  {
    title: "Tools and Business Platforms",
    items: ["Figma", "GoHighLevel", "Jira", "CRM automation", "SendGrid", "Stripe", "PayPal", "DNS and SMTP"],
  },
] as const;

export const automationHighlights = [
  {
    title: "AI Customer and Patient Assistance",
    summary:
      "Logged-in assistant flows for patient support, appointment questions, cancellation guidance, reward-point questions, booking help, and service information.",
    tools: ["Gemini API", "OpenAI", "Prompt logic", "Authenticated support", "Knowledge-based answers"],
  },
  {
    title: "Booking and Appointment Automation",
    summary:
      "Operational flows that reduce manual checking by keeping appointment status, queues, calendars, patient actions, and staff visibility connected.",
    tools: ["Booking systems", "Calendar views", "Status workflows", "Patient and dentist coordination", "Admin queues"],
  },
  {
    title: "Digital Invitation and RSVP Automation",
    summary:
      "Guest-specific invitation links, controlled RSVP submission, admin monitoring, message review, and announcement emails for event operations.",
    tools: ["Signed tokens", "Guest dashboard", "RSVP workflow", "Resend email", "Announcement opt-in"],
  },
  {
    title: "CRM and Marketing Automation",
    summary:
      "Lead handling, CRM updates, funnel actions, email follow-up, SMS-style workflows, and campaign support for businesses that need cleaner handoffs.",
    tools: ["GoHighLevel", "ClickFunnels", "Lead routing", "Email workflows", "Campaign operations"],
  },
  {
    title: "Webhooks and Business Integrations",
    summary:
      "Connections between websites, dashboards, payment tools, booking systems, communication platforms, and reporting workflows.",
    tools: ["REST APIs", "Webhooks", "SendGrid", "Stripe", "PayPal", "Middleware"],
  },
] as const;

export const infrastructureServiceAreas = [
  {
    title: "Managed IT and Smart Hands",
    label: "On-call support",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    summary:
      "Hands-on support for users, workstations, access, printers, branches, vendors, and daily IT operations when the business needs someone technical to own the follow-through.",
    items: ["Onsite and remote support", "Endpoint setup", "Vendor coordination", "User troubleshooting"],
  },
  {
    title: "Server and IT Operations",
    label: "Business systems",
    image: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    summary:
      "Support for servers, accounts, access, Microsoft 365, Active Directory, backups, documentation, and technical continuity across the company.",
    items: ["Windows Server", "Microsoft 365", "Active Directory", "Backup readiness"],
  },
  {
    title: "CCTV Installation and Site Survey",
    label: "Site security",
    image: "https://images.pexels.com/photos/13168513/pexels-photo-13168513.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    summary:
      "Security-camera planning and installation support, including site review, camera placement, DVR/NVR setup, cabling coordination, remote viewing, and turnover.",
    items: ["Site survey", "DVR/NVR setup", "Camera layout", "Remote viewing"],
  },
  {
    title: "Point-to-Point Antenna and Connectivity",
    label: "Connectivity",
    image: "https://images.pexels.com/photos/8827093/pexels-photo-8827093.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    summary:
      "Point-to-point planning, antenna alignment coordination, branch/site connectivity, troubleshooting, and handoff for business internet or site links.",
    items: ["PTP survey", "Wireless links", "Router setup", "Field coordination"],
  },
  {
    title: "VPN and Secure Remote Access",
    label: "Network access",
    image: "https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    summary:
      "VPN planning and support for secure access between users, offices, servers, and applications, with documentation for support and future changes.",
    items: ["Site-to-site VPN", "Remote users", "Firewall policy", "Access documentation"],
  },
] as const;

export const projectUploadFolders = [
  {
    project: "Damla Training enrollment system",
    folder: "/public/project-uploads/damla-training-enrollment-system/",
    filenames: "1.png, live-site.png",
  },
  {
    project: "DreamTripClub booking system",
    folder: "/public/project-uploads/dreamtripclub-booking-system/",
    filenames: "1.png, live-site.png",
  },
  {
    project: "Mosses and Vanesa RSVP dashboard",
    folder: "/public/project-uploads/mosses-and-vanesa-rsvp-dashboard/",
    filenames: "1.png, 2.png, 3.png",
  },
  {
    project: "Dental clinic system",
    folder: "/public/project-uploads/dental-clinic-system/",
    filenames: "1.png, 2..png, 3..png, 4..png",
  },
  {
    project: "Chauffeur mobile booking app",
    folder: "/public/project-uploads/chauffeur-mobile-booking-app/",
    filenames: "1.png, 2.png, 3.png",
  },
] as const;

export const workWithMe = [
  "IT leadership",
  "Hands-on troubleshooting",
  "Business-process analysis",
  "Systems development",
  "Infrastructure and networking",
  "Stakeholder communication",
  "Vendor coordination",
  "Project planning and implementation",
  "Technical training and documentation",
];

export const expertiseGroups = [
  {
    title: "IT Operations and Leadership",
    items: [
      "IT operations",
      "Technical project leadership",
      "System deployment",
      "Jira",
      "Vendor coordination",
      "Process improvement",
    ],
  },
  {
    title: "Systems Administration",
    items: [
      "Microsoft 365",
      "Office 365 Administration",
      "Active Directory",
      "SharePoint",
      "DNS",
      "SMTP",
      "Help desk support",
    ],
  },
  {
    title: "Networking and NOC",
    items: [
      "TCP/IP",
      "GPON",
      "Metro Ethernet",
      "EVPL",
      "IEPL monitoring",
      "Routing",
      "Network monitoring",
    ],
  },
  {
    title: "Network Security",
    items: [
      "Palo Alto Networks",
      "Fortinet",
      "Firewalls",
      "VPN",
      "WAN/LAN/WLAN",
      "Cisco",
      "Ubiquiti UniFi",
    ],
  },
  {
    title: "Web and Software Development",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "CMS and E-Commerce",
    items: [
      "WordPress",
      "WooCommerce",
      "Custom CMS",
      "Content management",
      "PayPal integration",
      "Stripe",
      "SendGrid",
    ],
  },
  {
    title: "CRM and Automation",
    items: [
      "CRM automation",
      "GoHighLevel",
      "Marketing automation",
      "ClickFunnels",
      "Lead management",
      "API development",
      "Business workflows",
    ],
  },
  {
    title: "AI and LLM Integration",
    items: [
      "GPT-5.6-Sol",
      "Gemini API",
      "AI-assisted workflows",
      "Prompt design",
      "API-based assistants",
      "Automation logic",
    ],
  },
  {
    title: "Infrastructure and Site Technology",
    items: [
      "CCTV",
      "DVR/NVR",
      "Point-to-point internet",
      "DWDM",
      "Huawei",
      "Juniper switches",
      "Hardware support",
    ],
  },
  {
    title: "Training and Documentation",
    items: [
      "Networking/CCNA Training",
      "Technical support",
      "CSS training",
      "Runbooks",
      "User handover",
      "Knowledge transfer",
    ],
  },
];

export const timelineItems = [
  {
    period: "January 2026 - Present",
    title: "Computer Systems Servicing Trainer | Damla Training Institute of Technology, Inc.",
    summary:
      "Delivers part-time practical instruction in computer hardware, operating-system installation, networking, preventive maintenance, and technical troubleshooting aligned with CSS competencies.",
  },
  {
    period: "October 2024 - Present",
    title: "IT Manager | Cottage Dream Vacations",
    summary:
      "Promoted from part-time Web Developer / Technical VA to full-time IT Manager, leading IT operations, digital infrastructure, system administration, security, support priorities, deployments, vendors, and business-system integrations.",
  },
  {
    period: "September 2022 - January 2025",
    title: "Network Operations Center Engineer | ViewQwest",
    summary:
      "Promoted from Network Support Engineer, monitoring enterprise infrastructure, handling incidents and outages, coordinating escalations, supporting corporate connectivity, and documenting network operations. This overlapped with part-time evening web and technical VA work for Cottage Dream Vacations.",
  },
  {
    period: "August 2022 - October 2024",
    title: "Part-time Web Developer / Technical VA | Cottage Dream Vacations",
    summary:
      "Worked part-time after ViewQwest shifts, building booking applications, business systems, internal tools, loyalty platforms, dashboards, middleware, automations, and web platform operations.",
  },
  {
    period: "July 2020 - August 2022",
    title: "Network Support Engineer | ViewQwest",
    summary:
      "Provided technical support for corporate connectivity incidents, service requests, client communication, ONU setups, VLANs, EVPL configurations, migrations, and backend NOC operations.",
  },
];

export const freelanceWork = {
  period: "Project-based",
  title: "Freelance IT Solutions Consultant",
  summary:
    "Plans and deploys CCTV solutions, network setups, VPN and point-to-point connectivity, web applications, business systems, automation, and integration work for selected independent projects.",
};

export const certificationItems = [
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Palo Alto Networks Certified Network Security Administrator - PCNSA",
    date: "Credential period Apr 2024 - Apr 2026",
    credentialId: "PAN00254220",
  },
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Firewall Essentials: Configuration and Management (EDU-210)",
    date: "Issued May 2023",
    credentialId: "259541864",
  },
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Fundamentals of SOC (Security Operations Center)",
    date: "Issued Apr 2023",
    credentialId: "254154928",
  },
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Fundamentals of Cloud Security",
    date: "Issued Apr 2023",
    credentialId: "254154135",
  },
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Network Security",
    date: "Issued Apr 2023",
    credentialId: "254152388",
  },
  {
    issuer: "Palo Alto Networks",
    issuerMark: "PAN",
    logoClass: "palo-alto",
    title: "Introduction to Cybersecurity",
    date: "Issued Apr 2023",
    credentialId: "254151880",
  },
  {
    issuer: "Google",
    issuerMark: "G",
    logoClass: "google",
    title: "Technical Support Fundamentals",
    date: "Completed",
    credentialId: "WJHQJB7YNMYZ",
  },
  {
    issuer: "Microsoft",
    issuerMark: "MS",
    logoClass: "microsoft",
    title: "Microsoft Technology Associate: Security Fundamentals (MTA)",
    date: "Issued Jan 2019",
    credentialId: "xDJC-s2cx",
  },
  {
    issuer: "Technical Education and Skills Development Authority",
    issuerMark: "TESDA",
    logoClass: "tesda",
    title: "Computer Systems Servicing NC II",
    date: "Completed",
    credentialId: "Professional credential",
  },
  {
    issuer: "Technical Education and Skills Development Authority",
    issuerMark: "TESDA",
    logoClass: "tesda",
    title: "Trainers Methodology Level I",
    date: "Completed",
    credentialId: "Professional credential",
  },
];

export const educationItems = [
  {
    school: "University of Mindanao",
    schoolMark: "UM",
    logoClass: "um",
    degree: "Master's degree, Information Technology",
    period: "Jan 2023 - Present",
    note: "Computer/Information Technology Administration and Management focus.",
  },
  {
    school: "University of Mindanao",
    schoolMark: "UM",
    logoClass: "um",
    degree: "Bachelor's degree, Computer Science",
    period: "Jun 2014 - Mar 2020",
    note: "Foundation in software development, systems, and computer networking.",
  },
  {
    school: "Mapua Malayan Colleges Mindanao",
    schoolMark: "MMCM",
    logoClass: "mapua",
    degree: "Bachelor of Science in Accountancy",
    period: "Jul 2020 - Nov 2023",
    note: "Earned units / second course with accounting and business context.",
  },
];

export const contentTodos = [
  "Paste the inaccessible ChatGPT profile/about content into this repository or chat if it should override the current About page copy.",
];
