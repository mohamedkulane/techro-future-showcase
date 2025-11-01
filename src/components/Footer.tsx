import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">TechRo</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Building Smart Digital Systems for the Future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Our Systems</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Pharmacy Management</li>
              <li className="text-sm text-secondary-foreground/80">Transaction & Payment</li>
              <li className="text-sm text-secondary-foreground/80">School Management</li>
              <li className="text-sm text-secondary-foreground/80">Mordern webistes & Small market systemes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              {/* WhatsApp (replaces Twitter) */}
              <a
                href="https://wa.me/252613692550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            <a href="https://wa.me/252613692550" target='_blank'>
              <button className="text-sm text-primary hover:underline">
                Contact Us →
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 TechRo Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
