const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({ size: "A4", layout: "landscape", margin: 0 });
doc.pipe(fs.createWriteStream("ictweare_Brochure.pdf"));

const W = 841.89;
const H = 595.28;
const M = 50;
const BLUE = "#0A1F44";
const TEAL = "#007B7F";
const GOLD = "#C9A84C";
const WHITE = "#FFFFFF";
const LIGHT = "#C8D4E8";

function bg() { doc.rect(0, 0, W, H).fill(BLUE); }
function topBar() { doc.rect(0, 0, W, 6).fill(GOLD); }
function footer() {
  doc.rect(0, H - 30, W, 30).fill(GOLD);
  doc.fontSize(10).fillColor(BLUE).font("Helvetica-Bold")
    .text("ictweare  |  ictweare.com", 0, H - 19, { align: "center", width: W });
}
function pageTitle(label, title) {
  doc.fontSize(8).fillColor(TEAL).font("Helvetica-Bold")
    .text(label.toUpperCase(), M, 20, { characterSpacing: 1.5 });
  doc.fontSize(26).fillColor(WHITE).font("Helvetica-Bold")
    .text(title, M, 34, { width: W - M * 2 });
  doc.rect(M, 72, W - M * 2, 2).fill(GOLD);
}
function bullet(title, desc, y) {
  doc.rect(M, y + 4, 4, 18).fill(GOLD);
  doc.fontSize(13).fillColor(GOLD).font("Helvetica-Bold")
    .text(title, M + 14, y, { width: W - M * 2 - 14 });
  if (desc) {
    doc.fontSize(11).fillColor(LIGHT).font("Helvetica")
      .text(desc, M + 14, y + 20, { width: W - M * 2 - 14 });
  }
  return y + (desc ? 52 : 32);
}

const LOGO = path.resolve(__dirname, "../src/assets/ICT-WEARE--V2-TRT-b.png");

// ── PAGE 1: COVER ─────────────────────────────────────────────────────────────
bg(); topBar();
doc.rect(W - 70, 0, 70, H).fillOpacity(0.07).fill(TEAL).fillOpacity(1);
if (fs.existsSync(LOGO)) doc.image(LOGO, M, 24, { width: 160 });
doc.fontSize(40).fillColor(WHITE).font("Helvetica-Bold").text("Managed IT.", M, 160, { width: 420 });
doc.fontSize(40).fillColor(GOLD).font("Helvetica-Bold").text("Built for Business.", M, 208, { width: 420 });
doc.fontSize(14).fillColor(LIGHT).font("Helvetica").text("Infrastructure. Support. Governance. All handled.", M, 264, { width: 420 });
doc.rect(M, 310, 4, 80).fill(TEAL);
doc.fontSize(11).fillColor(LIGHT).font("Helvetica")
  .text("ictweare is a structured IT service company providing managed technology solutions for businesses.", M + 14, 314, { width: 400 });
doc.fontSize(12).fillColor(GOLD).font("Helvetica-Bold").text("ictweare.com", M, 420);
footer();

// ── PAGE 2: WHAT WE DO ────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Our Services", "What We Do");
var y = 86;
var svcs = [
  { t: "Device Procurement & Setup", d: "Sourcing, configuring and delivering business-ready devices — ready to use from day one." },
  { t: "Business IT Infrastructure & Connectivity", d: "Networks, servers and connectivity solutions built for your business operations." },
  { t: "Repairs, Upgrades & Technical Support", d: "Fast, reliable technical support — on-site and remote — when you need it most." },
  { t: "IT Governance & Risk Assessment", d: "Structured audits, documentation and risk management to keep your business protected." },
  { t: "Staff IT Support & Training", d: "Equipping your team with the knowledge and tools to work efficiently and securely." },
  { t: "Annual Business IT Audit", d: "A comprehensive annual review of your IT environment — devices, risks, access and performance." },
];
svcs.forEach(function(s) { y = bullet(s.t, s.d, y); });
footer();

// ── PAGE 3: PROBLEMS ──────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("The Challenge", "The Real Cost of Poor IT Support");
y = 86;
var probs = [
  { t: "No IT documentation", d: "Knowledge walks out with staff — no continuity, no records left behind." },
  { t: "Inconsistent charges", d: "No pricing transparency — you never know what to expect on the invoice." },
  { t: "System downtime", d: "Work delayed, productivity lost, revenue impacted every time something breaks." },
  { t: "No accountability", d: "Damage disputes with no paper trail to protect your business." },
  { t: "Fear of unknown technicians", d: "Leaving business gadgets with strangers is a real and serious risk." },
  { t: "No consistent IT partner", d: "Jumping between technicians — no loyalty, no consistency, no trust." },
  { t: "You are just another customer", d: "No dedicated support — you wait in line like everyone else." },
];
probs.forEach(function(p) { y = bullet(p.t, p.d, y); });
footer();

