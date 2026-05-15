---
id: intro
title: "대학 소개 및 운영 방향"
sidebar_position: 1
---

<style>{`
  :root {
    --navy: #0b1f45;
    --blue: #1651c8;
    --sky: #3a9fe0;
    --coral: #e84b35;
    --mint: #27c0a4;
    --gold: #f5a623;
    --light: #eef4ff;
    --gray: #667799;
    --border: #d8e4f4;
    --white: #fff;
    --bg: #f5f8ff;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: var(--bg);
    color: var(--navy);
    line-height: 1.7;
  }

  /* ── HERO ── */
  .hero {
    background: var(--navy);
    color: white;
    padding: 70px 32px 56px;
    position: relative;
    overflow: hidden;
  }
  .hero-grid {
    max-width: 980px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;
    position: relative; z-index: 1;
  }
  .hero-deco {
    position: absolute; inset: 0; pointer-events: none;
  }
  .hero-deco span {
    position: absolute;
    border-radius: 50%;
    opacity: 0.07;
    background: var(--sky);
  }
  .hero-deco span:nth-child(1) { width:500px;height:500px;top:-180px;right:-120px; }
  .hero-deco span:nth-child(2) { width:220px;height:220px;bottom:-60px;left:5%; background: var(--coral); }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 10px; margin-bottom: 18px;
  }
  .hero-eyebrow .pill {
    background: var(--coral);
    font-size: 10px; font-weight: 700; letter-spacing: 2px;
    padding: 4px 12px; border-radius: 20px; text-transform: uppercase;
  }
  .hero-eyebrow .year {
    font-family: 'DM Mono', monospace;
    font-size: 12px; color: rgba(255,255,255,0.45);
  }
  .hero h1 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: clamp(28px, 4.5vw, 50px);
    line-height: 1.12;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }
  .hero h1 em { color: var(--sky); font-style: normal; }
  .hero p.sub {
    font-size: 14px;
    color: rgba(255,255,255,0.62);
    max-width: 480px;
  }
  .hero-badge-stack {
    display: flex; flex-direction: column; gap: 10px;
    min-width: 140px;
  }
  @media (max-width: 640px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-badge-stack { flex-direction: row; flex-wrap: wrap; }
  }
  .hero-badge {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 10px;
    padding: 10px 14px;
    text-align: center;
  }
  .hero-badge strong {
    display: block; font-size: 22px;
    font-family: 'DM Mono', monospace;
    color: var(--sky);
  }
  .hero-badge span { font-size: 10px; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; }

  /* ── SECTION WRAPPER ── */
  .wrap { max-width: 980px; margin: 0 auto; padding: 56px 24px; }

  .sec-head {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 32px;
  }
  .sec-num {
    font-family: 'DM Mono', monospace;
    font-size: 11px; font-weight: 500;
    color: var(--blue);
    background: var(--light);
    border: 2px solid var(--blue);
    width: 34px; height: 34px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .sec-head h2 { font-size: 21px; font-weight: 700; }

  .divider { border: none; border-top: 1.5px solid var(--border); margin: 0 24px; }

  /* ── MISSION CARDS ── */
  .mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 18px;
  }
  .mission-card {
    background: white;
    border-radius: 14px;
    padding: 24px 20px;
    box-shadow: 0 2px 14px rgba(11,31,69,0.07);
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .mission-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(11,31,69,0.12); }
  .mission-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
  }
  .mc1::before { background: var(--blue); }
  .mc2::before { background: var(--sky); }
  .mc3::before { background: var(--mint); }
  .mc4::before { background: var(--coral); }
  .mc5::before { background: var(--gold); }
  .mission-icon { font-size: 26px; margin-bottom: 10px; }
  .mission-card h3 { font-size: 14px; font-weight: 700; margin-bottom: 8px; color: var(--navy); }
  .mission-card p { font-size: 12.5px; color: var(--gray); line-height: 1.65; }

  /* ── AUDIENCE ── */
  .audience-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  @media (max-width: 560px) { .audience-grid { grid-template-columns: 1fr; } }
  .audience-card {
    background: white; border-radius: 14px; padding: 28px 24px;
    box-shadow: 0 2px 14px rgba(11,31,69,0.07);
    display: flex; flex-direction: column; gap: 10px;
  }
  .aud-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 700;
  }
  .aud-dot {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 900; color: white;
    flex-shrink: 0;
  }
  .sw-major .aud-dot { background: var(--blue); }
  .sw-minor .aud-dot { background: var(--coral); }
  .audience-card p { font-size: 13px; color: var(--gray); }

  /* ── FEATURE NUMBERS ── */
  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }
  .feature-item {
    background: white;
    border-radius: 12px;
    padding: 20px 20px;
    box-shadow: 0 1px 10px rgba(11,31,69,0.06);
    display: flex; gap: 14px; align-items: flex-start;
  }
  .feature-num {
    font-family: 'DM Mono', monospace;
    font-size: 13px; font-weight: 500;
    color: white;
    background: var(--blue);
    width: 28px; height: 28px;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 2px;
  }
  .feature-num.alt { background: var(--mint); }
  .feature-item p { font-size: 13px; color: #334466; line-height: 1.65; }

  /* ── 4C STRATEGY ── */
  .strategy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 18px;
  }
  .strat-card {
    background: white;
    border-radius: 14px;
    padding: 24px 20px;
    box-shadow: 0 2px 12px rgba(11,31,69,0.06);
    text-align: center;
  }
  .strat-letter {
    font-family: 'DM Mono', monospace;
    font-size: 36px; font-weight: 500;
    margin-bottom: 6px;
  }
  .c1 .strat-letter { color: var(--blue); }
  .c2 .strat-letter { color: var(--mint); }
  .c3 .strat-letter { color: var(--coral); }
  .c4 .strat-letter { color: var(--gold); }
  .strat-card h3 { font-size: 13px; font-weight: 700; margin-bottom: 8px; }
  .strat-card p { font-size: 12px; color: var(--gray); }

  /* ── 8대 인재상 ── */
  .talent-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  @media (max-width: 640px) { .talent-grid { grid-template-columns: repeat(2, 1fr); } }
  .talent-card {
    background: white;
    border-radius: 12px;
    padding: 18px 14px;
    text-align: center;
    box-shadow: 0 1px 10px rgba(11,31,69,0.06);
  }
  .talent-symbol {
    font-family: 'DM Mono', monospace;
    font-size: 22px; font-weight: 700;
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 10px;
    color: white;
  }
  .ts1 { background: var(--blue); }
  .ts2 { background: #7b5cf0; }
  .ts3 { background: var(--sky); }
  .ts4 { background: var(--mint); }
  .ts5 { background: var(--coral); }
  .ts6 { background: var(--gold); }
  .ts7 { background: #e040fb; }
  .ts8 { background: #26a69a; }
  .talent-card h4 { font-size: 12.5px; font-weight: 700; margin-bottom: 4px; }
  .talent-card span { font-size: 11px; color: var(--gray); }

  /* ── 핵심역량과제 ── */
  .task-cols {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;
  }
  @media (max-width: 700px) { .task-cols { grid-template-columns: 1fr; } }
  .task-col {
    background: white; border-radius: 14px; overflow: hidden;
    box-shadow: 0 2px 12px rgba(11,31,69,0.06);
  }
  .task-col-head {
    padding: 14px 18px;
    font-size: 13px; font-weight: 700;
    color: white;
  }
  .t1 .task-col-head { background: var(--blue); }
  .t2 .task-col-head { background: var(--mint); }
  .t3 .task-col-head { background: var(--coral); }
  .task-col ul { list-style: none; padding: 14px 18px; display: flex; flex-direction: column; gap: 8px; }
  .task-col ul li {
    font-size: 12.5px; color: #334466;
    padding-left: 14px; position: relative; line-height: 1.5;
  }
  .task-col ul li::before {
    content: '▸'; position: absolute; left: 0; top: 2px;
    font-size: 10px; color: var(--sky);
  }

  /* ── 대학 지원 의지 ── */
  .support-row {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;
  }
  .supp-item {
    background: white; border-radius: 12px; padding: 22px 20px;
    box-shadow: 0 1px 10px rgba(11,31,69,0.06);
    border-bottom: 3px solid var(--blue);
    display: flex; flex-direction: column; gap: 6px;
  }
  .supp-item:nth-child(2) { border-bottom-color: var(--mint); }
  .supp-item:nth-child(3) { border-bottom-color: var(--coral); }
  .supp-item:nth-child(4) { border-bottom-color: var(--gold); }
  .supp-item .big {
    font-family: 'DM Mono', monospace;
    font-size: 28px; font-weight: 500;
    color: var(--blue); line-height: 1;
  }
  .supp-item:nth-child(2) .big { color: var(--mint); }
  .supp-item:nth-child(3) .big { color: var(--coral); }
  .supp-item:nth-child(4) .big { color: var(--gold); }
  .supp-item h4 { font-size: 13px; font-weight: 700; }
  .supp-item p { font-size: 12px; color: var(--gray); }

  /* ── FOOTER ── */
  footer {
    background: var(--navy); color: rgba(255,255,255,0.45);
    text-align: center; padding: 26px;
    font-size: 12px; margin-top: 16px;
  }
  footer strong { color: rgba(255,255,255,0.78); }

  /* ── ANIMATION ── */
  @keyframes up { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
  .au { animation: up 0.55s ease both; }
  .d1{animation-delay:.08s} .d2{animation-delay:.16s} .d3{animation-delay:.24s} .d4{animation-delay:.32s}
`}</style>


