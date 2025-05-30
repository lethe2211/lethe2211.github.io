# lethe2211 Portfolio

A portfolio website for job hunting activities.

*This project was created with the assistance of GitHub Copilot Agent.*

## 🌐 Live Demo

https://lethe2211.github.io/

## 📋 Features

- **Multi-language Support**: Japanese ⇔ English switching
- **Responsive Design**: Mobile and desktop compatible
- **PWA Support**: Progressive Web App functionality
- **Career Summary**: Overview of experience and achievements
- **Skill Set**: Display of technology stack and certifications
- **Portfolio**: Showcase of projects
- **External Links**: Links to GitHub, LinkedIn, Qiita, and Hatena Blog

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **PWA**: next-pwa
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **Deploy**: GitHub Actions + GitHub Pages

## 🚀 Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Access the application at http://localhost:3000

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Production build
npm run build

# Static site export
npm run export

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run ESLint
npm run lint
```

## 🧪 Testing

- **Unit Tests**: Jest + React Testing Library
- **Coverage**: Tests for main pages and components
- **CI/CD**: Automated testing with GitHub Actions

## 🚀 Deployment

Automatically deployed to GitHub Pages using GitHub Actions.

1. Push to `main` branch
2. Automated build, test, and deployment
3. Published at https://lethe2211.github.io/

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── portfolio/         # Portfolio page
│   ├── links/             # Links page
│   └── __tests__/         # Page tests
├── components/            # React components
│   ├── Header.tsx         # Header component
│   ├── Footer.tsx         # Footer component
│   └── __tests__/         # Component tests
├── lib/                   # Utilities
│   └── language.tsx       # Internationalization
└── locales/               # Translation files
    ├── en.json           # English
    └── ja.json           # Japanese
```

## 📄 License

© 2025 lethe2211. All rights reserved.
