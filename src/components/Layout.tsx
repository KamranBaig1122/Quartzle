import { ReactNode } from 'react';
import GradualBlur from './GradualBlur';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
      <div style={{ minHeight: '100vh', overflow: 'visible', padding: '6rem 2rem' }}>
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

