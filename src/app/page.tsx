"use client";

import { useEffect, useState } from "react";
import { otherLines } from "@/data/catalog";
import { socialLinks } from "@/data/socials";
import { contactInfo } from "@/data/contact";
import { buildWhatsAppHref, type WhatsAppIntent } from "@/lib/whatsapp";
import { YamatexLogo } from "@/components/YamatexLogo";
import { ProductFamilies } from "@/components/ProductFamilies";

function WhatsAppLink({ intent, product, children, className = "button button-primary" }: { intent: WhatsAppIntent; product?: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={buildWhatsAppHref(intent, product)} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" className="social-dot" /></svg>;
  if (name === "tiktok") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a4.2 4.2 0 1 1-3.2-4.08V13a1.5 1.5 0 1 0 1.5 1.5V4H14Zm0 0c.5 1.7 1.7 2.8 3.5 3.2" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-7h2.4l.4-2.8H14v-1.8c0-.8.2-1.4 1.5-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.6V14h2.5v7" /></svg>;
}

function SplitHeading({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`split-heading ${className}`} aria-label={children}>{children.split(" ").map((word, i) => <span className="split-word" key={`${word}-${i}`}><span>{word}</span></span>)}</span>;
}

function GlassPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-panel ${className}`}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="floating-header"><nav className="nav-shell" aria-label="Navegación principal">
      <a href="#inicio" className="nav-logo" aria-label="Yamatex inicio"><YamatexLogo /></a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>Menú <span>☰</span></button>
      <div id="nav-links" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <a href="#colecciones" onClick={() => setMenuOpen(false)}>Colecciones</a><a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a><a href="#fabrica" onClick={() => setMenuOpen(false)}>Nuestra fábrica</a><a href="#mayoristas" onClick={() => setMenuOpen(false)}>Mayoristas</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        <WhatsAppLink intent="general">Solicitar catálogo <span>↗</span></WhatsAppLink>
      </div>
    </nav></header>

    <section id="inicio" className="velia-hero">
      <div className="hero-backdrop" />
      <div className="hero-layout page-width">
        <div className="hero-intro">
          <p className="eyebrow reveal">Fábrica textil · Ibarra, Ecuador</p>
          <h1 className="hero-title reveal"><SplitHeading>Textiles que transforman tu hogar</SplitHeading></h1>
          <p className="hero-subtitle reveal">Descubre nuestras colecciones de sábanas, edredones, cobijas y textiles para cada espacio.</p>
          <div className="hero-actions reveal"><a className="button button-primary" href="#colecciones">Explorar colecciones <span>↓</span></a><WhatsAppLink intent="general" className="button button-outline">Solicitar catálogo <span>↗</span></WhatsAppLink></div>
        </div>
        <div className="hero-stage reveal">
          <div className="hero-image-frame"><img src="/images/yamatex-edited/hero-concept-showroom.png" alt="Dormitorio contemporáneo con textiles Yamatex" /></div>
          <GlassPanel className="hero-collection-panel"><div className="panel-kicker">Colección destacada <span>01 / 04</span></div><h2>Lucero Premium</h2><p>Textura, descanso y presencia para vestir el dormitorio.</p><div className="panel-row"><span>Sábanas · cobertores · edredones</span><a href="#productos" aria-label="Ver colección Lucero Premium">↗</a></div></GlassPanel>
        </div>
      </div>
      <div className="hero-scroll">Scroll para descubrir <span>↓</span></div>
    </section>

    <section id="colecciones" className="section bento-section"><div className="page-width">
      <div className="section-top reveal"><div><p className="eyebrow">Colecciones</p><h2><SplitHeading>Una colección para cada forma de vivir</SplitHeading></h2></div><p className="section-note">Textiles pensados para el hogar, los comercios y quienes buscan ampliar su catálogo.</p></div>
      <div className="bento-grid">
        <article className="bento-card bento-feature reveal"><img src="/images/yamatex/showroom/festive-teal-bed.webp" alt="Cama teal en showroom Yamatex" /><div className="bento-gradient" /><div className="bento-copy"><span>01 · Descanso con carácter</span><h3>Lucero Premium</h3><p>Una línea para convertir la cama en el centro del espacio.</p><a href="#productos">Ver productos <span>↗</span></a></div></article>
        <article className="bento-card bento-elite reveal"><img src="/images/yamatex/productos/geometric-sheet-set.webp" alt="Set de sábanas geométrico Yamatex" /><div className="bento-gradient" /><div className="bento-copy"><span>02 · Variedad para el negocio</span><h3>Élite Económico</h3><a href="#productos">Explorar <span>↗</span></a></div></article>
        <article className="bento-card bento-cotton reveal"><img src="/images/yamatex/productos/premium-pillowcase-set.webp" alt="Set de fundas de almohada Yamatex" /><div className="bento-gradient" /><div className="bento-copy"><span>03 · Suave y esencial</span><h3>Cotton</h3><a href="#productos">Explorar <span>↗</span></a></div></article>
        <article className="bento-card bento-infantil reveal"><img src="/images/yamatex/showroom/bright-bedding-aisle.webp" alt="Variedad de textiles infantiles en showroom" /><div className="bento-gradient" /><div className="bento-copy"><span>04 · Color para crecer</span><h3>Infantil</h3><a href="#productos">Explorar <span>↗</span></a></div></article>
        <article className="bento-card bento-lines reveal"><div className="bento-lines-inner"><span>05 · Las 10 familias Yamatex</span><h3>Un surtido que se adapta a tu catálogo.</h3><div className="line-chips">{otherLines.map((line) => <a href="#productos" key={line}>{line} <span>↗</span></a>)}</div></div></article>
      </div>
    </div></section>

    <ProductFamilies />

    <section id="fabrica" className="section production-section"><div className="page-width"><div className="section-top reveal"><div><p className="eyebrow">Calidad y fabricación</p><h2><SplitHeading>Del textil a la pieza que llega a tu hogar</SplitHeading></h2></div><p className="section-note">Una mirada a los espacios, materiales y detalles que construyen el universo Yamatex.</p></div><div className="production-grid">
      <div className="production-column reveal"><GlassPanel><span className="panel-number">01</span><h3>Materiales que se sienten.</h3><p>Textiles para el descanso, el abrigo y la vida cotidiana.</p></GlassPanel><GlassPanel><span className="panel-number">02</span><h3>Variedad para elegir.</h3><p>Sábanas, edredones, cobijas, almohadas y más.</p></GlassPanel><GlassPanel><span className="panel-number">03</span><h3>Una conversación clara.</h3><p>Consulta medidas, disponibilidad y opciones comerciales.</p></GlassPanel></div>
      <div className="production-center reveal"><img src="/images/yamatex/fabrica/bright-textile-workshop.webp" alt="Interior de taller textil Yamatex" /><span className="image-caption">Espacio textil · referencia visual</span></div>
      <div className="production-side reveal"><div className="side-image side-aisle"><img src="/images/yamatex/showroom/bright-bedding-aisle.webp" alt="Pasillo de productos textiles Yamatex" /></div><div className="side-image side-pillow"><img src="/images/yamatex/productos/premium-pillowcase-set.webp" alt="Set de fundas de almohada empacado" /></div></div>
      </div><div className="corporate-grid"><GlassPanel className="corporate-card corporate-about reveal"><p className="eyebrow">Quiénes somos</p><h3>Yamatex · Fábrica Textil</h3><p>Somos una fábrica textil ecuatoriana ubicada en Ibarra, dedicada a la fabricación y comercialización de lencería y productos textiles para el hogar, con atención al por mayor y menor.</p></GlassPanel><GlassPanel className="corporate-card reveal"><p className="eyebrow">Misión</p><h3>Calidad para el hogar</h3><p>Satisfacer las necesidades y exigencias de nuestros clientes de lencería para el hogar mediante tecnología de punta y procesos con control de calidad.</p></GlassPanel><GlassPanel className="corporate-card reveal"><p className="eyebrow">Visión</p><h3>Una empresa textil reconocida</h3><p>Ser una empresa ecuatoriana líder en la fabricación y comercialización de lencería para el hogar en mercados local, nacional e internacional, reconocida por su calidad, servicio y atención personalizada.</p></GlassPanel></div></div></section>

    <section id="mayoristas" className="section wholesale-cta"><div className="page-width"><div className="cta-media"><img src="/images/yamatex-edited/hero-concept-showroom.png" alt="" /><div className="cta-shade" /></div><div className="cta-content reveal"><p className="eyebrow">Para negocios y distribuidores</p><h2><SplitHeading>Crezcamos juntos</SplitHeading></h2><p>Conoce nuestras colecciones y consulta nuestras opciones de comercialización al por mayor.</p><WhatsAppLink intent="mayorista" className="button button-primary">Consultar por WhatsApp <span>↗</span></WhatsAppLink></div></div></section>

    <section id="contacto" className="section contact-section"><div className="page-width"><div className="section-top reveal"><div><p className="eyebrow">Contáctanos · Yamatex</p><h2><SplitHeading>Estamos cerca de ti</SplitHeading></h2></div><p className="section-note">En Yamatex queremos acompañarte a encontrar los textiles ideales para tu hogar o negocio. Visítanos en Ibarra o comunícate con nosotros para conocer nuestros productos y solicitar información.</p></div><div className="contact-grid"><GlassPanel className="contact-card reveal"><p className="contact-business">{contactInfo.businessName}</p><div className="contact-details"><div><span>Ubicación</span><p>{contactInfo.cityLine}<br />{contactInfo.city}</p></div><div><span>WhatsApp</span><a href={contactInfo.phoneHref}>{contactInfo.phone}</a></div><div><span>Correo electrónico</span><a href={contactInfo.emailHref}>{contactInfo.email}</a></div><div><span>Atención</span><p>Compras al por mayor y menor para hogares, negocios y distribuidores.</p></div></div><div className="contact-actions"><WhatsAppLink intent="contacto" className="button button-primary">Consultar por WhatsApp <span>↗</span></WhatsAppLink><a className="button button-outline contact-location-button" href={contactInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <span>↗</span></a></div></GlassPanel><div className="contact-map reveal"><iframe src={contactInfo.mapsEmbedUrl} title="Ubicación de Yamatex — Fábrica Textil en Ibarra" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-pin" href={contactInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir la ficha de Yamatex en Google Maps"><span className="map-pin-shape" aria-hidden="true"><i /></span><span className="map-pin-label"><strong>Yamatex</strong></span></a><div className="map-caption"><span>Ubicación verificada · Ibarra, Ecuador</span><a href={contactInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps ↗</a></div></div></div></div></section>
    <footer id="footer" className="footer"><div className="page-width footer-top"><div className="footer-brand footer-column"><YamatexLogo /><p>Fábrica textil de productos para el hogar, con atención mayorista y minorista.</p></div><div className="footer-column"><span>Navegar</span><a href="#colecciones">Colecciones</a><a href="#productos">Productos</a><a href="#fabrica">Nuestra fábrica</a><a href="#contacto">Contacto</a></div><div className="footer-column"><span>Contacto</span><WhatsAppLink intent="general" className="footer-link">WhatsApp: +593 99 677 8060</WhatsAppLink><WhatsAppLink intent="mayorista" className="footer-link">Ventas mayoristas ↗</WhatsAppLink><a className="footer-link" href={contactInfo.emailHref}>{contactInfo.email}</a><a className="footer-link" href={contactInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer">Cómo llegar ↗</a><span className="footer-location">{contactInfo.city}</span></div><div className="footer-column footer-social"><span>Síguenos</span>{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Yamatex en ${social.label}`}><SocialIcon name={social.icon} /><span>{social.label}</span><b>↗</b></a>)}</div></div><div className="page-width footer-bottom"><small>© {new Date().getFullYear()} Yamatex · Ecuador</small><a href="#inicio">Volver arriba ↑</a></div></footer>
  </main>;
}

