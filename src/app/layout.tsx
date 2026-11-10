import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yamatex | Fábrica textil",
  description: "Colecciones textiles para el hogar, comercios y distribuidores en Ecuador.",
  keywords: ["textiles Ecuador", "sábanas", "edredones", "Yamatex", "venta mayorista"],
  icons: {
    icon: [{ url: "/images/brand/y-cotton-icon-master.png", type: "image/png" }],
  },
  openGraph: { title: "Yamatex · Fábrica textil", description: "Textiles que transforman tu hogar.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
