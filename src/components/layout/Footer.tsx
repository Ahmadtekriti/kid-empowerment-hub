
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-neutral-50 border-t border-brand-neutral-100">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-brand-blue-600 mb-4">
              ChildSupport
            </h3>
            <p className="text-brand-neutral-600 mb-4 max-w-xs">
              Personalized support for your child's unique needs. Helping parents navigate 
              challenges and unlock their child's full potential.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialLink icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialLink icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialLink icon={<Mail size={18} />} href="#" label="Email" />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-brand-neutral-800 mb-4">Services</h4>
            <FooterLinks
              links={[
                { name: 'Behavioral Consultation', href: '#' },
                { name: 'Academic Support', href: '#' },
                { name: 'Development Assessment', href: '#' },
                { name: 'Parenting Strategies', href: '#' },
              ]}
            />
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-brand-neutral-800 mb-4">Company</h4>
            <FooterLinks
              links={[
                { name: 'About Us', href: '#' },
                { name: 'Our Experts', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Contact', href: '#' },
              ]}
            />
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-brand-neutral-800 mb-4">Legal</h4>
            <FooterLinks
              links={[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookies', href: '#' },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-neutral-200 text-brand-neutral-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} ChildSupport. All rights reserved.
          </p>
          <p className="text-sm flex items-center">
            Made with <Heart className="mx-1 text-brand-blue-500 h-3 w-3" /> for families everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-8 w-8 rounded-full bg-brand-neutral-200 flex items-center justify-center text-brand-neutral-600 hover:bg-brand-blue-500 hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

const FooterLinks = ({ links }: { links: { name: string; href: string }[] }) => {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-brand-neutral-600 hover:text-brand-blue-500 transition-colors text-[15px]"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
