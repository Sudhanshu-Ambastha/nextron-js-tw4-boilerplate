# 🚀 Nextron JS + Tailwind v4 Boilerplate

A **lightweight, manual boilerplate** for **Nextron (Next.js + Electron)** using
**pure JavaScript** and **Tailwind CSS v4**.

This template was created to bypass the limitations of official Nextron examples,
providing a **CSS-first styling engine** without the overhead of TypeScript or
outdated PostCSS configurations.

---

## ✨ Why This Template?

- **Tailwind CSS v4 Engine**  
  Uses the high-performance `@tailwindcss/postcss` bridge.

- **Pure JavaScript**  
  Zero TypeScript bloat. Ideal for rapid prototyping and developers who prefer
  standard **JS / JSX**.

- **Next.js 14 (Pages Router)**  
  Optimized for the most stable **Electron renderer** workflow.

- **Pre-configured IPC**  
  Includes a working **Inter-Process Communication (IPC)** bridge between
  **Main** and **Renderer** processes.

- **Production Ready**  
  Built-in fixes for asset pathing (`unoptimized: true`) ensure your `.exe` or
  `.dmg` looks **exactly the same** as your dev build.

---

## 🛠️ Tech Stack

- **Core**: Nextron `v9.x`
- **UI**: Next.js `v14.x`
- **Styling**: Tailwind CSS `v4.x`
- **Runtime**: Electron `v34.x`

---

## 🚀 Getting Started

### 1️⃣ Installation

Clone this template and install dependencies:

```bash
git clone https://github.com/Sudhanshu-Ambastha/nextron-js-tw4-boilerplate.git
```
### 2️⃣ Enter the directory
```bash
cd template
```
### 3️⃣ Install dependencies
```bash
npm install
```
---

## 📁 Critical Configuration

To maintain proper **Tailwind CSS v4** integration and ensure compatibility with
Nextron’s non-standard project structure, pay close attention to the following
files:

### `postcss.config.js`
Connects the **Tailwind CSS v4 engine** to the **Next.js build pipeline** using
the modern `@tailwindcss/postcss` bridge.

### `renderer/styles/global.css`
Uses the `@source` directive to explicitly scan the **renderer directory** for
Tailwind class usage.

> This is required because Nextron does **not** follow the default Next.js
> directory structure, and automatic scanning would otherwise miss files.

### `renderer/next.config.js`
Configured with:

```js
unoptimized: true
```
This setting prevents **image and asset breakage** in packaged Electron
applications (`.exe`, `.dmg`) and ensures the production build visually matches
the development environment.

---

## 🧱 How This Boilerplate Was Created (For Builders)

This section is for developers who want to **recreate, understand, or extend**
the boilerplate from scratch.

---

### 1️⃣ Create the Base Nextron App

```bash
npx create-nextron-app template --example basic-lang-javascript
```
---

### This initializes:

- Nextron v9
- JavaScript-only setup (no TypeScript)
- Electron **Main** + **Renderer** processes
- Next.js **Pages Router**

---

### 2️⃣ Enter the Project

```bash
cd template
```
---

### 3️⃣ Install Tailwind CSS v4

Install Tailwind CSS v4 along with the required PostCSS tooling:

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```
---

After installing the required packages, complete the following configuration
steps to ensure **Tailwind CSS v4** works correctly with **Nextron**:

### 🔧 Configuration Steps

- Configure **`postcss.config.js`** to use the `@tailwindcss/postcss` bridge
- Add Tailwind directives **and** the `@source` directive in  
  **`renderer/styles/global.css`**
- Adjust Tailwind scanning paths to account for Nextron’s
  **non-standard directory structure**

---

### 4️⃣ Verify Setup

Start the development server to verify that **Tailwind CSS v4** and **Nextron**
are working correctly together:

```bash
npm run dev
```
---

## 📦 Dependency Notes

This repository already includes a fully configured **`package.json`**.

If you are using the boilerplate directly, you only need to run:

```bash
npm install
```
All required dependencies (Nextron, Electron, Next.js, Tailwind CSS v4)
will be installed automatically.

Exact dependency versions can be found in `package.json`.

---

## 📝 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](./LICENSE) file for full details.

---
