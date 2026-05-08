import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { STUDIO_INFO, SERVICES, VENUE_FEATURES } from '../constants';
import { Camera, MapPin, Phone, Mail, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

// --- SHARED COMPONENTS ---

const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <section className="pt-40 pb-20 bg-studio-contrast/50 text-center border-b section-border">
    <div className="container mx-auto px-12">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-light mb-6"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-[0.2em] opacity-40 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

// --- PHOTOGRAPHY SERVICES ---

export const ServicesPage = () => (
  <div>
    <PageHeader 
      title="The Services" 
      subtitle="Crafting timeless visual stories with a focus on human connection and minimalist elegance." 
    />
    <section className="py-24">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l section-border">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group p-12 border-r border-b section-border hover:bg-studio-contrast/20 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 rounded-sm">
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1596464716127-f2a82984de30', '1618337198889-f5d6f1c4e9e0', '1508214751196-bcfd4ca60f91', '1613588718956-c2e80305bf61', '1441986300917-64674bd600d8', '1509631179647-0177331693ae'
                  ][i]}?auto=format&fit=crop&q=80&w=800`} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-2xl font-light mb-4">{service.title}</h2>
              <p className="text-[11px] font-sans uppercase tracking-widest opacity-50 leading-relaxed mb-6">{service.description}</p>
              <Link to="/contact" className="text-[10px] uppercase tracking-[0.2em] font-sans border-b section-border py-1 hover:border-studio-text transition-all">
                Enquire ↗
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// --- VENUE HIRE ---

export const VenuePage = () => (
  <div>
    <PageHeader 
      title="Studio & Venue" 
      subtitle="A light-filled, industrial space designed as a versatile blank canvas for your projects." 
    />
    <section className="py-24">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border section-border mb-24 overflow-hidden rounded-sm">
          <div className="p-12 md:p-20 space-y-10 border-r section-border flex flex-col justify-center">
            <h2 className="text-4xl font-light leading-snug">The Perfect <span className="italic">Canvas</span></h2>
            <p className="text-sm font-sans opacity-60 leading-relaxed max-w-md">
              Unit 3 at Sky51 is a meticulously designed space that blends raw textures with refined elegance. A blank canvas for workshops, shoots, and boutique events.
            </p>
            <div className="grid grid-cols-1 gap-y-4">
              {VENUE_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center text-[10px] uppercase tracking-widest opacity-60">
                  <div className="w-1.5 h-[1px] bg-studio-text mr-4" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/contact" className="btn-primary">Request a Viewing</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-0 border-l section-border bg-studio-contrast">
            <div className="border-r border-b section-border">
                <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-70" referrerPolicy="no-referrer" alt="Studio 1" />
            </div>
            <div className="border-b section-border">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-70" referrerPolicy="no-referrer" alt="Studio 2" />
            </div>
            <div className="border-r section-border">
                <div className="p-8 aspect-square flex items-center justify-center text-center">
                    <p className="text-xs uppercase tracking-[0.3em] font-sans opacity-40">Professional<br/>Lighting<br/>Gear</p>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-70" referrerPolicy="no-referrer" alt="Studio 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- GALLERY PAGE ---

export const GalleryPage = () => (
  <div>
    <PageHeader 
      title="The Portfolio" 
      subtitle="A curated selection of authentic fragments captured at Sky51." 
    />
    <section className="py-24">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1 bg-studio-border section-border">
          {[
            'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1',
            'https://images.unsplash.com/photo-1544126592-807daf21565c',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
            'https://images.unsplash.com/photo-1519741497674-611481863552',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
            'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
            'https://images.unsplash.com/photo-1596464716127-f2a82984de30',
            'https://images.unsplash.com/photo-1618337198889-f5d6f1c4e9e0',
          ].map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] overflow-hidden bg-white"
            >
              <img 
                src={`${src}?auto=format&fit=crop&q=80&w=600`} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// --- ABOUT PAGE ---

export const AboutPage = () => (
  <div>
    <PageHeader 
      title="The Identity" 
      subtitle="Founded on simplicity, elegance, and the art of professional storytelling." 
    />
    <section className="py-24">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border section-border">
          <div className="border-r section-border">
             <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" alt="About Sky51" referrerPolicy="no-referrer" />
          </div>
          <div className="p-12 md:p-20 space-y-12">
            <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans opacity-40">Our Foundation</span>
                <h2 className="text-4xl font-light">Built for <span className="italic opacity-60">Humanity</span></h2>
            </div>
            <div className="space-y-8 text-xs font-sans uppercase tracking-widest opacity-60 leading-loose max-w-md">
              <p>
                Sky51 Studio was born to provide something distinct in Manchester. We saw a need for a space that wasn't just functional, but inspiring—a destination for timeless portraits.
              </p>
              <p>
                Our philosophy is centered on the minimalist aesthetic. By stripping away distractions, we create portraits that capture the essence of a person, a brand, or a celebration.
              </p>
              <p>
                As a venue, we offer a clean, adaptable environment that acts as the perfect foundation for your creative vision.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-6 opacity-30">
                <div className="h-[1px] w-20 bg-studio-text"></div>
                <span className="text-[9px] uppercase tracking-widest font-sans">Sky51 Est. 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- CONTACT PAGE ---

export const ContactPage = () => (
  <div>
    <PageHeader 
      title="The Dialogue" 
      subtitle="Connect with us to discuss your vision or schedule a visit to the studio." 
    />
    <section className="py-24">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 border section-border">
          {/* Info Side */}
          <div className="p-12 space-y-12 border-r section-border bg-studio-contrast/30">
            <div className="space-y-10">
              {[
                { label: 'Visit', value: STUDIO_INFO.address },
                { label: 'Connect', value: STUDIO_INFO.email },
                { label: 'Dial', value: STUDIO_INFO.phone },
                { label: 'Social', value: `@${STUDIO_INFO.instagram}` }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">{item.label}</h4>
                  <p className="text-[11px] font-sans tracking-wide uppercase">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-10 border-t section-border">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-sans opacity-40">Opening Sequence</h3>
              <div className="space-y-4">
                {STUDIO_INFO.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between text-[10px] uppercase tracking-widest font-sans opacity-60">
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href={`https://wa.me/${STUDIO_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-sans border border-studio-text px-8 py-4 w-full justify-center hover:bg-studio-text hover:text-white transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Message</span>
            </a>
          </div>

          {/* Form Side */}
          <div className="p-12 md:p-20 border-l section-border bg-white">
            <div className="max-w-xl mx-auto">
                <h3 className="text-3xl font-light mb-12 italic opacity-60">Send an Enquiry</h3>
                <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent!'); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">Full Identity</label>
                      <input required type="text" className="w-full border-b section-border outline-none focus:border-studio-text py-3 text-xs font-sans tracking-wider transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">Digital Address</label>
                      <input required type="email" className="w-full border-b section-border outline-none focus:border-studio-text py-3 text-xs font-sans tracking-wider transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">Required Service</label>
                      <select className="w-full border-b section-border outline-none focus:border-studio-text py-3 text-xs font-sans tracking-wider transition-colors appearance-none bg-transparent">
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="venue">Venue Hire</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">Preferred Timeline</label>
                      <input type="date" className="w-full border-b section-border outline-none focus:border-studio-text py-3 text-xs font-sans tracking-wider transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-sans opacity-40">The Brief</label>
                    <textarea rows={4} className="w-full border-b section-border outline-none focus:border-studio-text py-3 text-xs font-sans tracking-wider transition-colors resize-none"></textarea>
                  </div>
                  <div className="pt-6">
                    <button type="submit" className="btn-primary px-12 py-5">
                      Send Transmission ↗
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Map Section */}
    <section className="h-[400px] border-y section-border grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
      <iframe 
        src={STUDIO_INFO.googleMapsLink} 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  </div>
);
