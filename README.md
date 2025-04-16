# IFTPRISM Technical Task — Role-Based Authentication System

This project was built as a **technical task for IFTPRISM**, demonstrating a robust and scalable **role-based authentication system** in a modern Next.js application.

## 🔐 Features

- ✅ **Role-based route protection** (Admin & User dashboards)
- 🧠 **Authorization persistence** post-login
- 📊 **Multi-access dashboards** tailored per role
- 🔄 **Token-based session handling** via cookies
- 🚨 **Auto-redirect on unauthorized access**

## 🛠️ Tech Stack

| Category               | Tools & Libraries                                                           |
| ---------------------- | --------------------------------------------------------------------------- |
| **Framework**          | [Next.js](https://nextjs.org/) + [React.js](https://reactjs.org/)           |
| **Language**           | [TypeScript](https://www.typescriptlang.org/)                               |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/)                                    |
| **Forms & Validation** | [Zod](https://zod.dev/), [React Hook Form](https://react-hook-form.com/)    |
| **HTTP & State**       | [Axios](https://axios-http.com/), [React Query](https://tanstack.com/query) |
| **Global State**       | [Zustand](https://zustand-demo.pmnd.rs/)                                    |
| **UI Library**         | [shadcn/ui](https://ui.shadcn.com/)                                         |
| **Code Quality**       | [Husky](https://typicode.github.io/husky) for pre-commit hooks              |

## 🔧 Project Highlights

- **Custom Middleware** to decode JWT tokens and enforce route protection based on user roles.
- **Client-side Authentication Handling** that syncs state via Zustand.
- **Fail-safe Axios Interceptors** to catch and handle 401s globally.
- **Protected API Endpoints**—especially for Admin use only.
- **Clean folder structure** for maintainability and scalability.

## 📂 Folder Structure Overview

```bash
src/
│
├── app/                     # Next.js app directory
│   ├── _compoonents/
│   ├── (dashboard)/          # Group route for
│   │   ├── admin-dashboard/  # Admin +
│   │   └── user-dashboard/   # User dashboard
│   ├── api/                # APIs
│   └── layout.tsx         # App layout
│
├── api/                    # Custom hooks for
│   ├── auth                # the requests
│   └── user
│
├── components/             #Shared components
│
├── lib/                    # Axios instance, validators
│
├── store/                  # Zustand store
│
├── types/                  # Global types/interfaces
│
└── middleware.ts
```

## 🧪 How to Run

```bash
# Install deps
npm install

# Run dev server
npm run dev
```

## 🧼 Developer Experience

- Linting, formatting, and conventional commits are enforced with Husky hooks.

- Real-time error handling and feedback with toast notifications.
