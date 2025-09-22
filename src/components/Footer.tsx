import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Logo } from "./Logo";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Youtube, 
  Instagram, 
  ArrowUp
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    if (platform === 'Instagram') {
      window.open('https://www.instagram.com/__.sayn__?igsh=MWNyeHJ6dW94eGp1aA%3D%3D&utm_source=qr', '_blank');
    } else if (platform === 'YouTube') {
      console.log('YouTube clicked - add YouTube link when available');
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand & Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo size="sm" />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Self-taught video editor passionate about storytelling. 
              Building my portfolio one project at a time with dedication and creativity.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => handleSocialClick('YouTube')}
              >
                <Youtube className="w-4 h-4" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => handleSocialClick('Instagram')}
              >
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Video Editing</li>
              <li>Color Grading</li>
              <li>Motion Graphics</li>
              <li>Audio Post-Production</li>
              <li>Corporate Videos</li>
              <li>Commercial Editing</li>
              <li>Documentary Work</li>
              <li>Social Media Content</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                sayanthcv@email.com
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Kerala, India
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm mb-2">Business Hours</h5>
              <p className="text-xs text-muted-foreground">
                Monday - Friday<br />
                9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}