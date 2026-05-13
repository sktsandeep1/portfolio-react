# Sandeep Portfolio — React Version

Converted from vanilla Three.js + HTML to a component-based **React + Vite** project.

## Stack
- React 18
- Vite 6
- Three.js (3D particle background)
- GSAP (replaced with CSS + IntersectionObserver for scroll animations)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── ContactFooter.jsx
├── hooks/
│   ├── useThreeBackground.js   # Three.js setup & animation loop
│   └── useReveal.js            # Scroll-triggered reveal animations
├── App.jsx
├── main.jsx
└── index.css
public/
└── assets/
    └── sandeep.png
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
