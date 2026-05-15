---
id: part-6
title: "AI·SW융합교육 및 비전공자 전문교육 확대"
sidebar_position: 6
---

<style>{`
  :root {
    --navy:   #0c1e42;
    --blue:   #1550c6;
    --sky:    #28aade;
    --teal:   #18c2a8;
    --coral:  #e84530;
    --purple: #7c58e8;
    --gold:   #f0a600;
    --green:  #24a860;
    --light:  #edf3ff;
    --bg:     #f3f8ff;
    --gray:   #66779a;
    --border: #d4e1f5;
    --white:  #fff;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--navy);line-height:1.72;}

  /* ── HERO ── */
  .hero{
    background:linear-gradient(148deg,#060f28 0%,#0f2456 52%,#1646a4 100%);
    padding:66px 32px 52px;color:white;position:relative;overflow:hidden;
  }
  .hero::before{content:'';position:absolute;width:480px;height:480px;border-radius:50%;top:-170px;right:-90px;background:rgba(40,170,222,.1);pointer-events:none;}
  .hero::after{content:'';position:absolute;width:210px;height:210px;border-radius:50%;bottom:-60px;left:6%;background:rgba(232,69,48,.08);pointer-events:none;}
  .hero-inner{max-width:980px;margin:0 auto;position:relative;z-index:1;}
  .hero-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:18px;}
  .hero-num{font-family:'DM Mono',monospace;font-size:12px;color:var(--sky);}
  .hero-label{
    background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);
    padding:4px 13px;border-radius:20px;font-size:11px;font-weight:600;
    letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.8);
  }
  .hero h1{
    font-family:'Syne',sans-serif;
    font-size:clamp(26px,5vw,52px);line-height:1.08;margin-bottom:14px;letter-spacing:-.5px;
  }
  .hero h1 em{color:var(--sky);font-style:normal;}
  .hero p.sub{font-size:14px;color:rgba(255,255,255,.55);max-width:560px;}

  /* LAYOUT */
  .wrap{max-width:980px;margin:0 auto;padding:54px 24px;}
  .sec-head{display:flex;align-items:center;gap:14px;margin-bottom:30px;}
  .sec-num{
    font-family:'DM Mono',monospace;font-size:11px;
    color:var(--blue);background:var(--light);
    border:2px solid var(--blue);width:34px;height:34px;
    border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;
  }
  .sec-head h2{font-size:20px;font-weight:700;}
  .divider{border:none;border-top:1.5px solid var(--border);margin:0 24px;}

  /* ── CREDIT CARDS (이수학점 체계) ── */
  .credit-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
  .credit-card{
    background:white;border-radius:14px;padding:22px 18px;
    box-shadow:0 2px 14px rgba(12,30,66,.08);
    text-align:center;position:relative;overflow:hidden;
    transition:transform .2s,box-shadow .2s;
  }
  .credit-card:hover{transform:translateY(-4px);box-shadow:0 8px 28px rgba(12,30,66,.13);}
  .credit-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;}
  .cc1::after{background:var(--blue);}
  .cc2::after{background:var(--teal);}
  .cc3::after{background:var(--coral);}
  .cc4::after{background:var(--purple);}
  .credit-pts{
    font-family:'DM Mono',monospace;font-size:36px;font-weight:500;
    line-height:1;margin-bottom:4px;
  }
  .cc1 .credit-pts{color:var(--blue);}
  .cc2 .credit-pts{color:var(--teal);}
  .cc3 .credit-pts{color:var(--coral);}
  .cc4 .credit-pts{color:var(--purple);}
  .credit-unit{font-size:12px;color:var(--gray);margin-bottom:10px;}
  .credit-card h3{font-size:14px;font-weight:700;margin-bottom:6px;}
  .credit-card p{font-size:12px;color:var(--gray);line-height:1.6;}
  .credit-badge{
    display:inline-block;margin-top:10px;
    font-size:10px;font-weight:700;padding:3px 9px;border-radius:4px;
  }
  .cc1 .credit-badge{background:var(--light);color:var(--blue);}
  .cc2 .credit-badge{background:#e6faf6;color:var(--teal);}
  .cc3 .credit-badge{background:#ffeaea;color:var(--coral);}
  .cc4 .credit-badge{background:#f0ebff;color:var(--purple);}

  /* ── COLLEGE MAP ── */
  .college-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
  .college-card{
    background:white;border-radius:12px;padding:18px 18px;
    box-shadow:0 1px 10px rgba(12,30,66,.07);
    border-left:3px solid var(--blue);
  }
  .college-card:nth-child(2n){border-left-color:var(--teal);}
  .college-card:nth-child(3n){border-left-color:var(--coral);}
  .college-card:nth-child(4n){border-left-color:var(--purple);}
  .college-name{
    font-size:12px;font-weight:700;color:var(--blue);
    margin-bottom:8px;letter-spacing:.3px;
  }
  .college-card:nth-child(2n) .college-name{color:var(--teal);}
  .college-card:nth-child(3n) .college-name{color:var(--coral);}
  .college-card:nth-child(4n) .college-name{color:var(--purple);}
  .dept-list{list-style:none;display:flex;flex-direction:column;gap:4px;}
  .dept-list li{font-size:12px;color:var(--navy);}
  .dept-list li span{font-size:11px;color:var(--gray);display:block;}

  /* ── FUSION TYPE ── */
  .fusion-type-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
  .ft-card{
    background:white;border-radius:12px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(12,30,66,.07);
  }
  .ft-icon{font-size:22px;margin-bottom:8px;}
  .ft-card h4{font-size:13.5px;font-weight:700;margin-bottom:6px;}
  .ft-card p{font-size:12px;color:var(--gray);line-height:1.65;}

  /* ── BASIC EDU PATHWAY ── */
  .pathway{
    display:flex;flex-direction:column;gap:0;
    background:white;border-radius:16px;overflow:hidden;
    box-shadow:0 2px 16px rgba(12,30,66,.08);
  }
  .pathway-step{
    display:flex;align-items:flex-start;gap:18px;
    padding:22px 26px;border-bottom:1px solid var(--border);
  }
  .pathway-step:last-child{border-bottom:none;}
  .ps-badge{
    font-family:'DM Mono',monospace;font-size:11px;font-weight:500;
    color:white;padding:5px 12px;border-radius:20px;white-space:nowrap;flex-shrink:0;margin-top:2px;
  }
  .ps1{background:var(--navy);}
  .ps2{background:var(--blue);}
  .ps3{background:var(--sky);}
  .pathway-step h4{font-size:14px;font-weight:700;margin-bottom:6px;}
  .pathway-step p{font-size:12.5px;color:var(--gray);line-height:1.65;}

  /* ── STRATEGY CARDS ── */
  .strategy-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;}
  .strat-card{
    background:white;border-radius:13px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(12,30,66,.07);
    border-top:3px solid var(--blue);
  }
  .strat-card:nth-child(2){border-top-color:var(--teal);}
  .strat-card:nth-child(3){border-top-color:var(--coral);}
  .strat-card:nth-child(4){border-top-color:var(--gold);}
  .strat-card h4{font-size:13.5px;font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:7px;}
  .strat-card ul{list-style:none;display:flex;flex-direction:column;gap:5px;}
  .strat-card ul li{
    font-size:12px;color:#334466;
    padding-left:13px;position:relative;line-height:1.6;
  }
  .strat-card ul li::before{
    content:'▸';position:absolute;left:0;top:3px;
    font-size:9px;color:var(--sky);
  }

  /* ── NEW COURSES ── */
  .course-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;}
  .course-pill{
    background:white;border-radius:10px;padding:16px 16px;
    box-shadow:0 1px 8px rgba(12,30,66,.07);
    display:flex;gap:10px;align-items:flex-start;
  }
  .cp-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;margin-top:6px;}
  .dot-new{background:var(--teal);}
  .dot-rev{background:var(--gold);}
  .course-pill p{font-size:12.5px;color:#334466;line-height:1.55;}
  .course-pill .tag{
    font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    padding:2px 6px;border-radius:3px;display:inline-block;margin-bottom:4px;
  }
  .tag-new{background:#e6faf6;color:var(--teal);}
  .tag-rev{background:#fff5e0;color:#a06000;}

  /* ANIMATION */
  @keyframes up{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
  .au{animation:up .55s ease both;}
  .d1{animation-delay:.07s}.d2{animation-delay:.14s}.d3{animation-delay:.21s}.d4{animation-delay:.28s}

  /* FOOTER */
  footer{
    background:var(--navy);color:rgba(255,255,255,.45);
    text-align:center;padding:26px;font-size:12px;margin-top:16px;
  }
  footer strong{color:rgba(255,255,255,.78);}
`}</style>


