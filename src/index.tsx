import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './public' }));

app.get('/', c => c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soumé - Luxury Ocean Breeze Collection</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* ==========================================
       ROOT VARIABLES
       ========================================== */
    :root {
      --color-black: #0a0a0a;
      --color-dark: #1a1a1a;
      --color-white: #ffffff;
      --color-light: #f5f5f5;
      --color-beige: #d4af8f;
      --color-gold: #c9a961;
      --color-gray: #8b8b8b;
      --color-light-gray: #e8e8e8;
      --font-serif: 'Playfair Display', serif;
      --font-sans: 'Montserrat', sans-serif;
    }

    /* ==========================================
       RESET & BASE
       ========================================== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--font-sans);
      color: var(--color-dark);
      background: var(--color-white);
      line-height: 1.6;
      letter-spacing: 0.3px;
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
      background: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 1;
      transition: opacity 0.8s ease 0.5s;
    }

    .loader.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .loader-content {
      text-align: center;
    }

    .loader-logo {
      font-family: var(--font-serif);
      font-size: 2.5rem;
      font-weight: 600;
      letter-spacing: 4px;
      color: var(--color-black);
      margin-bottom: 2rem;
    }

    .loader-bar {
      width: 60px;
      height: 1px;
      background: var(--color-beige);
      margin: 0 auto;
      animation: loading 2s ease-in-out infinite;
    }

    @keyframes loading {
      0%, 100% {
        width: 60px;
      }
      50% {
        width: 120px;
      }
    }

    /* ==========================================
       NAVIGATION
       ========================================== */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      z-index: 1000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      padding: 0.8rem 0;
    }

    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.99);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      padding: 0.5rem 0;
    }

    .nav-container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 3px;
      color: var(--color-black);
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 3.5rem;
      align-items: center;
    }

    .nav-menu a {
      font-size: 0.85rem;
      color: var(--color-dark);
      text-decoration: none;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--color-beige);
      transition: width 0.3s ease;
    }

    .nav-menu a:hover::after {
      width: 100%;
    }

    .nav-icons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-icon {
      font-size: 1.2rem;
      cursor: pointer;
      color: var(--color-dark);
      transition: color 0.3s ease;
    }

    .nav-icon:hover {
      color: var(--color-beige);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }

    .hamburger span {
      width: 25px;
      height: 1.5px;
      background: var(--color-dark);
      border-radius: 1px;
      transition: all 0.3s ease;
    }

    /* ==========================================
       HERO SECTION
       ========================================== */
    .hero {
      margin-top: 60px;
      height: 100vh;
      background: var(--color-white);
      display: grid;
      grid-template-columns: 1fr 1fr;
      overflow: hidden;
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5rem;
      background: var(--color-white);
      position: relative;
    }

    .hero-left::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1px;
      height: 60%;
      background: linear-gradient(to bottom, rgba(201, 169, 97, 0.3), transparent);
    }

    .hero-label {
      font-family: var(--font-serif);
      font-size: 0.9rem;
      letter-spacing: 3px;
      color: var(--color-beige);
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: 4.5rem;
      font-weight: 600;
      line-height: 1.1;
      margin-bottom: 2rem;
      color: var(--color-black);
      letter-spacing: -1px;
    }

    .hero-subtitle {
      font-size: 1rem;
      color: var(--color-gray);
      margin-bottom: 2.5rem;
      line-height: 1.8;
      max-width: 450px;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .hero-btn-primary {
      padding: 1rem 2.5rem;
      background: var(--color-black);
      color: var(--color-white);
      border: 2px solid var(--color-black);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.4s ease;
      text-transform: uppercase;
    }

    .hero-btn-primary:hover {
      background: transparent;
      color: var(--color-black);
    }

    .hero-btn-secondary {
      padding: 1rem 2.5rem;
      background: transparent;
      color: var(--color-black);
      border: 2px solid var(--color-black);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.4s ease;
      text-transform: uppercase;
    }

    .hero-btn-secondary:hover {
      background: var(--color-black);
      color: var(--color-white);
    }

    .hero-right {
      position: relative;
      background: linear-gradient(135deg, #f5f5f5 0%, #ede7d9 100%);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-slider {
      position: relative;
      width: 100%;
      height: 100%;
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

    .hero-nav-buttons {
      position: absolute;
      bottom: 3rem;
      left: 3rem;
      display: flex;
      gap: 1rem;
      z-index: 20;
    }

    .nav-arrow {
      width: 50px;
      height: 50px;
      border: 1px solid var(--color-black);
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      color: var(--color-black);
      cursor: pointer;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
    }

    .nav-arrow:hover {
      background: var(--color-black);
      color: var(--color-white);
    }

    .hero-dots {
      position: absolute;
      bottom: 3rem;
      right: 3rem;
      display: flex;
      gap: 1rem;
      z-index: 20;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: all 0.4s ease;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .dot.active {
      background: var(--color-black);
      width: 24px;
      border-radius: 5px;
    }

    /* ==========================================
       SECTION DIVIDER
       ========================================== */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
    }

    /* ==========================================
       COLLECTION SECTION
       ========================================== */
    .collection {
      padding: 8rem 5rem;
      background: var(--color-white);
    }

    .section-intro {
      text-align: center;
      margin-bottom: 5rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .section-label {
      font-family: var(--font-serif);
      font-size: 0.9rem;
      letter-spacing: 3px;
      color: var(--color-beige);
      margin-bottom: 1rem;
    }

    .section-title {
      font-family: var(--font-serif);
      font-size: 3.5rem;
      font-weight: 600;
      color: var(--color-black);
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
    }

    .section-desc {
      font-size: 1rem;
      color: var(--color-gray);
      line-height: 1.8;
      font-weight: 300;
    }

    .collection-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      max-width: 1600px;
      margin: 0 auto;
    }

    .collection-item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
      align-items: center;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      transition: all 0.4s ease;
    }

    .collection-item:hover .collection-image {
      transform: scale(1.02);
    }

    .collection-image {
      aspect-ratio: 4/5;
      background: linear-gradient(135deg, #f5f5f5 0%, #ede7d9 100%);
      overflow: hidden;
      transition: transform 0.4s ease;
    }

    .collection-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .collection-content h3 {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--color-black);
      margin-bottom: 1rem;
    }

    .collection-content .label {
      font-size: 0.8rem;
      letter-spacing: 2px;
      color: var(--color-beige);
      text-transform: uppercase;
      margin-bottom: 1rem;
      display: block;
    }

    .collection-content p {
      font-size: 0.95rem;
      color: var(--color-gray);
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .collection-link {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--color-black);
      text-decoration: none;
      transition: all 0.3s ease;
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
    }

    .collection-link:hover {
      color: var(--color-beige);
      border-bottom-color: var(--color-beige);
    }

    .collection-link::after {
      content: '→';
      transition: transform 0.3s ease;
    }

    .collection-link:hover::after {
      transform: translateX(5px);
    }

    /* ==========================================
       ABOUT SECTION
       ========================================== */
    .about {
      padding: 8rem 5rem;
      background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    }

    .about-container {
      max-width: 1600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .about-content h2 {
      font-family: var(--font-serif);
      font-size: 3.5rem;
      font-weight: 600;
      color: var(--color-black);
      margin-bottom: 2rem;
      letter-spacing: -1px;
    }

    .about-content p {
      font-size: 1rem;
      color: var(--color-gray);
      line-height: 1.9;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    .about-image {
      aspect-ratio: 3/4;
      background: linear-gradient(135deg, #f5f5f5 0%, #ede7d9 100%);
      overflow: hidden;
    }

    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .about-values {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
      margin-top: 3rem;
    }

    .value-item {
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .value-item h3 {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--color-black);
      margin-bottom: 0.8rem;
    }

    .value-item p {
      font-size: 0.9rem;
      color: var(--color-gray);
      line-height: 1.7;
      margin: 0;
    }

    /* ==========================================
       PHILOSOPHY SECTION
       ========================================== */
    .philosophy {
      padding: 8rem 5rem;
      background: var(--color-black);
      color: var(--color-white);
      text-align: center;
    }

    .philosophy-label {
      font-family: var(--font-serif);
      font-size: 0.9rem;
      letter-spacing: 3px;
      color: var(--color-beige);
      margin-bottom: 1.5rem;
    }

    .philosophy h2 {
      font-family: var(--font-serif);
      font-size: 3.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      letter-spacing: -1px;
    }

    .philosophy p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.9;
      max-width: 700px;
      margin: 0 auto;
      font-weight: 300;
    }

    /* ==========================================
       TESTIMONIALS
       ========================================== */
    .testimonials {
      padding: 8rem 5rem;
      background: var(--color-white);
    }

    .testimonials-intro {
      text-align: center;
      margin-bottom: 4rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      max-width: 1600px;
      margin: 0 auto;
    }

    .testimonial-card {
      background: var(--color-light);
      padding: 3rem;
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.4s ease;
    }

    .testimonial-card:hover {
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    }

    .stars {
      color: var(--color-beige);
      font-size: 1rem;
      margin-bottom: 1.5rem;
      letter-spacing: 2px;
    }

    .testimonial-text {
      font-size: 0.95rem;
      color: var(--color-dark);
      line-height: 1.8;
      margin-bottom: 2rem;
      font-style: italic;
      font-weight: 300;
    }

    .testimonial-author {
      font-size: 0.85rem;
      color: var(--color-beige);
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* ==========================================
       FOOTER
       ========================================== */
    footer {
      background: var(--color-black);
      color: var(--color-white);
      padding: 4rem 5rem 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-content {
      max-width: 1600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
      margin-bottom: 3rem;
    }

    .footer-col h3 {
      font-family: var(--font-serif);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 2px;
      color: var(--color-white);
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 0.8rem;
    }

    .footer-col ul li a {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
      transition: color 0.3s ease;
      text-decoration: none;
    }

    .footer-col ul li a:hover {
      color: var(--color-beige);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.5px;
    }

    /* ==========================================
       RESPONSIVE
       ========================================== */
    @media (max-width: 1200px) {
      .nav-container {
        padding: 0 2rem;
      }

      .hero-left,
      .collection,
      .about,
      .philosophy,
      .testimonials,
      footer {
        padding: 5rem 2rem;
      }

      .hero-title,
      .section-title,
      .about-content h2,
      .philosophy h2 {
        font-size: 2.8rem;
      }

      .collection-grid {
        grid-template-columns: 1fr;
      }

      .collection-item {
        grid-template-columns: 1fr;
      }

      .about-container {
        gap: 3rem;
      }

      .testimonials-grid {
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
        background: var(--color-white);
        width: 100%;
        gap: 0;
        transition: 0.3s;
        padding: 1rem 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-menu a {
        padding: 1rem 1.5rem;
        display: block;
      }

      .nav-icons {
        display: none;
      }

      .hamburger {
        display: flex;
      }

      .hero {
        grid-template-columns: 1fr;
        height: auto;
        margin-top: 50px;
      }

      .hero-left {
        padding: 3rem 1.5rem;
        min-height: 500px;
      }

      .hero-right {
        height: 500px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 0.95rem;
      }

      .hero-buttons {
        flex-wrap: wrap;
      }

      .section-title {
        font-size: 2.2rem;
      }

      .collection-item {
        padding-bottom: 2rem;
      }

      .about-values {
        grid-template-columns: 1fr;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .nav-container {
        padding: 0 1rem;
      }

      .nav-logo {
        font-size: 1.2rem;
      }

      .hero-left {
        padding: 2rem 1rem;
      }

      .hero-title {
        font-size: 1.8rem;
      }

      .hero-subtitle {
        font-size: 0.9rem;
        max-width: 100%;
      }

      .hero-btn-primary,
      .hero-btn-secondary {
        padding: 0.8rem 1.5rem;
        font-size: 0.75rem;
      }

      .hero-nav-buttons,
      .hero-dots {
        display: none;
      }

      .collection,
      .about,
      .philosophy,
      .testimonials,
      footer {
        padding: 2.5rem 1rem;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .philosophy h2 {
        font-size: 2rem;
      }

      .testimonial-card {
        padding: 2rem;
      }
    }
  </style>
</head>
<body>
  <!-- LOADER -->
  <div class="loader" id="loader">
    <div class="loader-content">
      <div class="loader-logo">SOUMÉ</div>
      <div class="loader-bar"></div>
    </div>
  </div>

  <!-- NAVIGATION -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <div class="nav-logo">SOUMÉ</div>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#home">HOME</a></li>
        <li><a href="#collection">COLLECTION</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#testimonials">REVIEWS</a></li>
      </ul>
      <div class="nav-icons">
        <span class="nav-icon">🔍</span>
        <span class="nav-icon">❤️</span>
        <span class="nav-icon">🛍️</span>
      </div>
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="home">
    <div class="hero-left">
      <div class="hero-label">NEW COLLECTION</div>
      <h1 class="hero-title">Ocean Breeze</h1>
      <p class="hero-subtitle">
        Immerse yourself in the essence of luxury. Our Ocean Breeze collection represents the pinnacle of skincare refinement, blending time-honored beauty traditions with cutting-edge formulation science.
      </p>
      <div class="hero-buttons">
        <button class="hero-btn-primary">Discover</button>
        <button class="hero-btn-secondary">Learn More</button>
      </div>
    </div>

    <div class="hero-right">
      <div class="hero-slider" id="heroSlider">
        <div class="hero-slide active">
          <img src="/static/ocean-breeze-home.png" alt="Ocean Breeze Home" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-1.png" alt="Ocean Breeze Collection 1" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-campaign.png" alt="Ocean Breeze Campaign" />
        </div>
        <div class="hero-slide">
          <img src="/static/ocean-breeze-2.png" alt="Ocean Breeze Collection 2" />
        </div>
      </div>

      <div class="hero-nav-buttons">
        <button class="nav-arrow" id="prevBtn">←</button>
        <button class="nav-arrow" id="nextBtn">→</button>
      </div>

      <div class="hero-dots" id="heroDots"></div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- COLLECTION SECTION -->
  <section class="collection" id="collection">
    <div class="section-intro">
      <div class="section-label">OUR COLLECTIONS</div>
      <h2 class="section-title">Crafted Elegance</h2>
      <p class="section-desc">
        Each product in our Ocean Breeze collection has been meticulously formulated to deliver uncompromising quality and visible results.
      </p>
    </div>

    <div class="collection-grid">
      <div class="collection-item">
        <div class="collection-image">
          <img src="/static/ocean-breeze-home.png" alt="Essence Serum" />
        </div>
        <div class="collection-content">
          <span class="label">ESSENCE SERUM</span>
          <h3>Pure Vitality</h3>
          <p>
            A luminous serum essence that captures the restorative power of marine botanicals. This lightweight formula penetrates deeply to restore radiance and elasticity, leaving skin visibly transformed.
          </p>
          <a href="#" class="collection-link">Explore</a>
        </div>
      </div>

      <div class="collection-item">
        <div class="collection-image">
          <img src="/static/ocean-breeze-1.png" alt="Luxe Cream" />
        </div>
        <div class="collection-content">
          <span class="label">LUXE CREAM</span>
          <h3>Supreme Nourishment</h3>
          <p>
            An indulgent facial cream infused with precious ocean extracts. Its rich, silky texture envelops the skin in nourishment, restoring suppleness and imparting a luminous glow that speaks of inner beauty.
          </p>
          <a href="#" class="collection-link">Explore</a>
        </div>
      </div>

      <div class="collection-item">
        <div class="collection-image">
          <img src="/static/ocean-breeze-campaign.png" alt="Ritual Mask" />
        </div>
        <div class="collection-content">
          <span class="label">RITUAL MASK</span>
          <h3>Transformative Treatment</h3>
          <p>
            A luxurious weekly treatment mask that delivers intensive revitalization. Enriched with potent botanical compounds, it works to refine texture, enhance radiance, and restore the skin's natural vitality.
          </p>
          <a href="#" class="collection-link">Explore</a>
        </div>
      </div>

      <div class="collection-item">
        <div class="collection-image">
          <img src="/static/ocean-breeze-2.png" alt="Toning Essence" />
        </div>
        <div class="collection-content">
          <span class="label">TONING ESSENCE</span>
          <h3>Balancing Perfection</h3>
          <p>
            An exquisite toning essence that preps the skin for optimal absorption of subsequent treatments. Its delicate formula balances pH while infusing the complexion with moisture and vitality.
          </p>
          <a href="#" class="collection-link">Explore</a>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ABOUT SECTION -->
  <section class="about" id="about">
    <div class="about-container">
      <div class="about-image">
        <img src="/static/ocean-breeze-2.png" alt="Soumé Heritage" />
      </div>

      <div class="about-content">
        <h2>The Soumé Heritage</h2>
        <p>
          Soumé stands as a testament to the art of skincare refinement. Our commitment to excellence transcends generations, rooted in the belief that true beauty emerges from the marriage of science and nature.
        </p>
        <p>
          Every formulation is a masterpiece, carefully orchestrated to deliver visible transformation while respecting the skin's natural balance. Our ocean-inspired collections represent years of dedicated research and uncompromising standards.
        </p>

        <div class="about-values">
          <div class="value-item">
            <h3>Pure Origins</h3>
            <p>Sourced from pristine marine ecosystems, our ingredients are selected for their potency and purity.</p>
          </div>
          <div class="value-item">
            <h3>Scientific Precision</h3>
            <p>Each formula undergoes rigorous testing to ensure efficacy and safety standards exceed industry benchmarks.</p>
          </div>
          <div class="value-item">
            <h3>Timeless Elegance</h3>
            <p>Our aesthetic reflects a commitment to understated luxury and enduring sophistication.</p>
          </div>
          <div class="value-item">
            <h3>Sustainable Beauty</h3>
            <p>We honor the ocean by practicing eco-conscious sourcing and sustainable manufacturing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- PHILOSOPHY SECTION -->
  <section class="philosophy">
    <div class="philosophy-label">OUR PHILOSOPHY</div>
    <h2>The Ritual of Excellence</h2>
    <p>
      In a world of fleeting trends, Soumé remains steadfast in its pursuit of timeless beauty. We believe that skincare is not merely a regimen—it is a ritual of self-care, a moment of tranquility, and an investment in the most precious canvas: your skin. Every product is an invitation to experience the transformative power of luxury, responsibly crafted and consciously chosen.
    </p>
  </section>

  <div class="divider"></div>

  <!-- TESTIMONIALS SECTION -->
  <section class="testimonials" id="testimonials">
    <div class="testimonials-intro">
      <div class="section-label">VOICES OF ELEGANCE</div>
      <h2 class="section-title">Client Testimonials</h2>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">
          "Soumé has transformed my skin in ways I never thought possible. The luxury feel combined with real, visible results is incomparable."
        </p>
        <p class="testimonial-author">SARAH M. — LUXURY ENTHUSIAST</p>
      </div>

      <div class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">
          "Every product feels like a ritual. The attention to detail, from the formula to the packaging, speaks volumes about Soumé's commitment to excellence."
        </p>
        <p class="testimonial-author">JESSICA L. — BEAUTY DIRECTOR</p>
      </div>

      <div class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">
          "This is luxury redefined. Soumé doesn't just promise results—it delivers them with grace, elegance, and undeniable efficacy."
        </p>
        <p class="testimonial-author">EMILY K. — SKINCARE AFICIONADO</p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-col">
        <h3>DISCOVER</h3>
        <ul>
          <li><a href="#collection">Our Collection</a></li>
          <li><a href="#about">About Soumé</a></li>
          <li><a href="#">Ingredients</a></li>
          <li><a href="#">Sustainability</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>SUPPORT</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Returns & Exchange</a></li>
          <li><a href="#">Shipping</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>POLICY</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Legal</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>CONNECT</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 SOUMÉ. ALL RIGHTS RESERVED. | CRAFTED WITH PRECISION AND ELEGANCE.</p>
    </div>
  </footer>

  <script>
    /* LOADER */
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
      }, 800);
    });

    /* NAVBAR SCROLL EFFECT */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
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
