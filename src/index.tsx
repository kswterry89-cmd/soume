import { Hono } from 'hono'

const app = new Hono()

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Quiet Luxury Body Ritual',
  description:
    'Soumé는 감도 높은 비주얼과 간결한 구매 동선을 결합한 모던 럭셔리 바디 리추얼 브랜드입니다.',
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
  product03: '/assets/soume/product-03.jpg',

  lookbook01: '/assets/soume/lookbook-01.jpg',
  lookbook02: '/assets/soume/lookbook-02.jpg',
  lookbook03: '/assets/soume/lookbook-03.jpg',

  filmPoster: '/assets/soume/film-poster.jpg',
}

const HERO_MEDIA = [
  {
    video: '/videos/soume/hero-01.mp4',
    poster: ASSETS.heroMain,
    alt: 'Soumé hero video 01',
    label: 'Quiet Luxury',
    title: '두 가지 시그니처,\n하루의 무드를 더 선명하게',
    text: 'Ocean Breeze와 Morning Haze. 취향은 달라도 첫 선택은 간단하게.',
  },
  {
    video: '/videos/soume/hero-02.mp4',
    poster: ASSETS.campaign01,
    alt: 'Soumé hero video 02',
    label: 'Ocean Breeze',
    title: '맑고 산뜻하게,\n첫인상을 정리하는 무드',
    text: '브랜드의 첫 선택이 가장 쉽게 이해되도록 설계한 대표 시그니처.',
  },
  {
    video: '/videos/soume/hero-03.mp4',
    poster: ASSETS.campaign02,
    alt: 'Soumé hero video 03',
    label: 'Morning Haze',
    title: '부드럽고 차분하게,\n오래 남는 데일리 리추얼',
    text: '과하지 않지만 고급스럽게 남는 분위기를 위한 두 번째 선택.',
  },
  {
    video: '/videos/soume/hero-04.mp4',
    poster: ASSETS.lookbook01,
    alt: 'Soumé hero video 04',
    label: 'Brand Mood',
    title: '감도 높은 비주얼과\n직관적인 구매 흐름',
    text: '무드는 깊게, 구매 동선은 짧고 분명하게.',
  },
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'BEST SELLER',
    name: 'Ocean Breeze',
    price: '₩48,000',
    volume: '250ml',
    image: ASSETS.product01,
    subtitle: '맑고 산뜻한 인상을 남기는 시그니처 리추얼',
    description:
      '가볍고 깨끗한 분위기를 선호하는 고객에게 가장 먼저 추천하기 좋은 시그니처.',
    features: ['Fresh Mood', 'Clean Finish', 'Daily Use'],
  },
  {
    id: 'morning-haze',
    badge: 'SOFT SIGNATURE',
    name: 'Morning Haze',
    price: '₩52,000',
    volume: '250ml',
    image: ASSETS.product02,
    subtitle: '부드럽고 차분한 분위기를 완성하는 데일리 리추얼',
    description:
      '조용하고 고급스러운 무드를 선호하는 고객에게 어울리는 소프트 시그니처.',
    features: ['Soft Mood', 'Calm Finish', 'Gift Ready'],
  },
]

const BRAND_POINTS = [
  {
    title: '선택 피로를 줄이는 구조',
    text: '제품을 많이 나열하기보다 가장 인상이 선명한 두 가지 시그니처에 집중해 빠르게 이해되고 쉽게 선택되도록 정리했습니다.',
  },
  {
    title: '이미지 우선 랜딩 구조',
    text: '첫 화면에서는 설명을 덜고 비주얼을 앞세워, 모바일에서도 브랜드 인상이 흐려지지 않도록 설계했습니다.',
  },
  {
    title: '브랜드와 구매 흐름의 연결',
    text: '감도 높은 이미지와 직관적인 CTA를 함께 배치해 예쁜 화면에서 실제 구매 진입까지 자연스럽게 이어집니다.',
  },
]

