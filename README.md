# Duc Anh Dang - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌑 Dark theme with gradient background
- 📱 Fully responsive design for all devices
- ✨ Subtle animations for an engaging user experience
- 📄 Sections for About, Experiences, Projects, Tech Skills, and Contact
- 📬 Contact form with EmailJS integration

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important: Replacing Placeholders

Before deploying, make sure to replace the following placeholder assets:

### Images
- Replace `/public/profile.png` with an actual transparent PNG image of Duc Anh Dang
- Replace all project images in `/public/projects/` with actual project screenshots:
  - `/public/projects/ecommerce.jpg`
  - `/public/projects/taskapp.jpg`
  - `/public/projects/weather.jpg`
  - `/public/projects/finance.jpg`

### Resume
- Replace `/public/resume.pdf` with the actual resume PDF file

### EmailJS Configuration
Update the EmailJS configuration in `src/components/ContactSection.tsx`:
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
);
```

### Social Media Links
Update the social media links in `src/components/Footer.tsx` with your actual profiles.

## Customization

Feel free to customize the content of each section to better represent your skills and experiences:

- Update project details in `src/components/ProjectsSection.tsx`
- Update experience information in `src/components/ExperienceSection.tsx`
- Modify the tech stack icons in `src/components/TechSection.tsx`
- Update the about me section in `src/components/AboutSection.tsx`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
