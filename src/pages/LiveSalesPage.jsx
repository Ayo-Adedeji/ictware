import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Dell Latitude 7730",
    price: "₦ Contact for Price",
    image: "/assets/laptop1.jpg",
    specs: [
      "12th Gen Intel Core i7",
      "16GB RAM",
      "1TB SSD",
      "Windows 11 Pro",
    ],
  },
  {
    id: 2,
    name: "Microsoft Desktop Tablet",
    price: "₦ Contact for Price",
    image: "/assets/tablet1.jpg",
    specs: [
      "4GB RAM",
      "64GB Storage",
      "Windows 10",
    ],
  },
  {
    id: 3,
    name: "iPhone 8 Plus",
    price: "₦ Contact for Price",
    image: "/assets/phone1.jpg",
    specs: [
      "64GB Storage",
    ],
  },
  {
    id: 4,
    name: "iPhone 14",
    price: "₦ Contact for Price",
    image: "/assets/phone2.jpg",
    specs: [
      "128GB Storage",
    ],
  },
  {
    id: 5,
    name: "Dell Latitude 7320",
    price: "₦ Contact for Price",
    image: "/assets/laptop2.jpg",
    specs: [
      "11th Gen Intel Core",
      "16GB RAM",
      "1TB SSD",
      "Windows 11 Pro",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

function handleBuyNow(id) {
  console.log("Buy Now clicked — product ID:", id);
}

export default function LiveSalesPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      {/* Header */}
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

      {/* Product Grid */}
      <section className="px-4 sm:px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-sm border border-[#1A4F8A]/10 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="bg-[#F0F6FF] h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<span class="text-5xl">📦</span>`;
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-black text-lg text-[#1A4F8A] mb-3">
                  {product.name}
                </h3>

                {/* Specs */}
                <ul className="space-y-1.5 mb-4 flex-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 font-body text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2A] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="font-display font-black text-xl text-[#1A4F8A] mb-4">
                  {product.price}
                </p>

                {/* Buy Now */}
                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="w-full bg-[#1A4F8A] text-white font-bold py-3 rounded-xl hover:bg-[#0E8E8E] transition-colors text-sm tracking-wide"
                >
                  Buy Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
