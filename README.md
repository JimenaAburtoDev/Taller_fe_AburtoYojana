# Taller_fe_ApellidoNombre — Bella Luna (Salón de Belleza)

> ⚠️ Antes de subir el repositorio a GitHub, renombra la carpeta y el repo siguiendo la
> nomenclatura obligatoria del taller: `Taller_fe_ApellidoNombre`
> (ejemplo: `Taller_fe_ChumpitazValery`), y reemplaza el nombre de abajo por el tuyo.

**Estudiante:** _[Tu nombre completo aquí]_

## Descripción

Landing Page desarrollada en **Angular** para **Bella Luna**, un salón de belleza y
bienestar ficticio. El proyecto aplica una arquitectura basada en *features*, componentes
reutilizables, *Data Binding*, interpolación y la directiva de control `@for`, además de
un diseño responsive con Flexbox y CSS Grid.

## Temática

💇 **Belleza** — salón de belleza con servicios de corte y peinado, manicure/pedicure,
tratamientos faciales, maquillaje profesional, depilación y masajes.

## Arquitectura del proyecto

```
src/app/features/landing/
├── components/
│   ├── navbar/       → Barra de navegación con menú responsive
│   ├── hero/          → Sección principal con CTA y estadísticas
│   ├── servicios/      → Tarjetas de servicios (renderizadas con @for)
│   ├── nosotros/       → Sobre el salón + valores diferenciales
│   ├── contacto/       → Formulario reactivo con ngModel + datos de contacto
│   └── footer/         → Redes sociales y enlaces de navegación
└── pages/
    └── inicio/         → Ensambla todos los componentes de la landing
```

## Conceptos de Angular aplicados

- ✅ Componentes standalone independientes por sección (`@Component`)
- ✅ Interpolación `{{ }}` para datos dinámicos (marca, título, estadísticas, año del footer)
- ✅ Data Binding: `[(ngModel)]`, `[class]`, `[attr]`, `(click)`, `(ngSubmit)`
- ✅ Directiva de control de flujo `@for` para iterar servicios, valores, enlaces y redes
- ✅ Directiva `@if` para mostrar el mensaje de confirmación del formulario
- ✅ Estructura basada en *feature* (`features/landing`)
- ✅ Formulario con `FormsModule` y validación básica (`required`, `ngForm`)

## Secciones de la Landing

1. **Navbar** — logo, enlaces de navegación y botón "Reservar cita"
2. **Hero** — mensaje principal, dos CTA y estadísticas del salón
3. **Servicios** — 6 tarjetas de servicios con ícono, descripción y precio
4. **Nosotros** — historia del salón y 3 valores diferenciales
5. **Contacto** — datos de contacto y formulario de reserva
6. **Footer** — redes sociales, navegación y créditos

## Cómo ejecutar el proyecto

```bash
npm install
ng serve
```

Luego abre `http://localhost:4200/` en el navegador.

> Si no tienes Angular CLI instalado: `npm install -g @angular/cli`

## Tecnologías

- Angular 17 (componentes standalone)
- TypeScript
- CSS3 (Flexbox, Grid, media queries)
- Google Fonts (Playfair Display + Poppins)

## Evaluación — checklist de requisitos mínimos

- [x] Navbar funcional
- [x] Hero principal destacado
- [x] Mínimo 3 secciones de contenido (tiene 4: Servicios, Nosotros, Contacto + Footer)
- [x] Cards y llamadas a la acción (CTA)
- [x] Footer informativo
- [x] Uso de componentes
- [x] Interpolación `{{ }}` activa
- [x] Data Binding estructurado
- [x] Directiva `@for` aplicada
- [x] Estructura basada en feature
- [x] Interfaz atractiva y limpia (paleta rosa/vino/dorado)
- [x] Paleta de colores coherente
- [x] Tipografía legible
- [x] Estilizado de botones y tarjetas
- [x] Adaptación responsive básica (breakpoints 900px / 768px / 600px)
