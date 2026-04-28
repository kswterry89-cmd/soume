import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

/* =========================================================
   SOUMÉ OPERATING CONFIG
   자주 수정할 곳은 대부분 여기입니다.
   ========================================================= */

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Quiet Luxury in Clean Beauty',
  description:
    'Soumé는 순수한 포뮬러와 절제된 아름다움으로 완성한 클린 뷰티 브랜드입니다.',
  heroEyebrow: 'Soumé / Clean Beauty House',
  heroTitle1: '조용한 럭셔리,',
  heroTitle2: '피부 위에 남는',
  heroTitle3: '본질',
  heroDescription:
    'Soumé는 더 많은 것을 더하지 않습니다. 불필요한 요소는 덜어내고, 피부에 필요한 경험만 남깁니다. 절제된 포뮬러와 세련된 오브제 감각으로 클린 뷰티를 한층 더 우아한 방식으로 다시 정의합니다.',
  aboutCopy:
    '이번 버전은 많은 요소를 한 화면에 나열하는 대신, 시선이 머무는 여백과 톤, 오브제 중심의 구성을 통해 브랜드의 태도가 먼저 보이도록 재정리했습니다. 이미지는 public 폴더에서 운영하고, 링크와 상품 데이터도 상단 설정 영역에서만 쉽게 바꿀 수 있도록 구조화했습니다.',
  philosophyTitle1: 'Less noise,',
  philosophyTitle2: 'more essence',
  philosophyCopy:
    'Soumé의 미감은 복잡하지 않습니다. 강한 자극 대신 조용한 존재감, 과장된 장식 대신 오래 남는 인상, 무거운 설명 대신 균형 잡힌 경험을 지향합니다.',
  newsletterTitle: 'Enter the world of Soumé',
  newsletterCopy:
    '신제품 공개, 브랜드 스토리, 시즌 에디토리얼을 가장 먼저 받아보는 Soumé 하우스 레터.',
  footerCopy: '© 2026 Soumé. All rights reserved.'
}

const ASSETS = {
  logo: '/static/soume-logo-black.png',

  heroMain: '/static/assets/soume/hero-main.jpg',
  editorialMain: '/static/assets/soume/editorial-main.jpg',

  signatureMain: '/static/assets/soume/signature-main.jpg',
  signatureOpen: '/static/assets/soume/signature-open.jpg',
  signatureDetail: '/static/assets/soume/signature-detail.jpg',

  campaign01: '/static/assets/soume/campaign-01.jpg',
  campaign02: '/static/assets/soume/campaign-02.jpg',

  product01: '/static/assets/soume/product-01.jpg',
  product02: '/static/assets/soume/product-02.jpg',
  product03: '/static/assets/soume/product-03.jpg',

  lookbook01: '/static/assets/soume/lookbook-01.jpg',
  lookbook02: '/static/assets/soume/lookbook-02.jpg',
  lookbook03: '/static/assets/soume/lookbook-03.jpg',

  filmPoster: '/static/assets/soume/film-poster.jpg',
  filmVideo: '/static/videos/soume-brand-film.mp4'
}

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'Signature',
    name: 'Ocean Breeze Body Lotion Spray',
    subtitle: '가볍게 분사되는 바디 로션 스프레이, 부드러운 보습과 세련된 잔향',
    price: '₩48,000',
    volume: '250ml',
    description:
      'Soumé의 시그니처 제품입니다. 스프레이 타입의 가벼운 사용감과 오브제 같은 패키지 감각을 동시에 담은 바디 로션으로, 매일의 루틴에 조용한 럭셔리를 더해줍니다.',
    notes: ['Citrus', 'Woody', 'Marine'],
    ingredients: ['Niacinamide', 'Panthenol', 'Squalane'],
    image: ASSETS.product01,
    gallery: [ASSETS.signatureMain, ASSETS.signatureOpen, ASSETS.signatureDetail],
    buyLink: 'https://smartstore.naver.com/your-store/products/0000000001',
    detailLink: 'https://your-brand.com/products/ocean-breeze',
    inquiryLink: 'https://pf.kakao.com/_YOURCHANNEL'
  },
  {
    id: 'veil-recovery',
    badge: 'Core Care',
    name: 'Veil Recovery Cream',
    subtitle: '건조하고 민감한 피부를 위한 저자극 배리어 크림',
    price: '₩52,000',
    volume: '50ml',
    description:
      '수분막을 얇고 균일하게 형성해 피부 컨디션을 정돈해주는 데일리 크림입니다. 밤낮 루틴 모두에 조용하게 스며드는 타입으로 설계했습니다.',
    notes: ['Soft', 'Comfort', 'Barrier'],
    ingredients: ['Ceramide', 'Madecassoside', 'Beta-Glucan'],
    image: ASSETS.product02,
    gallery: [ASSETS.product02, ASSETS.signatureDetail, ASSETS.editorialMain],
    buyLink: 'https://smartstore.naver.com/your-store/products/0000000002',
    detailLink: 'https://your-brand.com/products/veil-recovery',
    inquiryLink: 'https://pf.kakao.com/_YOURCHANNEL'
  },
  {
    id: 'bare-reset',
    badge: 'Daily Cleanse',
    name: 'Bare Reset Cleanser',
    subtitle: '자극 없이 균형을 남기는 데일리 클렌징',
    price: '₩32,000',
    volume: '150ml',
    description:
      '불필요한 잔여감 없이 깨끗하게 마무리되는 데일리 클렌저입니다. 세정 후에도 피부가 당기지 않도록 밸런스를 고려했습니다.',
    notes: ['Fresh', 'Clear', 'Gentle'],
    ingredients: ['Panthenol', 'Glycerin', 'Allantoin'],
    image: ASSETS.product03,
    gallery: [ASSETS.product03, ASSETS.signatureOpen, ASSETS.campaign02],
    buyLink: 'https://smartstore.naver.com/your-store/products/0000000003',
    detailLink: 'https://your-brand.com/products/bare-reset',
    inquiryLink: 'https://pf.kakao.com/_YOURCHANNEL'
  }
]

