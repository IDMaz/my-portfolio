import { Icons } from "@/components/icons";
import { HomeIcon, PencilLineIcon, CodeIcon } from "lucide-react";


export const DATA = {
  name: "Azwar Anas",
  initials: "MAZ",
  url: "https://maz.my.id",
  location: "West Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Vision Systems Specialist and PLC Programmer. I love building things and helping people.",
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
        icon: Icons.x,
        navbar: false,
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
      logoUrl: "/epson.jpg",
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
      logoUrl: "/epson.jpg",
      start: "Jun 2024",
      end: "August 2024",
      description:
        "Learn and Applying MEMS 3D Sensor, make program using HALCON APPS",
    },
    {
      company: "AOTS",
      badges: [],
      href: "https://www.aots.jp/",
      location: "Remote",
      title: "Trainee",
      logoUrl: "/aots.jpg",
      start: "Mei 2024",
      end: "June 2024",
      description:
        "The Association for Overseas Technical Cooperation is program to learning Japanese language, Japanese culture and on-site technical training.",
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
    
  ],
  workdesk: [
    {
      tagline: "16GB Ram, 256GB SSD",
      title: "DELL Precicion 3581",
      description:
        "I'm used to using this laptop to complete every project, because what I need is all here and I feel comfortable.",
      image:
        "/dell.png",
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
