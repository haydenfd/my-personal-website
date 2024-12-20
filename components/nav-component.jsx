import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { copyText } from 'utils/copyEmail';

export const Navbar = () => {

    return (
        <nav className="px-0 top-0 left-0 w-full z-[100] opacity-100 bg-bg-dark">
            <div className="w-[90%] md:w-[60%] lg:w-[50%] sm:w-[75%] mx-auto flex items-center justify-between pt-3 pb-2 border-b-2 border-b-muted-gray-color">
                <div className="text-white text-lg font-bold">
                    <Link href="/">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.25em] text-primary-yellow-color hover:scale-110">
                            HD
                        </h1>
                    </Link>
                </div>
                <div className="gap-6 md:gap-11 font-roboto-condensed mr-2 md:mr-4 flex">
                    <a
                        href="https://github.com/haydenfd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn"
                    >
                        <AiFillGithub className="scale-[150%] md:scale-[225%]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hayden-dsouza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn"
                    >
                        <FaLinkedin className="scale-[150%] md:scale-[200%]" />
                    </a>
                    <a
                        href="#"
                        className="navbar-contact-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            copyText('haydenfds@gmail.com');
                        }}
                    >
                        <IoMdMail className="scale-[175%] md:scale-[225%]" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-contact-btn">
                        <IoDocumentTextSharp className="scale-[150%] md:scale-[200%]" />
                    </a>
                </div>
            </div>
        </nav>
    );
};
