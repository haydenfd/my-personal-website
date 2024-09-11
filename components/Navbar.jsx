import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="py-4 px-0 border-b-slate-500 border-b-2 fixed top-0 left-0 w-full z-50">
          <div className="max-w-[30%] mx-auto flex items-center justify-between">
            <div className="text-white text-lg font-bold">
              <Link href="/"><h1 className="text-6xl font-extrabold tracking-[-0.25em] text-goldenrod">HD</h1></Link>
            </div>
    
            <div className="space-x-6 font-nav">
              <Link href="/about" className="text-goldenrod text-xl p-2 border-[0.25px] border-goldenrod rounded-md">
                Experience
              </Link>
              <Link href="/" className="text-goldenrod text-xl p-2 border-[0.25px] border-goldenrod rounded-md">
                Projects
              </Link>
              <Link href="/resume" className="text-goldenrod text-xl p-2 border-[0.25px] border-goldenrod rounded-md">
                Skills
              </Link>
            </div>
          </div>
        </nav>
    )
}
