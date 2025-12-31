export const PROJECT_TEMPLATES = [
  {
    emoji: "🎬",
    title: "Build a Netflix clone",
    prompt:
      "Build a polished Netflix-style browse page in dark mode using only mock data. Include: cinematic hero banner with gradient + 2 CTAs, multiple horizontal scroll rows, clickable movie cards, and a Shadcn Dialog details modal with My List (add/remove) persisted via localStorage. Add a 'My List' row that appears only when favorites exist. IMPORTANT: keep app/page.tsx server if possible; put ALL interactivity in Client Components with 'use client' as first line.",
  },
  {
    emoji: "📦",
    title: "Build an admin dashboard",
    prompt:
      "Build a polished admin dashboard using mock data and local state. Include: responsive sidebar navigation, top header with search, stat cards, a chart placeholder card, and a data table with filter + sort + pagination (local). Add empty/loading states and row actions in a DropdownMenu. IMPORTANT: keep app/page.tsx server if possible; all interactive UI in Client Components with 'use client' first line.",
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    prompt:
      "Build a polished Kanban board in a modern UI using local state + mock data. Include: 3–5 columns, add/edit/delete tasks, task details in a Dialog, and drag-and-drop (install react-beautiful-dnd via terminal before importing). Show empty states and subtle hover/focus styles. IMPORTANT: all drag/drop + state must be in Client Components with 'use client' as first line; keep app/page.tsx server if possible.",
  },
  {
    emoji: "🗂️",
    title: "Build a file manager",
    prompt:
      "Build a polished file manager UI with mock data + local state. Include: folder sidebar, searchable/sortable file grid, selection (single + multi), and actions to rename/delete using Dialog + confirmation. Add breadcrumbs and an empty state. IMPORTANT: keep app/page.tsx server if possible; all interactions in Client Components with 'use client' first line.",
  },
  {
    emoji: "📺",
    title: "Build a YouTube clone",
    prompt:
      "Build a polished YouTube-style homepage using mock data. Include: responsive left sidebar categories, top search bar, video grid with hover states, and a Dialog modal preview (title, channel, description, stats) with a 'Watch later' toggle persisted via localStorage. IMPORTANT: keep app/page.tsx server if possible; interactivity in Client Components with 'use client' first line.",
  },
  {
    emoji: "🛍️",
    title: "Build a store page",
    prompt:
      "Build a polished e-commerce store page using mock products and local state. Include: category filters + search + sort, product grid, product details Dialog, and a cart drawer/sheet with add/remove, quantity controls, totals, and persisted cart via localStorage. Add empty states and disabled/loading button states. IMPORTANT: keep app/page.tsx server if possible; all interactivity in Client Components with 'use client' first line.",
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    prompt:
      "Build a polished Airbnb-style listings experience using mock data. Include: filter sidebar (price range, type, rating), listings grid with strong card spacing, and a Dialog details view with amenities + booking CTA. Add a 'Saved' heart toggle persisted via localStorage and a Saved row/section when items exist. IMPORTANT: keep app/page.tsx server if possible; interactivity in Client Components with 'use client' first line.",
  },
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    prompt:
      "Build a polished Spotify-style music app in dark mode using mock data. Include: sidebar playlists, main view with album/playlist details, track list, and a sticky bottom player with play/pause, next/prev, shuffle/repeat toggles, and progress scrubber (local state). Persist last played track + volume to localStorage. IMPORTANT: keep app/page.tsx server if possible; all playback/state UI in Client Components with 'use client' first line.",
  },
] as const;
