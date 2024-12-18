import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';
import Container from './common/Container';
import Text from './common/Text';
import AnimatedIcon from './common/AnimatedIcon';
import { socialLinks, quickLinks, legalLinks } from '../constants/footerData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-dark text-white mt-auto py-4">
      <Container>
        {/* Main Footer Content */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <AnimatedIcon>
                <BarChart2 className="h-5 w-5 text-accent group-hover:text-accent-light" />
              </AnimatedIcon>
              <Text variant="body" className="font-semibold">CBE Capital</Text>
            </Link>
            <span className="hidden md:inline text-sm text-gray-300">
              &copy; {new Date().getFullYear()} All rights reserved
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-accent transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <AnimatedIcon>
                  <Icon className="h-5 w-5" />
                </AnimatedIcon>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Copyright and Legal Links */}
        <div className="md:hidden flex flex-col items-center space-y-2 text-sm text-gray-300">
          <span>&copy; {new Date().getFullYear()} All rights reserved</span>
        </div>

        {/* Legal Links - Desktop */}
        <div className="hidden md:flex justify-center space-x-6 text-sm text-gray-300">
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-accent transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}