// ── PAGE 4: HOW WE COME IN ────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Our Approach", "How We Eliminate These Problems");
y = 86;
var pillars = [
  { t: "Consistency", d: "Fixed transparent pricing. Always know what to expect before work begins. No surprises, ever." },
  { t: "Accountability", d: "Full documentation, service agreements and reference tracking on every single job we do." },
  { t: "Reliability", d: "A dedicated IT partner — not a random technician. We are always here when you need us." },
];
pillars.forEach(function(p) {
  doc.rect(M, y, W - M * 2, 110).fill("#0D2550");
  doc.rect(M, y, 5, 110).fill(TEAL);
  doc.fontSize(18).fillColor(TEAL).font("Helvetica-Bold").text(p.t, M + 18, y + 14, { width: W - M * 2 - 30 });
  doc.rect(M + 18, y + 44, 70, 2).fill(GOLD);
  doc.fontSize(11).fillColor(LIGHT).font("Helvetica").text(p.d, M + 18, y + 56, { width: W - M * 2 - 36 });
  y += 126;
});
footer();

// ── PAGE 5: WHO IT'S FOR ──────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Target Clients", "Built For");
y = 86;
var types = [
  { t: "Hotels & Hospitality", d: "Reliable IT infrastructure and support for guest-facing and back-office operations." },
  { t: "Corporate Organizations", d: "Structured IT governance, device management and staff support at scale." },
  { t: "Real Estate & Property", d: "Connectivity, device setup and IT support across multiple sites and properties." },
  { t: "Growing Businesses & Startups", d: "Scalable IT solutions that grow with your business from day one." },
];
types.forEach(function(t) { y = bullet(t.t, t.d, y); });
footer();

// ── PAGE 6: MEMBERSHIP ────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Membership", "You Are Not Just a Customer");
y = 86;
var bens = [
  { t: "Priority Response", d: "No waiting, no begging for technicians. You are first in line, always — no exceptions." },
  { t: "Dedicated IT Concierge", d: "One consistent point of contact who knows your business inside out and is always available." },
  { t: "Proactive IT Management", d: "Issues caught and resolved before they cost you time or money. We stay ahead for you." },
];
bens.forEach(function(b) {
  doc.rect(M, y, W - M * 2, 110).fill("#0D2550");
  doc.rect(M, y, 5, 110).fill(TEAL);
  doc.fontSize(16).fillColor(GOLD).font("Helvetica-Bold").text(b.t, M + 18, y + 14, { width: W - M * 2 - 30 });
  doc.rect(M + 18, y + 44, 60, 2).fill(GOLD);
  doc.fontSize(11).fillColor(LIGHT).font("Helvetica").text(b.d, M + 18, y + 56, { width: W - M * 2 - 36 });
  y += 126;
});
footer();

// ── PAGE 7: ANNUAL AUDIT ──────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Annual Service", "Annual Business IT Audit & Governance");
y = 86;
doc.fontSize(13).fillColor(TEAL).font("Helvetica-Bold").text("What It Covers", M, y); y += 22;
["Device inventory & asset register", "Risk assessment & vulnerability check", "Staff access review", "System performance audit"].forEach(function(c) {
  doc.rect(M, y + 3, 4, 14).fill(GOLD);
  doc.fontSize(12).fillColor(LIGHT).font("Helvetica").text(c, M + 14, y, { width: W - M * 2 - 14 });
  y += 28;
});
y += 20;
doc.rect(M, y, W - M * 2, 2).fill(TEAL); y += 18;
doc.fontSize(13).fillColor(TEAL).font("Helvetica-Bold").text("Why It Matters", M, y); y += 22;
["Catch vulnerabilities before they escalate into costly problems", "Plan IT budgets with confidence and full visibility", "Stay compliant and audit-ready at all times", "Protect your business continuity and operations"].forEach(function(m) {
  doc.rect(M, y + 3, 4, 14).fill(TEAL);
  doc.fontSize(12).fillColor(LIGHT).font("Helvetica").text(m, M + 14, y, { width: W - M * 2 - 14 });
  y += 28;
});
footer();

// ── PAGE 8: CTA ───────────────────────────────────────────────────────────────
doc.addPage(); bg(); topBar();
pageTitle("Get Started", "Ready to Get Started?");
doc.fontSize(12).fillColor(LIGHT).font("Helvetica")
  .text("We onboard a select number of businesses each quarter.", M, 86, { width: W - M * 2 });

var steps = ["Make a Service Request", "Receive Your Reference Number", "We Reach Out & Onboard You"];
var stY = 140;
var sw = (W - M * 2 - 40) / 3;
steps.forEach(function(st, i) {
  var x = M + i * (sw + 20);
  doc.circle(x + sw / 2, stY + 30, 28).fill(GOLD);
  doc.fontSize(20).fillColor(BLUE).font("Helvetica-Bold").text(String(i + 1), x + sw / 2 - 7, stY + 18);
  doc.fontSize(13).fillColor(WHITE).font("Helvetica-Bold").text(st, x, stY + 72, { width: sw, align: "center" });
  if (i < 2) doc.rect(x + sw + 2, stY + 28, 16, 4).fill(GOLD);
});
doc.fontSize(16).fillColor(GOLD).font("Helvetica-Bold")
  .text("ictweare.com", 0, stY + 160, { align: "center", width: W });
if (fs.existsSync(LOGO)) doc.image(LOGO, W / 2 - 90, stY + 190, { width: 180 });
footer();

doc.end();
console.log("ictweare PDF done");
