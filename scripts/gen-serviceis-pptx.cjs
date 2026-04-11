const PptxGenJS = require("pptxgenjs");
const path = require("path");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";

const BLUE = "0A1F44";
const TEAL = "007B7F";
const GOLD = "C9A84C";
const WHITE = "FFFFFF";
const LIGHT = "E8EDF5";

const LOGO = path.resolve(__dirname, "../src/assets/SIS-TRT-B-.png");

function addLogo(slide) {
  slide.addImage({ path: LOGO, x: 0.3, y: 0.15, w: 1.6, h: 0.55 });
}

function bgSlide() {
  const s = pptx.addSlide();
  s.background = { color: BLUE };
  return s;
}

function goldBar(slide) {
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0.08, w: 10, h: 0.06, fill: { color: GOLD }, line: { color: GOLD } });
}

// â”€â”€ SLIDE 1: Title â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addShape(pptx.ShapeType.rect, { x: 7.5, y: 0, w: 2.5, h: 7.5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, transparency: 85 } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 6.9, w: 10, h: 0.6, fill: { color: GOLD, transparency: 70 }, line: { color: GOLD, transparency: 70 } });
  s.addText("Your Digital Life. Managed For You.", { x: 0.5, y: 2.2, w: 7, h: 1.4, fontSize: 34, bold: true, color: WHITE, fontFace: "Montserrat" });
  s.addText("Discreet. Secure. Effortless.", { x: 0.5, y: 3.7, w: 7, h: 0.6, fontSize: 16, color: GOLD, fontFace: "Montserrat", italic: true });
  s.addText("serviceisng.com", { x: 0.5, y: 6.8, w: 4, h: 0.35, fontSize: 11, color: LIGHT, fontFace: "Montserrat", transparency: 40 });
}

// â”€â”€ SLIDE 2: What We Do â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("What We Do", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const cards = [
    { title: "Device Procurement, Setup & Delivery", body: "Ready to use from day one â€” sourced, configured and delivered." },
    { title: "Fast, Discreet Repairs & Upgrades", body: "We come to you. No disruption to your day." },
    { title: "Home & Lifestyle IT Setup", body: "Wi-Fi, smart devices and seamless connectivity at home." },
    { title: "Secure Pickup, Delivery & On-site Service", body: "Full accountability on every device we handle." },
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
  s.addText("The Problems No One Talks About", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 26, bold: true, color: WHITE, fontFace: "Montserrat" });

  const problems = [
    { icon: "ðŸ”", title: "No One to Trust", desc: "Handing your personal device and data to a stranger is a real risk." },
    { icon: "ðŸƒ", title: "Leaving Work for a Technician", desc: "Your time is valuable â€” you shouldn't have to chase repairs." },
    { icon: "ðŸ’¸", title: "Inconsistent Pricing", desc: "Never knowing what's fair â€” no transparency, no trust." },
    { icon: "âš ï¸", title: "Damage Disputes", desc: "Technician broke something â€” now it's your word vs theirs." },
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
  s.addText("You Deserve Better", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const points = [
    "Technician availability uncertainty â€” will they still be around?",
    "No pickup or delivery â€” you carry the problem to them",
    "Feeling like just another walk-in, not a valued client",
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
    { title: "Trust", body: "Vetted, discreet technicians with full data accountability on every visit." },
    { title: "Convenience", body: "We come to you. Pickup and delivery included â€” no disruption." },
    { title: "Consistency", body: "Transparent pricing, the same trusted team, every single time." },
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
  s.addText("Everything Handled For You", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 26, bold: true, color: WHITE, fontFace: "Montserrat" });

  const services = [
    "ðŸ“¦  Device sourcing, configuration & delivery",
    "ðŸ”§  Repairs, upgrades & device swaps",
    "ðŸ   Home Wi-Fi, smart devices & connectivity setup",
    "ðŸšš  Secure pickup & delivery with full accountability",
    "ðŸ“‹  Personal IT audit & digital asset inventory",
    "ðŸ›¡ï¸  Annual Personal IT Governance & Risk Assessment",
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
  s.addText("Made For", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 28, bold: true, color: WHITE, fontFace: "Montserrat" });

  const types = ["Executives & Founders", "High-Net-Worth Individuals", "Families & Premium Residences", "Professionals Who Value Time & Privacy"];
  const icons = ["ðŸ’¼", "ðŸ’Ž", "ðŸ¡", "â±ï¸"];
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
  s.addText("You Are a Member, Not Just a Customer", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 24, bold: true, color: WHITE, fontFace: "Montserrat" });

  const benefits = [
    { title: "Dedicated IT Concierge", body: "One trusted contact for everything â€” devices, repairs, setup, advice." },
    { title: "Priority Response", body: "No waiting, no searching. You are always first in line." },
    { title: "Proactive Digital Management", body: "Handled before it becomes a problem â€” we stay ahead for you." },
  ];
  benefits.forEach((b, i) => {
    const y = 1.8 + i * 1.6;
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y, w: 0.12, h: 1.2, fill: { color: TEAL }, line: { color: TEAL } });
    s.addText(b.title, { x: 0.7, y: y + 0.05, w: 8.8, h: 0.4, fontSize: 14, bold: true, color: GOLD, fontFace: "Montserrat" });
    s.addText(b.body, { x: 0.7, y: y + 0.5, w: 8.8, h: 0.6, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 9: Annual Audit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Annual Personal IT Audit & Governance", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 22, bold: true, color: WHITE, fontFace: "Montserrat" });

  s.addText("What It Covers", { x: 0.4, y: 1.65, w: 4.4, h: 0.4, fontSize: 13, bold: true, color: TEAL, fontFace: "Montserrat" });
  ["Personal device inventory", "Digital asset review", "Security & privacy check", "Data backup audit"].forEach((c, i) => {
    s.addText("â€¢ " + c, { x: 0.4, y: 2.15 + i * 0.75, w: 4.4, h: 0.55, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });

  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 1.6, w: 0, h: 5.2, line: { color: GOLD, w: 1.5 } });

  s.addText("Why It Matters", { x: 5.3, y: 1.65, w: 4.4, h: 0.4, fontSize: 13, bold: true, color: TEAL, fontFace: "Montserrat" });
  ["Peace of mind â€” know you are protected", "Stay ahead of digital threats", "Know the value of what you own", "Plan upgrades with confidence"].forEach((m, i) => {
    s.addText("â€¢ " + m, { x: 5.3, y: 2.15 + i * 0.75, w: 4.4, h: 0.55, fontSize: 11, color: LIGHT, fontFace: "Montserrat" });
  });
}

// â”€â”€ SLIDE 10: CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
{
  const s = bgSlide();
  goldBar(s);
  addLogo(s);
  s.addText("Your Digital Life Starts Here", { x: 0.5, y: 0.85, w: 9, h: 0.6, fontSize: 30, bold: true, color: WHITE, fontFace: "Montserrat" });

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

  s.addText("ServicEIS operates on a private membership basis.\nWe onboard a select number of clients each quarter.", { x: 0.5, y: 4.2, w: 9, h: 0.7, fontSize: 12, color: GOLD, fontFace: "Montserrat", italic: true, align: "center" });
  s.addText("serviceisng.com", { x: 0.5, y: 5.2, w: 9, h: 0.5, fontSize: 18, bold: true, color: WHITE, fontFace: "Montserrat", align: "center" });
}

pptx.writeFile({ fileName: "ServiceIS_Presentation.pptx" }).then(() => console.log("ServiceIS PPTX done"));

