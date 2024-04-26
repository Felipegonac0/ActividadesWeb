const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-4">
          <p>Contact me:</p>
          <a
            href="https://github.com/Felipegonac0"
            className="hover:text-sky-500"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/felipeglzac/"
            className="hover:text-sky-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:felipegonacit@gmail.com"
            className="hover:text-sky-500"
          >
            Mail
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
