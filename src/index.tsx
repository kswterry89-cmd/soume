import { Hono } from 'hono'

const app = new Hono()

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Quiet Luxury Body Ritual',
  description:
    'Soumé는 감도 높은 비주얼과 간결한 구매 동선을 결합한 모던 럭셔리 바디 리추얼 브랜드입니다.',
  heroEyebrow: 'QUIET LUXURY BODY RITUAL',
  heroTitle1: '두 가지 시그니처로',
  heroTitle2: '하루의 무드를',
  heroTitle3: '더 선명하게',
  heroDescription:
    'Ocean Breeze는 맑고 산뜻하게, Morning Haze는 부드럽고 차분하게. 처음 방문해도 바로 비교하고, 바로 구매할 수 있도록 가장 직관적인 흐름으로 정리했습니다.',
}

const LINKS = {
  smartstore: 'https://smartstore.naver.com/neography/',
}

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

  lookbook01: '/assets/soume/lookbook-01.jpg',
  lookbook02: '/assets/soume/lookbook-02.jpg',
  lookbook03: '/assets/soume/lookbook-03.jpg',

  filmPoster: '/assets/soume/film-poster.jpg',
}

const HERO_SLIDES = [
  {
    image: ASSETS.heroMain,
    alt: 'Soumé hero main visual',
    label: 'Quiet Luxury',
    title: '첫인상부터\n구매까지 선명하게',
    text: '브랜드 무드는 유지하고, 구매 동선은 더 간결하게 설계한 메인 슬라이드.',
  },
  {
    image: ASSETS.campaign01,
    alt: 'Soumé campaign visual 01',
    label: 'Ocean Breeze',
    title: '맑고 산뜻한\n시그니처 무드',
    text: '처음 방문한 고객도 가장 빠르게 이해할 수 있는 대표 인상에 집중합니다.',
  },
  {
    image: ASSETS.campaign02,
    alt: 'Soumé campaign visual 02',
    label: 'Morning Haze',
    title: '부드럽고 차분한\n데일리 리추얼',
    text: '과하지 않지만 오래 남는 무드로 브랜드 신뢰를 만들어주는 장면.',
  },
  {
    image: ASSETS.lookbook01,
    alt: 'Soumé lookbook visual',
    label: 'Lookbook',
    title: '감도 높은 비주얼과\n직관적인 전환',
    text: '모바일에서도 이미지가 먼저 보이고, CTA는 자연스럽게 이어지도록 정리했습니다.',
  },
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'BEST SELLER',
    name: 'Ocean Breeze',
    subtitle: '맑고 산뜻한 인상을 남기는 시그니처 리추얼',
    price: '₩48,000',
    volume: '250ml',
    image: ASSETS.product01,
    description:
      '가볍고 깨끗한 분위기를 선호하는 고객에게 가장 먼저 추천하기 좋은 시그니처.',
    features: ['Fresh Mood', 'Clean Finish', 'Daily Use'],
    notes: [
      '처음 시작하기 부담 없는 인상',
      '홈페이지 첫 구매 전환용 대표 제품',
      '선명하고 깨끗한 무드 표현에 적합',
    ],
    buyLink: LINKS.smartstore,
  },
  {
    id: 'morning-haze',
    badge: 'SOFT SIGNATURE',
    name: 'Morning Haze',
    subtitle: '부드럽고 차분한 분위기를 완성하는 데일리 리추얼',
    price: '₩52,000',
    volume: '250ml',
    image: ASSETS.product02,
    description:
      '조용하고 고급스러운 무드를 선호하는 고객에게 어울리는 소프트 시그니처.',
    features: ['Soft Mood', 'Calm Finish', 'Gift Ready'],
    notes: [
      '데일리 루틴에 녹아드는 부드러운 인상',
      '선물용 추천에도 잘 어울리는 톤',
      '브랜드 무드를 깊게 느끼게 하는 제품',
    ],
    buyLink: LINKS.smartstore,
  },
]

const REVIEWS = [
  {
    title: '첫 구매가 어렵지 않았어요',
    body: '제품이 많지 않아서 바로 비교가 됐고, Ocean Breeze부터 시작하기 좋았어요.',
    author: '고객 후기',
  },
  {
    title: 'Morning Haze가 생각보다 더 고급스러워요',
    body: '강하지 않고 잔잔하게 남는 무드라서 데일리로 쓰기 편하고 선물용으로도 좋아 보여요.',
    author: '고객 후기',
  },
  {
    title: '브랜드 분위기와 제품 인상이 자연스럽게 이어져요',
    body: '홈페이지에서 느낀 무드가 제품 이미지와 잘 연결돼서 구매할 때 신뢰감이 들었어요.',
    author: '고객 후기',
  },
]

