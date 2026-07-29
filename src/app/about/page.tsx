import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Full-stack developer originally from India, now pursuing a Master's in Computing at ANU. Experience building event management, education SaaS, and role-based access control systems.",
};

export default function AboutPage() {
  return <AboutContent />;
}
