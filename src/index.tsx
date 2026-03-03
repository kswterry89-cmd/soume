import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './public' }));

app.get('/', c => c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Soumé - Ocean Breeze Skincare</title>
  <style>
    /* ==========================================
       RESET & BASE STYLES
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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #fff;
      overflow-x: hidden;
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
    }

    /* ==========================================
       LOADING SPINNER
       ========================================== */
    .loader-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.6s ease, visibility 0.6s ease;
    }

    .loader-container.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .loader-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid #f0f0f0;
      border-top: 4px solid #000;
      border-radius: 50%;
      animation: loader-spin 1s linear infinite;
    }

    @keyframes loader-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* ==========================================
       NAVIGATION BAR
       ========================================== */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .navbar.scrolled {
      padding: 0.8rem 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -1px;
      color: #000;
      text-transform: uppercase;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 3rem;
      align-items: center;
    }

    .nav-menu a {
      font-size: 0.95rem;
      font-weight: 600;
      color: #333;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #000;
      transition: width 0.3s ease;
    }

    .nav-menu a:hover::after {
      width: 100%;
    }

    .nav-menu a:hover {
      color: #000;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 6px;
      z-index: 1001;
    }

    .hamburger-line {
      width: 28px;
      height: 3px;
      background: #000;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .hamburger.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translateY(12px);
    }

    .hamburger.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translateY(-12px);
    }

    /* ==========================================
       HERO SECTION
       ========================================== */
    .hero {
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      overflow: hidden;
      background: #f5f5f5;
    }

    .hero-slider {
      position: relative;
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
      transition: opacity 0.8s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    }

    .hero-slide.active {
      opacity: 1;
      z-index: 10;
    }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .hero-slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
      z-index: 5;
    }

    .hero-content {
      position: absolute;
      bottom: 4rem;
      left: 4rem;
      z-index: 20;
      color: white;
      max-width: 600px;
    }

    .hero-content h1 {
      font-size: clamp(2rem, 6vw, 4rem);
      font-weight: 900;
      margin-bottom: 1rem;
      letter-spacing: -2px;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    }

    .hero-content p {
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 300;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      margin-bottom: 2rem;
    }

    .hero-btn {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: rgba(255, 255, 255, 0.95);
      color: #000;
      font-weight: 700;
      font-size: 0.95rem;
      border-radius: 50px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .hero-btn:hover {
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    /* ==========================================
       HERO NAVIGATION (THUMBNAILS)
       ========================================== */
    .hero-nav {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      gap: 1rem;
      z-index: 20;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 600px;
    }

    .hero-nav-btn {
      width: 90px;
      height: 90px;
      border: 3px solid rgba(255, 255, 255, 0.5);
      background: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .hero-nav-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .hero-nav-btn.active {
      border-color: #fff;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      transform: scale(1.1);
    }

    .hero-nav-btn:hover {
      border-color: rgba(255, 255, 255, 0.8);
      transform: scale(1.05);
    }

    /* ==========================================
       SLIDER ARROWS
       ========================================== */
    .hero-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 20;
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.5);
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .hero-arrow:hover {
      background: rgba(255, 255, 255, 0.4);
      border-color: rgba(255, 255, 255, 0.8);
    }

    .hero-arrow.prev {
      left: 2rem;
    }

    .hero-arrow.next {
      right: 2rem;
    }

    /* ==========================================
       HERO DOTS INDICATOR
       ========================================== */
    .hero-dots {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.8rem;
      z-index: 20;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid rgba(255, 255, 255, 0.6);
    }

    .dot.active {
      background: #fff;
      width: 30px;
      border-radius: 6px;
    }

    /* ==========================================
       PRODUCTS SECTION
       ========================================== */
    .products-section {
      padding: 6rem 2rem;
      background: #fff;
      position: relative;
    }

    .section-title {
      text-align: center;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 900;
      margin-bottom: 1rem;
      letter-spacing: -1px;
      color: #000;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 4rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .product-card {
      aspect-ratio: 3/4;
      background: #f5f5f5;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }

    .product-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }

    .product-card:hover img {
      transform: scale(1.05);
    }

    .product-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      padding: 2rem 1.5rem;
      color: white;
      transform: translateY(50px);
      transition: transform 0.3s ease;
      z-index: 10;
    }

    .product-card:hover .product-overlay {
      transform: translateY(0);
    }

    .product-overlay h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .product-overlay p {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    /* ==========================================
       ABOUT SECTION
       ========================================== */
    .about-section {
      padding: 6rem 2rem;
      background: linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%);
      position: relative;
    }

    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-content h2 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: #000;
      letter-spacing: -1px;
    }

    .about-content p {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    .about-features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .feature-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .feature-icon {
      width: 50px;
      height: 50px;
      background: #000;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
      font-size: 1.5rem;
    }

    .feature-text h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #000;
    }

    .feature-text p {
      font-size: 0.95rem;
      color: #666;
      margin: 0;
    }

    .about-image {
      aspect-ratio: 1/1;
      background: #e8e8e8;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    /* ==========================================
       TESTIMONIAL SECTION
       ========================================== */
    .testimonial-section {
      padding: 6rem 2rem;
      background: #000;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .testimonial-title {
      text-align: center;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 900;
      margin-bottom: 4rem;
      letter-spacing: -1px;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonial-card {
      background: rgba(255, 255, 255, 0.08);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-5px);
    }

    .testimonial-stars {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #ffd700;
    }

    .testimonial-text {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 700;
      font-size: 0.95rem;
    }

    /* ==========================================
       CTA SECTION
       ========================================== */
    .cta-section {
      padding: 5rem 2rem;
      background: linear-gradient(135deg, #000 0%, #333 100%);
      color: white;
      text-align: center;
      position: relative;
    }

    .cta-title {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
    }

    .cta-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
    }

    .cta-button {
      display: inline-block;
      padding: 1.2rem 3rem;
      background: #fff;
      color: #000;
      font-weight: 800;
      font-size: 1rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid #fff;
    }

    .cta-button:hover {
      background: transparent;
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    }

    /* ==========================================
       FOOTER
       ========================================== */
    footer {
      background: #1a1a1a;
      color: #999;
      padding: 4rem 2rem 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-col h3 {
      color: #fff;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 0.8rem;
    }

    .footer-col ul li a {
      color: #999;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }

    .footer-col ul li a:hover {
      color: #fff;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      text-align: center;
      color: #666;
    }

    .footer-bottom p {
      margin-bottom: 0.5rem;
    }

    /* ==========================================
       RESPONSIVE DESIGN
       ========================================== */
    @media (max-width: 1024px) {
      .hero-content {
        bottom: 2rem;
        left: 2rem;
        max-width: 500px;
      }

      .hero-nav {
        bottom: 1rem;
        right: 1rem;
        gap: 0.8rem;
      }

      .hero-nav-btn {
        width: 70px;
        height: 70px;
      }

      .about-container {
        gap: 2rem;
      }

      .products-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .navbar {
        padding: 1rem 1.5rem;
      }

      .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        flex-direction: column;
        background: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
        gap: 1rem;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-menu a::after {
        display: none;
      }

      .hamburger {
        display: flex;
      }

      .hero {
        height: 80vh;
        margin-top: 50px;
      }

      .hero-content {
        bottom: 1.5rem;
        left: 1.5rem;
        max-width: 400px;
      }

      .hero-content h1 {
        font-size: 1.8rem;
      }

      .hero-arrow {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }

      .hero-arrow.prev {
        left: 1rem;
      }

      .hero-arrow.next {
        right: 1rem;
      }

      .hero-nav {
        right: 0.5rem;
        gap: 0.5rem;
        justify-content: flex-end;
        max-width: 400px;
      }

      .hero-nav-btn {
        width: 60px;
        height: 60px;
        border-width: 2px;
      }

      .about-container {
        grid-template-columns: 1fr;
      }

      .about-image {
        aspect-ratio: 4/5;
      }

      .products-section,
      .about-section,
      .testimonial-section,
      .cta-section {
        padding: 4rem 1.5rem;
      }

      .products-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 0.8rem 1rem;
      }

      .logo {
        font-size: 1.3rem;
      }

      .hero {
        height: 70vh;
        margin-top: 50px;
      }

      .hero-content {
        bottom: 1rem;
        left: 1rem;
      }

      .hero-content h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .hero-content p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      .hero-btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.85rem;
      }

      .hero-arrow {
        display: none;
      }

      .hero-nav {
        left: 0;
        right: 0;
        width: 100%;
        bottom: 1rem;
        justify-content: center;
        max-width: 100%;
        padding: 0 1rem;
      }

      .hero-nav-btn {
        width: 50px;
        height: 50px;
      }

      .hero-dots {
        display: none;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .section-subtitle {
        font-size: 0.95rem;
        margin-bottom: 2rem;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .feature-icon {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }

      .about-features {
        gap: 1rem;
      }
    }

    /* ==========================================
       UTILITIES
       ========================================== */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hidden {
      display: none !important;
    }

    /* ==========================================
       ANIMATIONS
       ========================================== */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .fade-in {
      animation: fadeIn 0.6s ease;
    }

    .fade-in-up {
      animation: fadeInUp 0.6s ease;
    }
  </style>
</head>
<body>
  <!-- LOADER -->
  <div class="loader-container" id="loaderContainer">
    <div class="loader-spinner"></div>
  </div>

  <!-- NAVIGATION -->
  <nav class="navbar" id="navbar">
    <div class="logo">Soumé</div>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#hero">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#testimonials">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <div class="hero-slider" id="heroSlider">
      <!-- SLIDE 1 -->
      <div class="hero-slide active">
        <img src="/static/ocean-breeze-home.png" alt="Ocean Breeze Home" />
        <div class="hero-slide-overlay"></div>
        <div class="hero-content">
          <h1>Ocean Breeze</h1>
          <p>Experience the perfect blend of nature and science</p>
          <button class="hero-btn">Discover Now</button>
        </div>
      </div>

      <!-- SLIDE 2 -->
      <div class="hero-slide">
        <img src="/static/ocean-breeze-1.png" alt="Ocean Breeze Collection 1" />
        <div class="hero-slide-overlay"></div>
        <div class="hero-content">
          <h1>Pure Essence</h1>
          <p>Formulated with effective ingredients</p>
          <button class="hero-btn">Shop Now</button>
        </div>
      </div>

      <!-- SLIDE 3 -->
      <div class="hero-slide">
        <img src="/static/ocean-breeze-campaign.png" alt="Ocean Breeze Campaign" />
        <div class="hero-slide-overlay"></div>
        <div class="hero-content">
          <h1>Transform Your Skin</h1>
          <p>Radiant skin starts here</p>
          <button class="hero-btn">Learn More</button>
        </div>
      </div>

      <!-- SLIDE 4 -->
      <div class="hero-slide">
        <img src="/static/ocean-breeze-2.png" alt="Ocean Breeze Collection 2" />
        <div class="hero-slide-overlay"></div>
        <div class="hero-content">
          <h1>Complete Skincare</h1>
          <p>Your journey to beautiful skin</p>
          <button class="hero-btn">Explore</button>
        </div>
      </div>
    </div>

    <!-- HERO NAVIGATION ARROWS -->
    <button class="hero-arrow prev" id="prevArrow">❮</button>
    <button class="hero-arrow next" id="nextArrow">❯</button>

    <!-- HERO DOTS INDICATOR -->
    <div class="hero-dots" id="heroDots"></div>

    <!-- HERO NAVIGATION THUMBNAILS -->
    <div class="hero-nav" id="heroNav">
      <button class="hero-nav-btn active" data-index="0">
        <img src="/static/ocean-breeze-home.png" alt="Slide 1" />
      </button>
      <button class="hero-nav-btn" data-index="1">
        <img src="/static/ocean-breeze-1.png" alt="Slide 2" />
      </button>
      <button class="hero-nav-btn" data-index="2">
        <img src="/static/ocean-breeze-campaign.png" alt="Slide 3" />
      </button>
      <button class="hero-nav-btn" data-index="3">
        <img src="/static/ocean-breeze-2.png" alt="Slide 4" />
      </button>
    </div>
  </section>

  <!-- PRODUCTS SECTION -->
  <section class="products-section" id="products">
    <h2 class="section-title">Campaign Collections</h2>
    <p class="section-subtitle">Discover our carefully curated collection of skincare essentials</p>

    <div class="products-grid">
      <div class="product-card">
        <img src="/static/ocean-breeze-home.png" alt="Campaign 1" />
        <div class="product-overlay">
          <h3>Campaign 1</h3>
          <p>Discover the essence</p>
        </div>
      </div>

      <div class="product-card">
        <img src="/static/ocean-breeze-1.png" alt="Campaign 2" />
        <div class="product-overlay">
          <h3>Campaign 2</h3>
          <p>Pure formulation</p>
        </div>
      </div>

      <div class="product-card">
        <img src="/static/ocean-breeze-campaign.png" alt="Campaign 3" />
        <div class="product-overlay">
          <h3>Campaign 3</h3>
          <p>Transform skin</p>
        </div>
      </div>

      <div class="product-card">
        <img src="/static/ocean-breeze-2.png" alt="Campaign 4" />
        <div class="product-overlay">
          <h3>Campaign 4</h3>
          <p>Complete care</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about-section" id="about">
    <div class="about-container">
      <div class="about-content">
        <h2>About Soumé</h2>
        <p>
          Soumé represents a commitment to skincare excellence. We believe that effective skincare 
          should be accessible to everyone, combining scientific innovation with the power of natural ingredients.
        </p>
        <p>
          Our formulations are developed with meticulous attention to detail, ensuring that each product 
          delivers visible results while maintaining the highest standards of purity and safety.
        </p>

        <div class="about-features">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Effective Ingredients</h3>
              <p>Scientifically-proven formulations</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Quality Assured</h3>
              <p>Rigorous testing standards</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h3>Results Focused</h3>
              <p>Visible transformation guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-image">
        <img src="/static/ocean-breeze-2.png" alt="Soumé Product" />
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL SECTION -->
  <section class="testimonial-section" id="testimonials">
    <h2 class="testimonial-title">Customer Reviews</h2>

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">
          "This product line has completely transformed my skin. I've never felt more confident!"
        </p>
        <p class="testimonial-author">- Sarah M.</p>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">
          "Finally found a skincare brand that actually delivers on its promises. Highly recommended!"
        </p>
        <p class="testimonial-author">- Jessica L.</p>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">
          "The quality and effectiveness are unmatched. Worth every penny!"
        </p>
        <p class="testimonial-author">- Emily K.</p>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="cta-section" id="cta">
    <h2 class="cta-title">Ready to Transform Your Skin?</h2>
    <p class="cta-subtitle">Join thousands of satisfied customers and start your skincare journey today</p>
    <button class="cta-button">Shop Now</button>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-col">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Ingredients</a></li>
          <li><a href="#">Sustainability</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Returns</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Soumé. All rights reserved.</p>
      <p>Crafted with care for your skin.</p>
    </div>
  </footer>

  <script>
    /* ========================================
       INITIALIZATION
       ======================================== */
    const loaderContainer = document.getElementById('loaderContainer');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const heroSlider = document.getElementById('heroSlider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroNav = document.getElementById('heroNav');
    const heroNavBtns = document.querySelectorAll('.hero-nav-btn');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    const heroDots = document.getElementById('heroDots');

    let currentSlide = 0;
    const totalSlides = heroSlides.length;
    let autoSlideInterval;

    /* ========================================
       LOADER
       ======================================== */
    window.addEventListener('load', () => {
      setTimeout(() => {
        loaderContainer.classList.add('hidden');
      }, 500);
    });

    /* ========================================
       NAVBAR SCROLL EFFECT
       ======================================== */
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    /* ========================================
       HAMBURGER MENU
       ======================================== */
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    /* ========================================
       HERO DOTS INITIALIZATION
       ======================================== */
    function createDots() {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => goToSlide(i));
        heroDots.appendChild(dot);
      }
    }

    /* ========================================
       HERO SLIDER FUNCTIONS
       ======================================== */
    function updateSlide() {
      // Update slides
      heroSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
          slide.classList.add('active');
        }
      });

      // Update nav buttons
      heroNavBtns.forEach((btn, index) => {
        btn.classList.remove('active');
        if (index === currentSlide) {
          btn.classList.add('active');
        }
      });

      // Update dots
      document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
          dot.classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
      resetAutoSlide();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
      resetAutoSlide();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateSlide();
      resetAutoSlide();
    }

    function autoSlide() {
      nextSlide();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(autoSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    /* ========================================
       EVENT LISTENERS - HERO SLIDER
       ========================================*/
    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);

    heroNavBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        goToSlide(index);
      });
    });

    /* ========================================
       INITIALIZATION
       ======================================== */
    createDots();
    startAutoSlide();
    updateSlide();

    /* ========================================
       INTERSECTION OBSERVER FOR ANIMATIONS
       ======================================== */
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.product-card, .testimonial-card, .about-container').forEach((el) => {
      observer.observe(el);
    });

    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    /* ========================================
       CTA BUTTON CLICK
       ======================================== */
    document.querySelectorAll('.cta-button, .hero-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Thank you for your interest! Visit our shop to explore products.');
      });
    });
  </script>
</body>
</html>`));

export default app;