<div class="hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">
      <span class="hero-num">05</span>
      <span class="hero-label">SW융합교육 및 비전공자 전문교육 확대</span>
    </div>
    <h1><em>AI·SW 융합교육</em> 및<br />비전공자를 위한<br />전문교육 확대</h1>
    <p class="sub">전 학문 분야 융합 교육과정 운영, 14개 SW+X 융합트랙, 그리고 전교생 AI·SW 기초교육 의무화와 고도화 전략</p>
  </div>
</div>




## AI·SW 융합교육 이수학점 체계

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>AI·SW 융합교육 이수학점 체계</h2></div>
  <div class="credit-grid">
    <div class="credit-card cc1 au d1">
      <div class="credit-pts">61<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">복수전공</div>
      <h3>AI·SW 복수전공</h3>
      <p>SW 전공 학과의 학생을 대상으로 한 융합 프로그램</p>
      <span class="credit-badge">AI·SW전공학과</span>
    </div>
    <div class="credit-card cc1 au d2" style={{borderTopColor: 'var(--sky)'}}>
      <div class="credit-pts" style={{color: 'var(--sky)'}}>21<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">부전공</div>
      <h3>AI·SW 부전공</h3>
      <p>SW 전공 학과의 학생을 대상으로 한 융합 프로그램</p>
      <span class="credit-badge" style={{background: '#e2f4fd', color: '#0076aa'}}>AI·SW전공학과</span>
    </div>
    <div class="credit-card cc2 au d3">
      <div class="credit-pts">48<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">연계전공</div>
      <h3>AI·SW 연계전공</h3>
      <p>두 개 이상의 학과가 협력하여 구성, 모든 학과 학생 대상 융합 프로그램</p>
      <span class="credit-badge">전학과 대상</span>
    </div>
    <div class="credit-card cc3 au d4">
      <div class="credit-pts">42<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">융합전공 (2026년 신설)</div>
      <h3>AI·SW 융합전공</h3>
      <p>참여학과 전공교과목 + SW융합 공통교과목으로 구성. 연계/융합전공 대비 이수학점 상대적으로 낮은 융합 과정</p>
      <span class="credit-badge">산업AI·로봇AI 예정</span>
    </div>
    <div class="credit-card cc4 au d1">
      <div class="credit-pts">21<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">AI·SW 융합트랙</div>
      <h3>SW+X 융합트랙</h3>
      <p>참여학과가 자과 학생을 대상으로 한 융합 프로그램. 학과 주도적인 SW+X 트랙 <strong>14개 신설(2024)</strong></p>
      <span class="credit-badge">14개 트랙</span>
    </div>
    <div class="credit-card au d2" style={{borderTop: '4px solid var(--green)'}}>
      <div class="credit-pts" style={{color: 'var(--green)'}}>15<small style={{fontSize: '18px'}}>학점</small></div>
      <div class="credit-unit">AI·SW 융합 마이크로디그리</div>
      <h3>융합 마이크로디그리</h3>
      <p>타과 학생을 위한 융합 프로그램. 2026년 4~5개 과정 신설 예정</p>
      <span class="credit-badge" style={{background: '#e6f8ee', color: 'var(--green)'}}>2026년 신설 예정</span>
    </div>
  </div>
