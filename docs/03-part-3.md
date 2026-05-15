---
id: part-3
title: "대학의 자율적인 교육혁신"
sidebar_position: 3
---

<style>{`
  :root {
    --navy:   #0c1e44;
    --blue:   #1750c8;
    --sky:    #2ea8e0;
    --teal:   #1db8a0;
    --coral:  #e8452f;
    --purple: #7c5ce8;
    --gold:   #f0a500;
    --light:  #edf2ff;
    --bg:     #f4f7ff;
    --gray:   #6677aa;
    --border: #d6e1f5;
    --white:  #ffffff;
  }

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: var(--bg);
    color: var(--navy);
    line-height: 1.72;
  }

  /* ── HERO ── */
  .hero {
    background: linear-gradient(145deg, #07183a 0%, #162d6a 55%, #1a4a9e 100%);
    padding: 68px 32px 52px;
    color: white;
    position: relative;
    overflow: hidden;
  }
  .hero-blob {
    position: absolute; border-radius: 50%; pointer-events: none;
  }
  .hero-blob.b1 { width:460px;height:460px;top:-160px;right:-80px;background:rgba(46,168,224,.1); }
  .hero-blob.b2 { width:200px;height:200px;bottom:-70px;left:8%;background:rgba(232,69,47,.09); }
  .hero-inner { max-width:980px; margin:0 auto; position:relative; z-index:1; }
  .hero-chip {
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(255,255,255,.09);
    border:1px solid rgba(255,255,255,.18);
    padding:5px 14px; border-radius:20px;
    font-size:11px; font-weight:600; letter-spacing:1.5px;
    text-transform:uppercase; margin-bottom:20px;
    color:rgba(255,255,255,.8);
  }
  .hero-chip::before { content:'02'; font-family:'DM Mono',monospace; color:var(--sky); font-size:12px; }
  .hero h1 {
    font-family:'Oswald',sans-serif;
    font-size:clamp(28px,5vw,52px);
    line-height:1.1;
    margin-bottom:14px;
    letter-spacing:-.5px;
  }
  .hero h1 em { color:var(--sky); font-style:normal; }
  .hero p.sub { font-size:14px; color:rgba(255,255,255,.58); max-width:520px; }

  /* ── WRAP / SECTION ── */
  .wrap { max-width:980px; margin:0 auto; padding:56px 24px; }
  .sec-head { display:flex; align-items:center; gap:14px; margin-bottom:32px; }
  .sec-num {
    font-family:'DM Mono',monospace; font-size:11px;
    color:var(--blue); background:var(--light);
    border:2px solid var(--blue);
    width:34px; height:34px; border-radius:8px;
    display:flex; align-items:center; justify-content:center;
    flex-shrink:0;
  }
  .sec-head h2 { font-size:21px; font-weight:700; }
  .divider { border:none; border-top:1.5px solid var(--border); margin:0 24px; }

  /* ── FOUR-PILLAR CARDS (상단 4개 항목) ── */
  .pillar-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    gap:18px;
  }
  .pillar-card {
    background:white; border-radius:14px; padding:24px 20px;
    box-shadow:0 2px 14px rgba(12,30,68,.07);
    border-top:4px solid var(--blue);
    transition:transform .2s, box-shadow .2s;
  }
  .pillar-card:hover { transform:translateY(-4px); box-shadow:0 8px 28px rgba(12,30,68,.12); }
  .pillar-card.p2 { border-top-color:var(--teal); }
  .pillar-card.p3 { border-top-color:var(--purple); }
  .pillar-card.p4 { border-top-color:var(--coral); }
  .pillar-icon { font-size:24px; margin-bottom:10px; }
  .pillar-card h3 { font-size:14px; font-weight:700; margin-bottom:8px; }
  .pillar-card ul { list-style:none; display:flex; flex-direction:column; gap:5px; }
  .pillar-card ul li {
    font-size:12.5px; color:var(--gray);
    padding-left:13px; position:relative;
  }
  .pillar-card ul li::before {
    content:'▸'; position:absolute; left:0; top:3px;
    font-size:9px; color:var(--sky);
  }

  /* ── 공동학과 JOINT ── */
  .joint-box {
    background:white; border-radius:16px;
    box-shadow:0 2px 16px rgba(12,30,68,.08);
    overflow:hidden;
  }
  .joint-head {
    background:var(--navy); color:white;
    padding:18px 28px;
    display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;
  }
  .joint-head h3 { font-size:16px; font-weight:700; }
  .joint-head .total-badge {
    background:var(--sky); color:white;
    font-family:'DM Mono',monospace; font-size:14px;
    padding:6px 18px; border-radius:20px;
  }
  .joint-body {
    display:grid; grid-template-columns:1fr 1fr;
    gap:0;
  }
  @media(max-width:580px){ .joint-body { grid-template-columns:1fr; } }
  .joint-uni {
    padding:24px 28px;
    border-right:1px solid var(--border);
  }
  .joint-uni:last-child { border-right:none; }
  .uni-tag {
    display:inline-block;
    font-size:10px; font-weight:700; letter-spacing:1.5px;
    text-transform:uppercase; padding:3px 10px; border-radius:4px;
    margin-bottom:10px;
  }
  .pnu .uni-tag { background:var(--light); color:var(--blue); }
  .knu .uni-tag { background:#fff3e8; color:#c05c00; }
  .joint-uni h4 { font-size:22px; font-weight:900; margin-bottom:4px; }
  .pnu h4 { color:var(--blue); }
  .knu h4 { color:#c05c00; }
  .joint-uni p { font-size:12.5px; color:var(--gray); }
  .joint-note {
    padding:14px 28px;
    background:var(--light);
    font-size:12px; color:var(--navy);
    border-top:1px solid var(--border);
  }

  /* ── 8개 트랙 CARDS ── */
  .track-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(195px,1fr));
    gap:16px;
  }
  .track-card {
    background:white; border-radius:12px; padding:20px 18px;
    box-shadow:0 1px 10px rgba(12,30,68,.07);
    position:relative; overflow:hidden;
    transition:transform .2s;
  }
  .track-card:hover { transform:translateY(-3px); }
  .track-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
  }
  .tr1::after{background:var(--blue);}
  .tr2::after{background:var(--coral);}
  .tr3::after{background:var(--teal);}
  .tr4::after{background:var(--purple);}
  .tr5::after{background:#e040fb;}
  .tr6::after{background:var(--gold);}
  .tr7::after{background:#26a69a;}
  .tr8::after{background:#5c7cfa;}
  .track-icon { font-size:22px; margin-bottom:8px; }
  .track-card h4 { font-size:14px; font-weight:700; margin-bottom:6px; }
  .track-card p { font-size:11.5px; color:var(--gray); line-height:1.6; }
  .track-growth {
    display:inline-block; margin-top:10px;
    font-family:'DM Mono',monospace; font-size:11px;
    background:var(--light); color:var(--blue);
    padding:2px 8px; border-radius:4px;
  }

  /* ── SMART-PNU 모델 ── */
  .smart-list {
    display:flex; flex-direction:column; gap:14px;
  }
  .smart-item {
    background:white; border-radius:12px; padding:20px 22px;
    box-shadow:0 1px 10px rgba(12,30,68,.06);
    display:flex; gap:16px; align-items:flex-start;
  }
  .smart-dot {
    width:10px; height:10px; border-radius:50%;
    margin-top:7px; flex-shrink:0;
  }
  .sd1{background:var(--blue);}
  .sd2{background:var(--teal);}
  .sd3{background:var(--coral);}
  .sd4{background:var(--purple);}
  .sd5{background:var(--gold);}
  .sd6{background:var(--sky);}
  .smart-item p { font-size:13px; color:#334466; line-height:1.68; }
  .smart-item strong { color:var(--navy); }

  /* ── 융합교육 4방향 ── */
  .fusion-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:18px;
  }
  .fusion-card {
    background:white; border-radius:14px; padding:24px 20px;
    box-shadow:0 2px 12px rgba(12,30,68,.07);
  }
  .fusion-card .f-num {
    font-family:'Oswald',sans-serif; font-size:32px; line-height:1;
    margin-bottom:8px;
  }
  .f1 .f-num{color:var(--blue);}
  .f2 .f-num{color:var(--teal);}
  .f3 .f-num{color:var(--coral);}
  .f4 .f-num{color:var(--purple);}
  .fusion-card h3 { font-size:14px; font-weight:700; margin-bottom:10px; }
  .fusion-card .f-label {
    font-size:11px; font-weight:700;
    letter-spacing:1px; text-transform:uppercase;
    margin-bottom:10px; display:block;
  }
  .f1 .f-label{color:var(--blue);}
  .f2 .f-label{color:var(--teal);}
  .f3 .f-label{color:var(--coral);}
  .f4 .f-label{color:var(--purple);}
  .fusion-card ul { list-style:none; display:flex; flex-direction:column; gap:5px; }
  .fusion-card ul li {
    font-size:12.5px; color:var(--gray);
    padding-left:13px; position:relative;
  }
  .fusion-card ul li::before {
    content:'▸'; position:absolute; left:0; top:3px;
    font-size:9px; color:var(--sky);
  }

  /* ANIMATION */
  @keyframes up { from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);} }
  .au{animation:up .55s ease both;}
  .d1{animation-delay:.07s}.d2{animation-delay:.14s}.d3{animation-delay:.21s}.d4{animation-delay:.28s}

  /* FOOTER */
  footer {
    background:var(--navy); color:rgba(255,255,255,.45);
    text-align:center; padding:26px;
    font-size:12px; margin-top:16px;
  }
  footer strong { color:rgba(255,255,255,.78); }
`}</style>


