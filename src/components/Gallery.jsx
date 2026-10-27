import { BIZ } from "../config.js";
import Photo from "./Photo.jsx";

const caption = {
  position: "absolute",
  left: 8,
  bottom: 8,
  padding: "3px 9px",
  borderRadius: 999,
  background: "rgba(248, 248, 253, 0.92)",
  color: "var(--color-text)",
  pointerEvents: "none",
};

export default function Gallery() {
  const [first, ...rest] = BIZ.gallery;
  if (!first) return null;

  const tile = (p, height) => (
    <figure key={p.src} style={{ margin: 0, position: "relative", height, borderRadius: "var(--radius)", overflow: "hidden" }}>
      <Photo src={p.src} alt={`Clean ${p.caption.toLowerCase()}`} placeholder={p.caption} />
      <figcaption className="eyebrow" style={caption}>{p.caption}</figcaption>
    </figure>
  );

  return (
    <section style={{ padding: "24px 16px 8px" }}>
      <h3 style={{ margin: "0 0 4px" }}>Our work</h3>
      <p className="muted" style={{ margin: "0 0 12px", fontSize: 13 }}>Homes we've cleaned.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div style={{ gridColumn: "1 / -1" }}>{tile(first, 280)}</div>
        {rest.map((p) => tile(p, 220))}
      </div>
    </section>
  );
}
