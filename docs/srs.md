# **Software Requirements Specification (SRS)**

**Project Name:** OrgVision Dashboard
**Version:** 1.0
**Date:** 02 September 2025
**Prepared By:** \[Dev Team]

---

## **1. Introduction**

### **1.1 Purpose**

OrgVision Dashboard is a lightweight, admin-only web application for managing organizational projects, people, and budgets. It provides **full CRUD control** (create, update, delete) for projects and people, and visualizes relationships in a **graph view** where people and projects appear as connected nodes.

### **1.2 Intended Audience**

* **Admin Users (only)**: single login, full control.
* **Developers**: to implement and iterate rapidly.

### **1.3 Scope**

* Single **admin interface** (no multiple roles, no user segregation).
* Features:

  * Manage Projects (create, update, delete).
  * Manage People (create, update, promote/change role, delete).
  * Assign/remove people to/from projects.
  * Track stipends/budgets.
  * **Graph visualization**: people ↔ projects as nodes with relationships.

### **1.4 Document Overview**

This SRS defines a **prototype-first approach**. Heavy compliance or enterprise formalities are excluded to prioritize **fast delivery**.

---

## **2. Overall Description**

### **2.1 Product Perspective**

* Web app: Qwik (frontend), Hono+Bun (backend), Turso (DB).
* Admin-only login.
* Graph-first visualization (force-directed layout).

### **2.2 Product Functions**

* **People CRUD**: add, update, remove, promote.
* **Project CRUD**: add, update, remove.
* **Assignment Management**: connect/disconnect person ↔ project.
* **Budget Management**: edit project budgets, assign stipends.
* **Visualization**: graph view of all relationships.

### **2.3 User Classes**

* **Admin**: single class, full control.

### **2.4 Operating Environment**

* Runs on web browser (desktop-first, responsive).
* Hosted on Cloudflare Pages + Workers.

### **2.5 Constraints**

* Prototype focus: **speed > completeness**.
* No multi-role auth; single admin login.
* Edge-friendly DB (Turso) → must handle sync across nodes.

### **2.6 Assumptions**

* Admin knows organization context.
* Minimal user training required.

---

## **3. System Features**

### **3.1 People Management**

* Add new person (name, role, type, stipend, start/end).
* Update person details (promotion, role change).
* Delete/remove person.
* Assign person to projects.

### **3.2 Project Management**

* Add new project (name, description, budget, duration).
* Update project (budget changes, timeline changes).
* Delete project.

### **3.3 Assignment & Roles**

* Connect/disconnect people ↔ projects.
* Update roles within a project.

### **3.4 Budget & Finance**

* Update project budgets.
* Assign stipends.
* View budget vs. spend at a glance.

### **3.5 Graph Visualization**

* Force-directed node graph:

  * Projects = large nodes.
  * People = smaller nodes.
  * Edges = assignments (person ↔ project).
* Interactive features:

  * Click node = show details in sidebar.
  * Hover = highlight connected nodes.
  * Search/filter = highlight matching nodes.

---

## **4. External Interface Requirements**

### **4.1 User Interface**

* Single-page dashboard with:

  * **Sidebar navigation** (Projects, People, Graph).
  * **Main Graph View** (default landing page).
  * **Detail panel** (shows project/person details).

### **4.2 Software Interfaces**

* Backend API (Hono, Bun).
* Database: Turso (SQLite, edge-distributed).
* ORM: Drizzle ORM.
* Graph rendering: Visx/D3.js in Qwik.

### **4.3 Authentication**

* Single admin login (static credentials or simple SSO).

---

## **5. Non-Functional Requirements**

### **5.1 Performance**

* Graph renders < 2s for up to 500 nodes.

### **5.2 Security**

* HTTPS enforced.
* Admin-only access.

### **5.3 Usability**

* Minimalist UI.
* Graph is intuitive, clickable, zoomable.

---

## **6. Data Requirements**

### **6.1 Entities**

* **Project**: ID, Name, Description, Budget, Duration.
* **Person**: ID, Name, Role, Type, Stipend, Start/End.
* **Assignment**: Person ↔ Project, Role in project.

---

## **7. System Models**

### **7.1 Graph Model**

* Nodes = People + Projects.
* Edges = Assignments.
* Force-directed layout.

---

## **8. Other Requirements**

* Prototype-first (deliver visible working system fast).
* No multi-role expansion in prototype.

---

## **Appendices**

### **A. Mock Graph Example**

* Project A connected to 3 People nodes.
* Person X connected to 2 Projects.

