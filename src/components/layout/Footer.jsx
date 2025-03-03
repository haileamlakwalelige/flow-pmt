import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-[#f1f1f1] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Flow</h3>
            <p className="text-[#94a3b8]">
              Streamline your workflow with our intuitive project management
              solution.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#4ade80] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">
                <Github />
              </a>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://haileopia.vercel.app">
          {" "}
          <div className="mt-8 pt-8 border-t border-[#2a2a4e] text-center text-[#94a3b8]">
            <p>&copy; {currentYear} Haileopia. All rights reserved.</p>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