<div class="hero">
  <div class="hero-blob b1"></div>
  <div class="hero-blob b2"></div>
  <div class="hero-inner">
    <div class="hero-chip">대학의 자율적인 교육혁신</div>
    <h1>대학 자율의<br /><em>AI·SW 전공 및 융합</em><br />교육체계 도입</h1>
    <p class="sub">특성화·전문화를 위한 학사 조직과 제도 개편, 글로벌 표준 반영 AI·SW 교육혁신모델 수립, 융합교육체계 다변화</p>
  </div>
</div>




## 4대 추진 방향

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>4대 추진 방향</h2></div>
  <div class="pillar-grid">
    <div class="pillar-card p1 au d1">
      <div class="pillar-icon">🎓</div>
      <h3>대학 특성화 분야 지정 / AI·SW학과 정원 증원</h3>
      <ul>
        <li>대학 중장기 발전 계획 상의 대표 특성화 분야 지정</li>
        <li>AI·SW학과 정원 158명 → 192명으로 34명 증원</li>
        <li>컴퓨터공학전공 80명 / 인공지능전공 68명 / 데이터사이언스전공 44명</li>
      </ul>
    </div>
    <div class="pillar-card p2 au d2">
      <div class="pillar-icon">🏛️</div>
      <h3>특성화·전문화를 위한 학사 조직과 제도 개편</h3>
      <ul>
        <li>인공지능전공 신설 및 경북대학교와의 공동학과 운영</li>
        <li>8개 SW 특화 트랙 신설하여 교육 특성화</li>
        <li>산업체 참여 교과과정혁신위원회 및 교과목 개발·운영 체계 개편</li>
        <li>8개 트랙운영위원회 설치·운영, 코딩역량개발센터 운영</li>
      </ul>
    </div>
    <div class="pillar-card p3 au d3">
      <div class="pillar-icon">🤖</div>
      <h3>AI·SW 교육혁신모델 수립 글로벌 표준 반영</h3>
      <ul>
        <li>AI·SW 전공교육 혁신을 위한 혁신교육모델 SMART-PNU 수립</li>
        <li>ACM/IEEE CS2013, CE2016, CC2020에 기초한 교과과정 구성</li>
      </ul>
    </div>
    <div class="pillar-card p4 au d4">
      <div class="pillar-icon">⚙️</div>
      <h3>AI·SW 전공 교육 운영 및 지원 조직 강화</h3>
      <ul>
        <li>산업체 전문가 참여 교과과정혁신위원회 구성·운영</li>
        <li>트랙별 산업체 전문가 참여 트랙운영위원회 운영</li>
        <li>교과과정 개편·산학협력 일원화 체계 구축</li>
      </ul>
    </div>
  </div>
