import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

const ASSETS = {
  logo: '/soume-logo-black.png',

  heroMain: '/assets/soume/hero-main.jpg',
  editorialMain: '/assets/soume/editorial-main.jpg',

  signatureMain: '/assets/soume/signature-main.jpg',
  signatureOpen: '/assets/soume/signature-open.jpg',
  signatureDetail: '/assets/soume/signature-detail.jpg',

  campaign01: '/assets/soume/campaign-01.jpg',
  campaign02: '/assets/soume/campaign-02.jpg',

  product01: '/assets/soume/product-01.jpg',
  product02: '/assets/soume/product-02.jpg',
  product03: '/assets/soume/product-03.jpg',

  lookbook01: '/assets/soume/lookbook-01.jpg',
  lookbook02: '/assets/soume/lookbook-02.jpg',
  lookbook03: '/assets/soume/lookbook-03.jpg',

  filmPoster: '/assets/soume/film-poster.jpg',
  filmVideo: '/videos/soume-brand-film.mp4',
}

const HERO_SLIDES = [
  ASSETS.heroMain,
  ASSETS.editorialMain,
  ASSETS.campaign01,
  ASSETS.campaign02,
]

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soumé — Image Check Version</title>
  <meta name="description" content="Soumé image check version" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#f7f2eb;
      --bg2:#fbf8f4;
      --text:#171513;
      --muted:#7a7066;
      --line:rgba(23,21,19,0.1);
      --dark:#111;
      --card:rgba(255,255,255,0.72);
      --shadow:0 18px 50px rgba(0,0,0,0.08);
      --radius:28px;
      --container:1240px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      color:var(--text);
      background:linear-gradient(180deg,var(--bg2),var(--bg));
      font-family:'Inter','Noto Sans KR',sans-serif;
      -webkit-font-smoothing:antialiased;
    }
    a{text-decoration:none;color:inherit}
    img{display:block;width:100%;max-width:100%}
    .container{width:min(calc(100% - 32px), var(--container)); margin:0 auto}
    .header{
      position:sticky;
      top:0;
      z-index:20;
      backdrop-filter:blur(14px);
      background:rgba(251,248,244,0.82);
      border-bottom:1px solid var(--line);
    }
    .nav{
      height:82px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:20px;
    }
    .brand{
      display:flex;
      align-items:center;
      gap:14px;
    }
    .brand img{
      height:30px;
      width:auto;
      object-fit:contain;
    }
    .brand small{
      font-size:11px;
      letter-spacing:0.22em;
      text-transform:uppercase;
      color:var(--muted);
      white-space:nowrap;
    }
    .nav-links{
      display:flex;
      gap:22px;
      flex-wrap:wrap;
    }
    .nav-links a{
      font-size:12px;
      text-transform:uppercase;
      letter-spacing:0.1em;
      color:var(--muted);
    }
    .hero{
      padding:26px 0 72px;
    }
    .hero-grid{
      display:grid;
      grid-template-columns:0.9fr 1.1fr;
      gap:22px;
    }
    .hero-copy,.hero-visual{
      min-height:calc(100vh - 120px);
      border-radius:32px;
      overflow:hidden;
      box-shadow:var(--shadow);
    }
    .hero-copy{
      background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.72));
      border:1px solid rgba(255,255,255,0.8);
      padding:40px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
    .eyebrow{
      font-size:11px;
      letter-spacing:0.22em;
      text-transform:uppercase;
      color:var(--muted);
      margin-bottom:18px;
      display:block;
    }
    .hero-title{
      margin:0;
      font-family:'Cormorant Garamond', serif;
      font-size:clamp(3rem, 8vw, 6rem);
      line-height:0.9;
      letter-spacing:-0.04em;
      font-weight:600;
    }
    .hero-desc{
      margin:22px 0 0;
      max-width:520px;
      font-size:15px;
      line-height:1.9;
      color:var(--muted);
    }
    .hero-meta{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:14px;
      padding-top:24px;
      border-top:1px solid var(--line);
      margin-top:30px;
    }
    .hero-meta div{display:grid;gap:6px}
    .hero-meta span{
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:0.14em;
      color:var(--muted);
    }
    .hero-meta strong{
      font-size:14px;
      line-height:1.5;
    }
    .hero-visual{
      position:relative;
      background:#eadfce;
    }
    .slide{
      position:absolute;
      inset:0;
      opacity:0;
      transition:opacity .7s ease;
    }
    .slide.active{opacity:1}
    .slide img{
      height:100%;
      object-fit:cover;
    }
    .hero-overlay{
      position:absolute;
      left:20px;
      right:20px;
      bottom:20px;
      z-index:2;
      display:flex;
      justify-content:space-between;
      align-items:end;
      gap:16px;
      padding:18px;
      border-radius:22px;
      background:rgba(255,255,255,0.72);
      backdrop-filter:blur(12px);
      border:1px solid rgba(255,255,255,0.76);
    }
    .hero-overlay strong{
      display:block;
      font-family:'Cormorant Garamond', serif;
      font-size:30px;
      line-height:0.95;
      font-weight:600;
      margin-bottom:6px;
    }
    .hero-overlay p{
      margin:0;
      font-size:13px;
      line-height:1.7;
      color:var(--muted);
    }
    .dots{
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    }
    .dot{
      width:10px;
      height:10px;
      border-radius:999px;
      background:rgba(0,0,0,0.18);
      border:none;
      padding:0;
    }
    .dot.active{
      width:28px;
      background:#111;
    }
    .section{
      padding:0 0 88px;
    }
    .section-head{
      margin-bottom:24px;
    }
    .section-head h2{
      margin:0 0 10px;
      font-family:'Cormorant Garamond', serif;
      font-size:clamp(2.2rem, 4vw, 4rem);
      line-height:0.95;
      font-weight:600;
      letter-spacing:-0.03em;
    }
    .section-head p{
      margin:0;
      max-width:760px;
      font-size:15px;
      line-height:1.85;
      color:var(--muted);
    }
    .grid-2{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:22px;
    }
    .grid-3{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
    }
    .card{
      background:var(--card);
      border:1px solid rgba(255,255,255,0.8);
      border-radius:var(--radius);
      box-shadow:var(--shadow);
      overflow:hidden;
    }
    .card-body{
      padding:22px;
    }
    .card-body h3{
      margin:0 0 10px;
      font-family:'Cormorant Garamond', serif;
      font-size:2rem;
      line-height:0.95;
      font-weight:600;
      letter-spacing:-0.03em;
    }
    .card-body p{
      margin:0;
      font-size:14px;
      line-height:1.8;
      color:var(--muted);
    }
    .image-box{
      min-height:520px;
      background:#eadfce;
    }
    .image-box img{
      height:100%;
      object-fit:cover;
    }
    .signature-collage{
      display:grid;
      grid-template-columns:1.2fr .8fr;
      gap:14px;
      padding:22px;
    }
    .signature-main{
      min-height:420px;
      border-radius:20px;
      overflow:hidden;
      background:#efe4d7;
    }
    .signature-side{
      display:grid;
      gap:14px;
      grid-template-rows:1fr 1fr;
    }
    .signature-side div{
      min-height:203px;
      border-radius:20px;
      overflow:hidden;
      background:#efe4d7;
    }
    .signature-main img,.signature-side img{
      height:100%;
      object-fit:cover;
    }
    .product-thumb,.lookbook-thumb{
      aspect-ratio:4 / 4.8;
      background:#efe4d7;
      overflow:hidden;
    }
    .product-thumb img,.lookbook-thumb img{
      height:100%;
      object-fit:cover;
    }
    .badge{
      display:inline-flex;
      padding:7px 10px;
      border-radius:999px;
      background:rgba(17,17,17,0.06);
      color:var(--muted);
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:0.12em;
      margin-bottom:10px;
    }
    .meta{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-top:10px;
      color:var(--muted);
      font-size:13px;
    }
    .film-poster{
      min-height:560px;
      background:#eadfce;
    }
    .film-poster img{
      height:100%;
      object-fit:cover;
    }
    .footer{
      padding:0 0 36px;
    }
    .footer-box{
      padding-top:20px;
      border-top:1px solid var(--line);
      display:flex;
      justify-content:space-between;
      gap:16px;
      flex-wrap:wrap;
      color:var(--muted);
      font-size:13px;
    }
    .fallback-note{
      margin-top:12px;
      font-size:12px;
      color:var(--muted);
    }
    @media (max-width: 1100px){
      .hero-grid,.grid-2{grid-template-columns:1fr}
      .grid-3{grid-template-columns:repeat(2,1fr)}
      .hero-copy,.hero-visual{min-height:auto}
    }
    @media (max-width: 860px){
      .nav-links{display:none}
      .hero-meta{grid-template-columns:1fr}
      .grid-3{grid-template-columns:1fr}
      .signature-collage{grid-template-columns:1fr}
      .signature-side{grid-template-columns:1fr 1fr; grid-template-rows:none}
      .hero-overlay{flex-direction:column; align-items:flex-start}
    }
    @media (max-width: 640px){
      .container{width:min(calc(100% - 24px), var(--container))}
      .hero-copy{padding:24px}
      .image-box,.film-poster,.signature-main,.signature-side div{min-height:280px}
    }
  </style>
