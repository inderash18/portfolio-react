# Professional Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS v4.

## 🚀 Features

- **Modern Tech Stack**: React + Vite + Tailwind CSS v4
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Theme**: Professional dark color scheme with high-contrast typography
- **Smooth Animations**: Fade-in and slide-up animations for enhanced UX
- **Sticky Navigation**: Fixed navbar with smooth scroll navigation
- **Reusable Components**: Clean, modular component architecture
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   ├── Footer.jsx          # Footer with social links
│   ├── ProjectCard.jsx     # Reusable project card component
│   └── SectionTitle.jsx    # Reusable section title component
├── pages/
│   ├── Home.jsx            # Hero section with CTA buttons
│   ├── About.jsx           # Bio and skills section
│   ├── Projects.jsx        # Projects grid with cards
│   └── Contact.jsx         # Contact form and info
├── styles/
│   └── globals.css         # Tailwind CSS and custom styles
├── App.jsx                 # Main app component
└── main.jsx                # Entry point
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Change name, role, and tagline
   - Update CTA button links

2. **About Page** (`src/pages/About.jsx`):
   - Edit bio text
   - Update skills arrays (frontend, backend, tools)

3. **Projects Page** (`src/pages/Projects.jsx`):
   - Replace dummy projects with your actual projects
   - Add project images, descriptions, and links

4. **Contact Page** (`src/pages/Contact.jsx`):
   - Update contact information
   - Change social media links
   - Customize form submission handling

### Styling

- **Colors**: Edit `src/styles/globals.css` to change the color scheme
  - `--color-primary`: Main accent color (default: #0ea5e9)
  - `--color-secondary`: Secondary accent color (default: #8b5cf6)

- **Fonts**: The project uses Inter font from Google Fonts. Change in `globals.css`

### SEO

Update meta tags in `index.html`:
- Title
- Description
- Keywords
- Author

## 📦 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework
- **Lucide React**: Icon library
- **JavaScript (JSX)**: Programming language

## 🌟 Key Features Breakdown

### 1. Navbar
- Sticky positioning
- Responsive hamburger menu for mobile
- Smooth scroll navigation
- Gradient logo

### 2. Home Section
- Full-screen hero section
- Animated text entrance
- Multiple CTA buttons
- Scroll indicator

### 3. About Section
- Professional bio
- Categorized skills (Frontend, Backend, Tools)
- Card-based layout with icons
- Hover effects

### 4. Projects Section
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Project cards with:
  - Title and description
  - Tech stack tags
  - Live demo and GitHub links
  - Hover animations

### 5. Contact Section
- Contact form (Name, Email, Message)
- Contact information cards
- Social media links
- Form validation

### 6. Footer
- Social media icons
- Copyright information
- Consistent styling

## 🎯 Design Principles

- **Minimalistic**: Clean, uncluttered interface
- **High Contrast**: Easy-to-read typography
- **Smooth Transitions**: Enhanced user experience
- **Professional**: International-standard portfolio look
- **Accessible**: Semantic HTML and proper ARIA labels

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

This project can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
