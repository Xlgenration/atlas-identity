# ATLAS Identity Platform

> **Know Yourself. Understand Others.**

AI-powered identity mapping combining astrology, human design, and personality science.

## 🌟 Features

- **Individual Analysis**: Comprehensive personality profiling through multiple systems
- **Couple Compatibility**: Deep relationship insights and compatibility scoring  
- **Team Dynamics**: Optimize collaboration and communication (coming soon)
- **Premium Design**: Dark theme with glassmorphism and smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Multilingual Ready**: Built with i18n support for EN/ES/DE

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter Font
- **Deployment**: Vercel-ready

## 🎨 Design System

### Colors
- **Background**: `#0a0a0f` (Primary Dark)
- **Cards**: `#14141f` with glassmorphism effects
- **Accent**: Purple to Blue gradient (`#7c3aed` → `#3b82f6`)
- **Text**: White with opacity variations

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Gradient Buttons**: Animated gradient backgrounds
- **Smooth Animations**: Fade-in, stagger, and hover effects

## 🛠️ Installation & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone or navigate to the project
cd atlas-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
npx vercel --prod
```

## 📱 Application Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page with hero & features  
│   ├── globals.css         # Design system & animations
│   ├── assessment/
│   │   └── page.tsx        # 4-step identity assessment
│   ├── profile/[id]/
│   │   └── page.tsx        # Individual profile dashboard
│   └── couple/
│       └── page.tsx        # Relationship compatibility
```

## 🎯 Core Pages

### 1. Landing Page (`/`)
- Hero section with animated gradient text
- Feature cards (Individual, Couple, Team)
- Call-to-action buttons
- Trust indicators and social proof

### 2. Assessment Flow (`/assessment`)
- **Step 1**: Name input
- **Step 2**: Birth date selection  
- **Step 3**: Birth time & location
- **Step 4**: AI analysis animation
- Progress tracking with validation

### 3. Profile Dashboard (`/profile/[id]`)
- Western & Chinese zodiac analysis
- Human Design type and strategy
- Personality overview with core traits
- Strengths & growth areas
- Daily insights with energy forecast
- Quick actions for couple/team analysis

### 4. Couple Comparison (`/couple`)
- Dual profile input forms
- Overall compatibility scoring
- Category breakdowns (communication, emotional, values, lifestyle)
- Relationship strengths & challenges
- Personalized advice and recommendations

## 🔮 AI-Powered Features

### Identity Mapping
- Astrological chart calculations
- Human Design type determination
- Personality trait analysis
- Compatibility algorithms

### Insights Generation
- Daily energy forecasts
- Relationship dynamics analysis
- Team collaboration recommendations
- Personal growth suggestions

## 🎨 Animations & UX

- **Framer Motion**: Page transitions and element animations
- **Staggered Reveals**: Content appears progressively
- **Hover Effects**: Interactive cards and buttons
- **Loading States**: Smooth feedback during processing
- **Responsive Design**: Optimized for mobile and desktop

## 🌍 Internationalization

Ready for multi-language support:
- English (EN) - Default
- Spanish (ES) - Coming soon
- German (DE) - Coming soon

## 📊 Analytics Tracking

Integration points ready for:
- User journey tracking
- Assessment completion rates  
- Feature usage analytics
- Performance monitoring

## 🔒 Privacy & Security

- Client-side data processing
- No sensitive data storage
- Privacy-first architecture
- GDPR compliance ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically on commits

### Other Platforms
- Netlify: Build command `npm run build`
- AWS Amplify: Compatible with Next.js
- Docker: Dockerfile ready for containerization

## 🎯 Future Roadmap

- [ ] Team dynamics analysis
- [ ] Social sharing features
- [ ] PDF report generation
- [ ] Email insights delivery
- [ ] Mobile app (React Native)
- [ ] Premium subscription features
- [ ] Community features

## 🤝 Contributing

Built with love by NOVA for the ATLAS Identity Platform.

---

**ATLAS** — Discover yourself. Understand others. Transform relationships.