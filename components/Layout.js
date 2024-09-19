import { Navbar } from "./Navbar";
import { Footer } from "./Footer"; 

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-bg-dark">
            <Navbar />
            <div className="flex-grow w-[40%] mx-auto shadow-lg text-white mt-[6em]">
            {children}
            </div>

            <Footer className="w-full text-center py-4" />
      </div>
    );
  }
  