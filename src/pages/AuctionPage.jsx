import { Link } from "react-router-dom";

export default function AuctionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-body">
      <h1 className="font-display text-4xl font-bold text-secondary mb-4">
        Auction
      </h1>
      <p className="text-gray-500 mb-8">This page is coming soon.</p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
