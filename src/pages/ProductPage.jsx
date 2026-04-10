import { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import html2pdf from "html2pdf.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, formatPrice } from "../data/products";
import logo from "../assets/ICT-WEARE--V2-TRT-b.png";

const IS_TEST_MODE = false;
const TEST_AMOUNT = 100;
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

function generateInvoiceId() {
  return "ICT-" + Math.random().toString(36).substring(2, 7).toUpperCase();
}

function InvoiceCard({ invoice, product, onPay, onDownload, paying }) {
  const displayAmount = IS_TEST_MODE ? TEST_AMOUNT : product.price;
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const isPaid = invoice.status === "paid";

  return (
    <div id="invoice-document" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">

      {/* HEADER */}
      <div className="bg-[#0D1B2A] px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <img src={logo} alt="ictweare" className="h-10 w-auto" />
          <p className="text-white/40 text-xs mt-1 tracking-wide">Digital IT Services</p>
        </div>
        <div className="text-left sm:text-right space-y-1">
          <p className="font-display font-black text-[#C89B2A] text-lg tracking-wide">{invoice.id}</p>
          <p className="text-white/40 text-xs">Date: {today}</p>
          <p className="text-white/40 text-xs">Event: Digital Bridges 2026</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
            isPaid
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-[#C89B2A]/20 text-[#C89B2A] border border-[#C89B2A]/30"
          }`}>
            {isPaid ? "Paid" : "Pending Payment"}
          </span>
        </div>
      </div>

      {/* BILLING */}
      <div className="px-6 sm:px-8 py-5 grid grid-cols-2 gap-6 border-b border-gray-100 bg-[#F8FAFC]">
        <div>
          <p className="text-[#0E8E8E] text-xs uppercase tracking-widest font-black mb-2">Billed To</p>
          <p className="font-display font-black text-[#0D1B2A] text-sm">Guest User</p>
          <p className="text-gray-400 text-xs mt-0.5">Digital Bridges Attendee</p>
        </div>
        <div>
          <p className="text-[#0E8E8E] text-xs uppercase tracking-widest font-black mb-2">Issued By</p>
          <p className="font-display font-black text-sm">
            <span className="text-[#C89B2A]">ict</span><span className="text-[#0D1B2A]">weare</span>
          </p>
          <p className="text-gray-400 text-xs mt-0.5">www.ictweare.com</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="px-6 sm:px-8 py-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F0F6FF]">
              <th className="text-left text-[#1A4F8A] text-xs uppercase tracking-widest font-black px-3 py-3">Item</th>
              <th className="text-left text-[#1A4F8A] text-xs uppercase tracking-widest font-black px-3 py-3 hidden sm:table-cell">Description</th>
              <th className="text-center text-[#1A4F8A] text-xs uppercase tracking-widest font-black px-3 py-3">Qty</th>
              <th className="text-right text-[#1A4F8A] text-xs uppercase tracking-widest font-black px-3 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-3 py-4 font-display font-black text-[#0D1B2A] text-sm">{product.name}</td>
              <td className="px-3 py-4 hidden sm:table-cell text-gray-500 text-xs">{product.specs.join(" / ")}</td>
              <td className="px-3 py-4 text-center font-bold text-[#0D1B2A]">1</td>
              <td className="px-3 py-4 text-right font-display font-black text-[#1A4F8A]">
                {formatPrice(displayAmount)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}
      <div className="px-6 sm:px-8 pb-5">
        <div className="ml-auto w-full sm:w-64 space-y-2 border-t border-gray-100 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span className="font-semibold text-[#0D1B2A]">{formatPrice(displayAmount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">VAT</span>
            <span className="font-semibold text-[#0D1B2A]">N/A</span>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 pt-3">
            <span className="font-display font-black text-[#0D1B2A] text-base">Total</span>
            <span className="font-display font-black text-[#1A4F8A] text-xl">{formatPrice(displayAmount)}</span>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      {!isPaid && (
        <div className="px-6 sm:px-8 pb-6 flex gap-3">
          <motion.button
            onClick={onPay}
            disabled={paying}
            whileHover={!paying ? { scale: 1.02, boxShadow: "0 0 20px rgba(26,79,138,0.25)" } : {}}
            whileTap={!paying ? { scale: 0.98 } : {}}
            className="flex-1 bg-[#1A4F8A] text-white font-bold py-3.5 rounded-xl hover:bg-[#0E8E8E] transition-colors text-sm tracking-wide disabled:opacity-60 cursor-pointer"
          >
            {paying ? "Opening payment..." : "Pay Now"}
          </motion.button>
          <button
            onClick={onDownload}
            className="px-5 py-3.5 border border-[#1A4F8A]/20 text-[#1A4F8A] font-bold rounded-xl hover:bg-[#F0F6FF] transition-colors text-sm cursor-pointer whitespace-nowrap"
          >
            Download Invoice
          </button>
        </div>
      )}

      {/* FOOTER */}
      <div className="bg-[#F8FAFC] border-t border-gray-100 px-6 sm:px-8 py-4 text-center space-y-0.5">
        <p className="text-[#1A4F8A] text-xs font-bold">www.ictweare.com</p>
        <p className="text-gray-400 text-xs">Digital Bridges 2026</p>
        <p className="text-gray-300 text-xs italic">Structured IT. Clear Process. Reliable Execution.</p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const invoiceRef = useRef(null);
  const emailRef = useRef(null);

  const [activeImg, setActiveImg] = useState(0);
  const [invoice, setInvoice] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [paying, setPaying] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Product not found.</p>
          <Link to="/live-sales" className="text-[#1A4F8A] font-bold underline">Back to Live Sales</Link>
        </div>
      </div>
    );
  }

  const handleGenerateInvoice = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      emailRef.current?.focus();
      return;
    }
    setEmailError(false);
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 1500));
    setInvoice({ id: generateInvoiceId(), status: "pending" });
    setGenerating(false);
    setTimeout(() => invoiceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  };

  const handleDownload = () => {
    const element = document.getElementById("invoice-document");
    if (!element) return;
    html2pdf().set({
      margin: [10, 10, 10, 10],
      filename: `ictweare-invoice-${invoice.id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).from(element).save();
  };

  const launchPaystack = () => {
    setPaying(true);
    const amount = IS_TEST_MODE ? TEST_AMOUNT * 100 : product.price * 100;
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount,
      currency: "NGN",
      ref: invoice.id,
      metadata: { product_name: product.name, invoice_id: invoice.id },
      onClose() { setPaying(false); },
      callback(response) {
        setInvoice((prev) => ({ ...prev, status: "paid" }));
        setPaying(false);
        setTimeout(() => {
          navigate("/payment-success", {
            state: {
              productName: product.name,
              amount: IS_TEST_MODE ? TEST_AMOUNT : product.price,
              reference: response.reference,
              invoiceId: invoice.id,
            },
          });
        }, 800);
      },
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link to="/live-sales" className="inline-flex items-center gap-2 text-[#1A4F8A] text-sm font-semibold mb-8 hover:text-[#0E8E8E] transition-colors">
          Back to Live Sales
        </Link>

        {/* PRODUCT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#1A4F8A]/10 shadow-sm aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors cursor-pointer ${activeImg === i ? "border-[#C89B2A]" : "border-transparent"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col">
            <p className="text-[#0E8E8E] text-xs uppercase tracking-widest font-bold mb-2">Digital Bridges Summit</p>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0D1B2A] leading-tight tracking-tight mb-4">{product.name}</h1>
            <p className="font-display font-black text-3xl text-[#1A4F8A] mb-6">{formatPrice(product.price)}</p>
            <ul className="space-y-2.5 mb-8">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-3 font-body text-gray-600 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C89B2A] flex-shrink-0" />{spec}
                </li>
              ))}
            </ul>

            {!invoice && (
              <div className="mt-auto space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Your Email <span className="text-[#C89B2A]">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                    placeholder="you@example.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
                      emailError ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-[#1A4F8A] focus:ring-[#1A4F8A]/20"
                    }`}
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">Please enter a valid email to continue.</p>}
                </div>
                <motion.button
                  onClick={handleGenerateInvoice}
                  disabled={generating}
                  whileHover={!generating ? { scale: 1.02, boxShadow: "0 0 24px rgba(26,79,138,0.25)" } : {}}
                  whileTap={!generating ? { scale: 0.98 } : {}}
                  className="w-full bg-[#1A4F8A] text-white font-bold py-4 rounded-xl text-base tracking-wide disabled:opacity-60 cursor-pointer transition-colors hover:bg-[#0E8E8E]"
                >
                  {generating ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Generating invoice...
                    </span>
                  ) : "Generate Invoice"}
                </motion.button>
                <p className="text-gray-400 text-xs text-center">Create a structured invoice and proceed to payment</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* INVOICE */}
        {invoice && (
          <motion.div
            ref={invoiceRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-200" />
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Invoice</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <InvoiceCard
              invoice={invoice}
              product={product}
              onPay={launchPaystack}
              onDownload={handleDownload}
              paying={paying}
            />
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
