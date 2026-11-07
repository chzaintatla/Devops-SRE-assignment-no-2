import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Buy', to: '/buy' },
  { label: 'Rent', to: '/rent' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const properties = [
  {
    slug: 'beverly-heights-villa',
    title: 'Beverly Heights Villa',
    price: 'PKR 18.5 Crore',
    location: 'DHA Lahore',
    type: 'Villa',
    category: 'House',
    area: '4,800 sq ft',
    bedrooms: 5,
    bathrooms: 4,
    status: 'For Sale',
    id: 'SP-2048',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'An upscale villa with refined finishes, panoramic landscaping, and a grand family layout designed for premium Lahore living.',
    features: ['Double-height lobby', 'Private garden', 'Smart security', 'Servant quarters', 'Covered parking'],
  },
  {
    slug: 'skyline-apartment',
    title: 'Skyline Apartment',
    price: 'PKR 11.9 Crore',
    location: 'Gulberg',
    type: 'Apartment',
    category: 'Apartment',
    area: '3,250 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    status: 'For Sale',
    id: 'SP-1184',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Elegant apartment living in the heart of Gulberg with open-plan spaces, terrace views, and luxury amenities for modern urban families.',
    features: ['Sky lounge', 'Pool access', 'High-speed elevators', 'Covered parking', 'Security system'],
  },
  {
    slug: 'modern-family-home',
    title: 'Modern Family Home',
    price: 'PKR 95 Lakh',
    location: 'Bahria Town',
    type: 'House',
    category: 'House',
    area: '2,900 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    status: 'For Sale',
    id: 'SP-2020',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A beautifully planned residence with contemporary architecture, family-friendly layout, and strong value in a sought-after community.',
    features: ['Large family lounge', 'Sunlit kitchen', 'Generator backup', 'Outdoor patio', 'Two-car porch'],
  },
  {
    slug: 'executive-office-suite',
    title: 'Executive Office Suite',
    price: 'PKR 70 Lakh / Year',
    location: 'Johar Town',
    type: 'Office',
    category: 'Commercial',
    area: '2,300 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    status: 'For Rent',
    id: 'SP-4073',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Premium office space with executive finish, flexible workspace, and excellent accessibility in a well-established commercial district.',
    features: ['Reception area', 'Conference room', 'Parking bay', 'Generator backup', 'High-speed internet'],
  },
  {
    slug: 'lake-city-plot',
    title: 'Lake City Plot',
    price: 'PKR 80 Lakh',
    location: 'Lake City',
    type: 'Residential Plot',
    category: 'Plot',
    area: '1,250 sq yd',
    bedrooms: 0,
    bathrooms: 0,
    status: 'For Sale',
    id: 'SP-6741',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A prime residential plot in a thriving community, ideal for buyers seeking future appreciation and customized home development.',
    features: ['Utilities ready', 'Wide road frontage', 'Gated community', 'Easy access', 'Long-term potential'],
  },
  {
    slug: 'harbor-residency',
    title: 'Harbor Residency',
    price: 'PKR 1.2 Crore',
    location: 'Model Town',
    type: 'Apartment',
    category: 'Apartment',
    area: '2,100 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    status: 'For Rent',
    id: 'SP-3341',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A polished residential offering combining comfortable layout, quality amenities, and a desirable address for tenants and investors.',
    features: ['Balcony views', 'Modern kitchen', 'Generator backup', 'Gym access', 'Community lounge'],
  },
];

const locations = [
  { name: 'DHA Lahore', tag: 'Luxury living', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Bahria Town', tag: 'Family communities', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Gulberg', tag: 'Urban investment', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Johar Town', tag: 'Smart lifestyle', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Model Town', tag: 'Cultural charm', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Lake City', tag: 'Premium projects', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Wapda Town', tag: 'Affordable growth', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Askari', tag: 'Secure living', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
];

const projectList = [
  {
    slug: 'harbor-residency-project',
    title: 'Harbor Residency',
    location: 'Scheme 5, Lahore',
    category: 'Luxury Apartments',
    price: 'From PKR 80 Lakh',
    description: 'A contemporary residential development crafted for families and investors seeking long-term value in a growing urban corridor.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'crescent-heights',
    title: 'Crescent Heights',
    location: 'Bahria Town Lahore',
    category: 'Premium Villas',
    price: 'From PKR 1.8 Crore',
    description: 'A carefully planned villa community with elevated amenities, secure surroundings, and long-term residential appeal.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'capital-business-hub',
    title: 'Capital Business Hub',
    location: 'Johar Town',
    category: 'Commercial Investment',
    price: 'From PKR 2.4 Crore',
    description: 'A forward-looking commercial project designed to support business growth with flexible ownership and strategic positioning.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

const testimonials = [
  {
    name: 'Ayesha M.',
    quote: 'SPARKO understood our family needs quickly and guided us to a premium home in DHA that matched our lifestyle perfectly.',
  },
  {
    name: 'Hamza K.',
    quote: 'The process was clear, professional, and highly efficient. We were able to compare options and make an informed decision with confidence.',
  },
  {
    name: 'Sana R.',
    quote: 'Their investment consultation was practical, transparent, and aligned with our goals. We felt supported throughout the journey.',
  },
];

const stats = [
  { value: '3.4K+', label: 'Qualified Leads' },
  { value: '240+', label: 'Homes Sold' },
  { value: '18', label: 'Prime Areas' },
  { value: '96%', label: 'Client Satisfaction' },
];

const reasons = [
  'Professional Property Guidance',
  'Market Insights',
  'Personalized Property Recommendations',
  'Transparent Communication',
  'Investment Consultation',
  'Dedicated Customer Support',
];

const processSteps = ['Explore Properties', 'Share Your Requirements', 'Schedule a Property Visit', 'Get Professional Assistance'];

const filterOptions = {
  propertyTypes: ['All', 'Houses', 'Apartments', 'Residential Plots', 'Commercial', 'Office', 'Shop'],
  locations: ['All', 'DHA Lahore', 'Bahria Town', 'Gulberg', 'Johar Town', 'Model Town', 'Lake City', 'Askari'],
  statuses: ['All', 'For Sale', 'For Rent'],
};

function setPageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}

function Logo({ variant = 'primary' }) {
  const navy = '#101D32';
  const emerald = '#087F5B';
  const gold = '#C6A66B';
  const white = '#ffffff';

  const mainFill = variant === 'dark' ? navy : variant === 'light' ? white : emerald;
  const wordFill = variant === 'dark' || variant === 'light' ? navy : white;

  return (
    <svg viewBox="0 0 240 72" className="logo-svg" aria-label="SPARKO logo" role="img">
      <rect x="0" y="0" width="240" height="72" rx="14" fill={variant === 'light' ? navy : 'transparent'} />
      <path d="M30 16C21.163 16 14 23.163 14 32V46C14 54.837 21.163 62 30 62H46C54.837 62 62 54.837 62 46V45H50V46C50 49.314 47.314 52 44 52H30C26.686 52 24 49.314 24 46V32C24 28.686 26.686 26 30 26H44C47.314 26 50 23.314 50 20V16H62V20C62 28.837 54.837 36 46 36H30C21.163 36 14 28.837 14 20V16H30Z" fill={mainFill} />
      <path d="M68 18H96V26H78V34H93V42H78V52H96V60H68V18Z" fill={wordFill} />
      <path d="M108 18H148V26H120V30H144V38H120V42H148V60H108V18Z" fill={wordFill} />
      <path d="M154 18H168V60H154V18Z" fill={gold} />
      <path d="M163 18H168V60H163V18Z" fill={emerald} />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, subtitle, action }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow dark">{eyebrow}</span>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <div className="property-image-wrap">
        <img src={property.image} alt={property.title} />
        <span className="status-tag">{property.status}</span>
      </div>
      <div className="property-body">
        <div className="price-row">
          <strong>{property.price}</strong>
          <span>{property.id}</span>
        </div>
        <h3>{property.title}</h3>
        <p className="location-line">{property.location}</p>
        <div className="property-meta">
          <span>{property.type}</span>
          <span>{property.area}</span>
        </div>
        <div className="property-specs">
          <span>{property.bedrooms || 0} Beds</span>
          <span>{property.bathrooms || 0} Baths</span>
        </div>
        <div className="card-actions">
          <Link to={`/properties/${property.slug}`} className="primary-btn small-btn">View Details</Link>
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="whatsapp-btn">WhatsApp</a>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.location}</p>
        <strong>{project.price}</strong>
        <Link to={`/projects/${project.slug}`} className="primary-btn small-btn">Inquire Now</Link>
      </div>
    </article>
  );
}

function PageLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="sparko-app">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link to="/" className="brand-block" aria-label="SPARKO home">
            <div className="brand-mark">S</div>
            <div>
              <span className="brand-name">SPARKO</span>
              <small>Premium Realty</small>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/consultation" className="primary-btn nav-cta">Book a Consultation</Link>
            <button className="mobile-toggle" type="button" aria-label="Toggle menu" onClick={() => setMobileOpen((value) => !value)}>
              ☰
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-block footer-brand">
              <div className="brand-mark">S</div>
              <div>
                <span className="brand-name">SPARKO</span>
                <small>Premium Realty</small>
              </div>
            </div>
            <p>
              SPARKO helps buyers, sellers, investors, and renters discover premium real estate opportunities in Lahore with clarity, confidence, and expert guidance.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Property Categories</h4>
            <ul>
              <li><Link to="/properties">Houses</Link></li>
              <li><Link to="/properties">Apartments</Link></li>
              <li><Link to="/buy">Residential Plots</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@sparko.pk">hello@sparko.pk</a></li>
              <li><a href="tel:+923001234567">+92 300 1234567</a></li>
              <li><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="container copyright">© 2026 SPARKO. All rights reserved.</div>
      </footer>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = 'SPARKO | Premium Realty Lahore';
  }, []);

  return (
    <PageLayout>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Premium real estate in Lahore</span>
            <h1>Find Your Place. Build Your Future.</h1>
            <p>Discover exceptional properties and smarter real estate opportunities with SPARKO in Lahore.</p>
            <div className="hero-actions">
              <Link to="/properties" className="primary-btn">Explore Properties</Link>
              <Link to="/consultation" className="secondary-btn">Book a Consultation</Link>
            </div>
          </div>

          <div className="search-panel" aria-label="Property search panel">
            <div className="panel-header">
              <span className="panel-pill active">Buy</span>
              <span className="panel-pill">Rent</span>
            </div>
            <div className="search-grid">
              <label>
                <span>Property Type</span>
                <select defaultValue="Houses">
                  {filterOptions.propertyTypes.filter((option) => option !== 'All').map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Location</span>
                <select defaultValue="DHA Lahore">
                  {filterOptions.locations.filter((option) => option !== 'All').map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Price Range</span>
                <select defaultValue="Any">
                  <option>Any</option>
                  <option>PKR 5-20 Lakh</option>
                  <option>PKR 20-50 Lakh</option>
                  <option>PKR 50 Lakh-1 Crore</option>
                  <option>PKR 1 Crore+</option>
                </select>
              </label>
              <label>
                <span>Bedrooms</span>
                <select defaultValue="Any">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </label>
            </div>
            <Link to="/properties" className="primary-btn full-width">Search Properties</Link>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeader
          eyebrow="Featured properties"
          title="Handpicked homes and investment-ready spaces."
          action={<Link to="/properties" className="secondary-btn">View All Properties</Link>}
        />
        <div className="property-grid">
          {properties.slice(0, 4).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeader eyebrow="Popular locations" title="Explore Lahore’s most in-demand property markets." />
        <div className="location-grid">
          {locations.map((location) => (
            <article className="location-card" key={location.name}>
              <img src={location.image} alt={location.name} />
              <div className="location-overlay">
                <span>{location.tag}</span>
                <h3>{location.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block trust-section">
        <SectionHeader eyebrow="Why choose SPARKO" title="Trusted guidance for smarter property decisions." />
        <div className="feature-grid">
          {reasons.map((reason, index) => (
            <div key={reason} className="feature-box">
              <div className="feature-icon">0{index + 1}</div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeader eyebrow="Investment opportunities" title="Projects designed for long-term value growth." />
        <div className="project-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeader eyebrow="How it works" title="A straightforward path to your next property move." />
        <div className="steps-grid">
          {processSteps.map((step, index) => (
            <div key={step} className="step-box">
              <span className="step-number">0{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block testimonials-block">
        <SectionHeader eyebrow="Client feedback" title="What clients value about working with SPARKO." />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="stars">★★★★★</div>
              <p>“{testimonial.quote}”</p>
              <h4>{testimonial.name}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-wrap">
        <div className="container cta-box">
          <div>
            <span className="eyebrow light">Ready to make your next property move?</span>
            <h2>Connect with SPARKO and let our experts help you find the right opportunity.</h2>
          </div>
          <div className="cta-actions">
            <Link to="/consultation" className="primary-btn">Talk to an Expert</Link>
            <Link to="/contact" className="secondary-btn alt">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PropertyListingPage({ type = 'All' }) {
  useEffect(() => {
    document.title = 'Properties | SPARKO';
  }, []);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(type === 'All' ? 'All' : type);
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const list = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || property.category === category || property.type === category;
      const matchesStatus = status === 'All' || property.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });

    if (sort === 'low-to-high') {
      return [...list].sort((a, b) => a.price.localeCompare(b.price));
    }
    if (sort === 'high-to-low') {
      return [...list].sort((a, b) => b.price.localeCompare(a.price));
    }
    return list;
  }, [search, category, status, sort]);

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>{type === 'All' ? 'Properties' : type}</strong>
          </nav>
          <h1>{type === 'All' ? 'Discover exceptional properties' : `Explore ${type} opportunities`}</h1>
          <p>Find premium residential and commercial spaces across Lahore with SPARKO.</p>
        </div>
      </section>

      <section className="container section-block top-gap-less">
        <div className="property-toolbar">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by location or property name"
            aria-label="Property search"
          />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {filterOptions.propertyTypes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            {filterOptions.statuses.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {filtered.length ? (
          <div className="property-grid">
            {filtered.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No properties match your filters.</h3>
            <p>Try a different category, status, or location.</p>
          </div>
        )}
      </section>
    </PageLayout>
  );
}

function PropertiesPage() {
  return <PropertyListingPage type="All" />;
}

function BuyPage() {
  return <PropertyListingPage type="House" />;
}

function RentPage() {
  return <PropertyListingPage type="Apartment" />;
}

function CommercialPage() {
  return <PropertyListingPage type="Commercial" />;
}

function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | SPARKO';
  }, []);

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>Projects</strong>
          </nav>
          <h1>Premium real estate developments.</h1>
          <p>Explore investment opportunities shaped for long-term value and refined city living.</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="project-grid large-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | SPARKO';
  }, []);

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>About Us</strong>
          </nav>
          <h1>Built around trust, transparency, and premium guidance.</h1>
          <p>SPARKO provides property advice rooted in clarity, local understanding, and a commitment to client-first service.</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="info-grid">
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>To help clients make confident property decisions with premium guidance, honest communication, and market insights.</p>
          </div>
          <div className="info-card">
            <h3>Our Vision</h3>
            <p>To become Lahore’s go-to destination for elevated property discovery, investment planning, and service-led real estate advice.</p>
          </div>
          <div className="info-card">
            <h3>Core Values</h3>
            <p>Professionalism, trust, tailored recommendations, and transparent support throughout every step of the journey.</p>
          </div>
        </div>
      </section>

      <section className="container section-block trust-section">
        <div className="feature-grid">
          {reasons.map((reason, index) => (
            <div key={reason} className="feature-box">
              <div className="feature-icon">0{index + 1}</div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | SPARKO';
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  function submit(event) {
    event.preventDefault();
    const isValid = formData.name && formData.email && formData.phone && formData.message;
    if (!isValid) {
      setStatus('Please complete all required fields.');
      return;
    }
    setStatus('Your message has been sent successfully. A SPARKO advisor will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>Contact</strong>
          </nav>
          <h1>Let’s talk about your next property move.</h1>
          <p>Reach out for expert guidance on buying, selling, renting, and investment opportunities in Lahore.</p>
        </div>
      </section>

      <section className="container section-block contact-page-wrap">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="eyebrow dark">Reach us</span>
            <h2>Speak with a property specialist.</h2>
            <ul>
              <li>Phone: +92 300 1234567</li>
              <li>Email: hello@sparko.pk</li>
              <li>WhatsApp: +92 300 1234567</li>
              <li>Office: Lahore, Pakistan</li>
            </ul>
          </div>

          <form className="consultation-form" onSubmit={submit}>
            <label>
              <span>Full Name</span>
              <input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
            </label>
            <div className="form-row two-col">
              <label>
                <span>Email</span>
                <input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
              </label>
              <label>
                <span>Phone</span>
                <input value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea rows="5" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
            </label>
            {status ? <div className="form-status">{status}</div> : null}
            <button type="submit" className="primary-btn full-width">Send Message</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

function ConsultationPage() {
  useEffect(() => {
    document.title = 'Consultation | SPARKO';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Buying',
    date: '',
    time: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  function submit(event) {
    event.preventDefault();
    const required = [formData.name, formData.phone, formData.email, formData.date, formData.time];
    if (required.some((field) => !String(field).trim())) {
      setStatus('Please complete all appointment details.');
      return;
    }
    if (!/^[0-9+\-()\s]{7,}$/.test(formData.phone)) {
      setStatus('Please enter a valid phone number.');
      return;
    }
    setStatus('Your consultation has been scheduled successfully. Our team will confirm shortly.');
    setFormData({ name: '', phone: '', email: '', inquiryType: 'Buying', date: '', time: '', message: '' });
  }

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container narrow">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>Consultation</strong>
          </nav>
          <h1>Book a consultation with SPARKO.</h1>
          <p>Share your preferences and let our specialists guide you toward the most suitable opportunity.</p>
        </div>
      </section>

      <section className="container section-block">
        <div className="consultation-layout">
          <div className="consultation-copy">
            <span className="eyebrow dark">Why book?</span>
            <h2>Property advice designed around your investment goals.</h2>
            <ul>
              <li>Personalized property shortlist</li>
              <li>Clear buying and rental guidance</li>
              <li>Investment planning support</li>
              <li>Visit scheduling and market recommendations</li>
            </ul>
          </div>

          <form className="consultation-form" onSubmit={submit}>
            <div className="form-row two-col">
              <label>
                <span>Full Name</span>
                <input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
              </label>
              <label>
                <span>Phone</span>
                <input value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
              </label>
            </div>
            <div className="form-row two-col">
              <label>
                <span>Email</span>
                <input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
              </label>
              <label>
                <span>Inquiry Type</span>
                <select value={formData.inquiryType} onChange={(event) => setFormData({ ...formData, inquiryType: event.target.value })}>
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Renting</option>
                  <option>Investment</option>
                  <option>Property Visit</option>
                  <option>General Consultation</option>
                </select>
              </label>
            </div>
            <div className="form-row two-col">
              <label>
                <span>Preferred Date</span>
                <input type="date" value={formData.date} onChange={(event) => setFormData({ ...formData, date: event.target.value })} />
              </label>
              <label>
                <span>Preferred Time</span>
                <input type="time" value={formData.time} onChange={(event) => setFormData({ ...formData, time: event.target.value })} />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea rows="5" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
            </label>
            {status ? <div className="form-status">{status}</div> : null}
            <button type="submit" className="primary-btn full-width">Book Consultation</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

function PropertyDetailPage() {
  const { slug } = useParams();
  const property = properties.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(property?.image || '');

  useEffect(() => {
    if (property) {
      setSelectedImage(property.image);
      document.title = `${property.title} | SPARKO`;
    }
  }, [property]);

  if (!property) {
    return <NotFoundPage />;
  }

  const similarProperties = properties.filter((item) => item.slug !== property.slug).slice(0, 3);

  return (
    <PageLayout>
      <section className="container section-block detail-page">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/properties">Properties</Link>
          <span>/</span>
          <strong>{property.title}</strong>
        </nav>

        <div className="property-detail">
          <div className="gallery-panel">
            <div className="gallery-main">
              <img src={selectedImage} alt={property.title} />
            </div>
            <div className="gallery-thumbs">
              {property.gallery.map((image) => (
                <button key={image} type="button" className={selectedImage === image ? 'thumb active' : 'thumb'} onClick={() => setSelectedImage(image)}>
                  <img src={image} alt={property.title} />
                </button>
              ))}
            </div>
          </div>

          <aside className="detail-card">
            <div className="detail-header-row">
              <span className="status-tag">{property.status}</span>
              <span className="property-id">{property.id}</span>
            </div>
            <h1>{property.title}</h1>
            <div className="detail-price">{property.price}</div>
            <p className="location-line">{property.location}</p>
            <div className="detail-specs">
              <span>{property.type}</span>
              <span>{property.area}</span>
            </div>
            <div className="detail-specs small-gap">
              <span>{property.bedrooms} Beds</span>
              <span>{property.bathrooms} Baths</span>
            </div>
            <p>{property.description}</p>
            <div className="detail-actions">
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="primary-btn">WhatsApp Inquiry</a>
              <Link to="/consultation" className="secondary-btn">Schedule Visit</Link>
            </div>
          </aside>
        </div>

        <div className="detail-content-grid">
          <div className="detail-info-card">
            <h3>Property Overview</h3>
            <ul>
              {property.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-info-card inquiry-card">
            <h3>Quick Inquiry</h3>
            <form className="consultation-form">
              <label>
                <span>Name</span>
                <input placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input placeholder="03xx xxxxxxx" />
              </label>
              <button type="button" className="primary-btn full-width">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionHeader eyebrow="Similar properties" title="Explore more premium opportunities." />
        <div className="property-grid">
          {similarProperties.map((item) => (
            <PropertyCard key={item.slug} property={item} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout>
      <section className="container section-block detail-page">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Projects</Link>
          <span>/</span>
          <strong>{project.title}</strong>
        </nav>

        <div className="project-detail-layout">
          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="detail-card">
            <span className="project-category">{project.category}</span>
            <h1>{project.title}</h1>
            <div className="detail-price">{project.price}</div>
            <p>{project.location}</p>
            <p>{project.description}</p>
            <Link to="/consultation" className="primary-btn full-width">Request Details</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | SPARKO';
  }, []);

  return (
    <PageLayout>
      <section className="container section-block empty-state large-empty">
        <h1>404</h1>
        <h2>This page does not exist.</h2>
        <Link to="/" className="primary-btn">Back to Home</Link>
      </section>
    </PageLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/properties/:slug" element={<PropertyDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
