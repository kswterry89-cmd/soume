import { Hono } from 'hono'

const app = new Hono()

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Modern Luxury Body & Skin Care',
  description:
    'Soumé는 조용한 럭셔리 무드와 감각적인 클린 뷰티 루틴을 제안하는 뷰티 하우스입니다.',
  heroEyebrow: 'MODERN LUXURY CLEAN BEAUTY',
  heroTitle1: '조용하지만',
  heroTitle2: '확실하게 남는',
  heroTitle3: '럭셔리 뷰티',
  heroDescription:
    '브랜드 무드, 제품 신뢰감, 구매 전환까지 한 번에 이어지는 Soumé의 새로운 홈.',
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
  filmVideo: '/videos/soume-brand-film.mp4',
}

const HERO_SLIDES = [
  {
    image: ASSETS.heroMain,
    eyebrow: 'Main Campaign',
    title: 'Quiet Luxury',
    desc: '첫 인상부터 프리미엄 무드를 완성하는 메인 히어로 비주얼',
  },
  {
    image: ASSETS.editorialMain,
    eyebrow: 'Editorial Mood',
    title: 'Soft Precision',
    desc: '피부 표현과 텍스처를 정교하게 전달하는 에디토리얼 컷',
  },
  {
    image: ASSETS.campaign01,
    eyebrow: 'Commerce Visual',
    title: 'Conversion Ready',
    desc: '브랜드 감도와 구매 유도를 동시에 잡는 전환형 커머스 이미지',
  },
  {
    image: ASSETS.campaign02,
    eyebrow: 'Brand Presence',
    title: 'Lasting Impression',
    desc: '고급스럽고 안정적인 구조로 오래 남는 브랜드 인상',
  },
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'BEST',
    name: 'Ocean Breeze Body Lotion Spray',
    subtitle: '가볍게 분사되는 로션 스프레이',
    price: '₩48,000',
    volume: '250ml',
    image: ASSETS.product01,
    description:
      '분사형 텍스처가 피부 위에 균일하게 밀착되며, 산뜻한 보습감과 정돈된 피부 윤기를 남깁니다.',
    features: ['미스트처럼 가벼운 분사감', '끈적임 적은 마무리', '데일리 바디 루틴 추천'],
    notes: ['Fresh Air', 'Soft Musk', 'Clean Skin Finish'],
    buyLink: '#purchase',
  },
  {
    id: 'veil-recovery',
    badge: 'DAILY',
    name: 'Veil Recovery Mist',
    subtitle: '메이크업 전후 모두 쓰기 좋은 리커버리 미스트',
    price: '₩39,000',
    volume: '120ml',
    image: ASSETS.product02,
    description:
      '건조한 순간 피부 결을 빠르게 정돈하고, 메이크업 전후에도 부담 없이 사용할 수 있는 미스트입니다.',
    features: ['빠른 수분 정돈', '메이크업 전후 사용', '간편한 데일리 케어'],
    notes: ['Transparent Citrus', 'Airy Floral', 'Skin Veil'],
    buyLink: '#purchase',
  },
  {
    id: 'bare-reset',
    badge: 'SIGNATURE',
    name: 'Bare Reset Body Care',
    subtitle: '번들거림 없이 남는 정돈된 윤기',
    price: '₩52,000',
    volume: '300ml',
    image: ASSETS.product03,
    description:
      '무게감은 줄이고 사용 후의 편안함과 은은한 광채를 더한 바디 케어 포뮬러입니다.',
    features: ['편안한 마무리감', '은은한 윤기 표현', '선물용으로도 적합'],
    notes: ['Skin Musk', 'Powder Clean', 'Calm Woody'],
    buyLink: '#purchase',
  },
]

const LOOKBOOK = [
  {
    title: 'Quiet Skin, Quiet Mood',
    desc: '브랜드 첫인상을 정리하는 차분한 톤의 룩북 컷',
    image: ASSETS.lookbook01,
  },
  {
    title: 'Editorial Softness',
    desc: '피부 위 질감과 조도를 부드럽게 보여주는 에디토리얼 무드',
    image: ASSETS.lookbook02,
  },
  {
    title: 'Lasting Impression',
    desc: '브랜드 홈페이지와 상세페이지 사이를 자연스럽게 잇는 비주얼',
    image: ASSETS.lookbook03,
  },
]

