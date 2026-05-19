import { Hono } from 'hono'

const app = new Hono()

// ============ 상수 영역 ============
const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Perfumed Body Lotion Spray',
  description: '5중 세라마이드·복합 히알루론산·미백·주름개선·두 시그니처 향. 매일의 바디 리추얼.'
}

const LINKS = {
  smartstore: 'https://smartstore.naver.com/neography'
}

const COMPANY = {
  name: '네오그라피 주식회사',
  ceo: '김성우',
  address: '경기도 용인시 기흥구 강남서로 9, 아카데미프라자 7층 703-제이159호',
  bizNumber: '651-81-03309',
  mailOrderNumber: '제 2025-용인기흥-02814 호',
  tel: '031-340-4345',
  email: 'office@neography.co.kr',
  hours: {
    weekday: '평일 AM 10:00 – PM 17:00',
    lunch: '점심 PM 12:00 – PM 13:00',
    holiday: '주말·공휴일 휴무'
  }
}

const ASSETS = {
  logo: '/soume-logo-black.png',
  heroMain: '/assets/soume/hero-main.jpg',
  campaign01: '/assets/soume/campaign-01.jpg',
  campaign02: '/assets/soume/campaign-02.jpg',
  product01: '/assets/soume/product-01.jpg',
  product02: '/assets/soume/product-02.jpg',
  signatureMain: '/assets/soume/signature-main.jpg',
  signatureOpen: '/assets/soume/signature-open.jpg',
  signatureDetail: '/assets/soume/signature-detail.jpg',
  editorial: '/assets/soume/editorial.jpg',
  lookbook01: '/assets/soume/lookbook-01.jpg',
  lookbook02: '/assets/soume/lookbook-02.jpg',
  lookbook03: '/assets/soume/lookbook-03.jpg',
  productDetail: '/assets/soume/product-detail.jpg',
  brandPoster: '/assets/soume/brand-poster.jpg'
}

const HERO_MEDIA = [
  {
    video: '/videos/soume/hero-01.mp4',
    poster: ASSETS.heroMain,
    label: 'Perfumed Body Lotion Spray',
    title: '향과 케어를 한 번에,\n매일의 바디 리추얼',
    text: '5중 세라마이드와 복합 히알루론산, 두 가지 시그니처 향. 미백·주름개선 2중 기능성 퍼퓸 바디 스프레이.'
  },
  {
    video: '/videos/soume/hero-02.mp4',
    poster: ASSETS.campaign01,
    label: 'Ocean Breeze',
    title: '산뜻한 시트러스 아쿠아,\n상쾌한 하루의 시작',
    text: 'Citrus · Acqua · Marine. 맑고 깨끗한 인상을 남기는 첫 번째 시그니처.'
  },
  {
    video: '/videos/soume/hero-03.mp4',
    poster: ASSETS.campaign02,
    label: 'Forest Whisper',
    title: '포근한 우디 머스크,\n부드럽게 감싸는 마무리',
    text: 'Sandalwood · Jasmine · Musk. 차분하고 고급스러운 두 번째 시그니처.'
  },
  {
    video: '/videos/soume/hero-04.mp4',
    poster: ASSETS.signatureMain,
    label: 'Dual Functional Care',
    title: '미백·주름개선\n2중 기능성 화장품',
    text: '나이아신아마이드와 아데노신이 향과 케어를 동시에 완성합니다.'
  }
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'FRESH SIGNATURE',
    name: 'Ocean Breeze',
    nameKo: '수메 오션 브리즈 스프레이',
    notes: 'Citrus · Acqua · Marine',
    price: '₩000,000',
    volume: '250ml',
    image: ASSETS.product01,
    subtitle: '산뜻한 시트러스 아쿠아 향',
    description: '5중 세라마이드와 복합 히알루론산이 피부를 상쾌하게 채우고, 맑고 산뜻한 시트러스 아쿠아 향이 하루의 첫인상을 정리하는 퍼퓸 바디 스프레이.',
    features: ['미백·주름개선 2중', '5중 세라마이드', '복합 히알루론산']
  },
  {
    id: 'forest-whisper',
    badge: 'WARM SIGNATURE',
    name: 'Forest Whisper',
    nameKo: '수메 포레스트 위스퍼 스프레이',
    notes: 'Sandalwood · Jasmine · Musk',
    price: '₩000,000',
    volume: '250ml',
    image: ASSETS.product02,
    subtitle: '포근한 우디 머스크 향',
    description: '미백·주름개선 2중 기능성과 풍부한 보습·진정 케어. 포근한 우디 머스크 향으로 피부를 부드럽게 감싸는 퍼퓸 바디 스프레이.',
    features: ['미백·주름개선 2중', '보습·진정 케어', '우디 머스크']
  }
]

