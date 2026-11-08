# Derek Johnson - Portfolio Website

A modern, responsive portfolio website built with Angular 22. It showcases frontend architecture work across fintech and SaaS, plus AI-assisted engineering tooling, with multilingual support and dark/light themes.

**Live site:** [derekjohnson.dev](https://derekjohnson.dev/)

## Features

- **Multilingual Support**: English (`en-US`) and Portuguese (`pt-BR`) via ngx-translate
- **Theme Toggle**: Dark and light mode with smooth transitions
- **Responsive Design**: Mobile-first layout with Tailwind CSS
- **Professional Experience**: Forta Solutions | Agility, Tarvent, and iXfactor
- **AI-Assisted Engineering**: Dedicated section covering Cursor, Cursor Rules, Claude / Claude Code, MCP, agent skills, multi-agent workflows, and quality guardrails
- **Projects & Skills**: Product work, tech stack, and an AI & Automation skill group
- **AEO / SEO Ready**: Static prerender (SSG), Person JSON-LD, `robots.txt`, `sitemap.xml`, and `llms.txt`
- **Analytics**: Vercel Analytics and Speed Insights

## Tech Stack

- **Framework**: Angular 22 with standalone components (no NgModules)
- **Rendering**: Static prerender via `@angular/ssr` (`outputMode: "static"`)
- **Routing**: `provideRouter` + `app.routes.ts` / `app.routes.server.ts`
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Internationalization**: `@ngx-translate/core` with a build-time static JSON loader (`static-translate.loader.ts`)
- **Icons**: LineIcons
- **TypeScript**: 6.x
- **Testing**: Vitest via Angular unit-test builder
- **Build Tool**: Angular CLI 22 / `@angular/build`
- **Deployment**: Static output on Vercel (`dist/my-portfolio/browser`)

## Prerequisites

- Node.js 20 or higher (LTS recommended)
- npm package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DerekJDev/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── app.component.*          # Main portfolio page (hero → about → experience → AI → projects → contact)
│   ├── app.config.ts            # Browser application providers
│   ├── app.config.server.ts     # Server/prerender providers
│   ├── app.routes.ts            # Client routes
│   └── app.routes.server.ts     # RenderMode.Prerender config
├── assets/
│   ├── images/                  # Logos, headshot, project images
│   │   └── experiences/         # Forta, Tarvent, iXfactor logos
│   ├── documents/               # Resume PDF
│   └── locale/                  # translations.en-US.json / translations.pt-BR.json
├── components/
│   ├── language-switcher/
│   ├── social-link/
│   └── theme-switcher/
├── core/
│   ├── language.service.ts
│   ├── theme.service.ts
│   ├── static-translate.loader.ts
│   └── utils.ts                 # Experiences, projects, AI capabilities, contact info
├── directives/
├── index.html                   # Meta tags + Person JSON-LD
├── llms.txt                     # LLM / answer-engine summary
├── robots.txt
├── sitemap.xml
├── main.ts                      # Browser bootstrap
├── main.server.ts               # Prerender bootstrap
└── server.ts                    # Build-time SSR entry used for prerendering
```

## Customization

### Content

- **Experience / projects / AI capability cards**: `src/core/utils.ts`
- **UI copy (nav, hero, about, AI section, contact)**: `src/assets/locale/translations.*.json`
- **Resume PDF**: `src/assets/documents/Derek Johnson - Resume.pdf`
- **LLM summary**: `src/llms.txt`

### Languages

1. Add `src/assets/locale/translations.<locale>.json`
2. Register the locale in `LanguageService`
3. Import the JSON in `static-translate.loader.ts` so prerender can bake it in

### Theme

Theme values live in `src/core/theme.service.ts`.

## Build & Deployment

### Development
```bash
npm run build -- --configuration development
```

### Production
```bash
npm run build
```

Production builds prerender `/` into static HTML under `dist/my-portfolio/browser`. Deploy that folder to Vercel (or any static host).

### Local preview
```bash
npm run build
npx http-server dist/my-portfolio/browser
```

### Verify prerender / AEO assets
```bash
# Local build output
rg -n "Forta|AI-Assisted|ng-server-context" dist/my-portfolio/browser/index.html

# Live site
curl -sL https://derekjohnson.dev | rg -n "Forta|AI-Assisted|ng-server-context"
curl -sI https://derekjohnson.dev/llms.txt
curl -sI https://derekjohnson.dev/robots.txt
curl -sI https://derekjohnson.dev/sitemap.xml
```

## Testing

```bash
npm test
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [derekjohnson.dev](https://derekjohnson.dev/)
- **LinkedIn**: [Derek Johnson](https://linkedin.com/in/derek-m-johnson/)
- **GitHub**: [DerekJDev](https://github.com/DerekJDev)
- **X (Twitter)**: [@derekjdev](https://x.com/derekjdev)
- **Email**: me@derekjohnson.dev

## Acknowledgments

- Built with [Angular](https://angular.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [LineIcons](https://lineicons.com/)
- Internationalization by [ngx-translate](https://github.com/ngx-translate/core)
