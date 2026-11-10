# Yamatex Landing — preparación para producción

## Estado actual

- Aplicación: Next.js `16.4.3` con App Router.
- Directorio de Vercel: `apps/landing` si el repositorio se conecta desde `D:\Desarrollo_2026\Yamatex`; si se conecta directamente a este proyecto, usar la raíz del repositorio.
- Build: `npm run build`.
- Validaciones: `npm run typecheck`, `npm run lint`, `npm run build`.
- Variables de entorno: `NEXT_PUBLIC_YAMATEX_WHATSAPP_NUMBER` es opcional. Configurarla en Vercel como variable pública solo cuando exista el número oficial aprobado; no guardar números reales en Git.

## Flujo de ramas

- `main`: versión estable destinada a producción.
- `develop`: cambios nuevos, pruebas y revisión antes de integrar a `main`.
- Las publicaciones de producción deberán salir únicamente de `main`, después de validar el build y revisar el preview.

## Conexión futura con Vercel

1. Crear o seleccionar el proyecto privado de GitHub `yamatex-landing`.
2. En Vercel, importar ese repositorio y seleccionar `apps/landing` como Root Directory si el repositorio conserva la estructura superior del workspace.
3. Confirmar el framework Next.js y el comando `npm run build`.
4. Añadir las variables de entorno aprobadas en Project Settings, sin subir `.env`.
5. Conectar primero una rama de preview o `develop` para revisar el resultado.
6. Promover a producción únicamente un commit verificado de `main`.

## Dominio `yamatextil.com` en Cloudflare

La conexión del dominio queda pendiente hasta que el proyecto exista en Vercel y se haya añadido el dominio desde Project Settings. Vercel mostrará los registros exactos requeridos para ese proyecto; no deben sustituirse por valores genéricos.

En Cloudflare, conservar los registros de correo y otros servicios existentes. Añadir o actualizar únicamente los registros que Vercel indique para:

- `yamatextil.com` (dominio raíz).
- `www.yamatextil.com` (si se desea usar la variante `www`).

Después de guardar los cambios, verificar en Vercel la propiedad del dominio, la propagación DNS y el certificado HTTPS. No cambiar nameservers ni eliminar registros MX sin revisar previamente la zona completa.

## Seguridad

- `.env*`, `.vercel/`, `node_modules/`, `.next/`, `out/`, cachés, temporales y logs están excluidos por `.gitignore`.
- `.env.example` contiene únicamente un valor ficticio.
- No subir tokens de GitHub/Vercel, credenciales, claves privadas, archivos de sesión ni datos de acceso.
- Revisar `git diff --cached` y `git status` antes de cada push.

## Comandos de validación local

```bash
npm ci --ignore-scripts
npm run typecheck
npm run lint
npm run build
```

No ejecutar un despliegue de producción desde este respaldo. La primera publicación deberá hacerse después de revisar el repositorio privado, las variables de entorno y la configuración de Vercel.
