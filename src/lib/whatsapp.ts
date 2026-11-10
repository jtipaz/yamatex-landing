export type WhatsAppIntent = "general" | "minorista" | "mayorista" | "producto" | "contacto";
const messages: Record<WhatsAppIntent, string> = {
  general: "Hola Yamatex, quisiera conocer sus colecciones.",
  minorista: "Hola Yamatex, quiero consultar productos para mi hogar.",
  mayorista: "Hola Yamatex, quiero solicitar información para compra mayorista.",
  producto: "Hola Yamatex, quisiera consultar por un producto.",
  contacto: "Hola, visité la página web de Yamatex y quisiera recibir información sobre sus productos y catálogo.",
};
export function buildWhatsAppHref(intent: WhatsAppIntent, product?: string) {
  const number = process.env.NEXT_PUBLIC_YAMATEX_WHATSAPP_NUMBER ?? "593996778060";
  const text = `${messages[intent]}${product ? ` Me interesa: ${product}.` : ""}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
