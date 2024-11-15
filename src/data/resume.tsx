import { Icons } from "@/components/icons";
import { HomeIcon, PencilLineIcon, CodeIcon } from "lucide-react";


export const DATA = {
  name: "Azwar Anas",
  initials: "MAZ",
  url: "https://maz.my.id",
  location: "West Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "a Vision Systems Specialist and PLC Programmer. I love building things and helping people.",
  summary:
    "I have been experienced Automation Engineer since 2016 with a demonstrated history of working in the manufacturing industry. Have strong commitment to work and learn something new in order to improve knowledge and skills.",
  avatarUrl: "/me.png",
  skills: [
    "Computer Vision",
    "Robotic",
    "IoT",
    "PLC",
    "HMI Programming",
    "Industrial Automation",
    "Git",
    "Wordpress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/blog", icon: PencilLineIcon, label: "Blog" },
  ],
  contact: {
    email: "hubungiazwar@gmail.com",
    tel: "+6285730873034",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/idmaz",
        icon: Icons.github,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/mosose",
        icon: Icons.x,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hubungiazwar@gmailcom",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Indonesia Epson Industry",
      href: "https://www.epson.co.id/",
      badges: [],
      location: "Remote",
      title: "Automation Engineering",
      logoUrl: "/addonspro.png",
      start: "March 2016",
      end: "Until Now",
      description:
        "Create an Auotmation system designs by conducting research and development for support production, increase productivity and reduce production cost.",
    },
    {
      company: "Seiko Epson Corporation",
      href: "https://www.epson.jp/",
      badges: [],
      location: "Remote",
      title: "Automation Technology Development",
      logoUrl: "/acl.png",
      start: "Jun 2024",
      end: "August 2024",
      description:
        "Learn and Applying MEMS 3D Sensor, make program using HALCON APPS",
    },
    {
      company: "The Association for Overseas Technical Cooperation (AOTS)",
      badges: [],
      href: "https://www.aots.jp/",
      location: "Remote",
      title: "Trainee",
      logoUrl: "/indomaret.png",
      start: "Mei 2024",
      end: "June 2024",
      description:
        "Japanese language and culture learning and on-site technical training.",
    },
  ],
  education: [
    {
      school: "School1",
      href: "#education",
      degree: "University",
      logoUrl: "/dot.svg",
      start: "2011",
      end: "2015",
    },
    {
      school: "School2",
      href: "#education",
      degree: "Senior high school",
      logoUrl: "/dot.svg",
      start: "2008",
      end: "2011",
    },
    {
      school: "School2",
      href: "#education",
      degree: "Junior high school",
      logoUrl: "/dot.svg",
      start: "2005",
      end: "2008",
    },
    {
      school: "School3",
      href: "#education",
      degree: "Basic education",
      logoUrl: "/dot.svg",
      start: "1999",
      end: "2005",
    },
  ],
  projects: [
    {
      title: "My Portfolio",
      href: "https://me-wildan.vercel.app/",
      dates: "28 Okt 2024 -  30 Okt 2024",
      active: true,
      description:
        "Developed a personal portfolio website using Next.js, TypeScript, and Tailwind CSS. This template is open source and available on GitHub.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://me-wildan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mywildancloud/my-portofolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNkZm93eHJlamtlamhucnB4Ym5xamdyenhqd3BrNjNmbGRjYWcwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QtSyqQC5gK3mT49hdJ/giphy.mp4",
    },
    {
      title: "Ortoo Links",
      href: "https://ortoolinks.vercel.app/",
      dates: "01 Nov 2024 - 02 Nov 2024",
      active: true,
      description:
        "Biolink template for digital product listings such as ebooks, video courses and digital downloads complete with checkout to external links.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ortoolinks.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Buy this template",
          href: "https://t.me/wildannrs",
          icon: <Icons.download className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExam40MXlranNrcGtydDVtcTU4d3VibXFqajJpZ3h3OGM2YjltNnYwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nIoccBCOnlPvuVHzAf/giphy.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  workdesk: [
    {
      tagline: "16GB Ram, 256GB SSD",
      title: "DELL Precicion 3581",
      description:
        "I'm used to using this laptop to complete every project, because what I need is all here and I feel comfortable.",
      image:
        "/apple.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "design tools",
      title: "Figma",
      description:
        "I usually use Figma to create wireframes and to build UI-UX designs before applications or websites are created.",
      image:
        "/figma.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "Visual Studio Code",
      description:
        "Until now, I have used the most comfortable text editor to write each code line by line.",
      image:
        "/visual.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "LocalWP",
      description:
        "If I work on a WordPress-based project, of course I will make it in local development with this extraordinary software.",
      image:
        "/localwp.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "Github",
      description:
        "I will share every open source project through an online repository and among the many gits, github is the one I like the most.",
      image:
        "/github.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
