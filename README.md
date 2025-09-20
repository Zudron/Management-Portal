<div align="center">
  <br />
  <h1 align="center">OrgVision Dashboard</h1>
  <p align="center">
    A unified command center for your organization's finances, staff, and projects.
    <br />
<!--     <a href="#"><strong>Explore the Docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a> -->
  </p>
</div>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge">
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge">
</p>

---

## About The Project

OrgVision is a sleek, modern dashboard designed to provide a single source of truth for organizational management. Built for a single administrator, it seamlessly integrates modules for **Finances**, **Human Resources**, and **Projects** into one cohesive experience.

From tracking inflows and outflows to managing staff profiles and visualizing project timelines on a Kanban board, OrgVision leverages a cutting-edge tech stack to deliver a fast, responsive, and visually stunning interface.

> Our philosophy is simple: complex organizational data doesn't require a complex interface. OrgVision is designed to bring clarity and control to your fingertips, in a package that looks and feels like the future of management software.

---

## Core Features

*   **Financial Tracking:** Full CRUD on financial transactions, account management, and data visualization with rich charts to monitor your organization's health.
*   **Staff Management:** A comprehensive staff directory, profile management, and project assignments. Visualize team structure with network and hierarchy graphs.
*   **Project Oversight:** Plan, track, and manage projects with interactive Kanban boards. Utilize drag-and-drop functionality for tasks and stay on top of deadlines.
*   **Modern UI/UX:** A stunning interface built with a custom design system. Features include **dark/light theme support**, glassmorphism effects, strategic gradients, and a fully responsive, mobile-first layout.
*   **Blazing Fast Performance:** Built with Vite and a serverless backend, the dashboard is optimized for speed. Server state management with React Query ensures a snappy, cached-first experience.
*   **Type-Safe from End to End:** With TypeScript, Drizzle ORM, and Zod validation, the entire application is built on a foundation of type safety, reducing bugs and improving developer experience.

---

## Built With

This project leverages a powerful and modern technology stack to deliver a top-tier user experience and a robust backend infrastructure.

| Category                | Technologies                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
|  **Core Frameworks**  | `React 18`, `Express.js`, `TypeScript`, `Vite`                                                               |
|  **Database & ORM**   | `PostgreSQL` (via `Neon`), `Drizzle ORM`, `Zod`, `Drizzle Kit`                                                 |
|  **UI & Styling**     | `shadcn/ui`, `Tailwind CSS`, `Radix UI`, `Lucide Icons`, `CVA`                                                 |
|  **Data & State**     | `TanStack Query` (React Query), `Recharts`, `react-beautiful-dnd`                                            |
|  **Backend & API**    | `ESM`, `RESTful API`, `connect-pg-simple` for sessions                                                       |
|  **Deployment & Dev** | `Replit`, `Neon Serverless`, `ESBuild`, `PostCSS`                                                            |

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18+) or Bun
*   PostgreSQL database (A free tier on [Neon](https://neon.tech/) is recommended)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/orgvision-dashboard.git
    cd orgvision-dashboard
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    # or npm install / pnpm install
    ```

3.  **Set up your environment variables:**
    *   Create a `.env` file in the root of the project by copying the `.env.example` file.
    *   Fill in your `DATABASE_URL` from Neon and any other required secrets.

4.  **Run database migrations:**
    *   Drizzle Kit will push the schema to your database, creating all necessary tables.
    ```sh
    bun db:push
    ```

5.  **Run the development server:**
    *   This will start both the backend API and the frontend React app with Hot Module Replacement (HMR).
    ```sh
    bun dev
    ```
    > Your application should now be running at `http://localhost:5173` (or the port specified by Vite).

---

## 📂 Project Structure

The repository follows a clean, organized monorepo structure to separate concerns and promote code reusability.

<details>
<summary>Click to expand folder structure</summary>
/orgvision-dashboard
|
|-- /apps
|   |-- /client           // React Frontend (Vite)
|   |   |-- /src
|   |   |   |-- /components
|   |   |   |   |-- /ui     // shadcn/ui components
|   |   |   |   `-- /shared // Reusable dashboard components
|   |   |   |-- /hooks      // Custom React hooks
|   |   |   |-- /lib        // Utilities, API clients
|   |   |   `-- /pages      // Route components
|   |
|   `-- /server           // Express.js Backend
|       |-- /src
|       |   |-- /db         // Drizzle schema and migrations
|       |   |-- /routes     // API endpoint definitions
|       |   `-- /storage    // Abstract storage layer
|
|-- /packages             // (Optional: for shared code)
|
`-- package.json
  
</details>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
