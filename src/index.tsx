import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

const SITE = {
  brand: 'Soumé',
  title: 'Soumé — Modern Luxury Clean Beauty House',
  description:
    'Soumé는 조용한 럭셔리 무드와 미니멀한 뷰티 루틴을 제안하는 클린 뷰티 하우스입니다.',
  heroEyebrow: 'Soumé / Modern Clean Beauty House',
  heroTitleLine1: '조용하지만',
  heroTitleLine2: '확실하게 남는',
  heroTitleLine3: '럭셔리 뷰티',
  heroDescription:
    '과장된 장식 대신, 오래 남는 감각과 세련된 사용감을 남깁니다. Soumé는 제품력과 무드를 함께 설계하는 감도 높은 뷰티 하우스입니다.',
  heroPrimaryCta: '제품 보기',
  heroSecondaryCta: '브랜드 무드 보기',
  aboutTitle: '감각적인 루틴을 위한 클린 뷰티 하우스',
  aboutDescription:
    'Soumé는 제품을 사용하는 순간의 분위기까지 설계합니다. 정제된 패키지, 부드러운 텍스처, 깔끔한 사용감, 그리고 오래 남는 첫인상이 하나의 브랜드 경험이 되도록 구성했습니다.',
  signatureTitle: 'Ocean Breeze Signature Routine',
  signatureDescription:
    '브랜드의 대표 무드와 제품 세계관을 담은 시그니처 라인입니다. 피부 위에 가볍게 남는 사용감과 정돈된 잔향, 미니멀한 패키지로 Soumé의 핵심 인상을 구현합니다.',
  productsTitle: 'Soumé Best Product Line',
  productsDescription:
    '운영형 이커머스 구조로 바로 붙여 넣을 수 있도록, 제품 카드·상세 모달·구매 버튼까지 포함한 구성으로 제작했습니다.',
  lookbookTitle: 'Lookbook / Editorial Mood',
  lookbookDescription:
    '업로드된 이미지를 중심으로 브랜드 무드와 에디토리얼 분위기를 자연스럽게 보여주는 룩북형 섹션입니다.',
  campaignTitle: 'Campaign / Product & Presence',
  campaignDescription:
    '제품과 인물, 스타일링, 질감이 한 프레임 안에서 조화롭게 보이도록 설계한 브랜드 캠페인 섹션입니다.',
  filmTitle: 'Brand Film',
  filmDescription:
    '영상 파일이 있으면 브랜드 필름으로 재생되고, 없으면 포스터 이미지를 그대로 보여주는 안전한 구조입니다.',
  contactTitle: '회원 전환 / 빠른 시작',
  contactDescription:
    '카카오로 시작하기, 이메일 시작, 뉴스레터 구독 UI를 함께 넣어 양산형 커머스 구조처럼 바로 운영할 수 있게 정리했습니다.',
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

const HERO_SLIDES = [
  {
    image: ASSETS.heroMain,
    eyebrow: 'Hero Visual 01',
    title: 'Quiet Luxury',
    desc: '브랜드의 첫 인상을 구성하는 메인 히어로 컷',
  },
  {
    image: ASSETS.editorialMain,
    eyebrow: 'Hero Visual 02',
    title: 'Editorial Beauty',
    desc: '정제된 피부 표현과 부드러운 에디토리얼 무드',
  },
  {
    image: ASSETS.campaign01,
    eyebrow: 'Hero Visual 03',
    title: 'Campaign Presence',
    desc: '제품과 인물의 존재감을 함께 보여주는 장면',
  },
  {
    image: ASSETS.campaign02,
    eyebrow: 'Hero Visual 04',
    title: 'Clean Styling',
    desc: '양산형 커머스에서 쓰기 좋은 안정적인 브랜드 컷',
  },
]

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    badge: 'Signature',
    name: 'Ocean Breeze Body Lotion Spray',
    subtitle: '가볍게 분사되는 바디 로션 스프레이',
    price: '₩48,000',
    volume: '250ml',
    description:
      '미세하게 분사되는 텍스처가 피부 위에 가볍고 균일하게 밀착됩니다. 과하지 않은 보습감과 정돈된 마무리로 샤워 후, 외출 전, 리프레시가 필요한 순간에 사용하기 좋습니다.',
    notes: ['Fresh Air', 'Soft Musk', 'Clean Finish'],
    ingredients: ['Panthenol', 'Glycerin', 'Botanical Moisture Complex'],
    image: ASSETS.product01,
    gallery: [ASSETS.product01, ASSETS.product02, ASSETS.product03],
    buyLink: 'https://example.com/products/ocean-breeze',
  },
  {
    id: 'veil-recovery',
    badge: 'Daily',
    name: 'Veil Recovery Mist',
    subtitle: '메이크업 전후 모두 쓰기 좋은 리커버리 미스트',
    price: '₩39,000',
    volume: '120ml',
    description:
      '건조한 순간 피부 결을 빠르게 정돈하는 데일리 미스트입니다. 메이크업 전후 모두 부담 없이 사용할 수 있도록 얇고 고른 미세분사감을 중심으로 설계했습니다.',
    notes: ['Transparent Citrus', 'Airy Floral', 'Skin Veil'],
    ingredients: ['Niacinamide', 'Betaine', 'Hyaluronic Acid'],
    image: ASSETS.product02,
    gallery: [ASSETS.product02, ASSETS.editorialMain, ASSETS.campaign01],
    buyLink: 'https://example.com/products/veil-recovery',
  },
  {
    id: 'bare-reset',
    badge: 'Best',
    name: 'Bare Reset Body Care',
    subtitle: '번들거림 없이 정돈된 윤기를 남기는 바디 케어',
    price: '₩52,000',
    volume: '300ml',
    description:
      '무게감은 덜고 사용 후의 정돈된 윤기와 편안함은 더한 바디 케어 포뮬러입니다. 루틴 마무리를 깔끔하게 정리해주는 데 초점을 맞췄습니다.',
    notes: ['Skin Musk', 'Powder Clean', 'Calm Woody'],
    ingredients: ['Ceramide', 'Squalane', 'Soothing Complex'],
    image: ASSETS.product03,
    gallery: [ASSETS.product03, ASSETS.campaign02, ASSETS.product01],
    buyLink: 'https://example.com/products/bare-reset',
  },
]

