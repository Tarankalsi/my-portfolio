export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'mobile' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 'event-management-system',
    title: 'Event Management System',
    description: 'Comprehensive event management platform with QR code scanning, badge printing, and automated registration workflows.',
    longDescription: 'Built a scalable event management system capable of handling 1000+ concurrent registrations. Features include dynamic email templating, QR code generation and scanning, automated badge printing with KonvaCanvas, and real-time registration tracking. Implemented role-based access control for admins and event organizers.',
    image: 'https://ik.imagekit.io/dgf4txxxo/Screenshot%202026-02-27%20211433.png',
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Prisma', 'AWS S3'],
    features: [
      'QR code generation and scanning for seamless check-in',
      'Dynamic badge printing with customizable templates',
      'Bulk registration via Excel file upload',
      'Real-time email notifications with QR codes',
      'Role-based admin dashboard',
      'Camera integration for photo capture during registration'
    ],
    github: '',
    demo: 'https://www.linkedin.com/posts/kalsitaran_feature-eventdashboard-javascript-activity-7413869687639568384-e26M?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrpgAoB08RKck3VtOveaI4DcECPau4T5yM',
    category: 'fullstack',
  },
  {
    id: 'automated-face-gallery',
    title: 'Automated Face Recognition Event Gallery',
    description: 'Event photo management system with facial recognition for personalized gallery creation and secure cloud storage.',
    longDescription: 'Developed an event management system that automatically organizes and delivers personalized photo galleries using facial recognition (Amazon Rekognition). Implemented attendee indexing, bulk photo uploads, and secure cloud storage with AWS S3 using a full-stack architecture (Node.js, Next.js, PostgreSQL).',
    image: 'https://ik.imagekit.io/dgf4txxxo/thumbnails/Screenshot%202026-02-27%20213054.png',
    technologies: ['React', 'Next.js','TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma' , 'Amazon Rekognition' , 'AWS S3'],
    features: [
      'Event management with automated photo gallery creation using face recognition',
      'Facial recognition using Amazon Rekognition to automatically match attendees with event photos',
      'Attendee selfie capture for facial indexing',
      'Personalized Photo Galleries auto-organized per attendee',
      'Photographer upload portal for bulk photo uploads',
      'AWS S3 integration for cloud storage',
    ],
    github: '',
    category: 'fullstack',
  },
  {
    id: 'qr-based-networking-system',
    title: 'QR Based Networking System',
    description: 'System for a QR-based digital business card platform to streamline networking at events',
    longDescription: 'Developed a backend system for a QR-based digital business card platform to streamline networking at events. Built secure RESTful APIs for exhibitor and visitor management, QR scanning, authentication (JWT), and automated contact exchange with lead tracking functionality.',
    image: '',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    features: [
      'Developed a backend API for a QR-based digital business card system to simplify networking and automate contact exchange at events.',
      'Built RESTful APIs for exhibitor and visitor management, QR code scanning, and contact exchange.',
      'Implemented secure session-based and JWT authentication for smooth multi-booth interactions.',
      'Captured and stored visitor interactions for exhibitors to follow up and manage leads efficiently.',
    ],
    github: 'https://github.com/Tarankalsi/qr-networking',
    category: 'fullstack',
  },
   {
    id: 'feature-and-role-based-access-control-system',
    title: 'Feature and Role Based Access Control System',
    description: 'Designed and implemented a multi-tenant feature access system supporting subscription-based and custom feature sets per institute.',
    longDescription: 'Designed and implemented a multi-tenant feature access system supporting subscription-based and custom feature sets per institute. Developed dynamic role-based permissions, usage tracking, and quota enforcement to ensure secure and scalable access control.',
    image: 'https://ik.imagekit.io/dgf4txxxo/thumbnails/image.png',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'mongoose'],
    features: [
      'Built a multi-tenant feature access system with support for custom, subscription-based, and hybrid feature sets per institute.',
      'Implemented usage tracking, quota enforcement, and dynamic feature/permission assignment based on user roles or admin-defined access.',
      'Developed middleware for route-level validation, enforcing access rules before request processing and syncing with dashboard visibility.',
    ],
    github: '',
    category: 'fullstack',
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}