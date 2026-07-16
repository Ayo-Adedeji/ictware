import { useReveal } from "./useReveal";

/*
 * Reveal — wrapper component that applies staggered scroll reveal to children.
 * Pass `index` to stagger grouped items (service cards, testimonials, etc.).
 */
// eslint-disable-next-line no-unused-vars
export function Reveal({ as: Tag = "div", index = 0, className = "", style = {}, children, ...rest }) {
  const [ref, isVisible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${index * 90}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
