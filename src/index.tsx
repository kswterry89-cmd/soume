import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Soumé — Quiet Luxury in Clean Beauty</title>
  <meta
    name="description"
    content="Soumé는 순수한 포뮬러와 절제된 아름다움으로 완성한 클린 뷰티 브랜드입니다."
  />

  <meta property="og:title" content="Soumé — Quiet Luxury in Clean Beauty" />
  <meta
    property="og:description"
    content="불필요한 것을 덜고, 피부에 필요한 본질만 남긴 Soumé의 새로운 홈페이지."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.genspark.ai/api/files/s/hQl2tovR" />

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
      --line-dark: rgba(17,17,17,0.12);
      --accent: #8f7765;
      --accent-soft: #c8b7a6;
      --max: 1440px;

      --serif: 'Cormorant Garamond', serif;
      --sans: 'Inter', 'Noto Sans KR', sans-serif;
      --kr: 'Noto Sans KR', sans-serif;

      --ease: cubic-bezier(0.22, 1, 0.36, 1);
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

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button, input {
      font: inherit;
    }

    .container {
      width: min(calc(100% - 40px), var(--max));
      margin: 0 auto;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 500;
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
      letter-spacing: -0.035em;
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
      transition: transform 0.35s var(--ease), background 0.35s var(--ease), color 0.35s var(--ease), border-color 0.35s var(--ease);
      cursor: pointer;
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
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(252,249,244,0.76);
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
      display: block;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 28px;
      list-style: none;
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
      align-items: center;
      gap: 12px;
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
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
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
      align-items: stretch;
    }

    .hero-copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(48px, 8vw, 96px) clamp(12px, 2vw, 28px) clamp(48px, 8vw, 96px) 0;
    }

    .hero-copy .eyebrow {
      margin-bottom: 22px;
    }

    .hero-title {
      font-family: var(--serif);
      font-size: clamp(3.1rem, 7vw, 7.2rem);
      font-weight: 400;
      line-height: 0.9;
      letter-spacing: -0.05em;
      margin-bottom: 24px;
    }

    .hero-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--accent);
      display: block;
    }

    .hero-text {
      max-width: 440px;
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
      max-width: 560px;
      border-top: 1px solid var(--line);
      padding-top: 22px;
      display: grid;
      grid-template-columns: repeat(3, minmax(120px, 1fr));
      gap: 18px;
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
      min-height: 700px;
      overflow: hidden;
      background: #e8ddd1;
    }

    .hero-visual img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .hero-badge {
      position: absolute;
      top: 28px;
      right: 28px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 2;
    }

    .hero-badge span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: rgba(255,255,255,0.62);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(17,17,17,0.08);
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
      backdrop-filter: blur(12px);
      border: 1px solid rgba(17,17,17,0.08);
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
      line-height: 1;
      margin-bottom: 8px;
    }

    .hero-card p {
      font-size: 13px;
      line-height: 1.8;
      color: var(--muted);
    }

    .manifesto {
      padding: 120px 0 100px;
      background: var(--paper);
    }

    .manifesto-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 56px;
      align-items: start;
    }

    .manifesto-quote {
      font-family: var(--serif);
      font-size: clamp(2.1rem, 5vw, 4.8rem);
      line-height: 1.02;
      letter-spacing: -0.03em;
      max-width: 940px;
    }

    .manifesto-quote em {
      font-style: italic;
      font-weight: 300;
      color: var(--accent);
    }

    .signature {
      padding: 0 0 120px;
      background: var(--paper);
    }

    .signature-wrap {
      border-top: 1px solid var(--line);
      padding-top: 28px;
      display: grid;
      grid-template-columns: 0.72fr 1.28fr;
      gap: 36px;
      align-items: start;
    }

    .signature-copy {
      position: sticky;
      top: 108px;
      align-self: start;
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
      background: #eee6dc;
      border: 1px solid rgba(17,17,17,0.05);
    }

    .asset-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .asset-card.tall { aspect-ratio: 4 / 5.25; }
    .asset-card.square { aspect-ratio: 1 / 1; }
    .asset-card.wide { grid-column: 1 / -1; aspect-ratio: 16 / 8.4; }

    .asset-caption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
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

    .campaign {
      padding: 120px 0;
      background: var(--white);
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .campaign-head {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 34px;
    }

    .campaign-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }

    .campaign-card {
      background: #f4efe8;
      border: 1px solid rgba(17,17,17,0.06);
    }

    .campaign-image {
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background: #ece4db;
    }

    .campaign-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .campaign-copy {
      padding: 24px 22px 26px;
      border-top: 1px solid rgba(17,17,17,0.08);
    }

    .campaign-copy small {
      display: block;
      margin-bottom: 10px;
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(17,17,17,0.42);
    }

    .campaign-copy h3 {
      font-family: var(--serif);
      font-size: 34px;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 10px;
    }

    .campaign-copy p {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.9;
      color: var(--muted);
      font-weight: 300;
    }

    .philosophy {
      padding: 120px 0;
      background: linear-gradient(180deg, #faf7f2 0%, #ffffff 100%);
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
      object-position: center;
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

    .principles {
      padding: 120px 0;
      background: var(--paper);
    }

    .principles-head {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 40px;
      margin-bottom: 36px;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .principle {
      min-height: 240px;
      padding: 26px 24px 28px;
      background: var(--white);
      border: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .principle .num {
      font-family: var(--serif);
      font-size: 46px;
      line-height: 1;
      color: var(--accent-soft);
      margin-bottom: 18px;
    }

    .principle h3 {
      font-family: var(--serif);
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 12px;
    }

    .principle p {
      font-family: var(--kr);
      font-size: 14px;
      line-height: 1.9;
      font-weight: 300;
      color: var(--muted);
    }

    .newsletter {
      padding: 120px 0;
      background: #111111;
      color: var(--white);
    }

    .newsletter-inner {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 30px;
      align-items: end;
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-top: 26px;
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

    .newsletter .eyebrow {
      color: #cab8a7;
    }

    .newsletter .eyebrow::before {
      background: #cab8a7;
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

    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
    }

    .reveal.in-view {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 1080px) {
      .hero-grid,
      .manifesto-grid,
      .signature-wrap,
      .campaign-head,
      .campaign-grid,
      .philosophy-grid,
      .principles-head,
      .newsletter-inner {
        grid-template-columns: 1fr;
      }

      .signature-copy {
        position: static;
      }

      .newsletter-form {
        min-width: 0;
        width: 100%;
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
      .principles-grid {
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

      .campaign-copy h3,
      .hero-card strong {
        font-size: 28px;
      }

      .section-title,
      .newsletter h2 {
        line-height: 1.02;
      }
    }
  </style>
</head>
<body>
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="Soumé home">
        <img src="/static/soume-logo-black.png" alt="Soumé" />
      </a>

      <ul class="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#signature">Signature</a></li>
        <li><a href="#campaign">Campaign</a></li>
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#newsletter">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <a class="nav-cta" href="#signature">Shop Signature</a>
        <button class="nav-toggle" id="menuToggle" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-inner">
      <a href="#about">About</a>
      <a href="#signature">Signature</a>
      <a href="#campaign">Campaign</a>
      <a href="#philosophy">Philosophy</a>
      <a href="#newsletter">Contact</a>
    </div>
  </div>

  <main>
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">Soumé / Clean Beauty House</span>

          <h1 class="hero-title">
            조용한 럭셔리,<br />
            <em>피부 위에 남는 본질</em>
          </h1>

          <p class="hero-text">
            Soumé는 더 많은 것을 더하지 않습니다.
            불필요한 요소는 덜어내고, 피부에 필요한 경험만 남깁니다.
            절제된 포뮬러와 세련된 오브제 감각으로
            클린 뷰티를 한층 더 우아한 방식으로 다시 정의합니다.
          </p>

          <div class="hero-actions">
            <a href="#signature" class="btn">Explore Ocean Breeze</a>
            <a href="#campaign" class="btn btn-light">View Campaign</a>
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
            src="https://www.genspark.ai/api/files/s/hQl2tovR"
            alt="Soumé main hero"
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
              고급스러운 오브제 감각을 함께 담은 Soumé의 시그니처 컬렉션.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="manifesto" id="about">
      <div class="container manifesto-grid">
        <div class="reveal">
          <span class="eyebrow">Brand Manifesto</span>
          <h2 class="manifesto-quote">
            클린함은 더 단순해야 하고,<br />
            럭셔리는 더 <em>조용해야 한다</em>.
          </h2>
        </div>

        <div class="reveal">
          <p class="section-copy">
            이번 리디자인은 기존 홈페이지처럼 많은 요소를 한 화면에 나열하는 대신,
            시선이 머무는 여백과 톤, 오브제 중심의 구성을 통해
            브랜드의 태도가 먼저 보이도록 재정리했습니다.
            샤넬 특유의 절제된 고급감과 딥디크의 공기감 있는 미니멀 무드를 참고해
            Soumé만의 조용한 럭셔리 톤으로 풀어냈습니다.
          </p>
        </div>
      </div>
    </section>

    <section class="signature" id="signature">
      <div class="container signature-wrap">
        <div class="signature-copy reveal">
          <span class="eyebrow">Signature Product</span>
          <h2 class="section-title">Ocean Breeze</h2>
          <p class="section-copy">
            제품을 단순한 판매 이미지가 아니라
            브랜드를 대표하는 오브제로 보이게 하는 데 집중했습니다.
            실루엣, 캡, 노즐, 사용 순간까지 나누어 보여줌으로써
            제품의 질감과 태도를 동시에 전달합니다.
          </p>

          <div class="signature-notes">
            <div><span>Character</span><span>Citrus · Woody · Marine</span></div>
            <div><span>Texture</span><span>Light Lotion Spray</span></div>
            <div><span>Finish</span><span>Clean · Elegant · Airy</span></div>
          </div>

          <a href="#newsletter" class="btn btn-light">Join the House</a>
        </div>

        <div class="signature-gallery">
          <figure class="asset-card tall reveal">
            <img
              src="https://www.genspark.ai/api/files/s/OcC17y3w"
              alt="Soumé Ocean Breeze product"
              loading="lazy"
            />
            <figcaption class="asset-caption">
              <small>Object</small>
              <strong>Quiet silhouette</strong>
            </figcaption>
          </figure>

          <figure class="asset-card square reveal">
            <img
              src="https://www.genspark.ai/api/files/s/yABHfYQs"
              alt="Soumé Ocean Breeze nozzle detail"
              loading="lazy"
            />
            <figcaption class="asset-caption">
              <small>Detail</small>
              <strong>Crafted finish</strong>
            </figcaption>
          </figure>

          <figure class="asset-card square reveal">
            <img
              src="https://www.genspark.ai/api/files/s/Jqj4P8BY"
              alt="Soumé Ocean Breeze open cap"
              loading="lazy"
            />
            <figcaption class="asset-caption">
              <small>Function</small>
              <strong>Precise spray head</strong>
            </figcaption>
          </figure>

          <figure class="asset-card wide reveal">
            <img
              src="https://www.genspark.ai/api/files/s/vWePOEVJ"
              alt="Soumé editorial portrait"
              loading="lazy"
            />
            <figcaption class="asset-caption">
              <small>Editorial</small>
              <strong>Beauty reduced to its purest form</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="campaign" id="campaign">
      <div class="container">
        <div class="campaign-head">
          <div class="reveal">
            <span class="eyebrow">Campaign Selection</span>
            <h2 class="section-title">Soumé in portrait</h2>
          </div>

          <div class="reveal">
            <p class="section-copy">
              인물 컷은 과장된 광고 톤보다
              피부, 제품, 표정이 조용하게 연결되는 장면 위주로 선별했습니다.
              그래서 제품이 인물과 함께 있을 때도
              전체 화면이 더 고급스럽고 정제되어 보이도록 구성했습니다.
            </p>
          </div>
        </div>

        <div class="campaign-grid">
          <article class="campaign-card reveal">
            <div class="campaign-image">
              <img
                src="https://www.genspark.ai/api/files/s/UIxdm5CR"
                alt="Haena holding Soumé product"
                loading="lazy"
              />
            </div>
            <div class="campaign-copy">
              <small>Campaign 01</small>
              <h3>Soft intimacy</h3>
              <p>
                제품과 피부의 거리감을 줄이고,
                브랜드가 가진 친밀한 럭셔리 톤을 보여주는 인물 중심 캠페인.
              </p>
            </div>
          </article>

          <article class="campaign-card reveal">
            <div class="campaign-image">
              <img
                src="https://www.genspark.ai/api/files/s/DyoTOQLE"
                alt="Yujeong holding Soumé product"
                loading="lazy"
              />
            </div>
            <div class="campaign-copy">
              <small>Campaign 02</small>
              <h3>Modern restraint</h3>
              <p>
                아이보리와 블랙의 대비를 살려
                보다 구조적이고 패션 에디토리얼에 가까운 무드로 정리한 비주얼.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="philosophy" id="philosophy">
      <div class="container philosophy-grid">
        <div class="philosophy-visual reveal">
          <img
            src="https://www.genspark.ai/api/files/s/vWePOEVJ"
            alt="Soumé philosophy visual"
            loading="lazy"
          />
        </div>

        <div class="philosophy-copy reveal">
          <div>
            <span class="eyebrow">House Philosophy</span>
            <h2 class="section-title">
              Less noise,<br />
              <em>more essence</em>
            </h2>
            <p class="section-copy">
              Soumé의 미감은 복잡하지 않습니다.
              강한 자극 대신 조용한 존재감,
              과장된 장식 대신 오래 남는 인상,
              무거운 설명 대신 균형 잡힌 경험을 지향합니다.
            </p>
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

    <section class="principles">
      <div class="container">
        <div class="principles-head">
          <div class="reveal">
            <span class="eyebrow">Maison Principles</span>
            <h2 class="section-title">Less, but better</h2>
          </div>

          <div class="reveal">
            <p class="section-copy">
              기존 사이트의 정보량을 줄이는 대신,
              브랜드 핵심 원칙 세 가지만 더 강하게 남도록 정리했습니다.
              첫 화면부터 제품 설명보다 브랜드 하우스의 세계관이 먼저 읽히는 구조입니다.
            </p>
          </div>
        </div>

        <div class="principles-grid">
          <article class="principle reveal">
            <div>
              <div class="num">01</div>
              <h3>Clean</h3>
              <p>
                피부에 과하게 덧입히지 않는 미니멀한 사용감과
                직관적인 뷰티 경험을 지향합니다.
              </p>
            </div>
          </article>

          <article class="principle reveal">
            <div>
              <div class="num">02</div>
              <h3>Elegant</h3>
              <p>
                시각적 과장을 줄이고,
                절제된 디테일과 오브제 중심의 아름다움으로 완성합니다.
              </p>
            </div>
          </article>

          <article class="principle reveal">
            <div>
              <div class="num">03</div>
              <h3>Essential</h3>
              <p>
                제품 하나만으로도 브랜드 태도가 읽히는 구성.
                Soumé는 본질이 남는 방식으로 기억됩니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="newsletter" id="newsletter">
      <div class="container newsletter-inner">
        <div class="reveal">
          <span class="eyebrow">Private Letter</span>
          <h2>Enter the world of Soumé</h2>
          <p>
            신제품 공개, 브랜드 스토리, 시즌 에디토리얼을
            가장 먼저 받아보는 Soumé 하우스 레터.
          </p>
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
      <img src="/static/soume-logo-black.png" alt="Soumé" class="footer-logo" />
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#signature">Signature</a>
        <a href="#campaign">Campaign</a>
        <a href="#philosophy">Philosophy</a>
      </div>
    </div>
  </footer>

  <script>
    function subscribe(e) {
      e.preventDefault()
      var input = document.getElementById('emailInput')
      var value = input.value.trim()

      if (!value || value.indexOf('@') === -1) {
        alert('올바른 이메일 주소를 입력해주세요.')
        return false
      }

      alert('구독이 완료되었습니다. Soumé의 소식을 가장 먼저 전해드릴게요.')
      input.value = ''
      return false
    }

    var revealEls = document.querySelectorAll('.reveal')
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.12 })

    revealEls.forEach(function(el) {
      io.observe(el)
    })

    var menuToggle = document.getElementById('menuToggle')
    var mobileMenu = document.getElementById('mobileMenu')
    var mobileLinks = mobileMenu.querySelectorAll('a')

    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('open')
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : ''
      })
    }

    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open')
        document.body.style.overflow = ''
      })
    })

    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(a.getAttribute('href'))
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  </script>
</body>
</html>`)
})

export default app
