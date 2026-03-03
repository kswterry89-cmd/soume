import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './public' }));

app.get('/', c => c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soumé — Effective Skincare</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }

    /* LOADER */
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease;
    }

    .loader.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #e0e0e0;
      border-top-color: #333;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* NAVIGATION */
    nav {
      position: sticky;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      padding: clamp(1rem, 3vw, 1.5rem) clamp(1rem, 5vw, 2rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .logo {
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      font-weight: 700;
      color: #000;
      text-decoration: none;
    }

    .nav-menu {
      display: flex;
      gap: clamp(1rem, 4vw, 2.5rem);
      list-style: none;
    }

    .nav-menu a {
      text-decoration: none;
      color: #333;
      font-size: clamp(0.9rem, 2vw, 1rem);
      transition: color 0.3s;
    }

    .nav-menu a:hover {
      color: #0099ff;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: #333;
      border-radius: 2px;
      transition: all 0.3s;
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
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

      .nav-menu {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: white;
        padding: 1rem;
        gap: 0.5rem;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s;
      }

      .nav-menu.active {
        max-height: 300px;
      }
    }

    /* HERO SECTION */
    .hero {
      width: 100%;
      min-height: clamp(300px, 80vh, 600px);
      position: relative;
      background: #f0f0f0;
      overflow: hidden;
    }

    .hero-slides {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.6s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
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

    /* HERO NAVIGATION (thumbnails) */
    .hero-nav {
      position: absolute;
      bottom: clamp(1rem, 5vw, 2rem);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: clamp(0.5rem, 2vw, 1rem);
      z-index: 10;
    }

    .hero-nav-item {
      width: clamp(50px, 12vw, 80px);
      height: clamp(50px, 12vw, 80px);
      border: 3px solid rgba(255, 255, 255, 0.5);
      background: #f0f0f0;
      cursor: pointer;
      overflow: hidden;
      border-radius: 4px;
      transition: all 0.3s;
    }

    .hero-nav-item.active {
      border-color: #fff;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }

    .hero-nav-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* CAMPAIGN SECTION */
    .models-section {
      padding: clamp(2rem, 8vw, 4rem) clamp(1rem, 5vw, 2rem);
      background: #fff;
    }

    .section-title {
      text-align: center;
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      margin-bottom: clamp(2rem, 6vw, 3rem);
      color: #000;
    }

    .models-panorama {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 40vw, 280px), 1fr));
      gap: clamp(1rem, 4vw, 2rem);
      max-width: 1200px;
      margin: 0 auto;
    }

    .model-panel {
      aspect-ratio: 3/4;
      background: #f0f0f0;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .model-panel:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .model-panel img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    /* ABOUT SECTION */
    .about-section {
      padding: clamp(2rem, 8vw, 4rem) clamp(1rem, 5vw, 2rem);
      background: #f9f9f9;
    }

    .about-container {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(2rem, 5vw, 3rem);
      align-items: center;
    }

    .about-text h3 {
      font-size: clamp(1.5rem, 4vw, 2rem);
      margin-bottom: 1rem;
    }

    .about-text p {
      margin-bottom: 1rem;
      font-size: clamp(0.9rem, 2vw, 1rem);
      line-height: 1.7;
      color: #555;
    }

    .about-img-wrap {
      aspect-ratio: 1/1;
      overflow: hidden;
      border-radius: 8px;
      background: #f0f0f0;
    }

    .about-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 768px) {
      .about-container {
        grid-template-columns: 1fr;
      }
    }

    /* FOOTER */
    footer {
      background: #000;
      color: #fff;
      text-align: center;
      padding: clamp(1.5rem, 4vw, 2rem);
      font-size: clamp(0.85rem, 2vw, 0.95rem);
    }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .hero {
        min-height: clamp(250px, 70vh, 500px);
      }

      .models-panorama {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      }
    }

    @media (max-width: 480px) {
      .hero {
        min-height: 300px;
      }

      .hero-nav {
        gap: 0.4rem;
      }

      .hero-nav-item {
        width: 50px;
        height: 50px;
      }

      .models-panorama {
        grid-template-columns: 1fr 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="loader" id="loader"><div class="spinner"></div></div>

  <!-- NAVIGATION -->
  <nav>
    <a href="#top" class="logo">Soumé</a>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#top">Home</a></li>
      <li><a href="#models">Campaign</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="top">
    <div class="hero-slides" id="heroSlides">
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

    <!-- HERO NAVIGATION (THUMBNAILS) -->
    <div class="hero-nav" id="heroNav">
      <button class="hero-nav-item active">
        <img src="/static/ocean-breeze-home.png" alt="Slide 1" />
      </button>
      <button class="hero-nav-item">
        <img src="/static/ocean-breeze-1.png" alt="Slide 2" />
      </button>
      <button class="hero-nav-item">
        <img src="/static/ocean-breeze-campaign.png" alt="Slide 3" />
      </button>
      <button class="hero-nav-item">
        <img src="/static/ocean-breeze-2.png" alt="Slide 4" />
      </button>
    </div>
  </section>

  <!-- CAMPAIGN SECTION -->
  <section class="models-section" id="models">
    <h2 class="section-title">Campaign Collections</h2>
    <div class="models-panorama">
      <div class="model-panel">
        <img src="/static/ocean-breeze-home.png" alt="Campaign 1" />
      </div>
      <div class="model-panel">
        <img src="/static/ocean-breeze-1.png" alt="Campaign 2" />
      </div>
      <div class="model-panel">
        <img src="/static/ocean-breeze-campaign.png" alt="Campaign 3" />
      </div>
      <div class="model-panel">
        <img src="/static/ocean-breeze-2.png" alt="Campaign 4" />
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about-section" id="about">
    <div class="about-container">
      <div class="about-text">
        <h3>About Soumé</h3>
        <p>Soumé brings you skincare formulated with effective ingredients designed for modern skin. Our mission is to deliver results through transparency and quality.</p>
        <p>We believe in formulations that work for everyone. Each product is crafted with care to ensure your skin receives the best care possible.</p>
      </div>
      <div class="about-img-wrap">
        <img src="/static/ocean-breeze-2.png" alt="Soumé Product" />
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contact">
    <p>&copy; 2024 Soumé. All rights reserved.</p>
  </footer>

  <script>
    // Hide loader on load
    window.addEventListener('load', () => {
      document.getElementById('loader').classList.add('hidden');
    });

    // Hamburger menu toggle
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('hamburger').classList.toggle('active');
      document.getElementById('navMenu').classList.toggle('active');
    });

    // Hero slider logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const navItems = document.querySelectorAll('.hero-nav-item');

    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      navItems.forEach(i => i.classList.remove('active'));
      slides[n].classList.add('active');
      navItems[n].classList.add('active');
    }

    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-rotate slides every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  </script>
</body>
</html>`));

export default app;
