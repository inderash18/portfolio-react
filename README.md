# Inderash M - Personal Portfolio

A professional, multi-page personal portfolio website built for a Full-Stack Developer. Designed with a focus on clarity, aesthetics, and performance using the latest modern web technologies.

## 🚀 Tech Stack

- **React 19**: Modern UI library with component architecture.
- **Vite**: Lightning-fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Smooth page transitions and micro-interactions.
- **React Router Dom**: Client-side routing for seamless navigation.
- **Three.js / React Three Fiber**: Futuristic 3D hero visualization ("Neural Brain").
- **Lucide React**: Clean, lightweight icons.

## 🎨 Design System

- **Mode**: Dark Mode First (Deep Navy / Charcoal Base).
- **Typography**: Inter / Sans-serif for clean readability.
- **Colors**:
  - **Primary**: Cyan/Teal (`#06b6d4`) - Clarity & Tech.
  - **Secondary**: Soft Violet (`#a78bfa`) - Creativity.
  - **Accent**: Light Orange (`#fb923c`) - CTAs.

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Layout, Navbar, etc.)
├── data/            # Content management (content is separated from code)
│   └── portfolio.js  # EDIT THIS FILE to change website content
├── pages/           # Page components (Home, About, Projects, etc.)
├── App.jsx          # Main routing and animation logic
└── index.css        # Global styles and Tailwind configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access the site at `http://localhost:5173`.

## 📝 Customization Guide

### Changing Content
All text content, project details, skills, and experience are stored in `src/data/portfolio.js`. You do not need to edit the React components to change the text.

**Example 1: Adding a Project**
Open `src/data/portfolio.js` and add a new object to the `projects` array:
```javascript
{
    id: 5,
    title: "New Project Name",
    summary: "Short summary...",
    description: "Full detailed description...",
    tech: ["React", "Node.js"],
    category: "Web", // Options: Web, Hardware, AI, Automation
    links: { github: "...", live: "..." }
}
```

**Example 2: Updating Skills**
Edit the `skills` object in `src/data/portfolio.js`. The `level` (1-5) controls the visual skill dots.

### Changing Colors
The color palette is defined in `src/index.css` under the `@theme` block.
```css
@theme {
    --color-primary: #06b6d4; /* Change this hex code */
    /* ... */
}
```

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist` folder, ready to be deployed to Vercel, Netlify, or GitHub Pages.

---
Built by Inderash M.
