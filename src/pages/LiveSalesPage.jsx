import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, formatPrice } from "../data/products";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

function ProductCard({ product, index }) {
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-sm border border-[#1A4F8A]/10 overflow-hidden flex flex-col"
    >
      <div className="bg-[#F0F6FF] h-52 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-5xl">📦</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-black text-lg text-[#1A4F8A] mb-3">
          {product.name}
        </h3>
        <ul className="space-y-1.5 mb-4 flex-1">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 font-body text-gray-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2A] flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
        <p className="font-display font-black text-xl text-[#1A4F8A] mb-4">
          {formatPrice(product.price)}
        </p>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full bg-[#1A4F8A] text-white font-bold py-3 rounded-xl hover:bg-[#0E8E8E] transition-colors text-sm tracking-wide cursor-pointer"
        >
          View & Buy →
        </button>
      </div>
    </motion.div>
  );
}

export default function LiveSalesPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <section className="pt-28 pb-10 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#0E8E8E] font-semibold text-xs uppercase tracking-widest">
            Digital Bridges Summit
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1A4F8A] mt-2">
            Live Sales
          </h1>
          <p className="font-body text-gray-500 mt-3 text-sm max-w-lg mx-auto">
            Available products for the Digital Bridges event — exclusive on-site discounts.
          </p>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
