import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-textMain">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}