import { AiFillGithub } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { copyText } from 'utils/copyEmailToClipboard.js';

export const Footer = () => {
    return (
        <footer className="w-[90%] md:w-[60%] lg:w-[60%] sm:w-[75%] py-8 mx-auto text-center dark:text-muted-gray-color border-t-2 border-t-muted-gray-color">
            <div className="container mx-auto">
                <span className="text-md mb-4 block">© {new Date().getFullYear()} Hayden D&apos;Souza</span>
                <div className="mt-2 flex justify-center space-x-8">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <IoDocumentTextSharp className="scale-[175%] hover:scale-[200%] dark:hover:text-vibrant-lavender hover:text-blue-600" />
                    </a>
                    <a href="https://github.com/haydenfd" className="" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="scale-[200%] hover:scale-[225%] dark:hover:text-vibrant-lavender hover:text-blue-600" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hayden-dsouza/"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="scale-[175%] hover:scale-[200%] dark:hover:text-vibrant-lavender hover:text-blue-600" />
                    </a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            copyText('haydenfds@gmail.com');
                        }}
                    >
                        <IoMdMail className="scale-[200%] hover:scale-[225%] dark:hover:text-vibrant-lavender hover:text-blue-600" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
