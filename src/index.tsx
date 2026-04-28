import { Hono } from 'hono'

const app = new Hono()

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Quiet Luxury Body Ritual',
  description:
    'Soumé는 감도 높은 비주얼과 간결한 구매 동선을 결합한 모던 럭셔리 바디 리추얼 브랜드입니다.',
  heroEyebrow: 'QUIET LUXURY BODY RITUAL',
  heroTitle1: '두 가지 시그니처',
  heroTitle2: '하루의 무드를',
  heroTitle3: '더 선명하게',
  heroDescription:
    'Ocean Breeze는 맑고 산뜻하게, Morning Haze는 부드럽고 차분하게. 취향은 달라도 첫 선택은 간단해야 하니까.',
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
}

const HERO_SLIDES = [
  {
    image: ASSETS.heroMain,
    eyebrow: 'Main Campaign',
    title: 'Quiet Luxury',
    desc: '과하지 않지만 오래 남는 분위기. Soumé의 첫인상을 가장 선명하게 보여주는 장면.',
  },
  {
    image: ASSETS.editorialMain,
    eyebrow: 'Editorial Mood',
    title: 'Soft Precision',
    desc: '정제된 피부 표현과 부드러운 무드로 브랜드의 결을 자연스럽게 전달합니다.',
  },
  {
    image: ASSETS.campaign01,
    eyebrow: 'Ocean Breeze',
    title: 'Fresh Signature',
    desc: '맑고 산뜻한 방향의 시그니처 무드. 가볍고 깨끗한 첫 선택에 어울립니다.',
  },
  {
    image: ASSETS.campaign02,
    eyebrow: 'Morning Haze',
    title: 'Soft Signature',
    desc: '부드럽고 차분한 방향의 시그니처 무드. 잔잔하게 남는 인상을 원할 때 잘 어울립니다.',
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
      'Soumé의 대표 시그니처. 첫 사용감부터 가볍고 깨끗한 무드가 느껴지며, 샤워 후 정리된 분위기를 더하고 싶을 때 가장 직관적으로 선택하기 좋은 제품입니다.',
    features: ['첫 구매 추천', '맑고 산뜻한 무드', '데일리 사용 적합'],
    notes: ['Fresh Air', 'Soft Breeze', 'Clean Finish'],
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
      '조용하고 부드러운 인상을 선호하는 고객에게 잘 어울리는 두 번째 시그니처. 은은하게 오래 남는 무드와 차분한 감도로 선물용으로도 잘 어울립니다.',
    features: ['차분한 무드', '선물용 추천', '부드러운 인상'],
    notes: ['Soft Cotton', 'Morning Light', 'Calm Skin Mood'],
    buyLink: LINKS.smartstore,
  },
]

const REVIEWS = [
  {
    title: '첫 구매가 어렵지 않았어요',
    body: '제품이 많지 않아서 무엇을 먼저 사야 할지 바로 이해됐고, Ocean Breeze부터 시작하기 좋았어요.',
  },
  {
    title: 'Morning Haze가 생각보다 더 고급스러워요',
    body: '강하지 않고 차분하게 남는 무드가 좋아서 데일리로 쓰기 편하고 선물용으로도 잘 어울릴 것 같았어요.',
  },
  {
    title: '브랜드 분위기와 제품 인상이 잘 이어져요',
    body: '홈페이지에서 느낀 무드가 제품 이미지와 자연스럽게 연결돼서 구매할 때 신뢰감이 들었어요.',
  },
]

const SIGNATURES = [
  {
    image: ASSETS.signatureMain,
    number: '01',
    title: 'Signature Main',
    body: '브랜드의 첫인상을 정리하는 메인 컷',
  },
  {
    image: ASSETS.signatureOpen,
    number: '02',
    title: 'Signature Open',
    body: '제품 경험과 사용 장면을 자연스럽게 연결하는 이미지',
  },
  {
    image: ASSETS.signatureDetail,
    number: '03',
    title: 'Signature Detail',
    body: '텍스처와 디테일을 보여줘 구매 전 신뢰감을 높이는 컷',
  },
]

