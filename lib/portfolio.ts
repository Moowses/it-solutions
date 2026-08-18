export const siteUrl = "https://karlmosses.com";
export const ownerName = "Karl Mosses Banlasan";
export const location = "Davao City, Philippines";
export const contactEmail = "banlasan.m@gmail.com";
export const linkedInUrl = "https://www.linkedin.com/in/karl-mosses-banlasan-21aab8205/";
export const resumeHref = "/resume.pdf";

export const resumeRequestHref = `mailto:${contactEmail}?subject=Resume%20Request%20-%20Karl%20Mosses%20Banlasan`;
export const projectInquiryHref = `mailto:${contactEmail}?subject=IT%20Business%20Solutions%20Inquiry`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
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