const FRAGRANCE_NOTES = [
  {
    product: 'Ocean Breeze',
    subtitle: '낮의 바다 — 산뜻하고 청량한 시트러스 아쿠아',
    top: { note: 'Citrus', desc: '헤스페리딕, 프레시 시트러스' },
    middle: { note: 'Acqua', desc: '아쿠아, 프루티, 우디' },
    base: { note: 'Marine', desc: '마린, 플로럴, 프루트' }
  },
  {
    product: 'Forest Whisper',
    subtitle: '저녁의 숲 — 포근하고 깊이 있는 우디 머스크',
    top: { note: 'Sandalwood', desc: '샌달우드, 시더우드' },
    middle: { note: 'Jasmine', desc: '자스민' },
    base: { note: 'Musk', desc: '머스크, 앰버' }
  }
]

const KEY_INGREDIENTS = [
  { label: '01', name: '5중 세라마이드', text: '세라마이드 NP·AP·AS·NS·EOP 다섯 종류가 피부 장벽을 촘촘하게 채워 매끄럽고 단단한 피부 결을 완성합니다.' },
  { label: '02', name: '복합 히알루론산', text: '하이알루로닉애씨드, 하이드롤라이즈드 하이알루로닉애씨드, 소듐하이알루로네이트 크로스폴리머의 다층 보습 시스템.' },
  { label: '03', name: '나이아신아마이드', text: '식약처 인증 미백 기능성 성분. 맑고 고른 피부 톤을 위한 데일리 케어.' },
  { label: '04', name: '아데노신', text: '식약처 인증 주름개선 기능성 성분. 매끈하고 탄탄한 피부 결을 위한 케어.' }
]

const BRAND_POINTS = [
  { title: '향과 케어를 동시에', text: '단순한 향수가 아닌, 5중 세라마이드와 복합 히알루론산을 담은 퍼퓸 바디 로션 스프레이. 향을 즐기는 동시에 피부 보습까지 챙깁니다.' },
  { title: '식약처 2중 기능성 인증', text: '미백과 주름개선, 두 가지 기능성을 동시에 인증받은 화장품. 나이아신아마이드와 아데노신이 매일의 케어를 더 단단하게 만듭니다.' },
  { title: '유니섹스 시그니처 두 가지', text: '낮의 바다 같은 Ocean Breeze, 저녁의 숲 같은 Forest Whisper. 성별·연령 구분 없이 자신의 무드를 선택할 수 있도록 설계했습니다.' }
]

const HOW_TO_USE = [
  { step: '01', title: '충분히 흔들기', text: '사용 전 제품을 충분히 흔들어 내용물을 고르게 섞어줍니다.' },
  { step: '02', title: '20cm 거리에서 분사', text: '피부 또는 의류에서 20cm 정도 떨어진 거리에서 적당량을 분사합니다.' },
  { step: '03', title: '가볍게 흡수', text: '문지르지 말고 가볍게 흡수시키듯 사용하면 향이 더 오래 머뭅니다.' }
]

const SIGNATURE_VISUALS = [
  { step: '01', image: ASSETS.signatureMain, title: 'Signature Main', text: 'Soumé의 첫인상을 정리하는 메인 비주얼. 조용한 럭셔리 톤을 담아냈습니다.' },
  { step: '02', image: ASSETS.signatureOpen, title: 'Signature Open', text: '제품 사용 장면을 자연스럽게 연결한 컷. 일상 속 리추얼을 보여줍니다.' },
  { step: '03', image: ASSETS.signatureDetail, title: 'Signature Detail', text: '미스트의 질감과 디테일을 가까이 담아 구매 전 신뢰감을 더합니다.' }
]

const ARCHIVE = [
  { image: ASSETS.editorial, title: 'Editorial Main', text: 'Soumé 브랜드 무드를 가장 깊이 있게 보여주는 에디토리얼 메인.' },
  { image: ASSETS.lookbook01, title: 'Lookbook 01', text: '차분한 일상 속 바디 리추얼의 한 장면.' },
  { image: ASSETS.lookbook02, title: 'Lookbook 02', text: '피부 위 미스트의 질감과 빛을 담은 컷.' },
  { image: ASSETS.lookbook03, title: 'Lookbook 03', text: '제품과 사용자가 어우러지는 자연스러운 무드.' },
  { image: ASSETS.campaign01, title: 'Ocean Breeze Campaign', text: '맑고 산뜻한 시트러스 아쿠아의 인상을 담은 캠페인.' },
  { image: ASSETS.campaign02, title: 'Forest Whisper Campaign', text: '포근하고 깊이 있는 우디 머스크의 캠페인 컷.' },
  { image: ASSETS.productDetail, title: 'Product Detail', text: '패키지의 디테일과 텍스처를 담은 제품 컷.' },
  { image: ASSETS.brandPoster, title: 'Brand Film Poster', text: 'Soumé 브랜드 필름의 무드를 정리한 포스터 비주얼.' }
]