const LOOKBOOK = [
  {
    image: ASSETS.lookbook01,
    title: 'Quiet Skin, Quiet Mood',
    body: '첫 인상을 정리하는 차분한 톤의 룩북 컷',
  },
  {
    image: ASSETS.lookbook02,
    title: 'Editorial Softness',
    body: '피부 위 질감과 조도를 부드럽게 보여주는 에디토리얼 장면',
  },
  {
    image: ASSETS.lookbook03,
    title: 'Lasting Impression',
    body: '브랜드 홈페이지와 상세페이지를 자연스럽게 잇는 무드 컷',
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

const safeJson = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c')

const renderHeroSlides = () =>
  HERO_SLIDES.map(
    (slide, index) => `
      <div class="hero-slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}">
        <img src="${slide.image}" alt="${slide.title}" loading="${index === 0 ? 'eager' : 'lazy'}" />
      </div>
    `,
  ).join('')

const renderHeroDots = () =>
  HERO_SLIDES.map(
    (_, index) => `
      <button class="hero-dot ${index === 0 ? 'is-active' : ''}" data-dot="${index}" aria-label="slide ${index + 1}"></button>
    `,
  ).join('')

const renderProducts = () =>
  PRODUCTS.map(
    (product) => `
      <article class="product-card reveal">
        <div class="product-card__media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-card__badge">${product.badge}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__meta">
            <span>${product.volume}</span>
            <span>${product.price}</span>
          </div>
          <h3>${product.name}</h3>
          <p class="product-card__subtitle">${product.subtitle}</p>
          <div class="product-card__actions">
            <button class="btn btn-dark js-open-product" data-product-id="${product.id}" type="button">상세 보기</button>
            <a class="btn btn-line" href="${product.buyLink}" target="_blank" rel="noreferrer">스마트스토어 구매</a>
          </div>
        </div>
      </article>
    `,
  ).join('')

const renderReviews = () =>
  REVIEWS.map(
    (review) => `
      <article class="review-card reveal">
        <div class="review-card__stars">★★★★★</div>
        <h3>${review.title}</h3>
        <p>${review.body}</p>
      </article>
    `,
  ).join('')

const renderSignatures = () =>
  SIGNATURES.map(
    (item) => `
      <article class="signature-card reveal">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="signature-card__copy">
          <p class="eyebrow">${item.number}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      </article>
    `,
  ).join('')

const renderLookbooks = () =>
  LOOKBOOK.map(
    (item) => `
      <article class="lookbook-card reveal">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="lookbook-card__overlay">
          <p class="eyebrow">LOOKBOOK</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      </article>
    `,
  ).join('')

const renderFaqs = () =>
  FAQS.map(
    (item) => `
      <details class="faq-item reveal">
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `,
  ).join('')

app.get('/', (c) => {
  const heroSlidesJson = safeJson(HERO_SLIDES)
  const productsJson = safeJson(PRODUCTS)

  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${SITE.title}</title>
  <meta name="description" content="${SITE.description}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #f7f1ea;
      --bg-soft: #fcf8f4;
      --card: rgba(255,255,255,0.84);
      --line: rgba(32, 24, 18, 0.08);
      --line-strong: rgba(32, 24, 18, 0.16);
      --text: #1f1a17;
      --muted: #6f635a;
      --accent: #b7926e;
      --accent-deep: #8f6b49;
      --dark: #171311;
      --gold-grad: linear-gradient(135deg, #c9a57c 0%, #8f6b49 100%);
      --green-grad: linear-gradient(135deg, #03c75a 0%, #00b050 100%);
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --shadow: 0 24px 70px rgba(31, 22, 16, 0.08);
      --container: 1200px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      overflow-x: hidden;
      color: var(--text);
      font-family: 'Inter', system-ui, sans-serif;
      background:
        radial-gradient(circle at top left, rgba(183,146,110,0.14), transparent 28%),
        linear-gradient(180deg, #f9f5f0 0%, #f5efe8 48%, #f8f3ee 100%);
    }

    img { display: block; width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    .container { width: min(calc(100% - 32px), var(--container)); margin: 0 auto; }
    section[id] { scroll-margin-top: 96px; }

    .section { padding: 96px 0; }

    .eyebrow {
      margin: 0 0 10px;
      font-size: 11px;
      line-height: 1.2;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent-deep);
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 18px;
      margin-bottom: 28px;
      flex-wrap: wrap;
    }

    .section-head h2,
    .hero-copy h1,
    .split-copy h3,
    .review-banner h2,
    .purchase-panel h2,
    .product-modal__title,
    .smart-popup h3,
    .hero-stage__card h3 {
      font-family: 'Cormorant Garamond', serif;
      letter-spacing: -0.03em;
    }

    .section-head h2 {
      margin: 0;
      font-size: clamp(30px, 4.4vw, 54px);
      line-height: 0.98;
    }

    .section-head p {
      margin: 0;
      max-width: 560px;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 50px;
      padding: 13px 20px;
      border-radius: 999px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
      white-space: nowrap;
    }

    .btn:hover { transform: translateY(-1px); }

    .btn-gold {
      background: var(--gold-grad);
      color: #fff;
      box-shadow: 0 14px 34px rgba(143, 107, 73, 0.22);
    }

    .btn-dark {
      background: var(--dark);
      color: #fff;
    }

    .btn-line {
      background: rgba(255,255,255,0.58);
      border-color: var(--line-strong);
      color: var(--text);
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 40;
      backdrop-filter: blur(18px);
      background: rgba(249, 245, 240, 0.76);
      border-bottom: 1px solid rgba(31, 26, 23, 0.06);
    }

    .site-header__inner {
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .site-brand img {
      width: 116px;
      height: auto;
    }

    .site-nav {
      display: flex;
      gap: 20px;
      color: var(--muted);
      font-size: 13px;
    }

    .site-nav a:hover { color: var(--text); }

    .site-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .hero {
      padding: 24px 0 60px;
    }

    .hero-shell {
      display: grid;
      grid-template-columns: 0.94fr 1.06fr;
      gap: 22px;
      align-items: stretch;
    }

    .hero-copy,
    .hero-stage,
    .glass-card,
    .split-copy,
    .review-banner,
    .purchase-panel {
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .hero-copy {
      min-height: 640px;
      padding: clamp(24px, 3.6vw, 48px);
      background: rgba(255,255,255,0.78);
      border: 1px solid rgba(255,255,255,0.68);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-copy h1 {
      margin: 0 0 14px;
      font-size: clamp(42px, 6vw, 82px);
      line-height: 0.94;
      letter-spacing: -0.04em;
    }

    .hero-description {
      max-width: 44ch;
      margin: 0;
      font-size: 15px;
      line-height: 1.75;
      color: var(--muted);
    }

    .hero-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 24px;
    }

    .hero-proof {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 28px;
    }

    .hero-proof__item {
      padding: 18px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.54);
    }

    .hero-proof__item strong {
      display: block;
      margin-bottom: 6px;
      font-size: 18px;
    }

    .hero-proof__item span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.55;
    }

    .hero-stage {
      position: relative;
      min-height: 640px;
      background: #ddd;
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity .8s ease;
    }

    .hero-slide.is-active { opacity: 1; }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 18%;
    }

    .hero-stage__overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      align-items: end;
      padding: 20px;
      background: linear-gradient(180deg, rgba(20,16,14,0.04) 0%, rgba(20,16,14,0.36) 100%);
    }

    .hero-stage__card {
      max-width: 320px;
      padding: 18px 18px 16px;
      border-radius: 20px;
      background: rgba(255,255,255,0.16);
      border: 1px solid rgba(255,255,255,0.24);
      backdrop-filter: blur(12px);
      color: #fff;
    }

    .hero-stage__card h3 {
      margin: 4px 0 6px;
      font-size: 22px;
      line-height: 1;
    }

    .hero-stage__card p {
      margin: 0;
      font-size: 13px;
      line-height: 1.55;
      color: rgba(255,255,255,0.88);
    }

    .hero-dots {
      display: flex;
      gap: 7px;
      margin-top: 14px;
    }

    .hero-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      border: 0;
      cursor: pointer;
      background: rgba(255,255,255,0.42);
    }

    .hero-dot.is-active {
      background: #fff;
      transform: scale(1.08);
    }

    .trust-strip {
      margin-top: 18px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .trust-box {
      padding: 18px;
      border-radius: 20px;
      background: rgba(255,255,255,0.68);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .trust-box strong {
      display: block;
      margin-bottom: 6px;
      font-size: 15px;
    }

    .trust-box span {
      font-size: 13px;
      line-height: 1.6;
      color: var(--muted);
    }

    .split-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      align-items: stretch;
    }

    .glass-card {
      background: rgba(255,255,255,0.78);
      border: 1px solid var(--line);
    }

    .split-visual img {
      width: 100%;
      height: 100%;
      min-height: 520px;
      object-fit: cover;
      object-position: center 18%;
    }

    .split-copy {
      padding: 36px;
      background: rgba(255,255,255,0.82);
      border: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .split-copy h3 {
      margin: 0 0 12px;
      font-size: clamp(30px, 4vw, 52px);
      line-height: 0.98;
    }

    .split-copy p {
      margin: 0 0 20px;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .products-grid,
    .reviews-grid,
    .signature-grid,
    .lookbook-grid {
      display: grid;
      gap: 18px;
    }

    .products-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .product-card {
      background: rgba(255,255,255,0.82);
      border: 1px solid var(--line);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .product-card__media {
      position: relative;
      aspect-ratio: 1 / 1.08;
      overflow: hidden;
    }

    .product-card__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      transition: transform .45s ease;
    }

    .product-card:hover .product-card__media img {
      transform: scale(1.03);
    }

    .product-card__badge {
      position: absolute;
      top: 16px;
      left: 16px;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,0.94);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .product-card__body {
      padding: 22px;
    }

    .product-card__meta {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
      color: var(--muted);
      font-size: 13px;
    }

    .product-card h3 {
      margin: 0 0 8px;
      font-size: clamp(26px, 2.6vw, 32px);
      line-height: 1;
      font-family: 'Cormorant Garamond', serif;
    }

    .product-card__subtitle {
      margin: 0 0 18px;
      min-height: 48px;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .product-card__actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .inline-cta {
      margin-top: 18px;
      padding: 20px 22px;
      border-radius: 22px;
      background: linear-gradient(135deg, rgba(201,165,124,0.14), rgba(255,255,255,0.86));
      border: 1px solid rgba(143,107,73,0.14);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .inline-cta strong {
      display: block;
      margin-bottom: 4px;
      font-size: 16px;
    }

    .inline-cta span {
      color: var(--muted);
      line-height: 1.65;
      font-size: 14px;
    }

    .review-banner {
      padding: 28px;
      margin-bottom: 18px;
      background: linear-gradient(135deg, rgba(23,19,17,0.96), rgba(58,42,28,0.94));
      color: #fff;
    }

    .review-banner h2 {
      margin: 8px 0 10px;
      font-size: clamp(30px, 4vw, 52px);
      line-height: 0.98;
    }

    .review-banner p {
      margin: 0;
      max-width: 720px;
      color: rgba(255,255,255,0.84);
      line-height: 1.75;
      font-size: 14px;
    }

    .reviews-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .review-card {
      padding: 24px;
      border-radius: 24px;
      background: rgba(255,255,255,0.82);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .review-card__stars {
      margin-bottom: 14px;
      color: #b98c50;
      letter-spacing: 0.12em;
      font-size: 13px;
    }

    .review-card h3 {
      margin: 0 0 10px;
      font-size: 22px;
      line-height: 1.2;
      font-family: 'Cormorant Garamond', serif;
    }

    .review-card p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .signature-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .signature-card {
      position: relative;
      min-height: 500px;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .signature-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 18%;
    }

    .signature-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.36));
    }

    .signature-card__copy {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      z-index: 2;
      color: #fff;
    }

    .signature-card__copy h3 {
      margin: 6px 0 8px;
      font-size: 26px;
      font-family: 'Cormorant Garamond', serif;
    }

    .signature-card__copy p {
      margin: 0;
      line-height: 1.7;
      color: rgba(255,255,255,0.84);
      font-size: 14px;
    }

    .lookbook-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .lookbook-card {
      position: relative;
      min-height: 420px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .lookbook-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 18%;
    }

    .lookbook-card__overlay {
      position: absolute;
      inset: auto 0 0 0;
      padding: 22px;
      color: #fff;
      background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.62) 100%);
    }

    .lookbook-card__overlay h3 {
      margin: 6px 0 8px;
      font-size: 24px;
      font-family: 'Cormorant Garamond', serif;
    }

    .lookbook-card__overlay p {
      margin: 0;
      line-height: 1.7;
      color: rgba(255,255,255,0.84);
      font-size: 14px;
    }

    .purchase-layout {
      display: grid;
      grid-template-columns: 1.06fr 0.94fr;
      gap: 18px;
    }

    .purchase-panel {
      padding: 36px;
      background: rgba(255,255,255,0.82);
      border: 1px solid var(--line);
    }

    .purchase-panel h2 {
      margin: 8px 0 12px;
      font-size: clamp(30px, 4vw, 52px);
      line-height: 0.98;
    }

    .purchase-panel p {
      margin: 0 0 20px;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .purchase-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .purchase-checks {
      display: grid;
      gap: 8px;
      margin-top: 18px;
      color: var(--muted);
      font-size: 14px;
    }

    .faq-list {
      display: grid;
      gap: 12px;
    }

    .faq-item {
      padding: 20px 22px;
      border-radius: 20px;
      background: rgba(255,255,255,0.82);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .faq-item summary {
      list-style: none;
      cursor: pointer;
      font-weight: 800;
      line-height: 1.5;
      font-size: 14px;
    }

    .faq-item summary::-webkit-details-marker {
      display: none;
    }

    .faq-item p {
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .site-footer {
      padding: 32px 0 110px;
      color: var(--muted);
    }

    .site-footer__inner {
      padding-top: 22px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
      font-size: 14px;
    }

    .smart-fab {
      position: fixed;
      right: 24px;
      bottom: 28px;
      z-index: 56;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px 14px 14px;
      border-radius: 999px;
      background: var(--green-grad);
      color: #fff;
      box-shadow: 0 18px 40px rgba(3,199,90,0.28);
      font-weight: 800;
      transition: transform .24s ease, box-shadow .24s ease;
    }

    .smart-fab:hover {
      transform: translateY(-2px);
      box-shadow: 0 24px 50px rgba(3,199,90,0.34);
    }

    .smart-fab__icon {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(255,255,255,0.18);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
      font-size: 18px;
      position: relative;
      z-index: 1;
    }

    .smart-fab__text {
      display: flex;
      flex-direction: column;
      line-height: 1.08;
      position: relative;
      z-index: 1;
    }

    .smart-fab__text small {
      font-size: 11px;
      opacity: 0.9;
      margin-bottom: 4px;
    }

    .smart-fab__pulse {
      position: absolute;
      inset: -6px;
      border-radius: 999px;
      border: 1px solid rgba(3,199,90,0.36);
      animation: smartPulse 2.2s infinite;
      pointer-events: none;
    }

    @keyframes smartPulse {
      0% { transform: scale(0.96); opacity: 0.82; }
      70% { transform: scale(1.08); opacity: 0; }
      100% { transform: scale(1.08); opacity: 0; }
    }

    .smart-popup {
      position: fixed;
      right: 24px;
      bottom: 108px;
      z-index: 57;
      width: min(340px, calc(100vw - 28px));
      padding: 18px 18px 16px;
      border-radius: 22px;
      background: rgba(255,255,255,0.96);
      border: 1px solid rgba(31,26,23,0.08);
      box-shadow: 0 24px 60px rgba(20,16,14,0.14);
      backdrop-filter: blur(14px);
      opacity: 0;
      transform: translateY(12px);
      pointer-events: none;
      transition: opacity .28s ease, transform .28s ease;
    }

    .smart-popup.is-visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .smart-popup__close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 34px;
      height: 34px;
      border: 0;
      border-radius: 50%;
      background: rgba(20,16,14,0.06);
      cursor: pointer;
    }

    .smart-popup__eyebrow {
      margin: 0 0 8px;
      font-size: 11px;
      font-weight: 800;
      color: #03c75a;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .smart-popup h3 {
      margin: 0 0 8px;
      font-size: 28px;
      line-height: 0.98;
    }

    .smart-popup p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 14px;
    }

    .smart-popup__actions {
      display: flex;
      gap: 10px;
      margin-top: 14px;
      flex-wrap: wrap;
    }

    .sticky-buy {
      display: none;
    }

    .modal {
      position: fixed;
      inset: 0;
      z-index: 70;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal.is-open { display: flex; }

    .modal__backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.48);
    }

    .modal__panel {
      position: relative;
      z-index: 1;
      width: min(920px, 100%);
      max-height: calc(100vh - 40px);
      overflow: auto;
      border-radius: 28px;
      background: #fff;
      box-shadow: 0 40px 100px rgba(0,0,0,0.24);
    }

    .modal__close {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 2;
      width: 42px;
      height: 42px;
      border: 0;
      border-radius: 50%;
      background: rgba(20,16,14,0.08);
      cursor: pointer;
    }

    .product-modal {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .product-modal__media img {
      width: 100%;
      height: 100%;
      min-height: 520px;
      object-fit: cover;
      object-position: center 18%;
    }

    .product-modal__body {
      padding: 34px 30px 30px;
    }

    .product-modal__eyebrow {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent-deep);
    }

    .product-modal__title {
      margin: 10px 0 10px;
      font-size: 44px;
      line-height: 0.95;
    }

    .product-modal__price {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 18px;
      color: var(--muted);
      font-size: 14px;
    }

    .product-modal__desc {
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .chip-label {
      margin: 0 0 10px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
    }

    .chip-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .chip {
      padding: 9px 13px;
      border-radius: 999px;
      background: #f5efe7;
      color: #6b5948;
      font-size: 13px;
    }

    .modal-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 14px;
    }

    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity .7s ease, transform .7s ease;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 1120px) {
      .hero-shell,
      .split-layout,
      .purchase-layout,
      .product-modal {
        grid-template-columns: 1fr;
      }

      .products-grid,
      .reviews-grid,
      .signature-grid,
      .lookbook-grid,
      .trust-strip {
        grid-template-columns: repeat(2, 1fr);
      }

      .hero-copy,
      .hero-stage {
        min-height: auto;
      }

      .hero-stage {
        min-height: 560px;
      }

      .split-visual img,
      .product-modal__media img {
        min-height: 360px;
      }
    }

    @media (max-width: 760px) {
      .site-nav {
        display: none;
      }

      .site-actions .btn-line {
        display: none;
      }

      .site-header__inner {
        height: 68px;
      }

      .site-brand img {
        width: 96px;
      }

      .section {
        padding: 76px 0;
      }

      .hero {
        padding: 16px 0 44px;
      }

      .hero-shell {
        display: flex;
        flex-direction: column;
      }

      .hero-stage {
        order: 1;
        min-height: auto;
        aspect-ratio: 4 / 5;
        border-radius: 26px;
        overflow: hidden;
      }

      .hero-copy {
        order: 2;
        min-height: auto;
        padding: 24px;
        border-radius: 26px;
      }

      .hero-copy h1 {
        font-size: 36px;
        line-height: 1.02;
        margin-bottom: 12px;
      }

      .hero-description {
        font-size: 14px;
        line-height: 1.7;
      }

      .hero-actions,
      .purchase-actions,
      .product-card__actions {
        flex-direction: column;
      }

      .hero-actions .btn,
      .purchase-actions .btn,
      .product-card__actions .btn {
        width: 100%;
      }

      .hero-proof,
      .trust-strip,
      .products-grid,
      .reviews-grid,
      .signature-grid,
      .lookbook-grid {
        grid-template-columns: 1fr;
      }

      .hero-slide img {
        object-position: center 14%;
      }

      .hero-stage__overlay {
        padding: 12px;
      }

      .hero-stage__card {
        max-width: 250px;
        padding: 14px 14px 12px;
        border-radius: 18px;
      }

      .hero-stage__card h3 {
        font-size: 18px;
      }

      .hero-stage__card p {
        font-size: 12px;
        line-height: 1.5;
      }

      .section-head {
        margin-bottom: 22px;
      }

      .section-head h2 {
        font-size: 30px;
      }

      .split-copy,
      .purchase-panel,
      .review-banner {
        padding: 24px;
      }

      .split-visual img,
      .signature-card,
      .lookbook-card {
        min-height: 380px;
      }

      .smart-fab,
      .smart-popup {
        display: none !important;
      }

      .sticky-buy {
        position: fixed;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        width: calc(100% - 16px);
        z-index: 60;
        padding: 10px;
        border-radius: 22px;
        background: rgba(23,19,17,0.92);
        box-shadow: 0 18px 46px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        gap: 10px;
        backdrop-filter: blur(16px);
      }

      .sticky-buy .btn {
        width: 100%;
      }

      .product-modal__title {
        font-size: 36px;
      }

      .product-modal__body {
        padding: 28px 22px 24px;
      }

      .site-footer {
        padding-bottom: 130px;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="#top" class="site-brand" aria-label="${SITE.brand} home">
        <img src="${ASSETS.logo}" alt="${SITE.brand}" />
      </a>

      <nav class="site-nav">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#reviews">Reviews</a>
        <a href="#signature">Signature</a>
        <a href="#purchase">Purchase</a>
      </nav>

      <div class="site-actions">
        <a class="btn btn-line" href="#products">제품 보기</a>
        <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어</a>
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero-shell">
        <div class="hero-copy">
          <div>
            <p class="eyebrow">${SITE.heroEyebrow}</p>
            <h1>
              ${SITE.heroTitle1}<br />
              ${SITE.heroTitle2}<br />
              ${SITE.heroTitle3}
            </h1>
            <p class="hero-description">${SITE.heroDescription}</p>

            <div class="hero-actions">
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">지금 구매하기</a>
              <a class="btn btn-dark" href="#products">두 제품 비교하기</a>
              <a class="btn btn-line" href="#reviews">후기 먼저 보기</a>
            </div>

            <div class="hero-proof">
              <div class="hero-proof__item">
                <strong>2 Signatures</strong>
                <span>지금 가장 보여주기 좋은 두 제품만 선명하게.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Easy Choice</strong>
                <span>Ocean Breeze와 Morning Haze 중 취향대로 고르기 쉽게.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Fast Checkout</strong>
                <span>복잡한 분기 없이 스마트스토어로 바로 연결.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stage">
          ${renderHeroSlides()}
          <div class="hero-stage__overlay">
            <div class="hero-stage__card">
              <p class="eyebrow" id="heroEyebrow">Main Campaign</p>
              <h3 id="heroTitle">Quiet Luxury</h3>
              <p id="heroDesc">과하지 않지만 오래 남는 분위기. Soumé의 첫인상을 가장 선명하게 보여주는 장면.</p>
              <div class="hero-dots">
                ${renderHeroDots()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="trust-strip">
          <div class="trust-box">
            <strong>구매 중심 구성</strong>
            <span>브랜드 무드를 해치지 않으면서도 바로 선택할 수 있게 정리했습니다.</span>
          </div>
          <div class="trust-box">
            <strong>두 제품 집중</strong>
            <span>Ocean Breeze와 Morning Haze만 선명하게 보여줍니다.</span>
          </div>
          <div class="trust-box">
            <strong>후기 보강</strong>
            <span>구매 직전 신뢰를 더하는 후기 섹션을 중간에 배치했습니다.</span>
          </div>
          <div class="trust-box">
            <strong>모바일 최적화</strong>
            <span>작은 화면에서는 CTA를 단순화해 사진과 정보가 덜 겹치게 했습니다.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">About Soumé</p>
            <h2>많이 보여주기보다<br />더 또렷하게 남도록</h2>
          </div>
          <p>
            Soumé는 제품 수를 늘리기보다, 지금 가장 인상이 선명한 두 가지 시그니처에 집중합니다.
            빠르게 이해되고, 더 쉽게 선택되고, 바로 구매까지 이어지도록 구성했습니다.
          </p>
        </div>

        <div class="split-layout">
          <div class="glass-card split-visual reveal">
            <img src="${ASSETS.editorialMain}" alt="Soumé editorial visual" />
          </div>
          <div class="split-copy reveal">
            <p class="eyebrow">Brand Direction</p>
            <h3>Ocean Breeze와 Morning Haze,<br />서로 다른 두 가지 무드</h3>
            <p>
              하나는 맑고 산뜻하게, 다른 하나는 부드럽고 차분하게.
              두 제품만으로도 Soumé가 어떤 브랜드인지 충분히 느껴지도록 정리했습니다.
            </p>
            <div class="hero-actions">
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 바로가기</a>
              <a class="btn btn-line" href="#products">제품 보기</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Best Sellers</p>
            <h2>복잡하지 않게,<br />지금 필요한 두 제품만</h2>
          </div>
          <p>
            처음 방문한 고객도 바로 이해할 수 있도록 Ocean Breeze와 Morning Haze만 중심에 배치했습니다.
            비교는 쉽게, 구매는 더 빠르게 이어집니다.
          </p>
        </div>

        <div class="products-grid">
          ${renderProducts()}
        </div>

        <div class="inline-cta reveal">
          <div>
            <strong>첫 구매 추천 동선</strong>
            <span>먼저 두 제품의 분위기를 비교하고, 상세 확인 후 바로 스마트스토어로 이동하는 흐름이 가장 빠릅니다.</span>
          </div>
          <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">두 제품 구매하러 가기</a>
        </div>
      </div>
    </section>

    <section class="section" id="reviews">
      <div class="container">
        <div class="review-banner reveal">
          <p class="eyebrow">Customer Voice</p>
          <h2>후기 한 줄이<br />구매 결정을 더 쉽게 만듭니다</h2>
          <p>
            실제 운영 시에는 스마트스토어 리뷰 문구로 교체하면 더 좋고,
            지금은 후기 섹션의 위치와 밀도 자체를 전환 중심으로 정리해둔 상태입니다.
          </p>
        </div>

        <div class="reviews-grid">
          ${renderReviews()}
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Signature Visual</p>
            <h2>제품보다 먼저 보이는 건<br />브랜드의 태도입니다</h2>
          </div>
          <p>
            메인 컷, 사용감, 디테일 컷을 나눠 보여주면 단순 감성 이미지가 아니라
            믿을 수 있는 브랜드라는 인상으로 이어집니다.
          </p>
        </div>

        <div class="signature-grid">
          ${renderSignatures()}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Lookbook</p>
            <h2>브랜드 무드를 유지한 채<br />구매 흐름을 끊지 않기</h2>
          </div>
          <p>
            룩북은 감성 장식용이 아니라 홈과 상품 인상 사이를 부드럽게 잇는 브릿지 역할을 합니다.
          </p>
        </div>

        <div class="lookbook-grid">
          ${renderLookbooks()}
        </div>
      </div>
    </section>

    <section class="section" id="purchase">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Purchase Funnel</p>
            <h2>결정은 간단하게,<br />구매는 더 빠르게</h2>
          </div>
          <p>
            제품 이해, 후기 확인, 브랜드 무드까지 충분히 본 뒤 마지막에는 하나의 구매 동선으로 정리합니다.
            메인 전환은 스마트스토어로 집중시키는 것이 가장 효율적입니다.
          </p>
        </div>

        <div class="purchase-layout">
          <div class="purchase-panel reveal">
            <p class="eyebrow">Official Store CTA</p>
            <h2>지금 가장 빠른 구매 동선</h2>
            <p>
              클릭 분산을 줄이기 위해 메인 구매 링크는 스마트스토어 한 곳으로 집중했습니다.
              첫 방문자도 고민 없이 바로 이동할 수 있도록 문구와 버튼을 단순하게 정리했습니다.
            </p>

            <div class="purchase-actions">
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 바로가기</a>
              <a class="btn btn-dark" href="#products">제품 다시 보기</a>
              <a class="btn btn-line" href="#reviews">후기 확인하기</a>
            </div>

            <div class="purchase-checks">
              <span>• 상단·중간·하단 CTA 반복 배치</span>
              <span>• 상세 모달 → 스마트스토어 직행 흐름</span>
              <span>• 모바일 하단 고정 구매 바 포함</span>
            </div>
          </div>

          <div class="glass-card split-visual reveal">
            <img src="${ASSETS.campaign02}" alt="Soumé purchase visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">FAQ</p>
            <h2>마지막 망설임을 줄이는<br />구매 전 질문</h2>
          </div>
          <p>
            사용자가 결제 직전에 흔히 고민하는 질문을 먼저 정리해두면 구매 전환에 도움이 됩니다.
          </p>
        </div>

        <div class="faq-list">
          ${renderFaqs()}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <strong>${SITE.brand}</strong>
        <p>Quiet Luxury Body Ritual</p>
      </div>
      <div>
        <p>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</p>
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
    <span class="smart-fab__pulse"></span>
    <span class="smart-fab__icon">N</span>
    <span class="smart-fab__text">
      <small>OFFICIAL STORE</small>
      <strong>스마트스토어 가기</strong>
    </span>
  </a>

  <div class="smart-popup" id="smartPopup" aria-hidden="true">
    <button class="smart-popup__close" id="smartPopupClose" aria-label="닫기" type="button">✕</button>
    <p class="smart-popup__eyebrow">Official Store</p>
    <h3>Ocean Breeze와<br />Morning Haze를<br />바로 만나보세요</h3>
    <p>
      지금 Soumé의 메인 구매 동선은 스마트스토어로 연결되어 있습니다.
      두 가지 시그니처 제품을 가장 빠르게 확인하고 구매할 수 있어요.
    </p>
    <div class="smart-popup__actions">
      <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 가기</a>
      <button class="btn btn-line" id="smartPopupDismiss" type="button">나중에 보기</button>
    </div>
  </div>

  <div class="sticky-buy">
    <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
    <a class="btn btn-line" href="#products">두 제품 비교하기</a>
  </div>

  <div class="modal" id="productModal" aria-hidden="true">
    <div class="modal__backdrop" data-close-modal></div>
    <div class="modal__panel">
      <button class="modal__close" data-close-modal aria-label="닫기" type="button">✕</button>
      <div class="product-modal" id="productModalContent"></div>
    </div>
  </div>

  <script>
    const HERO_DATA = ${heroSlidesJson};
    const PRODUCT_DATA = ${productsJson};

    const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
    const heroDots = Array.from(document.querySelectorAll('.hero-dot'));
    const heroEyebrow = document.getElementById('heroEyebrow');
    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDesc');

    let currentSlide = 0;
    let heroTimer = null;

    function activateSlide(index) {
      currentSlide = index;

      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
      });

      heroDots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });

      const data = HERO_DATA[index];
      if (heroEyebrow) heroEyebrow.textContent = data.eyebrow;
      if (heroTitle) heroTitle.textContent = data.title;
      if (heroDesc) heroDesc.textContent = data.desc;
    }

    function startHeroAuto() {
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = setInterval(() => {
        const next = (currentSlide + 1) % HERO_DATA.length;
        activateSlide(next);
      }, 4600);
    }

    heroDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        activateSlide(index);
        startHeroAuto();
      });
    });

    activateSlide(0);
    startHeroAuto();

    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');

    function openModal(element) {
      if (!element) return;
      element.classList.add('is-open');
      element.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(element) {
      if (!element) return;
      element.classList.remove('is-open');
      element.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-close-modal]').forEach((element) => {
      element.addEventListener('click', () => closeModal(productModal));
    });

    function renderChips(items) {
      return items.map((item) => '<span class="chip">' + item + '</span>').join('');
    }

    function renderProductModal(product) {
      return \`
        <div class="product-modal__media">
          <img src="\${product.image}" alt="\${product.name}" />
        </div>
        <div class="product-modal__body">
          <span class="product-modal__eyebrow">\${product.badge}</span>
          <h3 class="product-modal__title">\${product.name}</h3>
          <div class="product-modal__price">
            <span>\${product.price}</span>
            <span>\${product.volume}</span>
          </div>
          <p class="product-modal__desc">\${product.description}</p>

          <p class="chip-label">Key Features</p>
          <div class="chip-list">\${renderChips(product.features)}</div>

          <p class="chip-label">Mood Notes</p>
          <div class="chip-list">\${renderChips(product.notes)}</div>

          <div class="modal-actions">
            <a class="btn btn-gold" href="\${product.buyLink}" target="_blank" rel="noreferrer">스마트스토어 구매</a>
            <button class="btn btn-line" type="button" data-close-inline>닫기</button>
          </div>
        </div>
      \`;
    }

    document.querySelectorAll('.js-open-product').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-product-id');
        const product = PRODUCT_DATA.find((item) => item.id === id);
        if (!product || !productModalContent) return;

        productModalContent.innerHTML = renderProductModal(product);

        productModalContent.querySelectorAll('[data-close-inline]').forEach((element) => {
          element.addEventListener('click', () => closeModal(productModal));
        });

        openModal(productModal);
      });
    });

    const smartPopup = document.getElementById('smartPopup');
    const smartPopupClose = document.getElementById('smartPopupClose');
    const smartPopupDismiss = document.getElementById('smartPopupDismiss');

    function showSmartPopup() {
      if (!smartPopup) return;
      if (window.innerWidth <= 760) return;
      if (sessionStorage.getItem('soume-smart-popup-closed') === 'true') return;

      setTimeout(()
  </script>
</body>
</html>`)
})

export default app
