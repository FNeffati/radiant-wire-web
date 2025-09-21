import { Phone, Mail, Shield, Zap } from 'lucide-react';
import barcaLogo from '@/assets/barca-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">BARCA SYSTEMS</h3>
                <p className="text-muted-foreground text-sm">Electrical Solutions for Home & Business</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional electrical services with a commitment to safety, quality, and customer satisfaction. 
              Fully qualified and insured for your peace of mind.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-electric" />
                <span>NICEIC Registered</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="h-4 w-4 text-electric" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-electric transition-colors">Residential Electrical</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Commercial Electrical</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Emergency Repairs</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Electrical Testing</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">LED Lighting</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">EV Charging</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-electric" />
                <a 
                  href="tel:+44 7506 324978"
                  className="text-foreground hover:text-electric transition-colors"
                >
                  +44 7506 324978
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-electric" />
                <a 
                  href="mailto:info@barcasystems.com" 
                  className="text-foreground hover:text-electric transition-colors"
                >
                  info@barcasystems.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Emergency Service Available</p>
              <p className="text-electric font-semibold">24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Barca Systems. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-electric transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-electric transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;