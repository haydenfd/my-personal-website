import Link from 'next/link';

import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="py-4 px-0 border-b-slate-500 border-b-2 fixed top-0 left-0 w-full z-99 opacity-100 bg-bg-dark">
      <div className="max-w-[40%] mx-auto flex items-center justify-between">
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
          <Link href="/skills" className={`navbar-section-btn ${router.pathname === '/skills' ? 'active' : ''}`}>
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};
