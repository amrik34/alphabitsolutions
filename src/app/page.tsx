import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Services from "./services";
import DevelopmentPhase from "@/components/DevelopmentPhase";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import ContactForm from "./ContactForm";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Header />
      <Hero />

      <section id="services" className="min-h-screen bg-white py-20 px-4">
        <Services />
      </section>
      <DevelopmentPhase />
      <section id="portfolio" className="">
        {/* <h2 className="text-3xl font-bold text-center">Our Portfolio</h2> */}
        <Portfolio />
      </section>

      {/* <section id="about" className="min-h-screen bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center">
          Welcome to Alphabit Tech Solutions
        </h2>
       
      </section> */}

      <section id="testimonial">
        <Testimonials />
      </section>

      {/* <section id="contacts" className="min-h-screen bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
  
      </section> */}
      <section id="contacts">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