</div>

<hr class="divider"/>




## 14개 SW+X 융합트랙 — 단과대학별 참여 학과 및 트랙명

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>14개 SW+X 융합트랙 — 단과대학별 참여 학과 및 트랙명</h2></div>
  <div class="college-grid">
    <div class="college-card au d1">
      <div class="college-name">🎨 예술대학</div>
      <ul class="dept-list">
        <li>디자인학과 <span>디자인컴퓨팅</span></li>
        <li>조형학과 <span>도시·환경·생태 데이터분석</span></li>
      </ul>
    </div>
    <div class="college-card au d2">
      <div class="college-name">🏭 공과대학</div>
      <ul class="dept-list">
        <li>산업공학과 <span>산업AI</span></li>
      </ul>
    </div>
    <div class="college-card au d3">
      <div class="college-name">🌿 생명자원과학대학</div>
      <ul class="dept-list">
        <li>조형학과 <span>도시·환경·생태 데이터분석</span></li>
      </ul>
    </div>
    <div class="college-card au d4">
      <div class="college-name">🧬 의생명융합공학부</div>
      <ul class="dept-list">
        <li>의생명공학전공 <span>바이오메디컬디바이스&데이터</span></li>
      </ul>
    </div>
    <div class="college-card au d1">
      <div class="college-name">🏛️ 경제통상대학</div>
      <ul class="dept-list">
        <li>공공정책학부 <span>공공데이터분석</span></li>
      </ul>
    </div>
    <div class="college-card au d2">
      <div class="college-name">👗 생활과학대학</div>
      <ul class="dept-list">
        <li>의류학과 <span>디지털패션</span></li>
        <li>스포츠과학부 <span>AI 스포츠과학</span></li>
      </ul>
    </div>
    <div class="college-card au d3">
      <div class="college-name">🌐 사회과학대학</div>
      <ul class="dept-list">
        <li>미디어커뮤니케이션학과 <span>미디어데이터사이언스</span></li>
        <li>정치외교학과 <span>정치데이터사이언스</span></li>
        <li>사회학과 <span>소셜데이터사이언스</span></li>
        <li>사회복지학과 <span>데이터사이언스와복지</span></li>
        <li>심리학과 <span>심리데이터사이언스</span></li>
        <li>행정학과 <span>행정관리과학(DMS)</span></li>
        <li>문헌정보학과 <span>문헌정보데이터분석</span></li>
      </ul>
    </div>
  </div>
