# Yamatex Landing

Landing comercial local de Yamatex. Es una aplicación aislada de la futura integración del agente WhatsApp.

## Requisitos

- Node.js `v24.19.0` o compatible con Next.js 16.
- npm `11.17.0` o compatible.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Validaciones

```bash
npm run typecheck
npm run lint
npm run build
```

## WhatsApp

Configurar solamente en un entorno local controlado:

```text
NEXT_PUBLIC_YAMATEX_WHATSAPP_NUMBER=593XXXXXXXXX
```

Si la variable no existe, los CTA no apuntan a un número ficticio. No añadir números reales al repositorio.

## Pendientes de Yamatex

- Número oficial y autorización del canal.
- Fotos y videos reales.
- Catálogo confirmado, medidas, colores, materiales y disponibilidad.
- Ubicación, horarios y condiciones de envío.
- Identidad visual propia de Yamatex, si existe.
