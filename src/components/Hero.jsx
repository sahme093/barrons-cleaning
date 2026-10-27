import { BIZ } from "../config.js";
import Photo from "./Photo.jsx";

export default function Hero() {
  return (
    <>
      <section
        style={{
          background: "var(--color-brand)",
          color: "var(--color-text)",
          padding: "20px 16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {BIZ.photos.logo && (
          <img
            src={BIZ.photos.logo}
            alt={BIZ.name}
            width="132"
            height="132"
            style={{ display: "block", margin: "0 0 -4px -10px", clipPath: "circle(47%)" }}
          />
        )}
        <span className="eyebrow" style={{ color: "var(--color-accent-800)", fontWeight: 600 }}>{BIZ.area}</span>
        <h1 style={{ fontSize: 50, lineHeight: 1, letterSpacing: "-0.01em" }}>{BIZ.tagline}</h1>
        {BIZ.highlights.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1.5px solid var(--color-text)",
            }}
          >
            {BIZ.highlights.map((title) => (
              <li
                key={title}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  padding: "9px 0",
                  borderBottom: "1px solid rgba(30, 32, 48, 0.18)",
                  fontWeight: 500,
                }}
              >
                <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>✦</span>
                <span style={{ fontSize: 15 }}>{title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div style={{ height: 300, position: "relative", borderBottom: "1px solid var(--color-divider)" }}>
        <Photo src={BIZ.photos.hero} alt="A freshly cleaned kitchen" placeholder="[Hero photo — a clean, bright room]" />
      </div>
    </>
  );
}
