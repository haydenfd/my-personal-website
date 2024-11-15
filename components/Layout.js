import { Navbar } from "./nav";
import { Footer } from "./footer"; 

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-bg-dark">
            <Navbar />
            <div className="flex-grow w-[60%] mx-auto shadow-lg text-white">
            {children}
            </div>

            <Footer className="text-center" />
      </div>
    );
  }
  