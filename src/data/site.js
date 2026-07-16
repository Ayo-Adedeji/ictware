// Shared site content — reused across Home, Services, About, Contact.

export const SERVICE_CATEGORIES = [
  {
    id: "it-support",
    title: "IT Support & Managed Services",
    short: "Ongoing helpdesk, monitoring, and maintenance so issues are fixed before they interrupt your team.",
    description:
      "Ongoing helpdesk, remote and on-site troubleshooting, proactive monitoring, and system maintenance so issues get fixed before they interrupt your team.",
    includes: ["helpdesk support", "remote fixes", "on-site engineers", "patching & updates", "incident response"],
    glyph: "support",
  },
  {
    id: "networking",
    title: "Networking, Cabling & Connectivity",
    short: "Structured cabling and wired/wireless network design built to scale with your business.",
    description:
      "Structured cabling, wired and wireless network design, and connectivity setup built to scale with your business.",
    includes: ["structured cabling", "LAN/WAN setup", "WiFi design", "router/switch configuration", "VoIP"],
    glyph: "network",
  },
  {
    id: "cctv",
    title: "CCTV & Security Systems",
    short: "End-to-end surveillance and access control, designed, installed, and maintained.",
    description:
      "End-to-end surveillance and access control, designed, installed, and maintained.",
    includes: ["CCTV installation", "access control", "remote monitoring setup", "system maintenance"],
    glyph: "security",
  },
  {
    id: "procurement",
    title: "Procurement & Installations",
    short: "We manage ICT purchasing, logistics, and installation, the right equipment, on time.",
    description:
      "We manage ICT purchasing, logistics, and installation, so you get the right equipment on time, without vendor back-and-forth.",
    includes: ["hardware/software sourcing", "logistics", "delivery", "installation", "setup & configuration"],
    glyph: "procurement",
  },
  {
    id: "retail",
    title: "Retail & Inventory Systems",
    short: "POS and inventory systems for retail, built for accuracy and uptime.",
    description:
      "Point-of-sale and inventory management systems for supermarkets and retail operations, built for accuracy and uptime.",
    includes: ["POS setup", "inventory/stock systems", "till & barcode hardware", "staff training"],
    glyph: "retail",
  },
  {
    id: "software",
    title: "Custom Software Development",
    short: "Bespoke software built around how your business actually works.",
    description:
      "Bespoke software built around how your business actually works, from internal tools to customer-facing platforms.",
    includes: ["custom applications", "systems integration", "ongoing support & upgrades"],
    glyph: "software",
  },
  {
    id: "iot",
    title: "IoT, Smart Home & Automation",
    short: "Connected devices and automation that make homes and workplaces run themselves.",
    description:
      "Smart home and workplace automation, from connected devices and sensors to control systems that tie your environment together.",
    includes: ["smart devices", "sensors & controllers", "automation setup", "integration & support"],
    glyph: "iot",
  },
  {
    id: "consultancy",
    title: "Consultancy & Training",
    short: "Expert advice and hands-on training so your team can do more with ICT.",
    description:
      "ICT consultancy and training, giving you clear guidance and a team that knows how to get the most from your technology.",
    includes: ["ICT strategy", "technology audits", "staff training", "ongoing advisory"],
    glyph: "consultancy",
  },
];

export const BRANDS = ["Cisco", "TP-Link", "Samsung", "Palo Alto Networks", "Apple", "Grandstream"];

export const PROCESS_STEPS = [
  {
    title: "Create a Request",
    desc: "Tell us what you need: a device, an installation, a repair, or a full ICT project.",
  },
  {
    title: "Scope & Quote",
    desc: "We assess the requirement and provide a clear, transparent quote before any work begins.",
  },
  {
    title: "Assign & Manage",
    desc: "We coordinate every technician, supplier, and moving part. You deal with one contact.",
  },
  {
    title: "Deliver & Track",
    desc: "We deliver, keep you updated throughout, and stay available after the job is done.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Reliable from start to finish. What stood out most was the communication, we always knew what stage our request was at.",
    author: "Operations Manager, SME",
  },
  {
    quote:
      "Instead of dealing with multiple vendors, we worked with one team that took full responsibility.",
    author: "Finance & Microfinance Client",
  },
  {
    quote: "They don't disappear after delivery. That level of care builds trust.",
    author: "NGO Project Coordinator",
  },
];

export const CONTACT = {
  phoneUK: "+44 7745 320304",
  email: "info@ictweare.com",
  hours: "Mon–Fri 9:00–17:00, Sat 10:00–14:00, Sun closed (emergency by arrangement)",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ictware" },
  { label: "Instagram", href: "https://instagram.com/ictware" },
  { label: "TikTok", href: "https://tiktok.com/@ictware" },
];
