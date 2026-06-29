# Team Na$H - Capstone Project Portfolio

Welcome to the central portfolio repository for **Team Na$H**. This project serves as the main landing page for our Capstone Project (Track A Monorepo), highlighting our team members and providing links to the individual functional applications we have built.

## 👥 Meet The Team

We are a collective of developers crafting seamless, high-performance web applications with modern design and solid architecture. 

- **Nitish** - Kanban Task Board
- **Aditya** - Interactive Quiz App
- **Shahul** - Live News Feed
- **Zinnah** - GitHub Developer Explorer
- **Harsh** - Expense Tracker

## 🚀 Projects

This repository links out to our 5 core applications. The live URLs and source code repositories for each app will be updated on the landing page once deployed.

## 🎨 Global Theme System (For Branch Projects)

To ensure a unified, consistent aesthetic across all 6 applications—even if they are hosted in separate repositories or branches—we have extracted our core design tokens into a standalone theme file.

### How to use the theme in your project:

1. Copy the `global-theme.css` file from this repository into your individual project's root folder.
2. Link it in the `<head>` of your project's `index.html` **before** your project's custom CSS file:
   ```html
   <link rel="stylesheet" href="global-theme.css">
   <link rel="stylesheet" href="your-custom-styles.css">
   ```
3. Use the CSS variables in your own stylesheet for colors, shadows, borders, and typography. For example:
   ```css
   body {
     background: var(--bg-primary);
     color: var(--text-primary);
     font-family: var(--font-body);
   }

   .my-custom-button {
     background: var(--accent);
     border-radius: var(--radius-btn);
   }
   ```

By relying on `global-theme.css`, our beautiful, airy glassmorphic design and the Google Fonts (Outfit & Inter) will automatically apply everywhere, maintaining our brand identity across all projects!
