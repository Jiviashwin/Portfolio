import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, X, ArrowRight, CheckCircle2, ChevronDown,
  BarChart, Globe, Smartphone, Search, Share2,
  PenTool, MonitorPlay, Mail, Phone, MapPin,
  Star, Play, Zap, Clock, ShieldCheck, Target, VenetianMask
} from 'lucide-react';
import AnimatedCounter from './components/AnimatedCounter';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const businessName = formData.get('businessName');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`New Inquiry from ${name} - ${businessName}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nBusiness Name: ${businessName}\nService Needed: ${service}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:webrob2024@gmail.com?subject=${subject}&body=${body}`;
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' }
  ];

  const services = [
    { title: 'Website Development', icon: <Globe size={24} />, features: ['Business Websites', 'E-commerce Websites', 'Landing Pages', 'Portfolio Websites'] },
    { title: 'Mobile App Development', icon: <Smartphone size={24} />, features: ['Android Apps', 'iOS Apps', 'Cross Platform Apps'] },
    { title: 'SEO Services', icon: <Search size={24} />, features: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO'] },
    { title: 'Social Media Marketing', icon: <Share2 size={24} />, features: ['Instagram Marketing', 'Facebook Marketing', 'LinkedIn Marketing', 'Content Creation'] },
    { title: 'Paid Advertising', icon: <MonitorPlay size={24} />, features: ['Google Ads', 'Meta Ads', 'Lead Generation Campaigns'] },
    { title: 'Branding & Design', icon: <PenTool size={24} />, features: ['Logo Design', 'Brand Identity', 'Marketing Materials'] }
  ];

  const pricingPackages = [
    { name: 'STARTER PACKAGE', price: 'Price on enquiry', period: '', features: ['Social Media Management (2 Platforms)', '8 Posts Per Month', 'Basic SEO', 'Monthly Report', 'WhatsApp Support'], buttonText: 'Get Started', popular: false },
    { name: 'GROWTH PACKAGE', price: 'Price on enquiry', period: '', features: ['Social Media Management (3 Platforms)', '16 Posts Per Month', 'Advanced SEO', 'Google Business Optimization', 'Monthly Strategy Call', 'Lead Generation Support'], buttonText: 'Choose Growth', popular: true },
    { name: 'BUSINESS PACKAGE', price: 'Price on enquiry', period: '', features: ['Social Media Management (All Platforms)', '30 Posts Per Month', 'Complete SEO', 'Google Ads Management', 'Meta Ads Management', 'Competitor Analysis', 'Dedicated Account Manager'], buttonText: 'Scale My Business', popular: false }
  ];

  const features = [
    { title: 'Results Driven', icon: <Target size={32} />, desc: 'We focus on metrics that matter: leads, sales, and ROI.' },
    { title: 'Fast Delivery', icon: <Zap size={32} />, desc: 'Quick turnaround times without compromising on quality.' },
    { title: 'Dedicated Support', icon: <ShieldCheck size={32} />, desc: 'Your personal account manager is always one call away.' },
    { title: 'Scalable Solutions', icon: <BarChart size={32} />, desc: 'Strategies designed to grow with your business.' }
  ];

  const portfolio = [
    { category: 'Business Websites', title: 'Hotel Management System', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'E-commerce Stores', title: 'Modern Fashion Boutique', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'Mobile Apps', title: 'Bus Management System', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'Marketing Campaigns', title: 'Lead Generation', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const testimonials = [
    { text: "WEBROB helped us generate 3x more leads within 3 months.", name: "Sarah Johnson", company: "TechFlow Inc.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { text: "Our website redesign increased our conversion rate significantly.", name: "Michael Chen", company: "Retail Core", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { text: "Professional team with excellent communication throughout.", name: "Emma Davis", company: "Creative Minds", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" }
  ];

  const faqs = [
    { q: "How long does a website take?", a: "A standard business website typically takes 2-4 weeks to complete, while e-commerce or complex custom sites may take 6-8 weeks." },
    { q: "Do you provide SEO?", a: "Yes! All our websites come with basic SEO built-in. We also offer advanced monthly SEO packages for ongoing growth." },
    { q: "Can you manage ads?", a: "Absolutely. Our paid advertising experts handle Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn campaigns." },
    { q: "Is support included?", a: "Yes, we provide ongoing support and maintenance packages to ensure your digital assets run smoothly." },
    { q: "Do you provide mobile apps?", a: "Yes, we develop cross-platform (React Native/Flutter) as well as native iOS and Android applications." }
  ];

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <VenetianMask size={28} color="var(--primary)" /> WEBROB
          </a>
          <div className="nav-links">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href}>{link.name}</a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Let's Talk</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Grow Your Business With Digital Marketing That Actually <span style={{ color: 'var(--primary)' }}>Delivers Results</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
          As a dedicated team of 4, we help businesses generate more leads, increase revenue, and build a strong online presence through websites, SEO, social media marketing, paid advertising, and branding.
        </motion.p>
        <motion.div className="hero-buttons" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}>
          <a href="#contact" className="btn btn-primary">Get Free Consultation <ArrowRight size={18} /></a>
          <a href="#pricing" className="btn btn-secondary">View Packages</a>
        </motion.div>
        <motion.div className="hero-image" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <div className="hero-img-inner">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team working on digital marketing" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="section-alt">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">Comprehensive digital solutions designed to elevate your brand and drive measurable growth.</p>
          <motion.div className="grid grid-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((svc, i) => (
              <motion.div key={i} className="service-card glass-card" variants={fadeIn} style={{ background: 'white' }}>
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <ul>
                  {svc.features.map((feat, j) => <li key={j}>{feat}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="container">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-subtitle">Choose the perfect package to accelerate your digital growth.</p>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ background: 'var(--secondary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontWeight: 'bold', fontSize: '1.125rem' }}>
              Price On Enquiry
            </span>
          </div>

          <div className="grid grid-3">
            {pricingPackages.map((pkg, i) => (
              <div key={i} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3>{pkg.name}</h3>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feat, j) => (
                    <li key={j}><CheckCircle2 size={18} /> {feat}</li>
                  ))}
                </ul>
                <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose WEBROB</h2>
          <p className="section-subtitle">We partner with you to achieve sustainable growth through innovative digital strategies.</p>
          <div className="grid grid-4">
            {features.map((feat, i) => (
              <div key={i} className="feature-item" style={{ background: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                <div className="icon-wrapper">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title">Our Recent Work</h2>
          <p className="section-subtitle">Explore some of the digital experiences we've crafted for our clients.</p>
          <div className="grid grid-2">
            {portfolio.map((item, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-img"><img src={item.img} alt={item.title} /></div>
                <div className="portfolio-info">
                  <div className="portfolio-category">{item.category}</div>
                  <div className="portfolio-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">A proven methodology to turn your vision into digital reality.</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery Call</h3>
              <p>We learn about your business, goals, and target audience.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy Planning</h3>
              <p>Creating a customized roadmap tailored to your objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Our experts build, design, and implement the planned strategies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Growth & Optimize</h3>
              <p>Continuous monitoring, reporting, and refining for better results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="faq-question">
                  {faq.q}
                  <ChevronDown size={20} className="faq-icon" />
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready To Grow Your Business?</h2>
          <p>Book a free consultation today and discover how WEBROB can help your business reach more customers and increase revenue.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Schedule Free Call</a>
            <a href="#contact" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Get Proposal</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Get in Touch</h2>
                <p style={{ color: 'var(--text-muted)' }}>Let's discuss how we can help your business thrive in the digital world.</p>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 6380722121</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>webrob2024@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleContactSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" name="businessName" className="form-control" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label>Service Needed</label>
                  <select name="service" className="form-control">
                    <option>Website Development</option>
                    <option>SEO Services</option>
                    <option>Social Media Marketing</option>
                    <option>Paid Advertising</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label>Message</label>
                  <textarea name="message" className="form-control" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2><VenetianMask size={24} color="var(--primary)" /> WEBROB</h2>
              <p>We build brands that grow. Digital marketing and web development agency focused on delivering real results.</p>
              <div className="social-links">
                <a href="#" className="social-link"><Globe size={18} /></a>
                <a href="#" className="social-link"><Share2 size={18} /></a>
                <a href="#" className="social-link"><Search size={18} /></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">SEO Services</a></li>
                <li><a href="#services">Social Media</a></li>
                <li><a href="#services">Paid Advertising</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 WEBROB. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
