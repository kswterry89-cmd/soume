import { Hono } from 'hono'

const app = new Hono()

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Quiet Luxury Body Ritual',
  description:
    'Soumé는 감도 높은 비주얼과 간결한 구매 동선을 결합한 모던 럭셔리 바디 리추얼 브랜드입니다.',
  heroEyebrow: 'QUIET LUXURY BODY RITUAL',
  heroTitle1: '바쁜 하루에도',
  heroTitle2: '무드는 선명하게',
  heroTitle3: '남아야 하니까',
  heroDescription:
    'Soumé는 과한 장식보다 오래 남는 분위기와 편안한 사용감을 제안합니다. 지금은 Ocean Breeze와 Morning Haze, 두 가지 시그니처를 중심으로 브랜드의 첫 경험을 완성합니다.',
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
    eyebrow: 'Main Campaign',
    title: 'Quiet Luxury',
    desc: '첫 화면에서 브랜드 무드를 강하게 남기고 바로 구매 CTA로 연결합니다.',
  },
  {
    image: ASSETS.editorialMain,
    eyebrow: 'Editorial Mood',
    title: 'Soft Precision',
    desc: '감도 높은 에디토리얼 비주얼로 프리미엄 인상을 더합니다.',
  },
  {
    image: ASSETS.campaign01,
    eyebrow: 'Conversion Focus',
    title: 'Buy With Clarity',
    desc: '복잡하지 않은 구조로 제품 선택과 구매 결정을 더 쉽게 만듭니다.',
  },
  {
    image: ASSETS.campaign02,
    eyebrow: 'Brand Presence',
    title: 'Lasting Impression',
    desc: '마지막까지 분위기를 유지하면서도 구매로 자연스럽게 이어집니다.',
  },
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'BEST SELLER',
    name: 'Ocean Breeze',
    subtitle: '산뜻하고 깨끗한 인상을 남기는 시그니처 리추얼',
    price: '₩48,000',
    volume: '250ml',
    image: ASSETS.product01,
    description:
      '첫 사용감부터 가볍고 깨끗한 무드가 느껴지는 Soumé의 대표 시그니처입니다. 샤워 후 정리된 무드를 더하고 싶을 때 가장 직관적으로 선택하기 좋은 제품입니다.',
    features: ['첫 구매 추천', '가볍고 산뜻한 무드', '데일리 사용 적합'],
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
      '조용하고 부드러운 인상을 선호하는 고객에게 잘 어울리는 두 번째 시그니처입니다. 은은하게 오래 남는 무드와 차분한 감도로 선물용으로도 잘 어울립니다.',
    features: ['차분한 무드', '선물용 추천', '브랜드 감도 강조'],
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
    a: '산뜻하고 깨끗한 인상을 원하면 Ocean Breeze부터, 보다 부드럽고 차분한 무드를 원하면 Morning Haze부터 시작하는 구성을 추천합니다.',
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
            <button class="btn btn-dark js-open-product" data-product-id="${product.id}">상세 보기</button>
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
  const productsJson = safeJson(PRODUCTS)
  const slidesJson = safeJson(HERO_SLIDES)

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
      --card: rgba(255,255,255,0.78);
      --line: rgba(32, 24, 18, 0.08);
      --line-strong: rgba(32, 24, 18, 0.16);
      --text: #1f1a17;
      --muted: #6f635a;
      --accent: #b7926e;
      --accent-deep: #8f6b49;
      --dark: #171311;
      --gold-grad: linear-gradient(135deg, #c9a57c 0%, #8f6b49 100%);
      --green-grad: linear-gradient(135deg, #03c75a 0%, #00b050 100%);
      --radius-xl: 34px;
      --radius-lg: 26px;
      --radius-md: 20px;
      --shadow: 0 24px 70px rgba(31, 22, 16, 0.08);
      --container: 1240px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
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

    .section { padding: 110px 0; }
    .eyebrow {
      margin: 0 0 10px;
      font-size: 12px;
      line-height: 1.2;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent-deep);
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 22px;
      margin-bottom: 34px;
      flex-wrap: wrap;
    }

    .section-head h2,
    .hero-copy h1,
    .split-copy h3,
    .review-banner h2,
    .purchase-panel h2,
    .product-modal__title,
    .smart-popup h3,
    .hero-stage__card h3,
    .film-card__copy h3 {
      font-family: 'Cormorant Garamond', serif;
      letter-spacing: -0.03em;
    }

    .section-head h2 {
      margin: 0;
      font-size: clamp(34px, 5vw, 66px);
      line-height: 0.95;
    }

    .section-head p {
      margin: 0;
      max-width: 560px;
      color: var(--muted);
      line-height: 1.8;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 52px;
      padding: 14px 22px;
      border-radius: 999px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: center;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

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
      background: rgba(249, 245, 240, 0.75);
      border-bottom: 1px solid rgba(31, 26, 23, 0.06);
    }

    .site-header__inner {
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .site-brand img {
      width: 118px;
      height: auto;
    }

    .site-nav {
      display: flex;
      gap: 22px;
      color: var(--muted);
      font-size: 14px;
    }

    .site-nav a:hover {
      color: var(--text);
    }

    .site-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .hero {
      padding: 28px 0 70px;
    }

    .hero-shell {
      display: grid;
      grid-template-columns: 1.04fr 0.96fr;
      gap: 24px;
      align-items: stretch;
    }

    .hero-copy,
    .hero-stage,
    .glass-card,
    .split-copy,
    .review-banner,
    .purchase-panel,
    .film-card {
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .hero-copy {
      background: rgba(255,255,255,0.75);
      border: 1px solid rgba(255,255,255,0.65);
      padding: clamp(28px, 4vw, 56px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 760px;
    }

    .hero-copy h1 {
      margin: 0 0 18px;
      font-size: clamp(52px, 8vw, 108px);
      line-height: 0.9;
    }

    .hero-description {
      margin: 0;
      max-width: 560px;
      color: var(--muted);
      line-height: 1.9;
      font-size: clamp(15px, 1.5vw, 18px);
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 28px;
    }

    .hero-proof {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 34px;
    }

    .hero-proof__item {
      padding: 20px;
      border-radius: 22px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.54);
    }

    .hero-proof__item strong {
      display: block;
      margin-bottom: 6px;
      font-size: 22px;
    }

    .hero-proof__item span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .hero-stage {
      position: relative;
      min-height: 760px;
      background: #ddd;
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity .8s ease;
    }

    .hero-slide.is-active {
      opacity: 1;
    }

    .hero-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-stage__overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      align-items: end;
      padding: 30px;
      background: linear-gradient(180deg, rgba(20,16,14,0.04) 0%, rgba(20,16,14,0.45) 100%);
    }

    .hero-stage__card {
      max-width: 430px;
      padding: 24px;
      border-radius: 24px;
      background: rgba(255,255,255,0.16);
      border: 1px solid rgba(255,255,255,0.22);
      backdrop-filter: blur(12px);
      color: #fff;
    }

    .hero-stage__card h3 {
      margin: 6px 0 8px;
      font-size: 30px;
    }

    .hero-stage__card p {
      margin: 0;
      color: rgba(255,255,255,0.86);
      line-height: 1.7;
    }

    .hero-dots {
      display: flex;
      gap: 8px;
      margin-top: 16px;
    }

    .hero-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 0;
      cursor: pointer;
      background: rgba(255,255,255,0.42);
    }

    .hero-dot.is-active {
      background: #fff;
      transform: scale(1.1);
    }

    .trust-strip {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }

    .trust-box {
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(255,255,255,0.66);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .trust-box strong {
      display: block;
      margin-bottom: 6px;
      font-size: 16px;
    }

    .trust-box span {
      font-size: 14px;
      line-height: 1.65;
      color: var(--muted);
    }

    .split-layout {
      display: grid;
      grid-template-columns: 1.02fr 0.98fr;
      gap: 18px;
      align-items: stretch;
    }

    .glass-card {
      background: rgba(255,255,255,0.72);
      border: 1px solid var(--line);
    }

    .split-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 560px;
    }

    .split-copy {
      padding: 40px;
      background: rgba(255,255,255,0.78);
      border: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .split-copy h3 {
      margin: 0 0 14px;
      font-size: clamp(34px, 4.8vw, 62px);
      line-height: 0.95;
    }

    .split-copy p {
      margin: 0 0 24px;
      color: var(--muted);
      line-height: 1.85;
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
      background: rgba(255,255,255,0.76);
      border: 1px solid var(--line);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .product-card__media {
      position: relative;
      aspect-ratio: 1 / 1.12;
      overflow: hidden;
    }

    .product-card__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .45s ease;
    }

    .product-card:hover .product-card__media img {
      transform: scale(1.04);
    }

    .product-card__badge {
      position: absolute;
      top: 18px;
      left: 18px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.92);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .product-card__body {
      padding: 24px;
    }

    .product-card__meta {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
      color: var(--muted);
      font-size: 13px;
    }

    .product-card h3 {
      margin: 0 0 8px;
      font-size: clamp(28px, 3vw, 34px);
      line-height: 1;
      font-family: 'Cormorant Garamond', serif;
    }

    .product-card__subtitle {
      margin: 0 0 20px;
      min-height: 50px;
      color: var(--muted);
      line-height: 1.8;
    }

    .product-card__actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .inline-cta {
      margin-top: 22px;
      padding: 22px 24px;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(201,165,124,0.16), rgba(255,255,255,0.84));
      border: 1px solid rgba(143,107,73,0.14);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .inline-cta strong {
      display: block;
      margin-bottom: 4px;
      font-size: 18px;
    }

    .inline-cta span {
      color: var(--muted);
      line-height: 1.7;
    }

    .review-banner {
      padding: 30px;
      margin-bottom: 18px;
      background: linear-gradient(135deg, rgba(23,19,17,0.96), rgba(58,42,28,0.94));
      color: #fff;
    }

    .review-banner h2 {
      margin: 8px 0 10px;
      font-size: clamp(34px, 5vw, 64px);
      line-height: 0.95;
    }

    .review-banner p {
      margin: 0;
      max-width: 760px;
      color: rgba(255,255,255,0.82);
      line-height: 1.85;
    }

    .reviews-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .review-card {
      padding: 28px;
      border-radius: 28px;
      background: rgba(255,255,255,0.78);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .review-card__stars {
      margin-bottom: 16px;
      color: #b98c50;
      letter-spacing: 0.14em;
      font-size: 14px;
    }

    .review-card h3 {
      margin: 0 0 10px;
      font-size: 24px;
      line-height: 1.25;
      font-family: 'Cormorant Garamond', serif;
    }

    .review-card p {
      margin: 0;
      color: var(--muted);
      line-height: 1.8;
    }

    .signature-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .signature-card {
      position: relative;
      min-height: 560px;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .signature-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .signature-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.38));
    }

    .signature-card__copy {
      position: absolute;
      left: 22px;
      right: 22px;
      bottom: 22px;
      z-index: 2;
      color: #fff;
    }

    .signature-card__copy h3 {
      margin: 6px 0 8px;
      font-size: 28px;
      font-family: 'Cormorant Garamond', serif;
    }

    .signature-card__copy p {
      margin: 0;
      line-height: 1.75;
      color: rgba(255,255,255,0.84);
    }

    .lookbook-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .lookbook-card {
      position: relative;
      min-height: 500px;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .lookbook-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .lookbook-card__overlay {
      position: absolute;
      inset: auto 0 0 0;
      padding: 26px;
      color: #fff;
      background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.64) 100%);
    }

    .lookbook-card__overlay h3 {
      margin: 6px 0 8px;
      font-size: 28px;
      font-family: 'Cormorant Garamond', serif;
    }

    .lookbook-card__overlay p {
      margin: 0;
      line-height: 1.75;
      color: rgba(255,255,255,0.84);
    }

    .film-card {
      position: relative;
      min-height: 620px;
    }

    .film-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .film-card__overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: end;
      padding: 40px;
      background: linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62));
      color: #fff;
    }

    .film-card__copy {
      max-width: 520px;
    }

    .film-card__copy h3 {
      margin: 8px 0 10px;
      font-size: clamp(34px, 4.8vw, 62px);
      line-height: 0.95;
    }

    .film-card__copy p {
      margin: 0 0 22px;
      color: rgba(255,255,255,0.84);
      line-height: 1.85;
    }

    .purchase-layout {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 18px;
    }

    .purchase-panel {
      padding: 42px;
      background: rgba(255,255,255,0.8);
      border: 1px solid var(--line);
    }

    .purchase-panel h2 {
      margin: 8px 0 14px;
      font-size: clamp(34px, 4.8vw, 62px);
      line-height: 0.95;
    }

    .purchase-panel p {
      margin: 0 0 24px;
      color: var(--muted);
      line-height: 1.8;
    }

    .purchase-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .purchase-checks {
      display: grid;
      gap: 10px;
      margin-top: 22px;
      color: var(--muted);
      font-size: 14px;
    }

    .faq-list {
      display: grid;
      gap: 14px;
    }

    .faq-item {
      padding: 22px 24px;
      border-radius: 22px;
      background: rgba(255,255,255,0.76);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .faq-item summary {
      list-style: none;
      cursor: pointer;
      font-weight: 800;
      line-height: 1.5;
    }

    .faq-item summary::-webkit-details-marker {
      display: none;
    }

    .faq-item p {
      margin: 14px 0 0;
      color: var(--muted);
      line-height: 1.8;
    }

    .site-footer {
      padding: 36px 0 110px;
      color: var(--muted);
    }

    .site-footer__inner {
      padding-top: 24px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .sticky-buy {
      position: fixed;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      width: min(calc(100% - 20px), 840px);
      z-index: 55;
      padding: 12px;
      border-radius: 999px;
      background: rgba(23,19,17,0.92);
      box-shadow: 0 18px 46px rgba(0,0,0,0.2);
      display: flex;
      gap: 10px;
      backdrop-filter: blur(16px);
    }

    .sticky-buy .btn {
      flex: 1;
    }

    .smart-fab {
      position: fixed;
      right: 22px;
      bottom: 106px;
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
      right: 22px;
      bottom: 182px;
      z-index: 57;
      width: min(360px, calc(100vw - 28px));
      padding: 18px 18px 16px;
      border-radius: 24px;
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
      font-size: 30px;
      line-height: 0.98;
    }

    .smart-popup p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
      font-size: 14px;
    }

    .smart-popup__actions {
      display: flex;
      gap: 10px;
      margin-top: 16px;
      flex-wrap: wrap;
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

    .modal.is-open {
      display: flex;
    }

    .modal__backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.48);
    }

    .modal__panel {
      position: relative;
      z-index: 1;
      width: min(980px, 100%);
      max-height: calc(100vh - 40px);
      overflow: auto;
      border-radius: 30px;
      background: #fff;
      box-shadow: 0 40px 100px rgba(0,0,0,0.24);
    }

    .modal__close {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      width: 44px;
      height: 44px;
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
      min-height: 560px;
      object-fit: cover;
    }

    .product-modal__body {
      padding: 38px 34px 34px;
    }

    .product-modal__eyebrow {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent-deep);
    }

    .product-modal__title {
      margin: 10px 0 10px;
      font-size: 50px;
      line-height: 0.95;
    }

    .product-modal__price {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 20px;
      color: var(--muted);
    }

    .product-modal__desc {
      margin: 0 0 22px;
      color: var(--muted);
      line-height: 1.85;
    }

    .chip-label {
      margin: 0 0 10px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
    }

    .chip-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }

    .chip {
      padding: 10px 14px;
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
      transform: translateY(24px);
      transition: opacity .72s ease, transform .72s ease;
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
        height: 70px;
      }

      .site-brand img {
        width: 98px;
      }

      .section {
        padding: 82px 0;
      }

      .hero {
        padding: 18px 0 52px;
      }

      .hero-copy {
        padding: 28px;
      }

      .hero-copy h1 {
        font-size: 42px;
        line-height: 0.94;
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

      .hero-stage {
        min-height: 420px;
      }

      .split-copy,
      .purchase-panel {
        padding: 28px;
      }

      .film-card {
        min-height: 460px;
      }

      .film-card__overlay {
        padding: 24px;
      }

      .review-banner h2,
      .purchase-panel h2,
      .film-card__copy h3 {
        font-size: 40px;
      }

      .product-modal__title {
        font-size: 38px;
      }

      .sticky-buy {
        width: calc(100% - 16px);
        bottom: 10px;
        padding: 10px;
        border-radius: 22px;
        flex-direction: column;
      }

      .sticky-buy .btn {
        width: 100%;
      }

      .smart-fab {
        right: 12px;
        bottom: 92px;
        padding: 12px 15px 12px 12px;
      }

      .smart-popup {
        right: 12px;
        bottom: 168px;
        border-radius: 20px;
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
        <a class="btn btn-line" href="#reviews">후기 보기</a>
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
                <strong>2 Signature Items</strong>
                <span>복잡하지 않게, 지금 가장 보여주기 좋은 두 제품만 집중합니다.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Fast Purchase Flow</strong>
                <span>첫 화면부터 스마트스토어 진입까지 구매 동선을 짧게 설계했습니다.</span>
              </div>
              <div class="hero-proof__item">
                <strong>Mobile Ready</strong>
                <span>모바일에서도 CTA가 계속 보이도록 버튼 위치와 크기를 최적화했습니다.</span>
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
              <p id="heroDesc">첫 화면에서 브랜드 무드를 강하게 남기고 바로 구매 CTA로 연결합니다.</p>
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
            <strong>구매 유도형 카피</strong>
            <span>브랜드 소개보다 구매 이유가 먼저 보이도록 문구를 재정렬했습니다.</span>
          </div>
          <div class="trust-box">
            <strong>후기 섹션 추가</strong>
            <span>신뢰를 보강하는 영역을 중간에 배치해 구매 전 망설임을 줄입니다.</span>
          </div>
          <div class="trust-box">
            <strong>CTA 반복 설계</strong>
            <span>상단·중간·하단·모바일 고정 버튼까지 구매 링크를 반복 노출합니다.</span>
          </div>
          <div class="trust-box">
            <strong>스마트스토어 직결</strong>
            <span>메인 전환 링크를 스마트스토어 한 곳으로 집중시켜 클릭 분산을 줄입니다.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">About Soumé</p>
            <h2>많이 보여주는 대신<br />더 잘 기억되게</h2>
          </div>
          <p>
            Soumé는 제품 수를 늘려 복잡하게 보이기보다, 지금 가장 인상이 선명한 두 가지 시그니처에 집중합니다.
            사용자는 빠르게 이해하고 더 쉽게 선택하고 바로 구매까지 이어질 수 있습니다.
          </p>
        </div>

        <div class="split-layout">
          <div class="glass-card split-visual reveal">
            <img src="${ASSETS.editorialMain}" alt="Soumé editorial visual" />
          </div>
          <div class="split-copy reveal">
            <p class="eyebrow">Brand Direction</p>
            <h3>Ocean Breeze와 Morning Haze,<br />두 가지 무드의 균형</h3>
            <p>
              하나는 더 깨끗하고 산뜻하게, 다른 하나는 더 부드럽고 차분하게.
              Soumé의 첫 경험은 두 제품만으로도 브랜드의 결을 충분히 느낄 수 있도록 구성했습니다.
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
            처음 방문한 고객도 바로 이해할 수 있도록 Ocean Breeze와 Morning Haze 두 제품만 중심에 배치했습니다.
            비교는 쉽게, 구매는 더 빠르게 이어집니다.
          </p>
        </div>

        <div class="products-grid">
          ${renderProducts()}
        </div>

        <div class="inline-cta reveal">
          <div>
            <strong>첫 구매 추천 동선</strong>
            <span>먼저 두 제품의 성격을 비교하고, 상세 확인 후 바로 스마트스토어로 이동하는 흐름이 가장 빠릅니다.</span>
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
            실제 운영 시에는 스마트스토어 리뷰 문구로 교체하면 더 좋지만,
            지금 구조는 후기 섹션이 어디에 들어가야 가장 전환에 도움이 되는지까지 반영해 배치했습니다.
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
            메인 컷, 사용감, 디테일 컷을 분리해 보여주면 단순 감성 이미지가 아니라
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

    <section class="section">
      <div class="container">
        <div class="film-card reveal">
          <img src="${ASSETS.filmPoster}" alt="Soumé brand poster" />
          <div class="film-card__overlay">
            <div class="film-card__copy">
              <p class="eyebrow">Brand Mood</p>
              <h3>감도를 끝까지 유지하면서도<br />구매를 놓치지 않기</h3>
              <p>
                하단 구간은 브랜드 이미지를 마무리하면서 동시에 구매 버튼을 다시 노출하는 구간입니다.
                감성으로 닫지 않고 전환으로 닫는 구조가 중요합니다.
              </p>
              <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="purchase">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Purchase Funnel</p>
            <h2>이제는 고민보다<br />구매가 더 가까워지도록</h2>
          </div>
          <p>
            제품 이해, 후기 확인, 브랜드 무드까지 충분히 본 뒤 마지막에는 하나의 구매 동선으로 정리합니다.
            클릭이 분산되지 않게 메인 전환은 스마트스토어로 집중시키는 것이 가장 효율적입니다.
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
            <img src="${ASSETS.product02}" alt="purchase visual" />
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

  <div class="sticky-buy">
    <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
    <a class="btn btn-line" href="#products">두 제품 비교하기</a>
  </div>

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
    <button class="smart-popup__close" id="smartPopupClose" aria-label="닫기">✕</button>
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

  <div class="modal" id="productModal" aria-hidden="true">
    <div class="modal__backdrop" data-close-modal></div>
    <div class="modal__panel">
      <button class="modal__close" data-close-modal aria-label="닫기" type="button">✕</button>
      <div class="product-modal" id="productModalContent"></div>
    </div>
  </div>

  <script>
    const HERO_DATA = ${slidesJson};
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
      }, 4500);
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
      if (sessionStorage.getItem('soume-smart-popup-closed') === 'true') return;

      setTimeout(() => {
        smartPopup.classList.add('is-visible');
        smartPopup.setAttribute('aria-hidden', 'false');
      }, 1400);
    }

    function closeSmartPopup() {
      if (!smartPopup) return;
      smartPopup.classList.remove('is-visible');
      smartPopup.setAttribute('aria-hidden', 'true');
      sessionStorage.setItem('soume-smart-popup-closed', 'true');
    }

    if (smartPopupClose) {
      smartPopupClose.addEventListener('click', closeSmartPopup);
    }

    if (smartPopupDismiss) {
      smartPopupDismiss.addEventListener('click', closeSmartPopup);
    }

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal(productModal);
        closeSmartPopup();
      }
    });

    showSmartPopup();
  </script>
</body>
</html>`)
})

export default app
