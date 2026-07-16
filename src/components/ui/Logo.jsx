import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ICT-WEARE--V2-TRT-b.png";

/*
 * Logo — uses the existing brand asset as a placeholder (untouched).
 * Falls back to wordmark text if the image fails to load.
 */
export default function Logo({ className = "h-9 w-auto", withText = false }) {
  const [error, setError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-2 cursor-pointer" aria-label="Ictware home">
      {!error ? (
        <img
          src={logo}
          alt="Ictware"
          className={className}
          style={{ maxWidth: "220px", display: "block" }}
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-heading font-extrabold text-xl text-amber-500">Ictware</span>
      )}
      {withText && !error && (
        <span className="font-heading font-extrabold text-xl text-bone-50 hidden sm:inline">
          Ictware
        </span>
      )}
    </Link>
  );
}
