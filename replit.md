# 3D Printing Filament Calculator

## Overview

A single-page web application that calculates filament length, weight, volume, and cost for 3D printing projects. The tool provides instant visual feedback and allows users to track remaining filament on their spools. Built as a utility-focused calculator with Material Design principles, emphasizing clarity and efficient data entry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety and modern component patterns
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Single-page application (SPA) with Wouter for lightweight client-side routing
- React Query (TanStack Query) for server state management and data fetching

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with custom design tokens
- Material Design principles adapted for calculator interface
- Component path aliases configured via TypeScript (`@/components`, `@/lib`, etc.)

**Styling Architecture:**
- Custom Tailwind configuration with extended theme including:
  - Custom border radius values (lg: 9px, md: 6px, sm: 3px)
  - CSS variables for theming (light/dark mode support via HSL color system)
  - Custom elevation utilities (hover-elevate, active-elevate-2)
  - Typography using Inter (primary) and Roboto Mono (monospace for numbers)
- Design system emphasizes spacing units: 2, 3, 4, 6, 8, 12

**Layout Strategy:**
- Two-column desktop layout (lg:grid-cols-2) with inputs on left, live results on right
- Mobile-first responsive design collapsing to single column stack
- Maximum container width: max-w-6xl
- Sticky results panel on desktop for persistent visibility during scrolling

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- ESM module system throughout the stack
- Custom middleware for request logging and JSON response capture
- Development server with Vite middleware integration for seamless HMR

**API Design:**
- RESTful API structure with `/api` prefix for all application routes
- Request/response logging with truncation for readability (80 character limit)
- CORS and credential handling configured for secure cross-origin requests

**Storage Layer:**
- In-memory storage implementation (MemStorage) following IStorage interface pattern
- Designed for easy migration to database-backed storage
- User management with UUID-based primary keys
- Storage interface includes CRUD operations: getUser, getUserByUsername, createUser

**Data Validation:**
- Drizzle-Zod integration for runtime schema validation
- Type-safe database queries and mutations
- Schema-driven validation ensures data integrity

### Database Architecture

**ORM & Schema Management:**
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Schema defined in `shared/schema.ts` for code sharing between client and server
- Migration system via Drizzle Kit with migrations stored in `/migrations` directory
- Database connection via environment variable `DATABASE_URL`

**Schema Design:**
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Username uniqueness constraint
- Password storage (implementation should use proper hashing)
- Extensible schema pattern using Drizzle's type inference

**Type Safety:**
- Generated TypeScript types from schema (`User`, `InsertUser`)
- Zod schemas derived from Drizzle schemas for validation
- Shared types between frontend and backend via `@shared` path alias

### Build & Deployment

**Build Process:**
- Client build: Vite bundles React app to `dist/public`
- Server build: esbuild bundles Express server to `dist/index.js`
- TypeScript compilation checking via `tsc` (noEmit mode)
- Production server runs compiled JavaScript from dist directory

**Environment Modes:**
- Development: tsx with hot reload, Vite dev server, Replit plugins
- Production: Node.js running bundled output
- Environment-specific plugin loading (cartographer, dev-banner only in development)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem:** react, react-dom, @tanstack/react-query
- **Routing:** wouter (lightweight React router)
- **Server:** express, http (Node.js native)
- **Build Tools:** vite, @vitejs/plugin-react, esbuild, tsx (TypeScript executor)

### UI Component Libraries
- **Radix UI:** Complete suite of headless UI primitives (@radix-ui/react-*)
- **Styling:** tailwindcss, autoprefixer, postcss
- **Utilities:** class-variance-authority, clsx, tailwind-merge
- **Icons:** lucide-react
- **Form Handling:** react-hook-form, @hookform/resolvers
- **Additional UI:** cmdk (command palette), vaul (drawer), embla-carousel-react

### Database & Validation
- **ORM:** drizzle-orm, drizzle-kit
- **Database Driver:** @neondatabase/serverless (PostgreSQL)
- **Validation:** zod, drizzle-zod

### Development Tools
- **Replit Integration:** @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner
- **TypeScript:** TypeScript 5.x with strict mode enabled
- **Date Handling:** date-fns

### Session Management
- **Session Store:** connect-pg-simple (PostgreSQL session store for Express)

### Configuration Notes
- All paths use ES modules (type: "module" in package.json)
- Path aliases configured in both tsconfig.json and vite.config.ts
- TypeScript strict mode enabled with additional compiler checks
- Bundle configuration optimized for modern browsers