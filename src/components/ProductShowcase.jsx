import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import laptop1 from "../assets/laptop1.jpeg";
import laptop2 from "../assets/laptop2.jpeg";
import phone1 from "../assets/phone1.jpeg";
import phone2 from "../assets/phone2.jpeg";
import tablet1 from "../assets/tablet1.jpeg";

const products = [
  { id: 1, name: "Dell Latitude 7330", tag: "Laptop", image: laptop1 },
  { id: 2, name: "Microsoft Desktop Tablet", tag: "Tablet", image: tablet1 },
  { id: 3, name: "iPhone 8 Plus", tag: "Smartphone", image: phone1 },
  { id: 4, name: "iPhone 14", tag: "Smartphone", image: phone2 },
  { id: 5, name: "Dell Latitude 7320", tag: "Laptop", image: laptop2 },
];

export default function ProductShowcase() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0D1B2A] py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-[#C89B2A] font-semibold text-xs uppercase tracking-widest">
              Exclusive Event Deals
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
              Live Sales
            </h2>
            <p className="font-body text-white/50 text-sm mt-2">
              Premium devices available at the Digital Bridges Summit
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Scroll arrows */}
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-[#C89B2A] hover:text-[#C89B2A] transition-colors flex items-center justify-center text-lg"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-[#C89B2A] hover:text-[#C89B2A] transition-colors flex items-center justify-center text-lg"
              aria-label="Scroll right"
            >
              →
            </button>
            <Link
              to="/live-sales"
              className="ml-2 bg-[#C89B2A] text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#b08a24] transition-colors"
            >
              View All →
            </Link>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex-shrink-0 w-56 sm:w-64 snap-start bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C89B2A]/50 transition-colors group"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden bg-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-[#C89B2A] text-xs font-semibold uppercase tracking-widest">
                  {product.tag}
                </span>
                <p className="font-display font-black text-white text-base mt-1 mb-4 leading-snug">
                  {product.name}
                </p>
                <Link
                  to="/live-sales"
                  className="block w-full text-center bg-[#1A4F8A] text-white font-bold py-2.5 rounded-xl hover:bg-[#0E8E8E] transition-colors text-sm"
                >
                  Buy Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/live-sales"
            className="inline-flex items-center gap-2 border border-[#C89B2A] text-[#C89B2A] font-semibold px-8 py-3 rounded-full hover:bg-[#C89B2A] hover:text-white transition-colors text-sm"
          >
            See All Available Products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

