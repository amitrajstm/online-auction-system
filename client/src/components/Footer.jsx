import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Briefcase,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container flex flex-col items-center justify-between px-6 py-6 mx-auto lg:flex-row">
        <span className="md:text-xl max-lg:hidden font-semibold text-blue-600 underline font-serif">
          Kipa Auction
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <Link
            to="#"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            to="#"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Features
          </Link>

          <Link
            to="#"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            FAQ
          </Link>

          <Link
            to="#"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Help
          </Link>

          <Link
            to="#"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Privacy
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-6 lg:mt-0">
          <a
            href="https://www.facebook.com/englishconversationinsitamarhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/amitraj_stm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://x.com/Amit_Raj_Stm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/amitkumarraj1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://amitkumarraj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Briefcase size={20} />
          </a>
          <a
            href="https://github.com/amitrajstm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0">
          &copy; Copyright 2025 Kipa Auction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