const LOOKBOOK = [
  {
    title: 'Quiet Skin, Quiet Mood',
    category: 'Lookbook 01',
    image: ASSETS.lookbook01,
    desc: '은은한 톤과 차분한 조도로 브랜드의 첫 인상을 정리하는 룩북 컷',
  },
  {
    title: 'Editorial Softness',
    category: 'Lookbook 02',
    image: ASSETS.lookbook02,
    desc: '에디토리얼한 결로 보여주는 Soumé의 부드러운 존재감',
  },
  {
    title: 'Lasting Impression',
    category: 'Lookbook 03',
    image: ASSETS.lookbook03,
    desc: '양산형 상세페이지와 브랜드 홈페이지 사이를 잇는 안정적 비주얼 무드',
  },
]

const LOGIN = {
  kakaoAuthUrl: '#',
  emailLoginUrl: '#',
}

const json = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c')

const renderHead = () => `
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
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #f5efe7;
      --bg-2: #fbf7f2;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 255, 255, 0.9);
      --text: #181614;
      --muted: #766d62;
      --line: rgba(24, 22, 20, 0.1);
      --line-strong: rgba(24, 22, 20, 0.16);
      --dark: #111111;
      --gold: #c8b08d;
      --gold-deep: #aa8c5f;
      --shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
      --radius-xl: 32px;
      --radius-lg: 24px;
      --radius-md: 18px;
      --radius-sm: 14px;
      --container: 1280px;
      --nav-height: 88px;
      --transition: 220ms ease;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(200, 176, 141, 0.16), transparent 28%),
        linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%);
      font-family: 'Inter', 'Noto Sans KR', sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    a { color: inherit; text-decoration: none; }
    button { font: inherit; cursor: pointer; border: 0; background: none; }
    img, video { display: block; width: 100%; max-width: 100%; }
    .container { width: min(calc(100% - 40px), var(--container)); margin: 0 auto; }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 80;
      backdrop-filter: blur(18px);
      background: rgba(251, 247, 242, 0.72);
      border-bottom: 1px solid transparent;
      transition: background var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .site-header.is-scrolled {
      background: rgba(251, 247, 242, 0.94);
      border-color: var(--line);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
    }

    .nav {
      height: var(--nav-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .brand img {
      width: auto;
      height: 32px;
      object-fit: contain;
    }

    .brand small {
      font-size: 11px;
      color: var(--muted);
      letter-spacing: 0.24em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    .nav-links a {
      position: relative;
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .nav-links a::after {
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

    .nav-links a:hover::after { transform: scaleX(1); }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 48px;
      padding: 0 20px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: transform var(--transition), opacity var(--transition), background var(--transition), color var(--transition), border-color var(--transition);
      white-space: nowrap;
    }

    .btn:hover { transform: translateY(-1px); }
    .btn-dark { background: var(--dark); color: white; }
    .btn-line { border: 1px solid var(--line-strong); color: var(--text); background: rgba(255,255,255,0.55); }
    .btn-kakao { background: #FEE500; color: #191919; }
    .btn-soft { background: rgba(255,255,255,0.72); color: var(--text); border: 1px solid var(--line); }

    .menu-btn {
      display: none;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.7);
      align-items: center;
      justify-content: center;
    }

    .menu-btn span,
    .menu-btn span::before,
    .menu-btn span::after {
      content: '';
      display: block;
      width: 18px;
      height: 1.5px;
      background: var(--text);
      position: relative;
    }

    .menu-btn span::before { position: absolute; top: -6px; left: 0; }
    .menu-btn span::after { position: absolute; top: 6px; left: 0; }

    .mobile-panel {
      display: none;
      padding: 0 0 18px;
    }

    .mobile-panel__inner {
      display: grid;
      gap: 8px;
      padding: 14px;
      border-radius: 22px;
      background: rgba(255,255,255,0.88);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .mobile-panel a, .mobile-panel button {
      text-align: left;
      padding: 14px 16px;
      border-radius: 14px;
      background: rgba(24,22,20,0.04);
      color: var(--text);
    }

    .hero {
      padding: 26px 0 72px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 24px;
      align-items: stretch;
    }

    .hero-copy,
    .hero-media {
      min-height: calc(100vh - var(--nav-height) - 58px);
      border-radius: 34px;
      overflow: hidden;
      position: relative;
      box-shadow: var(--shadow);
    }

    .hero-copy {
      padding: clamp(28px, 5vw, 64px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.68)),
        radial-gradient(circle at 0% 0%, rgba(200, 176, 141, 0.18), transparent 30%),
        #f7f2eb;
      border: 1px solid rgba(255,255,255,0.8);
    }

    .hero-copy-top {
      display: grid;
      gap: 24px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .eyebrow::before {
      content: '';
      width: 28px;
      height: 1px;
      background: var(--line-strong);
    }

    .hero-title {
      margin: 0;
      font-family: 'Noto Serif KR', serif;
      font-size: clamp(3.2rem, 7vw, 6rem);
      line-height: 0.98;
      letter-spacing: -0.04em;
      font-weight: 600;
      word-break: keep-all;
    }

    .hero-title span { display: block; }

    .hero-description {
      margin: 0;
      max-width: 560px;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.95;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .hero-meta {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }

    .hero-meta-item {
      display: grid;
      gap: 8px;
    }

    .hero-meta-item span {
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero-meta-item strong {
      font-size: 14px;
      line-height: 1.6;
      font-weight: 600;
    }

    .hero-media {
      background: #eadfce;
      border: 1px solid rgba(255,255,255,0.72);
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.8s ease, transform 1.2s ease;
      transform: scale(1.02);
    }

    .hero-slide.is-active {
      opacity: 1;
      transform: scale(1);
      z-index: 1;
    }

    .hero-slide img {
      height: 100%;
      object-fit: cover;
    }

    .hero-slide-overlay {
      position: absolute;
      inset: auto 24px 24px 24px;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: end;
      padding: 18px 18px 18px 18px;
      border-radius: 24px;
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.7);
    }

    .hero-slide-copy small {
      display: block;
      margin-bottom: 6px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero-slide-copy strong {
      display: block;
      font-family: 'Cormorant Garamond', serif;
      font-size: 32px;
      line-height: 0.95;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .hero-slide-copy p {
      margin: 0;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.7;
      max-width: 380px;
    }

    .hero-dots {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .hero-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: rgba(24,22,20,0.18);
      border: 0;
      padding: 0;
    }

    .hero-dot.is-active {
      width: 28px;
      background: var(--dark);
    }

    .section {
      padding: 0 0 96px;
    }

    .section-head {
      display: grid;
      gap: 12px;
      margin-bottom: 30px;
    }

    .section-head h2 {
      margin: 0;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: clamp(2.2rem, 4vw, 4rem);
      line-height: 0.96;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .section-head p {
      margin: 0;
      max-width: 760px;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
    }

    .split-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      align-items: stretch;
    }

    .card {
      background: rgba(255,255,255,0.68);
      border: 1px solid rgba(255,255,255,0.82);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .card-body {
      padding: clamp(24px, 4vw, 40px);
    }

    .card-body h3 {
      margin: 12px 0 14px;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: clamp(2rem, 3vw, 3rem);
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .card-body p {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.9;
    }

    .trust-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 22px;
      padding-top: 22px;
      border-top: 1px solid var(--line);
    }

    .trust-item {
      display: grid;
      gap: 8px;
    }

    .trust-item span {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
    }

    .trust-item strong {
      font-size: 14px;
      line-height: 1.6;
    }

    .frame {
      position: relative;
      overflow: hidden;
      min-height: 560px;
      border-radius: var(--radius-xl);
      background: #ebdfd0;
      box-shadow: var(--shadow);
    }

    .frame img,
    .frame video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .signature-collage {
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 14px;
      margin-top: 24px;
    }

    .signature-main {
      min-height: 420px;
      border-radius: 22px;
      overflow: hidden;
      background: #f2eade;
    }

    .signature-side {
      display: grid;
      gap: 14px;
      grid-template-rows: 1fr 1fr;
    }

    .signature-side-item {
      min-height: 203px;
      border-radius: 22px;
      overflow: hidden;
      background: #f2eade;
    }

    .signature-main img,
    .signature-side-item img {
      height: 100%;
      object-fit: cover;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .product-card {
      overflow: hidden;
      border-radius: 28px;
      background: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.88);
      box-shadow: var(--shadow);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .product-thumb {
      aspect-ratio: 4 / 4.8;
      background: #efe4d7;
      overflow: hidden;
    }

    .product-thumb img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.55s ease;
    }

    .product-card:hover .product-thumb img {
      transform: scale(1.04);
    }

    .product-body {
      padding: 22px;
      display: grid;
      gap: 12px;
    }

    .badge {
      display: inline-flex;
      width: fit-content;
      padding: 7px 10px;
      border-radius: 999px;
      background: rgba(17,17,17,0.06);
      color: var(--muted);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .product-body h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: 2rem;
      line-height: 0.96;
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    .product-body p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .product-meta {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      color: var(--muted);
      font-size: 13px;
    }

    .product-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 2px;
    }

    .campaign-grid,
    .lookbook-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
    }

    .campaign-card {
      position: relative;
      min-height: 560px;
      overflow: hidden;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      background: #eadfce;
    }

    .campaign-card img {
      height: 100%;
      object-fit: cover;
    }

    .campaign-overlay {
      position: absolute;
      inset: auto 0 0 0;
      padding: 28px;
      background: linear-gradient(180deg, transparent 0%, rgba(17,17,17,0.72) 100%);
      color: white;
    }

    .campaign-overlay small {
      display: block;
      margin-bottom: 6px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.9;
    }

    .campaign-overlay strong {
      display: block;
      font-family: 'Cormorant Garamond', serif;
      font-size: 34px;
      line-height: 0.96;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .campaign-overlay p {
      margin: 0;
      font-size: 14px;
      line-height: 1.75;
      opacity: 0.94;
      max-width: 420px;
    }

    .lookbook-card {
      overflow: hidden;
      border-radius: 28px;
      background: rgba(255,255,255,0.68);
      border: 1px solid rgba(255,255,255,0.84);
      box-shadow: var(--shadow);
    }

    .lookbook-thumb {
      aspect-ratio: 4 / 4.8;
      overflow: hidden;
      background: #efe4d7;
    }

    .lookbook-thumb img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.55s ease;
    }

    .lookbook-card:hover .lookbook-thumb img {
      transform: scale(1.04);
    }

    .lookbook-body {
      padding: 22px;
      display: grid;
      gap: 10px;
    }

    .lookbook-body h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: 2rem;
      line-height: 0.96;
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    .lookbook-body p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }
  </style>
</head>
`

