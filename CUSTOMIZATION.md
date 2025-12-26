# Portfolio Customization Guide

This guide will help you customize your portfolio website quickly and easily.

## 🎯 Quick Start Customization

### Step 1: Update Personal Information

Edit `src/config/portfolio.js` to update all your personal information in one place:

```javascript
export const personalInfo = {
  name: "Your Name",              // Change to your name
  role: "Your Role",              // e.g., "Frontend Developer", "UI/UX Designer"
  tagline: "Your tagline...",     // Your professional tagline
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
};
```

### Step 2: Update Social Links

In the same file, update your social media profiles:

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your@email.com",
};
```

### Step 3: Update Your Bio

Customize the About section bio:

```javascript
export const bio = {
  paragraph1: "Your first paragraph about yourself...",
  paragraph2: "Your second paragraph...",
};
```

### Step 4: Update Skills

Modify your skills arrays:

```javascript
export const skills = {
  frontend: ['React', 'Vue', 'Angular', ...],
  backend: ['Node.js', 'Python', 'Java', ...],
  tools: ['Git', 'Docker', 'AWS', ...],
};
```

### Step 5: Add Your Projects

Replace the dummy projects with your real projects:

```javascript
export const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://your-demo-link.com',
    githubLink: 'https://github.com/yourusername/project',
    image: '/path/to/project-image.jpg',  // Optional
  },
  // Add more projects...
];
```

## 🎨 Styling Customization

### Change Colors

Edit `src/styles/globals.css` to change the color scheme:

```css
@theme {
  --color-primary: #0ea5e9;      /* Change primary color */
  --color-secondary: #8b5cf6;    /* Change secondary color */
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

**Popular Color Schemes:**

1. **Blue & Purple** (Current)
   - Primary: `#0ea5e9`
   - Secondary: `#8b5cf6`

2. **Green & Teal**
   - Primary: `#10b981`
   - Secondary: `#14b8a6`

3. **Orange & Red**
   - Primary: `#f97316`
   - Secondary: `#ef4444`

4. **Pink & Purple**
   - Primary: `#ec4899`
   - Secondary: `#a855f7`

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com/)
2. Choose your font
3. Copy the import URL
4. Update `src/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

@theme {
  --font-sans: 'YourFont', system-ui, sans-serif;
}
```

## 📸 Adding Images

### Profile Photo

1. Add your photo to `src/assets/images/profile.jpg`
2. Update `src/pages/Home.jsx`:

```jsx
import profileImg from '../assets/images/profile.jpg';

// In the component:
<img src={profileImg} alt="Your Name" className="w-48 h-48 rounded-full mx-auto mb-8" />
```

### Project Images

1. Add project screenshots to `src/assets/images/projects/`
2. Update `src/config/portfolio.js`:

```javascript
{
  title: 'Project Name',
  image: '/src/assets/images/projects/project1.jpg',
  // ... other fields
}
```

## 📄 Update SEO

Edit `index.html` to improve SEO:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<title>Your Name - Your Role</title>
```

## 🔗 Contact Form Integration

### Option 1: EmailJS (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
3. Update `src/pages/Contact.jsx`:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message sent successfully!');
  });
};
```

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Update form action:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Netlify Forms

If deploying to Netlify, add `data-netlify="true"` to your form:

```jsx
<form name="contact" method="POST" data-netlify="true">
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Advanced Customizations

### Add a Blog Section

Create `src/pages/Blog.jsx` and add blog posts to your config.

### Add Animations

Use libraries like:
- **Framer Motion**: `npm install framer-motion`
- **AOS**: `npm install aos`

### Add a Theme Toggle

Create a light/dark mode toggle using React Context.

### Add Analytics

Integrate Google Analytics or Plausible for tracking.

## 📝 Tips for Success

1. **Keep it Simple**: Don't overcomplicate your portfolio
2. **Show Your Best Work**: Quality over quantity for projects
3. **Keep it Updated**: Regularly update with new projects
4. **Mobile First**: Always test on mobile devices
5. **Fast Loading**: Optimize images and assets
6. **Clear CTAs**: Make it easy for people to contact you

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

- Make sure Tailwind is properly configured
- Check browser console for errors
- Verify all imports are correct

### Images Not Loading

- Use correct relative paths
- Ensure images are in the `src/assets` folder
- Check file extensions match

## 📞 Need Help?

- Check the [Vite Documentation](https://vitejs.dev/)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/)
- Check the [React Documentation](https://react.dev/)

---

**Happy Customizing! 🎉**
