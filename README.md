# Developer Portfolio Template

An open source, fully customizable developer portfolio website built with React, TypeScript, and Tailwind CSS. Simply update the data files to make it your own!

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/82f20ec8-08e5-47b9-addf-eaf6182de0f0

## ✨ Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Project Showcase**: Display your projects with live previews
- **Experience Timeline**: Professional work history
- **Social Integration**: Connect all your social profiles
- **Easy Customization**: Just update data files - no code changes needed!

## 📁 Customization Guide

All customization is done by editing files in the `/src/data/` folder. No coding required!

### 1. Basic Site Information (`siteConfig.ts`)

Update your personal information and site copy:

```typescript
export const siteConfig = {
  hero: {
    title: "Your Name",                    // Your full name
    subtitle: "Your Professional Title",   // Job title/role
    description: "Your elevator pitch",    // Brief description
    cta: {
      viewWork: "View My Work",           // Button text
      getInTouch: "Get In Touch"          // Contact button text
    }
  },
  // ... other sections
};
```

### 2. Social Links & Interests (`socialData.tsx`)

Configure your social media profiles:

```typescript
export const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    username: "your-linkedin-username",
    link: "https://www.linkedin.com/in/your-profile/"
  },
  // Add more social platforms
];

export const interests = [
  {
    label: "Your Interest Area",
    link: "https://your-related-link.com"
  },
  // Add your interests
];

export const favoriteBooks = [
  {
    label: "Book Title - Author Name",
    link: "https://amazon.com/book-link"
  },
  // Add your recommended books
];
```

### 3. Projects (`projectList.ts`)

Showcase your work by updating the projects array:

```typescript
export const projectList = [
  {
    title: "Project Name",
    description: "Brief project description",
    year: "2024",                          // Project year
    status: "Live",                        // Live, Preview, etc.
    url: "yourproject.com",               // Live URL (optional)
    hidePreview: false,                   // Set true to hide iframe preview
    technologies: ["React", "Node.js"],   // Tech stack
    highlights: [                         // Key achievements
      "Feature 1",
      "Feature 2"
    ],
    why: "Why you built this project",
    unique: "What makes it special"
  },
  // Add more projects
];
```

**Project Configuration Options:**
- `hidePreview: true` - Use for personal intro/about projects
- `url` - If provided, shows live preview in iframe
- `technologies` - Array of tech stack items (automatically sorted)
- `highlights` - Bullet points of key features/achievements

### 4. Professional Experience (`experienceList.ts`)

Add your work history:

```typescript
export const experienceList = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start Date - End Date",      // e.g., "Jan 2020 - Present"
    description: "Role overview",
    achievements: [                       // Key accomplishments
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["Tech1", "Tech2"]      // Technologies used
  },
  // Add more positions
];
```

## 🛠️ Development Setup

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm i

# 3. Start development server
npm run dev
```

### Making Changes

1. **Update Data Files**: Edit files in `/src/data/` folder
2. **Preview Changes**: Development server auto-reloads
3. **Deploy**: Use the Publish button in Lovable or deploy to your preferred platform

## 🎨 Customization Tips

### Adding New Social Platforms
1. Import the icon from `lucide-react`
2. Add to `socialLinks` array in `socialData.tsx`
3. Icons automatically appear in footer and contact section

### Project Display Options
- **Personal/About Project**: Set `hidePreview: true` and use as first project
- **Live Projects**: Include `url` for iframe preview
- **Concept Projects**: Omit `url` to show details without preview

### Professional Branding
- Update `siteConfig.ts` for consistent messaging
- Customize interests and book recommendations to show personality
- Use professional headshot as hero background (replace `/src/assets/hero-bg.jpg`)

## 🚀 Deployment Options

### Lovable Hosting (Recommended)
1. Click "Publish" in the Lovable editor
2. Optionally connect a custom domain in Project Settings

### Other Platforms
This is a standard React/Vite project and can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

## 🎯 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Animations**: GSAP
- **Icons**: Lucide React
- **Deployment**: Lovable (or any static host)

## 📝 License

Open source - feel free to use as a template for your own portfolio!

## 🤝 Contributing

Found a bug or want to add a feature? Contributions welcome! This template is designed to be:
- Easy to customize without coding
- Responsive and accessible
- Fast and SEO-friendly

---

**Ready to make it yours?** Start by updating the files in `/src/data/` and watch your portfolio come to life! 🚀