const SIGNATURES = [
  {
    index: '01',
    title: 'Signature Main',
    text: '브랜드의 첫인상을 정리하는 메인 컷.',
    image: ASSETS.signatureMain,
    pos: 'center center',
  },
  {
    index: '02',
    title: 'Signature Open',
    text: '제품 경험과 사용 장면을 자연스럽게 연결하는 이미지.',
    image: ASSETS.signatureOpen,
    pos: 'center center',
  },
  {
    index: '03',
    title: 'Signature Detail',
    text: '텍스처와 디테일을 보여줘 구매 전 신뢰감을 높이는 컷.',
    image: ASSETS.signatureDetail,
    pos: 'center center',
  },
]

const VISUAL_ARCHIVE = [
  {
    title: 'Editorial Main',
    text: '브랜드 소개에 깊이를 더하는 에디토리얼 메인 이미지.',
    image: ASSETS.editorialMain,
    size: 'wide',
    pos: 'center 22%',
  },
  {
    title: 'Lookbook 01',
    text: '첫 인상을 정리하는 차분한 무드 컷.',
    image: ASSETS.lookbook01,
    size: 'normal',
    pos: 'center center',
  },
  {
    title: 'Lookbook 02',
    text: '피부 위 질감과 조도를 보여주는 에디토리얼 장면.',
    image: ASSETS.lookbook02,
    size: 'tall',
    pos: 'center center',
  },
  {
    title: 'Lookbook 03',
    text: '홈페이지와 상세페이지를 잇는 무드 컷.',
    image: ASSETS.lookbook03,
    size: 'normal',
    pos: 'center center',
  },
  {
    title: 'Campaign 01',
    text: '브랜드 무드를 가장 선명하게 보여주는 대표 컷.',
    image: ASSETS.campaign01,
    size: 'normal',
    pos: 'center center',
  },
  {
    title: 'Campaign 02',
    text: '조용한 럭셔리 톤을 보강하는 두 번째 메인 비주얼.',
    image: ASSETS.campaign02,
    size: 'normal',
    pos: 'center center',
  },
  {
    title: 'Product Detail',
    text: '상세 페이지 전환 전에 제품 인상을 강화하는 컷.',
    image: ASSETS.product03,
    size: 'normal',
    pos: 'center center',
  },
  {
    title: 'Brand Film Poster',
    text: '브랜드 필름 무드를 정리하는 포스터 비주얼.',
    image: ASSETS.filmPoster,
    size: 'wide',
    pos: 'center center',
  },
]

const heroSlidesHtml = HERO_MEDIA.map(
  (item, index) => `
    <div class="hero-slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}">
      <div class="hero-media">
        <img class="hero-poster" src="${item.poster}" alt="${item.alt}" />
        <video
          class="hero-video"
          muted
          playsinline
          preload="metadata"
          poster="${item.poster}"
        >
          <source src="${item.video}" type="video/mp4" />
        </video>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-copy">
        <small>${item.label}</small>
        <h1>${item.title.replace(/\n/g, '<br />')}</h1>
        <p>${item.text}</p>
        <div class="hero-actions">
          <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">지금 구매하기</a>
          <a class="btn btn-light" href="#products">두 제품 보기</a>
        </div>
      </div>
    </div>
  `,
).join('')

const heroDotsHtml = HERO_MEDIA.map(
  (_, index) => `
    <button class="hero-dot ${index === 0 ? 'is-active' : ''}" data-dot="${index}" aria-label="슬라이드 ${index + 1}"></button>
  `,
).join('')

const productCardsHtml = PRODUCTS.map(
  (product) => `
    <article class="product-card" id="${product.id}">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" />
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
        <div class="product-actions">
          <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 구매</a>
          <a class="btn btn-line" href="#brand-story">브랜드 보기</a>
        </div>
      </div>
    </article>
  `,
).join('')

