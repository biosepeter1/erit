import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl text-primary font-bold mb-4">AbiaFIRST</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Strengthening the foundation of Abia through institutional innovation and community partnership.
          </p>
        </div>
        <div>
          <p className="font-bold text-sm text-on-surface mb-4">Quick Links</p>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="mailto:basicandsecondaryeducation@abiastate.gov.ng" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={14} /> Email Support
              </a>
            </li>
            <li>
              <a href="tel:+2349134447066" className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={14} /> 0913 444 7066
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm text-on-surface mb-4">Governance</p>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <a href="https://www.abiastate.gov.ng" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                <Globe size={14} /> Official State Portal
              </a>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Transparency Report
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm text-on-surface mb-4">Support</p>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Educational Resources
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-outline-variant/30 text-center">
        <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
          © {new Date().getFullYear()} Abia State Ministry of Basic and Secondary Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