</div>

<hr class="divider"/>




## AI·SW 융합교육 유형

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>AI·SW 융합교육 유형</h2></div>
  <div class="fusion-type-grid">
    <div class="ft-card au d1">
      <div class="ft-icon">🎯</div>
      <h4>AI·SW전공 중심 융합</h4>
      <p>AI·SW전공학과 교과목 개편 및 AI,DS,DX 분야·수준별 교육. 복수전공(61학점) · 부전공(21학점) 운영</p>
    </div>
    <div class="ft-card au d2">
      <div class="ft-icon">🔗</div>
      <h4>연계·융합전공</h4>
      <p>두 개 이상의 학과가 협력하여 구성. 모든 학과 학생을 대상. 연계전공(48학점) · 융합전공(42학점, 2026년 신설)</p>
    </div>
    <div class="ft-card au d3">
      <div class="ft-icon">📐</div>
      <h4>In-Bound 융합 (SW+X 트랙)</h4>
      <p>참여학과가 자과 학생을 대상으로 운영. 학과 주도적 SW+X 융합트랙 14개 신설(2024). 21학점</p>
    </div>
    <div class="ft-card au d4">
      <div class="ft-icon">🚀</div>
      <h4>Out-Bound 융합 (마이크로디그리)</h4>
      <p>타과 학생을 위한 융합 프로그램. 2026년 4~5개 과정 신설 예정. 15학점</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 전교생 AI·SW 기초교육 이수 경로

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>전교생 AI·SW 기초교육 이수 경로</h2></div>
  <div class="pathway au">
    <div class="pathway-step">
      <span class="ps-badge ps1">입학 전</span>
      <div>
        <h4>입학 전 AI·SW 교육</h4>
        <p>비교과과정의 AI·SW 실습 중심 팀 프로젝트 운영. 온/오프라인 수업 병행, 학생 전공계열에 맞추어 교과내용 구분하여 운영</p>
      </div>
    </div>
    <div class="pathway-step">
      <span class="ps-badge ps2">1학년</span>
      <div>
        <h4>전교생 AI·SW기초교육 의무화</h4>
        <p><strong>「인공지능과 디지털사고」(3학점)</strong> 전교생 필수 이수. 교과 내용에 신기술 분야 반영하여 지속 개선. 「기초컴퓨터프로그래밍」 하위 주제 '메타버스' 신설</p>
      </div>
    </div>
    <div class="pathway-step">
      <span class="ps-badge ps3">2~4학년</span>
      <div>
        <h4>자율선택적 심화 교과목</h4>
        <p>「메타버스설계와구현」 등 8개 교과목 중 선택 이수. 각종 특강, AI·SW 문제해결 경진대회, SW 해커톤 등 비교과 참여. 신산업 분야 및 현장 수요 맞춤형 융합 교과목 선택 이수</p>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## 전교생 AI·SW 기초교육 고도화 세부 추진 전략

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>전교생 AI·SW 기초교육 고도화 세부 추진 전략</h2></div>
  <div class="strategy-grid">
    <div class="strat-card au d1">
      <h4>📚 교양선택 교과목 개정</h4>
      <ul>
        <li>현과 교과목 중 2개 개정<br />「디지털리터러시의이해와활용」<br />「미디어크리에이터의이해와활용」</li>
        <li>최신 트렌드 및 신기술 분야 반영</li>
      </ul>
    </div>
    <div class="strat-card au d2">
      <h4>✨ 신규 SW 교과목 개설</h4>
      <ul>
        <li>「기초인공지능프로그래밍」 신설</li>
        <li>「인터랙티브AI프로그래밍」 신설</li>
        <li>「메타버스의이해와구현」 신설</li>
      </ul>
    </div>
    <div class="strat-card au d3">
      <h4>🎯 비교과 프로그램 활성화</h4>
      <ul>
        <li>AI·SW 문제해결 경진대회</li>
        <li>SW기초교과목 수업 에세이 공모전</li>
        <li>코딩존 설치, 상시 멘토링 운영</li>
        <li>성과확산 전시회</li>
        <li>비전공자 대상 코딩 대회</li>
        <li>미니 부트캠프 주기적 운영</li>
      </ul>
    </div>
    <div class="strat-card au d4">
      <h4>⚙️ SW기초교육 질관리 체계</h4>
      <ul>
        <li>기초교육위원회 신설 (단과대학별 대표교수 구성)</li>
        <li>학기별 수요자(교수·학생) 대상 설문조사</li>
        <li>SW기초 담당교수 정기 워크숍</li>
        <li>온라인 콘텐츠 지속 개발</li>
        <li>SW기초교육 실습실 환경 지속 개선</li>
      </ul>
    </div>
  </div>
