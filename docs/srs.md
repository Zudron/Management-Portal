# Software Requirements Specification (SRS)

**Project Name:** OrgVision Dashboard
**Document Version:** 1.0
**Prepared For:** CAF
**Prepared By:** Sudarshan
**Date:** 02 September 2025

---

## 1. Introduction

### 1.1 Purpose

The purpose of this SRS is to define requirements for **OrgVision Dashboard**, a centralized admin-only platform for managing projects, budgets, and staff. Unlike a passive read-only tool, this system allows **full control**: admins can create, update, or remove projects and staff, manage roles, and track financials.

The system’s **core visualization** is a **graph view of staff** (nodes) linked to their associated projects, roles, and budgets.

### 1.2 Document Conventions

* Requirements are labeled as **FR-x.y.z** (Functional Requirement) or **NFR-x.y.z** (Non-Functional Requirement).
* Terminology:

  * **Staff** = any individual in the organization (internal, contract, freelance, temporary).
  * **Project** = a defined organizational initiative with timeline, staff, and budget.

### 1.3 Intended Audience

* **Admin Users** (single role for prototype).
* Development team building the system.
* Organizational sponsors and stakeholders validating scope.

### 1.4 Scope

The OrgVision Dashboard provides:

* **Staff management**: add, edit, remove staff records (name, role, type, stipend, assignment).
* **Project management**: add, edit, remove projects with timelines, budgets, staff assignments.
* **Graph visualization**: interactive staff network view showing relationships across projects.
* **Budget oversight**: track allocations and spending per project and staff.
* **Admin-only access**: no other user roles in v1.0.

### 1.5 Overview of the Document

This document details:

* Functional and non-functional requirements.
* Data entities and schemas.
* System features with focus on **graph view**.
* Assumptions and constraints for a rapid prototype.

---

## 2. Overall Description

### 2.1 Product Perspective

The OrgVision Dashboard is a **standalone prototype** web application, built with modern edge-ready technologies for speed and developer experience.

#### 2.1.1 System Interfaces

* **Data Sources**: Local SQLite (Turso distributed later).
* **APIs**: CRUD APIs for Staff, Projects, Budgets.

#### 2.1.2 External Dependencies

* Hosting: Cloudflare Pages + Workers.
* Authentication: Simple Admin login (JWT/Static token).

### 2.2 Product Functions

* Manage staff (CRUD).
* Manage projects (CRUD).
* Assign/remove staff from projects.
* Track stipends and budgets.
* View staff-project relationships in **graph visualization**.

### 2.3 User Classes and Characteristics

* **Admin**: Has complete control over projects and staff.

### 2.4 Operating Environment

* Web app (desktop-first).
* Runs on modern browsers.

### 2.5 Design and Implementation Constraints

* Prototype focus: minimal polish, maximum functionality.
* One role only (Admin).

### 2.6 Assumptions and Dependencies

* Only Admin view required in v1.0.
* Staff data primarily entered manually.

---

## 3. System Features and Requirements

### 3.1 Staff Management

* **FR-3.1.1** Add staff (name, role, type: full-time, contract, freelance, stipend).
* **FR-3.1.2** Edit staff details.
* **FR-3.1.3** Remove staff.
* **FR-3.1.4** Promote/change role of staff.

### 3.2 Project Management

* **FR-3.2.1** Add projects (name, description, start/end, budget).
* **FR-3.2.2** Edit project metadata.
* **FR-3.2.3** Remove projects.
* **FR-3.2.4** Assign/remove staff to/from projects.

### 3.3 Graph View (Core Feature)

* **FR-3.3.1** Display all staff as nodes.
* **FR-3.3.2** Show edges between staff and projects.
* **FR-3.3.3** Hover/select node to highlight related projects/staff.
* **FR-3.3.4** Filter graph by project, role, or staff type.

### 3.4 Budget Oversight

* **FR-3.4.1** Display project budget vs spend.
* **FR-3.4.2** Display staff stipend totals.
* **FR-3.4.3** Highlight budget overruns.

### 3.5 Navigation & Usability

* **FR-3.5.1** Single-page admin dashboard.
* **FR-3.5.2** Sidebar navigation: Staff, Projects, Graph, Budgets.
* **FR-3.5.3** Consistent color-coding (status, roles).

---

## 4. External Interface Requirements

### 4.1 User Interfaces

* Desktop-first, responsive layout.
* Graph view as centerpiece.
* Tables for staff and projects.

### 4.2 Hardware Interfaces

* None (web only).

### 4.3 Software Interfaces

* SQLite (Turso later).
* Authentication: simple admin login (JWT).

### 4.4 Communication Interfaces

* HTTPS/TLS.

---

## 5. Non-Functional Requirements

### 5.1 Performance

* NFR-5.1.1: Graph renders <2s for up to 500 staff.

### 5.2 Security

* NFR-5.2.1: Admin-only authentication.
* NFR-5.2.2: No public access.

### 5.3 Reliability

* NFR-5.3.1: Graceful error handling if DB sync fails.

### 5.4 Usability

* NFR-5.4.1: No training required.

### 5.5 Maintainability

* NFR-5.5.1: Modular components for staff, projects, graph.

---

## 6. Data Requirements

### 6.1 Entities

* **Staff**: ID, Name, Role, Type (full-time/contract/freelance), Start/End, Stipend.
* **Project**: ID, Name, Description, Start/End, Budget, Spend.
* **Assignment**: StaffID ↔ ProjectID, Role, Duration.

### 6.2 Data Sources

* SQLite (prototype), Turso later.

### 6.3 Schema

* ERD: Staff ↔ Projects via Assignments.

### 6.4 Validation

* Required: staff name, project name, budget.
* Dates must be valid ISO format.

---

## 7. System Models

### 7.1 Use Cases

* Admin adds staff.
* Admin assigns staff to projects.
* Admin views staff graph.

### 7.2 User Flow

* Login → Dashboard → Staff/Projects → Graph.

---

## 8. Other Requirements

### 8.1 Legal/Compliance

* Staff data internal only.

### 8.2 Deployment

* Cloudflare Pages + Workers.
* SQLite local → Turso remote later.

### 8.3 Documentation

* Admin quick start guide.

---

## Appendices

* Glossary: Staff, Project, Assignment, Budget, Node.
* Sample data: JSON/CSV example staff + projects.
* Mockups: Graph with staff nodes, linked projects.
