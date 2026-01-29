import { ReactNode } from 'react';
import GradualBlur from './GradualBlur';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
      <div className="min-h-screen overflow-visible px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 lg:px-8 lg:pt-28 lg:pb-24">
        {children}
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}

export default Layout;

