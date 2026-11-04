# Portafolio de Pablo Saim Isidro Castillo

Guía rápida para ver, publicar y editar tu portafolio.

---

## 1. Qué contiene esta carpeta

```
mi-web/
├── index.html      → la página (diseño y funcionamiento)
├── datos.js        → TODO el contenido editable (textos, proyectos, contacto)
├── LEEME.md        → esta guía
├── assets/         → imágenes, avatar, favicon y vista previa para redes
└── portafolio.html / saim_...html  → tus archivos originales (NO se tocaron)
```

La web es **HTML, CSS y JavaScript puro**. No necesita instalación, compilación ni
servidor especial. Solo abre `index.html` en un navegador.

Incluye:

- Tema oscuro y claro (se recuerda en el navegador).
- Menú adaptable a celular.
- Animaciones suaves (se desactivan si el sistema pide menos movimiento).
- Ventana de detalle para cada proyecto y visor de imágenes.
- Botones para copiar correo y teléfono.
- Sin formulario de contacto: se usa correo, teléfono y enlaces directos.

---

## 2. Verla en tu computadora

**Opción rápida:** haz doble clic en `index.html`.

**Opción recomendada** (para probar tal como quedará publicada):

```bash
cd ~/Escritorio/mi-web
python3 -m http.server 8000
```

Luego abre en el navegador: <http://localhost:8000>

Para detener el servidor: `Ctrl + C`.

> Si al abrir `index.html` directamente ves la página en blanco, revisa que
> `datos.js` esté en la misma carpeta. También puedes abrir la consola del
> navegador con `F12` para ver el error exacto.

---

## 3. Publicarla gratis

### Opción A — Netlify Drop (la más fácil, sin instalar nada)

1. Entra a <https://app.netlify.com/drop>.
2. Arrastra **la carpeta `mi-web` completa** a la zona indicada. La página
   principal es `index.html`; los dos HTML originales no están enlazados, así
   que puedes dejarlos o moverlos a una carpeta privada antes de publicar.
3. Netlify te dará un enlace tipo `https://nombre-random.netlify.app`.
4. Crea una cuenta gratuita para conservar el sitio y poder cambiar el nombre.
5. En **Site settings → Change site name** puedes dejarlo como
   `pablo-saim.netlify.app` (si está disponible).

Ventajas: HTTPS automático, publicación en segundos y se puede actualizar
arrastrando la carpeta de nuevo.

### Opción B — GitHub Pages (ideal si quieres editar desde el navegador)

1. Crea una cuenta en <https://github.com> y un repositorio nuevo llamado
   `portafolio` (público).
2. Sube `index.html`, `datos.js` y la carpeta `assets/`.
   - Puedes hacerlo con **Add file → Upload files** desde la web.
3. Ve a **Settings → Pages**.
4. En *Build and deployment* elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
6. En 1–2 minutos tu web estará en:
   `https://TU-USUARIO.github.io/portafolio/`

Para editar después: abre `datos.js` en GitHub, pulsa el lápiz, cambia el texto,
haz **Commit changes** y la página se actualiza sola.

### Otras opciones gratuitas

| Servicio | Cómo se publica | Nota |
|---|---|---|
| **Cloudflare Pages** | Arrastrar carpeta o conectar GitHub | Muy rápido y con CDN global |
| **Vercel** | Arrastrar o conectar GitHub | Buena integración con Git |
| **Neocities** | Subir archivos desde la web | Comunidad y plan gratis |
| **Surge.sh** | `npx surge` en la carpeta | Requiere Node.js |
| **Firebase Hosting** | `firebase deploy` | Requiere Node.js y cuenta Google |

> Consejo: si más adelante compras un dominio (por ejemplo `pablosaim.com`),
> todos estos servicios permiten conectarlo sin costo adicional.

---

## 4. Editar los textos

Abre **`datos.js`** con cualquier editor de texto (Bloc de notas, VS Code,
gedit, nano, etc.). Verás bloques comentados:

| Bloque | Qué cambia |
|---|---|
| `persona` | Nombre, rol, estado, resumen, correo, teléfono, ubicación, avatar |
| `navegacion` | Elementos del menú |
| `hero` | Líneas de la terminal y las 4 cifras del inicio |
| `sobreMi` | Los 2 párrafos, la ficha rápida y los 3 enfoques |
| `experiencia` | Empresa, cargo, fechas, logros, herramientas y fotos |
| `habilidades` | Las 6 tarjetas técnicas y la lista de herramientas |
| `blandas` | Las 6 habilidades blandas |
| `proyectos` | Los 2 proyectos: contexto, proceso, resultados, galería… |
| `contacto` | Correo, teléfono, ubicación, institución y botón principal |
| `footer` | Texto y nota del pie de página |

### Reglas para no romper el archivo

1. Cambia solo lo que está **entre comillas**.
2. Conserva las **comas** entre elementos y las **llaves** `{ }`.
3. Usa comillas dobles `"` para los textos. Si necesitas comillas dentro de un
   texto, escríbelas como `\"`.
4. Guarda el archivo con codificación **UTF-8** para que se vean bien las tildes
   y la letra ñ.
5. Antes de un cambio grande, haz una copia de la carpeta (o un `.zip`).

Ejemplo:

```js
persona: {
  nombre: "Pablo Saim Isidro Castillo",
  correo: "saimisidrocastillo@gmail.com",
  telefono: "956936679",
  // ...
},
```

### Añadir un proyecto nuevo

En `proyectos.items`, copia un bloque completo `{ ... }` (desde `id:` hasta
`galeria: [ ... ]`), pégalo después del anterior, sepáralo con una coma y cambia
los datos. El `id` debe ser único y sin espacios (ejemplo: `"nuevo-proyecto"`).
La página crea la tarjeta y el modal automáticamente.

---

## 5. Cambiar o añadir imágenes

1. Guarda la imagen dentro de `assets/`.
2. Usa nombres sin espacios ni tildes (ejemplo: `htb-nmap.png`).
3. Actualiza la ruta en `datos.js`:

```js
imagen: "assets/mi-captura.png",
galeria: [
  { src: "assets/mi-captura.png", alt: "Descripción breve", caption: "Pie de foto" }
]
```

Recomendaciones:

- Formato `.jpg` para fotos y `.png` para capturas.
- Ancho ideal entre 1200 y 1600 px; peso menor a 400 KB por imagen.
- El atributo `alt` describe la imagen (importante para accesibilidad).
- Si una imagen no aparece, revisa mayúsculas/minúsculas y la extensión exacta.

### Cambiar el avatar

Reemplaza `assets/avatar.svg` por tu foto (puede ser `.jpg` o `.png`) y actualiza
`persona.foto` en `datos.js`. También puedes editar el SVG actual, que muestra
las iniciales **PS**.

### Vista previa para WhatsApp / redes

`assets/og-image.png` es la imagen que se muestra al compartir el enlace. Si
cambias el título o la foto, puedes reemplazarla manteniendo el nombre.

Cuando ya tengas la dirección publicada, cambia en `index.html` la línea
`<meta property="og:image" content="assets/og-image.png">` por la URL completa,
por ejemplo:

```html
<meta property="og:image" content="https://tu-sitio.netlify.app/assets/og-image.png">
```

Así WhatsApp, LinkedIn y otras redes podrán mostrar la vista previa.

---

## 6. Cambiar colores o tipografía (opcional)

En `index.html`, al inicio del `<style>`, está el bloque `:root` con las
variables:

```css
--bg: #060a11;          /* fondo oscuro */
--accent: #2dd4bf;      /* color principal (turquesa) */
--accent-2: #38bdf8;    /* color secundario (celeste) */
--font: "Space Grotesk", ...;
--mono: "JetBrains Mono", ...;
```

Cambia esos valores y se actualiza toda la página. El tema claro está en
`[data-theme="light"]`, justo debajo.

Las fuentes se cargan desde Google Fonts, pero si no hay internet el navegador
usa fuentes del sistema automáticamente.

---

## 7. Problemas comunes

| Problema | Solución |
|---|---|
| Página en blanco | Verifica que `datos.js` esté junto a `index.html` y que no tenga errores de comas o comillas |
| No se ven las imágenes | Revisa la ruta exacta en `datos.js` y que el archivo exista en `assets/` |
| Se ven mal las tildes | Guarda `datos.js` como UTF-8 |
| El menú no abre en celular | Actualiza el navegador; el menú usa JavaScript estándar |
| Cambié algo y no aparece | Recarga con `Ctrl + F5` o borra la caché del navegador |
| El correo no se abre | Comprueba que el dispositivo tenga una app de correo configurada |

Para diagnosticar: abre la página, pulsa `F12` y revisa la pestaña **Console**.
Un mensaje en rojo suele indicar la línea exacta del error en `datos.js`.

---

## 8. Privacidad y buenas prácticas

- No publiques contraseñas, tokens, claves SSH ni datos de terceros.
- En las capturas de laboratorio, tapa o difumina información sensible.
- En este portafolio, la captura de Jupyter tiene el token y la flag redactados,
  y la evidencia Wi-Fi no muestra la clave recuperada (`KEY FOUND`).
- Los proyectos indican que se realizaron en entornos propios o autorizados.
- El portafolio no incluye el formulario anterior ni envía datos a ningún
  servidor: todo funciona en el navegador del visitante.
- Si publicas en GitHub, recuerda que el repositorio público permite ver el
  código. No subas documentos privados ni informes con datos personales.

---

## 9. Antes de publicar: lista rápida

- [ ] Revisar nombre, correo y teléfono en `datos.js`.
- [ ] Confirmar que las fechas de la práctica son correctas.
- [ ] Probar todos los enlaces del menú y los botones de copiar.
- [ ] Abrir cada proyecto y revisar que las imágenes carguen.
- [ ] Probar en celular (o reducir la ventana del navegador).
- [ ] Revisar que no haya contraseñas ni nombres de otras personas en las capturas.
- [ ] Compartir el enlace y comprobar la vista previa en WhatsApp/LinkedIn.

---

## 10. Copia de seguridad

Antes de hacer cambios grandes:

```bash
cd ~/Escritorio
cp -r mi-web mi-web-respaldo-$(date +%Y-%m-%d)
```

O comprime la carpeta desde el explorador de archivos. Si algo sale mal, puedes
volver a la copia sin perder el trabajo anterior.

---

Hecho con HTML, CSS y JavaScript. Sin frameworks, sin build y sin costos de
hosting.