const renderHeader = () => `
<header class="site-header" id="site-header">
  <div class="container nav">
    <a class="brand" href="#top" aria-label="Soumé 홈">
      <img src="${ASSETS.logo}" alt="Soumé logo" data-fallback="${ASSETS.filmPoster}" />
      <small>Clean Beauty House</small>
    </a>

    <nav class="nav-links" aria-label="주요 메뉴">
      <a href="#about">About</a>
      <a href="#signature">Signature</a>
      <a href="#products">Products</a>
      <a href="#lookbook">Lookbook</a>
      <a href="#film">Brand Film</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-actions">
      <button class="btn btn-line" type="button" data-open-login>Login</button>
      <a class="btn btn-dark" href="#products">Shop</a>
      <button class="menu-btn" id="menu-btn" aria-label="메뉴 열기" aria-expanded="false">
        <span></span>
      </button>
    </div>
  </div>

  <div class="mobile-panel container" id="mobile-panel">
    <div class="mobile-panel__inner">
      <a href="#about">About</a>
      <a href="#signature">Signature</a>
      <a href="#products">Products</a>
      <a href="#lookbook">Lookbook</a>
      <a href="#film">Brand Film</a>
      <a href="#contact">Contact</a>
      <button type="button" data-open-login>카카오로 시작하기</button>
    </div>
  </div>
</header>
`

