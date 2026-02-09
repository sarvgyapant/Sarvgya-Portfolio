# Sarvgya Nath Pant - Professional Portfolio

Modern, responsive portfolio website for Network & System Administrator with cyan tech theme.

## 🚀 Features

- **Modern Design**: Clean, professional design with cyan tech theme
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: AOS library for scroll animations, typing effect, particle background
- **Performance Optimized**: Optimized images, lazy loading, debounced scroll events
- **SEO Ready**: Complete meta tags, Open Graph, Twitter cards
- **Interactive Elements**: Hover effects, smooth scrolling, dynamic counters
- **Contact Form**: Integrated with FormSpree for easy message handling

## 📁 File Structure

```
portfolio-redesign/
├── index.html          # Main HTML file
├── style.css           # Custom CSS with cyan theme
├── script.js           # JavaScript for interactions
├── images/
│   ├── profile.jpg             # Original profile image
│   └── profile-optimized.jpg   # Optimized profile image (55KB)
└── README.md           # This file
```

## 🔧 Setup Instructions

### Option 1: Deploy to GitHub Pages

1. **Copy files to your repository:**
   ```bash
   # Navigate to your repository
   cd Sarvgya-Portfolio
   
   # Copy all files from portfolio-redesign folder
   cp index.html .
   cp style.css .
   cp script.js .
   cp -r images .
   cp Sarvgya-Nath-Pant-CV.pdf .  # Make sure your CV is in the repo
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated portfolio with modern design"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://sarvgyapant.github.io/Sarvgya-Portfolio/`

4. **Add custom domain (sarvgya.com):**
   - Create a file named `CNAME` (no extension) in your repository root
   - Add one line: `sarvgya.com`
   - Configure DNS:
     - Add A records pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or add CNAME record: `sarvgyapant.github.io`

### Option 2: Local Testing

1. **Simply open index.html in a browser**
   - Double-click `index.html`
   - Or use Live Server in VS Code

## 📝 Customization Guide

### Update Your Information

1. **Profile Image:**
   - Replace `images/profile-optimized.jpg` with your photo
   - Keep filename same or update in HTML

2. **CV/Resume:**
   - Replace `Sarvgya-Nath-Pant-CV.pdf` with your CV
   - Keep filename same or update in HTML

3. **Contact Form:**
   - Form currently uses: `https://formspree.io/f/mpwvgngy`
   - To use your own FormSpree:
     - Go to [formspree.io](https://formspree.io)
     - Create free account
     - Get your form endpoint
     - Update in HTML: `<form action="YOUR_FORMSPREE_URL" method="POST">`

4. **Testimonials:**
   - Replace placeholder testimonials with real ones
   - Edit the testimonial cards in HTML
   - Add client names, positions, and actual quotes

5. **Social Media Links:**
   - Update LinkedIn, GitHub, Facebook, Instagram URLs
   - Find all instances in HTML and update

### Color Customization

To change the color theme, edit `style.css`:

```css
:root {
  --primary: #00d9ff;        /* Main cyan color */
  --primary-dark: #00b8d9;   /* Darker cyan */
  --primary-light: #33e0ff;  /* Lighter cyan */
  --secondary: #0099ff;      /* Secondary blue */
  --accent: #00ffcc;         /* Accent green-cyan */
}
```

Popular alternative themes:
- **Purple Tech**: `#8b5cf6` (primary), `#6366f1` (secondary)
- **Green Matrix**: `#10b981` (primary), `#059669` (secondary)
- **Orange Fire**: `#f97316` (primary), `#ea580c` (secondary)

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with typing animation
2. **About** - Professional summary and key achievements
3. **Experience** - Timeline of work history
4. **Skills** - Technical skills organized by category
5. **Projects** - Portfolio of key projects
6. **Testimonials** - Client feedback (with placeholders)
7. **Blog** - Coming soon section for future articles
8. **Contact** - Contact form and information

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Optimized Images**: Profile image reduced from 289KB → 55KB
- **Lazy Loading**: Images load as you scroll
- **Debounced Events**: Smooth scroll performance
- **Minimal Dependencies**: Only Bootstrap, AOS, Particles.js

## 🔒 Security

- No API keys exposed
- FormSpree handles form submissions securely
- HTTPS ready (when deployed on GitHub Pages)

## 📞 Support

If you need help or have questions:
- Email: savvy@sarvgya.com
- LinkedIn: [linkedin.com/in/sarvgyapant](https://linkedin.com/in/sarvgyapant)

## 📄 License

This portfolio is created specifically for Sarvgya Nath Pant.
Feel free to use the structure and design for your own portfolio.

---

**Built with ❤️ in Melbourne**
© 2026 Sarvgya Nath Pant. All rights reserved.
