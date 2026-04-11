const PptxGenJS = require("pptxgenjs");
const path = require("path");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";

const BLUE = "0A1F44";
const TEAL = "007B7F";
const GOLD = "C9A84C";
const WHITE = "FFFFFF";
const LIGHT = "E8EDF5";

const LOGO = path.resolve(__dirname, "../src/assets/ICT-WEARE--V2-TRT-b.png");

function addLogo(slide) {
  slide.addImage({ path: LOGO, x: 0.3, y: 0.15, w: 1.6, h: 0.55 });
}

function bgSlide() {
  const s = pptx.addSlide();
  s.background = { color: BLUE };
  return s;
}

function goldBar(slide, y = 0.08) {
  slide.addShape(pptx.ShapeType.rect, { x: 0, y, w: 10, h: 0.06, fill: { color: GOLD }, line: { color: GOLD } });
}

// â”€â”€ SLIDE 1: Title â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addShape(pptx.ShapeType.rect, { x: 7.5, y: 0, w: 2.5, h: 7.5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, transparency: 85 } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 6.9, w: 10, h: 0.6, fill: { color: GOLD, transparency: 70 }, line: { color: GOLD, transparency: 70 } });
  s.addText("Managed IT. Built for Business.", { x: 0.5, y: 2.2, w: 7, h: 1.4, fontSize: 36, bold: true, color: WHITE, fontFace: "Montserrat", breakLine: false });
  s.addText("Infrastructure. Support. Governance. All handled.", { x: 0.5, y: 3.7, w: 7, h: 0.6, fontSize: 16, color: GOLD, fontFace: "Montserrat", italic: true });
  s.addText("ictweare.com", { x: 0.5, y: 6.8, w: 4, h: 0.35, fontSize: 11, color: LIGHT, fontFace: "Montserrat", transparency: 40 });
}

// â”€â”€ SLIDE 2: What We Do â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("What We Do", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const cards = [
    { title: "Device Procurement & Setup", body: "Sourcing, configuring and delivering business-ready devices." },
    { title: "IT Infrastructure & Connectivity", body: "Networks, servers and connectivity built for your operations." },
    { title: "Repairs, Upgrades & Support", body: "Fast technical support â€” on-site and remote." },
    { title: "IT Governance & Risk Assessment", body: "Structured audits, documentation and risk management." },
  ];
  const positions = [[0.4, 1.7], [5.2, 1.7], [0.4, 4.1], [5.2, 4.1]];
  cards.forEach((c, i) => {
    const [x, y] = positions[i];
    s.addShape(pptx.ShapeType.rect, { x, y, w: 4.4, h: 2.1, fill: { color: "0D2550" }, line: { color: GOLD, w: 1.5 } });
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45, fill: { color: TEAL }, line: { color: TEAL } });
    s.addText(c.title, { x: x + 0.7, y: y + 0.12, w: 3.5, h: 0.45, fontSize: 11, bold: true, color: GOLD, fontFace: "Montserrat" });
    s.addText(c.body, { x: x + 0.15, y: y + 0.65, w: 4.1, h: 1.2, fontSize: 10, color: LIGHT, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 3: Problems â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("The Real Cost of Poor IT Support", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 26, bold: true, color: WHITE, fontFace: "Montserrat" });

  const problems = [
    { icon: "ðŸ“„", title: "No IT Documentation", desc: "Knowledge walks out with staff â€” no continuity." },
    { icon: "ðŸ’¸", title: "Inconsistent Charges", desc: "No pricing transparency â€” you never know what to expect." },
    { icon: "â±", title: "System Downtime", desc: "Work delayed, productivity lost, revenue impacted." },
    { icon: "âš ï¸", title: "No Accountability", desc: "Damage disputes with no paper trail to protect you." },
  ];
  problems.forEach((p, i) => {
    const y = 1.7 + i * 1.2;
    s.addText(p.icon, { x: 0.4, y, w: 0.6, h: 0.6, fontSize: 20 });
    s.addText(p.title, { x: 1.1, y, w: 4, h: 0.35, fontSize: 12, bold: true, color: GOLD, fontFace: "Montserrat" });
    s.addText(p.desc, { x: 1.1, y: y + 0.38, w: 8.4, h: 0.5, fontSize: 10, color: LIGHT, fontFace: "Montserrat" });
    s.addShape(pptx.ShapeType.line, { x: 0.4, y: y + 0.95, w: 9.2, h: 0, line: { color: TEAL, w: 0.5, transparency: 60 } });
  });
}

