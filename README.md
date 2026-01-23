<a href="https://vibe.alessandro-argenziano.com" target="_blank">
  <picture>
    <source srcset="https://github.com/alessandro-arg/assets/blob/main/vibe_logo.svg" media="(prefers-color-scheme: dark)">
    <img src="https://github.com/alessandro-arg/assets/blob/main/vibe_logo.svg" width="80" alt="Vibe logo" />
  </picture>
</a>

#

![Repo Size](https://img.shields.io/github/repo-size/alessandro-arg/vibe?style=for-the-badge&color=C96342)
![Last Commit](https://img.shields.io/github/last-commit/alessandro-arg/vibe?style=for-the-badge&color=D97757)

**Vibe** is an **AI-powered website builder** that turns natural language prompts into modern, editable **Next.js apps**. Describe the site you want and Vibe generates pages, components, iterations, and keeps everything reproducible via guided workflows.

> A practical and polished way to generate instant web app scaffolds and then refine and iterate them.

### 🌍 Live Demo

🖥️ <a href="https://vibe.alessandro-argenziano.com" target="_blank">Vibe</a>

##

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| **🧠 Natural Prompt Engine** | Describe your website in plain text and get full pages/components generated. |
| **📦 Next.js Project Output** | Generates a ready-to-run Next.js codebase with routing and UI. |
| **⚙️ Extensible Templates** | Built-in sandbox templates to kickstart new site ideas. |
| **🛠 Integrated Workflows** | Background tasks to refine site iterations and manage revisions. |
| **💻 Live Preview Sandbox** | Run and inspect generated projects safely in-browser. |
| **📍 Type-Safe Stack** | tRPC + Prisma + TypeScript ensure safety from input to database. |

##

### 🛠 Tech Stack

#### Builder & Interface

- **Next.js** - App Router & UI shell
- **React** + **TypeScript**
- **Tailwind CSS** - Modern utility styling
- **shadcn/ui** - Accessible UI primitives
- **tRPC** - Type-safe API layer

#### Backend & Database

- **Prisma** - ORM for structured data
- **Background Workers** - Orchestrated revision and preview workflows
- **Clerk (or similar)** - Authentication support

> *Note:* Exact backend services and components vary by deployment setup and environment configuration.

##

### 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/alessandro-arg/vibe.git
cd vibe
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

### ⚙️ Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_APP_URL="http://localhost:3000"
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_************************"
CLERK_SECRET_KEY="sk_test_************************"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"
INNGEST_EVENT_KEY="inngest_************************"
INNGEST_SIGNING_KEY="signkey_************************"
E2B_API_KEY="e2b_************************"

# AI Provider Keys
# -----------------------------------------------------------------------------
# OPENAI_API_KEY="sk-************************"
# ANTHROPIC_API_KEY="sk-ant-************************"
# GOOGLE_API_KEY="************************"
```

##

### 📂 Project Structure

```text
/
├─ prisma/
│  ├─ schema.prisma
│  ├─ migrations/
│  └─ seed/                      # seed scripts + seed data
│
├─ public/                       # static assets (icons, images, OG, etc.)
│
├─ sandbox-templates/
│  └─ nextjs/                    # base template(s) that Vibe copies/modifies
│
├─ src/
│  ├─ app/                       # Next.js App Router (routes + layouts)
│  │  ├─ (marketing)/            # landing, pricing, docs
│  │  ├─ (auth)/                 # sign-in/up (Clerk pages, redirects)
│  │  ├─ (dashboard)/            # authenticated shell (sidebar/topbar)
│  │  │  ├─ projects/
│  │  │  │  └─ [projectId]/
│  │  │  │     ├─ page.tsx       # project overview
│  │  │  │     ├─ builder/       # builder workspace route(s)
│  │  │  │     ├─ revisions/     # revision history + diff/rollback
│  │  │  │     └─ publish/       # publish settings + metadata
│  │  │  └─ settings/            # account settings
│  │  ├─ api/
│  │  │  ├─ trpc/                # tRPC route handler (Next route)
│  │  │  └─ webhooks/            # Clerk/Inngest/provider webhooks
│  │  └─ layout.tsx
│  │
│  ├─ features/                  # “domain-first” app code (recommended)
│  │  ├─ projects/               # CRUD, list, permissions
│  │  ├─ builder/                # prompt → generation, editor UI, actions
│  │  ├─ revisions/              # revision model, compare, rollback
│  │  ├─ sandbox/                # E2B preview: boot, run, logs, teardown
│  │  ├─ publish/                # publish metadata, deploy hooks
│  │  └─ auth/                   # Clerk helpers, guards, user mapping
│  │
│  ├─ components/
│  │  ├─ ui/                     # shadcn components (buttons, dialogs, etc.)
│  │  ├─ layout/                 # app shell components
│  │  └─ shared/                 # reusable components across features
│  │
│  ├─ server/
│  │  ├─ db/
│  │  │  ├─ prisma.ts            # Prisma client singleton
│  │  │  └─ queries/             # DB query modules (by domain)
│  │  ├─ trpc/
│  │  │  ├─ context.ts
│  │  │  ├─ router.ts
│  │  │  └─ routers/
│  │  │     ├─ projects.ts
│  │  │     ├─ builder.ts
│  │  │     ├─ revisions.ts
│  │  │     ├─ sandbox.ts
│  │  │     └─ publish.ts
│  │  ├─ workflows/
│  │  │  ├─ inngest.client.ts
│  │  │  ├─ functions/
│  │  │  │  ├─ generate-site.ts   # prompt → code generation pipeline
│  │  │  │  ├─ refine-revision.ts # guided iterations
│  │  │  │  └─ warm-preview.ts    # sandbox boot/prep
│  │  │  └─ utils/               # workflow helpers (retry, tracing, etc.)
│  │  ├─ services/
│  │  │  ├─ ai/                  # model provider wrappers + prompts
│  │  │  ├─ templates/           # template copier + patching logic
│  │  │  ├─ sandbox/             # E2B SDK wrapper, runtime controls
│  │  │  └─ publish/             # deployment integration(s)
│  │  └─ auth/
│  │     ├─ clerk.ts             # Clerk server helpers
│  │     └─ guards.ts            # route/data guards
│  │
│  ├─ hooks/                     # React hooks (client-side)
│  ├─ lib/
│  │  ├─ env.ts                  # typed env (Zod) + runtime checks
│  │  ├─ constants.ts
│  │  ├─ utils.ts
│  │  └─ validators/             # shared Zod schemas
│  │
│  ├─ styles/
│  │  └─ globals.css
│  │
│  └─ types/                     # shared TS types (when not in Zod)
│
├─ scripts/                      # one-off scripts (seed, migrate, cleanup)
├─ docs/                         # screenshots, gifs, diagrams (README assets)
│
├─ .env.example
├─ components.json               # shadcn config
├─ next.config.ts
├─ prisma.config.ts
├─ eslint.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

##

### 📜 Scripts

| Command         | Action                   |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build production version |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

### 🚀 Deployment

#### **Deploy to Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

Ensure environment variables are set in the Vercel dashboard.

##

### 🤝 Contributing

```bash
git checkout -b feature/YourFeature
git commit -m "feat: add YourFeature"
git push origin feature/YourFeature
```

Open a Pull Request once done.

##

Made with ❤️ by **Alessandro Argenziano**