</div>

<hr class="divider"/>




## AI·SW 교양 교과목 신설 및 개정 목록

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">06</div><h2>AI·SW 교양 교과목 신설 및 개정 목록</h2></div>
  <div class="course-grid">
    <div class="course-pill au d1">
      <div class="cp-dot dot-rev"></div>
      <div><span class="tag tag-rev">개정</span><p>디지털리터러시의 이해와 활용</p></div>
    </div>
    <div class="course-pill au d2">
      <div class="cp-dot dot-rev"></div>
      <div><span class="tag tag-rev">개정</span><p>미디어크리에이터의 이해와 활용</p></div>
    </div>
    <div class="course-pill au d3">
      <div class="cp-dot dot-new"></div>
      <div><span class="tag tag-new">신설</span><p>기초인공지능프로그래밍</p></div>
    </div>
    <div class="course-pill au d4">
      <div class="cp-dot dot-new"></div>
      <div><span class="tag tag-new">신설</span><p>인터랙티브AI프로그래밍</p></div>
    </div>
    <div class="course-pill au d1">
      <div class="cp-dot dot-new"></div>
      <div><span class="tag tag-new">신설</span><p>메타버스의 이해와 구현</p></div>
    </div>
    <div class="course-pill au d2">
      <div class="cp-dot dot-rev"></div>
      <div><span class="tag tag-rev">개정</span><p>기초컴퓨터프로그래밍<br /><small style={{color: 'var(--gray)'}}>하위주제 '메타버스' 신설</small></p></div>
    </div>
    <div class="course-pill au d3">
      <div class="cp-dot dot-new"></div>
      <div><span class="tag tag-new">신설</span><p>메타버스 설계와 구현</p></div>
    </div>
    <div class="course-pill au d4">
      <div class="cp-dot dot-rev"></div>
      <div><span class="tag tag-rev">의무</span><p>인공지능과 디지털사고 (3학점)<br /><small style={{color: 'var(--gray)'}}>전교생 1학년 필수</small></p></div>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — AI·SW융합교육 및 비전공자를 위한 전문교육 확대 (Chapter 05)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