const renderHero = () => `
<section class="hero" id="top">
  <div class="container hero-grid">
    <div class="hero-copy">
      <div class="hero-copy-top">
        <span class="eyebrow">${SITE.heroEyebrow}</span>

        <h1 class="hero-title">
          <span>${SITE.heroTitleLine1}</span>
          <span>${SITE.heroTitleLine2}</span>
          <span>${SITE.heroTitleLine3}</span>
        </h1>

        <p class="hero-description">${SITE.heroDescription}</p>

        <div class="hero-actions">
          <a class="btn btn-dark" href="#products">${SITE.heroPrimaryCta}</a>
          <a class="btn btn-soft" href="#lookbook">${SITE.heroSecondaryCta}</a>
          <button class="btn btn-kakao" type="button" data-open-login>카카오 시작</button>
        </div>
      </div>

      <div class="hero-meta">
        <div class="hero-meta-item">
          <span>Brand Mood</span>
          <strong>Modern luxury / Clean beauty / Quiet impact</strong>
        </div>
        <div class="hero-meta-item">
          <span>Use Case</span>
          <strong>브랜드 홈페이지 · 제품 상세 · 캠페인 페이지</strong>
        </div>
        <div class="hero-meta-item">
          <span>Conversion</span>
          <strong>상품 모달 · 구매 버튼 · 로그인 팝업 포함</strong>
        </div>
      </div>
    </div>

    <div class="hero-media" id="hero-media">
      ${HERO_SLIDES.map((slide, index) => `
        <div class="hero-slide${index === 0 ? ' is-active' : ''}" data-hero-slide="${index}">
          <img
            src="${slide.image}"
            alt="${slide.title}"
            data-fallback="${ASSETS.filmPoster}"
          />
        </div>
      `).join('')}

      <div class="hero-slide-overlay">
        <div class="hero-slide-copy">
          <small id="hero-slide-eyebrow">${HERO_SLIDES[0].eyebrow}</small>
          <strong id="hero-slide-title">${HERO_SLIDES[0].title}</strong>
          <p id="hero-slide-desc">${HERO_SLIDES[0].desc}</p>
        </div>

        <div class="hero-dots" id="hero-dots">
          ${HERO_SLIDES.map((_, index) => `
            <button
              class="hero-dot${index === 0 ? ' is-active' : ''}"
              type="button"
              aria-label="슬라이드 ${index + 1}"
              data-hero-dot="${index}"
            ></button>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
</section>
`

const renderAbout = () => `
<section class="section" id="about">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">About Soumé</span>
      <h2>${SITE.aboutTitle}</h2>
      <p>${SITE.aboutDescription}</p>
    </div>

    <div class="split-2">
      <article class="card reveal">
        <div class="card-body">
          <span class="eyebrow">Brand Principle</span>
          <h3>More refined, less noisy</h3>
          <p>
            과한 요소를 늘리기보다 첫 인상이 오래 남는 구조를 지향합니다.
            제품이 주인공이 되되, 전체 홈페이지는 더 양산형 커머스처럼 안정적으로 작동하도록
            정보 구조와 비주얼 리듬을 정돈했습니다.
          </p>

          <div class="trust-list">
            <div class="trust-item">
              <span>Visual</span>
              <strong>Luxury minimal</strong>
            </div>
            <div class="trust-item">
              <span>Commerce</span>
              <strong>Modal + CTA ready</strong>
            </div>
            <div class="trust-item">
              <span>Operation</span>
              <strong>이미지 교체형 구조</strong>
            </div>
          </div>
        </div>
      </article>

      <div class="frame reveal">
        <img src="${ASSETS.editorialMain}" alt="Soumé editorial" data-fallback="${ASSETS.heroMain}" />
      </div>
    </div>
  </div>
</section>
`

const renderSignature = () => `
<section class="section" id="signature">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Signature</span>
      <h2>${SITE.signatureTitle}</h2>
      <p>${SITE.signatureDescription}</p>
    </div>

    <div class="split-2">
      <article class="card reveal">
        <div class="card-body">
          <span class="eyebrow">Signature Product Story</span>
          <h3>브랜드의 첫 인상을 만드는 시그니처 구성</h3>
          <p>
            현재 업로드된 제품 이미지만 사용해서 안전하게 구성한 시그니처 섹션입니다.
            별도의 signature-main, signature-open 같은 파일이 없어도 깨지지 않도록
            product-01 ~ 03 중심으로 콜라주를 재구성했습니다.
          </p>

          <div class="signature-collage">
            <div class="signature-main">
              <img src="${ASSETS.product01}" alt="Signature main product" data-fallback="${ASSETS.editorialMain}" />
            </div>
            <div class="signature-side">
              <div class="signature-side-item">
                <img src="${ASSETS.product02}" alt="Signature detail product 01" data-fallback="${ASSETS.product01}" />
              </div>
              <div class="signature-side-item">
                <img src="${ASSETS.product03}" alt="Signature detail product 02" data-fallback="${ASSETS.product02}" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <div class="frame reveal">
        <img src="${ASSETS.heroMain}" alt="Signature hero visual" data-fallback="${ASSETS.editorialMain}" />
      </div>
    </div>
  </div>
