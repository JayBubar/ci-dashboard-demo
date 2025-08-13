# CI Dashboard - Directory Structure

```
CI Dashboard/
├── .git/                           # Git repository metadata
├── .github/                        # GitHub-specific files
│   └── workflows/                  # GitHub Actions workflows
│       └── deploy.yml              # Automated deployment to GitHub Pages
├── .gitignore                      # Git ignore rules for Node.js/Next.js
├── .next/                          # Next.js build output (auto-generated, ignored)
├── node_modules/                   # NPM dependencies (auto-generated, ignored)
├── out/                            # Static export output (auto-generated, ignored)
├── app/                            # Next.js App Router directory
│   ├── favicon.ico                 # Site favicon
│   ├── globals.css                 # Global CSS styles
│   ├── layout.js                   # Root layout component
│   └── page.js                     # Home page component
├── public/                         # Static assets (if any)
├── components/                     # Reusable React components (if created)
├── styles/                         # Additional stylesheets (if created)
├── lib/                            # Utility functions and libraries (if created)
├── data/                           # Static data files (if created)
├── next.config.js                  # Next.js configuration
├── package.json                    # NPM package configuration
├── package-lock.json               # NPM dependency lock file
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── README.md                       # Project documentation
├── file-structure.md               # File structure documentation
└── DIRECTORY_STRUCTURE.md          # This file - comprehensive directory guide
```

## 📁 Directory Descriptions

### Core Project Files
- **`.gitignore`** - Specifies which files Git should ignore (node_modules, .next, etc.)
- **`package.json`** - Project metadata, dependencies, and scripts
- **`package-lock.json`** - Exact dependency versions for consistent installs
- **`next.config.js`** - Next.js configuration with static export settings
- **`README.md`** - Project overview and setup instructions

### Next.js App Structure
- **`app/`** - Next.js 13+ App Router directory
  - **`layout.js`** - Root layout component that wraps all pages
  - **`page.js`** - Home page component (main dashboard)
  - **`globals.css`** - Global CSS styles and Tailwind imports
  - **`favicon.ico`** - Website icon

### Styling Configuration
- **`tailwind.config.js`** - Tailwind CSS configuration and customization
- **`postcss.config.js`** - PostCSS configuration for CSS processing

### GitHub Integration
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automated deployment

### Auto-Generated Directories (Ignored by Git)
- **`.next/`** - Next.js build cache and development files
- **`node_modules/`** - NPM package dependencies
- **`out/`** - Static site export output for GitHub Pages

### Potential Future Directories
- **`components/`** - Reusable React components for dashboard widgets
- **`lib/`** - Utility functions, API helpers, data processing
- **`public/`** - Static assets like images, icons, fonts
- **`styles/`** - Additional CSS modules or component styles
- **`data/`** - JSON files, mock data, or configuration files

## 🚀 Build Process Flow

1. **Development**: Files in `app/` directory
2. **Build**: Next.js processes files → `.next/` directory
3. **Export**: Static files generated → `out/` directory
4. **Deploy**: GitHub Actions deploys `out/` to GitHub Pages

## 📝 Key Configuration Files

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🔄 Workflow Integration

The GitHub Actions workflow (`deploy.yml`) automatically:
1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies (`npm ci`)
4. Builds the project (`npm run build`)
5. Exports static files to `out/`
6. Deploys to GitHub Pages

This structure provides a clean, maintainable, and scalable foundation for your CI Dashboard project.
