# OrgVision Dashboard

### 📌 Overview

**OrgVision Dashboard** is a lightweight **admin-only prototype** for managing staff, organization structure, projects, and budgets.

Unlike traditional rigid HR tools, OrgVision focuses on:

* **Staff** (full-time, contract, freelance, stipend-based)
* **Projects** (with budgets, timelines, and assignments)
* **Graph Visualization** (interactive network of staff and their project links)

This prototype prioritizes **speed, control, and visibility** for admins who need to quickly add, update, and visualize organizational dynamics.

---

## 🎯 Goals (v1.0 Prototype)

* **One Admin View** → no other roles for now.
* **Full CRUD Control** → manage staff, projects, assignments, budgets.
* **Graph Visualization** → explore staff-project network in real time.
* **Rapid Prototyping** → built with modern, edge-ready stack.

---

## 🛠️ Tech Stack

### Runtime / CLI

* **[Bun](https://bun.sh/)** → TypeScript-first, ultra-fast runtime, package manager, bundler.

### Backend Framework

* **[Hono](https://hono.dev/)** → small, fast, edge-ready framework (runs on Bun, Cloudflare Workers, Vercel).

### Frontend Framework

* **[Qwik](https://qwik.dev/)** + **Qwik City** → resumability-first frontend with near-zero JS on load, ultra-fast navigation.

### Database

* **[SQLite (local)](https://www.sqlite.org/)** for prototyping.
* **[Turso](https://turso.tech/)** for globally distributed, low-latency SQLite (production-ready).

### ORM & Migrations

* **[Drizzle ORM](https://orm.drizzle.team/)** + Drizzle Kit → type-safe, schema-first, Bun-friendly.

### Auth

* **Simple Admin Login** → JWT or static token (v1.0).
* (Future: Kinde/Clerk for org-aware auth).

### Visualization

* **Graph View** → built with D3.js / Visx for interactive staff-project networks.

### Hosting

* **Cloudflare Pages + Workers** → edge deployment for minimal latency.

---

## ⚡ Features

### ✅ Staff Management

* Add, edit, remove staff.
* Track staff type (full-time, contract, freelance, stipend).
* Promote/change staff role.

### ✅ Project Management

* Add, edit, remove projects.
* Assign/remove staff.
* Manage project budgets.

### ✅ Graph Visualization (Core Feature)

* Interactive network of staff nodes + project links.
* Hover/select staff to view assignments and connected projects.
* Filter by project, role, staff type.

### ✅ Budget Oversight

* View project budgets vs spend.
* Track staff stipends.
* Highlight overruns.

---

## 🚀 Development Setup

### Prerequisites

* [Bun](https://bun.sh/) installed.
* Node.js (for tooling fallback).
* GitHub account for repo + CI/CD.

### Clone Repo

```bash
git clone https://github.com/<your-org>/orgvision-dashboard.git
cd orgvision-dashboard
```

### Install Dependencies

```bash
bun install
```

### Run Dev Server

```bash
bun dev
```

### Run Database Migrations

```bash
bun drizzle-kit push
```

---

## 🌐 Deployment

### Cloudflare Pages + Workers

1. Push to `main` branch.
2. GitHub Actions → run Bun build + deploy.
3. DB → local SQLite for now, switch to Turso later.

---

## 📊 Roadmap (Short-Term)

* [x] Admin-only login.
* [x] Staff & project CRUD.
* [x] Graph view of staff + projects.
* [ ] Budget visualization.
* [ ] Filters in graph (by project/role/type).
* [ ] Deploy to Cloudflare Workers.

---

## 👥 Terminology

* **Staff** → Any individual (full-time, contract, freelance, stipend).
* **Project** → Initiative with timeline + budget.
* **Assignment** → Link between staff and projects.
* **Graph Node** → Staff or Project represented visually.