</section>
`
const renderProducts = () => `
<section class="section" id="products">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Products</span>
      <h2>${SITE.productsTitle}</h2>
      <p>${SITE.productsDescription}</p>
    </div>

    <div class="product-grid">
      ${PRODUCTS.map((product) => `
        <article class="product-card reveal">
          <div class="product-thumb">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              data-fallback="${ASSETS.product01}"
            />
          </div>

          <div class="product-body">
            <span class="badge">${product.badge}</span>
            <h3>${product.name}</h3>
            <p>${product.subtitle}</p>

            <div class="product-meta">
              <span>${product.price}</span>
              <span>${product.volume}</span>
            </div>

            <div class="product-actions">
              <button class="btn btn-dark" type="button" data-product-id="${product.id}">
                상세 보기
              </button>
              <a class="btn btn-line" href="${product.buyLink}" target="_blank" rel="noreferrer">
                구매하기
              </a>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  </div>
</section>
`

const renderCampaign = () => `
<section class="section" id="campaign">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Campaign</span>
      <h2>${SITE.campaignTitle}</h2>
      <p>${SITE.campaignDescription}</p>
    </div>

    <div class="campaign-grid">
      <article class="campaign-card reveal">
        <img src="${ASSETS.campaign01}" alt="Campaign 01" data-fallback="${ASSETS.heroMain}" />
        <div class="campaign-overlay">
          <small>Campaign 01</small>
          <strong>Quiet but recognisable</strong>
          <p>
            제품과 얼굴, 배경 톤이 과하지 않게 균형을 이루도록 설계한 메인 캠페인 프레임입니다.
          </p>
        </div>
      </article>

      <article class="campaign-card reveal">
        <img src="${ASSETS.campaign02}" alt="Campaign 02" data-fallback="${ASSETS.editorialMain}" />
        <div class="campaign-overlay">
          <small>Campaign 02</small>
          <strong>Styled for commerce</strong>
          <p>
            브랜드 사이트·상세페이지·프로모션 랜딩 어디에 넣어도 안정적으로 보이는 양산형 프레임입니다.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
`

const renderLookbook = () => `
<section class="section" id="lookbook">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Lookbook</span>
      <h2>${SITE.lookbookTitle}</h2>
      <p>${SITE.lookbookDescription}</p>
    </div>

    <div class="lookbook-grid">
      ${LOOKBOOK.map((item) => `
        <article class="lookbook-card reveal">
          <div class="lookbook-thumb">
            <img
              src="${item.image}"
              alt="${item.title}"
              loading="lazy"
              data-fallback="${ASSETS.editorialMain}"
            />
          </div>

          <div class="lookbook-body">
            <span class="eyebrow">${item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `).join('')}
    </div>
  </div>
</section>
`

const renderPhilosophy = () => `
<section class="section" id="philosophy">
  <div class="container split-2">
    <div class="frame reveal">
      <img src="${ASSETS.lookbook01}" alt="Soumé philosophy visual" data-fallback="${ASSETS.heroMain}" />
    </div>

    <article class="card reveal">
      <div class="card-body">
        <span class="eyebrow">Philosophy</span>
        <h3>양산형이어도 고급스럽게</h3>
        <p>
          이번 버전은 “디자인 시안”이 아니라 실제 운영을 전제로 다시 정리한 구조입니다.
          그래서 과하게 실험적인 브랜드 페이지보다, 상품 전환과 브랜드 무드 전달을 동시에 잡는
          이커머스형 레이아웃으로 재구성했습니다.
        </p>
      </div>
    </article>
  </div>
</section>
`

const renderFilm = () => `
<section class="section" id="film">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Brand Film</span>
      <h2>${SITE.filmTitle}</h2>
      <p>${SITE.filmDescription}</p>
    </div>

    <div class="split-2">
      <article class="card reveal">
        <div class="card-body">
          <span class="eyebrow">Moving Mood</span>
          <h3>포스터만 있어도 깨지지 않는 필름 섹션</h3>
          <p>
            video 파일이 없으면 자동으로 포스터 이미지가 노출됩니다.
            나중에 <strong>public/videos/soume-brand-film.mp4</strong> 파일만 넣으면
            동일한 UI에서 바로 브랜드 필름 섹션으로 전환됩니다.
          </p>

          <div class="hero-actions" style="margin-top: 22px;">
            <button class="btn btn-kakao" type="button" data-open-login>카카오로 시작하기</button>
            <a class="btn btn-line" href="#products">제품 보기</a>
          </div>
        </div>
      </article>

      <div class="frame reveal" id="film-frame">
        <video
          id="brand-film-video"
          playsinline
          muted
          controls
          preload="metadata"
          poster="${ASSETS.filmPoster}"
        >
          <source src="${ASSETS.filmVideo}" type="video/mp4" />
        </video>

        <img
          id="brand-film-fallback"
          src="${ASSETS.filmPoster}"
          alt="Brand film poster"
          class="is-film-fallback"
          data-fallback="${ASSETS.heroMain}"
          style="display:none;"
        />
      </div>
    </div>
  </div>
</section>
`

const renderContact = () => `
<section class="section" id="contact">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Contact / Join</span>
      <h2>${SITE.contactTitle}</h2>
      <p>${SITE.contactDescription}</p>
    </div>

    <div class="split-2">
      <article class="card reveal">
        <div class="card-body">
          <span class="eyebrow">Quick Start</span>
          <h3>카카오 로그인 팝업형 진입</h3>
          <p>
            실제 카카오 OAuth를 붙이려면 앱 키와 리다이렉트 URL이 필요하지만,
            우선은 팝업 UI와 버튼 동작 포인트를 넣어두었습니다.
            지금은 양산형 사이트처럼 “로그인 시작 흐름”이 보이도록 구성한 상태입니다.
          </p>

          <div class="hero-actions" style="margin-top: 22px;">
            <button class="btn btn-kakao" type="button" data-open-login>카카오로 시작하기</button>
            <button class="btn btn-soft" type="button" data-open-login>이메일로 계속</button>
          </div>
        </div>
      </article>

      <article class="card reveal">
        <div class="card-body">
          <span class="eyebrow">Newsletter</span>
          <h3>업데이트 알림 받기</h3>
          <p>
            실제 API 연동 전이라도 프론트 UI는 먼저 운영할 수 있게 만들어두었습니다.
            이메일 저장 로직만 연결하면 뉴스레터/사전 알림 폼으로 바로 전환 가능합니다.
          </p>

          <form id="newsletter-form" style="display:grid; gap:12px; margin-top:22px;">
            <input
              id="newsletter-email"
              type="email"
              placeholder="이메일 주소를 입력하세요"
              autocomplete="email"
              required
              style="height:52px; padding:0 18px; border-radius:999px; border:1px solid rgba(24,22,20,0.12); background:rgba(255,255,255,0.82); outline:none;"
            />
            <div class="hero-actions">
              <button class="btn btn-dark" type="submit">구독하기</button>
              <button class="btn btn-line" type="button" data-open-login>회원 시작</button>
            </div>
          </form>
        </div>
      </article>
    </div>
  </div>
</section>
`

const renderFooter = () => `
<footer style="padding:0 0 40px;">
  <div class="container" style="padding-top:24px; border-top:1px solid rgba(24,22,20,0.08); display:flex; justify-content:space-between; gap:18px; flex-wrap:wrap; color:var(--muted); font-size:13px;">
    <div>${SITE.footerText}</div>
    <div style="display:flex; gap:16px; flex-wrap:wrap;">
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#lookbook">Lookbook</a>
      <a href="#film">Brand Film</a>
    </div>
  </div>
</footer>
`

const
      .modal {
      position: fixed;
      inset: 0;
      z-index: 120;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal.is-open {
      display: flex;
    }

    .modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(10, 10, 10, 0.56);
      backdrop-filter: blur(10px);
    }

    .modal-panel {
      position: relative;
      width: min(1080px, 100%);
      max-height: min(88vh, 980px);
      overflow: auto;
      border-radius: 30px;
      background: #fbf7f2;
      border: 1px solid rgba(255,255,255,0.8);
      box-shadow: 0 30px 90px rgba(0,0,0,0.22);
      z-index: 1;
    }

    .modal-close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(17,17,17,0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      z-index: 2;
    }

    .product-modal-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 640px;
    }

    .product-modal-gallery {
      padding: 28px;
      background: #f1e8dc;
      display: grid;
      gap: 14px;
    }

    .product-modal-main {
      min-height: 420px;
      border-radius: 24px;
      overflow: hidden;
      background: white;
    }

    .product-modal-main img {
      height: 100%;
      object-fit: cover;
    }

    .product-modal-thumbs {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .product-modal-thumb {
      padding: 0;
      border: 0;
      border-radius: 18px;
      overflow: hidden;
      background: white;
      aspect-ratio: 1 / 1.12;
    }

    .product-modal-thumb img {
      height: 100%;
      object-fit: cover;
    }

    .product-modal-body {
      padding: 34px 30px 30px;
      display: grid;
      align-content: start;
      gap: 16px;
    }

    .product-modal-title {
      margin: 0;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: clamp(2.3rem, 4vw, 3.8rem);
      line-height: 0.96;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .product-modal-subtitle,
    .product-modal-desc {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
    }

    .product-modal-meta {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      align-items: center;
      font-size: 15px;
    }

    .product-modal-meta strong {
      font-size: 18px;
    }

    .chip-wrap {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      padding: 9px 12px;
      border-radius: 999px;
      background: rgba(17,17,17,0.06);
      font-size: 13px;
      color: var(--text);
    }

    .detail-block {
      display: grid;
      gap: 8px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
    }

    .detail-block h4 {
      margin: 0;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
    }

    .product-modal-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      padding-top: 8px;
    }

    .login-modal-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 540px;
    }

    .login-visual {
      background:
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)),
        #eadfce;
      min-height: 540px;
    }

    .login-visual img {
      height: 100%;
      object-fit: cover;
    }

    .login-body {
      padding: 38px 32px 32px;
      display: grid;
      align-content: center;
      gap: 18px;
    }

    .login-body h3 {
      margin: 0;
      font-family: 'Cormorant Garamond', 'Noto Serif KR', serif;
      font-size: clamp(2.1rem, 4vw, 3.4rem);
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 600;
    }

    .login-body p {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.85;
    }

    .login-stack {
      display: grid;
      gap: 10px;
      margin-top: 4px;
    }

    .login-note {
      font-size: 12px;
      color: var(--muted);
      line-height: 1.7;
    }

    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 700ms ease, transform 700ms ease;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .hidden {
      display: none !important;
    }

    @media (max-width: 1100px) {
      .hero-grid,
      .split-2,
      .product-modal-layout,
      .login-modal-layout {
        grid-template-columns: 1fr;
      }

      .product-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .campaign-grid,
      .lookbook-grid {
        grid-template-columns: 1fr;
      }

      .hero-copy,
      .hero-media {
        min-height: auto;
      }

      .frame,
      .campaign-card {
        min-height: 460px;
      }

      .login-visual {
        min-height: 320px;
      }
    }

    @media (max-width: 860px) {
      .nav-links,
      .nav-actions .btn-line {
        display: none;
      }

      .menu-btn {
        display: inline-flex;
      }

      .mobile-panel.is-open {
        display: block;
      }

      .hero-meta,
      .trust-list {
        grid-template-columns: 1fr;
      }

      .signature-collage {
        grid-template-columns: 1fr;
      }

      .signature-side {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: none;
      }

      .product-grid {
        grid-template-columns: 1fr;
      }

      .hero-slide-overlay {
        inset: auto 16px 16px 16px;
        flex-direction: column;
        align-items: flex-start;
      }

      .hero-dots {
        justify-content: flex-start;
      }
    }

    @media (max-width: 640px) {
      .container {
        width: min(calc(100% - 28px), var(--container));
      }

      .hero {
        padding: 18px 0 56px;
      }

      .hero-copy {
        padding: 24px;
      }

      .hero-title {
        font-size: clamp(2.4rem, 12vw, 4rem);
        line-height: 1.02;
      }

      .frame,
      .campaign-card,
      .signature-main,
      .signature-side-item {
        min-height: 300px;
      }

      .modal {
        padding: 14px;
      }

      .product-modal-gallery,
      .product-modal-body,
      .login-body {
        padding: 20px;
      }

      .product-modal-thumbs {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  </style>
</head>
`

const renderProductModal = () => `
<div class="modal" id="product-modal" aria-hidden="true">
  <div class="modal-backdrop" data-close-product-modal></div>
  <div class="modal-panel">
    <button class="modal-close" type="button" id="product-modal-close" aria-label="상품 상세 닫기">×</button>

    <div class="product-modal-layout">
      <div class="product-modal-gallery">
        <div class="product-modal-main">
          <img id="product-modal-main-image" src="" alt="" />
        </div>
        <div class="product-modal-thumbs" id="product-modal-thumbs"></div>
      </div>

      <div class="product-modal-body">
        <span class="badge" id="product-modal-badge"></span>
        <h3 class="product-modal-title" id="product-modal-title"></h3>
        <p class="product-modal-subtitle" id="product-modal-subtitle"></p>

        <div class="product-modal-meta">
          <strong id="product-modal-price"></strong>
          <span id="product-modal-volume"></span>
        </div>

        <p class="product-modal-desc" id="product-modal-desc"></p>

        <div class="detail-block">
          <h4>Notes</h4>
          <div class="chip-wrap" id="product-modal-notes"></div>
        </div>

        <div class="detail-block">
          <h4>Ingredients</h4>
          <div class="chip-wrap" id="product-modal-ingredients"></div>
        </div>

        <div class="product-modal-actions">
          <a class="btn btn-dark" id="product-modal-buy" href="#" target="_blank" rel="noreferrer">구매하기</a>
          <button class="btn btn-line" type="button" data-close-product-modal>닫기</button>
        </div>
      </div>
    </div>
  </div>
</div>
`

const renderLoginModal = () => `
<div class="modal" id="login-modal" aria-hidden="true">
  <div class="modal-backdrop" data-close-login-modal></div>
  <div class="modal-panel">
    <button class="modal-close" type="button" id="login-modal-close" aria-label="로그인 닫기">×</button>

    <div class="login-modal-layout">
      <div class="login-visual">
        <img src="${ASSETS.campaign01}" alt="Soumé login visual" data-fallback="${ASSETS.heroMain}" />
      </div>

      <div class="login-body">
        <span class="eyebrow">Quick Join</span>
        <h3>Soumé 시작하기</h3>
        <p>
          실제 카카오 OAuth 연동 전 단계용 팝업 UI입니다.
          지금은 양산형 커머스처럼 로그인/회원진입 흐름이 보이도록 설계했고,
          나중에 카카오 개발자 설정만 연결하면 실서비스형으로 바꿀 수 있습니다.
        </p>

        <div class="login-stack">
          <a class="btn btn-kakao" href="${LOGIN.kakaoAuthUrl}" target="_blank" rel="noreferrer">
            카카오로 시작하기
          </a>
          <a class="btn btn-dark" href="${LOGIN.emailLoginUrl}">
            이메일로 계속하기
          </a>
          <button class="btn btn-line" type="button" data-close-login-modal>
            나중에 할게요
          </button>
        </div>

        <p class="login-note">
          실제 운영 시에는 카카오 JavaScript SDK 또는 OAuth Redirect URL을 연결하세요.
        </p>
      </div>
    </div>
  </div>
</div>
`

app.get('/', (c) => {
  const productsJson = json(PRODUCTS)
  const slidesJson = json(HERO_SLIDES)

  return c.html(`
<!DOCTYPE html>
<html lang="ko">
${renderHead()}
<body>
  ${renderHeader()}

  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderSignature()}
    ${renderProducts()}
    ${renderCampaign()}
    ${renderLookbook()}
    ${renderPhilosophy()}
    ${renderFilm()}
    ${renderContact()}
  </main>

  ${renderFooter()}
  ${renderProductModal()}
  ${renderLoginModal()}

  <script>
    const PRODUCTS = ${productsJson};
    const HERO_SLIDES = ${slidesJson};

    const headerEl = document.getElementById('site-header');
    const menuBtn = document.getElementById('menu-btn');
    const mobilePanel = document.getElementById('mobile-panel');

    const productModal = document.getElementById('product-modal');
    const loginModal = document.getElementById('login-modal');

    const productModalClose = document.getElementById('product-modal-close');
    const loginModalClose = document.getElementById('login-modal-close');

    const productMainImage = document.getElementById('product-modal-main-image');
    const productThumbs = document.getElementById('product-modal-thumbs');
    const productBadge = document.getElementById('product-modal-badge');
    const productTitle = document.getElementById('product-modal-title');
    const productSubtitle = document.getElementById('product-modal-subtitle');
    const productPrice = document.getElementById('product-modal-price');
    const productVolume = document.getElementById('product-modal-volume');
    const productDesc = document.getElementById('product-modal-desc');
    const productNotes = document.getElementById('product-modal-notes');
    const productIngredients = document.getElementById('product-modal-ingredients');
    const productBuy = document.getElementById('product-modal-buy');

    const slideEls = Array.from(document.querySelectorAll('[data-hero-slide]'));
    const dotEls = Array.from(document.querySelectorAll('[data-hero-dot]'));
    const slideEyebrow = document.getElementById('hero-slide-eyebrow');
    const slideTitle = document.getElementById('hero-slide-title');
    const slideDesc = document.getElementById('hero-slide-desc');

    let currentSlide = 0;
    let heroTimer = null;

    function setHeaderState() {
      if (!headerEl) return;
      if (window.scrollY > 8) headerEl.classList.add('is-scrolled');
      else headerEl.classList.remove('is-scrolled');
    }

    function setupMobileMenu() {
      if (!menuBtn || !mobilePanel) return;

      menuBtn.addEventListener('click', function () {
        const isOpen = mobilePanel.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    function setupSmoothScroll() {
      const links = Array.from(document.querySelectorAll('a[href^="#"]'));
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
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }

    function setupReveal() {
      const items = Array.from(document.querySelectorAll('.reveal'));
      if (!('IntersectionObserver' in window)) {
        items.forEach(function (item) { item.classList.add('is-visible'); });
        return;
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      items.forEach(function (item) { observer.observe(item); });
    }

    function applyImageFallback(img) {
      if (!img) return;
      img.addEventListener('error', function () {
        const fallback = img.getAttribute('data-fallback');
        if (fallback && img.src.indexOf(fallback) === -1) {
          img.src = fallback;
        }
      });
    }

    function setupAllImageFallbacks() {
      const imgs = Array.from(document.querySelectorAll('img[data-fallback]'));
      imgs.forEach(function (img) { applyImageFallback(img); });
    }

    function setupFilmFallback() {
      const video = document.getElementById('brand-film-video');
      const fallback = document.getElementById('brand-film-fallback');

      if (!video || !fallback) return;

      function showFallback() {
        video.classList.add('hidden');
        fallback.style.display = 'block';
      }

      video.addEventListener('error', showFallback);

      const source = video.querySelector('source');
      if (!source || !source.getAttribute('src')) {
        showFallback();
      }
    }

    function renderChips(container, items) {
      if (!container) return;
      container.innerHTML = '';
      (items || []).forEach(function (item) {
        const span = document.createElement('span');
        span.className = 'chip';
        span.textContent = item;
        container.appendChild(span);
      });
    }

    function renderProductThumbs(images, title) {
      if (!productThumbs || !productMainImage) return;
      productThumbs.innerHTML = '';

      (images || []).forEach(function (src, index) {
        const btn = document.createElement('button');
        btn.className = 'product-modal-thumb';
        btn.type = 'button';
        btn.setAttribute('aria-label', title + ' 썸네일 ' + (index + 1));

        const img = document.createElement('img');
        img.src = src;
        img.alt = title + ' gallery ' + (index + 1);
        img.setAttribute('data-fallback', '${ASSETS.product01}');
        applyImageFallback(img);

        btn.appendChild(img);
        btn.addEventListener('click', function () {
          productMainImage.src = src;
          productMainImage.alt = title;
        });

        productThumbs.appendChild(btn);
      });
    }

    function openProductModal(productId) {
      const product = PRODUCTS.find(function (item) { return item.id === productId; });
      if (!product || !productModal) return;

      if (productBadge) productBadge.textContent = product.badge;
      if (productTitle) productTitle.textContent = product.name;
      if (productSubtitle) productSubtitle.textContent = product.subtitle;
      if (productPrice) productPrice.textContent = product.price;
      if (productVolume) productVolume.textContent = product.volume;
      if (productDesc) productDesc.textContent = product.description;
      if (productBuy) productBuy.setAttribute('href', product.buyLink || '#');

      if (productMainImage) {
        productMainImage.src = product.image;
        productMainImage.alt = product.name;
        productMainImage.setAttribute('data-fallback', '${ASSETS.product01}');
        applyImageFallback(productMainImage);
      }

      renderChips(productNotes, product.notes || []);
      renderChips(productIngredients, product.ingredients || []);
      renderProductThumbs(product.gallery || [product.image], product.name);

      productModal.classList.add('is-open');
      productModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
      if (!productModal) return;
      productModal.classList.remove('is-open');
      productModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function openLoginModal() {
      if (!loginModal) return;
      loginModal.classList.add('is-open');
      loginModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLoginModal() {
      if (!loginModal) return;
      loginModal.classList.remove('is-open');
      loginModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function setupProductModal() {
      const triggers = Array.from(document.querySelectorAll('[data-product-id]'));
      triggers.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const id = btn.getAttribute('data-product-id');
          if (id) openProductModal(id);
        });
      });

      if (productModalClose) {
        productModalClose.addEventListener('click', closeProductModal);
      }

      Array.from(document.querySelectorAll('[data-close-product-modal]')).forEach(function (el) {
        el.addEventListener('click', closeProductModal);
      });
    }

    function setupLoginModal() {
      Array.from(document.querySelectorAll('[data-open-login]')).forEach(function (el) {
        el.addEventListener('click', openLoginModal);
      });

      if (loginModalClose) {
        loginModalClose.addEventListener('click', closeLoginModal);
      }

      Array.from(document.querySelectorAll('[data-close-login-modal]')).forEach(function (el) {
        el.addEventListener('click', closeLoginModal);
      });
    }

    function updateHeroSlide(index) {
      currentSlide = index;

      slideEls.forEach(function (slide, i) {
        if (i === index) slide.classList.add('is-active');
        else slide.classList.remove('is-active');
      });

      dotEls.forEach(function (dot, i) {
        if (i === index) dot.classList.add('is-active');
        else dot.classList.remove('is-active');
      });

      const data = HERO_SLIDES[index];
      if (slideEyebrow) slideEyebrow.textContent = data.eyebrow;
      if (slideTitle) slideTitle.textContent = data.title;
      if (slideDesc) slideDesc.textContent = data.desc;
    }

    function startHeroSlider() {
      if (!slideEls.length) return;

      dotEls.forEach(function (dot) {
        dot.addEventListener('click', function () {
          const index = Number(dot.getAttribute('data-hero-dot'));
          if (!Number.isNaN(index)) {
            updateHeroSlide(index);
            restartHeroSlider();
          }
        });
      });

      heroTimer = window.setInterval(function () {
        const next = (currentSlide + 1) % HERO_SLIDES.length;
        updateHeroSlide(next);
      }, 4200);
    }

    function restartHeroSlider() {
      if (heroTimer) window.clearInterval(heroTimer);
      startHeroSlider();
    }

    function setupNewsletter() {
      const form = document.getElementById('newsletter-form');
      const input = document.getElementById('newsletter-email');

      if (!form || !input) return;

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;
        window.alert('뉴스레터 UI 연결 완료. 실제 저장 API만 붙이면 운영 가능합니다.\\n입력값: ' + value);
        form.reset();
      });
    }

    function setupEscClose() {
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeProductModal();
          closeLoginModal();
        }
      });
    }

    setHeaderState();
    window.addEventListener('scroll', setHeaderState);

    setupMobileMenu();
    setupSmoothScroll();
    setupReveal();
    setupAllImageFallbacks();
    setupFilmFallback();
    setupProductModal();
    setupLoginModal();
    setupNewsletter();
    setupEscClose();
    updateHeroSlide(0);
    startHeroSlider();
  </script>
</body>
</html>
  `)
})

export default app
