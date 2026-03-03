import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()
app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', c => c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soumé — Effective Skincare</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow-x: hidden; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fafafa; color: #333; }
    
    /* LOADER */
    .loader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; display: flex; align-items: center; justify-content: center; z-index: 9999; }
    .loader.hidden { display: none; }
    .spinner { width: clamp(40px, 8vw, 80px); height: clamp(40px, 8vw, 80px); border: 4px solid #ddd; border-top: 4px solid #C9B5A0; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    
    /* NAV */
    nav { position: sticky; top: 0; background: #fff; padding: clamp(12px, 3vw, 20px) clamp(16px, 5vw, 40px); display: flex; justify-content: space-between; align-items: center; z-index: 1000; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .logo { font-size: clamp(18px, 4vw, 28px); font-weight: 700; letter-spacing: 2px; color: #000; }
    .nav-menu { display: flex; gap: clamp(16px, 3vw, 32px); list-style: none; }
    .nav-menu a { font-size: clamp(13px, 2vw, 16px); text-decoration: none; color: #666; transition: color 0.3s; }
    .nav-menu a:hover { color: #C9B5A0; }
    .hamburger { display: none; flex-direction: column; gap: 6px; cursor: pointer; }
    .hamburger span { width: 24px; height: 2px; background: #000; }
    
    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-menu { position: absolute; top: 100%; left: 0; width: 100%; flex-direction: column; background: #fff; padding: 20px; gap: 12px; max-height: 0; overflow: hidden; transition: max-height 0.3s; }
      .nav-menu.active { max-height: 300px; }
    }
    
    /* HERO */
    .hero { position: relative; width: 100%; height: clamp(400px, 100vh, 800px); overflow: hidden; background: #f0ede8; }
    .hero-slides { position: relative; width: 100%; height: 100%; }
    .hero-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 0.8s ease-in-out; display: flex; align-items: center; justify-content: center; }
    .hero-slide.active { opacity: 1; }
    .hero-slide img { width: 100%; height: 100%; object-fit: cover; }
    
    .hero-nav { position: absolute; bottom: clamp(16px, 4vw, 32px); left: 50%; transform: translateX(-50%); display: flex; gap: clamp(8px, 2vw, 16px); z-index: 10; }
    .hero-nav-item { width: clamp(50px, 10vw, 80px); height: clamp(50px, 10vw, 80px); border: 2px solid transparent; background: none; cursor: pointer; overflow: hidden; border-radius: 4px; transition: border-color 0.3s; }
    .hero-nav-item.active { border-color: #fff; }
    .hero-nav-thumb { width: 100%; height: 100%; object-fit: cover; }
    
    /* MODELS SECTION */
    .models-section { padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px); background: #fff; }
    .section-title { font-size: clamp(28px, 6vw, 48px); font-weight: 700; margin-bottom: clamp(24px, 5vw, 40px); text-align: center; color: #000; }
    .models-panorama { display: grid; grid-template-columns: repeat(auto-fit, minmax(clamp(240px, 45vw, 300px), 1fr)); gap: clamp(16px, 3vw, 24px); }
    .model-panel { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s; cursor: pointer; }
    .model-panel:hover { transform: scale(1.03); }
    .model-panel img { width: 100%; height: 100%; object-fit: cover; }
    
    /* ABOUT */
    .about-section { padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px); background: #f9f7f5; }
    .about-container { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 40px); align-items: center; }
    .about-text h3 { font-size: clamp(20px, 4vw, 32px); margin-bottom: clamp(12px, 2vw, 20px); color: #000; }
    .about-text p { font-size: clamp(14px, 2.5vw, 16px); line-height: 1.6; color: #666; margin-bottom: clamp(12px, 2vw, 20px); }
    .about-img-wrap { width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 8px; }
    .about-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
    
    @media (max-width: 768px) {
      .about-container { grid-template-columns: 1fr; }
    }
    
    /* FOOTER */
    footer { background: #000; color: #fff; padding: clamp(32px, 6vw, 60px) clamp(20px, 5vw, 40px); text-align: center; font-size: clamp(12px, 2vw, 14px); }
  </style>
</head>
<body>
  <!-- LOADER -->
  <div class="loader" id="loader">
    <div class="spinner"></div>
  </div>

  <!-- NAV -->
  <nav>
    <div class="logo">SOUMÉ</div>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#top">HOME</a></li>
      <li><a href="#models">CAMPAIGN</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#contact">CONTACT</a></li>
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
      <div class="hero-slide active"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Soumé Campaign" /></div>
      <div class="hero-slide"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Collection" /></div>
      <div class="hero-slide"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Product Campaign" /></div>
      <div class="hero-slide"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Product" /></div>
    </div>
    <div class="hero-nav" id="heroNav">
      <button class="hero-nav-item active"><img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Slide 1" /></button>
      <button class="hero-nav-item"><img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Slide 2" /></button>
      <button class="hero-nav-item"><img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Slide 3" /></button>
      <button class="hero-nav-item"><img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Slide 4" /></button>
    </div>
  </section>

  <!-- MODELS SECTION -->
  <section class="models-section" id="models">
    <h2 class="section-title">Campaign Collections</h2>
    <div class="models-panorama">
      <div class="model-panel"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Campaign 1" /></div>
      <div class="model-panel"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Collection" /></div>
      <div class="model-panel"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Campaign 3" /></div>
      <div class="model-panel"><img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Product" /></div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about-section" id="about">
    <div class="about-container">
      <div class="about-text">
        <h3>About Soumé</h3>
        <p>Soumé brings you skincare formulated with effective ingredients designed for modern skin. Our products are crafted with pure formulas to deliver visible results without compromise.</p>
        <p>We believe in transparent, effective formulations that work for everyone. Experience the difference of thoughtfully designed skincare that prioritizes purity and performance.</p>
      </div>
      <div class="about-img-wrap">
        <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Soumé Product" />
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contact">
    <p>&copy; 2024 Soumé. All rights reserved.</p>
  </footer>

  <script>
    // LOADER
    window.addEventListener('load', () => {
      document.getElementById('loader').classList.add('hidden');
    });

    // HAMBURGER MENU
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // HERO SLIDER
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const navItems = document.querySelectorAll('.hero-nav-item');
    
    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      navItems.forEach(item => item.classList.remove('active'));
      slides[n].classList.add('active');
      navItems[n].classList.add('active');
    }
    
    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  </script>
</body>
</html>`))

export default app
