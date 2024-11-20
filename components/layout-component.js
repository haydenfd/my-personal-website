import { Navbar } from "./nav-component";
import { Footer } from "./footer-component"; 

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-bg-dark">
            <Navbar />
            <div className="flex-grow w-[90%] sm:w-[75%] lg:w-[50%] md:w-[60%] mx-auto text-white pb-20">
            {children}
            </div>

            <Footer className="text-center" />
      </div>
    );
  }
  