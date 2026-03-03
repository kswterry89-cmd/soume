import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './public' }));

app.get('/', c => c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soumé - Ocean Breeze Collection</title>
  <style>
    /* ==========================================
       RESET & TYPOGRAPHY
       ========================================== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary-dark: #1a1a1a;
      --primary-light: #f8f8f8;
      --accent-beige: #e8dcc8;
      --text-dark: #2a2a2a;
      --text-light: #666;
      --border-light: #e5e5e5;
      --white: #ffffff;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: var(--text-dark);
      background: var(--white);
      line-height: 1.6;
      overflow-x: hidden;
    }

    img {
      display: block;
      max-width: 100%;
    }

    /* ==========================================
       LOADER
       ========================================== */
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 1;
      transition: opacity 0.6s ease;
    }

    .loader.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .loader-dot {
      width: 12px;
      height: 12px;
      margin: 0 6px;
      background: var(--primary-dark);
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;
    }

    .loader-dot:nth-child(1) {
      animation-delay: -0.32s;
    }

    .loader-dot:nth-child(2) {
      animation-delay: -0.16s;
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }

    /* ==========================================
       NAVIGATION
       ========================================== */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      border-bottom: 1px solid var(--border-light);
      transition: all 0.3s ease;
    }

    .navbar-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--primary-dark);
      text-transform: uppercase;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 3rem;
    }

    .nav-menu a {
      font-size: 0.9rem;
      color: var(--text-dark);
      text-decoration: none;
      transition: color 0.3s ease;
      font-weight: 500;
    }

    .nav-menu a:hover {
      color: var(--accent-beige);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }

    .hamburger span {
      width: 25px;
      height: 2px;
      background: var(--primary-dark);
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }

    /* ==========================================
       HERO SECTION - MINIMAL
       ========================================== */
    .hero {
      margin-top: 60px;
      height: 100vh;
      background: var(--white);
      display: grid;
      grid-template-columns: 1fr 1fr;
      overflow: hidden;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem;
      background: var(--white);
    }

    .hero-label {
      font-size: 0.85rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-light);
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--primary-dark);
      letter-spacing: -2px;
    }

    .hero-description {
      font-size: 1.1rem;
      color: var(--text-light);
      margin-bottom: 2.5rem;
      line-height: 1.8;
      max-width: 400px;
      font-weight: 300;
    }

    .hero-cta {
      display: inline-flex;
      padding: 0.9rem 2rem;
      background: var(--primary-dark);
      color: var(--white);
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 1px;
      transition: all 0.4s ease;
      width: fit-content;
      border: 2px solid var(--primary-dark);
    }

    .hero-cta:hover {
      background: transparent;
      color: var(--primary-dark);
    }

    .hero-image {
      position: relative;
      background: var(--accent-beige);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .hero-slider {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
    }

    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.8s ease;
    }

    .hero-slide.active {
      opacity: 1;
    }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .hero-nav-dots {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      gap: 0.8rem;
      z-index: 10;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .dot.active {
      background: var(--primary-dark);
      width: 28px;
      border-radius: 5px;
    }

    .hero-nav-arrows {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      display: flex;
      gap: 1rem;
      z-index: 10;
    }

    .arrow-btn {
      width: 45px;
      height: 45px;
      border: 1px solid var(--primary-dark);
      background: transparent;
      color: var(--primary-dark);
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .arrow-btn:hover {
      background: var(--primary-dark);
      color: var(--white);
    }

    /* ==========================================
       FEATURES SECTION
       ========================================== */
    .features {
      padding: 6rem 2rem;
      background: var(--white);
    }

    .features-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    .feature-card {
      text-align: center;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: var(--accent-beige);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .feature-card h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      font-weight: 600;
      color: var(--primary-dark);
    }

    .feature-card p {
      font-size: 0.95rem;
      color: var(--text-light);
      line-height: 1.7;
    }

    /* ==========================================
       PRODUCTS GRID
       ========================================== */
    .products {
      padding: 6rem 2rem;
      background: var(--primary-light);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--primary-dark);
      letter-spacing: -1px;
    }

    .section-desc {
      font-size: 1rem;
      color: var(--text-light);
      max-width: 500px;
      margin: 0 auto;
    }

    .products-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .product-item {
      background: var(--white);
      overflow: hidden;
      transition: all 0.4s ease;
      border: 1px solid var(--border-light);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .product-item:hover {
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
      border-color: var(--accent-beige);
    }

    .product-image {
      height: 100%;
      overflow: hidden;
      background: var(--accent-beige);
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s ease;
    }

    .product-item:hover .product-image img {
      transform: scale(1.05);
    }

    .product-info {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .product-label {
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: var(--text-light);
      text-transform: uppercase;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    .product-name {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--primary-dark);
    }

    .product-desc {
      font-size: 0.95rem;
      color: var(--text-light);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .product-btn {
      align-self: flex-start;
      padding: 0.7rem 1.5rem;
      background: transparent;
      border: 2px solid var(--primary-dark);
      color: var(--primary-dark);
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
    }

    .product-btn:hover {
      background: var(--primary-dark);
      color: var(--white);
    }

    /* ==========================================
       ABOUT SECTION
       ========================================== */
    .about {
      padding: 6rem 2rem;
      background: var(--white);
    }

    .about-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-image {
      aspect-ratio: 4/5;
      background: var(--accent-beige);
      overflow: hidden;
    }

    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .about-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--primary-dark);
      letter-spacing: -1px;
    }

    .about-content p {
      font-size: 1rem;
      color: var(--text-light);
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .about-points {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-top: 2.5rem;
    }

    .about-point {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .point-number {
      width: 40px;
      height: 40px;
      background: var(--accent-beige);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--primary-dark);
      flex-shrink: 0;
    }

    .point-text h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
      color: var(--primary-dark);
    }

    .point-text p {
      font-size: 0.9rem;
      color: var(--text-light);
      margin: 0;
    }

    /* ==========================================
       TESTIMONIALS
       ========================================== */
    .testimonials {
      padding: 6rem 2rem;
      background: var(--primary-light);
    }

    .testimonials-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .testimonial {
      background: var(--white);
      padding: 2rem;
      border: 1px solid var(--border-light);
      transition: all 0.3s ease;
    }

    .testimonial:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      border-color: var(--accent-beige);
    }

    .stars {
      color: #ffd700;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .testimonial-text {
      font-size: 0.95rem;
      color: var(--text-light);
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 600;
      color: var(--primary-dark);
      font-size: 0.95rem;
    }

    /* ==========================================
       CTA SECTION
       ========================================== */
    .cta {
      padding: 5rem 2rem;
      background: var(--primary-dark);
      color: var(--white);
      text-align: center;
    }

    .cta h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .cta p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-btn {
      padding: 1rem 2.5rem;
      background: var(--white);
      color: var(--primary-dark);
      border: none;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }

    .cta-btn:hover {
      background: var(--accent-beige);
    }

    /* ==========================================
       FOOTER
       ========================================== */
    footer {
      background: var(--primary-dark);
      color: #999;
      padding: 3rem 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-col h3 {
      color: var(--white);
      margin-bottom: 1rem;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 0.6rem;
    }

    .footer-col ul li a {
      color: #999;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-col ul li a:hover {
      color: var(--white);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.9rem;
    }

    /* ==========================================
       RESPONSIVE
       ========================================== */
    @media (max-width: 1024px) {
      .hero {
        grid-template-columns: 1fr;
        height: auto;
      }

      .hero-content {
        padding: 3rem;
        min-height: 500px;
        justify-content: center;
      }

      .hero-image {
        min-height: 500px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .products-container {
        grid-template-columns: 1fr;
      }

      .product-item {
        grid-template-columns: 1fr;
      }

      .product-image {
        height: 300px;
      }

      .about-container {
        grid-template-columns: 1fr;
      }

      .about-image {
        aspect-ratio: 16/9;
      }

      .testimonial-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .features-container {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        flex-direction: column;
        background: var(--white);
        width: 100%;
        gap: 0;
        transition: 0.3s;
        padding: 1rem 0;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-menu a {
        padding: 0.8rem 1.5rem;
        display: block;
      }

      .hamburger {
        display: flex;
      }

      .navbar-content {
        padding: 1rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .product-info {
        padding: 2rem;
      }

      .about-content h2 {
        font-size: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .testimonial-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .navbar-content {
        padding: 0.8rem;
      }

      .logo {
        font-size: 1rem;
      }

      .nav-menu {
        gap: 0;
      }

      .hero-content {
        padding: 1.5rem;
        min-height: 400px;
      }

      .hero-title {
        font-size: 1.5rem;
      }

      .hero-description {
        font-size: 0.9rem;
      }

      .hero-cta {
        padding: 0.8rem 1.5rem;
        font-size: 0.85rem;
      }

      .products {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .features-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .product-item {
        grid-template-columns: 1fr;
      }

      .product-image {
        height: 250px;
      }

      .product-info {
        padding: 1.5rem;
      }

      .about {
        padding: 3rem 1rem;
      }

      .hero-nav-dots {
        display: none;
      }

      .hero-nav-arrows {
        display: none;
      }
    }
  </style>
</head>
<body>
  <!-- LOADER -->
  <div class="loader" id="loader">
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
  </div>

  <!-- NAVIGATION -->
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo">SOUMÉ</div>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="hero-content">
      <div class="hero-label">New Collection</div>
      <h1 class="hero-title">Ocean Breeze</h1>
      <p class="hero-description">
        Experience the perfect harmony of nature and science. Our premium skincare collection is formulated with effective ingredients to transform your skin.
      </p>
      <a href="#products" class="hero-cta">Explore Collection</a>
    </div>

    <div class="hero-image">
      <div class="hero-slider" id="heroSlider">
        <div class="hero-slide active">
          <img src="/static/ocean-breeze-home.png" alt="Ocean Breeze Home" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-1.png" alt="Ocean Breeze 1" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-campaign.png" alt="Ocean Breeze Campaign" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-2.png" alt="Ocean Breeze 2" />
        </div>
      </div>

      <div class="hero-nav-arrows">
        <button class="arrow-btn" id="prevBtn">←</button>
        <button class="arrow-btn" id="nextBtn">→</button>
      </div>

      <div class="hero-nav-dots" id="heroDots"></div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="features">
    <div class="features-container">
      <div class="feature-card">
        <div class="feature-icon">✨</div>
        <h3>Pure Formula</h3>
        <p>Crafted with effective ingredients for visible results</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌊</div>
        <h3>Ocean Extract</h3>
        <p>Infused with natural ocean-derived botanicals</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💎</div>
        <h3>Premium Quality</h3>
        <p>Laboratory tested and certified for safety</p>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
  <section class="products" id="products">
    <div class="section-header">
      <h2 class="section-title">Campaign Collections</h2>
      <p class="section-desc">Discover our carefully curated skincare essentials</p>
    </div>

    <div class="products-container">
      <div class="product-item">
        <div class="product-image">
          <img src="/static/ocean-breeze-home.png" alt="Serum Collection" />
        </div>
        <div class="product-info">
          <span class="product-label">Collection 01</span>
          <h3 class="product-name">Essence Serum</h3>
          <p class="product-desc">Lightweight hydrating serum infused with ocean botanicals. Perfect for all skin types.</p>
          <button class="product-btn">Learn More</button>
        </div>
      </div>

      <div class="product-item">
        <div class="product-image">
          <img src="/static/ocean-breeze-1.png" alt="Cream Collection" />
        </div>
        <div class="product-info">
          <span class="product-label">Collection 02</span>
          <h3 class="product-name">Rich Cream</h3>
          <p class="product-desc">Luxurious moisturizing cream with intensive nourishing properties for dry skin.</p>
          <button class="product-btn">Learn More</button>
        </div>
      </div>

      <div class="product-item">
        <div class="product-image">
          <img src="/static/ocean-breeze-campaign.png" alt="Mask Collection" />
        </div>
        <div class="product-info">
          <span class="product-label">Collection 03</span>
          <h3 class="product-name">Revitalizing Mask</h3>
          <p class="product-desc">Weekly treatment mask that delivers instant radiance and deep hydration boost.</p>
          <button class="product-btn">Learn More</button>
        </div>
      </div>

      <div class="product-item">
        <div class="product-image">
          <img src="/static/ocean-breeze-2.png" alt="Toner Collection" />
        </div>
        <div class="product-info">
          <span class="product-label">Collection 04</span>
          <h3 class="product-name">Balancing Toner</h3>
          <p class="product-desc">Alcohol-free toner that balances skin pH and preps for treatment products.</p>
          <button class="product-btn">Learn More</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-container">
      <div class="about-image">
        <img src="/static/ocean-breeze-2.png" alt="About Soumé" />
      </div>

      <div class="about-content">
        <h2>About Soumé</h2>
        <p>
          At Soumé, we believe skincare should be an experience of pure luxury and effectiveness. 
          Our Ocean Breeze collection represents years of research into the most potent natural ingredients.
        </p>
        <p>
          Each product is formulated to work in harmony with your skin, delivering visible transformation 
          while maintaining its natural balance.
        </p>

        <div class="about-points">
          <div class="about-point">
            <div class="point-number">1</div>
            <div class="point-text">
              <h3>Pure Ingredients</h3>
              <p>Sourced from sustainable origins worldwide</p>
            </div>
          </div>
          <div class="about-point">
            <div class="point-number">2</div>
            <div class="point-text">
              <h3>Effective Results</h3>
              <p>Clinically proven formulations</p>
            </div>
          </div>
          <div class="about-point">
            <div class="point-number">3</div>
            <div class="point-text">
              <h3>Sustainable</h3>
              <p>Eco-conscious packaging and practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials" id="testimonials">
    <div class="testimonials-container">
      <div class="section-header" style="margin-bottom: 3rem;">
        <h2 class="section-title">What Our Customers Say</h2>
      </div>

      <div class="testimonial-grid">
        <div class="testimonial">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">
            "This is hands down the best skincare product I've ever used. My skin feels incredibly soft and hydrated!"
          </p>
          <p class="testimonial-author">Sarah M.</p>
        </div>

        <div class="testimonial">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">
            "The results are visible after just two weeks. My skin tone has improved dramatically and I feel so confident."
          </p>
          <p class="testimonial-author">Jessica L.</p>
        </div>

        <div class="testimonial">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">
            "Worth every penny. The luxury feel combined with real results makes this a must-have in my routine."
          </p>
          <p class="testimonial-author">Emily K.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta" id="contact">
    <h2>Ready to Experience Ocean Breeze?</h2>
    <p>Join thousands of satisfied customers and discover the difference premium skincare makes</p>
    <button class="cta-btn">Shop Now</button>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-col">
        <h3>About</h3>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#">Ingredients</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Returns</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Follow</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Soumé Ocean Breeze. All rights reserved.</p>
    </div>
  </footer>

  <script>
    /* LOADER */
    window.addEventListener('load', () => {
      document.getElementById('loader').classList.add('hidden');
    });

    /* HAMBURGER MENU */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    /* HERO SLIDER */
    const heroSlider = document.getElementById('heroSlider');
    const slides = document.querySelectorAll('.hero-slide');
    const heroDots = document.getElementById('heroDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = i === 0 ? 'dot active' : 'dot';
      dot.addEventListener('click', () => goToSlide(i));
      heroDots.appendChild(dot);
    }

    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
      slides[n].classList.add('active');
      document.querySelectorAll('.dot')[n].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
      resetTimer();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
      resetTimer();
    }

    function goToSlide(n) {
      currentSlide = n;
      showSlide(n);
      resetTimer();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    let autoSlideTimer = setInterval(nextSlide, 5000);

    function resetTimer() {
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(nextSlide, 5000);
    }

    /* SMOOTH SCROLL */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  </script>
</body>
</html>`));

export default app;
