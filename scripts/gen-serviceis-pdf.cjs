const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({ size: "A4", layout: "landscape", margin: 0 });
doc.pipe(fs.createWriteStream("ServiceIS_Brochure.pdf"));

const W = 841.89;
const H = 595.28;
const M = 50;

// ServiceIS palette: deep navy/black background, white text, silver accents
const BG = "#0D0D1A";        // near-black deep navy
const CARD = "#141428";      // slightly lighter card
const ACCENT = "#FFFFFF";    // white accent bar
const SILVER = "#B0B8C8";    // silver/light grey body text
const HEADING = "#FFFFFF";   // white headings
const SUB = "#6B7A99";       // muted blue-grey for labels
const FOOTER_BG = "#1A1A35"; // dark footer

function bg() { doc.rect(0, 0, W, H).fill(BG); }
function topBar() { doc.rect(0, 0, W, 6).fill(ACCENT); }
function footer() {
  doc.rect(0, H - 30, W, 30).fill(FOOTER_BG);
  doc.rect(0, H - 30, W, 2).fill(ACCENT);
  doc.fontSize(10).fillColor(SILVER).font("Helvetica-Bold")
    .text("ServiceIS  |  serviceisng.com", 0, H - 19, { align: "center", width: W });
}
function pageTitle(label, title) {
  doc.fontSize(8).fillColor(SUB).font("Helvetica-Bold")
    .text(label.toUpperCase(), M, 20, { characterSpacing: 1.5 });
  doc.fontSize(26).fillColor(HEADING).font("Helvetica-Bold")
    .text(title, M, 34, { width: W - M * 2 });
  doc.rect(M, 72, W - M * 2, 1).fill(ACCENT);
}
function bullet(title, desc, y) {
  doc.rect(M, y + 4, 3, 18).fill(ACCENT);
  doc.fontSize(13).fillColor(HEADING).font("Helvetica-Bold")
    .text(title, M + 14, y, { width: W - M * 2 - 14 });
  if (desc) {
    doc.fontSize(11).fillColor(SILVER).font("Helvetica")
      .text(desc, M + 14, y + 20, { width: W - M * 2 - 14 });
  }
  return y + (desc ? 52 : 32);
}

const LOGO = path.resolve(__dirname, "../src/assets/SIS-TRT-B-.png");

// ── PAGE 1: COVER ─────────────────────────────────────────────────────────────
bg(); topBar();
doc.rect(W - 70, 0, 70, H).fillOpacity(0.04).fill(ACCENT).fillOpacity(1);
if (fs.existsSync(LOGO)) doc.image(LOGO, M, 24, { width: 160 });
doc.fontSize(40).fillColor(HEADING).font("Helvetica-Bold").text("Your Digital Life.", M, 160, { width: 420 });
doc.fontSize(40).fillColor(SILVER).font("Helvetica-Bold").text("Managed For You.", M, 208, { width: 420 });
doc.fontSize(14).fillColor(SUB).font("Helvetica").text("Discreet. Secure. Effortless.", M, 264, { width: 420 });
doc.rect(M, 310, 3, 80).fill(ACCENT);
doc.fontSize(11).fillColor(SILVER).font("Helvetica")
  .text("ServiceIS is a premium personal IT concierge service — handling your devices, connectivity and digital life with discretion and care.", M + 14, 314, { width: 400 });
doc.fontSize(12).fillColor(HEADING).font("Helvetica-Bold").text("serviceisng.com", M, 420);
footer();

// ── PAGE 2: WHAT WE DO ────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Our Services", "What We Do");
var y = 86;
var svcs = [
  { t: "Device Procurement, Setup & Delivery", d: "Sourced, configured and delivered — ready to use from day one. No setup stress." },
  { t: "Fast, Discreet Repairs & Upgrades", d: "We come to you. No disruption to your day, no carrying devices across town." },
  { t: "Home & Lifestyle IT Setup", d: "Wi-Fi, smart devices and seamless connectivity set up at your home or office." },
  { t: "Secure Pickup & Delivery", d: "Full accountability on every device we handle — documented and tracked end to end." },
  { t: "Personal IT Audit & Digital Asset Inventory", d: "Know exactly what you own, what is at risk and what needs immediate attention." },
  { t: "Annual Personal IT Governance & Risk Assessment", d: "Structured annual review to keep your digital life protected and fully optimised." },
];
svcs.forEach(function(s) { y = bullet(s.t, s.d, y); });
footer();

// ── PAGE 3: PROBLEMS ──────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("The Challenge", "The Problems No One Talks About");
y = 86;
var probs = [
  { t: "No one to trust with your personal device and data", d: "Handing your device to a stranger is a real risk — data, privacy and hardware all exposed." },
  { t: "Having to leave work just to find a technician", d: "Your time is valuable. You should not have to chase repairs or wait in queues." },
  { t: "Inconsistent pricing — never know what is fair", d: "No transparency, no fixed rates — you are always guessing what the bill will be." },
  { t: "Damage disputes — your word vs theirs", d: "Technician broke something and now there is no paper trail to protect you." },
  { t: "Technician availability uncertainty", d: "Will they still be around when you need them again? No consistency, no loyalty." },
  { t: "No pickup or delivery — you carry the problem", d: "Inconvenient and time-consuming. You do all the work just to get help." },
  { t: "Feeling like just another walk-in", d: "No dedicated support, no priority — you are not a valued client, just a number." },
];
probs.forEach(function(p) { y = bullet(p.t, p.d, y); });
footer();

