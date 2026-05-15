---
id: part-4
title: "교육환경 개선 및 성과 모니터링"
sidebar_position: 4
---

<style>{`
  :root {
    --navy:   #0d1e42;
    --blue:   #1652c8;
    --sky:    #2eaadf;
    --teal:   #1bbfa6;
    --coral:  #e84b30;
    --purple: #7c5ce8;
    --gold:   #f0a800;
    --light:  #edf3ff;
    --bg:     #f4f8ff;
    --gray:   #667799;
    --border: #d5e2f5;
    --white:  #fff;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--navy);line-height:1.72;}

  /* HERO */
  .hero{
    background:linear-gradient(140deg,#071630 0%,#103068 55%,#1a4eaa 100%);
    padding:66px 32px 50px; color:white; position:relative; overflow:hidden;
  }
  .hero::before,.hero::after{
    content:''; position:absolute; border-radius:50%; pointer-events:none;
  }
  .hero::before{width:480px;height:480px;top:-170px;right:-90px;background:rgba(46,170,223,.1);}
  .hero::after{width:220px;height:220px;bottom:-70px;left:6%;background:rgba(232,75,48,.08);}
  .hero-inner{max-width:980px;margin:0 auto;position:relative;z-index:1;}
  .hero-chip{
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);
    padding:5px 14px;border-radius:20px;
    font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
    margin-bottom:20px;color:rgba(255,255,255,.8);
  }
  .hero-chip span{font-family:'DM Mono',monospace;color:var(--sky);}
  .hero h1{
    font-family:'Space Grotesk',sans-serif;
    font-size:clamp(26px,4.8vw,50px);line-height:1.1;margin-bottom:14px;letter-spacing:-.5px;
  }
  .hero h1 em{color:var(--sky);font-style:normal;}
  .hero p.sub{font-size:14px;color:rgba(255,255,255,.56);max-width:540px;}

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

  /* INFRA GRID */
  .infra-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;}
  .infra-card{
    background:white;border-radius:14px;padding:22px 20px;
    box-shadow:0 2px 14px rgba(13,30,66,.07);
    border-left:4px solid var(--blue);
    transition:transform .2s,box-shadow .2s;
  }
  .infra-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(13,30,66,.12);}
  .infra-card.ic2{border-left-color:var(--teal);}
  .infra-card.ic3{border-left-color:var(--purple);}
  .infra-card.ic4{border-left-color:var(--coral);}
  .infra-card.ic5{border-left-color:var(--gold);}
  .infra-card.ic6{border-left-color:var(--sky);}
  .infra-title{
    display:flex;align-items:center;gap:10px;margin-bottom:10px;
  }
  .infra-icon{font-size:20px;}
  .infra-card h3{font-size:14px;font-weight:700;}
  .infra-card p{font-size:12.5px;color:var(--gray);line-height:1.65;}

  /* PNU-ICEx DIAGRAM */
  .icex-box{
    background:white;border-radius:16px;overflow:hidden;
    box-shadow:0 2px 16px rgba(13,30,66,.08);
  }
  .icex-head{
    background:var(--navy);color:white;
    padding:18px 26px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;
  }
  .icex-brand{
    font-family:'DM Mono',monospace;font-size:22px;font-weight:500;color:var(--sky);
  }
  .icex-desc{font-size:13px;color:rgba(255,255,255,.65);}
  .icex-body{
    display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    gap:0;
  }
  .icex-module{
    padding:20px 22px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);
  }
  .icex-module:last-child{border-right:none;}
  .mod-tag{
    display:inline-block;font-family:'DM Mono',monospace;
    font-size:11px;font-weight:500;padding:3px 9px;border-radius:4px;
    margin-bottom:8px;
  }
  .m-ccm .mod-tag{background:#e8f0ff;color:var(--blue);}
  .m-kms .mod-tag{background:#e6f9f5;color:var(--teal);}
  .m-oj  .mod-tag{background:#f0ebff;color:var(--purple);}
  .m-api .mod-tag{background:#fff3e6;color:#c06000;}
  .icex-module h4{font-size:13px;font-weight:700;margin-bottom:6px;}
  .icex-module ul{list-style:none;display:flex;flex-direction:column;gap:3px;}
  .icex-module ul li{font-size:11.5px;color:var(--gray);}

  /* ROLE GRID */
  .role-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;}
  .role-card{
    background:white;border-radius:12px;padding:18px 16px;text-align:center;
    box-shadow:0 1px 10px rgba(13,30,66,.06);
  }
  .role-avatar{
    width:46px;height:46px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    font-size:20px;margin:0 auto 10px;
  }
  .ra-student{background:#e8f0ff;}
  .ra-ta{background:#e6f9f5;}
  .ra-prof{background:#f0ebff;}
  .ra-mentor{background:#fff3e6;}
  .ra-industry{background:#ffeaea;}
  .role-card h4{font-size:13px;font-weight:700;margin-bottom:6px;}
  .role-card ul{list-style:none;display:flex;flex-direction:column;gap:3px;}
  .role-card ul li{font-size:11.5px;color:var(--gray);}

  /* PARTNER LOGOS */
  .partner-box{
    background:white;border-radius:14px;padding:22px 24px;
    box-shadow:0 2px 12px rgba(13,30,66,.07);
  }
  .partner-box h4{font-size:13px;font-weight:700;margin-bottom:14px;color:var(--gray);}
  .partner-list{
    display:flex;flex-wrap:wrap;gap:10px;
  }
  .partner-chip{
    background:var(--light);border:1px solid var(--border);
    border-radius:8px;padding:6px 14px;
    font-size:12px;font-weight:600;color:var(--navy);
  }

  /* TRACK ENV */
  .track-env-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;}
  .track-env-item{
    background:white;border-radius:12px;padding:18px 20px;
    box-shadow:0 1px 10px rgba(13,30,66,.06);
    display:flex;gap:14px;align-items:flex-start;
  }
  .te-dot{
    width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:6px;
  }
  .te1{background:var(--blue);}
  .te2{background:var(--teal);}
  .te3{background:var(--coral);}
  .te4{background:var(--purple);}
  .te5{background:var(--gold);}
  .track-env-item p{font-size:13px;color:#334466;line-height:1.65;}
  .track-env-item strong{color:var(--navy);}

  /* PDCA CYCLE */
  .pdca-wrapper{
    background:white;border-radius:16px;
    box-shadow:0 2px 16px rgba(13,30,66,.08);
    overflow:hidden;
  }
  .pdca-head{
    background:var(--navy);color:white;
    padding:16px 26px;font-size:15px;font-weight:700;
  }
  .pdca-grid{
    display:grid;grid-template-columns:repeat(2,1fr);
    gap:0;
  }
  @media(max-width:560px){.pdca-grid{grid-template-columns:1fr;}}
  .pdca-cell{
    padding:22px 24px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);
  }
  .pdca-cell:nth-child(2n){border-right:none;}
  .pdca-cell:nth-child(3),.pdca-cell:nth-child(4){border-bottom:none;}
  .pdca-label{
    font-family:'DM Mono',monospace;font-size:22px;font-weight:500;
    margin-bottom:6px;
  }
  .p-plan .pdca-label{color:var(--blue);}
  .p-do  .pdca-label{color:var(--teal);}
  .p-check .pdca-label{color:var(--gold);}
  .p-act .pdca-label{color:var(--coral);}
  .pdca-cell h4{font-size:14px;font-weight:700;margin-bottom:8px;}
  .pdca-cell ul{list-style:none;display:flex;flex-direction:column;gap:5px;}
  .pdca-cell ul li{
    font-size:12.5px;color:var(--gray);
    padding-left:13px;position:relative;
  }
  .pdca-cell ul li::before{
    content:'▸';position:absolute;left:0;top:3px;
    font-size:9px;color:var(--sky);
  }

  /* MILESTONE */
  .milestone-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
  .ms-card{
    background:white;border-radius:12px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(13,30,66,.06);
    border-top:3px solid var(--blue);
  }
  .ms-card:nth-child(2){border-top-color:var(--teal);}
  .ms-card:nth-child(3){border-top-color:var(--purple);}
  .ms-card h4{font-size:13.5px;font-weight:700;margin-bottom:8px;}
  .ms-card p{font-size:12.5px;color:var(--gray);line-height:1.65;}

  /* GRADE TIMELINE */
  .grade-timeline{display:flex;gap:0;overflow-x:auto;}
  .grade-col{
    flex:1;min-width:140px;
    border-right:1px solid var(--border);
  }
  .grade-col:last-child{border-right:none;}
  .grade-head{
    background:var(--navy);color:white;
    padding:10px 14px;font-size:13px;font-weight:700;text-align:center;
  }
  .grade-col:nth-child(2) .grade-head{background:#1a3a7a;}
  .grade-col:nth-child(3) .grade-head{background:#1a4eaa;}
  .grade-col:nth-child(4) .grade-head{background:#1652c8;}
  .grade-col:nth-child(5) .grade-head{background:var(--sky);}
  .grade-body{padding:14px 14px;background:white;}
  .grade-body h5{font-size:11px;font-weight:700;color:var(--blue);margin-bottom:6px;letter-spacing:.5px;}
  .grade-body ul{list-style:none;display:flex;flex-direction:column;gap:4px;}
  .grade-body ul li{font-size:11px;color:#445;line-height:1.5;}
  .grade-note{
    font-size:10.5px;color:var(--gray);
    padding:8px 14px;
    background:var(--light);
    border-top:1px solid var(--border);
  }

  /* ANIM */
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
    <div class="hero-chip"><span>03</span> 교육환경 개선 및 성과 모니터링</div>
    <h1>현장 중심의<br /><em>창의적 교육환경 구축</em></h1>
    <p class="sub">AI·SW 전공 특화 인프라 구축, PNU-ICEx 통합 코딩 교육 시스템, 그리고 전주기적 성과 모니터링 체계</p>
  </div>
</div>




## 교육 인프라 6대 구성요소

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>교육 인프라 6대 구성요소</h2></div>
  <div class="infra-grid">
    <div class="infra-card au d1">
      <div class="infra-title"><span class="infra-icon">🏢</span><h3>IT관 · 경암공학관 신축</h3></div>
      <p>AI·SW 전공 학과를 위한 2개 건물 신축 및 실습실 등 교육 시설 구축 (IT관 25.10월 준공, 경암공학관 23.10월 준공 / 총 21,302㎡)</p>
    </div>
    <div class="infra-card ic2 au d2">
      <div class="infra-title"><span class="infra-icon">🎯</span><h3>전공 트랙 특화 교육환경 · 기자재</h3></div>
      <p>8개 AI·SW 전공 트랙을 위한 특화 교육 환경 및 기자재 구축 — BaaS 블록체인 융합보안, 상용·사설 클라우드, 지능형 IoT, 메타버스 개방형 실습실 등</p>
    </div>
    <div class="infra-card ic3 au d3">
      <div class="infra-title"><span class="infra-icon">☁️</span><h3>PNU DevCloud</h3></div>
      <p>산업 현장 중심의 클라우드 통합 교육 환경 구축 — 상용 및 사설 클라우드 실습 환경 제공</p>
    </div>
    <div class="infra-card ic4 au d4">
      <div class="infra-title"><span class="infra-icon">🧠</span><h3>PNU AI Platform</h3></div>
      <p>대규모 데이터 및 AI 모델을 위한 고성능 AI 교육·연구 플랫폼 구축 — 의료 빅데이터 활용 생성AI·데이터과학 실습 환경 포함</p>
    </div>
    <div class="infra-card ic5 au d1">
      <div class="infra-title"><span class="infra-icon">🎨</span><h3>SW PlayGround · Makerspace</h3></div>
      <p>학생 주도의 창의 AI·SW 융합 활동을 위한 학습 및 휴게 공간 구축</p>
    </div>
    <div class="infra-card ic6 au d2">
      <div class="infra-title"><span class="infra-icon">💻</span><h3>PNU-ICEx</h3></div>
      <p>SW역량 강화를 위한 온라인 AI·SW 교육·실습 환경 및 지원 인프라 구축 — 웹 기반 통합 SW 교육 시스템으로 코딩 교육역량 강화 및 관리</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## PNU-ICEx — 통합 코딩 교육 시스템

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>PNU-ICEx — 통합 코딩 교육 시스템</h2></div>
  <div class="icex-box au">
    <div class="icex-head">
      <div>
        <div class="icex-brand">PNU ICEx</div>
        <div class="icex-desc">Integrated Coding Education for Emerging X</div>
      </div>
    </div>
    <div class="icex-body">
      <div class="icex-module m-ccm">
        <span class="mod-tag">CCM</span>
        <h4>Coding Capability Management</h4>
        <h4 style={{color: 'var(--blue)', marginBottom: '6px'}}>지능형융합보안(S)</h4>
        <ul>
          <li>AI 보안, 블록체인</li>
          <li>프라이버시, 시스템 보안</li>
          <li>응용 소프트웨어 보안</li>
          <li>코딩 스타일 분석</li>
          <li>코딩 품질 분석</li>
        </ul>
      </div>
      <div class="icex-module m-kms">
        <span class="mod-tag">KMS</span>
        <h4>Knowledge Management System</h4>
        <h4 style={{color: 'var(--teal)', marginBottom: '6px'}}>빅데이터(D)</h4>
        <ul>
          <li>데이터베이스, 헬스케어</li>
          <li>과정진도/성취도 관리</li>
          <li>맞춤형 프로그램 추천</li>
        </ul>
      </div>
      <div class="icex-module m-oj">
        <span class="mod-tag">OJ / Code Place</span>
        <h4 style={{color: 'var(--purple)', marginBottom: '6px'}}>시스템/클라우드(C)</h4>
        <ul>
          <li>클라우드 컴퓨팅</li>
          <li>지능형 네트워크 통신 IoT</li>
          <li>문제은행 자동 채점</li>
          <li>표절 방지, 디버깅</li>
        </ul>
      </div>
      <div class="icex-module m-api">
        <span class="mod-tag">Restful API</span>
        <h4 style={{color: '#c06000', marginBottom: '6px'}}>인공지능(A)</h4>
        <ul>
          <li>AR·VR, Bio-informatics</li>
          <li>헬스케어</li>
          <li>외부 코딩 도구 연동</li>
          <li>교내 교육 도구 연동</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## PNU-ICEx 참여 주체별 역할

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>PNU-ICEx 참여 주체별 역할</h2></div>
  <div class="role-grid">
    <div class="role-card au d1">
      <div class="role-avatar ra-student">🧑‍💻</div>
      <h4>학생</h4>
      <ul><li>수업 참여</li><li>프로젝트 참여</li><li>최신 프로그래밍 교육 참여</li></ul>
    </div>
    <div class="role-card au d2">
      <div class="role-avatar ra-ta">🧑‍🎓</div>
      <h4>조교</h4>
      <ul><li>수업관리</li><li>행정/실습보고</li><li>Q&A 지원</li></ul>
    </div>
    <div class="role-card au d3">
      <div class="role-avatar ra-prof">👨‍🏫</div>
      <h4>교수</h4>
      <ul><li>수업관리</li><li>행정/실습보고</li><li>Q&A 운영</li></ul>
    </div>
    <div class="role-card au d4">
      <div class="role-avatar ra-mentor">🧑‍💼</div>
      <h4>코딩멘토</h4>
      <ul><li>멘토링</li><li>문제 관리</li><li>최신 기술 교육</li></ul>
    </div>
    <div class="role-card au d1">
      <div class="role-avatar ra-industry">🏭</div>
      <h4>산업체</h4>
      <ul><li>Apple, Google, kakao</li><li>NAVER, Microsoft</li><li>LG전자, POSCO, UXIS 등</li></ul>
    </div>
  </div>

  <div style={{marginTop: '24px'}}>
    <div class="partner-box au">
      <h4>연계 산업체 파트너</h4>
      <div class="partner-list">
        <span class="partner-chip">Apple</span>
        <span class="partner-chip">AhnLab</span>
        <span class="partner-chip">EST</span>
        <span class="partner-chip">Google</span>
        <span class="partner-chip">HANCOM</span>
        <span class="partner-chip">kakao</span>
        <span class="partner-chip">LG전자</span>
        <span class="partner-chip">Microsoft</span>
        <span class="partner-chip">NAVER</span>
        <span class="partner-chip">POSCO</span>
        <span class="partner-chip">TOTALSOFT</span>
        <span class="partner-chip">UPCHAIN</span>
        <span class="partner-chip">UXIS</span>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## 전공 트랙 특화 교육환경 · 기자재 구축

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>전공 트랙 특화 교육환경 · 기자재 구축</h2></div>
  <div class="track-env-grid">
    <div class="track-env-item au d1">
      <div class="te-dot te1"></div>
      <p><strong>블록체인 융합보안 실습환경</strong> — BaaS(Blockchain-as-a-Service)를 이용한 블록체인 융합보안 실습 환경 구축</p>
    </div>
    <div class="track-env-item au d2">
      <div class="te-dot te2"></div>
      <p><strong>클라우드 실습환경</strong> — 산업 현장 중심의 상용 및 사설 클라우드 실습 환경 구축</p>
    </div>
    <div class="track-env-item au d3">
      <div class="te-dot te3"></div>
      <p><strong>지능형 IoT 실습환경</strong> — 지능형 IoT 실습을 위한 SW/HW 교육 환경 구축</p>
    </div>
    <div class="track-env-item au d4">
      <div class="te-dot te4"></div>
      <p><strong>메타버스 실습실</strong> — 메타버스 개방형 실습실 구축</p>
    </div>
    <div class="track-env-item au d1">
      <div class="te-dot te5"></div>
      <p><strong>생성AI · 데이터과학 실습환경</strong> — 의료 빅데이터를 활용한 생성AI와 데이터 과학 실습 환경 구축</p>
    </div>
    <div class="track-env-item au d2">
      <div class="te-dot te1"></div>
      <p><strong>온라인 SW교육 시스템</strong> — 웹 기반 통합 SW교육 시스템 PNU-ICEx 구축하여 코딩 교육역량 강화 및 관리</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 성과관리위원회의 성과 개선 환류 체계 (PDCA)

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>성과관리위원회의 성과 개선 환류 체계 (PDCA)</h2></div>
  <div class="pdca-wrapper au">
    <div class="pdca-head">SW전공 교육역량 성과 평가 — PLAN → DO → CHECK → ACT/ADJUST 순환 체계</div>
    <div class="pdca-grid">
      <div class="pdca-cell p-plan">
        <div class="pdca-label">PLAN</div>
        <h4>교육역량 목표 수립</h4>
        <ul>
          <li>학년별 코딩 역량 수준 및 교육 계획 수립</li>
          <li>ACM-ICPC, TOPCIT, 해커톤 등 참가 계획 및 달성 목표 수립</li>
        </ul>
      </div>
      <div class="pdca-cell p-do">
        <div class="pdca-label">DO</div>
        <h4>교과/비교과 과정 운영</h4>
        <ul>
          <li>오픈소스를 활용하는 실습 중심의 AI·SW 교육</li>
          <li>지역 산업체와 밀착된 산학협력 프로젝트</li>
          <li>프로그래밍 역량평가 교내외 프로그램 개최·참가 유도</li>
        </ul>
      </div>
      <div class="pdca-cell p-check">
        <div class="pdca-label">CHECK</div>
        <h4>성과 평가</h4>
        <ul>
          <li>학년별 대표 AI·SW 교과목을 통한 코딩역량 평가</li>
          <li>PNU코딩인증, 교내외 프로그래밍 경시대회, TOPCIT 등 성과평가</li>
          <li>대표 SW 과목과 비교과 프로그램을 통한 전주기적 학업 성취도 모니터링</li>
        </ul>
      </div>
      <div class="pdca-cell p-act">
        <div class="pdca-label">ACT / ADJUST</div>
        <h4>분석 조정 및 재설정</h4>
        <ul>
          <li>성과 부족 원인 분석</li>
          <li>교육역량 성과 목표 재설정</li>
          <li>교과/비교과 과정 운영계획 조정</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## PNU 마일스톤 프로그램 및 위원회 주도 성과 관리

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">06</div><h2>PNU 마일스톤 프로그램 및 위원회 주도 성과 관리</h2></div>
  <div class="milestone-grid">
    <div class="ms-card au d1">
      <h4>🏆 PNU 마일스톤 프로그램</h4>
      <p>인턴십, 취·창업 활동, 경진대회 참가 등 비교과 과정을 평가하기 위해 마일스톤의 각 평가점수를 수준별로 세분화하여 단위 점수화. 문제해결 및 AI역량을 강화하여 AI·SW전공 학생들의 역량을 다각적으로 평가</p>
    </div>
    <div class="ms-card au d2">
      <h4>🔗 AI·SW융합교육위원회</h4>
      <p>다양한 학문 분야에서 필요로 하는 AI·SW 융합 인재 양성을 위한 융합 교육과정 관리와 개선 주도. PNU 마일스톤 프로그램을 통한 성과 관리</p>
    </div>
    <div class="ms-card au d3">
      <h4>📚 AI·SW기초교육위원회</h4>
      <p>전공계열별 맞춤형 SW 교육을 위한 의견 수렴 및 AI·SW 기초교육 개선사항 도출, 교육성과 공유 및 확산 주도</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 학년별 교육역량 평가 체계 — 전주기적 성취도 모니터링

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">07</div><h2>학년별 교육역량 평가 체계 — 전주기적 성취도 모니터링</h2></div>
  <div class="grade-timeline au" style={{borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(13,30,66,.08)'}}>
    <div class="grade-col">
      <div class="grade-head">1학년</div>
      <div class="grade-body">
        <h5>교과역량 평가</h5>
        <ul>
          <li>📖 프로그래밍원리와실습</li>
          <li>→ 코딩기초역량</li>
          <li>미통과자 재수강</li>
        </ul>
        <h5 style={{marginTop: '10px'}}>비교과</h5>
        <ul><li>PNU 코딩인증</li></ul>
      </div>
      <div class="grade-note">코딩 기초 역량 확인</div>
    </div>
    <div class="grade-col">
      <div class="grade-head">2학년</div>
      <div class="grade-body">
        <h5>교과역량 평가</h5>
        <ul>
          <li>📖 자료구조</li>
          <li>→ 코딩심화역량</li>
          <li>부진자 멘토링</li>
        </ul>
        <h5 style={{marginTop: '10px'}}>비교과</h5>
        <ul><li>ACM-ICPC 참가</li></ul>
      </div>
      <div class="grade-note">코딩 심화 역량 강화</div>
    </div>
    <div class="grade-col">
      <div class="grade-head">3학년</div>
      <div class="grade-body">
        <h5>교과역량 평가</h5>
        <ul>
          <li>📖 컴퓨터알고리즘</li>
          <li>→ 문제해결역량</li>
          <li>교육과정 개선</li>
        </ul>
        <h5 style={{marginTop: '10px'}}>비교과</h5>
        <ul><li>TOPCIT, 해커톤</li></ul>
      </div>
      <div class="grade-note">문제해결 역량 고도화</div>
    </div>
    <div class="grade-col">
      <div class="grade-head">4학년</div>
      <div class="grade-body">
        <h5>교과역량 평가</h5>
        <ul>
          <li>📖 캡스톤디자인</li>
          <li>→ 프로젝트설계역량</li>
          <li>교육과정 개선</li>
        </ul>
        <h5 style={{marginTop: '10px'}}>비교과</h5>
        <ul><li>프로젝트수행능력</li></ul>
      </div>
      <div class="grade-note">프로젝트·설계 역량</div>
    </div>
    <div class="grade-col">
      <div class="grade-head" style={{background: 'var(--sky)'}}>졸업</div>
      <div class="grade-body">
        <h5>졸업예정자 설문</h5>
        <ul>
          <li>교육과정 만족도</li>
          <li>전공지식 평가</li>
          <li>교육과정 개선 반영</li>
        </ul>
      </div>
      <div class="grade-note">교육과정 환류</div>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 교육환경 개선 및 성과 모니터링 (Chapter 03)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
