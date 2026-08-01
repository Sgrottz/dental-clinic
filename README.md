A website built with React to showcase my projects, skills, and contact information, featuring smooth navigation and a modern UI.

## Installation

1. Clone this repository:
```bash
   git clone https://github.com/Sgrottz/minha-clinica.git
   cd minha-clinica
```
2. Install dependencies:
```bash
   npm i
```
3. Start the development server:
```bash
   npm run dev
```

# project structure

## src/
The source code of the application.

### assets/
Static files such as images, icons, and fonts.

### components/
Small, reusable UI elements used across the app.  

### context/
React Context providers for shared state.  
Includes:  
- `AppContext.jsx` : provides `content` and `refs` via `useApp()` and `useContent()`

### css/
CSS files or modules for styling components and sections.  

### data/
Static content or configuration files.
Includes:
- `content.json` : all textual content and dynamic page data is stored here.

### sections/
Main page sections of the portfolio (large components).  

### utils/
Helper functions or small modules used across the app.  

### App.jsx
The root component of the application. Wraps all sections.

### main.jsx
Entry point of the application.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
