import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — 조용한 럭셔리, 피부 위에 남는 본질',
  description:
    'Soumé는 절제된 감도와 섬세한 텍스처로 완성하는 클린 뷰티 하우스입니다. 오션 브리즈 시그니처를 중심으로 감각적인 뷰티 경험을 제안합니다.',
  heroEyebrow: 'Soumé / Clean Beauty House',
  heroTitleLine1: '조용한 럭셔리,',
  heroTitleLine2: '피부 위에 남는',
  heroTitleLine3: '본질',
  heroDescription:
    '과장된 장식보다 오래 남는 감각. Soumé는 가볍고 세련된 사용감, 부드러운 잔향, 절제된 디자인으로 일상의 루틴을 더 정교하게 만듭니다.',
  heroPrimaryCta: '시그니처 보기',
  heroSecondaryCta: '제품 둘러보기',
  aboutEyebrow: 'About Soumé',
  aboutTitle: '기능과 분위기가 동시에 남는 뷰티',
  aboutDescription:
    'Soumé는 제품의 효능만이 아니라 사용하는 순간의 무드까지 설계합니다. 미니멀한 패키지, 정돈된 컬러, 공기처럼 가벼운 사용감이 하나의 경험으로 이어지도록 구성했습니다.',
  signatureEyebrow: 'Signature',
  signatureTitle: 'Ocean Breeze Body Lotion Spray',
  signatureDescription:
    'Soumé의 시그니처 오션 브리즈는 산뜻한 분사감과 부드러운 보습감을 동시에 전하는 바디 로션 스프레이입니다. 피부 위에 얇고 균일하게 밀착되며, 잔여감 없이 정돈된 마무리를 남깁니다.',
  productsEyebrow: 'Products',
  productsTitle: '오늘의 루틴을 구성하는 라인업',
  lookbookEyebrow: 'Lookbook',
  lookbookTitle: '브랜드의 분위기를 입은 장면들',
  philosophyEyebrow: 'Philosophy',
  philosophyTitle: 'Less noise, more presence',
  philosophyDescription:
    '우리는 더 많은 장식보다 더 정확한 인상을 남기는 방식을 선호합니다. Soumé는 피부 위에 오래 남는 감각, 공간에 머무는 태도, 루틴 속에서 반복될 수 있는 아름다움을 만듭니다.',
  filmEyebrow: 'Brand Film',
  filmTitle: 'A moving portrait of Soumé',
  filmDescription:
    '브랜드의 무드와 사용 경험을 영상으로 풀어낸 섹션입니다. 영상이 업로드되면 자동으로 플레이되며, 영상이 아직 없다면 포스터 이미지가 먼저 보이도록 설계했습니다.',
  newsletterEyebrow: 'Newsletter',
  newsletterTitle: 'Soumé의 새로운 장면을 가장 먼저',
  newsletterDescription:
    '신제품, 에디토리얼, 브랜드 필름, 룩북 업데이트를 뉴스레터로 받아보세요.',
  footerText: '© Soumé. All rights reserved.',
}

const ASSETS = {
  logo: '/static/soume-logo-black.png',

  heroMain: '/static/assets/soume/hero-main.jpg',
  editorialMain: '/static/assets/soume/editorial-main.jpg',

  campaign01: '/static/assets/soume/campaign-01.jpg',
  campaign02: '/static/assets/soume/campaign-02.jpg',

  product01: '/static/assets/soume/product-01.jpg',
  product02: '/static/assets/soume/product-02.jpg',
  product03: '/static/assets/soume/product-03.jpg',

  lookbook01: '/static/assets/soume/lookbook-01.jpg',
  lookbook02: '/static/assets/soume/lookbook-02.jpg',
  lookbook03: '/static/assets/soume/lookbook-03.jpg',

  filmPoster: '/static/assets/soume/film-poster.jpg',
  filmVideo: '/static/videos/soume-brand-film.mp4',
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
      '미세하게 분사되는 텍스처가 피부 위에 고르게 스며들며, 끈적임 없이 정돈된 보습감을 남깁니다. 샤워 후, 외출 전, 혹은 리프레시가 필요한 순간에 간결하게 사용할 수 있는 시그니처 바디 루틴 제품입니다.',
    notes: ['Fresh air', 'Soft musk', 'Clean skin finish'],
    ingredients: ['Panthenol', 'Glycerin', 'Botanical moisture complex'],
    image: ASSETS.product01,
    gallery: [ASSETS.product01, ASSETS.product02, ASSETS.product03],
    buyLink: 'https://example.com/products/ocean-breeze',
    detailLink: '#products',
    inquiryLink: '#newsletter',
  },
  {
    id: 'veil-recovery',
    badge: 'Routine',
    name: 'Veil Recovery Mist',
    subtitle: '가볍고 세련된 보습막을 더하는 데일리 리커버리 미스트',
    price: '₩39,000',
    volume: '120ml',
    description:
      '건조한 순간 피부 결을 빠르게 정돈하고, 메이크업 전후에도 부담 없이 사용할 수 있도록 설계된 미스트입니다. 공기처럼 얇은 수분막이 피부 위에 매끄럽게 내려앉습니다.',
    notes: ['Soft floral', 'Transparent citrus', 'Airy finish'],
    ingredients: ['Niacinamide', 'Betaine', 'Hyaluronic acid'],
    image: ASSETS.product02,
    gallery: [ASSETS.product02, ASSETS.product01, ASSETS.editorialMain],
    buyLink: 'https://example.com/products/veil-recovery-mist',
    detailLink: '#products',
    inquiryLink: '#newsletter',
  },
  {
    id: 'bare-reset',
    badge: 'Essential',
    name: 'Bare Reset Body Care',
    subtitle: '루틴의 마무리를 정갈하게 정리하는 에센셜 바디 케어',
    price: '₩52,000',
    volume: '300ml',
    description:
      '무게감은 줄이고 사용감은 더 정제한 바디 케어 포뮬러입니다. 피부 위에 남는 번들거림 없이 정돈된 윤기와 편안함을 중심으로 설계했습니다.',
    notes: ['Skin musk', 'Powder clean', 'Calm woody air'],
    ingredients: ['Ceramide', 'Squalane', 'Soothing herbal complex'],
    image: ASSETS.product03,
    gallery: [ASSETS.product03, ASSETS.product01, ASSETS.product02],
    buyLink: 'https://example.com/products/bare-reset',
    detailLink: '#products',
    inquiryLink: '#newsletter',
  },
]

