import Link from 'next/link';

import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="px-0 top-0 left-0 w-full z-[100] opacity-100 bg-bg-dark">
      <div className="w-[60%] mx-auto flex items-center justify-between pt-3 pb-2 border-b-2 border-b-muted-gray-color">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <h1 className="text-6xl font-extrabold tracking-[-0.25em] text-primary-yellow-color hover:scale-110">
              HD
            </h1>
          </Link>
        </div>
        <div className="space-x-6 font-roboto-condensed">
          <Link href="/experience" className={`navbar-section-btn ${router.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
          <Link href="/projects" className={`navbar-section-btn ${router.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank" className={`navbar-section-btn ${router.pathname === '/resume' ? 'active' : ''}`}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};
