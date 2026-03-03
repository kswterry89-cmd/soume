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
  <title>Soumé — Clean Beauty, Redefined</title>
  <meta name="description" content="Soumé - 클린뷰티의 새로운 기준. 순수한 성분과 혁신적 기술로 피부 본연의 아름다움을 되찾아드립니다." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Sans+KR:wght@200;300;400;500&family=Inter:wght@200;300;400;500&display=swap" rel="stylesheet" />
  <style>
    /* ─── RESET ─── */
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

    :root {
      --white:   #FFFFFF;
      --off:     #F8F6F2;
      --parchment: #F2EDE4;
      --blush:   #EDE0D4;
      --mist:    #E8EEE8;
      --sage:    #8FAF82;
      --sage-dk: #5C7A52;
      --stone:   #B0A090;
      --stone-dk:#7A6D60;
      --ink:     #1A1814;
      --ink-lt:  #2E2B26;
      --warm:    #C4A882;
      --warm-lt: #DFC9A8;
      --accent:  #A8967E;
      --gray-1:  #F5F3EF;
      --gray-2:  #E0DDD8;
      --gray-3:  #B8B4AE;
      --gray-4:  #7A7670;
      --gray-5:  #454240;

      --serif: 'Cormorant Garamond', Georgia, serif;
      --sans:  'Inter', 'Noto Sans KR', sans-serif;
      --noto:  'Noto Sans KR', sans-serif;

      --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: var(--sans);
      background: var(--white);
      color: var(--ink);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── LOADER ─── */
    #loader {
      position: fixed; inset: 0; z-index: 9999;
      background: var(--ink);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: clamp(20px, 5vh, 40px);
      transition: opacity 1.2s var(--ease), visibility 1.2s;
    }
    #loader.out { opacity: 0; visibility: hidden; }

    .loader-logo {
      height: clamp(28px, 8vw, 44px); width: auto;
      animation: logoFadeIn 1.2s var(--ease) forwards;
      opacity: 0;
      filter: invert(1);
    }
    @keyframes logoFadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .loader-bar {
      width: clamp(60px, 15vw, 80px); height: 1px;
      background: rgba(255,255,255,0.15);
      position: relative; overflow: hidden;
    }
    .loader-bar::after {
      content: '';
      position: absolute; inset: 0;
      background: var(--warm-lt);
      transform: translateX(-100%);
      animation: barSlide 1.2s var(--ease) 0.5s forwards;
    }
    @keyframes barSlide { to { transform: translateX(0); } }

    /* ─── NAV ─── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: clamp(56px, 12vw, 76px);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(20px, 4vw, 60px);
      transition: background 0.5s var(--ease), border-color 0.5s var(--ease), height 0.4s;
    }
    nav.solid {
      background: rgba(248, 246, 242, 0.97);
      backdrop-filter: blur(24px);
      border-bottom: 1px solid var(--gray-2);
      height: clamp(48px, 10vw, 62px);
    }
    nav.solid .nav-logo img { filter: none; }
    nav.solid .nav-menu a { color: var(--ink); }
    nav.solid .nav-pill { background: var(--ink); color: var(--white); }

    .nav-logo img {
      height: clamp(18px, 5vw, 26px); width: auto;
      display: block;
      filter: invert(1);
      transition: opacity 0.3s, filter 0.5s;
    }
    .nav-logo:hover img { opacity: 0.6; }

    .nav-menu {
      display: flex; align-items: center; gap: clamp(24px, 4vw, 40px);
      list-style: none;
    }
    .nav-menu a {
      font-family: var(--sans);
      font-size: clamp(9px, 1.5vw, 11px); font-weight: 400;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      text-decoration: none;
      transition: color 0.25s, opacity 0.25s;
    }
    .nav-menu a:hover { color: var(--white); opacity: 1; }

    .nav-right { display: flex; align-items: center; gap: clamp(12px, 3vw, 20px); }
    .nav-pill {
      padding: clamp(7px, 1.5vw, 9px) clamp(16px, 3vw, 24px);
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      color: var(--white);
      font-size: clamp(9px, 1.5vw, 11px); font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 100px;
      border: 1px solid rgba(255,255,255,0.25);
      transition: background 0.3s, border-color 0.3s, transform 0.25s;
    }
    .nav-pill:hover { background: var(--white); color: var(--ink); transform: translateY(-1px); }

    .nav-burger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
    }
    .nav-burger span {
      width: 22px; height: 1.5px; background: var(--white);
      display: block; transition: 0.3s;
    }
    nav.solid .nav-burger span { background: var(--ink); }

    /* ─── MOBILE OVERLAY ─── */
    .mob-overlay {
      display: none; position: fixed; inset: 0; z-index: 998;
      background: var(--ink);
      flex-direction: column; align-items: center; justify-content: center; gap: clamp(24px, 6vw, 32px);
    }
    .mob-overlay.open { display: flex; }
    .mob-overlay a {
      font-family: var(--serif);
      font-size: clamp(2rem, 7vw, 3rem); font-weight: 300;
      color: var(--white); text-decoration: none;
      letter-spacing: 0.04em;
      transition: color 0.2s;
    }
    .mob-overlay a:hover { color: var(--warm-lt); }
    .mob-close {
      position: absolute; top: clamp(20px, 5vw, 28px); right: clamp(20px, 5vw, 36px);
      background: none; border: none;
      color: var(--white); font-size: clamp(1rem, 3vw, 1.4rem); cursor: pointer; opacity: 0.5;
    }
    .mob-close:hover { opacity: 1; }

    /* ══════════════════════════════════════
       HERO — FULLSCREEN CAMPAIGN SLIDESHOW
       ══════════════════════════════════════ */
    .hero {
      position: relative;
      height: 100svh; min-height: clamp(500px, 100vh, 1200px);
      overflow: hidden;
    }

    /* 슬라이드 */
    .hero-slides { position: absolute; inset: 0; }
    .hero-slide {
      position: absolute; inset: 0;
      opacity: 0;
      transition: opacity 1.6s ease;
    }
    .hero-slide.active { opacity: 1; }
    .hero-slide img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center top;
      transform: scale(1.06);
      transition: transform 8s ease;
    }
    .hero-slide.active img { transform: scale(1); }

    /* 오버레이 그라디언트 */
    .hero-overlay {
      position: absolute; inset: 0; z-index: 1;
      background:
        linear-gradient(to top,
          rgba(10,8,6,0.88) 0%,
          rgba(10,8,6,0.45) 35%,
          rgba(10,8,6,0.15) 65%,
          rgba(10,8,6,0.05) 100%),
        linear-gradient(to right,
          rgba(10,8,6,0.5) 0%,
          transparent 55%);
    }

    /* 히어로 콘텐츠 전체 */
    .hero-content {
      position: absolute; inset: 0; z-index: 2;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 0 clamp(20px, 5vw, 80px) clamp(40px, 10vw, 80px);
    }

    /* 왼쪽 텍스트 */
    .hero-text { max-width: 600px; }

    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: clamp(8px, 2vw, 12px);
      font-size: clamp(8px, 1.5vw, 10px); font-weight: 400; letter-spacing: 0.42em; text-transform: uppercase;
      color: var(--warm-lt); margin-bottom: clamp(16px, 4vw, 28px);
      opacity: 0; animation: heroUp 1s var(--ease) 1.5s forwards;
    }
    .hero-eyebrow::before { content:''; width: clamp(16px, 4vw, 24px); height:1px; background:var(--warm-lt); }

    .hero-headline {
      font-family: var(--serif);
      font-size: clamp(2rem, 6vw, 7.5rem);
      font-weight: 300; line-height: 1.0;
      color: var(--white); letter-spacing: -0.015em;
      margin-bottom: clamp(16px, 4vw, 28px);
      opacity: 0; animation: heroUp 1.1s var(--ease) 1.7s forwards;
    }
    .hero-headline em {
      font-style: italic;
      color: var(--warm-lt);
      display: block;
      padding-left: 0.5em;
    }

    .hero-sub {
      font-family: var(--noto);
      font-size: clamp(0.75rem, 2vw, 0.875rem); font-weight: 300; line-height: 1.95;
      color: rgba(255,255,255,0.55); max-width: 380px;
      margin-bottom: clamp(24px, 6vw, 44px);
      opacity: 0; animation: heroUp 1s var(--ease) 1.9s forwards;
    }

    .hero-actions {
      display: flex; align-items: center; gap: clamp(12px, 3vw, 16px);
      opacity: 0; animation: heroUp 1s var(--ease) 2.1s forwards;
      flex-wrap: wrap;
    }
    .btn-hero-primary {
      display: inline-flex; align-items: center; gap: clamp(6px, 1.5vw, 10px);
      padding: clamp(10px, 2vw, 15px) clamp(20px, 4vw, 36px);
      background: var(--white); color: var(--ink);
      font-size: clamp(9px, 1.5vw, 11px); letter-spacing: 0.16em; text-transform: uppercase;
      text-decoration: none; font-family: var(--sans);
      transition: background 0.3s, transform 0.3s;
    }
    .btn-hero-primary svg { width: 13px; height: 13px; flex-shrink: 0; }
    .btn-hero-primary:hover { background: var(--warm-lt); transform: translateY(-2px); }

    .btn-hero-ghost {
      display: inline-flex; align-items: center; gap: clamp(6px, 1.5vw, 8px);
      font-size: clamp(8px, 1.5vw, 11px); letter-spacing: 0.14em; text-transform: uppercase;
      color: rgba(255,255,255,0.65); text-decoration: none;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding-bottom: 3px;
      transition: color 0.25s, border-color 0.25s;
      font-family: var(--sans);
    }
    .btn-hero-ghost:hover { color: var(--white); border-color: rgba(255,255,255,0.7); }

    /* 오른쪽 슬라이드 썸네일 네비 */
    .hero-nav {
      position: absolute; right: clamp(20px, 4vw, 60px); bottom: clamp(40px, 8vw, 80px); z-index: 3;
      display: flex; flex-direction: column; gap: clamp(6px, 1.5vw, 10px);
      opacity: 0; animation: heroFade 1s var(--ease) 2.3s forwards;
    }
    .hero-nav-item {
      display: flex; align-items: center; gap: clamp(10px, 2vw, 14px);
      background: none; border: none; cursor: pointer;
      padding: clamp(6px, 1.5vw, 8px) clamp(6px, 1.5vw, 10px);
      opacity: 0.4; transition: opacity 0.35s;
    }
    .hero-nav-item.active, .hero-nav-item:hover { opacity: 1; }
    .hero-nav-thumb {
      width: clamp(32px, 6vw, 46px); height: clamp(42px, 8vw, 62px);
      object-fit: cover; object-position: top;
      outline: 2px solid transparent; outline-offset: 2px;
      transition: outline-color 0.35s;
    }
    .hero-nav-item.active .hero-nav-thumb { outline-color: rgba(255,255,255,0.8); }
    .hero-nav-info { text-align: right; }
    .hero-nav-name {
      font-family: var(--serif);
      font-size: clamp(0.75rem, 2vw, 0.9rem); font-weight: 400; color: var(--white);
      display: block; line-height: 1;
    }
    .hero-nav-role {
      font-size: clamp(7px, 1.2vw, 9px); letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(255,255,255,0.4); margin-top: 3px;
    }

    /* 진행 바 */
    .hero-progress {
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 3;
      height: 2px; background: rgba(255,255,255,0.08);
    }
    .hero-progress-bar {
      height: 100%; background: var(--warm);
      width: 0%; transition: width 0.1s linear;
    }

    /* 스크롤 힌트 */
    .hero-scroll {
      position: absolute; left: clamp(20px, 4vw, 80px); bottom: clamp(24px, 5vw, 36px); z-index: 3;
      display: flex; flex-direction: column; align-items: center; gap: clamp(6px, 1.5vw, 10px);
      opacity: 0; animation: heroFade 1s var(--ease) 2.8s forwards;
    }
    .scroll-wheel {
      width: 20px; height: 32px;
      border: 1.5px solid rgba(255,255,255,0.3);
      border-radius: 10px;
      display: flex; justify-content: center; padding-top: 6px;
    }
    .scroll-dot {
      width: 3px; height: 6px; border-radius: 2px;
      background: rgba(255,255,255,0.5);
      animation: scrollAnim 1.8s ease infinite;
    }
    @keyframes scrollAnim {
      0%   { transform: translateY(0); opacity: 1; }
      80%  { transform: translateY(10px); opacity: 0; }
      100% { transform: translateY(0); opacity: 0; }
    }
    .scroll-label {
      font-size: clamp(7px, 1.2vw, 9px); letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      writing-mode: vertical-rl; transform: rotate(180deg);
    }

    /* 브랜드 배지 — 상단 우측 */
    .hero-badge-corner {
      position: absolute; top: clamp(60px, 10vw, 110px); right: clamp(20px, 4vw, 60px); z-index: 3;
      display: flex; flex-direction: column; gap: clamp(6px, 1.5vw, 8px);
      opacity: 0; animation: heroFade 1s var(--ease) 2s forwards;
    }
    .hero-badge-pill {
      display: inline-flex; align-items: center; gap: clamp(5px, 1vw, 7px);
      padding: clamp(6px, 1.2vw, 8px) clamp(12px, 2vw, 16px);
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 100px;
      font-size: clamp(8px, 1.2vw, 10px); letter-spacing: 0.14em; text-transform: uppercase;
      color: rgba(255,255,255,0.8);
      white-space: nowrap;
    }
    .hero-badge-dot {
      width: 5px; height: 5px; border-radius: 50%;
      flex-shrink: 0;
    }

    /* 슬라이드 인덱스 */
    .hero-index {
      position: absolute; left: clamp(20px, 4vw, 80px); top: 50%; z-index: 3;
      transform: translateY(-50%);
      display: flex; flex-direction: column; gap: 6px;
      opacity: 0; animation: heroFade 1s var(--ease) 2.5s forwards;
    }
    .hero-index-line {
      width: 24px; height: 1px; background: rgba(255,255,255,0.2);
      cursor: pointer; transition: width 0.3s, background 0.3s;
    }
    .hero-index-line.active {
      width: 48px; background: var(--warm);
    }

    @keyframes heroUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroFade {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    /* ─── MARQUEE STRIP ─── */
    .strip {
      background: var(--ink);
      padding: clamp(12px, 2vw, 16px) 0; overflow: hidden; display: flex;
    }
    .strip-track {
      display: flex; gap: 0;
      animation: marquee 26s linear infinite;
      white-space: nowrap;
    }
    .strip-item { display: flex; align-items: center; gap: 0; flex-shrink: 0; }
    .strip-text {
      font-size: clamp(9px, 1.5vw, 11px); letter-spacing: 0.25em; text-transform: uppercase;
      color: rgba(255,255,255,0.45); padding: 0 clamp(20px, 3vw, 36px);
    }
    .strip-dot {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--warm); opacity: 0.5; flex-shrink: 0;
    }
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

    /* ─── SECTION BASE ─── */
    .section { padding: clamp(80px, 15vw, 128px) clamp(20px, 5vw, 80px); }
    .container { max-width: 1280px; margin: 0 auto; }

    .tag {
      display: inline-flex; align-items: center; gap: clamp(8px, 1.5vw, 10px);
      font-size: clamp(8px, 1.2vw, 10px); letter-spacing: 0.35em; text-transform: uppercase;
      color: var(--accent); margin-bottom: clamp(16px, 3vw, 24px);
    }
    .tag::before { content:''; width: clamp(16px, 3vw, 24px); height:1px; background:var(--accent); }

    .h2 {
      font-family: var(--serif);
      font-size: clamp(1.8rem, 5vw, 4.2rem);
      font-weight: 300; line-height: 1.1;
      color: var(--ink); letter-spacing: -0.01em;
    }
    .h2 em { font-style: italic; color: var(--warm); }

    .r {
      opacity: 0; transform: translateY(36px);
      transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
    }
    .r.on { opacity: 1; transform: translateY(0); }
    .r.d1 { transition-delay: 0.1s; }
    .r.d2 { transition-delay: 0.22s; }
    .r.d3 { transition-delay: 0.34s; }
    .r.d4 { transition-delay: 0.46s; }
    .r.d5 { transition-delay: 0.58s; }

    /* ══════════════════════════════════════
       MODELS SECTION
       ══════════════════════════════════════ */
    .models { background: var(--ink); color: var(--white); padding: 0; }

    .models-head {
      padding: clamp(60px, 12vw, 100px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 60px);
    }
    .models .tag { color: rgba(255,255,255,0.35); }
    .models .tag::before { background: rgba(255,255,255,0.35); }
    .models-title {
      font-family: var(--serif);
      font-size: clamp(1.8rem, 5vw, 4.2rem);
      font-weight: 300; color: var(--white);
      line-height: 1.1;
    }
    .models-title em { font-style: italic; color: var(--warm-lt); }
    .models-sub {
      font-family: var(--noto);
      font-size: clamp(0.8rem, 1.8vw, 0.875rem); font-weight: 300;
      color: rgba(255,255,255,0.4); line-height: 1.9;
      margin-top: clamp(12px, 2vw, 20px); max-width: 480px;
    }

    /* 모델 쇼케이스 — 반응형 그리드 */
    .models-panorama {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      min-height: clamp(400px, 60vh, 70vh);
      gap: 0;
    }
    .model-panel {
      position: relative; overflow: hidden;
      cursor: pointer;
      min-height: clamp(300px, 50vh, 520px);
    }
    .model-panel img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center top;
      transition: transform 0.9s var(--ease), filter 0.6s;
      filter: brightness(0.88) saturate(0.9);
    }
    .model-panel:hover img {
      transform: scale(1.06);
      filter: brightness(1) saturate(1.05);
    }
    .model-panel-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top,
        rgba(10,8,6,0.9) 0%,
        rgba(10,8,6,0.2) 50%,
        transparent 80%);
      transition: background 0.5s;
    }
    .model-panel:hover .model-panel-overlay {
      background: linear-gradient(to top,
        rgba(10,8,6,0.85) 0%,
        rgba(10,8,6,0.1) 40%,
        transparent 70%);
    }
    .model-panel-info {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: clamp(24px, 5vw, 40px) clamp(20px, 4vw, 36px);
      transform: translateY(8px);
      transition: transform 0.5s var(--ease);
    }
    .model-panel:hover .model-panel-info { transform: translateY(0); }
    .model-panel-tag {
      font-size: clamp(7px, 1.2vw, 9px); letter-spacing: 0.3em; text-transform: uppercase;
      color: var(--warm-lt); margin-bottom: clamp(6px, 1vw, 8px); display: block;
    }
    .model-panel-name {
      font-family: var(--serif);
      font-size: clamp(1.2rem, 3vw, 2rem); font-weight: 300; color: var(--white);
      line-height: 1.1; margin-bottom: clamp(8px, 1.5vw, 10px);
    }
    .model-panel-desc {
      font-family: var(--noto);
      font-size: clamp(0.75rem, 1.5vw, 0.8rem); font-weight: 300;
      color: rgba(255,255,255,0.5); line-height: 1.7;
      max-width: 260px;
      opacity: 0; transform: translateY(6px);
      transition: opacity 0.45s 0.1s, transform 0.45s 0.1s;
    }
    .model-panel:hover .model-panel-desc { opacity: 1; transform: translateY(0); }
    .model-panel-badge {
      position: absolute; top: clamp(12px, 2vw, 20px); right: clamp(12px, 2vw, 20px);
      padding: clamp(4px, 1vw, 6px) clamp(8px, 1.5vw, 13px);
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.15);
      font-size: clamp(7px, 1vw, 9px); letter-spacing: 0.15em; text-transform: uppercase;
      color: rgba(255,255,255,0.7);
    }

    /* ─── ABOUT ─── */
    .about { background: var(--white); }
    .about-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: clamp(40px, 8vw, 96px); align-items: center;
    }
    .about-text .h2 { margin-bottom: clamp(16px, 3vw, 28px); }
    .about-p {
      font-family: var(--noto);
      font-size: clamp(0.85rem, 1.8vw, 0.9rem); font-weight: 300;
      line-height: 1.95; color: var(--gray-4);
      margin-bottom: clamp(12px, 2vw, 16px);
    }
    .about-link {
      display: inline-flex; align-items: center; gap: clamp(8px, 1.5vw, 10px);
      font-size: clamp(9px, 1.5vw, 11px); letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--ink); text-decoration: none;
      margin-top: clamp(12px, 2vw, 20px); transition: gap 0.3s;
    }
    .about-link:hover { gap: 16px; }

    .about-visual { position: relative; }
    .about-img-wrap {
      width: 100%; aspect-ratio: 4/5;
      overflow: hidden;
      position: relative;
    }
    .about-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: top;
      transition: transform 0.9s var(--ease);
    }
    .about-img-wrap:hover img { transform: scale(1.04); }
    .about-float {
      position: absolute; bottom: clamp(-20px, -3vw, -28px); left: clamp(-20px, -3vw, -28px);
      width: clamp(120px, 20vw, 164px); height: clamp(120px, 20vw, 164px);
      background: var(--ink);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 4px;
    }
    .about-float-num {
      font-family: var(--serif);
      font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 300;
      color: var(--white); line-height: 1;
    }
    .about-float-lbl {
      font-size: clamp(7px, 1.2vw, 9px); letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(255,255,255,0.4); text-align: center; line-height: 1.6;
    }

    /* ─── VALUES ─── */
    .values { background: var(--gray-1); }
    .values-head {
      display: flex; justify-content: space-between; align-items: flex-end;
      margin-bottom: clamp(48px, 10vw, 72px);
      flex-direction: column;
      gap: clamp(24px, 5vw, 0px);
    }
    .values-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: clamp(12px, 2vw, 2px); 
    }
    .val-card {
      background: var(--white);
      padding: clamp(32px, 5vw, 52px) clamp(24px, 4vw, 44px);
      position: relative; overflow: hidden;
      transition: transform 0.35s var(--ease);
    }
    .val-card:hover { transform: translateY(-6px); }
    .val-card::after {
      content: '';
      position: absolute; bottom:0; left:0; right:0;
      height: 2px;
      background: linear-gradient(to right, var(--sage), var(--warm));
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.4s var(--ease);
    }
    .val-card:hover::after { transform: scaleX(1); }
    .val-num {
      font-family: var(--serif);
      font-size: clamp(2rem, 5vw, 3rem); font-weight: 300;
      color: var(--gray-2); line-height: 1; margin-bottom: clamp(16px, 3vw, 28px);
    }
    .val-title {
      font-family: var(--serif);
      font-size: clamp(1.2rem, 2.5vw, 1.5rem); font-weight: 400;
      color: var(--ink); margin-bottom: clamp(10px, 2vw, 14px);
    }
    .val-desc {
      font-family: var(--noto);
      font-size: clamp(0.8rem, 1.5vw, 0.85rem); font-weight: 300;
      color: var(--gray-4); line-height: 1.85;
    }

    /* ─── PRODUCTS ─── */
    .products { background: var(--white); }
    .prod-head {
      display: flex; justify-content: space-between; align-items: flex-end;
      margin-bottom: clamp(40px, 8vw, 64px);
      flex-direction: column;
      gap: clamp(20px, 4vw, 0px);
    }
    .prod-filters { display: flex; gap: clamp(1px, 0.5vw, 2px); flex-wrap: wrap; }
    .f-btn {
      padding: clamp(7px, 1.2vw, 9px) clamp(12px, 2vw, 18px);
      background: none; border: 1px solid var(--gray-2);
      font-size: clamp(9px, 1.3vw, 11px); letter-spacing: 0.1em; text-transform: uppercase;
      cursor: pointer; font-family: var(--sans);
      color: var(--gray-4);
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
    .f-btn.on, .f-btn:hover { background: var(--ink); border-color: var(--ink); color: var(--white); }
    .prod-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: clamp(16px, 3vw, 28px); 
    }
    .prod-card { cursor: pointer; transition: transform 0.35s var(--ease); }
    .prod-card:hover { transform: translateY(-6px); }
    .prod-img {
      aspect-ratio: 3/4;
      border-radius: 3px;
      position: relative; overflow: hidden;
      margin-bottom: clamp(12px, 2vw, 20px);
      display: flex; align-items: center; justify-content: center;
    }
    .prod-img-ico { font-size: clamp(2rem, 4vw, 3.5rem); opacity: 0.18; color: var(--stone-dk); position: relative; z-index: 1; }
    .prod-badge {
      position: absolute; top: clamp(10px, 1.5vw, 14px); left: clamp(10px, 1.5vw, 14px);
      padding: clamp(4px, 1vw, 5px) clamp(8px, 1.5vw, 11px);
      font-size: clamp(7px, 1vw, 9px); letter-spacing: 0.15em; text-transform: uppercase;
      font-weight: 500; border-radius: 2px;
    }
    .b-new  { background: var(--ink);  color: var(--white); }
    .b-best { background: var(--warm); color: var(--white); }
    .b-eco  { background: var(--sage); color: var(--white); }
    .prod-hover {
      position: absolute; inset:0;
      background: rgba(26,24,20,0.42);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s;
    }
    .prod-card:hover .prod-hover { opacity: 1; }
    .prod-hover-btn {
      padding: clamp(10px, 1.5vw, 13px) clamp(20px, 3vw, 28px);
      background: var(--white); color: var(--ink);
      font-size: clamp(8px, 1.2vw, 10px); letter-spacing: 0.15em; text-transform: uppercase;
      border: none; cursor: pointer; font-family: var(--sans);
      transition: background 0.2s;
    }
    .prod-hover-btn:hover { background: var(--warm-lt); }
    .prod-cat { font-size: clamp(8px, 1.2vw, 10px); letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: clamp(4px, 1vw, 6px); }
    .prod-name { font-family: var(--serif); font-size: clamp(1rem, 2.5vw, 1.35rem); font-weight: 400; color: var(--ink); margin-bottom: clamp(4px, 1vw, 6px); line-height: 1.2; }
    .prod-sub { font-family: var(--noto); font-size: clamp(0.75rem, 1.5vw, 0.8rem); font-weight: 300; color: var(--gray-3); margin-bottom: clamp(8px, 1.5vw, 12px); line-height: 1.6; }
    .prod-price { font-family: var(--serif); font-size: clamp(0.9rem, 1.8vw, 1.05rem); color: var(--ink); }
    .prod-price-orig { font-size: clamp(0.8rem, 1.5vw, 0.875rem); color: var(--gray-3); text-decoration: line-through; margin-right: 8px; }

    /* ─── CLEAN PROMISE ─── */
    .promise { background: var(--parchment); }
    .promise-top { max-width: 680px; margin-bottom: clamp(40px, 8vw, 64px); }
    .promise-lead {
      font-family: var(--noto);
      font-size: clamp(0.85rem, 1.8vw, 0.95rem); font-weight: 300;
      color: var(--gray-4); line-height: 1.9;
      margin-top: clamp(12px, 2vw, 20px);
    }
    .promise-lead strong { color: var(--ink); font-weight: 500; }
    .promise-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: clamp(12px, 2vw, 16px); margin-bottom: clamp(40px, 8vw, 56px);
    }
    .p-card-inner {
      border-radius: 4px; padding: clamp(32px, 5vw, 52px) clamp(28px, 4vw, 48px);
      height: 100%; position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: space-between;
      min-height: clamp(260px, 50vh, 320px);
      transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
    }
    .p-card:hover .p-card-inner { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.10); }
    .p-card-icon { font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: clamp(16px, 2vw, 24px); display: block; }
    .p-card-tag { display: block; font-size: clamp(7px, 1.2vw, 9px); letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent); margin-bottom: clamp(8px, 1.5vw, 10px); }
    .p-card-h { font-family: var(--serif); font-size: clamp(1.2rem, 2.5vw, 1.6rem); font-weight: 400; line-height: 1.2; color: var(--ink); margin-bottom: clamp(10px, 1.5vw, 14px); }
    .p-card-p { font-family: var(--noto); font-size: clamp(0.78rem, 1.5vw, 0.83rem); font-weight: 300; color: var(--gray-5); line-height: 1.8; }
    .p-card-num { position: absolute; bottom: clamp(16px, 2vw, 24px); right: clamp(16px, 2vw, 28px); font-family: var(--serif); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 300; color: rgba(0,0,0,0.06); line-height: 1; }
    .promise-stats { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
      background: var(--white); border-radius: 4px; overflow: hidden; 
      gap: clamp(1px, 0.5vw, 1px);
    }
    .ps-item { flex: 1; text-align: center; padding: clamp(20px, 4vw, 36px) clamp(16px, 2vw, 24px); transition: background 0.25s; }
    .ps-item:hover { background: var(--gray-1); }
    .ps-num { font-family: var(--serif); font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 300; color: var(--ink); line-height: 1; margin-bottom: clamp(4px, 1vw, 6px); }
    .ps-num span { font-size: clamp(1rem, 2vw, 1.4rem); color: var(--warm); }
    .ps-label { font-family: var(--noto); font-size: clamp(8px, 1.2vw, 10px); letter-spacing: 0.15em; text-transform: uppercase; color: var(--gray-3); }
    .ps-div { width: 1px; background: var(--gray-2); height: 40px; flex-shrink: 0; }

    /* ─── PHILOSOPHY ─── */
    .philos { background: var(--white); }
    .philos-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: clamp(40px, 8vw, 80px); margin-top: clamp(48px, 8vw, 72px); 
    }
    .philos-quote {
      font-family: var(--serif);
      font-size: clamp(1.4rem, 3.5vw, 2.4rem);
      font-weight: 300; line-height: 1.4;
      color: var(--ink);
      padding-left: clamp(16px, 3vw, 28px);
      border-left: 2px solid var(--sage);
      position: sticky; top: 100px; align-self: start;
    }
    .philos-quote em { font-style: italic; color: var(--sage-dk); }
    .philos-points { display: flex; flex-direction: column; gap: 0; }
    .philos-pt { padding: clamp(20px, 3vw, 32px) 0; border-bottom: 1px solid var(--gray-2); display: flex; gap: clamp(12px, 2vw, 20px); }
    .philos-pt:first-child { padding-top: 0; }
    .philos-ico { width: 44px; height: 44px; flex-shrink: 0; background: var(--gray-1); display: flex; align-items: center; justify-content: center; color: var(--sage-dk); font-size: 1rem; border-radius: 2px; }
    .philos-pt-h { font-family: var(--serif); font-size: clamp(1rem, 2vw, 1.1rem); font-weight: 400; color: var(--ink); margin-bottom: clamp(4px, 1vw, 6px); }
    .philos-pt-p { font-family: var(--noto); font-size: clamp(0.78rem, 1.5vw, 0.83rem); font-weight: 300; color: var(--gray-4); line-height: 1.85; }

    /* ─── ROUTINE ─── */
    .routine { background: var(--gray-1); }
    .routine-steps { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: clamp(1px, 0.5vw, 1px);
      border: 1px solid var(--gray-2); 
      margin-top: clamp(48px, 8vw, 72px); 
    }
    .r-step { 
      padding: clamp(28px, 4vw, 44px) clamp(16px, 3vw, 28px); 
      border-right: 1px solid var(--gray-2); 
      position: relative; background: var(--white); 
      transition: background 0.3s; 
    }
    .r-step:last-child { border-right: none; }
    .r-step:hover { background: var(--off); }
    .r-step-num { 
      position: absolute; top: -1px; right: -1px; 
      padding: clamp(4px, 1vw, 5px) clamp(8px, 1.5vw, 10px); 
      background: var(--ink); color: var(--white); 
      font-size: clamp(7px, 1vw, 9px); letter-spacing: 0.12em; 
    }
    .r-step-ico { 
      width: 48px; height: 48px; 
      border: 1px solid var(--gray-2); 
      display: flex; align-items: center; justify-content: center; 
      margin-bottom: clamp(12px, 2vw, 20px); 
      color: var(--stone-dk); font-size: clamp(1rem, 2vw, 1.2rem); 
    }
    .r-step-lbl { 
      font-size: clamp(7px, 1.2vw, 9px); 
      letter-spacing: 0.2em; text-transform: uppercase; 
      color: var(--accent); margin-bottom: clamp(4px, 1vw, 6px); 
    }
    .r-step-h { 
      font-family: var(--serif); 
      font-size: clamp(0.95rem, 2vw, 1.05rem); 
      font-weight: 400; color: var(--ink); 
      margin-bottom: clamp(8px, 1.5vw, 10px); 
    }
    .r-step-p { 
      font-family: var(--noto); 
      font-size: clamp(0.73rem, 1.3vw, 0.78rem); 
      font-weight: 300; color: var(--gray-3); 
      line-height: 1.75; 
    }

    /* ─── REVIEWS ─── */
    .reviews { background: var(--white); overflow: hidden; }
    .rev-track { 
      display: flex; gap: clamp(12px, 2vw, 20px); 
      margin-top: clamp(40px, 8vw, 60px); 
      animation: rev-scroll 45s linear infinite; 
      width: max-content; 
    }
    .reviews:hover .rev-track { animation-play-state: paused; }
    @keyframes rev-scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .rev-card { 
      width: clamp(300px, 80vw, 360px); 
      flex-shrink: 0; 
      padding: clamp(20px, 3vw, 36px); 
      background: var(--gray-1); 
      border-radius: 3px; 
    }
    .rev-stars { color: var(--warm); font-size: clamp(11px, 1.5vw, 13px); letter-spacing: 2px; margin-bottom: clamp(12px, 2vw, 16px); }
    .rev-text { 
      font-family: var(--serif); 
      font-size: clamp(0.9rem, 1.8vw, 1rem); 
      font-weight: 400; font-style: italic; 
      color: var(--ink); line-height: 1.72; 
      margin-bottom: clamp(16px, 3vw, 24px); 
    }
    .rev-author { display: flex; align-items: center; gap: clamp(8px, 1.5vw, 12px); }
    .rev-av { 
      width: clamp(28px, 5vw, 36px); 
      height: clamp(28px, 5vw, 36px); 
      border-radius: 50%; background: var(--blush); 
      display: flex; align-items: center; justify-content: center; 
      font-family: var(--serif); 
      font-size: clamp(0.8rem, 1.5vw, 0.95rem); 
      color: var(--stone-dk); 
    }
    .rev-name { font-size: clamp(0.75rem, 1.5vw, 0.82rem); font-weight: 400; color: var(--ink); }
    .rev-info { font-size: clamp(0.65rem, 1.2vw, 0.75rem); color: var(--gray-3); font-weight: 300; margin-top: 1px; }

    /* ─── VISION ─── */
    .vision { background: var(--ink); color: var(--white); }
    .vision .tag { color: var(--warm-lt); }
    .vision .tag::before { background: var(--warm-lt); }
    .vision .h2 { color: var(--white); }
    .vision .h2 em { color: var(--warm-lt); }
    .vision-intro { 
      max-width: 560px; 
      font-family: var(--noto); 
      font-size: clamp(0.85rem, 1.8vw, 0.9rem); 
      font-weight: 300; 
      color: rgba(255,255,255,0.45); 
      line-height: 1.9; 
      margin-top: clamp(12px, 2vw, 20px); 
    }
    .vis-phases { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: clamp(1px, 0.5vw, 1px); 
      margin-top: clamp(48px, 8vw, 80px); 
    }
    .vis-phase { 
      padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px); 
      background: rgba(255,255,255,0.03); 
      border: 1px solid rgba(255,255,255,0.05); 
      transition: background 0.3s, border-color 0.3s; 
    }
    .vis-phase:hover { background: rgba(255,255,255,0.06); }
    .vis-phase.now { background: rgba(196,168,130,0.07); border-color: rgba(196,168,130,0.25); }
    .vis-tag { 
      font-size: clamp(7px, 1.2vw, 9px); 
      letter-spacing: 0.3em; text-transform: uppercase; 
      color: var(--warm); margin-bottom: clamp(12px, 2vw, 16px); 
      display: flex; align-items: center; gap: 6px; 
    }
    .vis-tag-live { width: 5px; height: 5px; border-radius: 50%; background: var(--warm); animation: blink 1.4s ease infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
    .vis-h { 
      font-family: var(--serif); 
      font-size: clamp(1.2rem, 2.5vw, 1.4rem); 
      font-weight: 300; color: var(--white); 
      margin-bottom: clamp(12px, 2vw, 20px); 
    }
    .vis-list { list-style: none; display: flex; flex-direction: column; gap: clamp(6px, 1.2vw, 9px); }
    .vis-list li { 
      font-family: var(--noto); 
      font-size: clamp(0.75rem, 1.5vw, 0.82rem); 
      font-weight: 300; color: rgba(255,255,255,0.4); 
      padding-left: 16px; position: relative; line-height: 1.5; 
    }
    .vis-list li::before { content: '—'; position: absolute; left: 0; color: var(--warm); font-size: 0.7rem; }

    /* ─── NEWSLETTER ─── */
    .news { background: var(--parchment); }
    .news-inner { max-width: 560px; margin: 0 auto; text-align: center; }
    .news-h { 
      font-family: var(--serif); 
      font-size: clamp(1.6rem, 4vw, 3rem); 
      font-weight: 300; color: var(--ink); 
      margin-bottom: clamp(12px, 2vw, 16px); 
      line-height: 1.15; 
    }
    .news-p { 
      font-family: var(--noto); 
      font-size: clamp(0.8rem, 1.6vw, 0.88rem); 
      font-weight: 300; color: var(--gray-4); 
      line-height: 1.8; 
      margin-bottom: clamp(28px, 6vw, 44px); 
    }
    .news-form { 
      display: flex; 
      max-width: 420px; margin: 0 auto; 
      gap: 0;
      flex-direction: row;
    }
    .news-inp { 
      flex: 1; 
      padding: clamp(12px, 2vw, 15px) clamp(12px, 2vw, 18px); 
      border: 1px solid var(--gray-2); 
      border-right: none; 
      background: var(--white); 
      font-size: clamp(0.8rem, 1.5vw, 0.875rem); 
      color: var(--ink); 
      outline: none; 
      font-family: var(--sans); 
      transition: border-color 0.25s; 
      min-width: 0;
    }
    .news-inp:focus { border-color: var(--warm); }
    .news-inp::placeholder { color: var(--gray-3); }
    .news-btn { 
      padding: clamp(12px, 2vw, 15px) clamp(16px, 3vw, 24px); 
      background: var(--ink); color: var(--white); 
      border: 1px solid var(--ink); 
      font-size: clamp(8px, 1.2vw, 10px); 
      letter-spacing: 0.15em; text-transform: uppercase; 
      cursor: pointer; font-family: var(--sans); 
      white-space: nowrap; transition: background 0.25s; 
    }
    .news-btn:hover { background: var(--warm); border-color: var(--warm); }
    .news-note { 
      font-size: clamp(9px, 1.2vw, 11px); 
      color: var(--gray-3); 
      margin-top: clamp(8px, 1.5vw, 12px); 
    }

    /* ─── FOOTER ─── */
    footer {
      background: var(--ink-lt); color: var(--white);
      padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px) clamp(20px, 4vw, 40px);
    }
    .ft-main { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: clamp(32px, 6vw, 64px); 
      padding-bottom: clamp(40px, 6vw, 64px); 
      border-bottom: 1px solid rgba(255,255,255,0.07); 
    }
    .ft-logo { height: clamp(18px, 4vw, 24px); width: auto; margin-bottom: clamp(12px, 2vw, 20px); display: block; filter: invert(1); }
    .ft-tagline { 
      font-family: var(--noto); 
      font-size: clamp(0.75rem, 1.3vw, 0.82rem); 
      font-weight: 300; color: rgba(255,255,255,0.35); 
      line-height: 1.8; 
      max-width: 240px; 
      margin-bottom: clamp(16px, 2vw, 28px); 
    }
    .ft-soc { display: flex; gap: clamp(8px, 1.5vw, 12px); }
    .ft-soc a { 
      width: clamp(28px, 5vw, 34px); 
      height: clamp(28px, 5vw, 34px); 
      border: 1px solid rgba(255,255,255,0.12); 
      display: flex; align-items: center; justify-content: center; 
      color: rgba(255,255,255,0.4); 
      text-decoration: none; 
      font-size: clamp(11px, 1.5vw, 13px); 
      transition: border-color 0.2s, color 0.2s; 
    }
    .ft-soc a:hover { border-color: var(--warm); color: var(--warm); }
    .ft-col-h { 
      font-size: clamp(7px, 1.2vw, 9px); 
      letter-spacing: 0.25em; text-transform: uppercase; 
      color: rgba(255,255,255,0.3); 
      margin-bottom: clamp(12px, 2vw, 20px); 
    }
    .ft-links { list-style: none; display: flex; flex-direction: column; gap: clamp(6px, 1.5vw, 10px); }
    .ft-links a { 
      text-decoration: none; 
      color: rgba(255,255,255,0.5); 
      font-family: var(--noto); 
      font-size: clamp(0.75rem, 1.3vw, 0.83rem); 
      font-weight: 300; transition: color 0.2s; 
    }
    .ft-links a:hover { color: var(--white); }
    .ft-bottom { 
      padding-top: clamp(16px, 3vw, 28px); 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      flex-wrap: wrap;
      gap: clamp(12px, 2vw, 0px);
    }
    .ft-copy { 
      font-size: clamp(8px, 1.2vw, 11px); 
      color: rgba(255,255,255,0.2); 
      font-weight: 300; 
    }
    .ft-legal { 
      display: flex; gap: clamp(12px, 2vw, 20px); 
      flex-wrap: wrap;
    }
    .ft-legal a { 
      font-size: clamp(8px, 1.2vw, 11px); 
      color: rgba(255,255,255,0.2); 
      text-decoration: none; 
      transition: color 0.2s; 
    }
    .ft-legal a:hover { color: rgba(255,255,255,0.5); }

    /* ─── MOBILE RESPONSIVE ─── */
    @media (max-width: 768px) {
      .hero-nav { display: none; }
      .hero-badge-corner { display: none; }
      .hero-index { display: none; }
      .models-panorama { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
      .values-head { flex-direction: column; gap: 24px; }
      .prod-head { flex-direction: column; gap: 20px; }
      .ft-bottom { flex-direction: column; text-align: center; }
      .news-form { flex-direction: column; }
      .news-inp { border-right: 1px solid var(--gray-2); border-bottom: none; }
    }

    @media (max-width: 480px) {
      nav { height: clamp(50px, 10vw, 56px); }
      .nav-menu { display: none; }
      .nav-pill { display: none; }
      .nav-burger { display: flex; }
      .section { padding: clamp(60px, 12vw, 80px) clamp(16px, 4vw, 24px); }
      .container { padding: 0; }
      .hero-content { padding: 0 clamp(16px, 4vw, 28px) clamp(40px, 8vw, 60px); }
      .routine-steps { grid-template-columns: 1fr; }
      .r-step { border-right: none; border-bottom: 1px solid var(--gray-2); }
      .r-step:last-child { border-bottom: none; }
    }
  </style>
</head>
<body>

<!-- LOADER -->
<div id="loader">
  <img src="/static/soume-logo-black.png" alt="Soumé" class="loader-logo" />
  <div class="loader-bar"></div>
</div>

<!-- MOBILE OVERLAY -->
<div class="mob-overlay" id="mobMenu">
  <button class="mob-close" onclick="mobClose()">✕</button>
  <a href="#models" onclick="mobClose()">Campaign</a>
  <a href="#about" onclick="mobClose()">About</a>
  <a href="#products" onclick="mobClose()">Products</a>
  <a href="#philosophy" onclick="mobClose()">Philosophy</a>
  <a href="#vision" onclick="mobClose()">Vision</a>
</div>

<!-- NAV -->
<nav id="nav">
  <a href="/" class="nav-logo">
    <img src="/static/soume-logo-black.png" alt="Soumé" id="navLogo" />
  </a>
  <ul class="nav-menu">
    <li><a href="#models">Campaign</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#philosophy">Philosophy</a></li>
    <li><a href="#vision">Vision</a></li>
  </ul>
  <div class="nav-right">
    <a href="#newsletter" class="nav-pill">Subscribe</a>
    <button class="nav-burger" onclick="mobOpen()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ══════════════ HERO — FULLSCREEN CAMPAIGN SLIDESHOW ══════════════ -->
<section class="hero" id="top">

  <!-- 풀스크린 슬라이드 -->
  <div class="hero-slides" id="heroSlides">
    <div class="hero-slide active" data-slide="0">
      <img src="/static/model-hero-duo.jpg" alt="Soumé Campaign — Duo" />
    </div>
    <div class="hero-slide" data-slide="1">
      <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Soumé Campaign — Ocean Breeze" />
    </div>
    <div class="hero-slide" data-slide="2">
      <img src="/static/model-fashion.jpg" alt="Soumé Campaign — Fashion" />
    </div>
    <div class="hero-slide" data-slide="3">
      <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Soumé Campaign — Ocean Breeze Product" />
    </div>
  </div>

  <!-- 오버레이 -->
  <div class="hero-overlay"></div>

  <!-- 상단 우측 배지 -->
  <div class="hero-badge-corner">
    <div class="hero-badge-pill">
      <div class="hero-badge-dot" style="background:var(--sage)"></div>
      Clean Formula
    </div>
    <div class="hero-badge-pill">
      <div class="hero-badge-dot" style="background:var(--warm)"></div>
      Dermatologist Tested
    </div>
    <div class="hero-badge-pill">
      <div class="hero-badge-dot" style="background:var(--warm-lt)"></div>
      Science-Backed
    </div>
  </div>

  <!-- 왼쪽 인덱스 -->
  <div class="hero-index" id="heroIndex">
    <div class="hero-index-line active" onclick="goSlide(0)"></div>
    <div class="hero-index-line" onclick="goSlide(1)"></div>
    <div class="hero-index-line" onclick="goSlide(2)"></div>
    <div class="hero-index-line" onclick="goSlide(3)"></div>
  </div>

  <!-- 하단 텍스트 + CTA -->
  <div class="hero-content">
    <div class="hero-text">
      <p class="hero-eyebrow">Clean Beauty · Korea</p>
      <h1 class="hero-headline" id="heroHeadline">
        피부가 원하는<br/>
        <em>단 하나의 선택</em>
      </h1>
      <p class="hero-sub" id="heroSub">
        유해 성분 없이 만든 클린 포뮬러.<br/>
        과학적으로 검증된 유효 성분으로 피부 본연의 건강을 되찾아드립니다.
      </p>
      <div class="hero-actions">
        <a href="#products" class="btn-hero-primary">
          컬렉션 보기
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>
        <a href="#about" class="btn-hero-ghost">브랜드 스토리</a>
      </div>
    </div>
  </div>

  <!-- 오른쪽 슬라이드 네비 -->
  <div class="hero-nav" id="heroNavPanel">
    <button class="hero-nav-item active" onclick="goSlide(0)">
      <div class="hero-nav-info">
        <span class="hero-nav-name">Campaign</span>
        <span class="hero-nav-role">Duo Visual</span>
      </div>
      <img class="hero-nav-thumb" src="/static/model-hero-duo.jpg" alt="Duo" />
    </button>
    <button class="hero-nav-item" onclick="goSlide(1)">
      <div class="hero-nav-info">
        <span class="hero-nav-name">Ocean Breeze</span>
        <span class="hero-nav-role">Product Campaign</span>
      </div>
      <img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze" />
    </button>
    <button class="hero-nav-item" onclick="goSlide(2)">
      <div class="hero-nav-info">
        <span class="hero-nav-name">Collection</span>
        <span class="hero-nav-role">Fashion Editorial</span>
      </div>
      <img class="hero-nav-thumb" src="/static/model-fashion.jpg" alt="Fashion" />
    </button>
    <button class="hero-nav-item" onclick="goSlide(3)">
      <div class="hero-nav-info">
        <span class="hero-nav-name">Ocean Breeze</span>
        <span class="hero-nav-role">Product Campaign</span>
      </div>
      <img class="hero-nav-thumb" src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze" />
    </button>
  </div>

  <!-- 진행 바 -->
  <div class="hero-progress"><div class="hero-progress-bar" id="heroProgressBar"></div></div>

  <!-- 스크롤 힌트 -->
  <div class="hero-scroll">
    <div class="scroll-wheel"><div class="scroll-dot"></div></div>
    <span class="scroll-label">Scroll</span>
  </div>
</section>

<!-- MARQUEE -->
<div class="strip">
  <div class="strip-track">
    <div class="strip-item"><span class="strip-text">Clean Beauty</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Science-Backed</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Effective Ingredients</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Dermatologist Tested</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Harmful Substances Excluded</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Sustainable Packaging</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Made in Korea</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Clean Beauty</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Science-Backed</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Effective Ingredients</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Dermatologist Tested</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Harmful Substances Excluded</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Sustainable Packaging</span><span class="strip-dot"></span></div>
    <div class="strip-item"><span class="strip-text">Made in Korea</span><span class="strip-dot"></span></div>
  </div>
</div>

<!-- ══════════════ CAMPAIGN SECTION ══════════════ -->
<section class="models" id="models">
  <div class="models-head">
    <p class="tag r">Campaign Visuals</p>
    <h2 class="models-title r d1">
      클린뷰티의<br/>
      <em>다양한 표정</em>
    </h2>
    <p class="models-sub r d2">
      유효 성분으로 표현되는 클린뷰티의 세계.<br/>
      여러 캠페인 비주얼로 만나보세요.
    </p>
  </div>

  <div class="models-panorama r">
    <div class="model-panel">
      <img src="/static/model-hero-duo.jpg" alt="Soumé Duo Campaign" />
      <div class="model-panel-overlay"></div>
      <div class="model-panel-badge">Campaign 2024</div>
      <div class="model-panel-info">
        <span class="model-panel-tag">Campaign Visual</span>
        <h3 class="model-panel-name">Pure Glow<br/>Campaign</h3>
        <p class="model-panel-desc">클린뷰티의 아름다움을 표현한 플래그십 캠페인</p>
      </div>
    </div>

    <div class="model-panel">
      <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Campaign" />
      <div class="model-panel-overlay"></div>
      <div class="model-panel-badge">Product</div>
      <div class="model-panel-info">
        <span class="model-panel-tag">Product Campaign</span>
        <h3 class="model-panel-name">Ocean Breeze<br/>Essence</h3>
        <p class="model-panel-desc">상큼한 오션 향이 나는 프리미엄 에센스</p>
      </div>
    </div>

    <div class="model-panel">
      <img src="/static/model-fashion.jpg" alt="Fashion Editorial" />
      <div class="model-panel-overlay"></div>
      <div class="model-panel-badge">Editorial</div>
      <div class="model-panel-info">
        <span class="model-panel-tag">Fashion Editorial</span>
        <h3 class="model-panel-name">패션<br/>에디토리얼</h3>
        <p class="model-panel-desc">럭셔리 스타일로 표현하는 클린뷰티</p>
      </div>
    </div>

    <div class="model-panel">
      <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Ocean Breeze Product" />
      <div class="model-panel-overlay"></div>
      <div class="model-panel-badge">Best Seller</div>
      <div class="model-panel-info">
        <span class="model-panel-tag">Product Campaign</span>
        <h3 class="model-panel-name">Ocean Breeze<br/>Campaign</h3>
        <p class="model-panel-desc">유효 성분을 강조하는 시그니처 캠페인</p>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section class="section about" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-text">
        <p class="tag r">Our Story</p>
        <h2 class="h2 r d1">불필요한 것을 덜고,<br/><em>본질만 남긴</em> 뷰티</h2>
        <p class="about-p r d2">
          Soumé는 순수함에서 시작했습니다. 피부에 해로운 성분을 제거하고,
          자연에서 온 최상의 원료와 첨단 과학을 결합해 진짜 피부 변화를 만들어냅니다.
        </p>
        <p class="about-p r d3">
          10대부터 40대까지, 모든 피부가 건강하게 빛날 수 있도록.
          클린뷰티를 시작으로 확장된 솔루션까지 함께 성장하는 브랜드를 만들어갑니다.
        </p>
        <a href="#philosophy" class="about-link r d4">브랜드 철학 →</a>
      </div>
      <div class="about-visual r d2">
        <div class="about-img-wrap">
          <img src="https://www.genspark.ai/api/files/s/w2vTzpwC" alt="Soumé — Ocean Breeze" />
        </div>
        <div class="about-float">
          <div class="about-float-num">100%</div>
          <div class="about-float-lbl">Clean<br/>Formula</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="section values" id="values">
  <div class="container">
    <div class="values-head">
      <div>
        <p class="tag r">Brand Values</p>
        <h2 class="h2 r d1">Soumé가 지키는 원칙</h2>
      </div>
    </div>
    <div class="values-grid">
      <div class="val-card r d1">
        <div class="val-num">01</div>
        <h3 class="val-title">Clean Formula</h3>
        <p class="val-desc">해로운 성분을 제외하고 순수한 유효 성분만 담았습니다. 엄격한 기준에 따라 포뮬러를 검증합니다.</p>
      </div>
      <div class="val-card r d2">
        <div class="val-num">02</div>
        <h3 class="val-title">Science-Backed</h3>
        <p class="val-desc">과학적 연구와 테스트를 통해 개발된 포뮬러. 전문가가 검증한 배합으로 눈에 보이는 피부 변화를 만들어냅니다.</p>
      </div>
      <div class="val-card r d3">
        <div class="val-num">03</div>
        <h3 class="val-title">Sustainable</h3>
        <p class="val-desc">친환경 패키징으로 효과적인 제품을 지속 가능하게 제공합니다. 환경을 생각하는 뷰티를 실천합니다.</p>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="section products" id="products">
  <div class="container">
    <div class="prod-head">
      <div>
        <p class="tag r">Skincare Collection</p>
        <h2 class="h2 r d1">피부를 위한<br/><em>첫 번째 선택</em></h2>
      </div>
      <div class="prod-filters r d2">
        <button class="f-btn on" onclick="filter('all',this)">All</button>
        <button class="f-btn" onclick="filter('serum',this)">Serum</button>
        <button class="f-btn" onclick="filter('moist',this)">Moisturizer</button>
        <button class="f-btn" onclick="filter('clean',this)">Cleanser</button>
      </div>
    </div>
    <div class="prod-grid" id="prodGrid">
      <div class="prod-card r d1" data-cat="serum">
        <div class="prod-img" style="background:linear-gradient(145deg,#EDE0D4,#D4C5B0)">
          <span class="prod-img-ico">💧</span>
          <span class="prod-badge b-best">BEST</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Brightening Serum</p>
        <h3 class="prod-name">Pure Glow Serum</h3>
        <p class="prod-sub">고효능 유효 성분으로 맑고 투명한 피부톤</p>
        <p class="prod-price">₩ 48,000</p>
      </div>
      <div class="prod-card r d2" data-cat="moist">
        <div class="prod-img" style="background:linear-gradient(145deg,#D8E8D4,#B8D4B0)">
          <span class="prod-img-ico">🌿</span>
          <span class="prod-badge b-new">NEW</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Deep Moisturizer</p>
        <h3 class="prod-name">Barrier Calm Cream</h3>
        <p class="prod-sub">유효 성분으로 보습, 손상된 피부 장벽 강화</p>
        <p class="prod-price">₩ 52,000</p>
      </div>
      <div class="prod-card r d3" data-cat="clean">
        <div class="prod-img" style="background:linear-gradient(145deg,#F0E8E0,#DDD0C0)">
          <span class="prod-img-ico">🫧</span>
          <span class="prod-badge b-eco">CLEAN</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Gentle Cleanser</p>
        <h3 class="prod-name">Soft Reset Foam</h3>
        <p class="prod-sub">순한 클렌징, pH 밸런스 유지로 피부 장벽 보호</p>
        <p class="prod-price">₩ 28,000</p>
      </div>
      <div class="prod-card r d1" data-cat="serum">
        <div class="prod-img" style="background:linear-gradient(145deg,#E0D8F0,#C8B8E0)">
          <span class="prod-img-ico">🌙</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Night Repair Serum</p>
        <h3 class="prod-name">Midnight Restore</h3>
        <p class="prod-sub">수면 중 피부 재생, 유효 성분 안티에이징</p>
        <p class="prod-price"><span class="prod-price-orig">₩ 68,000</span>₩ 58,000</p>
      </div>
      <div class="prod-card r d2" data-cat="moist">
        <div class="prod-img" style="background:linear-gradient(145deg,#F8F0E0,#E8D8C0)">
          <span class="prod-img-ico">☀️</span>
          <span class="prod-badge b-best">BEST</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Daily Sunscreen</p>
        <h3 class="prod-name">Veil Sun Fluid</h3>
        <p class="prod-sub">SPF 50+ PA++++, 백탁 없는 물광 마무리</p>
        <p class="prod-price">₩ 38,000</p>
      </div>
      <div class="prod-card r d3" data-cat="clean">
        <div class="prod-img" style="background:linear-gradient(145deg,#E8F0E8,#C8D8C8)">
          <span class="prod-img-ico">🍃</span>
          <span class="prod-badge b-new">NEW</span>
          <div class="prod-hover"><button class="prod-hover-btn">자세히 보기</button></div>
        </div>
        <p class="prod-cat">Cleansing Oil</p>
        <h3 class="prod-name">Green Melt Oil</h3>
        <p class="prod-sub">클린 오일 블렌드, 메이크업 완벽 제거</p>
        <p class="prod-price">₩ 34,000</p>
      </div>
    </div>
  </div>
</section>

<!-- CLEAN PROMISE -->
<section class="section promise" id="ingredients">
  <div class="container">
    <div class="promise-top r">
      <p class="tag">The Soumé Standard</p>
      <h2 class="h2 r d1">성분에 대한<br/><em>우리의 약속</em></h2>
      <p class="promise-lead r d2">Soumé는 무엇을 넣을지보다 <strong>무엇을 넣지 않을지</strong>를 먼저 생각합니다.<br/>순수한 유효 성분으로만 빛나는 피부를 만드는 것, 그것이 우리의 약속입니다.</p>
    </div>
    <div class="promise-cards">
      <div class="p-card p-card-lg r d1">
        <div class="p-card-inner" style="background:linear-gradient(135deg,#F2EDE4 0%,#E8DDD0 100%)">
          <div class="p-card-icon">🌿</div>
          <div>
            <span class="p-card-tag">원칙 01</span>
            <h3 class="p-card-h">No Harmful<br/>Substances</h3>
            <p class="p-card-p">해로운 성분을 제외한 순수한 포뮬러. 피부에 필요 없는 것은 처음부터 배제합니다.</p>
          </div>
          <div class="p-card-num">01</div>
        </div>
      </div>
      <div class="p-card r d2">
        <div class="p-card-inner" style="background:linear-gradient(135deg,#EAF0E8 0%,#D8E4D4 100%)">
          <div class="p-card-icon">🔬</div>
          <div>
            <span class="p-card-tag">원칙 02</span>
            <h3 class="p-card-h">Science<br/>Meets Nature</h3>
            <p class="p-card-p">자연 유래 유효 성분을 과학적으로 검증한 배합. 눈에 보이는 피부 변화를 만듭니다.</p>
          </div>
          <div class="p-card-num">02</div>
        </div>
      </div>
      <div class="p-card r d3">
        <div class="p-card-inner" style="background:linear-gradient(135deg,#EDE8F0 0%,#DDD4E8 100%)">
          <div class="p-card-icon">♻️</div>
          <div>
            <span class="p-card-tag">원칙 03</span>
            <h3 class="p-card-h">Sustainable<br/>Beauty</h3>
            <p class="p-card-p">친환경 패키징으로 제품의 효능을 지속 가능하게 제공합니다.</p>
          </div>
          <div class="p-card-num">03</div>
        </div>
      </div>
    </div>
    <div class="promise-stats r d3">
      <div class="ps-item"><div class="ps-num">100<span>%</span></div><div class="ps-label">Pure Formula</div></div>
      <div class="ps-div"></div>
      <div class="ps-item"><div class="ps-num">0</div><div class="ps-label">Harmful Ingredients</div></div>
      <div class="ps-div"></div>
      <div class="ps-item"><div class="ps-num">∞</div><div class="ps-label">Effective Results</div></div>
      <div class="ps-div"></div>
      <div class="ps-item"><div class="ps-num">All</div><div class="ps-label">Skin Types</div></div>
    </div>
  </div>
</section>

<!-- PHILOSOPHY -->
<section class="section philos" id="philosophy">
  <div class="container">
    <p class="tag r">Our Philosophy</p>
    <h2 class="h2 r d1">클린뷰티,<br/>그 이상의 <em>의미</em></h2>
    <div class="philos-grid">
      <blockquote class="philos-quote r d1">
        "아름다움은 복잡하지 않아야 한다.<br/>
        피부가 <em>원하는 것</em>을 주면, 나머지는 피부가 해결한다."
      </blockquote>
      <div class="philos-points r d2">
        <div class="philos-pt">
          <div class="philos-ico">🚫</div>
          <div>
            <h3 class="philos-pt-h">No Harmful Ingredients</h3>
            <p class="philos-pt-p">해로운 성분을 사용하지 않습니다. 순수한 유효 성분만으로 피부를 책임집니다.</p>
          </div>
        </div>
        <div class="philos-pt">
          <div class="philos-ico">✨</div>
          <div>
            <h3 class="philos-pt-h">Effective Results</h3>
            <p class="philos-pt-p">유효 성분의 과학적 검증. 빠르고 눈에 보이는 피부 변화를 경험하세요.</p>
          </div>
        </div>
        <div class="philos-pt">
          <div class="philos-ico">♻️</div>
          <div>
            <h3 class="philos-pt-h">Eco Packaging</h3>
            <p class="philos-pt-p">재활용 가능한 소재로 친환경 뷰티를 실천합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ROUTINE -->
<section class="section routine">
  <div class="container">
    <p class="tag r">Daily Ritual</p>
    <h2 class="h2 r d1">Soumé의 <em>5단계 루틴</em></h2>
    <div class="routine-steps r d2">
      <div class="r-step">
        <span class="r-step-num">01</span>
        <div class="r-step-ico">💧</div>
        <p class="r-step-lbl">Step 01</p>
        <h3 class="r-step-h">클렌징</h3>
        <p class="r-step-p">메이크업과 노폐물 제거. 피부 장벽 보호.</p>
      </div>
      <div class="r-step">
        <span class="r-step-num">02</span>
        <div class="r-step-ico">🌊</div>
        <p class="r-step-lbl">Step 02</p>
        <h3 class="r-step-h">토너</h3>
        <p class="r-step-p">각질 제거 & 수분 공급 준비. 다음 단계 흡수력 향상.</p>
      </div>
      <div class="r-step">
        <span class="r-step-num">03</span>
        <div class="r-step-ico">✨</div>
        <p class="r-step-lbl">Step 03</p>
        <h3 class="r-step-h">세럼</h3>
        <p class="r-step-p">고농축 유효 성분 집중 케어. 목적에 맞는 제품 선택.</p>
      </div>
      <div class="r-step">
        <span class="r-step-num">04</span>
        <div class="r-step-ico">🌸</div>
        <p class="r-step-lbl">Step 04</p>
        <h3 class="r-step-h">크림</h3>
        <p class="r-step-p">수분 잠금 & 피부 장벽 강화. 촉촉함 유지.</p>
      </div>
      <div class="r-step">
        <span class="r-step-num">05</span>
        <div class="r-step-ico">☀️</div>
        <p class="r-step-lbl">Step 05 (AM)</p>
        <h3 class="r-step-h">선케어</h3>
        <p class="r-step-p">최고의 안티에이징. 피부 노화 방지.</p>
      </div>
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="section reviews">
  <div class="container">
    <p class="tag r">Real Reviews</p>
    <h2 class="h2 r d1">실제 사용자의 <em>이야기</em></h2>
  </div>
  <div style="overflow:hidden;margin-top:0">
    <div class="rev-track">
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"Pure Glow Serum 3주 만에 피부톤이 달라졌어요. 이렇게 빠른 효과는 처음이에요."</p><div class="rev-author"><div class="rev-av">지</div><div><p class="rev-name">김지연</p><p class="rev-info">27세 · 건성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"자극 없는 제품을 찾다가 발견했어요. 효과도 좋아서 만족합니다."</p><div class="rev-author"><div class="rev-av">민</div><div><p class="rev-name">박민준</p><p class="rev-info">32세 · 민감성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★☆</div><p class="rev-text">"10대 딸아이 트러블에 Barrier Calm Cream이 효과적이었어요. 순해서 안심해요."</p><div class="rev-author"><div class="rev-av">수</div><div><p class="rev-name">이수정</p><p class="rev-info">43세 · 복합성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"효과가 떨어지지 않아요. 피부에 잘 맞고 윤기가 나요!"</p><div class="rev-author"><div class="rev-av">아</div><div><p class="rev-name">최아름</p><p class="rev-info">24세 · 지성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"Midnight Restore 쓰고 아침에 피부가 달라요. 40대인데 탄력이 돌아온 것 같아요."</p><div class="rev-author"><div class="rev-av">현</div><div><p class="rev-name">정현우</p><p class="rev-info">41세 · 노화 고민</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"Pure Glow Serum 3주 만에 피부톤이 달라졌어요. 이렇게 빠른 효과는 처음이에요."</p><div class="rev-author"><div class="rev-av">지</div><div><p class="rev-name">김지연</p><p class="rev-info">27세 · 건성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"자극 없는 제품을 찾다가 발견했어요. 효과도 좋아서 만족합니다."</p><div class="rev-author"><div class="rev-av">민</div><div><p class="rev-name">박민준</p><p class="rev-info">32세 · 민감성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★☆</div><p class="rev-text">"10대 딸아이 트러블에 Barrier Calm Cream이 효과적이었어요. 순해서 안심해요."</p><div class="rev-author"><div class="rev-av">수</div><div><p class="rev-name">이수정</p><p class="rev-info">43세 · 복합성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"효과가 떨어지지 않아요. 피부에 잘 맞고 윤기가 나요!"</p><div class="rev-author"><div class="rev-av">아</div><div><p class="rev-name">최아름</p><p class="rev-info">24세 · 지성 피부</p></div></div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><p class="rev-text">"Midnight Restore 쓰고 아침에 피부가 달라요. 40대인데 탄력이 돌아온 것 같아요."</p><div class="rev-author"><div class="rev-av">현</div><div><p class="rev-name">정현우</p><p class="rev-info">41세 · 노화 고민</p></div></div></div>
    </div>
  </div>
</section>

<!-- VISION -->
<section class="section vision" id="vision">
  <div class="container">
    <p class="tag r">Brand Roadmap</p>
    <h2 class="h2 r d1">클린뷰티에서<br/><em>미래 솔루션</em>까지</h2>
    <p class="vision-intro r d2">Soumé는 지금 시작합니다. 스킨케어를 완성하고, 다양한 솔루션으로 확장하며, 글로벌 K-뷰티 브랜드로 성장합니다.</p>
    <div class="vis-phases">
      <div class="vis-phase now r d1">
        <p class="vis-tag"><span class="vis-tag-live"></span>Phase 01 · 현재 진행</p>
        <h3 class="vis-h">Clean Skincare</h3>
        <ul class="vis-list">
          <li>클린 스킨케어 라인 론칭</li>
          <li>세럼, 크림, 클렌저 코어 라인업</li>
          <li>제품 라인 확장 계획</li>
          <li>국내 온라인 유통 시작</li>
        </ul>
      </div>
      <div class="vis-phase r d2">
        <p class="vis-tag">Phase 02 · 2025–2026</p>
        <h3 class="vis-h">Solution Expansion</h3>
        <ul class="vis-list">
          <li>제품 라인업 개발</li>
          <li>통합 솔루션 개발 예정</li>
          <li>제품 시너지 루틴 구성</li>
          <li>오프라인 팝업 스토어 예정</li>
        </ul>
      </div>
      <div class="vis-phase r d3">
        <p class="vis-tag">Phase 03 · 2027+</p>
        <h3 class="vis-h">Global K-Beauty</h3>
        <ul class="vis-list">
          <li>글로벌 뷰티 솔루션 확장</li>
          <li>개인화된 뷰티 솔루션 도입</li>
          <li>K-뷰티 글로벌 리더십</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- NEWSLETTER -->
<section class="section news" id="newsletter">
  <div class="container">
    <div class="news-inner">
      <h2 class="news-h r">Soumé와 함께<br/>새로운 뷰티를 경험하세요</h2>
      <p class="news-p r d1">신제품 소식, 클린뷰티 팁, 스킨케어 루틴 가이드를 먼저 받아보세요.<br/>구독자 전용 20% 할인 코드를 드립니다.</p>
      <div class="news-form r d2">
        <input type="email" class="news-inp" placeholder="이메일 주소 입력" id="mailInput" />
        <button class="news-btn" onclick="subscribe()">구독</button>
      </div>
      <p class="news-note r d3">개인정보는 안전하게 보호되며, 언제든지 수신 거부가 가능합니다.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="ft-main">
    <div>
      <img src="/static/soume-logo-black.png" alt="Soumé" class="ft-logo" />
      <p class="ft-tagline">클린뷰티의 새로운 기준.<br/>순수한 성분과 과학적 혁신으로<br/>당신의 피부를 변화시킵니다.</p>
      <div class="ft-soc">
        <a href="#" title="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        <a href="#" title="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        <a href="#" title="TikTok"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.22 8.22 0 004.83 1.56V6.87a4.85 4.85 0 01-1.06-.18z"/></svg></a>
        <a href="#" title="KakaoTalk"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.505 1.37 4.71 3.456 6.108L4.5 21l4.875-2.656C10.1 18.44 11.033 18.6 12 18.6c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/></svg></a>
      </div>
    </div>
    <div>
      <h4 class="ft-col-h">Products</h4>
      <ul class="ft-links">
        <li><a href="#">스킨케어</a></li>
        <li><a href="#">세럼</a></li>
        <li><a href="#">모이스처라이저</a></li>
        <li><a href="#">클렌저</a></li>
        <li><a href="#">선케어</a></li>
      </ul>
    </div>
    <div>
      <h4 class="ft-col-h">Brand</h4>
      <ul class="ft-links">
        <li><a href="#about">브랜드 스토리</a></li>
        <li><a href="#philosophy">철학</a></li>
        <li><a href="#ingredients">성분</a></li>
        <li><a href="#vision">비전</a></li>
        <li><a href="#">Press</a></li>
      </ul>
    </div>
    <div>
      <h4 class="ft-col-h">Support</h4>
      <ul class="ft-links">
        <li><a href="#">스킨케어 가이드</a></li>
        <li><a href="#">성분 사전</a></li>
        <li><a href="#">피부 타입 테스트</a></li>
        <li><a href="#">고객센터</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-bottom">
    <p class="ft-copy">© 2025 Soumé. All rights reserved. Made in Korea.</p>
    <div class="ft-legal">
      <a href="#">개인정보처리방침</a>
      <a href="#">이용약관</a>
      <a href="#">사업자 정보</a>
    </div>
  </div>
</footer>

<script>
  // ── LOADER ──
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('out'), 1800);
  });

  // ── NAV SCROLL ──
  const navEl = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('solid', window.scrollY > 60);
  });

  // ── MOBILE ──
  function mobOpen()  { document.getElementById('mobMenu').classList.add('open'); document.body.style.overflow='hidden'; }
  function mobClose() { document.getElementById('mobMenu').classList.remove('open'); document.body.style.overflow=''; }

  // ── HERO SLIDESHOW ──
  const slides = document.querySelectorAll('.hero-slide');
  const navItems = document.querySelectorAll('.hero-nav-item');
  const indexLines = document.querySelectorAll('.hero-index-line');
  const progressBar = document.getElementById('heroProgressBar');

  const slideTexts = [
    { headline: '피부가 원하는<br/><em>단 하나의 선택</em>', sub: '유해 성분 없이 만든 클린 포뮬러.<br/>과학적으로 검증된 유효 성분으로 피부 본연의 건강을 되찾아드립니다.' },
    { headline: 'Ocean Breeze<br/><em>Essence</em>',     sub: '상큼한 오션 향이 나는 프리미엄 에센스.<br/>유효 성분으로 표현되는 럭셔리한 경험.' },
    { headline: '아름다움의<br/><em>새로운 정의</em>',     sub: '럭셔리 스타일로 표현하는 클린뷰티.<br/>스타일과 효능 모두 타협하지 않습니다.' },
    { headline: 'Your Skin,<br/><em>Transformed</em>',    sub: '과학과 자연이 만나 탄생한 Ocean Breeze.<br/>검증된 포뮬러를 경험하세요.' }
  ];

  let curSlide = 0;
  let progress = 0;
  let autoTimer = null;
  let progressTimer = null;
  const slideDuration = 6000;

  function goSlide(idx) {
    slides[curSlide].classList.remove('active');
    navItems[curSlide].classList.remove('active');
    indexLines[curSlide].classList.remove('active');

    curSlide = idx;

    slides[curSlide].classList.add('active');
    navItems[curSlide].classList.add('active');
    indexLines[curSlide].classList.add('active');

    const t = slideTexts[curSlide];
    const hEl = document.getElementById('heroHeadline');
    const sEl = document.getElementById('heroSub');
    hEl.style.opacity = '0'; hEl.style.transform = 'translateY(16px)';
    sEl.style.opacity = '0'; sEl.style.transform = 'translateY(12px)';
    setTimeout(() => {
      hEl.innerHTML = t.headline;
      sEl.innerHTML = t.sub;
      hEl.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      sEl.style.transition = 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s';
      hEl.style.opacity = '1'; hEl.style.transform = 'translateY(0)';
      sEl.style.opacity = '1'; sEl.style.transform = 'translateY(0)';
    }, 250);

    clearInterval(progressTimer);
    progress = 0;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    startProgress();
    resetAutoTimer();
  }

  function startProgress() {
    const step = 100 / (slideDuration / 80);
    progressTimer = setInterval(() => {
      progress += step;
      if (progress >= 100) { progress = 100; clearInterval(progressTimer); }
      progressBar.style.transition = 'width 0.08s linear';
      progressBar.style.width = progress + '%';
    }, 80);
  }

  function resetAutoTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goSlide((curSlide + 1) % slides.length);
    }, slideDuration);
  }

  startProgress();
  resetAutoTimer();

  // ── REVEAL ──
  const rEls = document.querySelectorAll('.r');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  rEls.forEach(el => obs.observe(el));

  // ── PRODUCT FILTER ──
  function filter(cat, btn) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('.prod-card').forEach(c => {
      const show = cat === 'all' || c.dataset.cat === cat;
      c.style.display = show ? 'block' : 'none';
      if (show) {
        c.style.opacity = '0'; c.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          c.style.transition = 'opacity 0.4s, transform 0.4s';
          c.style.opacity = '1'; c.style.transform = 'translateY(0)';
        });
      }
    });
  }

  // ── SUBSCRIBE ──
  function subscribe() {
    const v = document.getElementById('mailInput').value;
    if (!v || !v.includes('@')) { alert('올바른 이메일을 입력해주세요.'); return; }
    alert('구독 완료! 🌿\\nSoumé 뉴스레터와 구독자 전용 20% 할인 코드를 보내드릴게요.');
    document.getElementById('mailInput').value = '';
  }

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
</script>
</body>
</html>`)
})

export default app