const LOOKBOOK = [
  {
    category: 'Lookbook 01',
    title: 'Quiet Skin, Quiet Mood',
    description: '은은한 톤과 정돈된 실루엣으로 브랜드의 첫인상을 구성하는 장면',
    image: ASSETS.lookbook01,
  },
  {
    category: 'Lookbook 02',
    title: 'Soft Editorial Presence',
    description: '에디토리얼한 시선으로 해석한 Soumé의 공기감과 표정',
    image: ASSETS.lookbook02,
  },
  {
    category: 'Lookbook 03',
    title: 'Clean Form, Lasting Impression',
    description: '군더더기 없는 프레임 안에서 제품과 무드가 함께 남는 방식',
    image: ASSETS.lookbook03,
  },
]

const FILM = {
  title: SITE.filmTitle,
  description: SITE.filmDescription,
  video: ASSETS.filmVideo,
  poster: ASSETS.filmPoster,
  externalLink: '#newsletter',
}

const escapeForScript = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c')

const renderProductCards = () =>
  PRODUCTS.map(
    (product) => `
      <article class="product-card reveal">
        <div class="product-card__media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-card__body">
          <span class="product-card__badge">${product.badge}</span>
          <h3>${product.name}</h3>
          <p class="product-card__subtitle">${product.subtitle}</p>
          <div class="product-card__meta">
            <span>${product.price}</span>
            <span>${product.volume}</span>
          </div>
          <div class="product-card__actions">
            <button class="btn btn-dark product-detail-btn" data-product-id="${product.id}">
              상품 상세 보기
            </button>
            <a class="btn btn-line" href="${product.buyLink}" target="_blank" rel="noreferrer">
              구매하기
            </a>
          </div>
        </div>
      </article>
    `
  ).join('')

const renderLookbookCards = () =>
  LOOKBOOK.map(
    (item) => `
      <article class="lookbook-card reveal">
        <div class="lookbook-card__media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="lookbook-card__body">
          <span class="section-kicker">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `
  ).join('')

