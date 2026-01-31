import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktiere uns bei Fragen, Anregungen oder Kooperationsmöglichkeiten. Wir freuen uns auf deine Nachricht und antworten in der Regel innerhalb von 24-48 Stunden.',
  openGraph: {
    title: 'Kontakt - Camping Blog',
    description: 'Kontaktiere uns bei Fragen, Anregungen oder Kooperationsmöglichkeiten.',
    type: 'website',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
