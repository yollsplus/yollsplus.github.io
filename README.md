<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Geometric Personal Page

A static personal homepage with a blueprint/geometric design style, featuring an advanced opening animation and markdown content display.

**Live Demo:** https://yollsplus.github.io

## 🚀 GitHub Pages 部署

本项目已配置 GitHub Actions 自动部署。详细说明请查看 [DEPLOYMENT.md](DEPLOYMENT.md)

**快速部署：**
```bash
git add .
git commit -m "Update site"
git push origin main
```

推送后会自动构建并部署到 GitHub Pages。

## 🛠️ Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── SplashScreen.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── MarkdownViewer.tsx
│   │   └── ParticleBackground.tsx
│   ├── content/         # Markdown content files
│   │   └── about.md
│   └── App.tsx
├── .github/workflows/   # GitHub Actions deployment
└── index.html
```

## 🎨 Features

- ✨ Geometric/Blueprint design style
- 🎬 Advanced loading animation
- 📝 Markdown content support
- 🎯 Particle background effects
- 📱 Responsive design
- ⚡ Built with Vite + React

## 🔧 Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (Animation)
- React Markdown

---

View in AI Studio: https://ai.studio/apps/fd327517-9e2e-4127-8ee5-2b42868581ab
