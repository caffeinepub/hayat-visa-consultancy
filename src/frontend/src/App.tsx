import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
