import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiTiktok, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/terms", label: "Terms and Conditions" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: SiInstagram, label: "Instagram", testId: "link-instagram" },
    { href: "https://facebook.com", icon: SiFacebook, label: "Facebook", testId: "link-facebook" },
    { href: "https://tiktok.com", icon: SiTiktok, label: "TikTok", testId: "link-tiktok" },
    { href: "https://twitter.com", icon: SiX, label: "Twitter", testId: "link-twitter" },
    { href: "https://youtube.com", icon: SiYoutube, label: "YouTube", testId: "link-youtube" },
  ];

  return (
    <footer className="border-t bg-card mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer block"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                    aria-label={social.label}
                    data-testid={social.testId}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 3Dprintingtools. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Using formula: Volume = π(d/2)² × L | Mass = ρ × V
          </p>
        </div>
      </div>
    </footer>
  );
}
