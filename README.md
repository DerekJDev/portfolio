# Derek Johnson - Portfolio Website

A modern, responsive portfolio website built with Angular 20, featuring multilingual support, dark/light theme switching, and a comprehensive showcase of professional experience and projects.

## 🌟 Features

- **Multilingual Support**: English and Portuguese (Brazil) with dynamic language switching
- **Theme Toggle**: Dark and light mode with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Professional Showcase**: Detailed experience, projects, and skills presentation
- **Interactive Elements**: Expandable achievement sections and smooth scrolling navigation
- **Social Integration**: Direct links to LinkedIn, GitHub, and X (Twitter)

## 🚀 Tech Stack

- **Framework**: Angular 20 with standalone components
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Internationalization**: ngx-translate with message format compiler
- **Icons**: LineIcons
- **TypeScript**: 5.9.3
- **Build Tool**: Angular CLI 20.3.4

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
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

## 📁 Project Structure

```
src/
├── app/                    # Main application component
├── assets/                 # Static assets (images, documents, translations)
│   ├── images/            # Portfolio images and logos
│   ├── documents/         # Resume and other documents
│   └── locale/            # Translation files
├── components/            # Reusable UI components
│   ├── language-switcher/ # Language toggle component
│   ├── social-link/       # Social media link component
│   └── theme-switcher/    # Theme toggle component
├── core/                  # Core services and utilities
│   ├── language.service.ts
│   ├── theme.service.ts
│   └── utils.ts
└── directives/            # Custom Angular directives
```

## 🎨 Customization

### Adding New Languages

1. Create a new translation file in `src/assets/locale/` (e.g., `translations.es-ES.json`)
2. Update the `LanguageService` to include the new language
3. Add language option to the language switcher component

### Modifying Content

- **Personal Information**: Update `src/core/utils.ts` for social links and basic info
- **Experience/Projects**: Modify the `experiences` and `projects` arrays in `utils.ts`
- **Translations**: Edit the JSON files in `src/assets/locale/`
- **Styling**: Customize Tailwind classes in component templates and CSS files

### Theme Customization

The theme system uses CSS custom properties. Modify the theme values in `src/core/theme.service.ts` to customize colors and styling.

## 🚀 Build & Deployment

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --configuration production
```

### Preview Production Build
```bash
npm run build --configuration production
npx http-server dist/my-portfolio/browser
```

## 🧪 Testing

Run unit tests:
```bash
npm test
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **LinkedIn**: [Derek Johnson](https://linkedin.com/in/derek-m-johnson/)
- **GitHub**: [DerekJDev](https://github.com/DerekJDev)
- **X (Twitter)**: [@derekjdev](https://x.com/derekjdev)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [LineIcons](https://lineicons.com/)
- Internationalization by [ngx-translate](https://github.com/ngx-translate/core)