// ============ HTML 빌더 ============
const heroSlidesHtml = HERO_MEDIA.map((slide, i) => `
  <div class="hero-slide ${i === 0 ? 'is-active' : ''}" data-index="${i}">
    <video class="hero-video" muted playsinline preload="metadata" poster="${slide.poster}">
      <source src="${slide.video}" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-content-inner">
        <span class="hero-label">${slide.label}</span>
        <h1 class="hero-title">${slide.title.replace(/\n/g, '<br />')}</h1>
        <p class="hero-text">${slide.text}</p>
        <div class="hero-actions">
          <a class="btn btn-gold" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">지금 구매하기</a>
          <a class="btn btn-line-light" href="#products">두 제품 보기</a>
        </div>
      </div>
    </div>
  </div>
`).join('')

const heroProgressHtml = HERO_MEDIA.map((_, i) => `
  <button class="hero-progress-item ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="슬라이드 ${i + 1}">
    <span class="hero-progress-bar"><span class="hero-progress-fill"></span></span>
    <span class="hero-progress-num">0${i + 1}</span>
  </button>
`).join('')

const productCardsHtml = PRODUCTS.map(p => `
  <article class="product-card">
    <div class="product-image">
      <img src="${p.image}" alt="${p.name}" />
      <span class="product-badge">${p.badge}</span>
    </div>
    <div class="product-body">
      <div class="product-notes">${p.notes}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-name-ko">${p.nameKo}</p>
      <p class="product-subtitle">${p.subtitle}</p>
      <div class="product-meta">
        <span>${p.volume}</span>
        <span>${p.price}</span>
      </div>
      <p class="product-desc">${p.description}</p>
      <div class="product-features">
        ${p.features.map(f => `<span class="product-feature">${f}</span>`).join('')}
      </div>
      <a class="btn btn-line" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어에서 구매</a>
    </div>
  </article>
`).join('')

const fragranceCardsHtml = FRAGRANCE_NOTES.map(f => `
  <div class="fragrance-card">
    <h3>${f.product}</h3>
    <p class="fragrance-subtitle">${f.subtitle}</p>
    <div class="fragrance-layers">
      <div class="fragrance-layer">
        <span class="fragrance-stage">TOP</span>
        <strong>${f.top.note}</strong>
        <span>${f.top.desc}</span>
      </div>
      <div class="fragrance-layer">
        <span class="fragrance-stage">MIDDLE</span>
        <strong>${f.middle.note}</strong>
        <span>${f.middle.desc}</span>
      </div>
      <div class="fragrance-layer">
        <span class="fragrance-stage">BASE</span>
        <strong>${f.base.note}</strong>
        <span>${f.base.desc}</span>
      </div>
    </div>
  </div>
`).join('')

const ingredientCardsHtml = KEY_INGREDIENTS.map(i => `
  <div class="ingredient-card">
    <span class="ingredient-label">${i.label}</span>
    <strong>${i.name}</strong>
    <p>${i.text}</p>
  </div>
`).join('')

const brandPointsHtml = BRAND_POINTS.map(b => `
  <div class="brand-point">
    <strong>${b.title}</strong>
    <p>${b.text}</p>
  </div>
`).join('')

const howToUseHtml = HOW_TO_USE.map(h => `
  <div class="howto-card">
    <span class="howto-step">${h.step}</span>
    <strong>${h.title}</strong>
    <p>${h.text}</p>
  </div>
`).join('')

const signatureCardsHtml = SIGNATURE_VISUALS.map(s => `
  <div class="signature-card">
    <div class="signature-image"><img src="${s.image}" alt="${s.title}" /></div>
    <span class="signature-step">${s.step}</span>
    <h3>${s.title}</h3>
    <p>${s.text}</p>
  </div>
`).join('')

const archiveCardsHtml = ARCHIVE.map(a => `
  <div class="archive-card">
    <div class="archive-image"><img src="${a.image}" alt="${a.title}" /></div>
    <span class="archive-tag">Archive</span>
    <h3>${a.title}</h3>
    <p>${a.text}</p>
  </div>
`).join('')

