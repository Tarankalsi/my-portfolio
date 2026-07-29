import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A showcase of full-stack projects by Taran Kalsi, including event management systems, facial recognition photo galleries, and role-based access control platforms.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
