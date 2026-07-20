# Derek Johnson - Portfolio Website

A modern, responsive portfolio website built with Angular 22, featuring multilingual support, dark/light theme switching, and a comprehensive showcase of professional experience and projects.

## Features

- **Multilingual Support**: English (`en-US`) and Portuguese (`pt-BR`) with dynamic language switching via ngx-translate
- **Theme Toggle**: Dark and light mode with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Professional Showcase**: Experience (including Forta Solutions | Agility, Tarvent, and iXfactor), projects, and skills
- **Interactive Elements**: Expandable achievement sections and smooth scrolling navigation
- **Social Integration**: Direct links to LinkedIn, GitHub, and X (Twitter)
- **Analytics**: Vercel Analytics and Speed Insights

## Tech Stack

- **Framework**: Angular 22 with standalone components (no NgModules)
- **Routing**: Standalone `provideRouter` + `app.routes.ts`
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Internationalization**: `@ngx-translate/core` + `@ngx-translate/http-loader`
- **Icons**: LineIcons
- **TypeScript**: 6.x
- **Testing**: Vitest via Angular unit-test builder
- **Build Tool**: Angular CLI 22 / `@angular/build`
- **Deployment**: Vercel-ready static output

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

4. Navigate to `http://localhost:4200/` in your browser

## Project Structure

```
src/
├── app/                       # Application root
│   ├── app.component.*        # Main portfolio page
│   └── app.routes.ts          # Standalone route config
├── assets/                    # Static assets
│   ├── images/                # Logos, headshot, project images
│   │   └── experiences/       # Company logos (Forta, Tarvent, iXfactor)
│   ├── documents/             # Resume PDF
│   └── locale/                # translations.en-US.json / translations.pt-BR.json
├── components/                # Reusable UI components
│   ├── language-switcher/
│   ├── social-link/
│   └── theme-switcher/
├── core/                      # Services and content data
│   ├── language.service.ts
│   ├── theme.service.ts
│   └── utils.ts               # Experiences, projects, contact info
├── directives/                # Custom Angular directives
└── main.ts                    # bootstrapApplication + app providers
```

## Customization

### Adding New Languages

1. Create a new translation file in `src/assets/locale/` (e.g., `translations.es-ES.json`)
2. Update `LanguageService` to include the new language code and option keys
3. Add matching keys to both locale JSON files

### Modifying Content

- **Personal Information**: Update `src/core/utils.ts` for social links and contact info
- **Experience / Projects**: Modify the `experiences` and `projects` arrays in `utils.ts` (each entry has `en` and `pt` copy)
- **UI Copy**: Edit `src/assets/locale/translations.*.json`
- **Styling**: Customize Tailwind classes in component templates and CSS files
- **Routing**: Add routes in `src/app/app.routes.ts` and register features with `provideRouter` in `main.ts`

### Theme Customization

The theme system uses CSS custom properties. Modify values in `src/core/theme.service.ts` to customize colors and styling.

## Build & Deployment

### Development Build
```bash
npm run build -- --configuration development
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run build
npx http-server dist/my-portfolio/browser
```

## Testing

Run unit tests with Vitest:
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

- **LinkedIn**: [Derek Johnson](https://linkedin.com/in/derek-m-johnson/)
- **GitHub**: [DerekJDev](https://github.com/DerekJDev)
- **X (Twitter)**: [@derekjdev](https://x.com/derekjdev)
- **Email**: me@derekjohnson.dev

## Acknowledgments

- Built with [Angular](https://angular.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [LineIcons](https://lineicons.com/)
- Internationalization by [ngx-translate](https://github.com/ngx-translate/core)