// ============ 메인 라우트 ============
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${SITE.title}</title>
<meta name="description" content="${SITE.description}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 100%; overflow-x: hidden; }
  body {
    font-family: 'Inter', 'Noto Sans KR', sans-serif;
    background: #f5f1ea;
    color: #1a1a1a;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  img { max-width: 100%; display: block; }
  a { color: inherit; text-decoration: none; }

  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .section { padding: 100px 0; }
  .section-head { text-align: center; margin-bottom: 64px; }
  .section-kicker {
    font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase;
    color: #999; margin-bottom: 16px;
  }
  .section-head h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 4vw, 42px); font-weight: 400;
    line-height: 1.3; margin-bottom: 16px;
  }
  .section-head p {
    max-width: 640px; margin: 0 auto;
    font-size: 15px; color: #666; line-height: 1.8;
  }

  /* Header */
  .site-header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(245, 241, 234, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .header-inner {
    max-width: 1400px; margin: 0 auto; padding: 16px 32px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .header-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 400;
    display: flex; align-items: center; gap: 12px;
  }
  .header-logo small {
    font-family: 'Inter', sans-serif;
    font-size: 10px; letter-spacing: 0.2em;
    text-transform: uppercase; color: #888;
  }
  .header-nav { display: flex; gap: 32px; font-size: 13px; }
  .header-nav a { color: #555; transition: color 0.2s; }
  .header-nav a:hover { color: #000; }
  .header-cta {
    padding: 10px 18px; background: #1a1a1a; color: #fff;
    font-size: 12px; letter-spacing: 0.05em;
    border-radius: 999px; transition: background 0.2s;
  }
  .header-cta:hover { background: #333; }
  @media (max-width: 900px) {
    .header-nav { display: none; }
  }

  /* HERO */
  .hero {
    position: relative; height: 100vh; min-height: 600px;
    overflow: hidden; background: #1a1a1a;
  }
  .hero-slide {
    position: absolute; inset: 0;
    opacity: 0; transition: opacity 1s ease;
  }
  .hero-slide.is-active { opacity: 1; z-index: 2; }
  .hero-video {
    width: 100%; height: 100%; object-fit: cover;
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.55) 0%,
      rgba(0,0,0,0.35) 35%,
      rgba(0,0,0,0.1) 60%,
      rgba(0,0,0,0) 100%
    );
  }
  .hero-content {
    position: absolute; inset: 0; z-index: 3;
    display: flex; align-items: flex-end;
    padding: 0 0 12vh 0;
  }
  .hero-content-inner {
    max-width: 1400px; width: 100%;
    margin: 0 auto; padding: 0 48px;
    max-width: 580px;
    margin-left: max(48px, calc((100vw - 1400px) / 2 + 48px));
    color: #fff;
  }
  .hero-label {
    display: inline-block;
    font-size: 11px; letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 24px; color: rgba(255,255,255,0.85);
  }
  .hero-title {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700; line-height: 1.25;
    margin-bottom: 20px;
    text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .hero-text {
    font-size: 14px; line-height: 1.7;
    color: rgba(255,255,255,0.85);
    margin-bottom: 32px;
    max-width: 480px;
    text-shadow: 0 1px 10px rgba(0,0,0,0.3);
  }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

  /* HERO Progress */
  .hero-progress {
    position: absolute;
    bottom: 40px; left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    display: flex; gap: 8px;
    width: min(90%, 720px);
  }
  .hero-progress-item {
    flex: 1; background: none; border: none;
    cursor: pointer; padding: 0;
    display: flex; flex-direction: column; gap: 6px;
    text-align: left;
  }
  .hero-progress-bar {
    display: block; width: 100%; height: 2px;
    background: rgba(255,255,255,0.25);
    overflow: hidden;
  }
  .hero-progress-fill {
    display: block; width: 0%; height: 100%;
    background: #fff;
    transition: width 0.1s linear;
  }
  .hero-progress-item.is-active .hero-progress-fill {
    animation: progressFill 5s linear forwards;
  }
  @keyframes progressFill {
    from { width: 0%; }
    to { width: 100%; }
  }
  .hero-progress-num {
    font-size: 10px; letter-spacing: 0.15em;
    color: rgba(255,255,255,0.5);
  }
  .hero-progress-item.is-active .hero-progress-num {
    color: #fff;
  }
  @media (max-width: 768px) {
    .hero-content { padding-bottom: 18vh; }
    .hero-content-inner { padding: 0 24px; margin-left: 24px; }
    .hero-progress { bottom: 30px; }
  }

  /* Buttons */
  .btn {
    display: inline-block; padding: 14px 28px;
    font-size: 13px; letter-spacing: 0.05em;
    border-radius: 999px; cursor: pointer;
    transition: all 0.2s; border: 1px solid transparent;
  }
  .btn-gold {
    background: #b89968; color: #fff;
  }
  .btn-gold:hover { background: #a68652; }
  .btn-line {
    background: transparent; color: #1a1a1a;
    border-color: #1a1a1a;
  }
  .btn-line:hover { background: #1a1a1a; color: #fff; }
  .btn-line-light {
    background: transparent; color: #fff;
    border-color: rgba(255,255,255,0.6);
  }
  .btn-line-light:hover { background: #fff; color: #1a1a1a; }

  /* Products */
  .products-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .product-card {
    background: #fff; border-radius: 4px; overflow: hidden;
    box-shadow: 0 2px 30px rgba(0,0,0,0.04);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  }
  .product-image {
    position: relative; aspect-ratio: 4/3;
    overflow: hidden; background: #eee;
  }
  .product-image img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .product-badge {
    position: absolute; top: 16px; left: 16px;
    background: rgba(0,0,0,0.7); color: #fff;
    padding: 6px 12px; font-size: 10px;
    letter-spacing: 0.15em; border-radius: 999px;
  }
  .product-body { padding: 32px; }
  .product-notes {
    font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: #b89968;
    margin-bottom: 12px;
  }
  .product-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px; font-weight: 400; margin-bottom: 4px;
  }
  .product-name-ko {
    font-size: 13px; color: #888; margin-bottom: 12px;
  }
  .product-subtitle {
    font-size: 14px; color: #555; margin-bottom: 16px;
  }
  .product-meta {
    display: flex; justify-content: space-between;
    padding: 12px 0; border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 13px; margin-bottom: 16px;
  }
  .product-desc {
    font-size: 13px; color: #666; line-height: 1.7;
    margin-bottom: 20px;
  }
  .product-features {
    display: flex; gap: 6px; flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .product-feature {
    background: #f5f1ea; padding: 6px 12px;
    font-size: 11px; border-radius: 999px;
    letter-spacing: 0.02em;
  }
  @media (max-width: 768px) {
    .products-grid { grid-template-columns: 1fr; }
  }

  /* Fragrance */
  .fragrance-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px;
  }
  .fragrance-card {
    background: #fff; padding: 40px;
    border-radius: 4px;
    box-shadow: 0 2px 30px rgba(0,0,0,0.04);
  }
  .fragrance-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px; font-weight: 400; margin-bottom: 8px;
  }
  .fragrance-subtitle {
    font-size: 13px; color: #888; margin-bottom: 32px;
  }
  .fragrance-layers { display: flex; flex-direction: column; gap: 20px; }
  .fragrance-layer {
    display: grid; grid-template-columns: 80px 1fr 1.5fr;
    align-items: baseline; gap: 16px;
    padding: 16px 0; border-top: 1px solid #eee;
  }
  .fragrance-stage {
    font-size: 11px; letter-spacing: 0.2em;
    color: #b89968; font-weight: 500;
  }
  .fragrance-layer strong { font-size: 15px; font-weight: 500; }
  .fragrance-layer span:last-child {
    font-size: 13px; color: #777;
  }
  @media (max-width: 768px) {
    .fragrance-grid { grid-template-columns: 1fr; }
    .fragrance-layer {
      grid-template-columns: 60px 1fr;
      grid-template-rows: auto auto;
    }
    .fragrance-layer span:last-child { grid-column: 2; }
  }

  /* Ingredients */
  .ingredients-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  }
  .ingredient-card {
    background: #fff; padding: 32px 24px;
    border-radius: 4px;
    box-shadow: 0 2px 30px rgba(0,0,0,0.04);
  }
  .ingredient-label {
    font-size: 12px; letter-spacing: 0.2em;
    color: #b89968; font-weight: 500;
  }
  .ingredient-card strong {
    display: block; font-size: 17px; font-weight: 500;
    margin: 12px 0 12px; line-height: 1.4;
  }
  .ingredient-card p {
    font-size: 13px; color: #666; line-height: 1.7;
  }
  @media (max-width: 900px) {
    .ingredients-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 500px) {
    .ingredients-grid { grid-template-columns: 1fr; }
  }

  /* Brand Story */
  .brand-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: center;
  }
  .brand-copy h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px; font-weight: 400;
    line-height: 1.4; margin-bottom: 16px;
  }
  .brand-copy > p {
    font-size: 14px; color: #666;
    line-height: 1.8; margin-bottom: 32px;
  }
  .brand-points { display: flex; flex-direction: column; gap: 24px; }
  .brand-point strong {
    display: block; font-size: 14px;
    font-weight: 600; margin-bottom: 6px;
  }
  .brand-point p {
    font-size: 13px; color: #666; line-height: 1.7;
  }
  .brand-image img { border-radius: 4px; }
  @media (max-width: 900px) {
    .brand-grid { grid-template-columns: 1fr; gap: 40px; }
  }

  /* How to use */
  .howto-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .howto-card {
    background: #fff; padding: 40px 32px;
    border-radius: 4px; text-align: left;
    box-shadow: 0 2px 30px rgba(0,0,0,0.04);
  }
  .howto-step {
    display: inline-block; font-size: 12px;
    letter-spacing: 0.2em; color: #b89968;
    font-weight: 500; margin-bottom: 12px;
  }
  .howto-card strong {
    display: block; font-size: 18px;
    font-weight: 500; margin-bottom: 12px;
  }
  .howto-card p {
    font-size: 13px; color: #666; line-height: 1.7;
  }
  @media (max-width: 768px) {
    .howto-grid { grid-template-columns: 1fr; }
  }

  /* Signature */
  .signature-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .signature-card { background: #fff; border-radius: 4px; overflow: hidden; }
  .signature-image {
    aspect-ratio: 3/4; overflow: hidden; background: #eee;
  }
  .signature-image img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .signature-card { padding-bottom: 24px; }
  .signature-step {
    display: inline-block;
    font-size: 11px; letter-spacing: 0.2em;
    color: #b89968; padding: 16px 24px 0;
  }
  .signature-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 400;
    padding: 8px 24px 8px; margin: 0;
  }
  .signature-card p {
    padding: 0 24px;
    font-size: 13px; color: #666; line-height: 1.7;
  }
  @media (max-width: 900px) {
    .signature-grid { grid-template-columns: 1fr; }
  }

  /* Archive */
  .archive-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  }
  .archive-card { background: #fff; border-radius: 4px; overflow: hidden; }
  .archive-image {
    aspect-ratio: 1/1; overflow: hidden; background: #eee;
  }
  .archive-image img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .archive-tag {
    display: inline-block;
    font-size: 10px; letter-spacing: 0.2em;
    color: #b89968; padding: 12px 16px 0;
  }
  .archive-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px; font-weight: 400;
    padding: 6px 16px 4px; margin: 0;
  }
  .archive-card p {
    padding: 0 16px 20px;
    font-size: 12px; color: #777; line-height: 1.6;
  }
  @media (max-width: 900px) {
    .archive-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* AI Notice */
  .ai-notice {
    max-width: 800px; margin: 48px auto 0;
    padding: 16px 20px;
    border-top: 1px solid rgba(0,0,0,0.08);
    font-size: 12px; line-height: 1.7; color: #888;
    letter-spacing: 0.02em; text-align: center;
  }

  /* CTA */
  .cta-panel {
    background: #1a1a1a; color: #fff;
    border-radius: 4px; padding: 64px 48px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; align-items: center;
  }
  .cta-copy small {
    font-size: 11px; letter-spacing: 0.25em;
    text-transform: uppercase; color: #b89968;
  }
  .cta-copy h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px; font-weight: 400;
    margin: 12px 0 16px;
  }
  .cta-copy p {
    font-size: 14px; color: rgba(255,255,255,0.7);
    line-height: 1.7;
  }
  .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .cta-actions .btn-line {
    color: #fff; border-color: rgba(255,255,255,0.4);
  }
  .cta-actions .btn-line:hover {
    background: #fff; color: #1a1a1a;
  }
  @media (max-width: 768px) {
    .cta-panel { grid-template-columns: 1fr; padding: 48px 32px; }
  }

  /* Footer */
  footer.site-footer {
    background: #1a1a1a !important;
    color: #999 !important;
    padding: 80px 0 40px !important;
    font-size: 13px !important;
    line-height: 1.8 !important;
    letter-spacing: 0.02em !important;
    margin-top: 80px !important;
    width: 100% !important;
  }
  footer.site-footer .footer-container {
    max-width: 1200px !important; width: 100% !important;
    margin: 0 auto !important; padding: 0 40px !important;
    box-sizing: border-box !important;
  }
  footer.site-footer .footer-brand {
    padding-bottom: 32px !important;
    border-bottom: 1px solid #2a2a2a !important;
    margin-bottom: 40px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }
  footer.site-footer .footer-logo-text {
    font-family: 'Cormorant Garamond', serif !important;
    font-size: 28px !important;
    font-weight: 400 !important;
    color: #fff !important;
    letter-spacing: 0.02em !important;
    line-height: 1 !important;
    margin: 0 !important;
  }
  footer.site-footer .footer-tagline {
    font-size: 11px !important;
    letter-spacing: 0.2em !important;
    text-transform: uppercase !important;
    color: #777 !important;
    margin: 0 !important;
  }
  footer.site-footer .footer-info {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 48px !important;
    margin-bottom: 48px !important;
    width: 100% !important;
  }
  footer.site-footer .footer-col { min-width: 0 !important; }
  footer.site-footer .footer-col h4 {
    color: #fff !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase !important;
    margin: 0 0 16px 0 !important;
    padding: 0 !important;
  }
  footer.site-footer .footer-col p {
    margin: 4px 0 !important;
    padding: 0 !important;
    color: #888 !important;
    font-size: 13px !important;
    line-height: 1.8 !important;
  }
  footer.site-footer .footer-col a {
    color: #aaa !important;
    text-decoration: none !important;
    transition: color 0.2s !important;
  }
  footer.site-footer .footer-col a:hover { color: #fff !important; }
  footer.site-footer .footer-tel {
    font-size: 17px !important;
    color: #fff !important;
    font-weight: 300 !important;
    letter-spacing: 0.05em !important;
    margin-bottom: 10px !important;
  }
  footer.site-footer .footer-bottom {
    padding-top: 28px !important;
    border-top: 1px solid #2a2a2a !important;
    text-align: center !important;
  }
  footer.site-footer .footer-ai-notice {
    font-size: 11px !important;
    color: #777 !important;
    line-height: 1.6 !important;
    letter-spacing: 0.03em !important;
    margin: 0 auto 12px !important;
    max-width: 720px !important;
  }
  footer.site-footer .footer-copyright {
    font-size: 11px !important;
    color: #555 !important;
    letter-spacing: 0.1em !important;
    margin: 0 !important;
  }
  @media (max-width: 768px) {
    footer.site-footer { padding: 56px 0 32px !important; }
    footer.site-footer .footer-container { padding: 0 20px !important; }
    footer.site-footer .footer-info {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
    footer.site-footer .footer-logo-text { font-size: 24px !important; }
    footer.site-footer .footer-tel { font-size: 15px !important; }
  }

  /* Smart FAB */
  .smart-fab {
    position: fixed; right: 24px; bottom: 24px;
    background: #03c75a; color: #fff;
    display: flex; align-items: center; gap: 12px;
    padding: 12px 20px 12px 16px;
    border-radius: 999px;
    box-shadow: 0 10px 30px rgba(3,199,90,0.3);
    z-index: 50;
  }
  .smart-fab__icon {
    width: 28px; height: 28px;
    background: #fff; color: #03c75a;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 16px;
  }
  .smart-fab__text { display: flex; flex-direction: column; }
  .smart-fab__text strong {
    font-size: 10px; letter-spacing: 0.1em;
  }
  .smart-fab__text span {
    font-size: 13px; font-weight: 500;
  }
</style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="header-logo" href="#top">
        Soumé
        <small>PERFUMED BODY LOTION SPRAY</small>
      </a>
      <nav class="header-nav">
        <a href="#products">Products</a>
        <a href="#fragrance">Fragrance</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#brand-story">Brand</a>
        <a href="#archive">Archive</a>
        <a href="#purchase">Purchase</a>
      </nav>
      <a class="header-cta" href="${LINKS.smartstore}" target="_blank" rel="noreferrer">스마트스토어 바로가기</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      ${heroSlidesHtml}
      <div class="hero-progress">
        ${heroProgressHtml}
      </div>
    </section>

    <section class="section" id="products">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Core Products</div>
          <h2>두 가지 시그니처,<br />매일의 무드를 선명하게</h2>
          <p>Ocean Breeze와 Forest Whisper. 낮의 바다와 저녁의 숲, 서로 다른 두 가지 향으로 자신의 무드를 선택할 수 있도록 설계했습니다.</p>
        </div>
        <div class="products-grid">${productCardsHtml}</div>
      </div>
    </section>

    <section class="section" id="fragrance" style="background:#ebe4d7;">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Fragrance Notes</div>
          <h2>향의 흐름을 따라가는<br />Top · Middle · Base</h2>
          <p>각 시그니처는 탑·미들·베이스의 세 층으로 설계되어, 시간이 지날수록 향이 부드럽게 변화하며 피부 위에 자연스럽게 머뭅니다.</p>
        </div>
        <div class="fragrance-grid">${fragranceCardsHtml}</div>
      </div>
    </section>

    <section class="section" id="ingredients">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Key Ingredients</div>
          <h2>향만큼 중요한,<br />피부를 위한 핵심 성분</h2>
          <p>Soumé는 향수가 아닌 퍼퓸 바디 로션 스프레이입니다. 5중 세라마이드와 복합 히알루론산, 식약처 인증 기능성 성분으로 피부를 함께 케어합니다.</p>
        </div>
        <div class="ingredients-grid">${ingredientCardsHtml}</div>
      </div>
    </section>

    <section class="section" id="brand-story" style="background:#ebe4d7;">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Brand Story</div>
          <h2>향과 케어가 만나는 자리,<br />Soumé의 바디 리추얼</h2>
        </div>
        <div class="brand-grid">
          <div class="brand-copy">
            <h3>Ocean Breeze와 Forest Whisper,<br />서로 다른 두 가지 무드</h3>
            <p>하나는 산뜻한 시트러스 아쿠아, 다른 하나는 포근한 우디 머스크. 두 제품 모두 동일한 5중 세라마이드와 복합 히알루론산을 담아, 향만 다르고 케어는 같은 완성도로 설계했습니다.</p>
            <div class="brand-points">${brandPointsHtml}</div>
          </div>
          <div class="brand-image">
            <img src="${ASSETS.campaign01}" alt="Soumé brand visual" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="howto">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">How to Use</div>
          <h2>가장 자연스럽게,<br />가장 오래 머무는 사용법</h2>
        </div>
        <div class="howto-grid">${howToUseHtml}</div>
      </div>
    </section>

    <section class="section" id="signature" style="background:#ebe4d7;">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Signature Visual</div>
          <h2>제품을 넘어,<br />브랜드의 톤을 기억하도록</h2>
        </div>
        <div class="signature-grid">${signatureCardsHtml}</div>
      </div>
    </section>

    <section class="section" id="archive">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">Visual Archive</div>
          <h2>브랜드의 모든 장면,<br />하나의 흐름으로</h2>
        </div>
        <div class="archive-grid">${archiveCardsHtml}</div>
        <p class="ai-notice">
          ※ 본 페이지에 사용된 일부 비주얼 이미지는 브랜드 무드 표현을 위해 AI로 생성된 이미지입니다.
          실제 제품 패키지 및 성분 정보는 제품 상세 페이지를 참고해 주세요.
        </p>
      </div>
    </section>

    <section class="section" id="purchase">
      <div class="container">
        <div class="cta-panel">
          <div class="cta-copy">
            <small>Official Store</small>
            <h2>지금 가장 빠른 구매 동선</h2>
            <p>메인 구매 링크는 스마트스토어 한 곳으로 집중했습니다. 두 시그니처를 비교하고 바로 이동할 수 있도록 설계했습니다.</p>
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
    <div class="footer-container">
      <div class="footer-brand">
        <p class="footer-logo-text">Soumé</p>
        <p class="footer-tagline">Perfumed Body Lotion Spray</p>
      </div>
      <div class="footer-info">
        <div class="footer-col">
          <h4>고객센터</h4>
          <p class="footer-tel">${COMPANY.tel}</p>
          <p>${COMPANY.hours.weekday}</p>
          <p>${COMPANY.hours.lunch}</p>
          <p>${COMPANY.hours.holiday}</p>
          <p><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p>
        </div>
        <div class="footer-col">
          <h4>회사 정보</h4>
          <p>상호: ${COMPANY.name}</p>
          <p>대표: ${COMPANY.ceo}</p>
          <p>주소: ${COMPANY.address}</p>
          <p>사업자등록번호: ${COMPANY.bizNumber}</p>
          <p>통신판매업신고: ${COMPANY.mailOrderNumber}</p>
        </div>
        <div class="footer-col">
          <h4>구매 및 채널</h4>
          <p><a href="${LINKS.smartstore}" target="_blank" rel="noopener">네이버 스마트스토어</a></p>
          <p><a href="mailto:${COMPANY.email}">제휴 · 문의</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-ai-notice">
          ※ 본 사이트의 일부 비주얼 이미지는 브랜드 무드 표현을 위해 AI로 생성된 이미지이며, 실제 제품 사진이 아닙니다.
        </p>
        <p class="footer-copyright">© 2026 ${COMPANY.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <a class="smart-fab" href="${LINKS.smartstore}" target="_blank" rel="noreferrer" aria-label="스마트스토어 바로가기">
    <span class="smart-fab__icon">N</span>
    <span class="smart-fab__text">
      <strong>OFFICIAL STORE</strong>
      <span>스마트스토어 가기</span>
    </span>
  </a>

  <script>
    (function () {
      var slideInterval = 5000;
      var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
      var progressItems = Array.prototype.slice.call(document.querySelectorAll('.hero-progress-item'));
      var videos = Array.prototype.slice.call(document.querySelectorAll('.hero-video'));
      var current = 0;
      var timer = null;

      function syncVideos(index) {
        videos.forEach(function (v, i) {
          try {
            if (i === index) {
              v.currentTime = 0;
              var p = v.play();
              if (p && p.catch) p.catch(function(){});
            } else {
              v.pause();
            }
          } catch(e) {}
        });
      }

      function activateSlide(index) {
        current = index;
        slides.forEach(function (s, i) {
          s.classList.toggle('is-active', i === index);
        });
        progressItems.forEach(function (p, i) {
          // 애니메이션 재시작을 위해 클래스 제거 후 다시 추가
          p.classList.remove('is-active');
        });
        // 강제 reflow
        void document.body.offsetWidth;
        progressItems.forEach(function (p, i) {
          if (i === index) p.classList.add('is-active');
        });
        syncVideos(index);
      }

      function nextSlide() {
        activateSlide((current + 1) % slides.length);
      }

      function startTimer() {
        if (timer) clearInterval(timer);
        timer = window.setInterval(nextSlide, slideInterval);
      }

      progressItems.forEach(function (p, index) {
        p.addEventListener('click', function () {
          activateSlide(index);
          startTimer();
        });
      });

      if (slides.length > 0) {
        activateSlide(0);
        startTimer();
      }
    })();
  </script>
</body>
</html>`)
})

export default app