app.get('/', (c) => {
  const productDataJson = escapeForScript(PRODUCTS)

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
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
  <style>
    :root {
      --bg: #f6f2eb;
      --bg-soft: #fbf8f3;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 255, 255, 0.9);
      --text: #171615;
      --muted: #70695f;
      --line: rgba(23, 22, 21, 0.1);
      --line-strong: rgba(23, 22, 21, 0.18);
      --accent: #d6c7b2;
      --accent-deep: #b49d7b;
      --shadow: 0 18px 50px rgba(39, 33, 24, 0.08);
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --container: 1240px;
      --transition: 220ms ease;
      --nav-height: 82px;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(214, 199, 178, 0.26), transparent 30%),
        linear-gradient(180deg, #fbf8f3 0%, #f5f0e8 100%);
      font-family: 'Inter', 'Noto Sans KR', sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    img,
    video {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    .container {
      width: min(calc(100% - 40px), var(--container));
      margin: 0 auto;
    }

    .section {
      padding: 110px 0;
    }

    .section + .section {
      padding-top: 0;
    }

    .section-label,
    .section-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .section-label::before,
    .section-kicker::before {
      content: '';
      display: inline-block;
      width: 28px;
      height: 1px;
      background: var(--line-strong);
    }

    .section-head {
      display: grid;
      gap: 14px;
      margin-bottom: 34px;
    }

    .section-head h2 {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.3rem, 4vw, 4.2rem);
      line-height: 0.96;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .section-head p {
      margin: 0;
      max-width: 720px;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(18px);
      background: rgba(251, 248, 243, 0.68);
      border-bottom: 1px solid transparent;
      transition: background var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .site-header.is-scrolled {
      background: rgba(251, 248, 243, 0.92);
      border-color: var(--line);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    }

    .nav {
      height: var(--nav-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .nav__brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .nav__brand img {
      width: auto;
      height: 28px;
      object-fit: contain;
    }

    .nav__brand span {
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
      white-space: nowrap;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav__links a {
      position: relative;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      transition: color var(--transition);
    }

    .nav__links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 1px;
      background: var(--text);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }

    .nav__links a:hover {
      color: var(--text);
    }

    .nav__links a:hover::after {
      transform: scaleX(1);
    }

    .nav__actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      border: 1px solid var(--line);
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.55);
    }

    .menu-toggle span,
    .menu-toggle span::before,
    .menu-toggle span::after {
      display: block;
      width: 18px;
      height: 1.6px;
      background: var(--text);
      position: relative;
      transition: transform var(--transition), opacity var(--transition);
      content: '';
    }

    .menu-toggle span::before {
      position: absolute;
      top: -6px;
      left: 0;
    }

    .menu-toggle span::after {
      position: absolute;
      top: 6px;
      left: 0;
    }

    .mobile-panel {
      display: none;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 48px;
      padding: 0 20px;
      border-radius: 999px;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: transform var(--transition), background var(--transition), color var(--transition), border-color var(--transition), box-shadow var(--transition);
      white-space: nowrap;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn-dark {
      color: #f6f2eb;
      background: #141311;
      box-shadow: 0 14px 30px rgba(20, 19, 17, 0.18);
    }

    .btn-light {
      color: var(--text);
      background: rgba(255, 255, 255, 0.65);
      border: 1px solid var(--line);
    }

    .btn-line {
      color: var(--text);
      border: 1px solid var(--line-strong);
      background: transparent;
    }

    .hero {
      padding: 48px 0 70px;
    }

    .hero__grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 30px;
      align-items: stretch;
    }

    .hero__copy,
    .hero__visual {
      min-height: calc(100vh - var(--nav-height) - 88px);
      border-radius: 36px;
      overflow: hidden;
      position: relative;
    }

    .hero__copy {
      padding: clamp(28px, 5vw, 68px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.66), rgba(255,255,255,0.42)),
        radial-gradient(circle at 20% 20%, rgba(214, 199, 178, 0.26), transparent 32%),
        #f7f2eb;
      border: 1px solid rgba(255,255,255,0.7);
      box-shadow: var(--shadow);
    }

    .hero__top {
      display: grid;
      gap: 22px;
    }

    .hero__eyebrow {
      font-size: 12px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero__title {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3.2rem, 8vw, 6.7rem);
      line-height: 0.9;
      letter-spacing: -0.045em;
      font-weight: 600;
    }

    .hero__description {
      max-width: 620px;
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.9;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .hero__meta {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }

    .hero__meta-item {
      display: grid;
      gap: 8px;
    }

    .hero__meta-item span {
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero__meta-item strong {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.6;
    }

    .hero__visual {
      background: #ede6db;
      box-shadow: var(--shadow);
    }

    .hero__visual img {
      height: 100%;
      object-fit: cover;
    }

    .hero__floating {
      position: absolute;
      right: 24px;
      bottom: 24px;
      width: min(320px, calc(100% - 48px));
      padding: 20px;
      border-radius: 24px;
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(255,255,255,0.7);
      box-shadow: 0 14px 28px rgba(28, 24, 20, 0.08);
    }

    .hero__floating small {
      display: block;
      margin-bottom: 6px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero__floating strong {
      display: block;
      margin-bottom: 8px;
      font-size: 18px;
      line-height: 1.3;
    }

    .hero__floating p {
      margin: 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.7;
    }

    .about-grid,
    .signature-grid,
    .philosophy-grid,
    .film-grid {
      display: grid;
      gap: 28px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: center;
    }

    .about-card,
    .signature-card,
    .philosophy-card,
    .film-card,
    .newsletter-card {
      background: rgba(255,255,255,0.56);
      border: 1px solid rgba(255,255,255,0.78);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .about-card__body,
    .signature-card__body,
    .philosophy-card__body,
    .film-card__body,
    .newsletter-card__body {
      padding: clamp(24px, 4vw, 40px);
    }

    .about-card__body p,
    .signature-card__body p,
    .philosophy-card__body p,
    .film-card__body p {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.9;
    }

    .signature-card__body h3,
    .philosophy-card__body h3,
    .film-card__body h3 {
      margin: 14px 0 14px;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 3vw, 3rem);
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .about-card__stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 26px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }

    .about-card__stats div {
      display: grid;
      gap: 6px;
    }

    .about-card__stats span {
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .about-card__stats strong {
      font-size: 16px;
      line-height: 1.5;
    }

    .visual-frame {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-xl);
      min-height: 560px;
      box-shadow: var(--shadow);
      background: #e9dfd0;
    }

    .visual-frame img,
    .visual-frame video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .signature-stack {
      display: grid;
      grid-template-columns: 1.35fr 0.65fr;
      gap: 16px;
      margin-top: 24px;
    }

    .signature-stack__main,
    .signature-stack__side {
      border-radius: 22px;
      overflow: hidden;
      min-height: 420px;
      background: #f1ebe2;
    }

    .signature-stack__side {
      display: grid;
      gap: 16px;
      grid-template-rows: repeat(2, 1fr);
    }

    .signature-stack__side img,
    .signature-stack__main img {
      height: 100%;
      object-fit: cover;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .product-card {
      display: grid;
      grid-template-rows: auto 1fr;
      overflow: hidden;
      border-radius: 28px;
      background: rgba(255,255,255,0.58);
      border: 1px solid rgba(255,255,255,0.8);
      box-shadow: var(--shadow);
    }

    .product-card__media {
      background: #f1ebe2;
      aspect-ratio: 4 / 4.7;
      overflow: hidden;
    }

    .product-card__media img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-card__media img {
      transform: scale(1.035);
    }

    .product-card__body {
      padding: 22px;
      display: grid;
      align-content: start;
      gap: 14px;
    }

    .product-card__badge {
      display: inline-flex;
      width: fit-content;
      padding: 7px 10px;
      border-radius: 999px;
      background: rgba(23, 22, 21, 0.06);
      color: var(--muted);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .product-card__body h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .product-card__subtitle {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .product-card__meta {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 13px;
      color: var(--muted);
    }

    .product-card__actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 4px;
    }

    .lookbook-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .lookbook-card {
      overflow: hidden;
      border-radius: 28px;
      background: rgba(255,255,255,0.58);
      border: 1px solid rgba(255,255,255,0.8);
      box-shadow: var(--shadow);
    }

    .lookbook-card__media {
      aspect-ratio: 4 / 5.2;
      background: #efe8de;
      overflow: hidden;
    }

    .lookbook-card__media img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.45s ease;
    }

    .lookbook-card:hover .lookbook-card__media img {
      transform: scale(1.04);
    }

    .lookbook-card__body {
      padding: 20px;
      display: grid;
      gap: 10px;
    }

    .lookbook-card__body h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .lookbook-card__body p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .campaign-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
    }

    .campaign-card {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-xl);
      min-height: 560px;
      box-shadow: var(--shadow);
      background: #ece5da;
    }

    .campaign-card img {
      height: 100%;
      object-fit: cover;
    }

    .campaign-card__overlay {
      position: absolute;
      inset: auto 0 0 0;
      padding: 26px;
      background: linear-gradient(180deg, transparent 0%, rgba(16, 14, 13, 0.65) 100%);
      color: white;
      display: grid;
      gap: 8px;
    }

    .campaign-card__overlay small {
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.88;
    }

    .campaign-card__overlay strong {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      line-height: 1;
      font-weight: 600;
    }

    .campaign-card__overlay p {
      margin: 0;
      font-size: 14px;
      line-height: 1.7;
      opacity: 0.92;
    }

    .newsletter-card {
      overflow: visible;
    }

    .newsletter-card__body {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: end;
    }

    .newsletter-copy {
      display: grid;
      gap: 14px;
    }

    .newsletter-copy h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 3vw, 3rem);
      line-height: 1;
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    .newsletter-copy p {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
      max-width: 640px;
    }

    .newsletter-form {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .newsletter-form input {
      width: min(360px, 100%);
      height: 52px;
      padding: 0 18px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.74);
      outline: none;
      font-size: 14px;
    }

    .newsletter-form input:focus {
      border-color: var(--line-strong);
      box-shadow: 0 0 0 4px rgba(180, 157, 123, 0.08);
    }

    .site-footer {
      padding: 0 0 38px;
    }

    .footer-box {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: center;
      padding: 22px 0 0;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
    }

    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 80;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .modal.is-open {
      display: flex;
    }

    .modal__backdrop {
      position: absolute;
      inset: 0;
      background: rgba(12, 11, 10, 0.56);
      backdrop-filter: blur(10px);
    }

    .modal__panel {
      position: relative;
      width: min(1100px, 100%);
      max-height: min(88vh, 980px);
      overflow: auto;
      border-radius: 30px;
      background: #fbf8f3;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
      border: 1px solid rgba(255,255,255,0.8);
    }

    .modal__close {
      position: absolute;
      top: 18px;
      right: 18px;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(23, 22, 21, 0.08);
      font-size: 22px;
      line-height: 1;
      z-index: 2;
    }

    .modal__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 680px;
    }

    .modal__gallery {
      padding: 28px;
      display: grid;
      gap: 14px;
      background: #f2ece3;
    }

    .modal__gallery-main {
      border-radius: 22px;
      overflow: hidden;
      min-height: 440px;
      background: white;
    }

    .modal__gallery-main img {
      height: 100%;
      object-fit: cover;
    }

    .modal__gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .modal__thumb {
      border: 0;
      padding: 0;
      border-radius: 18px;
      overflow: hidden;
      background: white;
      aspect-ratio: 1 / 1.15;
    }

    .modal__thumb img {
      height: 100%;
      object-fit: cover;
    }

    .modal__body {
      padding: 34px 30px 30px;
      display: grid;
      align-content: start;
      gap: 18px;
    }

    .modal__badge {
      display: inline-flex;
      width: fit-content;
      padding: 8px 11px;
      border-radius: 999px;
      background: rgba(23, 22, 21, 0.06);
      color: var(--muted);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .modal__title {
      margin: 0;
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.4rem, 4vw, 4rem);
      line-height: 0.94;
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    .modal__subtitle,
    .modal__desc {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
    }

    .modal__price {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      font-size: 15px;
      align-items: center;
    }

    .modal__price strong {
      font-size: 18px;
    }

    .modal__detail-block {
      display: grid;
      gap: 8px;
      padding-top: 18px;
      border-top: 1px solid var(--line);
    }

    .modal__detail-block h4 {
      margin: 0;
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .modal__chips {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .modal__chips span {
      display: inline-flex;
      align-items: center;
      padding: 9px 12px;
      border-radius: 999px;
      background: rgba(23, 22, 21, 0.05);
      font-size: 13px;
      color: var(--text);
    }

    .modal__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding-top: 8px;
    }

    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 700ms ease, transform 700ms ease;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .media-fallback {
      display: none;
      width: 100%;
      height: 100%;
    }

    .media-fallback.is-visible {
      display: block;
    }

    .hidden {
      display: none !important;
    }

    @media (max-width: 1100px) {
      .hero__grid,
      .about-grid,
      .signature-grid,
      .philosophy-grid,
      .film-grid,
      .modal__content {
        grid-template-columns: 1fr;
      }

      .products-grid,
      .lookbook-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .campaign-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-card__body {
        grid-template-columns: 1fr;
      }

      .newsletter-form {
        justify-content: flex-start;
      }

      .hero__copy,
      .hero__visual {
        min-height: auto;
      }

      .visual-frame,
      .campaign-card {
        min-height: 480px;
      }
    }

    @media (max-width: 860px) {
      .nav__links,
      .nav__actions .btn-line {
        display: none;
      }

      .menu-toggle {
        display: inline-flex;
      }

      .mobile-panel {
        position: absolute;
        top: calc(100% + 10px);
        left: 20px;
        right: 20px;
        display: none;
        padding: 16px;
        border-radius: 24px;
        background: rgba(251, 248, 243, 0.96);
        border: 1px solid var(--line);
        box-shadow: 0 18px 40px rgba(0,0,0,0.08);
      }

      .mobile-panel.is-open {
        display: grid;
        gap: 8px;
      }

      .mobile-panel a {
        padding: 12px 14px;
        border-radius: 14px;
        color: var(--text);
        background: rgba(23,22,21,0.03);
        font-size: 14px;
      }

      .hero__meta,
      .about-card__stats {
        grid-template-columns: 1fr;
      }

      .signature-stack {
        grid-template-columns: 1fr;
      }

      .signature-stack__side {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: none;
      }

      .products-grid,
      .lookbook-grid {
        grid-template-columns: 1fr;
      }

      .modal__gallery-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .container {
        width: min(calc(100% - 28px), var(--container));
      }

      .section {
        padding: 84px 0;
      }

      .hero {
        padding: 24px 0 52px;
      }

      .hero__copy {
        padding: 24px;
      }

      .hero__floating {
        position: static;
        width: 100%;
        margin-top: 20px;
      }

      .visual-frame,
      .campaign-card,
      .signature-stack__main,
      .signature-stack__side {
        min-height: 320px;
      }

      .signature-stack__side {
        grid-template-columns: 1fr 1fr;
      }

      .modal {
        padding: 14px;
      }

      .modal__gallery,
      .modal__body {
        padding: 20px;
      }

      .footer-box {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <header class="site-header" id="site-header">
    <div class="container nav">
      <a href="#top" class="nav__brand" aria-label="Soumé 홈으로 이동">
        <img src="${ASSETS.logo}" alt="Soumé logo" />
        <span>Clean Beauty House</span>
      </a>

      <nav class="nav__links" aria-label="주요 메뉴">
        <a href="#about">About</a>
        <a href="#signature">Signature</a>
        <a href="#products">Products</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#film">Brand Film</a>
        <a href="#newsletter">Contact</a>
      </nav>

      <div class="nav__actions">
        <a class="btn btn-line" href="#newsletter">Contact</a>
        <a class="btn btn-dark" href="#products">Shop</a>
        <button class="menu-toggle" id="menu-toggle" aria-label="모바일 메뉴 열기" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </div>

    <div class="mobile-panel container" id="mobile-panel">
      <a href="#about">About</a>
      <a href="#signature">Signature</a>
      <a href="#products">Products</a>
      <a href="#lookbook">Lookbook</a>
      <a href="#film">Brand Film</a>
      <a href="#newsletter">Contact</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <div class="hero__top">
            <span class="hero__eyebrow">${SITE.heroEyebrow}</span>
            <h1 class="hero__title">
              ${SITE.heroTitleLine1}<br />
              ${SITE.heroTitleLine2}<br />
              ${SITE.heroTitleLine3}
            </h1>
            <p class="hero__description">${SITE.heroDescription}</p>

            <div class="hero__actions">
              <a class="btn btn-dark" href="#signature">${SITE.heroPrimaryCta}</a>
              <a class="btn btn-light" href="#products">${SITE.heroSecondaryCta}</a>
            </div>
          </div>

          <div class="hero__meta">
            <div class="hero__meta-item">
              <span>Signature</span>
              <strong>Ocean Breeze Body Lotion Spray</strong>
            </div>
            <div class="hero__meta-item">
              <span>Texture</span>
              <strong>Light spray, soft moisture, refined finish</strong>
            </div>
            <div class="hero__meta-item">
              <span>Mood</span>
              <strong>Quiet luxury, clean air, editorial softness</strong>
            </div>
          </div>
        </div>

        <div class="hero__visual">
          <img src="${ASSETS.heroMain}" alt="Soumé hero visual" />
          <div class="hero__floating">
            <small>Featured Essence</small>
            <strong>Designed to remain softly, not loudly.</strong>
            <p>브랜드의 첫 인상을 강하게 밀어붙이기보다, 오래 남는 질감과 공기감을 중심으로 설계했습니다.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container about-grid">
        <div class="about-card reveal">
          <div class="about-card__body">
            <span class="section-label">${SITE.aboutEyebrow}</span>
            <div class="section-head" style="margin: 14px 0 0;">
              <h2>${SITE.aboutTitle}</h2>
              <p>${SITE.aboutDescription}</p>
            </div>

            <div class="about-card__stats">
              <div>
                <span>Keyword</span>
                <strong>Quiet luxury</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Texture + mood</strong>
              </div>
              <div>
                <span>Routine</span>
                <strong>Daily editorial care</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="visual-frame reveal">
          <img src="${ASSETS.editorialMain}" alt="Soumé editorial visual" />
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head reveal">
          <span class="section-label">${SITE.signatureEyebrow}</span>
          <h2>${SITE.signatureTitle}</h2>
          <p>${SITE.signatureDescription}</p>
        </div>

        <div class="signature-grid">
          <div class="signature-card reveal">
            <div class="signature-card__body">
              <span class="section-kicker">Key Product</span>
              <h3>Editorial product composition for everyday ritual</h3>
              <p>
                오션 브리즈는 제품 자체의 성능뿐 아니라 사용하는 순간의 장면을 함께 설계합니다.
                제품이 보이는 방식, 손에 쥐는 방식, 사용 후 남는 인상까지 하나의 루틴 경험으로 연결합니다.
              </p>

              <div class="signature-stack">
                <div class="signature-stack__main">
                  <img src="${ASSETS.product01}" alt="Soumé product main" />
                </div>
                <div class="signature-stack__side">
                  <div>
                    <img src="${ASSETS.product02}" alt="Soumé product detail 1" />
                  </div>
                  <div>
                    <img src="${ASSETS.product03}" alt="Soumé product detail 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="visual-frame reveal">
            <img src="${ASSETS.editorialMain}" alt="Soumé signature editorial" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head reveal">
          <span class="section-label">${SITE.productsEyebrow}</span>
          <h2>${SITE.productsTitle}</h2>
          <p>
            상세 모달, 구매 버튼, 문의 버튼까지 포함한 운영형 제품 카드입니다.
            실제 구매 링크만 교체하면 바로 사용할 수 있도록 구성했습니다.
          </p>
        </div>

        <div class="products-grid">
          ${renderProductCards()}
        </div>
      </div>
    </section>

    <section class="section" id="campaign">
      <div class="container">
        <div class="section-head reveal">
          <span class="section-label">Campaign</span>
          <h2>Product and presence in one frame</h2>
          <p>
            제품과 무드, 그리고 인물의 결을 한 장면 안에 정리하는 Soumé식 캠페인 프레임입니다.
          </p>
        </div>

        <div class="campaign-grid">
          <article class="campaign-card reveal">
            <img src="${ASSETS.campaign01}" alt="Soumé campaign 01" />
            <div class="campaign-card__overlay">
              <small>Campaign 01</small>
              <strong>Soft hold, clear impression</strong>
              <p>절제된 배경 위에서 제품이 얼굴 옆으로 자연스럽게 연결되는 브랜드 컷.</p>
            </div>
          </article>

          <article class="campaign-card reveal">
            <img src="${ASSETS.campaign02}" alt="Soumé campaign 02" />
            <div class="campaign-card__overlay">
              <small>Campaign 02</small>
              <strong>Clean styling, lasting mood</strong>
              <p>과장 없는 스타일링과 정제된 실루엣으로 완성하는 에디토리얼 무드.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="lookbook">
      <div class="container">
        <div class="section-head reveal">
          <span class="section-label">${SITE.lookbookEyebrow}</span>
          <h2>${SITE.lookbookTitle}</h2>
          <p>
            룩북형 추가 섹션입니다. 이미지만 교체하면 같은 레이아웃 안에서 무드 업데이트가 가능합니다.
          </p>
        </div>

        <div class="lookbook-grid">
          ${renderLookbookCards()}
        </div>
      </div>
    </section>

    <section class="section" id="philosophy">
      <div class="container philosophy-grid">
        <div class="visual-frame reveal">
          <img src="${ASSETS.heroMain}" alt="Soumé philosophy visual" />
        </div>

        <div class="philosophy-card reveal">
          <div class="philosophy-card__body">
            <span class="section-label">${SITE.philosophyEyebrow}</span>
            <h3>${SITE.philosophyTitle}</h3>
            <p>${SITE.philosophyDescription}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="film">
      <div class="container film-grid">
        <div class="film-card reveal">
          <div class="film-card__body">
            <span class="section-label">${SITE.filmEyebrow}</span>
            <h3>${FILM.title}</h3>
            <p>${FILM.description}</p>
            <div class="hero__actions" style="margin-top: 22px;">
              <a class="btn btn-dark" href="${FILM.externalLink}">브랜드 문의</a>
              <a class="btn btn-line" href="#lookbook">룩북 이어보기</a>
            </div>
          </div>
        </div>

        <div class="visual-frame reveal" id="film-frame">
          <video
            id="brand-film-video"
            controls
            playsinline
            preload="metadata"
            poster="${FILM.poster}"
            aria-label="Soumé brand film"
          >
            <source src="${FILM.video}" type="video/mp4" />
          </video>
          <img
            id="brand-film-poster"
            class="media-fallback"
            src="${FILM.poster}"
            alt="Soumé brand film poster"
          />
        </div>
      </div>
    </section>

    <section class="section" id="newsletter">
      <div class="container">
        <div class="newsletter-card reveal">
          <div class="newsletter-card__body">
            <div class="newsletter-copy">
              <span class="section-label">${SITE.newsletterEyebrow}</span>
              <h3>${SITE.newsletterTitle}</h3>
              <p>${SITE.newsletterDescription}</p>
            </div>

            <form class="newsletter-form" id="newsletter-form">
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="이메일 주소를 입력하세요"
                autocomplete="email"
                required
              />
              <button class="btn btn-dark" type="submit">구독하기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-box">
      <div>${SITE.footerText}</div>
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#film">Brand Film</a>
      </div>
    </div>
  </footer>

  <div class="modal" id="product-modal" aria-hidden="true">
    <div class="modal__backdrop" data-modal-close></div>
    <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal__close" id="modal-close" aria-label="모달 닫기">×</button>

      <div class="modal__content">
        <div class="modal__gallery">
          <div class="modal__gallery-main">
            <img id="modal-main-image" src="" alt="" />
          </div>
          <div class="modal__gallery-grid" id="modal-gallery-grid"></div>
        </div>

        <div class="modal__body">
          <span class="modal__badge" id="modal-badge"></span>
          <h3 class="modal__title" id="modal-title"></h3>
          <p class="modal__subtitle" id="modal-subtitle"></p>

          <div class="modal__price">
            <strong id="modal-price"></strong>
            <span id="modal-volume"></span>
          </div>

          <p class="modal__desc" id="modal-description"></p>

          <div class="modal__detail-block">
            <h4>Fragrance Notes</h4>
            <div class="modal__chips" id="modal-notes"></div>
          </div>

          <div class="modal__detail-block">
            <h4>Key Ingredients</h4>
            <div class="modal__chips" id="modal-ingredients"></div>
          </div>

          <div class="modal__actions">
            <a class="btn btn-dark" id="modal-buy-link" href="#" target="_blank" rel="noreferrer">지금 구매하기</a>
            <a class="btn btn-line" id="modal-detail-link" href="#">섹션으로 이동</a>
            <a class="btn btn-line" id="modal-inquiry-link" href="#">문의하기</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const PRODUCT_DATA = ${productDataJson};

    const header = document.getElementById('site-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobilePanel = document.getElementById('mobile-panel');
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const detailButtons = document.querySelectorAll('.product-detail-btn');

    function setHeaderState() {
      if (!header) return;
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    function setupReveal() {
      const items = document.querySelectorAll('.reveal');
      if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) {
          el.classList.add('is-visible');
        });
        return;
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14 });

      items.forEach(function (el) {
        observer.observe(el);
      });
    }

    function setupSmoothScroll() {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(function (link) {
        link.addEventListener('click', function (event) {
          const href = link.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });

          if (mobilePanel && mobilePanel.classList.contains('is-open')) {
            mobilePanel.classList.remove('is-open');
            if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }

    function setupMobileMenu() {
      if (!menuToggle || !mobilePanel) return;

      menuToggle.addEventListener('click', function () {
        const isOpen = mobilePanel.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    function fillChips(container, items) {
      container.innerHTML = '';
      items.forEach(function (item) {
        const chip = document.createElement('span');
        chip.textContent = item;
        container.appendChild(chip);
      });
    }

    function buildGallery(images, title) {
      const grid = document.getElementById('modal-gallery-grid');
      const mainImage = document.getElementById('modal-main-image');

      if (!grid || !mainImage) return;

      grid.innerHTML = '';
      images.forEach(function (src, index) {
        const btn = document.createElement('button');
        btn.className = 'modal__thumb';
        btn.type = 'button';
        btn.setAttribute('aria-label', title + ' 이미지 ' + (index + 1));

        const img = document.createElement('img');
        img.src = src;
        img.alt = title + ' gallery image ' + (index + 1);

        btn.appendChild(img);
        btn.addEventListener('click', function () {
          mainImage.src = src;
          mainImage.alt = title;
        });

        grid.appendChild(btn);
      });
    }

    function openProductModal(productId) {
      const product = PRODUCT_DATA.find(function (item) {
        return item.id === productId;
      });

      if (!product || !modal) return;

      const badge = document.getElementById('modal-badge');
      const title = document.getElementById('modal-title');
      const subtitle = document.getElementById('modal-subtitle');
      const price = document.getElementById('modal-price');
      const volume = document.getElementById('modal-volume');
      const desc = document.getElementById('modal-description');
      const mainImage = document.getElementById('modal-main-image');
      const notes = document.getElementById('modal-notes');
      const ingredients = document.getElementById('modal-ingredients');
      const buyLink = document.getElementById('modal-buy-link');
      const detailLink = document.getElementById('modal-detail-link');
      const inquiryLink = document.getElementById('modal-inquiry-link');

      if (badge) badge.textContent = product.badge;
      if (title) title.textContent = product.name;
      if (subtitle) subtitle.textContent = product.subtitle;
      if (price) price.textContent = product.price;
      if (volume) volume.textContent = product.volume;
      if (desc) desc.textContent = product.description;
      if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
      }
      if (notes) fillChips(notes, product.notes || []);
      if (ingredients) fillChips(ingredients, product.ingredients || []);
      if (buyLink) buyLink.setAttribute('href', product.buyLink || '#');
      if (detailLink) detailLink.setAttribute('href', product.detailLink || '#products');
      if (inquiryLink) inquiryLink.setAttribute('href', product.inquiryLink || '#newsletter');

      buildGallery(product.gallery || [product.image], product.name);

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function setupModal() {
      detailButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const productId = btn.getAttribute('data-product-id');
          if (productId) openProductModal(productId);
        });
      });

      if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
      }

      document.querySelectorAll('[data-modal-close]').forEach(function (el) {
        el.addEventListener('click', closeProductModal);
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeProductModal();
      });
    }

    function setupNewsletter() {
      const form = document.getElementById('newsletter-form');
      const input = document.getElementById('newsletter-email');

      if (!form || !input) return;

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;
        window.alert('뉴스레터 구독 UI가 연결되었습니다. 실제 메일 수집 API만 연결하면 운영 가능합니다.\\n입력값: ' + value);
        form.reset();
      });
    }

    function setupFilmFallback() {
      const video = document.getElementById('brand-film-video');
      const poster = document.getElementById('brand-film-poster');

      if (!video || !poster) return;

      function showPosterFallback() {
        video.classList.add('hidden');
        poster.classList.add('is-visible');
      }

      video.addEventListener('error', showPosterFallback);

      const source = video.querySelector('source');
      if (!source || !source.getAttribute('src')) {
        showPosterFallback();
      }
    }

    function setupImage
  </script>
</body>
</html>`)
})

export default app