const LOOKBOOK = [
  {
    category: 'Lookbook 01',
    title: 'Quiet Skin, Quiet Mood',
    image: ASSETS.lookbook01
  },
  {
    category: 'Lookbook 02',
    title: 'Soft Editorial Light',
    image: ASSETS.lookbook02
  },
  {
    category: 'Lookbook 03',
    title: 'Object & Presence',
    image: ASSETS.lookbook03
  }
]

const FILM = {
  eyebrow: 'Brand Film',
  title: 'A moving portrait of Soumé',
  description:
    '브랜드 필름 섹션입니다. MP4 파일만 교체하면 자동으로 반영됩니다. 영상이 준비되지 않았을 때는 포스터 이미지가 먼저 보이고, 영상 로드에 실패하면 자동으로 포스터형 플레이스홀더로 전환됩니다.',
  video: ASSETS.filmVideo,
  poster: ASSETS.filmPoster,
  externalLink: 'https://your-brand.com/brand-film'
}

const escapeForScript = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c')

const renderProductCards = () =>
  PRODUCTS.map(
    (product, index) => `
      <article class="product-card reveal">
        <div class="product-media">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            data-fallback-label="${product.name}"
            data-ratio="4 / 5"
          />
          <span class="product-badge">${product.badge}</span>
        </div>

        <div class="product-body">
          <small>${product.badge}</small>
          <h3>${product.name}</h3>
          <p class="product-subtitle">${product.subtitle}</p>

          <div class="product-meta-row">
            <span>${product.price}</span>
            <span>${product.volume}</span>
          </div>

          <div class="product-actions">
            <button class="btn" type="button" data-open-product="${index}">상세 보기</button>
            <a class="btn btn-light" href="${product.buyLink}" target="_blank" rel="noopener">구매하기</a>
          </div>
        </div>
      </article>
    `
  ).join('')

const renderLookbookCards = () =>
  LOOKBOOK.map(
    (item) => `
      <article class="lookbook-card reveal">
        <div class="lookbook-media">
          <img
            src="${item.image}"
            alt="${item.title}"
            loading="lazy"
            data-fallback-label="${item.title}"
            data-ratio="4 / 5"
          />
        </div>
        <div class="lookbook-caption">
          <small>${item.category}</small>
          <h3>${item.title}</h3>
        </div>
      </article>
    `
  ).join('')

