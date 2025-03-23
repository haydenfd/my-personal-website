import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { IoSunny, IoMoon} from "react-icons/io5";
import { copyText } from 'utils/copyEmailToClipboard';
import { useTheme } from 'next-themes'

export const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    
    return (
        <nav className="px-0 top-0 left-0 w-full z-[100] opacity-100 dark:bg-bg-dark bg-gray-200">
            <div className="w-[90%] md:w-[70%] lg:w-[60%] sm:w-[75%] mx-auto flex items-center justify-between py-3 border-b-2 border-b-gray-700 dark:border-b-muted-gray-color">
                <div className="text-lg font-bold">
                        <h1 className="text-4xl md:text-6xl tracking-[-0.25em] text-gray-700 dark:text-base-button-color">
                            HD
                        </h1>
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
                        <IoMdMail className="scale-[175%] md:scale-[250%]" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-contact-btn">
                        <IoDocumentTextSharp className="scale-[150%] md:scale-[200%]" />
                    </a>
                    <button onClick={toggleTheme}>
                        {theme == "dark" ? ( <IoSunny className="scale-[175%] md:scale-[225%] navbar-contact-btn" />
): (                        <IoMoon className="scale-[175%] md:scale-[200%] navbar-contact-btn" />
)}
                    </button>
                </div>
            </div>
        </nav>
    );
};