</head>
<body>
  <header class="header" id="header">
    <div class="container nav">
      <a class="brand" href="#top">
        <img src="${ASSETS.logo}" alt="Soumé logo" data-fallback="${ASSETS.filmPoster}" />
        <small>Clean Beauty House</small>
      </a>

      <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#signature">Signature</a>
        <a href="#products">Products</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#film">Film</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div>
            <span class="eyebrow">Soumé / Image Check Version</span>
            <h1 class="hero-title">
              조용하지만<br />
              확실하게 남는<br />
              럭셔리 뷰티
            </h1>
            <p class="hero-desc">
              지금 버전은 이미지와 경로가 정상적으로 뜨는지 먼저 확인하기 위한 단순 안정판입니다.
              복잡한 기능보다 이미지 표시 확인을 우선합니다.
            </p>
          </div>

          <div class="hero-meta">
            <div>
              <span>Path Rule</span>
              <strong>/static/assets/soume/...</strong>
            </div>
            <div>
              <span>Folder Rule</span>
              <strong>public/assets/soume/...</strong>
            </div>
            <div>
              <span>Goal</span>
              <strong>이미지 표시 정상 여부 체크</strong>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          ${HERO_SLIDES.map((src, i) => `
            <div class="slide${i === 0 ? ' active' : ''}" data-slide="${i}">
              <img src="${src}" alt="Soumé hero slide ${i + 1}" data-fallback="${ASSETS.filmPoster}" />
            </div>
          `).join('')}

          <div class="hero-overlay">
            <div>
              <strong>Image Test Hero</strong>
              <p>히어로 이미지는 4초마다 자동으로 전환됩니다.</p>
            </div>
            <div class="dots">
              ${HERO_SLIDES.map((_, i) => `
                <button class="dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="slide ${i + 1}"></button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <h2>About</h2>
          <p>에디토리얼 메인 이미지를 정상 표시하는지 확인하는 섹션입니다.</p>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="card-body">
              <h3>Editorial Main</h3>
              <p>
                이 카드 옆 이미지가 뜨면 <code>editorial-main.jpg</code> 경로가 정상입니다.
              </p>
              <p class="fallback-note">이미지가 안 뜨면 파일명/확장자/배포 여부를 먼저 확인하세요.</p>
            </div>
          </div>

          <div class="card image-box">
            <img src="${ASSETS.editorialMain}" alt="Editorial main" data-fallback="${ASSETS.heroMain}" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head">
          <h2>Signature</h2>
          <p>시그니처 관련 3개 이미지가 모두 정상 표시되는지 확인하는 영역입니다.</p>
        </div>

        <div class="card">
          <div class="signature-collage">
            <div class="signature-main">
              <img src="${ASSETS.signatureMain}" alt="Signature main" data-fallback="${ASSETS.product01}" />
            </div>
            <div class="signature-side">
              <div>
                <img src="${ASSETS.signatureOpen}" alt="Signature open" data-fallback="${ASSETS.product02}" />
              </div>
              <div>
                <img src="${ASSETS.signatureDetail}" alt="Signature detail" data-fallback="${ASSETS.product03}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <h2>Products</h2>
          <p>product-01, product-02, product-03 이미지 확인용 섹션입니다.</p>
        </div>

        <div class="grid-3">
          <article class="card">
            <div class="product-thumb">
              <img src="${ASSETS.product01}" alt="Product 01" data-fallback="${ASSETS.heroMain}" />
            </div>
            <div class="card-body">
              <span class="badge">Product 01</span>
              <h3>Ocean Breeze</h3>
              <p>product-01.jpg 표시 확인</p>
              <div class="meta"><span>₩48,000</span><span>250ml</span></div>
            </div>
          </article>

          <article class="card">
            <div class="product-thumb">
              <img src="${ASSETS.product02}" alt="Product 02" data-fallback="${ASSETS.editorialMain}" />
            </div>
            <div class="card-body">
              <span class="badge">Product 02</span>
              <h3>Veil Recovery</h3>
              <p>product-02.jpg 표시 확인</p>
              <div class="meta"><span>₩39,000</span><span>120ml</span></div>
            </div>
          </article>

          <article class="card">
            <div class="product-thumb">
              <img src="${ASSETS.product03}" alt="Product 03
          </script>
</body>
</html>
  `)
})

export default app