const FAQS = [
  {
    q: '처음 구매할 때 어떤 제품부터 시작하면 좋나요?',
    a: '맑고 산뜻한 인상을 원하면 Ocean Breeze부터, 보다 부드럽고 차분한 무드를 원하면 Morning Haze부터 시작하는 구성을 추천합니다.',
  },
  {
    q: '두 제품의 분위기는 어떻게 다른가요?',
    a: 'Ocean Breeze는 더 가볍고 깨끗한 방향, Morning Haze는 더 부드럽고 잔잔한 방향으로 이해하면 선택이 쉬워집니다.',
  },
  {
    q: '선물용으로도 잘 어울리나요?',
    a: '두 제품 모두 과하지 않은 무드와 정돈된 이미지 덕분에 셀프기프트와 선물 수요에 모두 잘 어울립니다.',
  },
  {
    q: '구매는 어디서 할 수 있나요?',
    a: '현재 메인 구매 동선은 스마트스토어로 연결되어 있어 홈페이지에서 확인한 뒤 바로 이동해 구매할 수 있습니다.',
  },
]

const heroSlidesHtml = HERO_SLIDES.map(
  (slide, index) => `
    <div class="hero-slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}">
      <img src="${slide.image}" alt="${slide.alt}" />
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-copy">
        <small>${slide.label}</small>
        <h2>${slide.title.replace(/\n/g, '<br />')}</h2>
        <p>${slide.text}</p>
      </div>
    </div>
  `,
).join('')

const heroDotsHtml = HERO_SLIDES.map(
  (_, index) => `
    <button class="hero-dot ${index === 0 ? 'is-active' : ''}" data-dot="${index}" aria-label="슬라이드 ${index + 1}"></button>
  `,
).join('')

const productCards = PRODUCTS.map(
  (product) => `
    <article class="product-card" id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <span class="product-badge">${product.badge}</span>
      </div>

      <div class="product-body">
        <div class="product-meta">
          <span>${product.volume}</span>
          <span>${product.price}</span>
        </div>

        <h3>${product.name}</h3>
        <p class="product-subtitle">${product.subtitle}</p>
        <p class="product-description">${product.description}</p>

        <div class="feature-tags">
          ${product.features.map((feature) => `<span>${feature}</span>`).join('')}
        </div>

        <ul class="product-notes">
          ${product.notes.map((note) => `<li>${note}</li>`).join('')}
        </ul>

        <div class="product-actions">
          <a class="btn btn-gold" href="${product.buyLink}" target="_blank" rel="noreferrer">스마트스토어 구매</a>
          <a class="btn btn-line" href="#purchase">구매 안내 보기</a>
        </div>
      </div>
    </article>
  `,
).join('')

const reviewCards = REVIEWS.map(
  (review) => `
    <article class="review-card">
      <div class="review-stars">★★★★★</div>
      <h3>${review.title}</h3>
      <p>${review.body}</p>
      <span>${review.author}</span>
    </article>
  `,
).join('')

