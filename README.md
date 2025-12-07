# TutorHub - Live Tutoring Platform

<div align="center">

**A modern live tutoring platform connecting students with expert tutors for interactive learning sessions**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.10-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

[Features](#features) • [Getting Started](#getting-started) • [Project Structure](#project-structure) • [Tech Stack](#tech-stack) • [Deployment](#deployment)

</div>

---

## About

**TutorHub** is a comprehensive online tutoring platform designed to bridge the gap between students and qualified tutors. Unlike traditional pre-recorded course platforms like Udemy, TutorHub focuses on **live, interactive sessions** that provide personalized learning experiences.

### Vision

To democratize quality education by providing accessible, live tutoring sessions that adapt to each student's learning pace and style.

---

## Features

### For Students
- **Dashboard Overview** - Track learning progress, upcoming sessions, and statistics
- **Live Sessions** - Join real-time interactive tutoring sessions
- **Session History** - View past sessions and learning materials
- **Tutor Discovery** - Browse and book sessions with expert tutors
- **Personalized Settings** - Customize your learning experience

### For Tutors
- **Tutor Dashboard** - Manage your tutoring business at a glance
- **Student Management** - Track and manage your enrolled students
- **Session Scheduling** - Set availability and manage session calendar
- **Session Requests** - Accept or decline incoming tutoring requests
- **Earnings & Analytics** - Monitor your performance and earnings

### Platform Features
- **Modern Landing Page** - Engaging user interface with tutor categories
- **Dark/Light Theme** - Customizable theme preferences
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Server-Side Rendering** - Fast initial page loads with SSR support

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tutor-webapp.git
   cd tutor-webapp/Frontend/tutor_fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | Run TypeScript type checking |

---

## Project Structure

```
tutor_fe/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── LandingPage/      # Landing page components
│   │   │   ├── auth/         # Authentication UI
│   │   │   ├── home/         # Homepage sections
│   │   │   └── layout/       # Layout components
│   │   ├── StudentDashboard/ # Student portal components
│   │   └── TutorDashboard/   # Tutor portal components
│   │
│   ├── routes/               # Application routes
│   │   ├── landing/          # Public landing pages
│   │   ├── student/          # Student dashboard routes
│   │   │   ├── home.tsx      # Student overview
│   │   │   ├── sessions.tsx  # Session management
│   │   │   └── settings.tsx  # Student settings
│   │   └── tutor/            # Tutor dashboard routes
│   │       ├── home.tsx      # Tutor overview
│   │       ├── requests.tsx  # Session requests
│   │       ├── schedule.tsx  # Calendar & availability
│   │       ├── students.tsx  # Student management
│   │       └── settings.tsx  # Tutor settings
│   │
│   ├── data/                 # Static data & mock data
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── services/             # API service layer
│   ├── stores/               # State management
│   └── root.tsx              # Application root
│
├── public/                   # Static assets
├── Dockerfile                # Docker configuration
└── package.json              # Project dependencies
```

---

## Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **React Router 7** - File-based routing with SSR support
- **TypeScript** - Type-safe JavaScript

### Styling
- **TailwindCSS 4** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **class-variance-authority** - Component variant management

### Build & Tooling
- **Vite 7** - Next-generation frontend tooling
- **ESLint** - Code linting
- **Hot Module Replacement** - Instant development feedback

### Icons & UI
- **Lucide React** - Beautiful, consistent icons
- **React Icons** - Extended icon library

---

## Deployment

### Docker Deployment

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t tutorhub .

# Run the container
docker run -p 3000:3000 tutorhub
```

### Manual Deployment

For Node.js hosting:

```bash
# Build for production
npm run build

# Start the production server
npm run start
```

**Deployment artifacts:**
```
├── package.json
├── package-lock.json
└── build/
    ├── client/    # Static assets
    └── server/    # Server-side code
```

---

## Roadmap

- [ ] Live Session Integration - WebRTC-based video streaming
- [ ] Payment Gateway - Secure payment processing
- [ ] Notification System - Real-time notifications
- [ ] Chat System - In-app messaging
- [ ] Review & Ratings - Tutor rating system
- [ ] Mobile App - React Native mobile application
- [ ] AI-Powered Matching - Smart tutor-student matching

---

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built for educators and learners worldwide**

</div>
