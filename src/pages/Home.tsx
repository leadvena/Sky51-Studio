import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Users, Camera, Briefcase, Sparkles, UserCircle, Instagram as InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STUDIO_INFO, SERVICES, TESTIMONIALS } from '../constants';

const FeatureIcon = ({ name, size = 24 }: { name: string, size?: number }) => {
  const icons: Record<string, any> = { Heart, Users, Camera, Briefcase, Sparkles, UserCircle };
  const Icon = icons[name] || Camera;
  return <Icon size={size} strokeWidth={1} />;
};

const Home = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden border-b section-border">
        {/* Hero Content - 40% */}
        <section className="lg:w-[40%] p-12 lg:p-20 flex flex-col justify-between border-r section-border bg-studio-bg">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-12"
          >
            <h1 className="text-6xl md:text-7xl font-light leading-[1.1] mb-10">
              Timeless Portraits & <br/>
              <span className="italic opacity-60">Beautiful Spaces</span>
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.2em] opacity-60 mb-10 leading-relaxed max-w-xs">
              A modern photography studio and boutique event venue in the heart of Stretford, Manchester. Dedicated to capturing legacy and hosting creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Book a Shoot</Link>
              <Link to="/venue" className="btn-secondary">Hire the Studio</Link>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-6 mt-20 opacity-40">
            <div className="w-12 h-[1px] bg-studio-text"></div>
            <span className="text-[10px] uppercase tracking-widest font-sans">@{STUDIO_INFO.instagram}</span>
          </div>
        </section>

        {/* Feature Grid - 60% */}
        <section className="lg:w-[60%] flex flex-col bg-white/40">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
            {/* Services Cell */}
            <div className="p-12 border-b border-r section-border group">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-40 mb-8 flex items-center gap-2">
                <div className="w-4 h-[1px] bg-studio-text opacity-40"></div>
                Photography Services
              </h3>
              <div className="grid grid-cols-1 gap-y-4 text-xs font-sans tracking-wide">
                {SERVICES.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] opacity-40">•</span>
                    {service.title}
                  </div>
                ))}
              </div>
              <Link to="/services" className="mt-8 inline-block text-[10px] uppercase tracking-widest font-sans border-b border-studio-text/20 pb-1 hover:border-studio-text transition-all">
                Explore Services ↗
              </Link>
            </div>

            {/* Venue Cell */}
            <div className="p-12 border-b section-border bg-studio-border/10">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-40 mb-8 flex items-center gap-2">
                <div className="w-4 h-[1px] bg-studio-text opacity-40"></div>
                Studio & Venue Hire
              </h3>
              <p className="text-xl font-light leading-snug mb-6">Versatile space for up to 50 guests. Ideal for workshops & intimate events.</p>
              <ul className="text-[10px] uppercase tracking-widest font-sans opacity-60 space-y-3 mb-8">
                <li>High Ceilings & Natural Light</li>
                <li>Professional Lighting Equipment</li>
                <li>Kitchenette & Changing Facilities</li>
              </ul>
              <div className="text-sm font-light italic opacity-60">Starting from £35/hr</div>
              <Link to="/venue" className="mt-6 inline-block text-[10px] uppercase tracking-widest font-sans border-b border-studio-text/20 pb-1 hover:border-studio-text transition-all">
                View Details ↗
              </Link>
            </div>

            {/* Gallery Cell */}
            <div className="p-12 border-r section-border flex flex-col">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-40 mb-8 flex items-center gap-2">
                <div className="w-4 h-[1px] bg-studio-text opacity-40"></div>
                Latest Gallery
              </h3>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  'https://images.unsplash.com/photo-1544126592-807daf21565c',
                  'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1',
                  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
                  'https://images.unsplash.com/photo-1519741497674-611481863552',
                ].map((src, i) => (
                  <div key={i} className="bg-studio-accent/20 aspect-square rounded-sm overflow-hidden border section-border">
                    <img src={`${src}?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Work" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <Link to="/gallery" className="mt-8 text-[10px] uppercase tracking-widest font-sans opacity-60 hover:opacity-100 transition-opacity">Full Portfolio ↗</Link>
            </div>

            {/* Form Cell */}
            <div className="p-12 flex flex-col">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-40 mb-8 flex items-center gap-2">
                <div className="w-4 h-[1px] bg-studio-text opacity-40"></div>
                Enquire
              </h3>
              <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <input required type="text" placeholder="Name" className="bg-transparent border-b section-border py-2 text-xs font-sans outline-none focus:border-studio-text transition-colors" />
                <select className="bg-transparent border-b section-border py-2 text-xs font-sans outline-none focus:border-studio-text transition-colors appearance-none">
                  <option>Service Type</option>
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
                <input required type="email" placeholder="Email" className="bg-transparent border-b section-border py-2 text-xs font-sans outline-none focus:border-studio-text transition-colors" />
                <button type="submit" className="text-left text-[10px] uppercase tracking-widest font-sans mt-4 hover:opacity-50 transition-opacity flex items-center gap-2 underline underline-offset-4 decoration-studio-text/20">
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Social / IG section matching theme vibes */}
      <section className="py-20 bg-studio-contrast">
        <div className="container mx-auto px-12 text-center">
            <div className="mb-12 flex items-center justify-center gap-4 opacity-40">
                <div className="h-[1px] w-12 bg-studio-text"></div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-sans">Recent Fragments</h2>
                <div className="h-[1px] w-12 bg-studio-text"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white border section-border overflow-hidden">
                        <img src={`https://picsum.photos/seed/sky${i}/500/500`} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Instagram" referrerPolicy="no-referrer" />
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
