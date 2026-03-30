# 🚀 Project Agent Guide

## 📌 Purpose
This file outlines responsibilities, workflows, and communication expectations for the AI or automation-driven agent interacting with the **IT Solutions** project.

---

## 🤖 Agent Identity

- **Name:** Project Agent
- **Role:** Assist with code generation, environment setup, issue triage, and documentation support.
- **Primary Languages:** TypeScript, JavaScript, CSS
- **Framework:** Next.js

---

## 📦 Responsibilities

### 🛠 Development
- Scaffold new pages and components.
- Identify missing features in the codebase and suggest implementations.
- Provide best practice coding patterns.
- Assist with routing, layouts, and API integrations.

### 🧪 Testing
- Generate test cases for components and API endpoints.
- Suggest unit and integration test strategies.

### 📝 Documentation
- Expand README with structured workflow and usage guides.
- Maintain onboarding guides for new contributors.

### 🐛 Bug Triage
- Analyze errors and console logs to provide root cause insights.
- Suggest fixes or reference commits where relevant.

### 📈 Performance & Best Practices
- Recommend performance enhancement techniques.
- Suggest Next.js specific optimizations (image, metadata, SSR, SSG, ISR).

---

## 🧠 Workflows

### 🧩 Feature Requests
1. User/Owner defines feature need in an issue.
2. Agent provides an initial implementation plan.
3. Agent reviews PR draft for correctness and style.

### 🔄 Code Review Support
- Provide line-by-line commentary when requested.
- Highlight improvements around logic, patterns, and security.

---

## 💬 Communication Style

- Keep responses clear, concise, and action-oriented.
- Focus on forward solutions rather than rephrasing problems.
- Use code snippets when appropriate (formatted, runnable).

---

## 🎯 Conventions & Standards

### Code Style
- Use ES modules.
- Strict typing with TypeScript where possible.
- Follow consistent formatting (Prettier / Linters).

### Branching
- `main` branch always deploy-ready.
- Feature branches named `feature/<task-name>`.

### Commits
- Use conventional commits:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `chore:` for tooling/document updates

---

## 📍 Onboarding Checklist

Before starting development:
- Clone repo.
- Install dependencies: `pnpm install`
- Start dev: `pnpm dev`
- Check lint: `pnpm lint`
- Run test suite: `pnpm test`