</div>

<hr class="divider"/>




## 부산대–경북대 인공지능 공동학과 (전국 최초)

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>부산대–경북대 인공지능 공동학과 (전국 최초)</h2></div>
  <div class="joint-box au">
    <div class="joint-head">
      <h3>인공지능전공 공동학과 — 협약을 통해 교원·교육시설 등을 공유하여 교육과정 공동 운영 / 공동학위증 수여</h3>
      <div class="total-badge">총 정원 128명</div>
    </div>
    <div class="joint-body">
      <div class="joint-uni pnu">
        <span class="uni-tag">부산대학교</span>
        <h4>인공지능전공 68명</h4>
        <p>AI Software 특화 교과목 주관<br />교육부 증원 포함</p>
      </div>
      <div class="joint-uni knu">
        <span class="uni-tag">경북대학교</span>
        <h4>인공지능전공 60명</h4>
        <p>AI Hardware 특화 교과목 주관<br />교육부 증원 포함</p>
      </div>
    </div>
    <div class="joint-note">📌 전국 최초 인공지능 공동학과 신설 — 두 대학이 SW(소프트웨어)와 HW(하드웨어) 특화 교과목을 각각 주관하여 시너지 창출</div>
  </div>
</div>

<hr class="divider"/>




## 8개 AI·SW 전공 특화 트랙

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>8개 AI·SW 전공 특화 트랙</h2></div>
  <div class="track-grid">
    <div class="track-card tr1 au d1">
      <div class="track-icon">☁️</div>
      <h4>클라우드</h4>
      <p>클라우드 시장 매년 18% 규모 성장, 2030년 기준 클라우드 등 지능정보기술 분야에서 약 80만 명 신규 일자리 창출 전망</p>
      <span class="track-growth">+18% / yr</span>
    </div>
    <div class="track-card tr2 au d2">
      <div class="track-icon">🔒</div>
      <h4>융합보안</h4>
      <p>차세대 보안분야 세계시장 2018년 2,508억 달러, 연평균 15.33% 성장하여 2026년 시장규모 2.3배 이상 확대 전망</p>
      <span class="track-growth">×2.3 by 2026</span>
    </div>
    <div class="track-card tr3 au d3">
      <div class="track-icon">📡</div>
      <h4>지능형IoT</h4>
      <p>미래자동차, IoT 가전, 디지털헬스케어, 스마트 친환경 선박, 항공드론 등 5개 신산업 분야에서 1만 명 이상 산업인력 부족</p>
      <span class="track-growth">인력 1만 명 이상 부족</span>
    </div>
    <div class="track-card tr4 au d4">
      <div class="track-icon">🌐</div>
      <h4>메타버스</h4>
      <p>가트너 선정 2023년 10대 ICT 전략기술 포함. 메타버스/디지털트윈 기술은 디지털 대전환 대표 기술로 전세계적 주목</p>
      <span class="track-growth">Top 10 ICT 2023</span>
    </div>
    <div class="track-card tr5 au d1">
      <div class="track-icon">✨</div>
      <h4>생성AI</h4>
      <p>콘텐츠 생성, 자연어 처리, 이미지 및 영상 생성 등에서 중요한 역할. 글로벌 시장은 연평균 20% 이상의 성장률 예상</p>
      <span class="track-growth">+20% / yr</span>
    </div>
    <div class="track-card tr6 au d2">
      <div class="track-icon">🧠</div>
      <h4>인공지능응용</h4>
      <p>의료 포함 전 산업에서 확산, 산업 혁신의 핵심 부상. 글로벌 시장은 2030년까지 연평균 30% 이상 성장 전망</p>
      <span class="track-growth">+30% / yr</span>
    </div>
    <div class="track-card tr7 au d3">
      <div class="track-icon">🏥</div>
      <h4>의생명빅데이터통계</h4>
      <p>보건·의료 분야 데이터산업 시장 2023년 약 6,407억 원 (전년 대비 6.6% 증가). 맞춤형 진단·예측 서비스 수요 확대</p>
      <span class="track-growth">6,407억 원 (2023)</span>
    </div>
    <div class="track-card tr8 au d4">
      <div class="track-icon">🎨</div>
      <h4>디자인테크</h4>
      <p>디자인과 디지털 기술이 제품·서비스 개발 전반에서 혁신 주도. XR, UI/UX, 디지털 트윈 등 신기술 활용 확대</p>
      <span class="track-growth">두 자릿수 성장 (∼2030)</span>
    </div>
  </div>
