# Kasparro - AI Visibility Intelligence Platform

> **SEO for the Machine Age** - Optimize your brand's presence in LLMs like ChatGPT, Claude, and Gemini.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## Overview

Kasparro is an AI Visibility Intelligence platform that helps brands optimize their presence in Large Language Models (LLMs) and AI-powered search engines. As AI becomes the primary interface for information discovery, traditional SEO evolves into AI Visibility Optimization.

## Features

### 🎯 Core Modules
- **Dashboard** - Real-time AI visibility metrics and performance tracking
- **Audit Modules** - 7 specialized analysis modules:
  - Technical Core - Infrastructure & schema optimization
  - Content Quality - AI-friendly content analysis
  - AI Visibility - LLM citation tracking
  - Trust & EEAT - Authority signals
  - Competitor Gap - Competitive intelligence
  - Local Presence - Geographic visibility
  - User Experience - Engagement metrics
- **System Architecture** - Visual pipeline representation

### 🎨 Design
- **Machine Age Aesthetic** - Stark, high-contrast, precise design
- **Dark Mode Default** - Premium, focused user experience
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Modern Animations** - Smooth transitions and micro-interactions

### 🛠️ Technical Features
- **Next.js 16** with App Router
- **Server-Side Rendering** for optimal performance
- **TypeScript** for type safety
- **Zustand** for state management
- **shadcn/ui** component library
- **Framer Motion** for animations
- **Tailwind CSS v4** for styling

## Getting Started

### Prerequisites
- Node.js 20.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/kasparro.git

# Navigate to project directory
cd kasparro

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/kasparro)

## Project Structure

```
kasparro/
├── app/                      # Next.js App Router
│   ├── (public)/            # Public-facing pages
│   │   ├── page.tsx         # Landing page
│   │   ├── about/           # About page
│   │   └── platform/        # Platform info
│   ├── app/                 # Protected app routes
│   │   ├── dashboard/       # Main dashboard
│   │   ├── audit/           # Audit modules
│   │   └── architecture/    # System map
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components
│   ├── feature/             # Feature components
│   └── animate/             # Animation components
├── lib/                     # Utilities
│   ├── store.ts             # Zustand state
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   └── data/                # Mock data
├── types/                   # TypeScript types
└── hooks/                   # Custom React hooks
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes)

## Key Features Implementation

### Route Groups
- `(public)` - Marketing pages with custom navbar/footer
- `app` - Protected application with sidebar navigation

### State Management
- Brand context via Zustand
- Theme persistence via next-themes
- Client-side data fetching for mock data

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for app routes
- Adaptive layouts for all screen sizes

## Development Roadmap

- [ ] Backend API integration
- [ ] Real-time AI monitoring
- [ ] User authentication
- [ ] Advanced analytics
- [ ] Export/reporting features
- [ ] Integration with LLM APIs

## Contributing

This is currently a private MVP project. Contributions are not open at this time.

## License

Proprietary - All rights reserved

## Contact

For inquiries about Kasparro, please reach out via the contact form on the website.

---

**Built with ❤️ using Next.js and shadcn/ui**

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
