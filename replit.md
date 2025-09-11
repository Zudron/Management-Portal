# OrgVision Dashboard

## Overview

OrgVision Dashboard is a comprehensive organizational management system designed for single admin use. The application provides integrated modules for managing finances, human resources, and projects within an organization. Built as a modern web application with a React frontend and Express backend, it features a futuristic, professional design with dark/light theme support and responsive layouts.

The system allows administrators to track financial transactions, manage staff profiles and assignments, oversee project progress with Kanban boards, and visualize organizational data through charts and reports. All modules are interconnected, allowing staff to be assigned to projects with associated financial tracking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client is built using React with TypeScript and follows a component-based architecture. Key architectural decisions include:

- **UI Framework**: Utilizes shadcn/ui component library with Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom design system supporting dark/light themes and futuristic aesthetic
- **Routing**: Wouter for lightweight client-side routing 
- **State Management**: React Query (TanStack Query) for server state management with built-in caching
- **Charts**: Recharts library for financial visualizations and data presentation
- **Layout System**: Resizable sidebar layout with responsive design for mobile/desktop

The design system implements Material Design principles with custom styling, featuring glassmorphism effects, strategic use of gradients, and a professional color palette optimized for both dark and light modes.

### Backend Architecture
The server uses Express.js with TypeScript in ESM format. Current architectural patterns include:

- **Database Integration**: Drizzle ORM configured for PostgreSQL with Neon serverless database
- **API Structure**: RESTful API design with middleware for logging and error handling
- **Storage Layer**: Abstract storage interface allowing for different implementations (currently in-memory)
- **Development Setup**: Vite integration for hot module replacement and development tooling

### Data Layer
The application uses a PostgreSQL database accessed through Drizzle ORM:

- **Schema Management**: Type-safe database schemas with Zod validation
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud deployment
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Connection**: WebSocket-based connection pooling for optimal performance

### Component Structure
The frontend follows a well-organized component hierarchy:

- **Pages**: Main route components (Overview, Finances, Staff, Projects)
- **Shared Components**: Reusable UI components (DashboardCard, TransactionTable, etc.)
- **UI Components**: shadcn/ui based components with custom styling
- **Layout Components**: Sidebar, resizable panels, and responsive wrappers

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server with HMR support

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM for PostgreSQL
- **@neondatabase/serverless**: Neon PostgreSQL serverless database driver
- **PostgreSQL**: Primary database (configured for Neon cloud deployment)

### UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: For component variant styling

### Data Visualization
- **Recharts**: React charting library for financial and project visualizations
- **react-beautiful-dnd**: Drag and drop functionality for Kanban boards

### Development and Build Tools
- **Replit Integration**: Development environment with banner and cartographer plugins
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### State Management and HTTP
- **@tanstack/react-query**: Server state management and caching
- **Wouter**: Lightweight routing library

### Session and Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions

The application is designed to be deployed on Replit with Neon PostgreSQL, providing a fully managed cloud solution for organizational management needs.