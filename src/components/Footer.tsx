export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Alphabit Tech Solutions. All rights
          reserved.
        </p>
        <nav className="space-x-4">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#career">Career</a>
          <a href="#contacts">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
