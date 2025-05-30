# GitHub Copilot Agent Instructions

This document contains development guidelines and conventions established during the creation of this portfolio project.

## Project Overview

This is a portfolio website created with GitHub Copilot Agent for job hunting activities. The project uses Next.js 15, React, TypeScript, and is deployed to GitHub Pages.

## Code Quality Standards

### Language and Comments
- **All source code comments must be written in English**
- Chat communication with the agent should be in Japanese
- Documentation and README files should be in English
- No Japanese comments are allowed in source code files

### Code Formatting
- **Use spaces for indentation, not hard tabs (\t)**
- Follow consistent indentation throughout the project
- Use 2 spaces for indentation in TypeScript/JavaScript files

### Testing Requirements
- **Linting must be executed before running tests**
- Test scripts in package.json should run `npm run lint && jest`
- All test files should be located in `__tests__` directories
- Use Jest + React Testing Library for component testing
- Maintain comprehensive test coverage for pages and components

## Project Structure

### File Organization
- Page components: `src/app/*/page.tsx`
- Shared components: `src/components/`
- Tests: `src/**/__tests__/`
- Utilities: `src/lib/`
- Localization: `src/locales/`
- Static assets: `public/`

### Favicon and PWA Icons
- Main favicon: `public/favicon.ico`
- PWA icons: `public/icon-192.png`, `public/icon-512.png`
- All icons referenced in `public/manifest.json` must exist

## Skills and Information Management

### Programming Languages
Current list: TypeScript, JavaScript, Java, Python, Go, Kotlin, SQL

### Frameworks
Current list: Next.js, React, Spring Boot, Express.js

### Tools
Current list: Docker, Kubernetes, Git, Jenkins, Terraform

### Cloud Platforms
Current list: AWS, GCP, Azure

### Certifications
Current list: CKS, CKA, CKAD, TOEIC 900, 情報処理安全確保支援士

## CI/CD Pipeline

### GitHub Actions Workflow
- Quality checks run on all pull requests
- Build and deploy only on main branch pushes
- Manual workflow execution is enabled via `workflow_dispatch`
- Three main jobs: Quality Check, Build and Deploy, Deploy to GitHub Pages

### Branch Protection
- Pull requests should trigger quality checks
- Tests must pass before merging
- Consider setting up branch protection rules for the main branch

## File Management

### Unnecessary Files
- Remove create-next-app default files that are not used
- Delete unused SVG files from public folder
- Clean up cache directories (.next, .swc, out) regularly
- Keep only essential files for the project

### Asset Management
- PWA-related files in public folder should be preserved
- Ensure all manifest.json references have corresponding files
- Use appropriate file formats (ICO for favicon, PNG for PWA icons)

## Development Workflow

### Local Development
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Run tests: `npm test` (includes linting)
4. Build for production: `npm run build`

### Deployment
1. Push to main branch triggers automatic deployment
2. GitHub Actions builds and deploys to GitHub Pages
3. Site is accessible at https://lethe2211.github.io/

## Internationalization

### Language Support
- Japanese (default): `src/locales/ja.json`
- English: `src/locales/en.json`
- Language switching functionality in Header component
- Use `useLanguage` hook for translations

## Security and Best Practices

### Environment
- Keep sensitive information out of public repositories
- Use environment variables for configuration
- Maintain updated dependencies

### Code Quality
- Follow TypeScript strict mode
- Use ESLint for code quality
- Implement proper error handling
- Maintain clean, readable code structure

---

*This document should be updated whenever new development guidelines or conventions are established.*