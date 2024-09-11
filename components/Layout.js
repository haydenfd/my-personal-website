export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-bg-dark">
        <div className="max-w-[70%] mx-auto min-h-screen py-10 px-5  shadow-lg text-white">
          {children}
        </div>
      </div>
    );
  }
  