# Project Context: Beforest Hospitality

## Project Overview
This project is a **Next.js 16** application for **Beforest Hospitality** (specifically highlighting "The Blyton Bungalow" in Coorg). It serves as a marketing and booking platform for eco-luxury stays, emphasizing permaculture and sustainable living.

## Tech Stack
*   **Framework:** Next.js 16.1.0 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Fonts:** Local fonts (`ABCArizonaFlare` for serif, `ABCArizonaSans` for sans-serif) configured via `next/font/local`.
*   **Linting:** ESLint

## Getting Started
*   **Install Dependencies:** `npm install`
*   **Run Development Server:** `npm run dev`
*   **Build for Production:** `npm run build`
*   **Start Production Server:** `npm run start`

## Project Structure
*   `app/` - Main application directory (App Router).
    *   `layout.tsx` - Root layout, defines fonts and global metadata.
    *   `page.tsx` - Homepage, composes various sections (Header, Hero, etc.).
    *   `globals.css` - Global styles and Tailwind v4 `@theme` configuration.
    *   `components/` - Reusable UI components (e.g., `Header`, `Hero`, `Footer`).
    *   `actions/` - Server actions (e.g., `contact.ts`).
*   `public/` - Static assets including local font files and images.

## Development Conventions

### Styling (Tailwind CSS v4)
*   The project uses **Tailwind CSS v4**.
*   **Theme Configuration:** Defined in `app/globals.css` using the `@theme` directive.
    *   **Colors:** Custom colors like `--color-dark-earth`, `--color-rich-red`, `--color-forest-green` are defined here and used as utility classes (e.g., `text-dark-earth`, `bg-off-white`).
    *   **Fonts:** `--font-serif` and `--font-sans` variables are mapped to the local fonts loaded in `layout.tsx`.

### Component Structure
*   **Functional Components:** Uses React functional components.
*   **Client vs Server:** Components requiring interactivity (like `Header` with scroll listeners) are marked with `"use client"`.
*   **Images:** Uses both `next/image` and standard `<img>` tags. Images are frequently sourced from **ImageKit** (external CDN).

### Fonts
*   Fonts are loaded locally in `app/layout.tsx` using `next/font/local` and injected into the body via CSS variables.

## Key Files
*   `app/layout.tsx`: Root layout handling font loading and metadata.
*   `app/globals.css`: Central place for Tailwind v4 theme configuration and base styles.
*   `app/components/Header.tsx`: Example of a client component with scroll-based styling logic.