// ── PAGE 4: HOW WE COME IN ────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Our Approach", "How We Eliminate These Problems");
y = 86;
var pillars = [
  { t: "Trust", d: "Vetted, discreet technicians with full data accountability on every visit. Your privacy is always protected." },
  { t: "Convenience", d: "We come to you. Pickup and delivery included — no disruption to your schedule whatsoever." },
  { t: "Consistency", d: "Transparent pricing, the same trusted team, every single time. No surprises, no guessing." },
];
pillars.forEach(function(p) {
  doc.rect(M, y, W - M * 2, 110).fill(CARD);
  doc.rect(M, y, 3, 110).fill(ACCENT);
  doc.fontSize(18).fillColor(HEADING).font("Helvetica-Bold").text(p.t, M + 16, y + 14, { width: W - M * 2 - 28 });
  doc.rect(M + 16, y + 44, 70, 1).fill(SILVER);
  doc.fontSize(11).fillColor(SILVER).font("Helvetica").text(p.d, M + 16, y + 56, { width: W - M * 2 - 32 });
  y += 126;
});
footer();

// ── PAGE 5: WHO IT'S FOR ──────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Target Clients", "Made For");
y = 86;
var types = [
  { t: "Executives & Founders", d: "Busy professionals who need their digital life handled without lifting a finger." },
  { t: "High-Net-Worth Individuals", d: "Premium clients who expect discretion, quality and reliability in every interaction." },
  { t: "Families & Premium Residences", d: "Complete home IT setup, smart devices and ongoing support for the whole household." },
  { t: "Professionals Who Value Time & Privacy", d: "Anyone who understands that their time and data are too valuable to leave to chance." },
];
types.forEach(function(t) { y = bullet(t.t, t.d, y); });
footer();

// ── PAGE 6: MEMBERSHIP ────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Membership", "You Are a Member, Not Just a Customer");
y = 86;
var bens = [
  { t: "Dedicated IT Concierge", d: "One trusted contact for everything — devices, repairs, setup and advice. Always available, always consistent." },
  { t: "Priority Response", d: "No waiting, no searching for a technician. You are always first in line, every single time." },
  { t: "Proactive Digital Management", d: "We stay ahead of issues so you never have to deal with them. Handled before it becomes a problem." },
];
bens.forEach(function(b) {
  doc.rect(M, y, W - M * 2, 110).fill(CARD);
  doc.rect(M, y, 3, 110).fill(ACCENT);
  doc.fontSize(16).fillColor(HEADING).font("Helvetica-Bold").text(b.t, M + 16, y + 14, { width: W - M * 2 - 28 });
  doc.rect(M + 16, y + 44, 60, 1).fill(SILVER);
  doc.fontSize(11).fillColor(SILVER).font("Helvetica").text(b.d, M + 16, y + 56, { width: W - M * 2 - 32 });
  y += 126;
});
footer();

// ── PAGE 7: ANNUAL AUDIT ──────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Annual Service", "Annual Personal IT Audit & Governance");
y = 86;
doc.fontSize(13).fillColor(HEADING).font("Helvetica-Bold").text("What It Covers", M, y); y += 22;
["Personal device inventory", "Digital asset review", "Security & privacy check", "Data backup audit"].forEach(function(c) {
  doc.rect(M, y + 3, 3, 14).fill(ACCENT);
  doc.fontSize(12).fillColor(SILVER).font("Helvetica").text(c, M + 14, y, { width: W - M * 2 - 14 });
  y += 28;
});
y += 20;
doc.rect(M, y, W - M * 2, 1).fill(SILVER); y += 18;
doc.fontSize(13).fillColor(HEADING).font("Helvetica-Bold").text("Why It Matters", M, y); y += 22;
["Peace of mind — know you are protected at all times", "Stay ahead of digital threats before they become problems", "Know the full value of what you own digitally", "Plan upgrades and replacements with confidence"].forEach(function(m) {
  doc.rect(M, y + 3, 3, 14).fill(SILVER);
  doc.fontSize(12).fillColor(SILVER).font("Helvetica").text(m, M + 14, y, { width: W - M * 2 - 14 });
  y += 28;
});
footer();

// ── PAGE 8: CTA ───────────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Get Started", "Your Digital Life Starts Here");
doc.fontSize(12).fillColor(SILVER).font("Helvetica")
  .text("ServiceIS operates on a private membership basis. We onboard a select number of clients each quarter.", M, 86, { width: W - M * 2 });

var steps = ["Make a Service Request", "Receive Your Reference Number", "We Reach Out & Onboard You"];
var stY = 140;
var sw = (W - M * 2 - 40) / 3;
steps.forEach(function(st, i) {
  var x = M + i * (sw + 20);
  doc.circle(x + sw / 2, stY + 30, 28).fill(ACCENT);
  doc.fontSize(20).fillColor(BG).font("Helvetica-Bold").text(String(i + 1), x + sw / 2 - 7, stY + 18);
  doc.fontSize(13).fillColor(HEADING).font("Helvetica-Bold").text(st, x, stY + 72, { width: sw, align: "center" });
  if (i < 2) doc.rect(x + sw + 2, stY + 28, 16, 3).fill(SILVER);
});
doc.fontSize(16).fillColor(HEADING).font("Helvetica-Bold")
  .text("serviceisng.com", 0, stY + 160, { align: "center", width: W });
if (fs.existsSync(LOGO)) doc.image(LOGO, W / 2 - 90, stY + 190, { width: 180 });
footer();

doc.end();
console.log("ServiceIS PDF done");