app.get('/', (c) => {
  const productsJson = escapeForScript(PRODUCTS)

  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${SITE.title}</title>
  <meta name="description" content="${SITE.description}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500&display=swap"
    rel="stylesheet"
  />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #f6f2ec;
      --paper: #fcf9f4;
      --paper-2: #f2ece4;
      --white: #ffffff;
      --ink: #111111;
      --muted: #6e6962;
      --line: #ddd4ca;
      --accent: #8f7765;
      --accent-soft: #c8b7a6;
      --overlay: rgba(17,17,17,0.55);
      --serif: 'Cormorant Garamond', serif;
      --sans: 'Inter', 'Noto Sans KR', sans-serif;
      --kr: 'Noto Sans KR', sans-serif;
      --ease: cubic-bezier(0.22, 1, 0.36, 1);
      --max: 1440px;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--paper);
      color: var(--ink);
      font-family: var(--sans);
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      overflow-x: hidden;
    }

    img, video { display: block; width: 100%; height: auto; }
    a { color: inherit; text-decoration: none; }
    button, input { font: inherit; }

    .container {
      width: min(calc(100% - 40px), var(--max));
      margin: 0 auto;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .eyebrow::before {
      content: '';
      width: 28px;
      height: 1px;
      background: var(--accent);
      opacity: 0.8;
    }

    .section-title {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 5vw, 4.9rem);
      line-height: 0.98;
      font-weight: 400;
      letter-spacing: -0.04em;
    }
    .section-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--accent);
    }

    .section-copy {
      font-family: var(--kr);
      font-size: 14px;
      font-weight: 300;
      line-height: 1.95;
      color: var(--muted);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 22px;
      border: 1px solid var(--ink);
      background: var(--ink);
      color: var(--white);
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform 0.35s var(--ease), background 0.35s var(--ease), color 0.35s var(--ease), border-color 0.35s var(--ease);
    }
    .btn:hover { transform: translateY(-2px); }

    .btn-light {
      background: transparent;
      color: var(--ink);
      border-color: var(--line);
    }
    .btn-light:hover {
      background: var(--ink);
      color: var(--white);
      border-color: var(--ink);
    }

    .nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      background: rgba(252,249,244,0.8);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(17,17,17,0.08);
    }
    .nav-inner {
      width: min(calc(100% - 40px), var(--max));
      margin: 0 auto;
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .nav-logo img {
      width: auto;
      height: 18px;
    }
    .nav-menu {
      display: flex;
      gap: 28px;
      list-style: none;
      align-items: center;
    }
    .nav-menu a {
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.72);
      transition: opacity 0.25s ease;
    }
    .nav-menu a:hover { opacity: 0.5; }

    .nav-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .nav-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      padding: 0 18px;
      border: 1px solid var(--ink);
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .nav-toggle {
      display: none;
      width: 42px;
      height: 42px;
      border: 1px solid var(--line);
      background: transparent;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
    }
    .nav-toggle span {
      width: 16px;
      height: 1.5px;
      background: var(--ink);
      display: block;
    }

    .mobile-menu {
      position: fixed;
      inset: 0;
      z-index: 99;
      background: rgba(17,17,17,0.96);
      color: var(--white);
      display: none;
      padding: 100px 24px 32px;
    }
    .mobile-menu.open { display: block; }
    .mobile-menu-inner {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    .mobile-menu a {
      font-family: var(--serif);
      font-size: 2rem;
      font-weight: 300;
      line-height: 1;
    }

    .hero {
      padding-top: 76px;
      min-height: 100svh;
      background: linear-gradient(180deg, #f8f4ef 0%, #f2ece4 100%);
    }
    .hero-grid {
      width: min(calc(100% - 40px), var(--max));
      margin: 0 auto;
      min-height: calc(100svh - 76px);
      display: grid;
      grid-template-columns: 0.96fr 1.04fr;
      gap: 0;
    }
    .hero-copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(48px, 8vw, 96px) clamp(12px, 2vw, 28px) clamp(48px, 8vw, 96px) 0;
    }
    .hero-copy .eyebrow { margin-bottom: 22px; }
    .hero-title {
      font-family: var(--serif);
      font-size: clamp(3.1rem, 7vw, 7.2rem);
      line-height: 0.9;
      font-weight: 400;
      letter-spacing: -0.05em;
      margin-bottom: 24px;
    }
    .hero-title em {
      display: block;
      font-style: italic;
      font-weight: 300;
      color: var(--accent);
    }
    .hero-text {
      max-width: 460px;
      font-family: var(--kr);
      font-size: 14px;
      font-weight: 300;
      line-height: 1.95;
      color: var(--muted);
      margin-bottom: 34px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 42px;
    }
    .hero-meta {
      border-top: 1px solid var(--line);
      padding-top: 22px;
      display: grid;
      grid-template-columns: repeat(3, minmax(120px, 1fr));
      gap: 18px;
      max-width: 560px;
    }
    .hero-meta small {
      display: block;
      margin-bottom: 8px;
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.42);
    }
    .hero-meta span {
      display: block;
      font-size: 13px;
      line-height: 1.65;
      color: var(--ink);
    }

    .hero-visual {
      position: relative;
      min-height: 720px;
      background: #eadfd3;
      overflow: hidden;
    }
    .hero-visual > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-badge {
      position: absolute;
      top: 28px;
      right: 28px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .hero-badge span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: rgba(255,255,255,0.65);
      border: 1px solid rgba(17,17,17,0.08);
      backdrop-filter: blur(10px);
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.72);
    }
    .hero-badge span::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }
    .hero-card {
      position: absolute;
      left: 32px;
      bottom: 32px;
      width: min(320px, calc(100% - 64px));
      padding: 22px 20px;
      background: rgba(255,255,255,0.84);
      border: 1px solid rgba(17,17,17,0.08);
      backdrop-filter: blur(12px);
      z-index: 2;
    }
    .hero-card small {
      display: block;
      margin-bottom: 10px;
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.45);
    }
    .hero-card strong {
      display: block;
      font-family: var(--serif);
      font-size: 30px;
      font-weight: 400;
      margin-bottom: 8px;
      line-height: 1;
    }
    .hero-card p {
      font-size: 13px;
      line-height: 1.8;
      color: var(--muted);
    }

    .section { padding: 120px 0; }

    .manifesto-grid,
    .signature-grid,
    .film-grid,
    .newsletter-grid {
      display: grid;
      gap: 36px;
      align-items: start;
    }
    .manifesto-grid {
      grid-template-columns: 1.1fr 0.9fr;
    }
    .manifesto-quote {
      font-family: var(--serif);
      font-size: clamp(2.1rem, 5vw, 4.8rem);
      line-height: 1.02;
      letter-spacing: -0.03em;
    }
    .manifesto-quote em {
      font-style: italic;
      font-weight: 300;
      color: var(--accent);
    }

    .signature {
      background: var(--paper);
      padding-top: 0;
    }
    .signature-inner {
      border-top: 1px solid var(--line);
      padding-top: 28px;
    }
    .signature-grid {
      grid-template-columns: 0.72fr 1.28fr;
    }
    .signature-copy {
      position: sticky;
      top: 108px;
    }
    .signature-copy .section-title {
      margin: 16px 0 18px;
    }
    .signature-notes {
      display: grid;
      gap: 14px;
      margin: 26px 0 30px;
    }
    .signature-notes div {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--line);
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .signature-notes div span:first-child {
      color: rgba(17,17,17,0.42);
    }

    .signature-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .asset-card {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(17,17,17,0.05);
      background: #efe7dd;
    }
    .asset-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .asset-card.tall { aspect-ratio: 4 / 5.25; }
    .asset-card.square { aspect-ratio: 1 / 1; }
    .asset-card.wide { grid-column: 1 / -1; aspect-ratio: 16 / 8.5; }
    .asset-caption {
      position: absolute;
      left: 0; right: 0; bottom: 0;
      padding: 16px 18px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(17,17,17,0.72) 100%);
      color: var(--white);
    }
    .asset-caption small {
      display: block;
      margin-bottom: 6px;
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.72;
    }
    .asset-caption strong {
      font-family: var(--serif);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.1;
    }

    .products {
      background: var(--white);
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .products-head,
    .lookbook-head {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      margin-bottom: 34px;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .product-card {
      background: #f8f3ed;
      border: 1px solid rgba(17,17,17,0.06);
      display: flex;
      flex-direction: column;
    }
    .product-media {
      position: relative;
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background: #ede3d7;
    }
    .product-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .product-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      padding: 7px 10px;
      background: rgba(255,255,255,0.78);
      border: 1px solid rgba(17,17,17,0.08);
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .product-body {
      padding: 22px 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }
    .product-body small {
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.42);
    }
    .product-body h3 {
      font-family: var(--serif);
      font-size: 32px;
      font-weight: 400;
      line-height: 1;
    }
    .product-subtitle {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.85;
      color: var(--muted);
      font-weight: 300;
    }
    .product-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding-top: 6px;
      font-size: 13px;
    }
    .product-actions {
      display: flex;
      gap: 10px;
      margin-top: auto;
      padding-top: 8px;
      flex-wrap: wrap;
    }

    .lookbook {
      background: linear-gradient(180deg, #faf7f2 0%, #ffffff 100%);
    }
    .lookbook-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .lookbook-card {
      border: 1px solid rgba(17,17,17,0.06);
      background: #f6f0e9;
    }
    .lookbook-media {
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background: #eadfd2;
    }
    .lookbook-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .lookbook-caption {
      padding: 18px 18px 20px;
      border-top: 1px solid rgba(17,17,17,0.06);
    }
    .lookbook-caption small {
      display: block;
      margin-bottom: 8px;
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.42);
    }
    .lookbook-caption h3 {
      font-family: var(--serif);
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
    }

    .philosophy-grid {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 22px;
      align-items: stretch;
    }
    .philosophy-visual {
      min-height: 760px;
      overflow: hidden;
      background: #eadfd2;
      border: 1px solid rgba(17,17,17,0.05);
    }
    .philosophy-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .philosophy-copy {
      background: var(--white);
      border: 1px solid var(--line);
      padding: clamp(28px, 5vw, 56px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 34px;
    }
    .philosophy-copy .section-title {
      margin: 16px 0 18px;
    }
    .philosophy-points {
      display: grid;
      gap: 14px;
    }
    .philosophy-points li {
      list-style: none;
      border-top: 1px solid var(--line);
      padding-top: 14px;
      display: grid;
      grid-template-columns: 86px 1fr;
      gap: 12px;
      align-items: start;
    }
    .philosophy-points small {
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.42);
      padding-top: 3px;
    }
    .philosophy-points span {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.85;
      color: var(--ink);
      font-weight: 300;
    }

    .film {
      background: var(--paper);
    }
    .film-grid {
      grid-template-columns: 1.05fr 0.95fr;
      align-items: stretch;
    }
    .film-player {
      position: relative;
      background: #111;
      border: 1px solid rgba(17,17,17,0.08);
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }
    .film-player video,
    .film-player img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .film-copy {
      border: 1px solid var(--line);
      background: var(--white);
      padding: clamp(28px, 5vw, 56px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 28px;
    }
    .film-copy .section-title {
      margin: 16px 0 18px;
    }
    .film-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .newsletter {
      background: #111111;
      color: var(--white);
    }
    .newsletter-grid {
      grid-template-columns: 1fr auto;
      align-items: end;
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-top: 26px;
    }
    .newsletter .eyebrow {
      color: #cab8a7;
    }
    .newsletter .eyebrow::before {
      background: #cab8a7;
    }
    .newsletter h2 {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 4.5vw, 4.7rem);
      line-height: 0.98;
      font-weight: 400;
      letter-spacing: -0.03em;
      margin: 16px 0 14px;
    }
    .newsletter p {
      max-width: 540px;
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.9;
      font-weight: 300;
      color: rgba(255,255,255,0.62);
    }
    .newsletter-form {
      display: flex;
      gap: 0;
      min-width: min(440px, 100%);
    }
    .newsletter-form input {
      flex: 1;
      height: 52px;
      padding: 0 18px;
      border: 1px solid rgba(255,255,255,0.18);
      border-right: none;
      background: rgba(255,255,255,0.04);
      color: var(--white);
      outline: none;
    }
    .newsletter-form input::placeholder {
      color: rgba(255,255,255,0.45);
    }
    .newsletter-form button {
      width: 150px;
      border: 1px solid var(--white);
      background: var(--white);
      color: var(--ink);
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      cursor: pointer;
    }

    .footer {
      background: #111111;
      color: rgba(255,255,255,0.55);
      padding: 0 0 40px;
    }
    .footer-inner {
      width: min(calc(100% - 40px), var(--max));
      margin: 0 auto;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }
    .footer-logo {
      width: auto;
      height: 16px;
      filter: invert(1);
      opacity: 0.95;
    }
    .footer-links {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .media-fallback {
      width: 100%;
      height: 100%;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: linear-gradient(135deg, #efe5da 0%, #e6dacd 100%);
      color: rgba(17,17,17,0.72);
      text-align: center;
      padding: 24px;
    }
    .media-fallback strong {
      font-family: var(--serif);
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
    }
    .media-fallback span {
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.45);
    }

    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
    }
    .reveal.in-view {
      opacity: 1;
      transform: translateY(0);
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 200;
      display: none;
    }
    .modal.open {
      display: block;
    }
    .modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(17,17,17,0.52);
      backdrop-filter: blur(6px);
    }
    .modal-panel {
      position: relative;
      width: min(1120px, calc(100% - 32px));
      max-height: calc(100vh - 32px);
      overflow: auto;
      margin: 16px auto;
      background: var(--white);
      border: 1px solid rgba(17,17,17,0.08);
      box-shadow: 0 30px 80px rgba(0,0,0,0.18);
      z-index: 1;
    }
    .modal-close {
      position: sticky;
      top: 0;
      z-index: 2;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border: none;
      background: rgba(255,255,255,0.9);
      border-left: 1px solid rgba(17,17,17,0.06);
      border-bottom: 1px solid rgba(17,17,17,0.06);
      cursor: pointer;
      font-size: 18px;
    }
    .modal-body {
      padding: 0 0 28px;
    }
    .modal-grid {
      display: grid;
      grid-template-columns: 1.02fr 0.98fr;
      gap: 28px;
      padding: 0 28px 0 28px;
    }
    .modal-gallery {
      display: grid;
      gap: 12px;
      padding-bottom: 28px;
    }
    .modal-main-media {
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background: #eee3d7;
      border: 1px solid rgba(17,17,17,0.06);
    }
    .modal-main-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .modal-thumbs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .modal-thumb {
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border: 1px solid rgba(17,17,17,0.08);
      background: #f2e7db;
      cursor: pointer;
    }
    .modal-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .modal-info {
      padding: 4px 0 28px;
    }
    .modal-badge {
      display: inline-flex;
      margin-bottom: 14px;
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.45);
    }
    .modal-title {
      font-family: var(--serif);
      font-size: clamp(2rem, 4vw, 3.6rem);
      font-weight: 400;
      line-height: 0.96;
      margin-bottom: 12px;
    }
    .modal-subtitle {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.9;
      color: var(--muted);
      font-weight: 300;
      margin-bottom: 20px;
    }
    .modal-meta {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      padding: 18px 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      margin-bottom: 20px;
      font-size: 13px;
    }
    .modal-meta strong {
      font-weight: 500;
    }
    .modal-text {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.95;
      color: var(--muted);
      font-weight: 300;
      margin-bottom: 20px;
    }
    .modal-block {
      border-top: 1px solid var(--line);
      padding-top: 16px;
      margin-top: 16px;
    }
    .modal-block h4 {
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.45);
      margin-bottom: 12px;
      font-weight: 500;
    }
    .modal-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .modal-tags span {
      padding: 8px 10px;
      border: 1px solid var(--line);
      font-size: 12px;
      background: #faf6f0;
    }
    .modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
    }

    @media (max-width: 1180px) {
      .hero-grid,
      .manifesto-grid,
      .signature-grid,
      .products-head,
      .lookbook-head,
      .philosophy-grid,
      .film-grid,
      .newsletter-grid,
      .modal-grid {
        grid-template-columns: 1fr;
      }
      .signature-copy {
        position: static;
      }
    }

    @media (max-width: 860px) {
      .nav-menu,
      .nav-cta {
        display: none;
      }
      .nav-toggle {
        display: inline-flex;
      }
      .hero-grid {
        min-height: auto;
      }
      .hero-copy {
        padding: 46px 0 34px;
      }
      .hero-visual {
        min-height: 72vh;
      }
      .hero-meta {
        grid-template-columns: 1fr;
      }
      .hero-badge {
        top: 18px;
        right: 18px;
      }
      .signature-gallery,
      .products-grid,
      .lookbook-grid {
        grid-template-columns: 1fr;
      }
      .asset-card.wide {
        grid-column: auto;
        aspect-ratio: 4 / 5.25;
      }
      .philosophy-points li {
        grid-template-columns: 1fr;
        gap: 6px;
      }
      .newsletter-form {
        flex-direction: column;
      }
      .newsletter-form input {
        border-right: 1px solid rgba(255,255,255,0.18);
        border-bottom: none;
      }
      .newsletter-form button {
        width: 100%;
        height: 52px;
      }
      .modal-thumbs {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 560px) {
      .container,
      .nav-inner,
      .hero-grid,
      .footer-inner {
        width: min(calc(100% - 24px), var(--max));
      }
      .hero-card {
        left: 18px;
        right: 18px;
        bottom: 18px;
        width: auto;
      }
      .hero-title,
      .section-title,
      .newsletter h2,
      .modal-title {
        line-height: 1.02;
      }
      .product-body h3,
      .lookbook-caption h3 {
        font-size: 26px;
      }
      .modal-grid {
        padding: 0 16px 0 16px;
      }
    }
  </style>
</head>
<body>
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="${SITE.brand} home">
        <img src="${ASSETS.logo}" alt="${SITE.brand}" data-fallback-label="${SITE.brand}" />
      </a>

      <ul class="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#signature">Signature</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#lookbook">Lookbook</a></li>
        <li><a href="#film">Film</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <a class="nav-cta" href="#products">Shop Signature</a>
        <button class="nav-toggle" id="menuToggle" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-inner">
      <a href="#about">About</a>
      <a href="#signature">Signature</a>
      <a href="#products">Products</a>
      <a href="#lookbook">Lookbook</a>
      <a href="#film">Film</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <main>
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">${SITE.heroEyebrow}</span>

          <h1 class="hero-title">
            ${SITE.heroTitle1}<br />
            <em>${SITE.heroTitle2}<br />${SITE.heroTitle3}</em>
          </h1>

          <p class="hero-text">${SITE.heroDescription}</p>

          <div class="hero-actions">
            <a href="#signature" class="btn">Explore Ocean Breeze</a>
            <a href="#lookbook" class="btn btn-light">View Lookbook</a>
          </div>

          <div class="hero-meta">
            <div>
              <small>Formula</small>
              <span>불필요한 자극을 덜어낸 미니멀 클린 포뮬러</span>
            </div>
            <div>
              <small>Design</small>
              <span>오브제처럼 남는 실루엣과 절제된 타이포그래피</span>
            </div>
            <div>
              <small>Experience</small>
              <span>가볍지만 오래 남는, 조용하고 우아한 루틴</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal">
          <img
            src="${ASSETS.heroMain}"
            alt="${SITE.brand} main hero"
            data-fallback-label="Hero Main"
            data-ratio="4 / 5"
          />

          <div class="hero-badge">
            <span>Quiet Luxury</span>
            <span>Clean Formula</span>
            <span>Modern Editorial</span>
          </div>

          <div class="hero-card">
            <small>Featured Signature</small>
            <strong>Ocean Breeze</strong>
            <p>
              바디 로션 스프레이의 가벼운 사용감과
              고급스러운 오브제 감각을 함께 담은 ${SITE.brand}의 시그니처 컬렉션.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container manifesto-grid">
        <div class="reveal">
          <span class="eyebrow">Brand Manifesto</span>
          <h2 class="manifesto-quote">
            클린함은 더 단순해야 하고,<br />
            럭셔리는 더 <em>조용해야 한다</em>.
          </h2>
        </div>

        <div class="reveal">
          <p class="section-copy">${SITE.aboutCopy}</p>
        </div>
      </div>
    </section>

    <section class="section signature" id="signature">
      <div class="container signature-inner">
        <div class="signature-grid">
          <div class="signature-copy reveal">
            <span class="eyebrow">Signature Product</span>
            <h2 class="section-title">Ocean Breeze</h2>
            <p class="section-copy">
              제품을 단순한 판매 이미지가 아니라 브랜드를 대표하는 오브제로 보이게 하는 데 집중했습니다.
              실루엣, 캡, 노즐, 사용 순간까지 나누어 보여줌으로써 제품의 질감과 태도를 동시에 전달합니다.
            </p>

            <div class="signature-notes">
              <div><span>Character</span><span>Citrus · Woody · Marine</span></div>
              <div><span>Texture</span><span>Light Lotion Spray</span></div>
              <div><span>Finish</span><span>Clean · Elegant · Airy</span></div>
            </div>

            <a href="#products" class="btn btn-light">Shop Signature</a>
          </div>

          <div class="signature-gallery">
            <figure class="asset-card tall reveal">
              <img
                src="${ASSETS.signatureMain}"
                alt="Soumé signature main"
                loading="lazy"
                data-fallback-label="Signature Main"
                data-ratio="4 / 5"
              />
              <figcaption class="asset-caption">
                <small>Object</small>
                <strong>Quiet silhouette</strong>
              </figcaption>
            </figure>

            <figure class="asset-card square reveal">
              <img
                src="${ASSETS.signatureDetail}"
                alt="Soumé signature detail"
                loading="lazy"
                data-fallback-label="Signature Detail"
                data-ratio="1 / 1"
              />
              <figcaption class="asset-caption">
                <small>Detail</small>
                <strong>Crafted finish</strong>
              </figcaption>
            </figure>

            <figure class="asset-card square reveal">
              <img
                src="${ASSETS.signatureOpen}"
                alt="Soumé signature open"
                loading="lazy"
                data-fallback-label="Signature Open"
                data-ratio="1 / 1"
              />
              <figcaption class="asset-caption">
                <small>Function</small>
                <strong>Precise spray head</strong>
              </figcaption>
            </figure>

            <figure class="asset-card wide reveal">
              <img
                src="${ASSETS.editorialMain}"
                alt="Soumé editorial"
                loading="lazy"
                data-fallback-label="Editorial Main"
                data-ratio="16 / 9"
              />
              <figcaption class="asset-caption">
                <small>Editorial</small>
                <strong>Beauty reduced to its purest form</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section products" id="products">
      <div class="container">
        <div class="products-head">
          <div class="reveal">
            <span class="eyebrow">Product Selection</span>
            <h2 class="section-title">The Soumé wardrobe</h2>
          </div>

          <div class="reveal">
            <p class="section-copy">
              상품 카드, 상세 모달, 구매 링크는 모두 PRODUCTS 데이터 기반으로 렌더링됩니다.
              상품명, 가격, 이미지, 상세 설명, 구매 링크는 상단 PRODUCTS 배열만 수정하면 전체 페이지에 자동 반영됩니다.
            </p>
          </div>
        </div>

        <div class="products-grid">
          ${renderProductCards()}
        </div>
      </div>
    </section>

    <section class="section lookbook" id="lookbook">
      <div class="container">
        <div class="lookbook-head">
          <div class="reveal">
            <span class="eyebrow">Lookbook</span>
            <h2 class="section-title">A quiet editorial archive</h2>
          </div>

          <div class="reveal">
            <p class="section-copy">
              룩북 섹션은 브랜드 캠페인, 인물 화보, 무드컷을 시즌별로 교체하면서 운영하기 가장 좋은 구조입니다.
              이미지 파일만 같은 이름으로 바꾸면 코드 수정 없이 새 비주얼을 반영할 수 있습니다.
            </p>
          </div>
        </div>

        <div class="lookbook-grid">
          ${renderLookbookCards()}
        </div>
      </div>
    </section>

    <section class="section" id="philosophy">
      <div class="container philosophy-grid">
        <div class="philosophy-visual reveal">
          <img
            src="${ASSETS.editorialMain}"
            alt="Soumé philosophy visual"
            loading="lazy"
            data-fallback-label="Philosophy Visual"
            data-ratio="4 / 5"
          />
        </div>

        <div class="philosophy-copy reveal">
          <div>
            <span class="eyebrow">House Philosophy</span>
            <h2 class="section-title">
              ${SITE.philosophyTitle1}<br />
              <em>${SITE.philosophyTitle2}</em>
            </h2>
            <p class="section-copy">${SITE.philosophyCopy}</p>
          </div>

          <ul class="philosophy-points">
            <li>
              <small>01 / Clean</small>
              <span>피부에 불필요한 요소는 덜고, 필요한 감각과 효능만 또렷하게 남깁니다.</span>
            </li>
            <li>
              <small>02 / Elegant</small>
              <span>타이포, 여백, 컬러를 통해 제품 하나만으로도 품격이 느껴지도록 설계합니다.</span>
            </li>
            <li>
              <small>03 / Essential</small>
              <span>많이 보여주는 대신 정확하게 보여주는 방식으로 브랜드의 본질을 전달합니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section film" id="film">
      <div class="container film-grid">
        <div class="film-player reveal" id="filmPlayer">
          <video
            id="brandFilm"
            controls
            playsinline
            preload="metadata"
            poster="${FILM.poster}"
            data-poster="${FILM.poster}"
            data-fallback-label="Brand Film"
          >
            <source src="${FILM.video}" type="video/mp4" />
          </video>
        </div>

        <div class="film-copy reveal">
          <div>
            <span class="eyebrow">${FILM.eyebrow}</span>
            <h2 class="section-title">${FILM.title}</h2>
            <p class="section-copy">${FILM.description}</p>
          </div>

          <div class="film-actions">
            <a class="btn" href="${FILM.externalLink}" target="_blank" rel="noopener">Watch Full Film</a>
            <a class="btn btn-light" href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section newsletter" id="contact">
      <div class="container newsletter-grid">
        <div class="reveal">
          <span class="eyebrow">Private Letter</span>
          <h2>${SITE.newsletterTitle}</h2>
          <p>${SITE.newsletterCopy}</p>
        </div>

        <form class="newsletter-form reveal" onsubmit="return subscribe(event)">
          <input id="emailInput" type="email" placeholder="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <img src="${ASSETS.logo}" alt="${SITE.brand}" class="footer-logo" data-fallback-label="${SITE.brand}" />
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#signature">Signature</a>
        <a href="#products">Products</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#film">Film</a>
      </div>
      <div style="font-size:11px; letter-spacing:0.05em;">${SITE.footerCopy}</div>
    </div>
  </footer>

  <div class="modal" id="productModal" aria-hidden="true">
    <div class="modal-backdrop" data-close-modal></div>

    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" type="button" data-close-modal aria-label="Close">✕</button>

      <div class="modal-body">
        <div class="modal-grid">
          <div class="modal-gallery">
            <div class="modal-main-media" id="modalMainMedia"></div>
            <div class="modal-thumbs" id="modalThumbs"></div>
          </div>

          <div class="modal-info">
            <span class="modal-badge" id="modalBadge"></span>
            <h2 class="modal-title" id="modalTitle"></h2>
            <p class="modal-subtitle" id="modalSubtitle"></p>

            <div class="modal-meta">
              <div><strong>Price</strong> <span id="modalPrice"></span></div>
              <div><strong>Volume</strong> <span id="modalVolume"></span></div>
            </div>

            <p class="modal-text" id="modalDescription"></p>

            <div class="modal-block">
              <h4>Notes</h4>
              <div class="modal-tags" id="modalNotes"></div>
            </div>

            <div class="modal-block">
              <h4>Ingredients</h4>
              <div class="modal-tags" id="modalIngredients"></div>
            </div>

            <div class="modal-actions">
              <a class="btn" id="modalBuyLink" href="#" target="_blank" rel="noopener">구매하기</a>
              <a class="btn btn-light" id="modalDetailLink" href="#" target="_blank" rel="noopener">상세페이지</a>
              <a class="btn btn-light" id="modalInquiryLink" href="#" target="_blank" rel="noopener">문의하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const PRODUCT_DATA = ${productsJson};

    function subscribe(e) {
      e.preventDefault();
      var input = document.getElementById('emailInput');
      var value = input.value.trim();

      if (!value || value.indexOf('@') === -1) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return false;
      }

      alert('구독이 완료되었습니다. Soumé의 소식을 가장 먼저 전해드릴게요.');
      input.value = '';
      return false;
    }

    function createFallback(label, ratio) {
      var wrapper = document.createElement('div');
      wrapper.className = 'media-fallback';
      if (ratio) wrapper.style.aspectRatio = ratio;
      wrapper.innerHTML =
        '<strong>' + label + '</strong>' +
        '<span>Check /public file path and filename</span>';
      return wrapper;
    }

    function applyImageFallback(img) {
      if (!img) return;
      var done = false;

      function replace() {
        if (done) return;
        done = true;
        var label = img.getAttribute('data-fallback-label') || 'Soumé Asset';
        var ratio = img.getAttribute('data-ratio') || '';
        var parent = img.parentElement;
        if (!parent) return;
        var fallback = createFallback(label, ratio);
        parent.innerHTML = '';
        parent.appendChild(fallback);
      }

      img.addEventListener('error', replace);

      if (img.complete && !img.naturalWidth) replace();
    }

    function setupMediaFallbacks() {
      document.querySelectorAll('img[data-fallback-label]').forEach(function(img) {
        applyImageFallback(img);
      });
    }

    function setupFilmFallback() {
      var video = document.getElementById('brandFilm');
      var player = document.getElementById('filmPlayer');
      if (!video || !player) return;

      function replaceFilm() {
        var poster = video.getAttribute('data-poster');
        var label = video.getAttribute('data-fallback-label') || 'Brand Film';
        player.innerHTML = '';

        if (poster) {
          var img = document.createElement('img');
          img.src = poster;
          img.alt = label;
          img.setAttribute('data-fallback-label', label);
          img.setAttribute('data-ratio', '16 / 9');
          player.appendChild(img);
          applyImageFallback(img);
        } else {
          player.appendChild(createFallback(label, '16 / 9'));
        }
      }

      video.addEventListener('error', replaceFilm);

      setTimeout(function() {
        if (video.networkState === 3 || (video.readyState === 0 && video.currentSrc === '')) {
          replaceFilm();
        }
      }, 1200);
    }

    function setupReveal() {
      var revealEls = document.querySelectorAll('.reveal');
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      }, { threshold: 0.12 });

      revealEls.forEach(function(el) {
        io.observe(el);
      });
    }

    function setupMobileMenu() {
      var menuToggle = document.getElementById('menuToggle');
      var mobileMenu = document.getElementById('mobileMenu');
      if (!menuToggle || !mobileMenu) return;

      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });

      mobileMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    function setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
          var target = document.querySelector(a.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    function renderMainModalImage(src, alt) {
      return '<img src="' + src + '" alt="' + alt + '" data-fallback-label="' + alt + '" data-ratio="4 / 5" />';
    }

    function openProductModal(index) {
      var product = PRODUCT_DATA[index];
      if (!product) return;

      var modal = document.getElementById('productModal');
      var mainMedia = document.getElementById('modalMainMedia');
      var thumbs = document.getElementById('modalThumbs');

      document.getElementById('modalBadge').textContent = product.badge;
      document.getElementById('modalTitle').textContent = product.name;
      document.getElementById('modalSubtitle').textContent = product.subtitle;
      document.getElementById('modalPrice').textContent = product.price;
      document.getElementById('modalVolume').textContent = product.volume;
      document.getElementById('modalDescription').textContent = product.description;

      document.getElementById('modalBuyLink').setAttribute('