</div>

<hr class="divider"/>




## SMART-PNU SW 교육혁신모델 — AI·SW 전공 교육체계 개선

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>SMART-PNU SW 교육혁신모델 — AI·SW 전공 교육체계 개선</h2></div>
  <div class="smart-list">
    <div class="smart-item au d1">
      <div class="smart-dot sd1"></div>
      <p><strong>SMART-PNU SW 교육혁신모델 설계·운영</strong> — 신기술 교육 수요에 대응한 SW 전공의 인재상, 핵심역량, 세부역량을 통해 균형잡힌 미래 인재 양성을 위한 AI·SW 교육혁신모델을 설계 운영</p>
    </div>
    <div class="smart-item au d2">
      <div class="smart-dot sd2"></div>
      <p><strong>PNU-SW2023 교육과정 체계화</strong> — 글로벌 표준에 기초한 교과과정으로 22개의 지식 분야를 연계하여 CS2013 / CE2016 / CCDS2021 교육과정을 체계화하여 구성</p>
    </div>
    <div class="smart-item au d3">
      <div class="smart-dot sd3"></div>
      <p><strong>교과과정혁신위원회 구성·운영</strong> — 산업체 전문가가 주도하는 교과과정혁신위원회를 구성·운영하여 현장 수요를 교육과정에 반영</p>
    </div>
    <div class="smart-item au d4">
      <div class="smart-dot sd4"></div>
      <p><strong>트랙운영위원회 운영 — 교과과정 개편·산학협력 일원화</strong> — 트랙별 산업체 전문가가 참여하는 트랙운영위원회 구성·운영으로 교과과정 개편과 산학 협력을 일원화한 체계 구축</p>
    </div>
    <div class="smart-item au d1">
      <div class="smart-dot sd5"></div>
      <p><strong>코딩역량개발센터 신설 및 운영</strong> — PNU 코딩 역량 개발 지원과 PNU-ICEx 도입·운영. AI·SW산학협력체계 강화 및 AI·SW 창업지원 일원화</p>
    </div>
    <div class="smart-item au d2">
      <div class="smart-dot sd6"></div>
      <p><strong>융합 교육체계 다변화</strong> — AI·SW융합트랙(14개), AI·SW융합마이크로디그리(5개) 추가 등 융합 교육체계 다변화 추진, 학생 선택 폭 확대를 위한 융합 교과과정 개편 및 신기술 분야 수요 반영한 융합 교과목 확대</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 교육혁신 노력 — 융합교육 혁신 4방향

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>교육혁신 노력 — 융합교육 혁신 4방향</h2></div>
  <div class="fusion-grid">
    <div class="fusion-card f1 au d1">
      <div class="f-num">①</div>
      <span class="f-label">수요기반 다양화</span>
      <h3>융합교육체계 다변화</h3>
      <ul>
        <li>AI·SW융합트랙(14개), AI·SW융합마이크로디그리(5개) 추가</li>
        <li>신기술 분야 융합 교과목 확대</li>
        <li>수요·수준별 차이를 고려한 다양한 융합 교육 과정 마련</li>
        <li>학생의 선택 폭 확대를 위한 융합 교과과정 개편</li>
      </ul>
    </div>
    <div class="fusion-card f2 au d2">
      <div class="f-num">②</div>
      <span class="f-label">융합 학문 분야의 확장</span>
      <h3>융합 범위 확장</h3>
      <ul>
        <li>기존 이공계 중심에서 인문·사회 포함 전 분야로 융합 범위 확장</li>
        <li>다양한 학문 분야를 수용할 수 있는 SW 융합다전공 교육체계 마련</li>
        <li>융합 교육 인센티브 확대</li>
        <li>X+SW·AI형 융합교과목 확대</li>
      </ul>
    </div>
    <div class="fusion-card f3 au d3">
      <div class="f-num">③</div>
      <span class="f-label">융합활성화를 위한 교육 주체 다변화</span>
      <h3>능동적 양방향 융합교육</h3>
      <ul>
        <li>비AI·SW학과 주관의 융합교육과정 및 교과목 도입</li>
        <li>In-Bound형 융합 교육 (자과 소속 학생 대상)</li>
        <li>Out-Bound형 융합 교육 (타과 소속 학생 대상)</li>
        <li>비AI·SW학과 주관 융합 교과목 개설·운영 확대</li>
      </ul>
    </div>
    <div class="fusion-card f4 au d4">
      <div class="f-num">④</div>
      <span class="f-label">융합교육을 위한 조직/시스템 혁신</span>
      <h3>대학융합교육 총괄체계 구축</h3>
      <ul>
        <li>AI융합교육원 설립 — 융합 교육과정 및 교과목 개설 권한 부여</li>
        <li>융합교육위원회 / 융합교육부 등 전담 조직 구성</li>
        <li>융합교육지원 시스템 구축</li>
        <li>대학 차원의 융합교육 제도적 지원 총괄 조직 구성</li>
      </ul>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 대학의 자율적인 교육혁신 (Chapter 02)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
