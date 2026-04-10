import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatPrice } from "../data/products";
import logo from "../assets/ICT-WEARE--V2-TRT-b.png";

export default function PaymentSuccessPage() {
  const { state } = useLocation();
  const { productName, amount, reference, invoiceId } = state || {};

  const handleDownloadReceipt = () => {
    const element = document.getElementById("receipt-document");
    if (!element) return;
    html2pdf().set({
      margin: [10, 10, 10, 10],
      filename: `ictweare-receipt-${reference}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).from(element).save();
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <div className="max-w-lg mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white rounded-2xl border border-[#1A4F8A]/10 shadow-lg overflow-hidden"
          id="receipt-document"
        >
          {/* Top bar */}
          <div className="bg-[#0D1B2A] px-6 py-5 flex items-center justify-between">
            <img src={logo} alt="ictweare" className="h-9 w-auto" />
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Payment Receipt</p>
          </div>

          <div className="px-8 py-10">
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="font-display font-black text-2xl text-[#0D1B2A] mb-2">
                Payment Successful
              </h1>
              <p className="font-body text-gray-400 text-sm mb-8">
                Your purchase has been confirmed.
              </p>

              {/* Receipt details */}
              <div className="bg-[#F5F7FA] rounded-xl p-5 text-left space-y-3 mb-8">
                {[
                  { label: "Product", value: productName },
                  { label: "Amount Paid", value: formatPrice(amount) },
                  { label: "Reference", value: reference },
                  { label: "Invoice ID", value: invoiceId },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-start gap-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wide font-semibold flex-shrink-0">{row.label}</p>
                    <p className="font-body font-bold text-[#0D1B2A] text-sm text-right break-all">{row.value}</p>
                  </div>
                ))}
              </div>

              {/* Footer branding inside receipt */}
              <div className="border-t border-gray-100 pt-4 mb-6 text-center space-y-0.5">
                <p className="text-[#1A4F8A] text-xs font-bold">www.ictweare.com</p>
                <p className="text-gray-400 text-xs">Digital Bridges 2026</p>
                <p className="text-gray-300 text-xs italic">Structured IT. Clear Process. Reliable Execution.</p>
              </div>

              <div className="flex flex-col gap-3">
                <motion.button
                  onClick={handleDownloadReceipt}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1A4F8A] text-white font-bold py-3.5 rounded-xl hover:bg-[#0E8E8E] transition-colors text-sm tracking-wide cursor-pointer"
                >
                  Download Receipt (PDF)
                </motion.button>
                <Link
                  to="/live-sales"
                  className="w-full border border-[#1A4F8A]/20 text-[#1A4F8A] font-bold py-3.5 rounded-xl hover:bg-[#F0F6FF] transition-colors text-sm text-center block"
                >
                  Back to Live Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
