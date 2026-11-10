import styles from "./ProductFamilies.module.css";
import { buildWhatsAppHref } from "@/lib/whatsapp";

const families = [
  { name: "Lucero Premium", image: "/images/yamatex/productos/familias/lucero-premium-generated.png", alt: "Dormitorio editorial con textiles de cama", detail: "Sábanas, cobertores, edredones y combos.", tags: ["Descanso", "Dormitorio"] },
  { name: "Élite Económico", image: "/images/yamatex/productos/familias/elite-economico-generated.png", alt: "Set de sábanas práctico en tonos neutros", detail: "Opciones prácticas para el hogar y el negocio.", tags: ["Variedad", "Negocio"] },
  { name: "Cotton", image: "/images/yamatex/productos/familias/cotton-generated.png", alt: "Textiles de cama suaves en tonos naturales", detail: "Ropa de cama cómoda y funcional.", tags: ["Hogar", "Confort"] },
  { name: "Infantil", image: "/images/yamatex/productos/familias/infantil-generated.png", alt: "Textiles infantiles coloridos en una habitación luminosa", detail: "Textiles para niños y bebé.", tags: ["Niños", "Bebé"] },
  { name: "Protectores y Forros de Colchón", image: "/images/yamatex/productos/familias/protectores-generated.png", alt: "Protector de colchón presentado en un dormitorio limpio", detail: "Cuidado y protección para el colchón.", tags: ["Protección", "Cama"] },
  { name: "Cobijas", image: "/images/yamatex/productos/familias/cobijas-generated.png", alt: "Cobijas suaves dobladas en tonos cálidos", detail: "Alternativas cálidas y confortables.", tags: ["Abrigo", "Textura"] },
  { name: "Almohadas", image: "/images/yamatex/productos/familias/almohadas-generated.png", alt: "Almohadas suaves en una escena de descanso", detail: "Descanso y confort para cada espacio.", tags: ["Descanso", "Suavidad"] },
  { name: "Toallas", image: "/images/yamatex/productos/familias/toallas-generated.png", alt: "Toallas dobladas en una presentación de baño limpia", detail: "Variedad para el uso diario.", tags: ["Baño", "Cotidiano"] },
  { name: "Limpieza", image: "/images/yamatex/productos/familias/limpieza-generated.png", alt: "Paños textiles de limpieza doblados y ordenados", detail: "Paños y textiles de limpieza.", tags: ["Orden", "Funcional"] },
  { name: "Varios", image: "/images/yamatex/productos/familias/varios-generated.png", alt: "Cortinas, manteles y complementos textiles en un ambiente de hogar", detail: "Cortinas, manteles, delantales y complementos.", tags: ["Complementos", "Hogar"] },
] as const;

export function ProductFamilies() {
  return <section id="productos" className="section product-families"><div className="page-width"><div className={styles.heading}><div><p className="eyebrow">Catálogo Yamatex</p><h2>Nuestros productos</h2></div><p>Conoce las líneas textiles que Yamatex ofrece para el hogar, con opciones pensadas para confort, calidad y estilo.</p></div><div className={styles.grid}>{families.map((family, index) => <article className={`${styles.card} ${index === 0 ? styles.featured : ""}`} key={family.name}><img src={family.image} alt={family.alt} /><div className={styles.scrim} /><div className={styles.content}><span className={styles.index}>{String(index + 1).padStart(2, "0")}</span><h3>{family.name}</h3><p>{family.detail}</p><div className={styles.tags}>{family.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className={styles.actions}><a className="button button-primary" href={buildWhatsAppHref("general")} target="_blank" rel="noopener noreferrer">Consultar catálogo <span>↗</span></a></div></div></section>;
}
