import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Venue Hire', path: '/venue' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b section-border ${scrolled ? 'bg-studio-bg/95 backdrop-blur-md py-4' : 'bg-studio-bg/50 py-6'}`}>
      <div className="container mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl tracking-[0.2em] font-light uppercase font-serif">
          Sky51 <span className="italic opacity-60">Studio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link transition-all flex flex-col ${isActive ? 'opacity-100' : 'opacity-60'}`}
            >
              {link.title}
              {location.pathname === link.path && <div className="h-[1px] bg-studio-text w-full mt-1 animate-in fade-in slide-in-from-left-2" />}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-4">
            Book
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-studio-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-studio-bg border-b section-border py-10 px-12 shadow-2xl"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `text-[10px] uppercase tracking-[0.3em] font-sans ${isActive ? 'font-bold opacity-100' : 'opacity-40'}`}
                >
                  {link.title}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-4 self-center mx-auto">
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-studio-text text-studio-contrast p-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        <div className="flex flex-col gap-2">
          <div className="text-[9px] uppercase tracking-tighter font-sans opacity-40">Location</div>
          <div className="text-[10px] leading-tight font-sans tracking-wide">{STUDIO_INFO.address}</div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="text-[9px] uppercase tracking-tighter font-sans opacity-40">Hours</div>
          <div className="text-[10px] font-sans tracking-wide">
            {STUDIO_INFO.openingHours.slice(0, 2).map((h, i) => (
              <div key={i}>{h.days}: {h.hours}</div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[9px] uppercase tracking-tighter font-sans opacity-40">Connect</div>
          <div className="text-[10px] font-sans tracking-wide">
            <div>{STUDIO_INFO.phone} (WhatsApp)</div>
            <div className="mt-1 flex gap-4">
              <a href={`https://instagram.com/${STUDIO_INFO.instagram}`} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity flex items-center gap-1 opacity-60">
                <Instagram size={12} /> @{STUDIO_INFO.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:text-right flex flex-col gap-1">
          <div className="text-[9px] font-sans opacity-40 uppercase tracking-widest">SKY51 STUDIO © {new Date().getFullYear()}</div>
          <div className="text-[8px] font-sans opacity-40 tracking-wider">PHOTOGRAPHY STUDIO | EVENT VENUE</div>
          <div className="mt-4 flex lg:justify-end gap-6 text-[8px] opacity-30 uppercase tracking-widest">
            <a href="#" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