const brandPointsHtml = BRAND_POINTS.map(
  (point) => `
    <div class="brand-point">
      <strong>${point.title}</strong>
      <span>${point.text}</span>
    </div>
  `,
).join('')

const signatureCardsHtml = SIGNATURES.map(
  (item) => `
    <article class="signature-card">
      <img src="${item.image}" alt="${item.title}" style="object-position:${item.pos};" />
      <div class="signature-body">
        <div class="signature-index">${item.index}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `,
).join('')

const archiveCardsHtml = VISUAL_ARCHIVE.map(
  (item) => `
    <article class="archive-card archive-card--${item.size}">
      <img src="${item.image}" alt="${item.title}" style="object-position:${item.pos};" />
      <div class="archive-body">
        <small>Archive</small>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
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
      --bg: #f7f2eb;
      --surface: rgba(255,255,255,0.74);
      --surface-strong: rgba(255,255,255,0.9);
      --text: #191714;
      --muted: #6c645b;
      --line: rgba(25,23,20,0.08);
      --gold: #a7814b;
      --gold-dark: #8f6b3d;
      --green: #1f8f57;
      --shadow: 0 20px 56px rgba(30,24,18,0.08);
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --container: 1220px;
      --header-h: 76px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(255,255,255,0.96), rgba(255,255,255,0) 26%),
        linear-gradient(180deg, #faf6f0 0%, #f6f1ea 42%, #f4eee7 100%);
      line-height: 1.55;
      word-break: keep-all;
    }

    img, video { display: block; width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    .container {
      width: min(calc(100% - 32px), var(--container));
      margin: 0 auto;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 80;
      backdrop-filter: blur(18px);
      background: rgba(247,242,235,0.76);
      border-bottom: 1px solid rgba(25,23,20,0.05);
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
      padding: 14px 0 18px;
    }

    .hero-shell {
      position: relative;
      min-height: calc(100vh - 120px);
      border-radius: 36px;
      overflow: hidden;
      box-shadow: var(--shadow);
      background: #ddd2c8;
      isolation: isolate;
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.8s ease;
      pointer-events: none;
    }

    .hero-slide.is-active {
      opacity: 1;
      pointer-events: auto;
    }

    .hero-media,
    .hero-poster,
    .hero-video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .hero-poster,
    .hero-video {
      object-fit: cover;
      object-position: center center;
    }

    .hero-video.is-failed {
      display: none;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(10,10,10,0.06) 0%, rgba(10,10,10,0.18) 50%, rgba(10,10,10,0.44) 100%);
      z-index: 1;
    }

    .hero-copy {
      position: absolute;
      left: 44px;
      bottom: 46px;
      z-index: 2;
      max-width: 560px;
      color: #fff;
    }

    .hero-copy small {
      display: inline-block;
      margin-bottom: 12px;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      opacity: 0.92;
    }

    .hero-copy h1 {
      margin: 0;
      font-size: clamp(38px, 5vw, 72px);
      line-height: 0.96;
      letter-spacing: -0.05em;
      text-shadow: 0 8px 24px rgba(0,0,0,0.16);
    }

    .hero-copy p {
      margin: 14px 0 0;
      max-width: 440px;
      font-size: 15px;
      line-height: 1.75;
      color: rgba(255,255,255,0.92);
    }

    .hero-actions {
      margin-top: 22px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .hero-dots {
      position: absolute;
      left: 44px;
      bottom: 20px;
      z-index: 3;
      display: flex;
      gap: 8px;
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

    .hero-panel {
      position: absolute;
      right: 24px;
      bottom: 24px;
      z-index: 3;
      width: min(390px, calc(100% - 48px));
      background: rgba(255,255,255,0.76);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(255,255,255,0.45);
      border-radius: 24px;
      padding: 18px 18px 16px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.08);
    }

    .hero-panel small {
      display: block;
      margin-bottom: 8px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero-panel h2 {
      margin: 0;
      font-size: 22px;
      line-height: 1.18;
      letter-spacing: -0.03em;
      color: #181512;
    }

    .hero-panel p {
      margin: 10px 0 0;
      font-size: 13px;
      line-height: 1.65;
      color: #4f483f;
    }

    .quick-strip {
      margin-top: 16px;
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr 1fr;
      gap: 12px;
    }

    .quick-card {
      padding: 18px;
      border-radius: 22px;
      background: rgba(255,255,255,0.68);
      border: 1px solid rgba(25,23,20,0.06);
      box-shadow: var(--shadow);
    }

    .quick-card strong {
      display: block;
      font-size: 16px;
      margin-bottom: 6px;
    }

    .quick-card span {
      display: block;
      font-size: 13px;
      line-height: 1.6;
      color: var(--muted);
    }

    .section {
      padding: 92px 0;
    }

    .section-head {
      max-width: 820px;
      margin-bottom: 30px;
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
      font-size: clamp(30px, 3.4vw, 48px);
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .section-head p {
      margin: 14px 0 0;
      font-size: 16px;
      line-height: 1.8;
      color: #544d45;
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

    .product-thumb {
      position: relative;
      aspect-ratio: 1 / 1.05;
      overflow: hidden;
      background: #e6ddd3;
    }

    .product-thumb img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: transform 0.45s ease;
    }

    .product-card:hover .product-thumb img {
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
      background: rgba(255,255,255,0.9);
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
      font-size: 30px;
      line-height: 1.08;
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
      background: rgba(255,255,255,0.9);
      border: 1px solid rgba(25,23,20,0.06);
      font-size: 13px;
      color: #433d35;
    }

    .product-actions {
      margin-top: auto;
      padding-top: 18px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .brand-grid {
      display: grid;
      grid-template-columns: 1.02fr 1fr;
      gap: 22px;
      align-items: stretch;
    }

    .brand-copy {
      background: rgba(255,255,255,0.68);
      border: 1px solid rgba(25,23,20,0.06);
      border-radius: 28px;
      padding: 32px;
      box-shadow: var(--shadow);
    }

    .brand-copy h3 {
      margin: 0 0 12px;
      font-size: clamp(26px, 2.8vw, 40px);
      line-height: 1.14;
      letter-spacing: -0.03em;
    }

    .brand-copy p {
      margin: 0;
      font-size: 15px;
      color: #564f47;
      line-height: 1.8;
    }

    .brand-points {
      margin-top: 18px;
      display: grid;
      gap: 12px;
    }

    .brand-point {
      padding: 16px;
      border-radius: 18px;
      background: rgba(255,255,255,0.8);
      border: 1px solid rgba(25,23,20,0.06);
    }

    .brand-point strong {
      display: block;
      font-size: 15px;
      margin-bottom: 6px;
      color: #221f1b;
    }

    .brand-point span {
      display: block;
      font-size: 14px;
      line-height: 1.65;
      color: #5b544c;
    }

    .brand-image {
      overflow: hidden;
      border-radius: 30px;
      box-shadow: var(--shadow);
      min-height: 620px;
      background: #e7ddd2;
    }

    .brand-image img {
      height: 100%;
      object-fit: cover;
      object-position: center 26%;
    }

    .signature-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .signature-card {
      overflow: hidden;
      border-radius: 24px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(25,23,20,0.06);
      box-shadow: var(--shadow);
    }

    .signature-card img {
      aspect-ratio: 0.95 / 1.15;
      object-fit: cover;
    }

    .signature-body {
      padding: 18px 18px 20px;
    }

    .signature-index {
      font-size: 12px;
      letter-spacing: 0.2em;
      color: var(--muted);
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .signature-body h3 {
      margin: 0;
      font-size: 20px;
      line-height: 1.25;
    }

    .signature-body p {
      margin: 10px 0 0;
      font-size: 14px;
      color: #564f47;
      line-height: 1.7;
    }

    .archive-grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 18px;
    }

    .archive-card {
      position: relative;
      overflow: hidden;
      border-radius: 24px;
      background: #e9dfd4;
      box-shadow: var(--shadow);
      min-height: 320px;
      grid-column: span 4;
    }

    .archive-card--wide {
      grid-column: span 8;
      min-height: 360px;
    }

    .archive-card--tall {
      grid-column: span 4;
      min-height: 520px;
    }

    .archive-card img {
      position: absolute;
      inset: 0;
      height: 100%;
      object-fit: cover;
    }

    .archive-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(10,10,10,0.02) 0%, rgba(10,10,10,0.08) 45%, rgba(10,10,10,0.4) 100%);
    }

    .archive-body {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 18px;
      z-index: 1;
      color: #fff;
    }

    .archive-body small {
      display: block;
      margin-bottom: 8px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.9;
    }

    .archive-body h3 {
      margin: 0;
      font-size: 24px;
      line-height: 1.15;
      letter-spacing: -0.03em;
    }

    .archive-body p {
      margin: 10px 0 0;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(255,255,255,0.9);
      max-width: 420px;
    }

    .cta-panel {
      padding: 38px;
      border-radius: 32px;
      background:
        linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.72)),
        linear-gradient(135deg, #ebe1d4, #f7f2eb);
      border: 1px solid rgba(25,23,20,0.06);
      box-shadow: var(--shadow);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .cta-copy small {
      display: block;
      margin-bottom: 10px;
      font-size: 12px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .cta-copy h2 {
      margin: 0;
      font-size: clamp(30px, 3vw, 44px);
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .cta-copy p {
      margin: 12px 0 0;
      font-size: 15px;
      line-height: 1.75;
      color: #564f47;
      max-width: 620px;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
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

    .btn-line {
      background: transparent;
      color: #171411;
      border-color: rgba(23,20,17,0.14);
    }

    .btn-light {
      color: #fff;
      border-color: rgba(255,255,255,0.54);
      background: rgba(255,255,255,0.08);
    }

    .site-footer {
      padding: 42px 0 96px;
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

    @media (max-width: 1180px) {
      .quick-strip {
        grid-template-columns: 1fr 1fr;
      }

      .brand-grid {
        grid-template-columns: 1fr;
      }

      .brand-image {
        min-height: 520px;
      }

      .archive-card,
      .archive-card--wide,
      .archive-card--tall {
        grid-column: span 6;
        min-height: 320px;
      }
    }

    @media (max-width: 760px) {
      :root { --header-h: 66px; }

      .container {
        width: min(calc(100% - 20px), var(--container));
      }

      .site-header {
        background: rgba(247,242,235,0.94);
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
        padding: 10px 0 12px;
      }

      .hero-shell {
        min-height: 72vh;
        border-radius: 22px;
      }

      .hero-poster,
      .hero-video {
        object-position: center 38%;
      }

      .hero-copy {
        left: 16px;
        right: 16px;
        bottom: 56px;
        max-width: none;
      }

      .hero-copy small {
        margin-bottom: 8px;
        font-size: 10px;
      }

      .hero-copy h1 {
        font-size: clamp(30px, 9vw, 44px);
        line-height: 0.98;
      }

      .hero-copy p {
        margin-top: 10px;
        max-width: 280px;
        font-size: 13px;
        line-height: 1.55;
      }

      .hero-actions {
        margin-top: 16px;
        gap: 8px;
      }

      .hero-actions .btn {
        height: 44px;
        padding: 0 14px;
        font-size: 13px;
      }

      .hero-dots {
        left: 16px;
        bottom: 18px;
      }

      .hero-panel {
        display: none;
      }

      .quick-strip {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .quick-card {
        padding: 16px;
        border-radius: 18px;
      }

      .section {
        padding: 58px 0;
      }

      .section-head {
        margin-bottom: 20px;
      }

      .section-head h2 {
        font-size: clamp(24px, 7vw, 34px);
      }

      .section-head p,
      .brand-copy p,
      .cta-copy p {
        font-size: 14px;
        line-height: 1.75;
      }

      .products-grid,
      .signature-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .product-card,
      .brand-copy,
      .signature-card,
      .cta-panel {
        border-radius: 22px;
      }

      .product-body,
      .brand-copy {
        padding: 18px;
      }

      .product-body h3 {
        font-size: 24px;
      }

      .product-actions,
      .cta-actions {
        display: grid;
        grid-template-columns: 1fr;
      }

      .brand-image {
        min-height: 400px;
        border-radius: 22px;
      }

      .brand-image img {
        object-position: center 20%;
      }

      .signature-body {
        padding: 16px 16px 18px;
      }

      .archive-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .archive-card,
      .archive-card--wide,
      .archive-card--tall {
        grid-column: auto;
        min-height: 300px;
        border-radius: 20px;
      }

      .archive-body {
        left: 16px;
        right: 16px;
        bottom: 16px;
      }

      .archive-body h3 {
        font-size: 22px;
      }

      .cta-panel {
        padding: 22px 18px;
        border-radius: 24px;
      }

      .cta-copy h2 {
        font-size: clamp(24px, 7vw, 34px);
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
        <a href="#brand-story">Brand</a>
        <a href="#signature">Signature</a>
        <a href="#archive">Archive</a>
        <a href="#purchase">Purchase</a>
      </nav>

      <a class="header-cta" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">
        스마트스토어 바로가기
      </a>
    </div>
  </header>

  <main>
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-shell">
          ${heroSlidesHtml}

          <div class="hero-dots" id="heroDots">
            ${heroDotsHtml}
          </div>

          <div class="hero-panel">
            <small>Video Hero Concept</small>
            <h2>영상 중심으로 바꾸되,<br />이미지 자산도 모두 살리는 구조</h2>
            <p>히어로는 4개의 동영상 슬라이드, 아래 섹션은 캠페인·에디토리얼·시그니처·룩북 이미지를 풍부하게 이어 붙여 랜딩의 밀도를 높였습니다.</p>
          </div>
        </div>

        <div class="quick-strip">
          <div class="quick-card">
            <strong>4 Video Slides · 5s</strong>
            <span>히어로는 5초마다 자동 전환되고, 영상이 없으면 poster 이미지가 먼저 보입니다.</span>
          </div>
          <div class="quick-card">
            <strong>2 Core Products</strong>
            <span>Ocean Breeze와 Morning Haze를 메인 선택지로 집중.</span>
          </div>
          <div class="quick-card">
            <strong>Visual Archive</strong>
            <span>현재 가지고 있는 모든 이미지 자산을 아래에서 다시 활용.</span>
          </div>
          <div class="quick-card">
            <strong>Fast Purchase Flow</strong>
            <span>메인 CTA는 스마트스토어 한 곳으로 단순하게 연결.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Core Products</div>
          <h2>처음 방문해도 바로 이해되는<br />두 가지 핵심 제품</h2>
          <p>
            메인에서는 Ocean Breeze와 Morning Haze 두 제품만 선명하게 보여주고,
            비교와 구매가 자연스럽게 이어지도록 정리했습니다.
          </p>
        </div>

        <div class="products-grid">
          ${productCardsHtml}
        </div>
      </div>
    </section>

    <section class="section" id="brand-story">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Brand Story</div>
          <h2>회사 소개보다 먼저,<br />브랜드 인상이 기억되도록</h2>
          <p>
            Soumé는 제품 수를 늘리기보다 지금 가장 인상이 선명한 두 가지 시그니처에 집중합니다.
            많이 설명하기보다 더 빠르게 이해되고, 더 쉽게 선택되고, 바로 구매까지 이어지도록 설계했습니다.
          </p>
        </div>

        <div class="brand-grid">
          <div class="brand-copy">
            <h3>Ocean Breeze와 Morning Haze,<br />서로 다른 두 가지 무드</h3>
            <p>
              하나는 맑고 산뜻하게, 다른 하나는 부드럽고 차분하게.
              두 제품만으로도 Soumé가 어떤 인상을 남기고 싶은 브랜드인지 충분히 느껴지도록 정리했습니다.
            </p>

            <div class="brand-points">
              ${brandPointsHtml}
            </div>
          </div>

          <div class="brand-image">
            <img src="${ASSETS.campaign01}" alt="Soumé brand visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Signature Visual</div>
          <h2>메인 컷, 오픈 컷, 디테일 컷으로<br />브랜드의 톤을 더 깊게</h2>
          <p>
            제품만 나열하지 않고, 어떻게 보이고 어떤 감도로 기억되는지까지 함께 설계해야
            랜딩페이지가 덜 심심하고 더 설득력 있게 느껴집니다.
          </p>
        </div>

        <div class="signature-grid">
          ${signatureCardsHtml}
        </div>
      </div>
    </section>

    <section class="section" id="archive">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Visual Archive</div>
          <h2>지금 가진 이미지 자산을<br />홈페이지 안에서 더 풍부하게 활용</h2>
          <p>
            캠페인, 에디토리얼, 룩북, 디테일, 필름 포스터까지 전부 분산시키지 않고
            하나의 흐름 안에 다시 묶어 브랜드 밀도를 높였습니다.
          </p>
        </div>

        <div class="archive-grid">
          ${archiveCardsHtml}
        </div>
      </div>
    </section>

    <section class="section" id="purchase">
      <div class="container">
        <div class="cta-panel">
          <div class="cta-copy">
            <small>Official Store CTA</small>
            <h2>지금 가장 빠른 구매 동선</h2>
            <p>
              클릭 분산을 줄이기 위해 메인 구매 링크는 스마트스토어 한 곳으로 집중했습니다.
              히어로에서 무드를 보고, 제품을 비교하고, 브랜드 인상을 확인한 뒤 바로 이동할 수 있게 설계했습니다.
            </p>
          </div>

          <div class="cta-actions">
            <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
            <a class="btn btn-line" href="#products">두 제품 다시 보기</a>
          </div>
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
      스마트스토어에서 바로 확인해보세요.
    </p>

    <div class="smart-popup__actions">
      <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 열기</a>
      <button class="btn btn-line" id="smartPopupDismiss" type="button">오늘은 닫기</button>
    </div>

    <div class="smart-popup__meta">데스크톱에서만 표시됩니다.</div>
  </div>

  <div class="sticky-buy">
    <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
    <a class="btn btn-line" href="#products">두 제품 보기</a>
  </div>

  <script>
    (function () {
      var slideInterval = 5000;
      var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
      var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
      var videos = Array.prototype.slice.call(document.querySelectorAll('.hero-video'));
      var current = 0;
      var timer = null;

      videos.forEach(function (video) {
        video.addEventListener('error', function () {
          video.classList.add('is-failed');
        });

        video.addEventListener('ended', function () {
          video.currentTime = 0;
          var playPromise = video.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(function () {});
          }
        });
      });

      function syncVideos(index) {
        videos.forEach(function (video, i) {
          try {
            if (i === index) {
              video.pause();
              video.currentTime = 0;
              var playPromise = video.play();
              if (playPromise && playPromise.catch) {
                playPromise.catch(function () {});
              }
            } else {
              video.pause();
              video.currentTime = 0;
            }
          } catch (e) {}
        });
      }

      function activateSlide(index) {
        current = index;
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === index);
        });
        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });
        syncVideos(index);
      }

      function nextSlide() {
        var next = (current + 1) % slides.length;
        activateSlide(next);
      }

      function startAutoSlide() {
        if (timer) clearInterval(timer);
        timer = window.setInterval(nextSlide, slideInterval);
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