<div class="hero">
  <div class="hero-deco"><span></span><span></span></div>
  <div class="hero-grid">
    <div>
      <div class="hero-eyebrow">
        <span class="pill">SW중심대학</span>
        <span class="year">PUSAN NATIONAL UNIVERSITY</span>
      </div>
      <h1>진정한 <em>AI·SW</em> 가치확산을 실현하는<br />부산대학교 SW중심대학</h1>
      <p class="sub">대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화하고, 진정한 Software 가치의 확산을 실현하는 대학</p>
    </div>
    <div class="hero-badge-stack">
      <div class="hero-badge"><strong>1위</strong><span>동남권 AI·SW 거점</span></div>
      <div class="hero-badge"><strong>8개</strong><span>전공특화 트랙</span></div>
      <div class="hero-badge"><strong>14개</strong><span>SW-X 융합트랙</span></div>
    </div>
  </div>
</div>




## 핵심 교육 미션

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>핵심 교육 미션</h2></div>
  <div class="mission-grid">
    <div class="mission-card mc1 au d1">
      <div class="mission-icon">🎯</div>
      <h3>AI·SW 전문인력 양성</h3>
      <p>이론과 실무를 겸비한 AI·SW 전문 교육을 통해 현장에서 능력을 발휘할 수 있는 실무형 인재 양성</p>
    </div>
    <div class="mission-card mc2 au d2">
      <div class="mission-icon">🏗️</div>
      <h3>AI·SW 특화교육환경 구축</h3>
      <p>신기술 분야 AI·SW 학습을 위한 교육 인프라 구축 (DevCloud, AI Platform, 전용 건물 신축)</p>
    </div>
    <div class="mission-card mc3 au d3">
      <div class="mission-icon">🤝</div>
      <h3>AI·SW 실효성 있는 산학협력</h3>
      <p>산학협력 프로젝트, 채용연계형 인턴십 등을 통하여 실제 산업현장에 적용할 수 있는 AI·SW 역량 교육</p>
    </div>
    <div class="mission-card mc4 au d4">
      <div class="mission-icon">🌏</div>
      <h3>AI·SW 가치확산</h3>
      <p>공교육 내 AI 및 SW 교육 강화, 지역 정보 소외계층과 미취업자·일반인을 위한 맞춤형 프로그램 운영</p>
    </div>
    <div class="mission-card mc5 au d4">
      <div class="mission-icon">📐</div>
      <h3>AI·SW 인력양성 저변 확대</h3>
      <p>인문·사회 등 타 전공별 특성을 반영한 AI·SW기초 교육 의무화 및 AI·SW융합과정 활성화</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 수요자 맞춤 AI·SW 교육

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>수요자 맞춤 AI·SW 교육</h2></div>
  <div class="audience-grid">
    <div class="audience-card sw-major au d1">
      <div class="aud-tag"><div class="aud-dot">S</div>SW 전공자</div>
      <p>이론과 실무를 겸비한 AI·SW 전문교육을 통해 현장에서 능력을 발휘할 수 있는 실무형 인재로 성장</p>
    </div>
    <div class="audience-card sw-minor au d2">
      <div class="aud-tag"><div class="aud-dot" style={{background: 'var(--coral)'}}>W</div>SW 비전공자</div>
      <p>AI·SW기초 및 디지털리터러시 역량을 강화하여 다양한 전공분야에서 소프트웨어와 AI를 적용할 수 있는 인재를 양성</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## SW 전공교육 강화 — 주요 특징

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>SW 전공교육 강화 — 주요 특징</h2></div>
  <div class="feature-list">
    <div class="feature-item au d1">
      <div class="feature-num">①</div>
      <p>산업체 수요 기반 신기술 교육 강화 — 동남권 디지털 대전환을 위한 <strong>8개 전공 특화 트랙</strong> 신설 (클라우드, 융합보안, 지능형IoT, 메타버스, 생성AI, 인공지능응용, 의생명빅데이터통계, 디자인테크)</p>
    </div>
    <div class="feature-item au d2">
      <div class="feature-num">②</div>
      <p>트랙별 산업체 전문가가 참여하는 <strong>8개 트랙운영위원회</strong> 체제로 교육 및 산학협력 운영 체계 일원화</p>
    </div>
    <div class="feature-item au d3">
      <div class="feature-num">③</div>
      <p><strong>PNU DevCloud, PNU AI Platform</strong> 구축 및 전공 특화 교육환경 구축 (8개 특화트랙 전용)</p>
    </div>
    <div class="feature-item au d4">
      <div class="feature-num">④</div>
      <p>글로벌 표준 반영 <strong>PNU-SW2023 교육과정</strong> 체계화 (ACM/IEEE CS2013/CE2016/CCDS2021)</p>
    </div>
    <div class="feature-item au d1">
      <div class="feature-num">⑤</div>
      <p><strong>PNU-ICEx SW 통합교육시스템</strong> 구축 및 코딩역량개발센터 신설 — PNU코딩인증제 도입 (기초·융합·전공·심화)</p>
    </div>
    <div class="feature-item au d2">
      <div class="feature-num">⑥</div>
      <p><strong>SW산학협력센터 신설</strong>로 AI·SW 현장실무형 산학협력 프로젝트 추진 및 중장기 인턴십 강화</p>
    </div>
    <div class="feature-item au d3">
      <div class="feature-num">⑦</div>
      <p>산학협력 기반 고급 AI·SW 인재 양성 패스트트랙인 <strong>학·석사 연계, 학·석·박사 연계과정</strong> 운영 가속화</p>
    </div>
    <div class="feature-item au d4">
      <div class="feature-num">⑧</div>
      <p>SW중심대학 교육모델 고도화를 위한 <strong>SMART-PNU SW 교육혁신모델</strong> 개발 및 운영</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## SW 융합교육 확대

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>SW 융합교육 확대</h2></div>
  <div class="feature-list">
    <div class="feature-item au d1">
      <div class="feature-num alt">①</div>
      <p>학내 전 분야가 참여하는 <strong>14개 SW-X 융합트랙</strong> 개설 및 융합마이크로디그리 5개 개설 예정 (2026년 2학기~)</p>
    </div>
    <div class="feature-item au d2">
      <div class="feature-num alt">②</div>
      <p>학부생 <strong>2만여 명 필수 AI·SW기초교육</strong>의 품질 향상을 위한 지속적 교육과정 개선 및 비교과 교육 강화</p>
    </div>
    <div class="feature-item au d3">
      <div class="feature-num alt">③</div>
      <p>AI·SW 프로젝트 개발 및 협업 역량 향상을 위한 <strong>입학 전 AI·SW 교육</strong> 확대 실시</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 교육성과 공유 및 확산

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>교육성과 공유 및 확산</h2></div>
  <div class="feature-list">
    <div class="feature-item au d1">
      <div class="feature-num" style={{background: 'var(--gold)'}}>①</div>
      <p>SW중심대학 1단계 사업 성과를 확산하고, <strong>AI·SW저변 확대와 인식제고 프로그램</strong> 고도화하여 지속적 발전</p>
    </div>
    <div class="feature-item au d2">
      <div class="feature-num" style={{background: 'var(--gold)'}}>②</div>
      <p>공교육 연계 AI·SW교육 확산 및 <strong>고교-대학 연계를 통한 고교 AI·SW교육 강화</strong> 기여</p>
    </div>
    <div class="feature-item au d3">
      <div class="feature-num" style={{background: 'var(--gold)'}}>③</div>
      <p>전주기적 AI·SW 창업 지원 모델 <strong>PSS+X(PNU Software Start-up+X)</strong> 구축</p>
    </div>
    <div class="feature-item au d4">
      <div class="feature-num" style={{background: 'var(--gold)'}}>④</div>
      <p>지역 대학간 혁신 네트워크 구축과 SW중심대학을 포함한 타 대학들과의 <strong>공동 콘텐츠 개발 및 공유</strong></p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 4C 추진전략

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">06</div><h2>4C 추진전략</h2></div>
  <div class="strategy-grid">
    <div class="strat-card c1 au d1">
      <div class="strat-letter">C</div>
      <h3>Customized Education</h3>
      <p>신기술 반영 교육과정 기반 맞춤형 교육혁신</p>
    </div>
    <div class="strat-card c2 au d2">
      <div class="strat-letter">C</div>
      <h3>Convergence Research</h3>
      <p>미래지향적 융합 연구</p>
    </div>
    <div class="strat-card c3 au d3">
      <div class="strat-letter">C</div>
      <h3>Cooperative Regional-industrial-Univ.</h3>
      <p>소통·관계 중심 융합 산학협력 네트워크 강화 / 현장 문제 공동해결</p>
    </div>
    <div class="strat-card c4 au d4">
      <div class="strat-letter">C</div>
      <h3>Connected Regional Community</h3>
      <p>SW가치확산 지역거점 / AI·SW가치확산 중심 허브</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 8대 인재상 (SMARTPNU)

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">07</div><h2>8대 인재상 (SMARTPNU)</h2></div>
  <div class="talent-grid">
    <div class="talent-card au d1"><div class="talent-symbol ts1">S</div><h4>문제해결형 혁신인재</h4><span>Software</span></div>
    <div class="talent-card au d2"><div class="talent-symbol ts2">M</div><h4>미래지향적 혁신인재</h4><span>Medoid</span></div>
    <div class="talent-card au d3"><div class="talent-symbol ts3">A</div><h4>자기주도형 혁신인재</h4><span>AIMCSD</span></div>
    <div class="talent-card au d4"><div class="talent-symbol ts4">R</div><h4>지역 혁신인재</h4><span>Region</span></div>
    <div class="talent-card au d1"><div class="talent-symbol ts5">T</div><h4>융합형 혁신인재</h4><span>Top</span></div>
    <div class="talent-card au d2"><div class="talent-symbol ts6">P</div><h4>협동형 혁신인재</h4><span>Pioneer</span></div>
    <div class="talent-card au d3"><div class="talent-symbol ts7">N</div><h4>글로컬 혁신인재</h4><span>Network</span></div>
    <div class="talent-card au d4"><div class="talent-symbol ts8">U</div><h4>균형잡힌 혁신인재</h4><span>Universe</span></div>
  </div>