const FAQS = [
  {
    q: 'Soumé 제품은 어떤 무드에 어울리나요?',
    a: '과한 장식보다 정제된 무드, 조용하지만 고급스러운 라이프스타일과 잘 어울립니다.',
  },
  {
    q: '선물용으로도 괜찮나요?',
    a: '패키지와 비주얼 무드를 고려한 구성이어서 셀프기프트와 선물 수요 모두 대응하기 좋습니다.',
  },
  {
    q: '처음 구매할 때 무엇부터 시작하면 좋나요?',
    a: '베스트셀러인 Ocean Breeze Body Lotion Spray부터 시작하고, 미스트를 함께 구성하는 2-step 루틴을 추천합니다.',
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

const renderProductCards = () =>
  PRODUCTS.map(
    (product) => `
      <article class="product-card reveal">
        <div class="product-card__image-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy" />
          <span class="product-card__badge">${product.badge}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__meta">
            <span>${product.volume}</span>
            <span>${product.price}</span>
          </div>
          <h3>${product.name}</h3>
          <p class="product-card__subtitle">${product.subtitle}</p>
          <div class="product-card__buttons">
            <button class="btn btn-dark js-open-product" data-product-id="${product.id}">상품 상세 보기</button>
            <a class="btn btn-line" href="${product.buyLink}">바로 구매하기</a>
          </div>
        </div>
      </article>
    `,
  ).join('')

const renderLookbookCards = () =>
  LOOKBOOK.map(
    (item) => `
      <article class="lookbook-card reveal">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="lookbook-card__overlay">
          <p class="eyebrow">LOOKBOOK</p>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </article>
    `,
  ).join('')

const renderFaqs = () =>
  FAQS.map(
    (faq) => `
      <details class="faq-item reveal">
        <summary>${faq.q}</summary>
        <p>${faq.a}</p>
      </details>
    `,
  ).join('')

app.get('/', (c) => {
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
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #f6f1ea;
      --bg-soft: #fbf7f2;
      --card: rgba(255,255,255,0.72);
      --line: rgba(30, 25, 20, 0.1);
      --text: #1f1a17;
      --muted: #6c625b;
      --accent: #b59673;
      --accent-deep: #8f6f4b;
      --dark: #161311;
      --white: #ffffff;
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --shadow: 0 20px 60px rgba(36, 25, 16, 0.08);
      --container: 1240px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: 'Inter', system-ui, sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(181, 150, 115, 0.14), transparent 28%),
        linear-gradient(180deg, #f8f3ee 0%, #f5efe8 45%, #f8f4ef 100%);
    }

    img { display: block; width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    .container { width: min(calc(100% - 32px), var(--container)); margin: 0 auto; }
    .section { padding: 110px 0; }
    .section-head {
      display: flex; justify-content: space-between; gap: 24px;
      align-items: end; margin-bottom: 36px; flex-wrap: wrap;
    }
    .eyebrow {
      font-size: 12px; letter-spacing: .18em; text-transform: uppercase; color: var(--accent-deep);
      margin: 0 0 10px;
    }
    .section-head h2, .hero-copy h1, .cta-panel h2, .product-modal__title {
      font-family: 'Cormorant Garamond', serif;
      letter-spacing: -0.03em;
    }
    .section-head h2 {
      margin: 0; font-size: clamp(36px, 5vw, 64px); line-height: .95;
    }
    .section-head p {
      margin: 0; max-width: 560px; color: var(--muted); line-height: 1.7;
    }

    .site-header {
      position: sticky; top: 0; z-index: 30;
      backdrop-filter: blur(16px);
      background: rgba(248, 243, 238, 0.74);
      border-bottom: 1px solid rgba(31, 26, 23, 0.06);
    }
    .site-header__inner {
      height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 16px;
    }
    .site-brand img { width: 118px; height: auto; }
    .site-nav { display: flex; gap: 22px; font-size: 14px; color: var(--muted); }
    .site-nav a:hover { color: var(--text); }
    .site-actions { display: flex; gap: 10px; align-items: center; }

    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      border-radius: 999px; padding: 14px 22px; border: 1px solid transparent;
      cursor: pointer; transition: .25s ease; font-weight: 600;
    }
    .btn:hover { transform: translateY(-1px); }
    .btn-dark { background: var(--dark); color: var(--white); }
    .btn-dark:hover { background: #000; }
    .btn-line { border-color: rgba(31, 26, 23, 0.12); background: rgba(255,255,255,0.5); }
    .btn-line:hover { background: rgba(255,255,255,0.9); }
    .btn-gold {
      background: linear-gradient(135deg, #c7a57a 0%, #8e6d49 100%);
      color: #fff;
      box-shadow: 0 14px 34px rgba(143, 111, 75, 0.24);
    }

    .hero { padding: 28px 0 80px; }
    .hero-shell {
      display: grid; grid-template-columns: 1.05fr .95fr; gap: 26px;
      align-items: stretch;
    }
    .hero-copy, .hero-stage {
      border-radius: 34px; overflow: hidden; box-shadow: var(--shadow);
    }
    .hero-copy {
      padding: 56px; background: rgba(255,255,255,0.72);
      border: 1px solid rgba(255,255,255,0.6);
      display: flex; flex-direction: column; justify-content: space-between; min-height: 720px;
    }
    .hero-copy h1 {
      margin: 0 0 20px; font-size: clamp(56px, 9vw, 104px); line-height: .9;
    }
    .hero-copy p {
      max-width: 560px; color: var(--muted); font-size: 16px; line-height: 1.8;
    }
    .hero-copy__buttons { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
    .hero-kpis {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 34px;
    }
    .hero-kpi {
      border: 1px solid var(--line); border-radius: 22px; padding: 20px;
      background: rgba(255,255,255,0.55);
    }
    .hero-kpi strong { display: block; font-size: 24px; margin-bottom: 6px; }
    .hero-kpi span { color: var(--muted); font-size: 13px; line-height: 1.5; }

    .hero-stage {
      position: relative; min-height: 720px; background: #ddd;
    }
    .hero-slide {
      position: absolute; inset: 0; opacity: 0; transition: opacity .9s ease;
    }
    .hero-slide.is-active { opacity: 1; }
    .hero-slide img { width: 100%; height: 100%; object-fit: cover; }
    .hero-stage__overlay {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(22,19,17,0.08) 0%, rgba(22,19,17,0.48) 100%);
      display: flex; flex-direction: column; justify-content: end;
      padding: 34px;
      z-index: 2;
    }
    .hero-stage__card {
      max-width: 420px; padding: 24px; border-radius: 24px;
      background: rgba(255,255,255,0.16); color: #fff;
      border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(12px);
    }
    .hero-stage__card h3 {
      margin: 6px 0 8px; font-size: 28px; font-family: 'Cormorant Garamond', serif;
    }
    .hero-dots {
      display: flex; gap: 8px; margin-top: 18px;
    }
    .hero-dot {
      width: 10px; height: 10px; border-radius: 50%;
      border: 0; background: rgba(255,255,255,0.4); cursor: pointer;
    }
    .hero-dot.is-active { background: #fff; transform: scale(1.15); }

    .benefit-strip {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 18px;
    }
    .benefit-box {
      padding: 18px 20px; border-radius: 20px; background: rgba(255,255,255,.64);
      border: 1px solid var(--line); box-shadow: var(--shadow);
    }
    .benefit-box strong { display: block; margin-bottom: 6px; }
    .benefit-box span { color: var(--muted); font-size: 14px; line-height: 1.6; }

    .editorial-grid,
    .signature-grid,
    .lookbook-grid,
    .faq-grid {
      display: grid; gap: 18px;
    }

    .editorial-grid { grid-template-columns: 1.1fr .9fr; align-items: stretch; }
    .editorial-visual, .editorial-copy, .signature-card, .cta-panel, .film-panel {
      border-radius: 30px; overflow: hidden; box-shadow: var(--shadow);
    }
    .editorial-visual img, .signature-card img, .film-panel img { height: 100%; object-fit: cover; }
    .editorial-copy {
      padding: 40px; background: rgba(255,255,255,0.7); border: 1px solid var(--line);
      display: flex; flex-direction: column; justify-content: center;
    }
    .editorial-copy h3, .cta-panel h2 {
      margin: 0 0 14px; font-size: clamp(32px, 4vw, 52px); line-height: .95;
    }
    .editorial-copy p { margin: 0 0 24px; color: var(--muted); line-height: 1.8; }

    .signature-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .signature-card { position: relative; min-height: 560px; }
    .signature-card::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.36));
    }
    .signature-card__copy {
      position: absolute; left: 22px; right: 22px; bottom: 22px; z-index: 2;
      color: #fff;
    }
    .signature-card__copy h3 { margin: 6px 0 8px; font-size: 28px; font-family: 'Cormorant Garamond', serif; }
    .signature-card__copy p { margin: 0; line-height: 1.7; color: rgba(255,255,255,0.82); }

    .products-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
    }
    .product-card {
      background: rgba(255,255,255,0.74); border: 1px solid var(--line);
      border-radius: 28px; overflow: hidden; box-shadow: var(--shadow);
    }
    .product-card__image-wrap { position: relative; aspect-ratio: 1 / 1.12; overflow: hidden; }
    .product-card__image {
      width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease;
    }
    .product-card:hover .product-card__image { transform: scale(1.04); }
    .product-card__badge {
      position: absolute; left: 18px; top: 18px;
      padding: 8px 12px; border-radius: 999px;
      background: rgba(255,255,255,0.92); font-size: 12px; font-weight: 700;
      letter-spacing: .12em; text-transform: uppercase;
    }
    .product-card__body { padding: 24px; }
    .product-card__meta {
      display: flex; justify-content: space-between; gap: 12px;
      font-size: 13px; color: var(--muted); margin-bottom: 12px;
    }
    .product-card h3 {
      margin: 0 0 8px; font-size: 28px; line-height: 1;
      font-family: 'Cormorant Garamond', serif;
    }
    .product-card__subtitle { margin: 0 0 20px; color: var(--muted); line-height: 1.7; min-height: 48px; }
    .product-card__buttons { display: flex; gap: 10px; flex-wrap: wrap; }

    .promo-band {
      margin-top: 22px; padding: 22px 24px; border-radius: 24px;
      background: linear-gradient(135deg, rgba(199,165,122,0.18), rgba(255,255,255,0.82));
      border: 1px solid rgba(143,111,75,0.16);
      display: flex; justify-content: space-between; align-items: center; gap: 18px; flex-wrap: wrap;
    }
    .promo-band strong { font-size: 18px; display: block; margin-bottom: 4px; }
    .promo-band span { color: var(--muted); }

    .lookbook-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .lookbook-card {
      position: relative; min-height: 500px; border-radius: 28px; overflow: hidden; box-shadow: var(--shadow);
    }
    .lookbook-card img { width: 100%; height: 100%; object-fit: cover; }
    .lookbook-card__overlay {
      position: absolute; inset: auto 0 0 0; padding: 26px;
      color: #fff; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,.62) 100%);
    }
    .lookbook-card__overlay h3 {
      margin: 6px 0 8px; font-size: 28px; font-family: 'Cormorant Garamond', serif;
    }
    .lookbook-card__overlay p { margin: 0; color: rgba(255,255,255,0.82); line-height: 1.7; }

    .film-panel {
      position: relative; min-height: 640px;
    }
    .film-panel img { width: 100%; height: 100%; object-fit: cover; }
    .film-panel__overlay {
      position: absolute; inset: 0; padding: 40px;
      background: linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.62));
      color: #fff; display: flex; align-items: end;
    }
    .film-panel__copy {
      max-width: 520px;
    }
    .film-panel__copy h3 {
      margin: 8px 0 10px; font-size: clamp(36px, 5vw, 62px); line-height: .95;
      font-family: 'Cormorant Garamond', serif;
    }
    .film-panel__copy p { margin: 0 0 20px; line-height: 1.8; color: rgba(255,255,255,0.86); }

    .cta-panel {
      padding: 44px; background: rgba(255,255,255,0.78); border: 1px solid var(--line);
    }
    .cta-panel p { margin: 0 0 24px; color: var(--muted); line-height: 1.8; }
    .cta-panel__buttons { display: flex; gap: 12px; flex-wrap: wrap; }
    .cta-panel__list {
      margin-top: 22px; display: grid; gap: 10px; color: var(--muted);
      font-size: 14px;
    }

    .faq-grid { grid-template-columns: 1fr; }
    .faq-item {
      padding: 22px 24px; border-radius: 22px; background: rgba(255,255,255,0.75);
      border: 1px solid var(--line); box-shadow: var(--shadow);
    }
    .faq-item summary {
      list-style: none; cursor: pointer; font-weight: 700;
    }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item p { margin: 14px 0 0; color: var(--muted); line-height: 1.8; }

    .site-footer {
      padding: 36px 0 100px; color: var(--muted);
    }
    .site-footer__inner {
      border-top: 1px solid var(--line); padding-top: 24px;
      display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;
    }

    .sticky-buy {
      position: fixed; left: 50%; bottom: 18px; transform: translateX(-50%);
      width: min(calc(100% - 24px), 760px); z-index: 40;
      background: rgba(20,16,14,0.92); color: #fff;
      border-radius: 999px; padding: 12px; display: flex; gap: 10px;
      box-shadow: 0 16px 40px rgba(0,0,0,.22);
      backdrop-filter: blur(14px);
    }
    .sticky-buy .btn { flex: 1; }

    .modal {
      position: fixed; inset: 0; z-index: 60;
      display: none; align-items: center; justify-content: center;
      padding: 20px;
    }
    .modal.is-open { display: flex; }
    .modal__backdrop {
      position: absolute; inset: 0; background: rgba(0,0,0,.48);
    }
    .modal__panel {
      position: relative; z-index: 1; width: min(980px, 100%);
      max-height: calc(100vh - 40px); overflow: auto;
      border-radius: 28px; background: #fff; box-shadow: 0 40px 100px rgba(0,0,0,.24);
    }
    .modal__close {
      position: absolute; top: 16px; right: 16px; z-index: 2;
      width: 44px; height: 44px; border-radius: 50%; border: 0; cursor: pointer;
      background: rgba(20,16,14,0.08);
    }

    .product-modal {
      display: grid; grid-template-columns: 1fr 1fr;
    }
    .product-modal__media img {
      width: 100%; height: 100%; min-height: 560px; object-fit: cover;
    }
    .product-modal__body {
      padding: 38px 34px 34px;
    }
    .product-modal__eyebrow {
      font-size: 12px; text-transform: uppercase; letter-spacing: .16em; color: var(--accent-deep);
    }
    .product-modal__title {
      margin: 10px 0 10px; font-size: 48px; line-height: .95;
    }
    .product-modal__price {
      display: flex; gap: 12px; flex-wrap: wrap; color: var(--muted); margin-bottom: 20px;
    }
    .product-modal__desc {
      margin: 0 0 22px; color: var(--muted); line-height: 1.8;
    }
    .chip-list {
      display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px;
    }
    .chip {
      padding: 10px 14px; border-radius: 999px; font-size: 13px;
      background: #f5efe7; color: #6b5948;
    }
    .modal-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }

    .reveal { opacity: 0; transform: translateY(24px); transition: .7s ease; }
    .reveal.is-visible { opacity: 1; transform: translateY(0); }

    @media (max-width: 1100px) {
      .hero-shell,
      .editorial-grid,
      .product-modal {
        grid-template-columns: 1fr;
      }
      .signature-grid,
      .lookbook-grid,
      .products-grid,
      .benefit-strip {
        grid-template-columns: repeat(2, 1fr);
      }
      .hero-copy, .hero-stage { min-height: auto; }
      .hero-stage { min-height: 560px; }
    }

    @media (max-width: 760px) {
      .site-nav { display: none; }
      .site-actions .btn-line { display: none; }
      .section { padding: 82px 0; }
      .hero-copy { padding: 30px; }
      .hero-kpis,
      .signature-grid,
      .lookbook-grid,
      .products-grid,
      .benefit-strip {
        grid-template-columns: 1fr;
      }
      .hero-copy h1 { font-size: 58px; }
      .hero-stage { min-height: 420px; }
      .product-modal__title { font-size: 38px; }
      .product-modal__media img { min-height: 320px; }
      .sticky-buy {
        width: calc(100% - 16px); bottom: 10px; padding: 10px;
        border-radius: 22px; flex-direction: column;
      }
      .sticky-buy .btn { width: 100%; }
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
        <a href="#signature">Signature</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#purchase">Purchase</a>
      </nav>

      <div class="site-actions">
        <a class="btn btn-line" href="#faq">FAQ</a>
        <button class="btn btn-dark js-open-start">3초 시작하기</button>
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
            <p>${SITE.heroDescription}</p>

            <div class="hero-copy__buttons">
              <a class="btn btn-gold" href="#purchase">지금 구매하러 가기</a>
              <a class="btn btn-line" href="#products">베스트셀러 보기</a>
            </div>

            <div class="hero-kpis">
              <div class="hero-kpi">
                <strong>Premium</strong>
                <span>무드 중심의 하이엔드 브랜드 인상</span>
              </div>
              <div class="hero-kpi">
                <strong>Commerce</strong>
                <span>상품 탐색에서 구매 CTA까지 자연스럽게 연결</span>
              </div>
              <div class="hero-kpi">
                <strong>Giftable</strong>
                <span>셀프기프트와 선물 수요에 모두 대응</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stage" aria-label="hero slider">
          ${renderHeroSlides()}
          <div class="hero-stage__overlay">
            <div class="hero-stage__card" id="heroInfo">
              <p class="eyebrow" id="heroEyebrow">Main Campaign</p>
              <h3 id="heroTitle">Quiet Luxury</h3>
              <p id="heroDesc">첫 인상부터 프리미엄 무드를 완성하는 메인 히어로 비주얼</p>
              <div class="hero-dots">
                ${renderHeroDots()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="benefit-strip">
          <div class="benefit-box">
            <strong>첫 방문 전환</strong>
            <span>메인 히어로 → 베스트셀러 → 구매 CTA 흐름으로 바로 연결</span>
          </div>
          <div class="benefit-box">
            <strong>시그니처 신뢰감</strong>
            <span>브랜드 컷과 상세 컷을 함께 배치해 제품 설득력 강화</span>
          </div>
          <div class="benefit-box">
            <strong>모던 럭셔리</strong>
            <span>대중적인 커머스 구조 위에 고급스러운 분위기를 입힌 화면</span>
          </div>
          <div class="benefit-box">
            <strong>구매 유도 설계</strong>
            <span>상품 상세, FAQ, 하단 고정 구매버튼으로 이탈률 감소</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">About Soumé</p>
            <h2>브랜드 무드와<br />구매 경험을 함께 설계</h2>
          </div>
          <p>
            Soumé는 단순히 예쁜 브랜드가 아니라, 첫 방문자가 제품을 이해하고
            실제로 구매 버튼까지 누르게 만드는 흐름을 지향합니다.
          </p>
        </div>

        <div class="editorial-grid">
          <div class="editorial-visual reveal">
            <img src="${ASSETS.editorialMain}" alt="Soumé editorial" />
          </div>
          <div class="editorial-copy reveal">
            <p class="eyebrow">Editorial Introduction</p>
            <h3>감도는 높이고<br />이탈은 줄이는 구조</h3>
            <p>
              상단에서는 브랜드 이미지를 강하게 남기고, 중간에서는 베스트셀러와
              시그니처 제품을 보여주고, 하단에서는 FAQ와 상담/구매 CTA로
              전환을 밀어주는 방식으로 구성했습니다.
            </p>
            <a class="btn btn-dark" href="#purchase">구매 섹션 바로가기</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="signature">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Signature Visual</p>
            <h2>브랜드를 기억하게 만드는<br />세 가지 시그니처 컷</h2>
          </div>
          <p>
            메인, 오픈, 디테일 세 장면으로 제품의 존재감과 질감을 한 번에 전달합니다.
          </p>
        </div>

        <div class="signature-grid">
          <article class="signature-card reveal">
            <img src="${ASSETS.signatureMain}" alt="Signature main" />
            <div class="signature-card__copy">
              <p class="eyebrow">01</p>
              <h3>Signature Main</h3>
              <p>메인 비주얼에서 브랜드의 첫인상을 정리하는 핵심 컷</p>
            </div>
          </article>

          <article class="signature-card reveal">
            <img src="${ASSETS.signatureOpen}" alt="Signature open" />
            <div class="signature-card__copy">
              <p class="eyebrow">02</p>
              <h3>Signature Open</h3>
              <p>제품 사용 장면과 개봉 감성을 자연스럽게 연결하는 이미지</p>
            </div>
          </article>

          <article class="signature-card reveal">
            <img src="${ASSETS.signatureDetail}" alt="Signature detail" />
            <div class="signature-card__copy">
              <p class="eyebrow">03</p>
              <h3>Signature Detail</h3>
              <p>텍스처와 디테일을 보여줘 구매 전 신뢰감을 높이는 컷</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Best Sellers</p>
            <h2>지금 바로 팔기 좋은<br />베스트셀러 구성</h2>
          </div>
          <p>
            첫 구매자가 이해하기 쉬운 3개 제품 구성을 중심으로, 상세 보기와 바로 구매 버튼을 동시에 제공합니다.
          </p>
        </div>

        <div class="products-grid">
          ${renderProductCards()}
        </div>

        <div class="promo-band reveal">
          <div>
            <strong>첫 구매 추천 조합</strong>
            <span>Ocean Breeze + Veil Recovery Mist 조합으로 입문 루틴 제안</span>
          </div>
          <a class="btn btn-gold" href="#purchase">추천 조합으로 시작하기</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Campaign</p>
            <h2>커머스와 브랜드를<br />같이 살리는 비주얼</h2>
          </div>
          <p>
            캠페인 이미지는 홈 전체의 밀도를 높이고, 상품 섹션 사이의 리듬을 만들어줍니다.
          </p>
        </div>

        <div class="editorial-grid">
          <div class="editorial-visual reveal">
            <img src="${ASSETS.campaign01}" alt="Campaign 01" />
          </div>
          <div class="editorial-visual reveal">
            <img src="${ASSETS.campaign02}" alt="Campaign 02" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="lookbook">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Lookbook</p>
            <h2>홈페이지와 상세페이지를 잇는<br />브랜드 룩북</h2>
          </div>
          <p>
            룩북은 감성용 장식이 아니라, 브랜드 분위기를 유지한 채 구매 페이지로 이어주는 브릿지 역할을 합니다.
          </p>
        </div>

        <div class="lookbook-grid">
          ${renderLookbookCards()}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="film-panel reveal">
          <img src="${ASSETS.filmPoster}" alt="Soumé film poster" />
          <div class="film-panel__overlay">
            <div class="film-panel__copy">
              <p class="eyebrow">Brand Film</p>
              <h3>이미지와 무드로<br />브랜드를 더 오래 남기기</h3>
              <p>
                지금은 포스터 중심 구성이지만, 이후 브랜드 필름이 연결되면 체류 시간과 몰입감을 더 높일 수 있습니다.
              </p>
              <a class="btn btn-gold" href="#purchase">브랜드 보고 바로 구매하기</a>
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
            <h2>마지막까지<br />구매를 밀어주는 구간</h2>
          </div>
          <p>
            실제 결제 링크만 연결하면 바로 운영 가능한 구조로, 비회원 구매 / 상담 구매 / 베스트셀러 진입을 모두 열어둡니다.
          </p>
        </div>

        <div class="editorial-grid">
          <div class="cta-panel reveal">
            <p class="eyebrow">Quick Purchase</p>
            <h2>가장 빠른 구매 동선</h2>
            <p>
              아래 버튼은 현재 데모용 구조입니다. 추후 스마트스토어, 자사몰, 카카오 상담 주문 링크만 연결하면 그대로 사용 가능합니다.
            </p>
            <div class="cta-panel__buttons">
              <button class="btn btn-gold js-open-start">3초 시작하기</button>
              <a class="btn btn-dark" href="#products">베스트셀러 선택하기</a>
              <a class="btn btn-line" href="#faq">구매 FAQ 보기</a>
            </div>
            <div class="cta-panel__list">
              <span>• 비회원 빠른 구매 흐름 대응 가능</span>
              <span>• 카카오 상담 주문 / DM 주문 연결 가능</span>
              <span>• 첫 구매 추천 조합 배너 운영 가능</span>
            </div>
          </div>

          <div class="editorial-visual reveal">
            <img src="${ASSETS.product03}" alt="Purchase visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">FAQ</p>
            <h2>구매 직전 이탈을 줄이는<br />자주 묻는 질문</h2>
          </div>
          <p>
            배송, 선물, 첫 구매 추천, 제품 선택 같은 기본 질문을 먼저 처리하면 전환율에 도움이 됩니다.
          </p>
        </div>

        <div class="faq-grid">
          ${renderFaqs()}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <strong>${SITE.brand}</strong>
        <p>Modern Luxury Clean Beauty House</p>
      </div>
      <div>
        <p>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <div class="sticky-buy">
    <a class="btn btn-gold" href="#purchase">지금 구매하기</a>
    <button class="btn btn-line js-open-start">카카오 상담 시작</button>
  </div>

  <div class="modal" id="productModal" aria-hidden="true">
    <div class="modal__backdrop" data-close-modal></div>
    <div class="modal__panel">
      <button class="modal__close" data-close-modal aria-label="close">✕</button>
      <div class="product-modal" id="productModalContent"></div>
    </div>
  </div>

  <div class="modal" id="startModal" aria-hidden="true">
    <div class="modal__backdrop" data-close-start></div>
    <div class="modal__panel" style="max-width:560px;">
      <button class="modal__close" data-close-start aria-label="close">✕</button>
      <div style="padding:38px 30px 32px;">
        <p class="eyebrow">Quick Start</p>
        <h2 style="margin:0 0 12px;font-family:'Cormorant Garamond',serif;font-size:48px;line-height:.95;">
          어디서 시작할지<br />바로 선택하기
        </h2>
        <p style="margin:0 0 22px;color:#6c625b;line-height:1.8;">
          지금은 데모 구조이므로 실제 운영 시에는 아래 버튼에 스마트스토어, 자사몰, 카카오채널 링크를 연결하면 됩니다.
        </p>
        <div style="display:grid;gap:12px;">
          <a class="btn btn-gold" href="#products">베스트셀러 먼저 보기</a>
          <a class="btn btn-dark" href="#purchase">비회원 빠른 구매 동선</a>
          <a class="btn btn-line" href="#faq">구매 전 질문 먼저 보기</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    const HERO_DATA = ${safeJson(HERO_SLIDES)};
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
      heroSlides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      heroDots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.14 });
    revealItems.forEach((item) => observer.observe(item));

    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');
    const startModal = document.getElementById('startModal');

    function openModal(el) {
      if (!el) return;
      el.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(el) {
      if (!el) return;
      el.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', () => closeModal(productModal));
    });

    document.querySelectorAll('[data-close-start]').forEach((el) => {
      el.addEventListener('click', () => closeModal(startModal));
    });

    document.querySelectorAll('.js-open-start').forEach((button) => {
      button.addEventListener('click', () => openModal(startModal));
    });

    function renderChips(list) {
      return list.map((item) => '<span class="chip">' + item + '</span>').join('');
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

          <p class="eyebrow" style="margin-top:0;">Key Features</p>
          <div class="chip-list">\${renderChips(product.features)}</div>

          <p class="eyebrow">Scent / Mood</p>
          <div class="chip-list">\${renderChips(product.notes)}</div>

          <div class="modal-actions">
            <a class="btn btn-gold" href="\${product.buyLink}">이 제품 구매하기</a>
            <button class="btn btn-line" data-close-modal>닫기</button>
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

        productModalContent.querySelectorAll('[data-close-modal]').forEach((el) => {
          el.addEventListener('click', () => closeModal(productModal));
        });

        openModal(productModal);
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(productModal);
        closeModal(startModal);
      }
    });
  </script>
</body>
</html>`)
})

export default app
