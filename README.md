# Devesh Kumar - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Framer Motion. Features smooth animations, responsive design, and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass morphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **TypeScript**: Full TypeScript support for better development experience
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📋 Sections

1. **Hero Section**: Animated introduction with typing effect and floating elements
2. **About**: Education details and personal information
3. **Experience**: Timeline-based work experience with detailed descriptions
4. **Skills**: Interactive skill bars and certifications
5. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
cv/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── LoadingScreen.tsx    # Animated loading screen
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills and certifications
│   └── Contact.tsx         # Contact form and info
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- Personal information in `components/Hero.tsx`
- Education details in `components/About.tsx`
- Work experience in `components/Experience.tsx`
- Skills and certifications in `components/Skills.tsx`
- Contact information in `components/Contact.tsx`

### Animations
Customize animations in `tailwind.config.js` and individual component files using Framer Motion.

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactive elements

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: deveshk2102@gmail.com
- **LinkedIn**: [Devesh Kumar](https://www.linkedin.com/in/devesh-kumar-529982198/)
- **GitHub**: [Devesh21700Kumar](https://github.com/Devesh21700Kumar)

---

Made with ❤️ by Devesh Kumar