</div>

<hr class="divider"/>




## 16대 핵심역량과제

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">08</div><h2>16대 핵심역량과제</h2></div>
  <div class="task-cols">
    <div class="task-col t1 au d1">
      <div class="task-col-head">🎓 SW전공교육 강화</div>
      <ul>
        <li>SW문제해결 교육과정 운영</li>
        <li>오픈소스 에코시스템 운영</li>
        <li>글로벌 표준 교과과정 운영</li>
        <li>신기술분야 특화 교육과정 운영</li>
        <li>PNU-ICEx 통합교육시스템 운영</li>
        <li>전교생 AI·SW교육 의무화</li>
      </ul>
    </div>
    <div class="task-col t2 au d2">
      <div class="task-col-head">🔗 SW융합·산학협력 강화</div>
      <ul>
        <li>기업주도 프로젝트 의무화</li>
        <li>기업 맞춤형 중장기 인턴십</li>
        <li>해커톤 문제해결대회</li>
        <li>PSS+X 창업 프로그램 확대</li>
        <li>전계열 융합트랙 확대</li>
        <li>타전공 개방 마이크로디그리</li>
      </ul>
    </div>
    <div class="task-col t3 au d3">
      <div class="task-col-head">🌐 성과공유 및 지역혁신</div>
      <ul>
        <li>개방형 교육 확대</li>
        <li>타대학 성과 공유 확대</li>
        <li>고교학점제 개설 운영</li>
        <li>지산학협력 인력양성</li>
      </ul>
    </div>
  </div>
