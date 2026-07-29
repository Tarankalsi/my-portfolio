import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Taran Kalsi — full-stack developer available for new projects and opportunities.',
};

export default function ContactPage() {
  return <ContactContent />;
}
