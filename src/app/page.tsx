import React from "react";
import InstagramFeed from "@/components/InstagramFeed";
export default function Home() {
  return (
    <main>

    {/*  Cinematic Noise Overlay  */}
    <div className="cinematic-noise"></div>
    {/*  Ambient Cursor Torch  */}
    <div id="ambient-torch"></div>

    {/*  NAVIGATION  */}
    <nav className="navbar" id="navbar">
        <div className="container nav-container">
            <a href="#" className="logo" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                <img src="assets/logo.png" alt="PIHNEXA Logo" style={{"height":"40px","width":"auto"}} />
                <span className="logo-text" style={{"fontFamily":"'Inter', sans-serif","fontWeight":"800","fontSize":"1.3rem","background":"linear-gradient(135deg, #0ea5e9, #10b981)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","letterSpacing":"-0.5px","lineHeight":"1"}}>PIHNEXA<br /><span style={{"fontSize":"0.8rem","fontWeight":"600","letterSpacing":"1px"}}>TECHNOLOGIES</span></span>
            </a>
            <ul className="nav-links" id="navLinks">
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </ul>
            <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
                <a href="#contact" className="btn btn-primary" id="navCta" style={{"padding":"0.5rem 1rem","fontSize":"0.9rem"}}>Consultation</a>
                <div className="mobile-toggle" id="mobileToggle">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </nav>

    {/*  APPLE STYLE RIBBON  */}
    <div className="apple-ribbon">
        <div className="ribbon-scroll">
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">🏥</div>
                <span>Patient Tracker</span>
            </a>
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">👥</div>
                <span>Smart Queue</span>
            </a>
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">💻</div>
                <span>Web Apps</span>
            </a>
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">📱</div>
                <span>Mobile Apps</span>
            </a>
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">🤖</div>
                <span>AI Bots</span>
            </a>
            <a href="#projects" className="ribbon-item" style={{"textDecoration":"none"}}>
                <div className="ribbon-icon">💼</div>
                <span>Portfolios</span>
            </a>
        </div>
    </div>

    {/*  1. HERO SECTION  */}
    <header className="hero" id="home" style={{"position":"relative","overflow":"hidden"}}>
        {/*  ANTI GRAVITY ENGINE  */}
        <div id="anti-gravity-container">
            <div className="ag-orb ag-orb-1"></div>
            <div className="ag-orb ag-orb-2"></div>
            <div className="ag-orb ag-orb-3"></div>
            <div className="ag-card-wrapper ag-card-1"><div className="ag-card"><i className="fa-solid fa-code"></i></div></div>
            <div className="ag-card-wrapper ag-card-2"><div className="ag-card"><i className="fa-solid fa-microchip"></i></div></div>
            <div className="ag-card-wrapper ag-card-3"><div className="ag-card"><i className="fa-solid fa-chart-line"></i></div></div>
        </div>
        <div className="container hero-grid">
            <div className="hero-content">
                <div className="badge">Healthcare & Business Automation Experts</div>
                <h1>Transform Your Business with <span className="gradient-text">Smart Digital Solutions</span></h1>
                <p>We build Websites, Mobile Apps, Hospital Software, AI Solutions, WhatsApp Automation, and Digital Systems that help businesses scale faster and operate smarter.</p>
                <div className="hero-ctas">
                    <a href="#contact" className="btn btn-primary">Book Free Consultation <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="#projects" className="btn btn-secondary">View Our Work</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="floating-icon icon-1"><i className="fa-solid fa-mobile-screen-button" style={{"color":"#38bdf8","fontSize":"2rem"}}></i></div>
                <div className="floating-icon icon-2"><i className="fa-solid fa-robot" style={{"color":"#818cf8","fontSize":"2rem"}}></i></div>
                {/*  Premium Abstract Illustration via Unsplash  */}
                <img src="assets/hero-image.png" alt="Digital Solutions Dashboard" className="hero-image" />
            </div>
        </div>
    </header>

    {/*  CLIENT & PROJECT MARQUEE  */}
    <div className="marquee-container">
        <div className="marquee-content">
            <span className="marquee-item">MEETTRACK PRO</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">SMART QUEUE MANAGEMENT</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">PATIENT TRACKER PRO</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">MEDANTA MELA APP</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">PERSONAL PORTFOLIOS</span>
            {/*  Duplicate for infinite scroll effect  */}
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">MEETTRACK PRO</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">SMART QUEUE MANAGEMENT</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">PATIENT TRACKER PRO</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">MEDANTA MELA APP</span>
            <span className="marquee-item"><i className="fa-solid fa-star" style={{"color":"var(--accent-warning)","fontSize":"1rem"}}></i></span>
            <span className="marquee-item">PERSONAL PORTFOLIOS</span>
        </div>
    </div>

    {/*  2. TRUST INDICATORS  */}
    <section className="trust-section">
        <div className="container">
            <div className="trust-grid">
                <div className="trust-item">
                    <i className="fa-solid fa-bolt"></i>
                    <h4>Fast Delivery</h4>
                    <span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Agile methodology</span>
                </div>
                <div className="trust-item">
                    <i className="fa-solid fa-headset"></i>
                    <h4>Dedicated Support</h4>
                    <span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>24/7 technical assistance</span>
                </div>
                <div className="trust-item">
                    <i className="fa-solid fa-code-merge"></i>
                    <h4>Custom Development</h4>
                    <span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Tailored to your needs</span>
                </div>
                <div className="trust-item">
                    <i className="fa-solid fa-shield-halved"></i>
                    <h4>Secure Solutions</h4>
                    <span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Enterprise-grade security</span>
                </div>
                <div className="trust-item">
                    <i className="fa-solid fa-server"></i>
                    <h4>Scalable Architecture</h4>
                    <span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Built for growth</span>
                </div>
            </div>
        </div>
    </section>

    {/*  3. SERVICES  */}
    <section id="services">
        <div className="container">
            <h2 className="section-title">Our <span className="gradient-text">Core Services</span></h2>
            <p className="section-subtitle">Comprehensive digital solutions designed to modernize your operations and accelerate growth.</p>
            
            <div className="services-grid">
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-laptop-code"></i></div>
                    <h3>Website Development</h3>
                    <p>High-converting business websites, corporate portals, and landing pages that drive leads.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-brands fa-app-store-ios"></i></div>
                    <h3>Mobile App Development</h3>
                    <p>Native and cross-platform apps using Flutter for Android and iOS devices.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-hospital-user"></i></div>
                    <h3>Hospital Management</h3>
                    <p>Patient registration, automated billing, appointment booking, and dashboards.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-users-viewfinder"></i></div>
                    <h3>Smart Queue Management</h3>
                    <p>QR-based patient flow, token systems, and live wait-time tracking.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-fingerprint"></i></div>
                    <h3>Digital Attendance</h3>
                    <p>QR attendance systems, location tracking, and digital signature solutions.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-brands fa-whatsapp"></i></div>
                    <h3>WhatsApp Automation</h3>
                    <p>Automated lead capture, 24/7 customer support bots, and alert notifications.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-brain"></i></div>
                    <h3>AI Solutions</h3>
                    <p>Intelligent AI chatbots, workflow optimization, and predictive analytics.</p>
                    
                </div>
                <div className="card glass service-card">
                    <div className="service-icon"><i className="fa-solid fa-gears"></i></div>
                    <h3>Business Automation</h3>
                    <p>Custom software bridging gaps in your workflow, eliminating manual data entry.</p>
                    
                </div>
            </div>
        </div>
    </section>
    {/*  VIDEO / ADVERTISEMENT SECTION  */}
    <section id="promo-video">
        <div className="container" style={{"textAlign":"center"}}>
            <div className="badge" data-aos="fade-up">Featured Video</div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">See Our <span className="gradient-text">Technology</span> in Action</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200" style={{"marginBottom":"3rem"}}>Upload your promotional video or advertisements here.</p>
            
            <div className="video-wrapper glass" data-aos="zoom-in" data-aos-delay="300">
                {/*  Replace src with your own video URL or local file path like 'assets/promo.mp4'  */}
                <video id="promoVideoPlayer" src="assets/promo.mp4?v=2" autoPlay loop muted playsInline controls preload="auto" style={{"width":"100%","minHeight":"400px","background":"#050a14","objectFit":"cover","borderRadius":"calc(var(--radius-lg) - 6px)","display":"block"}}>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>

    {/*  ADVERTISEMENT & HIRING GALLERY  */}
    <section id="gallery">
        <div className="container">
            <div style={{"textAlign":"center","marginBottom":"3rem"}}>
                <div className="badge" data-aos="fade-up">Gallery & Announcements</div>
                <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Our <span className="gradient-text">Spotlight</span></h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">Latest advertisements, upcoming hirings, and company culture.</p>
            </div>
            
            <div className="photo-gallery-grid">
                <div className="gallery-item glass" data-aos="zoom-in" data-aos-delay="100">
                    <img src="assets/adv.png" alt="Special Advertisement" className="gallery-img" />
                    <div className="gallery-overlay">
                        <h3>Featured Advertisement</h3>
                        <p>Special Promotion by PIHNEXA</p>
                    </div>
                </div>
                <div className="gallery-item glass" data-aos="zoom-in" data-aos-delay="200">
                    <img src="assets/project-1.jpg" alt="Advertisement 1" className="gallery-img" />
                    <div className="gallery-overlay">
                        <h3>New Product Launch</h3>
                        <p>Discover our latest AI tool</p>
                    </div>
                </div>
                <div className="gallery-item glass" data-aos="zoom-in" data-aos-delay="300">
                    <img src="assets/project-2.jpg" alt="Advertisement 2" className="gallery-img" />
                    <div className="gallery-overlay">
                        <h3>Upcoming Event</h3>
                        <p>Join us at Tech Expo 2026</p>
                    </div>
                </div>
                <div className="gallery-item glass" data-aos="zoom-in" data-aos-delay="400">
                    <img src="assets/project-3.jpg" alt="Hiring 2" className="gallery-img" />
                    <div className="gallery-overlay">
                        <h3>Join Our Team</h3>
                        <p>UI/UX Designer Needed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  4. WHY CHOOSE US  */}
    <section id="why-us" style={{"background":"rgba(15,23,42,0.3)"}}>
        <div className="container">
            <h2 className="section-title">Why Choose <span className="gradient-text">PIHNEXA?</span></h2>
            <div className="features-grid" style={{"marginTop":"3rem"}}>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Custom Development</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Fast Project Delivery</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Mobile First Design</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Enterprise Security</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>SEO Friendly</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Scalable Solutions</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Dedicated Support</h4></div>
                <div className="card glass feature-item"><i className="fa-solid fa-check-circle"></i><h4>Affordable Pricing</h4></div>
            </div>
        </div>
    </section>

    {/*  5. FEATURED PROJECTS  */}
    <section id="projects">
        <div className="container">
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">Real solutions delivering real business value.</p>
            
            <div className="projects-grid">
                {/*  Project 1: MeetTrack Pro  */}
                <div className="card glass project-card">
                    <img src="assets/project-1.jpg" alt="MeetTrack Pro" className="project-img" />
                    <div className="project-content">
                        <div className="project-tech">
                            <span className="tech-tag">Next.js</span><span className="tech-tag">Node.js</span><span className="tech-tag">AI</span>
                        </div>
                        <h3>MeetTrack Pro</h3>
                        <p>An advanced meeting dashboard for tracking, scheduling, and analyzing business meetings efficiently.</p>
                        <a href="#contact" className="btn btn-secondary" style={{"width":"100%"}}>View Details</a>
                    </div>
                </div>
                {/*  Project 2: Smart Queue Management  */}
                <div className="card glass project-card">
                    <img src="assets/project-2.jpg" alt="Smart Queue Management" className="project-img" />
                    <div className="project-content">
                        <div className="project-tech">
                            <span className="tech-tag">React</span><span className="tech-tag">Firebase</span>
                        </div>
                        <h3>Smart Queue Management</h3>
                        <p>Real-time token and queue management system that completely removes chaos at front desks.</p>
                        <a href="#contact" className="btn btn-secondary" style={{"width":"100%"}}>View Details</a>
                    </div>
                </div>
                {/*  Project 3: Patient Tracker Pro  */}
                <div className="card glass project-card">
                    <img src="assets/project-3.jpg" alt="Patient Tracker Pro" className="project-img" />
                    <div className="project-content">
                        <div className="project-tech">
                            <span className="tech-tag">Vue.js</span><span className="tech-tag">PostgreSQL</span><span className="tech-tag">HIPAA</span>
                        </div>
                        <h3>Patient Tracker Pro</h3>
                        <p>Specialized hospital software generating automated, structured checklists specifically for Credit Patients.</p>
                        <a href="#contact" className="btn btn-secondary" style={{"width":"100%"}}>View Details</a>
                    </div>
                </div>
                {/*  Project 4: Medanta Mela Food App  */}
                <div className="card glass project-card">
                    <img src="assets/project-4.jpg" alt="Medanta Mela Food App" className="project-img" />
                    <div className="project-content">
                        <div className="project-tech">
                            <span className="tech-tag">Flutter</span><span className="tech-tag">Express</span>
                        </div>
                        <h3>Medanta Mela Food App</h3>
                        <p>Custom mobile application built specifically for seamless food ordering and event management at Medanta Mela.</p>
                        <a href="#contact" className="btn btn-secondary" style={{"width":"100%"}}>View Details</a>
                    </div>
                </div>
                {/*  Project 5: Personal Portfolios  */}
                <div className="card glass project-card">
                    <img src="assets/project-5.jpg" alt="Personal Portfolios" className="project-img" />
                    <div className="project-content">
                        <div className="project-tech">
                            <span className="tech-tag">HTML/CSS</span><span className="tech-tag">React</span><span className="tech-tag">UI/UX</span>
                        </div>
                        <h3>Premium Personal Portfolios</h3>
                        <p>High-end, dynamic digital identities and portfolio websites designed for professionals and creatives.</p>
                        <a href="#contact" className="btn btn-secondary" style={{"width":"100%"}}>View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  6. INDUSTRIES WE SERVE  */}
    <section className="trust-section">
        <div className="container">
            <h2 className="section-title">Industries We <span className="gradient-text">Serve</span></h2>
            <div className="industries-grid" style={{"marginTop":"3rem"}}>
                <div className="card glass industry-card"><i className="fa-solid fa-hospital"></i><h4>Hospitals</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-stethoscope"></i><h4>Clinics</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-heart-pulse"></i><h4>Healthcare</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-utensils"></i><h4>Restaurants</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-graduation-cap"></i><h4>Education</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-store"></i><h4>Retail</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-rocket"></i><h4>Startups</h4></div>
                <div className="card glass industry-card"><i className="fa-solid fa-building"></i><h4>Enterprises</h4></div>
            </div>
        </div>
    </section>

    {/*  7. FOUNDER SECTION  */}
    <section id="about">
        <div className="container">
            <div className="founder-grid">
                <div className="founder-img-wrapper">
                    {/*  Placeholder for Founder Image  */}
                    <img src="assets/founder.jpg" alt="Ankush Jha - Founder" className="founder-img" />
                </div>
                <div className="founder-content">
                    <h3>Ankush Jha</h3>
                    <span className="founder-role">Founder & Chief Technology Consultant</span>
                    <p>As the architect behind MeetTrack Pro, Medanta Mela's food app, and the advanced Patient Tracker Pro, my focus has always been on creating tangible impact. I specialize in healthcare automation, digital transformation, and full-stack solutions, driven by a vision to build software that actively solves real-world operational bottlenecks.</p>
                    
                    <div className="skills-list">
                        <span className="skill-tag">Healthcare Tech</span>
                        <span className="skill-tag">Business Automation</span>
                        <span className="skill-tag">Full-Stack Development</span>
                        <span className="skill-tag">Product Strategy</span>
                    </div>
                    
                    <a href="#contact" className="btn btn-primary">Connect with Ankush <i className="fa-brands fa-linkedin" style={{"marginLeft":"0.5rem"}}></i></a>
                </div>
            </div>
        </div>
    </section>



    {/*  9. PROCESS  */}
    <section id="process">
        <div className="container">
            <h2 className="section-title">Our <span className="gradient-text">Delivery Process</span></h2>
            <div className="process-grid" style={{"marginTop":"4rem"}}>
                <div className="process-step">
                    <div className="step-number">1</div>
                    <h4>Requirement Discussion</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>Understanding goals and business logic.</p>
                </div>
                <div className="process-step">
                    <div className="step-number">2</div>
                    <h4>Planning & Design</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>UI/UX mapping and architecture design.</p>
                </div>
                <div className="process-step">
                    <div className="step-number">3</div>
                    <h4>Development</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>Agile coding with milestone updates.</p>
                </div>
                <div className="process-step">
                    <div className="step-number">4</div>
                    <h4>Testing</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>Rigorous QA, security & load testing.</p>
                </div>
                <div className="process-step">
                    <div className="step-number">5</div>
                    <h4>Deployment</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>Smooth server launch and configurations.</p>
                </div>
                <div className="process-step">
                    <div className="step-number">6</div>
                    <h4>Support & Maintenance</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--text-muted)","marginTop":"0.5rem"}}>Ongoing upgrades and 24/7 technical support.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  10. PRICING  */}
    <section id="pricing" style={{"background":"rgba(15,23,42,0.3)"}}>
        <div className="container">
            <h2 className="section-title">Productized <span className="gradient-text">Solutions</span></h2>
            <div className="pricing-grid" style={{"marginTop":"3rem"}}>
                <div className="card glass pricing-card">
                    <h3>Healthcare Automation Bundle</h3>
                    <div className="price" style={{"fontSize":"1.8rem"}}>Clinic Launchpad</div>
                    <ul className="pricing-features">
                        <li><i className="fa-solid fa-check"></i> Smart Queue Management</li>
                        <li><i className="fa-solid fa-check"></i> Patient Tracker Pro</li>
                        <li><i className="fa-solid fa-check"></i> Credit Patient Checklists</li>
                        <li><i className="fa-solid fa-check"></i> 24/7 WhatsApp Bot</li>
                        <li><i className="fa-solid fa-check"></i> Dedicated Tech Support</li>
                    </ul>
                    <p style={{"color":"var(--text-muted)","fontSize":"0.9rem","marginBottom":"1rem"}}>Automate patient flow, reduce desk chaos, and digitize records instantly.</p>
                    <a href="#contact" className="btn btn-secondary">Request Demo</a>
                </div>
                <div className="card glass pricing-card popular">
                    <div className="badge" style={{"alignSelf":"flex-start"}}>Most Popular</div>
                    <h3>Startup & Event Tech Package</h3>
                    <div className="price" style={{"fontSize":"1.8rem"}}>Go-To-Market Ready</div>
                    <ul className="pricing-features">
                        <li><i className="fa-solid fa-check"></i> Premium Personal Portfolio</li>
                        <li><i className="fa-solid fa-check"></i> Custom App (e.g. Medanta Mela)</li>
                        <li><i className="fa-solid fa-check"></i> Digital Attendance</li>
                        <li><i className="fa-solid fa-check"></i> High-Converting MVP</li>
                        <li><i className="fa-solid fa-check"></i> CRM Integration</li>
                    </ul>
                    <p style={{"color":"var(--text-muted)","fontSize":"0.9rem","marginBottom":"1rem"}}>Launch faster, capture leads effortlessly, and scale from day one.</p>
                    <a href="#contact" className="btn btn-primary">Get Started</a>
                </div>
                <div className="card glass pricing-card">
                    <h3>Custom Solutions</h3>
                    <div className="price" style={{"fontSize":"1.8rem"}}>Enterprise Level</div>
                    <ul className="pricing-features">
                        <li><i className="fa-solid fa-check"></i> Edge AI Implementations</li>
                        <li><i className="fa-solid fa-check"></i> Offline-First Rural Software</li>
                        <li><i className="fa-solid fa-check"></i> Multilingual Chatbots</li>
                        <li><i className="fa-solid fa-check"></i> Predictive Business Dashboards</li>
                        <li><i className="fa-solid fa-check"></i> Dedicated Engineering Team</li>
                    </ul>
                    <p style={{"color":"var(--text-muted)","fontSize":"0.9rem","marginBottom":"1rem"}}>Tailor-made software engineering to solve your most complex operational challenges.</p>
                    <a href="#contact" className="btn btn-secondary">Discuss Requirements</a>
                </div>
            </div>
        </div>
    </section>

    {/*  11. FAQ  */}
    <section id="faq">
        <div className="container">
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <div className="faq-container" style={{"marginTop":"3rem"}}>
                <div className="faq-item">
                    <div className="faq-question">How long does a website take to build? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>A standard corporate website takes 2-3 weeks. Complex web applications and portals can take 1-3 months depending on the required features.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do you provide post-launch support? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we offer dedicated support and maintenance packages ensuring your software runs smoothly and stays updated with the latest security patches.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Can you build custom hospital management software? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Absolutely. We specialize in healthcare tech, offering custom modules for patient registration, OPD billing, smart queuing, and pharmacy inventory.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do you provide mobile apps for Android and iOS? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we develop high-performance native and cross-platform mobile apps using frameworks like Flutter and React Native.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do you offer web hosting services? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we provide scalable cloud hosting solutions via AWS, DigitalOcean, and Vercel tailored to your project's traffic requirements.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Can you automate WhatsApp for my business? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we integrate the official WhatsApp Cloud API to create intelligent chatbots, automated reminders, and lead capture systems.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Are your websites SEO friendly? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>100%. We implement on-page SEO best practices including meta tags, fast loading speeds, semantic HTML, and structured data.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">What technologies do you use? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>We utilize modern stacks including React, Node.js, Python, Flutter, PostgreSQL, and various AI integrations.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do you sign NDAs? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we ensure complete confidentiality and are happy to sign Non-Disclosure Agreements before discussing sensitive ideas.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">What is a Smart Queue Management system? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>It is a digital token system (via QR or SMS) that allows patients or customers to track their turn live, eliminating crowded waiting rooms.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Can you redesign an existing website? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, we offer complete UI/UX overhauls to modernize outdated websites and improve their conversion rates.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do you offer UI/UX design as a separate service? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Yes, our design team can create wireframes, prototypes, and high-fidelity mockups in Figma for your software ideas.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">How do you ensure data security? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>We implement encryption (at rest and in transit), secure authentication (JWT/OAuth), and follow OWASP security guidelines.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Do I own the source code? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>For fully custom projects, yes, the intellectual property and source code are handed over to you upon final payment.</p></div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">How do we get started? <i className="fa-solid fa-chevron-down"></i></div>
                    <div className="faq-answer"><p style={{"paddingTop":"1rem"}}>Simply fill out the contact form or click the WhatsApp button. We'll schedule a free 30-minute consultation to discuss your needs.</p></div>
                </div>
            </div>
        </div>
    </section>

    <InstagramFeed />
    {/*  12. CONTACT  */}
    <section id="contact" style={{"background":"rgba(15,23,42,0.3)"}}>
        <div className="container">
            <div className="contact-grid">
                <div>
                    <h2 className="section-title" style={{"textAlign":"left"}}>Let's Build Something <span className="gradient-text">Great</span></h2>
                    <p style={{"color":"var(--text-muted)","marginBottom":"2rem"}}>Ready to automate your operations or launch your next big platform? Get in touch with us today.</p>
                    
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:+917992203671" style={{"color":"var(--text-muted)"}}>+91 7992203671</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4>Email Us</h4>
                                <a href="mailto:info@pihnexa.co.in" style={{"color":"var(--text-muted)"}}>info@pihnexa.co.in</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-globe"></i></div>
                            <div>
                                <h4>Website</h4>
                                <a href="http://www.pihnexa.co.in" style={{"color":"var(--text-muted)"}}>www.pihnexa.co.in</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card glass">
                    <form className="contact-form" action="#" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input type="text" id="name" className="form-control" required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input type="tel" id="phone" className="form-control" required placeholder="+91 9876543210" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="form-control" placeholder="john@company.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company / Clinic Name</label>
                            <input type="text" id="company" className="form-control" placeholder="City Hospital" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="requirement">Project Requirement *</label>
                            <textarea id="requirement" className="form-control" rows={4} required placeholder="Describe what you are looking to build..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{"width":"100%","marginTop":"1rem"}}>Submit Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/*  FOOTER  */}
    <footer>
        <div className="container" style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem","padding":"4rem 0"}}>
            <div>
                <img src="assets/logo.png" alt="PIHNEXA Logo" style={{"height":"40px","marginBottom":"1rem"}} />
                <p style={{"color":"var(--text-muted)","fontSize":"0.9rem"}}>Healthcare & Business Automation Experts.</p>
                <div style={{"marginTop":"1rem","display":"flex","gap":"1.5rem","fontSize":"1.5rem","position":"relative","zIndex":"50"}}>
                    <a href="#" style={{"color":"var(--text-muted)","transition":"color 0.3s"}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#" style={{"color":"var(--text-muted)","transition":"color 0.3s"}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/pihnexa_technologies/" target="_blank" rel="noopener noreferrer" style={{"color":"var(--text-muted)","transition":"color 0.3s"}}><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div>
                <h4 style={{"color":"#fff","marginBottom":"1rem","fontFamily":"var(--font-display)"}}>Products</h4>
                <ul style={{"color":"var(--text-muted)","fontSize":"0.9rem","display":"flex","flexDirection":"column","gap":"0.5rem"}}>
                    <li><a href="#projects">MeetTrack Pro</a></li>
                    <li><a href="#projects">Smart Queue Management</a></li>
                    <li><a href="#projects">Patient Tracker Pro</a></li>
                </ul>
            </div>
            <div>
                <h4 style={{"color":"#fff","marginBottom":"1rem","fontFamily":"var(--font-display)"}}>Legal & Compliance</h4>
                <ul style={{"color":"var(--text-muted)","fontSize":"0.9rem","display":"flex","flexDirection":"column","gap":"0.5rem"}}>
                    <li><a href="javascript:void(0)" >Privacy Policy</a></li>
                    <li><a href="javascript:void(0)" >Terms of Service</a></li>
                    <li><a href="javascript:void(0)" >Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="container" style={{"borderTop":"1px solid var(--border-light)","padding":"2rem 0","textAlign":"center"}}>
            <p style={{"color":"var(--text-muted)","fontSize":"0.85rem","maxWidth":"800px","margin":"0 auto 1rem auto"}}>
                <strong>Healthcare Data Security & Compliance:</strong> At PIHNEXA, security is embedded in our DNA. We adhere to OWASP Top 10 standards, utilize AES-256 encryption, and enforce secure JWT/OAuth 2.0 authentication. Our healthcare solutions are designed with HIPAA compliance principles, ensuring end-to-end data protection for patient records.
            </p>
            <p style={{"fontSize":"0.9rem","color":"var(--text-muted)"}}>&copy; 2026 PIHNEXA Technologies. All Rights Reserved.</p>
        </div>
    </footer>

    {/*  FLOATING WHATSAPP BUTTON  */}
    <a href="https://wa.me/917992203671?text=Hi%20PIHNEXA,%20I%20want%20to%20discuss%20a%20project." className="floating-wa" target="_blank" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
    </a>

    {/*  SCRIPTS  */}
    

    {/*  STICKY CTA  */}
    <a href="#contact" className="sticky-cta">
        <i className="fa-solid fa-calendar-check"></i> Book Free Tech Audit
    </a>

    {/*  COOKIE CONSENT  */}
    <div className="cookie-consent" id="cookieConsent">
        <p>We use cookies to improve your experience and ensure compliance with security standards. By continuing, you agree to our <a href="javascript:void(0)"  style={{"color":"var(--accent-primary)","textDecoration":"underline"}}>Cookie Policy</a>.</p>
        <button className="btn btn-primary btn-sm" id="acceptCookies">Accept & Continue</button>
    </div>

    
    
    {/*  AOS Animation Library  */}
    
    

    {/*  LEGAL MODAL  */}
    <div id="legalModal" className="legal-modal">
        <div className="legal-modal-content glass">
            <span className="close-legal" >&times;</span>
            <div className="legal-tabs">
                <button className="legal-tab active" >Privacy Policy</button>
                <button className="legal-tab" >Terms of Service</button>
                <button className="legal-tab" >Cookie Policy</button>
            </div>
            <div className="legal-body">
                {/*  Privacy Policy  */}
                <div id="privacyText" className="legal-section active">
                    <h2>Privacy Policy</h2>
                    <p>Last Updated: June 2026</p>
                    <h3>1. Information We Collect</h3>
                    <p>At PIHNEXA Technologies, we collect information that you voluntarily provide to us when expressing an interest in obtaining information about our premium products (such as MeetTrack Pro, Patient Tracker Pro) or services.</p>
                    <h3>2. Healthcare Data & HIPAA Compliance</h3>
                    <p>For our healthcare partners using Patient Tracker Pro and Smart Queue Management, we adhere strictly to OWASP Top 10 security protocols and ensure end-to-end AES-256 encryption. We process patient data in compliance with standard global health data privacy principles.</p>
                    <h3>3. How We Use Your Information</h3>
                    <ul>
                        <li>To provide and maintain our automated services.</li>
                        <li>To deploy AI bots and custom Web/App solutions securely.</li>
                        <li>To notify you about changes to our software infrastructure.</li>
                    </ul>
                    <h3>4. Data Security</h3>
                    <p>Security is our core DNA. We utilize OAuth 2.0 and JWT for secure session management, ensuring that your enterprise data remains impenetrable.</p>
                </div>
                
                {/*  Terms of Service  */}
                <div id="termsText" className="legal-section">
                    <h2>Terms of Service</h2>
                    <p>Last Updated: June 2026</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing PIHNEXA Technologies' website or utilizing our software products, you agree to be bound by these Terms of Service.</p>
                    <h3>2. Enterprise Software Licenses</h3>
                    <p>Products like MeetTrack Pro and Patient Tracker Pro are licensed to organizations under strict usage parameters. Reverse engineering, unauthorized distribution, or tampering with our proprietary AI algorithms is strictly prohibited.</p>
                    <h3>3. Limitation of Liability</h3>
                    <p>PIHNEXA Technologies shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our custom applications or business automation workflows.</p>
                    <h3>4. Intellectual Property</h3>
                    <p>All source code, designs, UI/UX layouts, and AI models provided by PIHNEXA remain our intellectual property unless explicitly transferred under a custom development contract.</p>
                </div>
                
                {/*  Cookie Policy  */}
                <div id="cookieText" className="legal-section">
                    <h2>Cookie Policy</h2>
                    <p>Last Updated: June 2026</p>
                    <h3>1. What Are Cookies?</h3>
                    <p>Cookies are small text files stored securely on your device. We use them to offer you a seamless, personalized, and premium web experience.</p>
                    <h3>2. How We Use Cookies</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the operation of our secure portals and Anti-Gravity UI engines.</li>
                        <li><strong>Analytical Cookies:</strong> To understand how visitors interact with our portfolio and service pages, helping us optimize the UX.</li>
                    </ul>
                    <h3>3. Managing Your Cookies</h3>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, some portions of our premium UI may not render perfectly.</p>
                </div>
            </div>
        </div>
    </div>

    

    </main>
  );
}