</div>

<hr class="divider"/>




## 대학의 지원 의지

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">09</div><h2>대학의 지원 의지</h2></div>
  <div class="support-row">
    <div class="supp-item au d1">
      <div class="big">+43.3%</div>
      <h4>SW학과 정원 증원</h4>
      <p>대학정원 감축에도 불구, 2019년 134명 → 2023년 192명으로 58명 증원</p>
    </div>
    <div class="supp-item au d2">
      <div class="big">21,302㎡</div>
      <h4>전용 건물 신축</h4>
      <p>AI·SW학과 전용 IT관, 경암공학관 2개 건물 신축 (IT관 25.10 준공)</p>
    </div>
    <div class="supp-item au d3">
      <div class="big">전국 최초</div>
      <h4>인공지능 공동학과</h4>
      <p>부산대–경북대 인공지능 공동학과 신설 (부산대 68명 + 경북대 60명)</p>
    </div>
    <div class="supp-item au d4">
      <div class="big">컨트롤타워</div>
      <h4>AI융합교육원</h4>
      <p>AI·SW 인재양성을 위한 전담 컨트롤타워 AI융합교육원 운영</p>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 동남권 디지털 대전환 수요맞춤형 AI·SW 인재양성 거점국립대학<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 소개 자료를 기반으로 정리되었습니다.</span>
</footer>