// â”€â”€ SLIDE 4: More Problems â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Sound Familiar?", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const points = [
    "Fear of leaving business gadgets with unknown technicians",
    "Jumping between technicians â€” no loyalty, no consistency",
    "No reliable IT partner â€” you are just another customer",
  ];
  points.forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.8 + i * 1.5, w: 9, h: 1.2, fill: { color: "0D2550" }, line: { color: GOLD, w: 1 } });
    s.addText(`"${p}"`, { x: 0.8, y: 1.95 + i * 1.5, w: 8.4, h: 0.9, fontSize: 14, color: GOLD, fontFace: "Montserrat", italic: true });
  });
}

// â”€â”€ SLIDE 5: How We Come In â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("How We Eliminate These Problems", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 24, bold: true, color: WHITE, fontFace: "Montserrat" });

  const cols = [
    { title: "Consistency", body: "Fixed transparent pricing. Always know what to expect before work begins." },
    { title: "Accountability", body: "Full documentation, service agreements and reference tracking on every job." },
    { title: "Reliability", body: "A dedicated IT partner â€” not a random technician you found online." },
  ];
  cols.forEach((c, i) => {
    const x = 0.4 + i * 3.2;
    s.addShape(pptx.ShapeType.rect, { x, y: 1.7, w: 3, h: 4.8, fill: { color: "0D2550" }, line: { color: TEAL, w: 1.5 } });
    s.addText(c.title, { x, y: 1.85, w: 3, h: 0.5, fontSize: 14, bold: true, color: TEAL, fontFace: "Montserrat", align: "center" });
    s.addShape(pptx.ShapeType.line, { x: x + 0.3, y: 2.45, w: 2.4, h: 0, line: { color: GOLD, w: 1 } });
    s.addText(c.body, { x: x + 0.15, y: 2.6, w: 2.7, h: 3.5, fontSize: 11, color: WHITE, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 6: Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Everything Your Business Needs", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 26, bold: true, color: WHITE, fontFace: "Montserrat" });

  const services = [
    "ðŸ“¦  Device procurement, configuration & delivery",
    "ðŸ”§  On-site & remote technical support",
    "ðŸŒ  Network, connectivity & infrastructure setup",
    "ðŸ‘¥  Staff IT support & training",
    "ðŸ”’  Secure device logistics",
    "ðŸ“‹  Annual Business IT Audit & Governance Risk Assessment",
  ];
  const half = Math.ceil(services.length / 2);
  services.forEach((svc, i) => {
    const col = i < half ? 0 : 1;
    const row = i < half ? i : i - half;
    const x = 0.4 + col * 4.8;
    const y = 1.7 + row * 1.1;
    s.addShape(pptx.ShapeType.rect, { x, y, w: 4.4, h: 0.85, fill: { color: "0D2550" }, line: { color: TEAL, w: 0.8 } });
    s.addText(svc, { x: x + 0.15, y: y + 0.15, w: 4.1, h: 0.55, fontSize: 10.5, color: WHITE, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 7: Who It's For â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Built For", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const types = ["Hotels & Hospitality", "Corporate Organizations", "Real Estate & Property", "Growing Businesses & Startups"];
  const icons = ["ðŸ¨", "ðŸ¢", "ðŸ—ï¸", "ðŸš€"];
  const pos = [[0.4, 2.0], [5.2, 2.0], [0.4, 4.5], [5.2, 4.5]];
  types.forEach((t, i) => {
    const [x, y] = pos[i];
    s.addShape(pptx.ShapeType.rect, { x, y, w: 4.4, h: 1.8, fill: { color: "0D2550" }, line: { color: GOLD, w: 2 } });
    s.addText(icons[i], { x: x + 0.2, y: y + 0.2, w: 0.7, h: 0.7, fontSize: 22 });
    s.addText(t, { x: x + 1.0, y: y + 0.35, w: 3.2, h: 0.9, fontSize: 13, bold: true, color: WHITE, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 8: Membership â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("You Are Not Just a Customer", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 26, bold: true, color: WHITE, fontFace: "Montserrat" });

  const benefits = [
    { title: "Priority Response", body: "No waiting, no begging for technicians. You are first in line." },
    { title: "Dedicated IT Concierge", body: "One consistent point of contact who knows your business." },
    { title: "Proactive IT Management", body: "Issues caught and resolved before they cost you time or money." },
  ];
  benefits.forEach((b, i) => {
    const y = 1.8 + i * 1.6;
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y, w: 0.12, h: 1.2, fill: { color: TEAL }, line: { color: TEAL } });
    s.addText(b.title, { x: 0.7, y: y + 0.05, w: 8.8, h: 0.4, fontSize: 14, bold: true, color: GOLD, fontFace: "Montserrat" });
    s.addText(b.body, { x: 0.7, y: y + 0.5, w: 8.8, h: 0.6, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 9: Annual IT Audit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Annual Business IT Audit & Governance", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 22, bold: true, color: WHITE, fontFace: "Montserrat" });

  s.addText("What It Covers", { x: 0.4, y: 1.65, w: 4.4, h: 0.4, fontSize: 13, bold: true, color: TEAL, fontFace: "Montserrat" });
  const covers = ["Device inventory & asset register", "Risk assessment & vulnerability check", "Staff access review", "System performance audit"];
  covers.forEach((c, i) => {
    s.addText("â€¢ " + c, { x: 0.4, y: 2.15 + i * 0.75, w: 4.4, h: 0.55, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });

  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 1.6, w: 0, h: 5.2, line: { color: GOLD, w: 1.5 } });

  s.addText("Why It Matters", { x: 5.3, y: 1.65, w: 4.4, h: 0.4, fontSize: 13, bold: true, color: TEAL, fontFace: "Montserrat" });
  const matters = ["Catch vulnerabilities before they escalate", "Plan IT budgets with confidence", "Stay compliant and audit-ready", "Protect your business continuity"];
  matters.forEach((m, i) => {
    s.addText("â€¢ " + m, { x: 5.3, y: 2.15 + i * 0.75, w: 4.4, h: 0.55, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 10: CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Ready to Get Started?", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 30, bold: true, color: WHITE, fontFace: "Montserrat" });

  const steps = [
    { num: "1", label: "Make a Service Request" },
    { num: "2", label: "Receive Your Reference Number" },
    { num: "3", label: "We Reach Out & Onboard You" },
  ];
  steps.forEach((st, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pptx.ShapeType.ellipse, { x, y: 2.0, w: 0.7, h: 0.7, fill: { color: GOLD }, line: { color: GOLD } });
    s.addText(st.num, { x, y: 2.0, w: 0.7, h: 0.7, fontSize: 16, bold: true, color: BLUE, fontFace: "Montserrat", align: "center", valign: "middle" });
    s.addText(st.label, { x: x - 0.3, y: 2.85, w: 1.4, h: 0.8, fontSize: 10, color: WHITE, fontFace: "Montserrat", align: "center" });
    if (i < 2) {
      s.addShape(pptx.ShapeType.line, { x: x + 0.75, y: 2.35, w: 2.3, h: 0, line: { color: GOLD, w: 1.5 } });
    }
  });

  s.addText("We onboard a select number of businesses each quarter.", { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 12, color: GOLD, fontFace: "Montserrat", italic: true, align: "center" });
  s.addText("ictweare.com", { x: 0.5, y: 5.2, w: 9, h: 0.5, fontSize: 18, bold: true, color: WHITE, fontFace: "Montserrat", align: "center" });
}

pptx.writeFile({ fileName: "ictweare_Presentation.pptx" }).then(() => console.log("ictweare PPTX done"));

