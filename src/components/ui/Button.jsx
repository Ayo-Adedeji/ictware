import { Link } from "react-router-dom";

/*
 * Reusable Button with fill-on-hover interaction.
 * Default (both variants): outlined, transparent background, amber-500 border
 * and text. On hover the amber-500 background fills in (~280ms ease-in-out)
 * and the text switches to navy-950. On mouse-leave the fill recedes.
 *
 * Props:
 *  - to: internal route (renders <Link>)
 *  - href: external link
 *  - variant: "primary" | "ghost" (both are outlined + fill-on-hover)
 *  - tone: "light" (amber border/text for light backgrounds) | "navy" (amber border/text for navy backgrounds)
 *  - className: extra classes
 */
const base =
  "inline-flex items-center justify-center gap-2 cursor-pointer select-none rounded-full font-semibold text-sm sm:text-base px-7 py-3.5 " +
  "border border-amber-500 bg-transparent text-amber-500 " +
  "transition-[background-color,color,border-color] duration-300 ease-in-out " +
  "hover:bg-amber-500 hover:text-navy-950 hover:border-amber-500 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bone-50";

export default function Button({
  to,
  href,
  onClick,
  // variant and tone are kept for API compatibility (outlined + fill-on-hover for all)
  // eslint-disable-next-line no-unused-vars
  _variant = "ghost",
  // eslint-disable-next-line no-unused-vars
  _tone = "light",
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