const faqItems = FAQS.map(
  (faq, index) => `
    <details class="faq-item" ${index === 0 ? 'open' : ''}>
      <summary>${faq.q}</summary>
      <p>${faq.a}</p>
    </details>
  `,
).join('')

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${SITE.title}</title>
  <meta name="description" content="${SITE.description}" />
  <meta property="og:title" content="${SITE.title}" />
  <meta property="og:description" content="${SITE.description}" />
  <meta property="og:image" content="${ASSETS.heroMain}" />
  <meta name="theme-color" content="#f5f1ea" />
  <style>
    :root {
      --bg: #f6f1ea;
      --bg-soft: #fbf8f4;
      --surface: rgba(255,255,255,0.78);
      --surface-strong: rgba(255,255,255,0.92);
      --text: #191714;
      --muted: #6b6258;
      --line: rgba(25, 23, 20, 0.09);
      --gold: #a7814b;
      --gold-dark: #8e6b3c;
      --green: #1f8f57;
      --shadow: 0 20px 60px rgba(30, 24, 18, 0.08);
      --radius-xl: 30px;
      --radius-lg: 22px;
      --radius-md: 16px;
      --radius-sm: 12px;
      --container: 1180px;
      --header-h: 76px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(255,255,255,0.95), rgba(255,255,255,0) 28%),
        linear-gradient(180deg, #f8f3ed 0%, #f5f1ea 38%, #f3eee7 100%);
      line-height: 1.55;
      word-break: keep-all;
    }

    img { display: block; width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    .container {
      width: min(calc(100% - 32px), var(--container));
      margin: 0 auto;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(18px);
      background: rgba(246,241,234,0.78);
      border-bottom: 1px solid rgba(25,23,20,0.06);
    }

    .header-inner {
      min-height: var(--header-h);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .brand img {
      width: 126px;
      height: auto;
      object-fit: contain;
    }

    .brand-text {
      font-size: 12px;
      letter-spacing: 0.22em;
      color: var(--muted);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .nav a {
      font-size: 14px;
      color: #4b443c;
    }

    .header-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      padding: 0 18px;
      border-radius: 999px;
      background: #171411;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
    }

    .hero {
      padding: 28px 0 18px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 0.98fr 1.2fr;
      gap: 22px;
      align-items: stretch;
    }

    .hero-copy {
      background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75));
      border: 1px solid rgba(25,23,20,0.07);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      padding: 36px 34px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 640px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 18px;
    }

    .eyebrow::before {
      content: "";
      width: 28px;
      height: 1px;
      background: rgba(25,23,20,0.24);
    }

    .hero-copy h1 {
      margin: 0;
      font-size: clamp(34px, 4.6vw, 62px);
      line-height: 1.02;
      letter-spacing: -0.04em;
      font-weight: 700;
    }

    .hero-copy h1 span {
      display: block;
    }

    .hero-description {
      margin: 20px 0 0;
      max-width: 560px;
      font-size: clamp(15px, 1.4vw, 18px);
      line-height: 1.72;
      color: #4d463d;
    }

    .hero-actions {
      margin-top: 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .btn {
      height: 52px;
      padding: 0 22px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 700;
      transition: transform 0.18s ease, opacity 0.18s ease, background 0.18s ease;
      border: 1px solid transparent;
      cursor: pointer;
      white-space: nowrap;
    }

    .btn:hover { transform: translateY(-1px); }

    .btn-gold {
      background: var(--gold);
      color: #fff;
      box-shadow: 0 12px 24px rgba(167,129,75,0.22);
    }

    .btn-gold:hover { background: var(--gold-dark); }

    .btn-dark {
      background: #171411;
      color: #fff;
    }

    .btn-line {
      background: transparent;
      color: #171411;
      border-color: rgba(23,20,17,0.16);
    }

    .hero-proof {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .hero-proof__item {
      padding: 16px 16px 15px;
      border-radius: 18px;
      background: rgba(255,255,255,0.62);
      border: 1px solid rgba(25,23,20,0.06);
    }

    .hero-proof__item strong {
      display: block;
      font-size: 14px;
      margin-bottom: 6px;
    }

    .hero-proof__item span {
      display: block;
      font-size: 13px;
      line-height: 1.55;
      color: var(--muted);
    }

    .hero-visual {
      position: relative;
      min-height: 640px;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow);
      background: #ddd2c8;
      isolation: isolate;
    }

    .hero-slides {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.7s ease;
      pointer-events: none;
    }

    .hero-slide.is-active {
      opacity: 1;
      pointer-events: auto;
    }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transform: scale(1.01);
    }

    .hero-slide-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(15,12,10,0.06) 0%, rgba(15,12,10,0.18) 58%, rgba(15,12,10,0.42) 100%);
    }

    .hero-slide-copy {
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 72px;
      max-width: 520px;
      color: #fff;
      z-index: 2;
    }

    .hero-slide-copy small {
      display: inline-block;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
      opacity: 0.9;
    }

    .hero-slide-copy h2 {
      margin: 0;
      font-size: clamp(28px, 3.2vw, 46px);
      line-height: 1.08;
      letter-spacing: -0.04em;
      text-shadow: 0 8px 24px rgba(0,0,0,0.18);
    }

    .hero-slide-copy p {
      margin: 12px 0 0;
      font-size: 14px;
      line-height: 1.72;
      color: rgba(255,255,255,0.9);
      max-width: 460px;
    }

    .hero-dots {
      position: absolute;
      left: 24px;
      bottom: 24px;
      display: flex;
      gap: 8px;
      z-index: 3;
    }

    .hero-dot {
      width: 10px;
      height: 10px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: rgba(255,255,255,0.44);
      cursor: pointer;
      transition: width 0.25s ease, background 0.25s ease;
    }

    .hero-dot.is-active {
      width: 28px;
      background: #fff;
    }

    .section {
      padding: 88px 0;
    }

    .section-head {
      max-width: 760px;
      margin-bottom: 28px;
    }

    .section-kicker {
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 12px;
    }

    .section-head h2 {
      margin: 0;
      font-size: clamp(28px, 3vw, 44px);
      line-height: 1.12;
      letter-spacing: -0.04em;
    }

    .section-head p {
      margin: 14px 0 0;
      font-size: 16px;
      line-height: 1.8;
      color: #544d45;
    }

    .about-grid,
    .purchase-grid {
      display: grid;
      grid-template-columns: 1.02fr 1fr;
      gap: 22px;
      align-items: stretch;
    }

    .about-copy,
    .purchase-copy {
      background: rgba(255,255,255,0.64);
      border: 1px solid rgba(25,23,20,0.06);
      border-radius: 28px;
      padding: 30px;
      box-shadow: var(--shadow);
    }

    .about-copy h3,
    .purchase-copy h3 {
      margin: 0 0 12px;
      font-size: clamp(24px, 2.5vw, 36px);
      line-height: 1.18;
      letter-spacing: -0.03em;
    }

    .about-copy p,
    .purchase-copy p {
      margin: 0;
      font-size: 15px;
      color: #564f47;
      line-height: 1.8;
    }

    .about-points,
    .purchase-points {
      margin-top: 18px;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 12px;
    }

    .about-points li,
    .purchase-points li {
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(255,255,255,0.78);
      border: 1px solid rgba(25,23,20,0.06);
      color: #453f38;
      font-size: 14px;
    }

    .image-panel {
      overflow: hidden;
      border-radius: 30px;
      box-shadow: var(--shadow);
      min-height: 560px;
      background: #e7ddd2;
    }

    .image-panel img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-panel {
      min-height: 560px;
    }

    .about-panel img {
      object-position: center 26%;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .product-card {
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(25,23,20,0.06);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
    }

    .product-image-wrap {
      position: relative;
      aspect-ratio: 1 / 1.08;
      overflow: hidden;
      background: #e6ddd3;
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-image {
      transform: scale(1.03);
    }

    .product-badge {
      position: absolute;
      top: 16px;
      left: 16px;
      height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      background: rgba(255,255,255,0.88);
      border: 1px solid rgba(25,23,20,0.08);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #3f392f;
    }

    .product-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .product-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 14px;
      color: var(--muted);
      margin-bottom: 10px;
    }

    .product-body h3 {
      margin: 0;
      font-size: 28px;
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    .product-subtitle {
      margin: 10px 0 0;
      font-size: 15px;
      color: #453f38;
    }

    .product-description {
      margin: 14px 0 0;
      font-size: 14px;
      line-height: 1.75;
      color: #5d564d;
    }

    .feature-tags {
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .feature-tags span {
      display: inline-flex;
      align-items: center;
      height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.88);
      border: 1px solid rgba(25,23,20,0.06);
      font-size: 13px;
      color: #433d35;
    }

    .product-notes {
      margin: 16px 0 0;
      padding-left: 18px;
      color: #5c554d;
      font-size: 14px;
      line-height: 1.7;
    }

    .product-actions {
      margin-top: auto;
      padding-top: 18px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .review-card {
      background: rgba(255,255,255,0.76);
      border: 1px solid rgba(25,23,20,0.06);
      border-radius: 24px;
      padding: 24px;
      box-shadow: var(--shadow);
    }

    .review-stars {
      font-size: 16px;
      letter-spacing: 0.12em;
      color: var(--gold);
      margin-bottom: 12px;
    }

    .review-card h3 {
      margin: 0;
      font-size: 20px;
      line-height: 1.3;
    }

    .review-card p {
      margin: 12px 0 0;
      font-size: 14px;
      line-height: 1.75;
      color: #564f47;
    }

    .review-card span {
      display: inline-block;
      margin-top: 14px;
      font-size: 13px;
      color: var(--muted);
    }

    .signature-grid,
    .lookbook-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .visual-card {
      overflow: hidden;
      border-radius: 24px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(25,23,20,0.06);
      box-shadow: var(--shadow);
    }

    .visual-card img {
      aspect-ratio: 0.95 / 1.15;
      object-fit: cover;
    }

    .visual-body {
      padding: 18px 18px 20px;
    }

    .visual-index {
      font-size: 12px;
      letter-spacing: 0.2em;
      color: var(--muted);
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .visual-body h3 {
      margin: 0;
      font-size: 20px;
      line-height: 1.25;
    }

    .visual-body p {
      margin: 10px 0 0;
      font-size: 14px;
      color: #564f47;
      line-height: 1.7;
    }

    .purchase-copy .purchase-actions {
      margin-top: 22px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .faq-list {
      display: grid;
      gap: 12px;
    }

    .faq-item {
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(25,23,20,0.06);
      border-radius: 18px;
      padding: 0 18px;
      box-shadow: var(--shadow);
    }

    .faq-item summary {
      list-style: none;
      cursor: pointer;
      padding: 18px 0;
      font-weight: 700;
      font-size: 16px;
      position: relative;
      padding-right: 28px;
    }

    .faq-item summary::-webkit-details-marker { display: none; }

    .faq-item summary::after {
      content: "+";
      position: absolute;
      right: 0;
      top: 18px;
      color: var(--muted);
      font-weight: 400;
    }

    .faq-item[open] summary::after {
      content: "–";
    }

    .faq-item p {
      margin: 0;
      padding: 0 0 18px;
      font-size: 14px;
      color: #5b544c;
      line-height: 1.8;
    }

    .site-footer {
      padding: 40px 0 96px;
      color: #675f57;
    }

    .footer-box {
      border-top: 1px solid rgba(25,23,20,0.08);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 13px;
    }

    .smart-fab {
      position: fixed;
      right: 24px;
      bottom: 28px;
      z-index: 60;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px 14px 14px;
      border-radius: 999px;
      background: var(--green);
      color: #fff;
      box-shadow: 0 18px 36px rgba(31,143,87,0.28);
      border: 0;
    }

    .smart-fab:hover {
      transform: translateY(-1px);
    }

    .smart-fab__icon {
      width: 38px;
      height: 38px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.16);
      font-weight: 800;
      font-size: 18px;
      flex: 0 0 auto;
    }

    .smart-fab__text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .smart-fab__text strong {
      font-size: 14px;
    }

    .smart-fab__text span {
      margin-top: 4px;
      font-size: 12px;
      opacity: 0.9;
    }

    .smart-fab::after {
      content: "";
      position: absolute;
      inset: -4px;
      border-radius: inherit;
      border: 1px solid rgba(31,143,87,0.25);
      animation: pulseFab 2s infinite;
    }

    @keyframes pulseFab {
      0% { transform: scale(1); opacity: 0.9; }
      70% { transform: scale(1.04); opacity: 0; }
      100% { transform: scale(1.06); opacity: 0; }
    }

    .smart-popup {
      position: fixed;
      right: 24px;
      bottom: 106px;
      z-index: 70;
      width: min(360px, calc(100vw - 32px));
      padding: 22px;
      border-radius: 24px;
      background: rgba(255,255,255,0.96);
      border: 1px solid rgba(25,23,20,0.08);
      box-shadow: 0 24px 60px rgba(26,22,18,0.16);
      display: none;
    }

    .smart-popup.is-visible {
      display: block;
      animation: popupUp 0.25s ease;
    }

    @keyframes popupUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .smart-popup__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .smart-popup__eyebrow {
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 10px;
    }

    .smart-popup h3 {
      margin: 0;
      font-size: 24px;
      line-height: 1.18;
      letter-spacing: -0.03em;
    }

    .smart-popup p {
      margin: 12px 0 0;
      font-size: 14px;
      line-height: 1.7;
      color: #554e46;
    }

    .smart-popup__close {
      width: 34px;
      height: 34px;
      border-radius: 999px;
      border: 1px solid rgba(25,23,20,0.08);
      background: #fff;
      font-size: 20px;
      line-height: 1;
      color: #5c554d;
      cursor: pointer;
      flex: 0 0 auto;
    }

    .smart-popup__actions {
      margin-top: 18px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .smart-popup__meta {
      margin-top: 14px;
      font-size: 12px;
      color: var(--muted);
    }

    .sticky-buy {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 70;
      display: none;
      gap: 10px;
      padding: 10px;
      border-radius: 18px;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(18px);
      border: 1px solid rgba(25,23,20,0.08);
      box-shadow: 0 16px 36px rgba(22,18,14,0.12);
    }

    .sticky-buy .btn {
      flex: 1;
      height: 48px;
      padding: 0 12px;
      font-size: 14px;
    }

    @media (max-width: 1080px) {
      .hero-grid,
      .about-grid,
      .purchase-grid {
        grid-template-columns: 1fr;
      }

      .hero-copy,
      .hero-visual,
      .image-panel {
        min-height: auto;
      }

      .hero-visual {
        min-height: 560px;
      }

      .about-panel {
        min-height: 520px;
      }

      .reviews-grid,
      .signature-grid,
      .lookbook-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 760px) {
      :root {
        --header-h: 66px;
      }

      .container {
        width: min(calc(100% - 20px), var(--container));
      }

      .site-header {
        background: rgba(246,241,234,0.94);
      }

      .header-inner {
        min-height: var(--header-h);
      }

      .brand img {
        width: 102px;
      }

      .brand-text,
      .nav {
        display: none;
      }

      .header-cta {
        height: 40px;
        padding: 0 14px;
        font-size: 13px;
      }

      .hero {
        padding: 14px 0 8px;
      }

      .hero-grid {
        gap: 12px;
      }

      .hero-visual {
        min-height: 54vh;
        border-radius: 22px;
        order: -1;
      }

      .hero-slide img {
        object-position: center 38%;
      }

      .hero-slide-copy {
        left: 14px;
        right: 14px;
        bottom: 52px;
        max-width: none;
      }

      .hero-slide-copy h2 {
        font-size: clamp(24px, 8vw, 34px);
      }

      .hero-slide-copy p {
        font-size: 12px;
        line-height: 1.6;
      }

      .hero-dots {
        left: 14px;
        bottom: 16px;
      }

      .hero-copy {
        min-height: auto;
        padding: 22px 18px 18px;
        border-radius: 22px;
      }

      .hero-copy h1 {
        font-size: clamp(30px, 8.4vw, 42px);
      }

      .hero-description {
        margin-top: 14px;
        font-size: 14px;
        line-height: 1.72;
      }

      .hero-actions {
        margin-top: 18px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .hero-actions .btn {
        width: 100%;
      }

      .hero-proof {
        grid-template-columns: 1fr;
        margin-top: 18px;
      }

      .section {
        padding: 56px 0;
      }

      .section-head {
        margin-bottom: 20px;
      }

      .section-head h2 {
        font-size: clamp(24px, 7vw, 34px);
      }

      .section-head p,
      .about-copy p,
      .purchase-copy p {
        font-size: 14px;
        line-height: 1.75;
      }

      .about-copy,
      .purchase-copy {
        padding: 20px 18px;
        border-radius: 22px;
      }

      .image-panel {
        min-height: 380px;
        border-radius: 22px;
      }

      .about-panel {
        min-height: 420px;
      }

      .about-panel img {
        object-position: center 22%;
      }

      .products-grid,
      .reviews-grid,
      .signature-grid,
      .lookbook-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .product-card {
        border-radius: 22px;
      }

      .product-body {
        padding: 18px;
      }

      .product-body h3 {
        font-size: 24px;
      }

      .product-actions {
        display: grid;
        grid-template-columns: 1fr;
      }

      .visual-card {
        border-radius: 20px;
      }

      .visual-body {
        padding: 16px 16px 18px;
      }

      .smart-fab,
      .smart-popup {
        display: none !important;
      }

      .sticky-buy {
        display: flex;
      }

      .site-footer {
        padding-bottom: 100px;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand" aria-label="Soumé home">
        <img src="${ASSETS.logo}" alt="Soumé logo" />
        <span class="brand-text">Modern Luxury Clean Beauty</span>
      </a>

      <nav class="nav" aria-label="primary">
        <a href="#products">Products</a>
        <a href="#reviews">Reviews</a>
        <a href="#signature">Signature</a>
        <a href="#purchase">Purchase</a>
      </nav>

      <a class="header-cta" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">
        스마트스토어 바로가기
      </a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="eyebrow">${SITE.heroEyebrow}</div>

            <h1>
              <span>${SITE.heroTitle1}</span>
              <span>${SITE.heroTitle2}</span>
              <span>${SITE.heroTitle3}</span>
            </h1>

            <p class="hero-description">${SITE.heroDescription}</p>

            <div class="hero-actions">
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">지금 구매하기</a>
              <a class="btn btn-dark" href="#products">두 제품 비교하기</a>
              <a class="btn btn-line" href="#reviews">후기 먼저 보기</a>
            </div>

            <div class="hero-proof">
              <div class="hero-proof__item">
                <strong>4 Visual Slides</strong>
                <span>첫 화면에서 브랜드 무드를 4장 자동 슬라이드로 전달합니다.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Easy Choice</strong>
                <span>처음 방문한 고객도 Ocean Breeze와 Morning Haze를 쉽게 비교.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Fast Checkout</strong>
                <span>메인 구매 전환은 스마트스토어 한 곳으로 집중합니다.</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-slides" id="heroSlides">
              ${heroSlidesHtml}
            </div>

            <div class="hero-dots" id="heroDots">
              ${heroDotsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">About Soumé</div>
          <h2>많이 보여주기보다<br />더 또렷하게 남도록</h2>
          <p>
            Soumé는 제품 수를 늘리기보다 지금 가장 인상이 선명한 두 가지 시그니처에 집중합니다.
            빠르게 이해되고, 더 쉽게 선택되고, 바로 구매까지 이어지도록 구성했습니다.
          </p>
        </div>

        <div class="about-grid">
          <div class="about-copy">
            <h3>Ocean Breeze와 Morning Haze,<br />서로 다른 두 가지 무드</h3>
            <p>
              하나는 맑고 산뜻하게, 다른 하나는 부드럽고 차분하게.
              두 제품만으로도 브랜드가 어떤 인상을 남기고 싶은지 충분히 느껴지도록 정리했습니다.
            </p>

            <ul class="about-points">
              <li>구매 중심 구성 — 브랜드 무드를 해치지 않으면서도 바로 선택 가능</li>
              <li>두 제품 집중 — 첫 방문자도 선택 피로 없이 이해 가능</li>
              <li>모바일 최적화 — 작은 화면에서도 사진이 먼저 보이도록 구조 조정</li>
            </ul>
          </div>

          <div class="image-panel about-panel">
            <img src="${ASSETS.campaign01}" alt="Soumé campaign visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Best Sellers</div>
          <h2>복잡하지 않게,<br />지금 필요한 두 제품만</h2>
          <p>
            처음 방문한 고객도 바로 이해할 수 있도록 Ocean Breeze와 Morning Haze만 중심에 배치했습니다.
            비교는 쉽게, 구매는 더 빠르게 이어집니다.
          </p>
        </div>

        <div class="products-grid">
          ${productCards}
        </div>
      </div>
    </section>

    <section class="section" id="reviews">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Reviews</div>
          <h2>구매 직전의 신뢰를 만드는<br />실제 후기 톤</h2>
          <p>
            브랜드 무드만 예쁜 사이트보다, 구매 전 마지막 망설임을 줄여주는 후기 구조가 전환에 더 직접적으로 작동합니다.
          </p>
        </div>

        <div class="reviews-grid">
          ${reviewCards}
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Signature Visual</div>
          <h2>제품보다 먼저 보이는 건<br />브랜드의 태도입니다</h2>
          <p>
            메인 컷, 사용감, 디테일 컷을 나눠 보여주면 단순 감성 이미지가 아니라 믿을 수 있는 브랜드라는 인상으로 이어집니다.
          </p>
        </div>

        <div class="signature-grid">
          <article class="visual-card">
            <img src="${ASSETS.signatureMain}" alt="Signature Main" />
            <div class="visual-body">
              <div class="visual-index">01</div>
              <h3>Signature Main</h3>
              <p>브랜드의 첫인상을 정리하는 메인 컷.</p>
            </div>
          </article>

          <article class="visual-card">
            <img src="${ASSETS.signatureOpen}" alt="Signature Open" />
            <div class="visual-body">
              <div class="visual-index">02</div>
              <h3>Signature Open</h3>
              <p>제품 경험과 사용 장면을 자연스럽게 연결하는 이미지.</p>
            </div>
          </article>

          <article class="visual-card">
            <img src="${ASSETS.signatureDetail}" alt="Signature Detail" />
            <div class="visual-body">
              <div class="visual-index">03</div>
              <h3>Signature Detail</h3>
              <p>텍스처와 디테일을 보여줘 구매 전 신뢰감을 높이는 컷.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="lookbook">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Lookbook</div>
          <h2>브랜드 무드를 유지한 채<br />구매 흐름을 끊지 않기</h2>
          <p>
            룩북은 감성 장식용이 아니라 홈과 상품 인상 사이를 부드럽게 잇는 브릿지 역할을 합니다.
          </p>
        </div>

        <div class="lookbook-grid">
          <article class="visual-card">
            <img src="${ASSETS.lookbook01}" alt="Quiet Skin, Quiet Mood" />
            <div class="visual-body">
              <div class="visual-index">Lookbook</div>
              <h3>Quiet Skin, Quiet Mood</h3>
              <p>첫 인상을 정리하는 차분한 톤의 룩북 컷.</p>
            </div>
          </article>

          <article class="visual-card">
            <img src="${ASSETS.lookbook02}" alt="Editorial Softness" />
            <div class="visual-body">
              <div class="visual-index">Lookbook</div>
              <h3>Editorial Softness</h3>
              <p>피부 위 질감과 조도를 부드럽게 보여주는 에디토리얼 장면.</p>
            </div>
          </article>

          <article class="visual-card">
            <img src="${ASSETS.lookbook03}" alt="Lasting Impression" />
            <div class="visual-body">
              <div class="visual-index">Lookbook</div>
              <h3>Lasting Impression</h3>
              <p>브랜드 홈페이지와 상세페이지를 자연스럽게 잇는 무드 컷.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="purchase">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Purchase Funnel</div>
          <h2>결정은 간단하게,<br />구매는 더 빠르게</h2>
          <p>
            제품 이해, 후기 확인, 브랜드 무드까지 충분히 본 뒤 마지막에는 하나의 구매 동선으로 정리합니다.
            메인 전환은 스마트스토어로 집중시키는 것이 가장 효율적입니다.
          </p>
        </div>

        <div class="purchase-grid">
          <div class="purchase-copy">
            <h3>지금 가장 빠른 구매 동선</h3>
            <p>
              클릭 분산을 줄이기 위해 메인 구매 링크는 스마트스토어 한 곳으로 집중했습니다.
              첫 방문자도 고민 없이 바로 이동할 수 있도록 문구와 버튼을 단순하게 정리했습니다.
            </p>

            <ul class="purchase-points">
              <li>상단 · 제품 카드 · 하단 CTA에 반복 배치</li>
              <li>두 제품 비교 후 바로 구매로 이동 가능</li>
              <li>모바일은 하단 고정 구매 바로 전환</li>
            </ul>

            <div class="purchase-actions">
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
              <a class="btn btn-line" href="#products">두 제품 다시 보기</a>
            </div>
          </div>

          <div class="image-panel">
            <img src="${ASSETS.campaign02}" alt="Soumé purchase visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">FAQ</div>
          <h2>마지막 망설임을 줄이는<br />구매 전 질문</h2>
          <p>
            사용자가 결제 직전에 흔히 고민하는 질문을 먼저 정리해두면 구매 전환에 도움이 됩니다.
          </p>
        </div>

        <div class="faq-list">
          ${faqItems}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-box">
        <div>© Soumé. Quiet Luxury Body Ritual.</div>
        <div>Official purchase link → Smart Store</div>
      </div>
    </div>
  </footer>

  <a
    class="smart-fab"
    href="${LINKS.smartstore}"
    target="_blank"
    rel="noreferrer"
    aria-label="스마트스토어 바로가기"
  >
    <span class="smart-fab__icon">N</span>
    <span class="smart-fab__text">
      <strong>OFFICIAL STORE</strong>
      <span>스마트스토어 가기</span>
    </span>
  </a>

  <div class="smart-popup" id="smartPopup" aria-hidden="true">
    <div class="smart-popup__top">
      <div>
        <div class="smart-popup__eyebrow">Official Store</div>
        <h3>지금 바로<br />구매하러 갈까요?</h3>
      </div>
      <button class="smart-popup__close" id="smartPopupClose" aria-label="팝업 닫기">×</button>
    </div>

    <p>
      Ocean Breeze와 Morning Haze를 가장 빠르게 구매할 수 있는 공식 동선입니다.
      고민 없이 스마트스토어에서 바로 확인해보세요.
    </p>

    <div class="smart-popup__actions">
      <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 열기</a>
      <button class="btn btn-line" id="smartPopupDismiss" type="button">오늘은 닫기</button>
    </div>

    <div class="smart-popup__meta">데스크톱에서만 표시됩니다.</div>
  </div>

  <div class="sticky-buy">
    <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
    <a class="btn btn-line" href="#products">두 제품 비교하기</a>
  </div>

  <script>
    (function () {
      var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
      var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
      var current = 0;
      var timer = null;

      function activateSlide(index) {
        current = index;
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === index);
        });
        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });
      }

      function nextSlide() {
        var next = (current + 1) % slides.length;
        activateSlide(next);
      }

      function startAutoSlide() {
        if (timer) clearInterval(timer);
        timer = window.setInterval(nextSlide, 4000);
      }

      dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
          activateSlide(index);
          startAutoSlide();
        });
      });

      if (slides.length > 1) {
        activateSlide(0);
        startAutoSlide();
      }

      var popup = document.getElementById('smartPopup');
      var closeBtn = document.getElementById('smartPopupClose');
      var dismissBtn = document.getElementById('smartPopupDismiss');

      if (popup && !window.matchMedia('(max-width: 760px)').matches) {
        var storageKey = 'soume-smart-popup-dismissed';

        function openPopup() {
          if (sessionStorage.getItem(storageKey) === '1') return;
          popup.classList.add('is-visible');
          popup.setAttribute('aria-hidden', 'false');
        }

        function closePopup(save) {
          popup.classList.remove('is-visible');
          popup.setAttribute('aria-hidden', 'true');
          if (save) {
            sessionStorage.setItem(storageKey, '1');
          }
        }

        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            closePopup(false);
          });
        }

        if (dismissBtn) {
          dismissBtn.addEventListener('click', function () {
            closePopup(true);
          });
        }

        window.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            closePopup(false);
          }
        });

        window.setTimeout(openPopup, 1400);
      }
    })();
  </script>
</body>
</html>`)
})

export default app
