export type Collection = { name: string; kicker: string; detail: string; image: string; tone: string };
export type Product = { name: string; code: string; line: string; detail: string; image: string };
export const collections: Collection[] = [
  { name: "Lucero Premium", kicker: "Textura · descanso · presencia", detail: "Sábanas, cobertores y edredones para vestir el dormitorio con una sensación más cuidada.", image: "/images/yamatex/showroom/festive-teal-bed.webp", tone: "#d8ece8" },
  { name: "Élite Económico", kicker: "Rotación · variedad · negocio", detail: "Una línea práctica para ampliar tu surtido y responder a distintos presupuestos.", image: "/images/yamatex/productos/geometric-sheet-set.webp", tone: "#f0e5d8" },
  { name: "Cotton", kicker: "Suave · esencial · cotidiano", detail: "Textiles versátiles para el hogar, pensados para acompañar todos los días.", image: "/images/yamatex/productos/premium-pillowcase-set.webp", tone: "#e4e9dd" },
  { name: "Infantil", kicker: "Color · juego · abrigo", detail: "Diseños alegres para crear espacios acogedores para los más pequeños.", image: "/images/yamatex/showroom/bright-bedding-aisle.webp", tone: "#f4d9dc" },
];
export const products: Product[] = [
  { name: "Sábanas estampadas", code: "10010022", line: "Lucero Premium", detail: "Diseños para renovar el dormitorio con color y textura.", image: "/images/reference/sabanas-package.jpeg" },
  { name: "Sábanas llanas", code: "10010097", line: "Lucero Premium", detail: "Una base limpia y versátil para combinar.", image: "/images/yamatex-edited/lucero-premium-room.png" },
  { name: "Cobertor", code: "10020015", line: "Lucero Premium", detail: "Abrigo y volumen para una cama protagonista.", image: "/images/reference/showroom-wide.jpeg" },
  { name: "Edredón", code: "10030007", line: "Lucero Premium", detail: "Capas suaves para una habitación más acogedora.", image: "/images/yamatex-edited/lucero-premium-room.png" },
  { name: "Sábanas estampadas", code: "10010015", line: "Élite Económico", detail: "Variedad para hogares y negocios que buscan rotación.", image: "/images/reference/showroom-shelves.jpeg" },
  { name: "Juego de sábanas geométrico", code: "Por confirmar", line: "Élite Económico", detail: "Set empacado con patrón geométrico; consulta medidas y disponibilidad.", image: "/images/yamatex/productos/geometric-sheet-set.webp" },
  { name: "Protector de colchón impermeable", code: "10070031", line: "Protección", detail: "Una capa funcional para cuidar el descanso.", image: "/images/reference/showroom-wide.jpeg" },
  { name: "Funda de almohada", code: "Por confirmar", line: "Accesorios", detail: "Empaque comercial de referencia; consulta medidas y disponibilidad.", image: "/images/yamatex/productos/premium-pillowcase-set.webp" },
];
export const otherLines = ["Forros y protectores de colchón", "Cobijas", "Almohadas", "Toallas", "Limpieza", "Varios"];
