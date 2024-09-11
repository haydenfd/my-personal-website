import { AiFillGithub } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {

    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(
          () => {
            alert("Copied haydenfds@gmail.com to clipboard!");
          },
          (err) => {
            console.error("Failed to copy text: ", err);
          }
        );
      };
    
    return (
      <footer className=" w-[30%] py-8 mx-auto text-center text-white">
        <div className="container mx-auto">
          <p className="text-md mb-10">
            © {new Date().getFullYear()} Hayden D&apos;Souza
          </p>
          <div className="mt-2 flex justify-center space-x-8">
            <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
                <IoDocumentTextSharp className="scale-[175%] hover:scale-[200%]"/>
            </a>
            <a href="https://github.com/haydenfd" className="" target="_blank" rel="noopener norefferer">
                <AiFillGithub className="scale-[200%] hover:scale-[225%]" />
            </a>
            <a href="https://www.linkedin.com/in/hayden-dsouza/" className="" target="_blank" rel="noopener norefferer">
                <FaLinkedin className="scale-[175%] hover:scale-[200%]"/>
            </a>
            <a href="#"
            onClick={(e) => {
            e.preventDefault(); 
            copyText("haydenfds@gmail.com");
            }}
            
            >
                <IoMdMail className="scale-[200%] hover:scale-[225%] "/>
            </a>            
          </div>
        </div>
      </footer>
    );
  };
  