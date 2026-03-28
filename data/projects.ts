export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  overview: string;
  href: string;
  preview: string;
  year: string;
  services: readonly string[];
  stack: readonly string[];
  highlights: readonly string[];
  links: readonly ProjectLink[];
};

export const projects = [
  {
    index: "01",
    slug: "real-time-chat-application",
    title: "Real-Time Chat Application",
    category: "Messaging Platform",
    status: "Live",
    summary:
      "A full-stack messaging product built for instant conversations, secure sign-in, and a UI that stays responsive under real-time activity.",
    overview:
      "Built with React, Node.js, Socket.IO, and MongoDB, this project focuses on the full loop of live communication: authentication, presence, typing states, message delivery, and durable chat history. Zustand keeps the client state predictable while the backend handles low-latency events and persistent storage.",
    href: "/work/real-time-chat-application",
    preview: "/work/chat-app-preview.svg",
    year: "2025",
    services: ["Full-Stack Development", "Realtime Architecture", "Authentication"],
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Zustand", "JWT", "OAuth"],
    highlights: [
      "Engineered instant, low-latency messaging flows with Socket.IO for real-time bidirectional communication.",
      "Integrated JWT and OAuth authentication while managing application-wide state with Zustand.",
      "Designed a responsive chat interface with presence, typing indicators, and persistent MongoDB message history."
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://chat-app-o7yb.onrender.com/"
      },
      {
        label: "GitHub",
        href: "https://github.com/Sohamzinjad/chat-app"
      }
    ]
  },
  {
    index: "02",
    slug: "gearguard",
    title: "GearGuard",
    category: "Odoo Maintenance Module",
    status: "Demo",
    summary:
      "An enterprise maintenance workflow module for Odoo that tracks assets, servicing schedules, and operational issues through a clearer dashboard system.",
    overview:
      "GearGuard was built inside the Odoo ERP ecosystem using TypeScript, Python, and PostgreSQL. The project centered on making maintenance workflows easier to act on by combining asset tracking, Kanban-style visibility, service planning, and fault monitoring into one system. It was developed in a competitive hackathon environment where speed and structure both mattered.",
    href: "/work/gearguard",
    preview: "/work/gearguard-preview.svg",
    year: "Jan 2026",
    services: ["ERP Module Development", "Dashboard UX", "Team Delivery"],
    stack: ["TypeScript", "Python", "PostgreSQL", "Odoo ORM"],
    highlights: [
      "Developed the module inside Odoo rather than building a disconnected front-end concept.",
      "Designed dashboards for resource allocation, servicing schedules, and real-time fault tracking.",
      "Led Team Gear God to 15th place out of 106 teams in the Odoo x Adani Hackathon."
    ],
    links: [
      {
        label: "Demo Video",
        href: "https://youtu.be/y9OlIrfBHg8"
      }
    ]
  }
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
