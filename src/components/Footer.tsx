import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">J</span>
              </div>
              <span className="text-2xl font-headline font-black tracking-tight">Jolly English</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Empowering students worldwide to master English through native immersion and AI-driven practice.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#courses" className="hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="#ai-partner" className="hover:text-white transition-colors">AI Practice Partner</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Academy</a></li>
              <li><a href="#enroll" className="hover:text-white transition-colors">Enroll Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@jollyenglish.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Support Hours</h4>
            <ul className="space-y-4 text-white/60">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Jolly English Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
