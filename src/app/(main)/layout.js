import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function MainLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container-page min-h-[60vh] pb-10 pt-12 sm:pt-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
