---
id: part-7
title: "성과확산 및 인재기반 조성"
sidebar_position: 7
---

<style>{`
  :root {
    --navy:   #0b1d40;
    --blue:   #1450c4;
    --sky:    #28acde;
    --teal:   #18c4a6;
    --coral:  #e84830;
    --purple: #7c58e6;
    --gold:   #f0a600;
    --green:  #22a860;
    --pink:   #e040f8;
    --light:  #edf3ff;
    --bg:     #f3f7ff;
    --gray:   #667899;
    --border: #d4e1f4;
    --white:  #fff;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--navy);line-height:1.72;}

  /* HERO */
  .hero{
    background:linear-gradient(148deg,#050e26 0%,#0e2254 52%,#1546a2 100%);
    padding:66px 32px 52px;color:white;position:relative;overflow:hidden;
  }
  .hero::before{content:'';position:absolute;width:480px;height:480px;border-radius:50%;top:-170px;right:-90px;background:rgba(40,172,222,.1);pointer-events:none;}
  .hero::after{content:'';position:absolute;width:200px;height:200px;border-radius:50%;bottom:-60px;left:7%;background:rgba(232,72,48,.08);pointer-events:none;}
  .hero-inner{max-width:980px;margin:0 auto;position:relative;z-index:1;}
  .hero-chip{
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);
    padding:5px 14px;border-radius:20px;font-size:11px;font-weight:600;
    letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px;color:rgba(255,255,255,.8);
  }
  .hero-chip span{font-family:'DM Mono',monospace;color:var(--sky);}
  .hero h1{
    font-family:'Plus Jakarta Sans',sans-serif;
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

  /* AI·SW저변확대 — 연계 그룹 */
  .expand-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;}
  .expand-card{
    background:white;border-radius:14px;padding:22px 20px;
    box-shadow:0 2px 14px rgba(11,29,64,.08);
    border-top:4px solid var(--blue);
    transition:transform .2s,box-shadow .2s;
  }
  .expand-card:hover{transform:translateY(-4px);box-shadow:0 8px 28px rgba(11,29,64,.13);}
  .ec2{border-top-color:var(--teal);}
  .ec3{border-top-color:var(--coral);}
  .ec4{border-top-color:var(--purple);}
  .ec5{border-top-color:var(--gold);}
  .expand-card h3{font-size:14px;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
  .expand-card ul{list-style:none;display:flex;flex-direction:column;gap:5px;}
  .expand-card ul li{
    font-size:12px;color:#334466;
    padding-left:13px;position:relative;line-height:1.6;
  }
  .expand-card ul li::before{
    content:'▸';position:absolute;left:0;top:3px;font-size:9px;color:var(--sky);
  }

  /* 주요 성과 하이라이트 */
  .highlight-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
  .hl-card{
    background:white;border-radius:12px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(11,29,64,.07);
    display:flex;gap:12px;align-items:flex-start;
  }
  .hl-icon{font-size:22px;flex-shrink:0;margin-top:2px;}
  .hl-card p{font-size:13px;color:#334466;line-height:1.65;}

  /* 창업 STEP 타임라인 */
  .step-timeline{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:0;
    background:white;border-radius:16px;overflow:hidden;
    box-shadow:0 2px 16px rgba(11,29,64,.08);
  }
  @media(max-width:700px){.step-timeline{grid-template-columns:1fr;}}
  .step-col{
    border-right:1px solid var(--border);
    overflow:hidden;
  }
  .step-col:last-child{border-right:none;}
  .step-head{
    padding:12px 14px;text-align:center;
    font-size:10px;font-weight:700;letter-spacing:1px;
    text-transform:uppercase;color:rgba(255,255,255,.9);
  }
  .sh1{background:var(--navy);}
  .sh2{background:#1a3a7a;}
  .sh3{background:var(--blue);}
  .sh4{background:#1870d0;}
  .sh5{background:var(--sky);}
  .step-body{padding:14px 14px;}
  .step-body h5{
    font-size:10.5px;font-weight:700;color:var(--blue);
    margin-bottom:6px;letter-spacing:.3px;
  }
  .step-body ul{list-style:none;display:flex;flex-direction:column;gap:4px;}
  .step-body ul li{font-size:11px;color:#445566;line-height:1.5;}
  .step-body .course-tag{
    display:inline-block;background:var(--light);
    border-radius:3px;padding:1px 6px;
    font-size:10px;color:var(--blue);margin-top:4px;font-weight:600;
  }

  /* PSS+X */
  .pss-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;}
  .pss-card{
    background:white;border-radius:13px;padding:20px 20px;
    box-shadow:0 1px 10px rgba(11,29,64,.07);
    border-left:4px solid var(--blue);
  }
  .pss-card:nth-child(2){border-left-color:var(--teal);}
  .pss-card:nth-child(3){border-left-color:var(--coral);}
  .pss-label{
    font-family:'DM Mono',monospace;font-size:12px;font-weight:500;
    color:var(--blue);margin-bottom:8px;
  }
  .pss-card:nth-child(2) .pss-label{color:var(--teal);}
  .pss-card:nth-child(3) .pss-label{color:var(--coral);}
  .pss-card h4{font-size:14px;font-weight:700;margin-bottom:8px;}
  .pss-card p{font-size:12.5px;color:var(--gray);line-height:1.65;}

  /* 대학간 협력 성과 */
  .collab-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:560px){.collab-grid{grid-template-columns:1fr;}}
  .collab-group{
    background:white;border-radius:13px;overflow:hidden;
    box-shadow:0 1px 10px rgba(11,29,64,.07);
  }
  .collab-head{
    padding:12px 18px;font-size:13px;font-weight:700;color:white;
  }
  .ch1{background:var(--blue);}
  .ch2{background:var(--teal);}
  .collab-body{padding:14px 18px;}
  .collab-body ul{list-style:none;display:flex;flex-direction:column;gap:6px;}
  .collab-body ul li{
    font-size:12.5px;color:#334466;
    padding-left:13px;position:relative;line-height:1.6;
  }
  .collab-body ul li::before{
    content:'▸';position:absolute;left:0;top:3px;font-size:9px;color:var(--sky);
  }

  /* 고교 연계 */
  .highschool-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
  .hs-card{
    background:white;border-radius:13px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(11,29,64,.07);
  }
  .hs-tag{
    font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    padding:3px 9px;border-radius:4px;display:inline-block;margin-bottom:8px;
  }
  .ht1{background:#e8f0ff;color:var(--blue);}
  .ht2{background:#e6faf6;color:var(--teal);}
  .hs-card h4{font-size:13.5px;font-weight:700;margin-bottom:6px;}
  .hs-card p{font-size:12px;color:var(--gray);line-height:1.65;}

  /* 자립화 방안 */
  .auto-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;}
  .auto-card{
    background:white;border-radius:13px;padding:20px 18px;
    box-shadow:0 1px 10px rgba(11,29,64,.07);
    border-bottom:3px solid var(--blue);
    position:relative;
  }
  .auto-card:nth-child(2){border-bottom-color:var(--teal);}
  .auto-card:nth-child(3){border-bottom-color:var(--coral);}
  .auto-card:nth-child(4){border-bottom-color:var(--gold);}
  .auto-card h4{font-size:14px;font-weight:700;margin-bottom:8px;}
  .auto-card p{font-size:12.5px;color:var(--gray);line-height:1.65;}

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
    <div class="hero-chip"><span>06</span> 성과확산 및 인재기반 조성</div>
    <h1><em>성과확산</em> 및<br />인재기반 조성</h1>
    <p class="sub">AI·SW 저변 확대, 전주기적 창업 지원 모델(PSS+X), 대학간 협력, 고교 AI·SW 교육 기여, 그리고 지속가능한 자립화 방안</p>
  </div>
</div>




## AI·SW 저변확대 — 연계 대상별 추진 계획

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>AI·SW 저변확대 — 연계 대상별 추진 계획</h2></div>
  <div class="expand-grid">

    <div class="expand-card au d1">
      <h3>🏫 공교육 연계 (유·초·중등)</h3>
      <ul>
        <li>부산형 SW중심대학式 자유학년제 고도화</li>
        <li>AI선도 학교 지원체계 구축·확산</li>
        <li>학교급별 체험형 SW·AI 교육</li>
        <li>창의융합형 SW·AI 교육</li>
        <li>특수학교 SW·AI 교육 모델 구축</li>
      </ul>
    </div>

    <div class="expand-card ec2 au d2">
      <h3>🎓 공교육 연계 (고등학교)</h3>
      <ul>
        <li>고교학점제 SW 교과목 개설 운영</li>
        <li>인공지능(AI)융합교육 중심학교 협력체계 구축 및 SW교육 자문</li>
        <li>고등학교 영재학급 SW·AI 교육</li>
        <li>프로젝트형 심화 SW·AI 교육</li>
      </ul>
    </div>

    <div class="expand-card ec3 au d3">
      <h3>👨‍🏫 교사 연수</h3>
      <ul>
        <li>전문교과 교사 전공역량 강화 교사 연수</li>
        <li>비전공 교과 교사 융합 교육 교사 연수</li>
        <li>교육대학원과 협업하여 SW융합교육 연구 지원</li>
      </ul>
    </div>

    <div class="expand-card ec4 au d4">
      <h3>🌍 지자체 및 지역기업</h3>
      <ul>
        <li>지자체 SW·AI 교육 협력</li>
        <li>미취업·경력단절 여성 SW·AI 취업연계형 교육</li>
        <li>지역 재직자 협력 교육 확대</li>
      </ul>
    </div>

    <div class="expand-card ec5 au d1">
      <h3>🤝 지역 협력대학</h3>
      <ul>
        <li>지역 SW중심대학 공동 해커톤 및 경진대회 개최</li>
        <li>부산 전 지역 대학 비전공자 SW 개발 기본 역량 교육</li>
        <li>부산지역혁신플랫폼을 통한 공동 교육과정 운영</li>
        <li>타지역 SW중심대학간 동반 성장 산학협력 체계 구축</li>
      </ul>
    </div>

    <div class="expand-card au d2" style={{borderTopColor: 'var(--green)'}}>
      <h3>🏘️ 지역민 및 소외계층</h3>
      <ul>
        <li>지역민을 위한 SW·AI 문화활동 확대</li>
        <li>SW교육 격차 해소를 위한 지속적인 멘토링 및 SW교육 확대</li>
        <li>개방형 SW교육 콘텐츠 및 플랫폼 다변화를 통한 가치확산</li>
      </ul>
    </div>

  </div>
</div>

<hr class="divider"/>




## 주요 저변확대 성과 하이라이트

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>주요 저변확대 성과 하이라이트</h2></div>
  <div class="highlight-grid">
    <div class="hl-card au d1">
      <div class="hl-icon">📱</div>
      <p>체험 중심 <strong>자유학기제</strong>로 AI·SW 흥미 유발 — 10개 중학교 대상, 마이크로비트·VR 등 다양한 실습 교육 제공</p>
    </div>
    <div class="hl-card au d2">
      <div class="hl-icon">🏕️</div>
      <p><strong>창의융합캠프</strong> 운영으로 융복합 사고력 증진 — 핀테크, RC카 제작 등 흥미로운 주제로 학생들의 문제해결 능력 강화</p>
    </div>
    <div class="hl-card au d3">
      <div class="hl-icon">👩‍💼</div>
      <p>미취업 여성부터 전문가까지 <strong>맞춤형 역량 강화 교육</strong> — 경력단절 여성, 언론인, 군인 등 다양한 계층 대상 실무 교육 운영</p>
    </div>
    <div class="hl-card au d4">
      <div class="hl-icon">🎖️</div>
      <p><strong>부산광역시장 표창 수상</strong> — 정보화 역기능 예방 및 확산에 기여한 공로를 공식적으로 인정. 건전 정보문화 조성 유공</p>
    </div>
    <div class="hl-card au d1">
      <div class="hl-icon">👩‍🏫</div>
      <p><strong>교사 연수</strong>를 통한 AI·SW 교육 생태계 구축 — 유치원부터 고교 교사까지, 생성형 AI 등 최신 기술의 교육 현장 도입 지원</p>
    </div>
    <div class="hl-card au d2">
      <div class="hl-icon">🏙️</div>
      <p><strong>시민 참여 행사</strong>로 건전한 AI·SW 문화 조성 — 정보문화의 달 행사 운영, 체험 부스 제공으로 디지털 포용력 강화</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 전주기적 창업 확산 전략 — PSS+X 5단계

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>전주기적 창업 확산 전략 — PSS+X 5단계</h2></div>
  <div class="step-timeline au">
    <div class="step-col">
      <div class="step-head sh1">STEP 1<br />창업역량 배양</div>
      <div class="step-body">
        <h5>교과</h5>
        <ul><li>인공지능기반창업 (3학점)</li></ul>
        <h5 style={{marginTop: '8px'}}>비교과</h5>
        <ul>
          <li>SW창업 동문초청 특강</li>
          <li>PNU 아이디어 경진대회</li>
        </ul>
        <span class="course-tag">PNU SW Start-up</span>
      </div>
    </div>
    <div class="step-col">
      <div class="step-head sh2">STEP 2<br />아이템 발굴/팀빌딩</div>
      <div class="step-body">
        <h5>팀빌딩 지원</h5>
        <ul>
          <li>온라인 팀매칭 시스템</li>
          <li>MBTI 성격유형 검사</li>
        </ul>
        <h5 style={{marginTop: '8px'}}>심화교육</h5>
        <ul>
          <li>창업 아이템 검증 및 심화교육</li>
          <li>PNU 창업동아리</li>
          <li>무박 창업 캠프</li>
        </ul>
      </div>
    </div>
    <div class="step-col">
      <div class="step-head sh3">STEP 3<br />프로토타입(MVP)</div>
      <div class="step-body">
        <h5>비교과</h5>
        <ul><li>PNU 창의융합 SW해커톤</li></ul>
        <h5 style={{marginTop: '8px'}}>지도교수</h5>
        <ul>
          <li>SW개발 지도교수</li>
          <li>창업공간·시제품 제작</li>
        </ul>
        <h5 style={{marginTop: '8px'}}>창업활동 지원</h5>
        <ul>
          <li>창업활동 지원금</li>
          <li>시제품 제작 지원</li>
        </ul>
      </div>
    </div>
    <div class="step-col">
      <div class="step-head sh4">STEP 4<br />비즈니스모델 개발</div>
      <div class="step-body">
        <h5>PNU SW Start-up</h5>
        <ul>
          <li>선배창업자 1:1 멘토링</li>
          <li>린&애자일 프로세스 특강</li>
          <li>SW스타트업 생존경영 특강</li>
          <li>정부지원사업 특강</li>
          <li>기초 재무회계 특강</li>
        </ul>
        <h5 style={{marginTop: '8px'}}>창업 준비 지원</h5>
        <ul>
          <li>부산벤처창업 페스티벌</li>
          <li>지식재산권(IP) 지원</li>
        </ul>
      </div>
    </div>
    <div class="step-col">
      <div class="step-head sh5">STEP 5<br />SW창업</div>
      <div class="step-body">
        <h5>기업 지원</h5>
        <ul>
          <li>창업 자금 및 공간 지원</li>
          <li>예비창업패키지</li>
          <li>PNU AVEC 창업공간 제공</li>
          <li>투자 연계 / 펀드 연계</li>
        </ul>
        <h5 style={{marginTop: '8px'}}>사후 연계</h5>
        <ul>
          <li>SW창업 장학금</li>
          <li>인턴십 지원 (연계 취업)</li>
          <li>학내 테스트 베드 제공</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## PSS+X 창업지원 체계 — 주관 기관별 역할

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>PSS+X 창업지원 체계 — 주관 기관별 역할</h2></div>
  <div class="pss-grid">
    <div class="pss-card au d1">
      <div class="pss-label">PSS+X</div>
      <h4>창업중심대학 사업</h4>
      <p>기존의 SW분야 창업 프로세스(PSS)를 전분야 창업지원 사업 (중소벤처기업부 창업중심대학사업)과 연계하여 전주기적 SW창업 지원 모델(PSS+X) 구축</p>
    </div>
    <div class="pss-card au d2">
      <div class="pss-label">AI융합교육원</div>
      <h4>창업 역량 강화</h4>
      <p>AI·SW전공생 창업 역량 강화 및 아이템 발굴을 위한 단계별 활동 지원. 관련 교과목: 기업가정신과 창의적사고(3학점), 창업실무(3학점), 창업의 이해(3학점), 창업경영시뮬레이션(3학점) 등</p>
    </div>
    <div class="pss-card au d3">
      <div class="pss-label">학내 유관기관</div>
      <h4>창업 인프라 지원</h4>
      <p>학내 학부생 창업지원을 위한 교과·비교과 교육 활동 지원, 시제품 제작, 창업공간 및 장비, VC투자연계 등 창업지원 인프라 확대</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 대학간 AI·SW인재 양성 협력 주요 성과

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>대학간 AI·SW인재 양성 협력 주요 성과</h2></div>
  <div class="collab-grid">
    <div class="collab-group au d1">
      <div class="collab-head ch1">🏆 협력 경진대회를 통한 실전형 인재 양성</div>
      <div class="collab-body">
        <ul>
          <li>AI·SW융합 해커톤, 지역을 넘어 전국 경쟁력 입증</li>
          <li>부울경 ICT 아이디어 경진대회 <strong>대상 수상</strong></li>
          <li>대학 연합 딥러닝 챌린지 참가</li>
        </ul>
      </div>
    </div>
    <div class="collab-group au d2">
      <div class="collab-head ch2">🌐 SW교육 생태계 공동 구축 및 확산</div>
      <div class="collab-body">
        <ul>
          <li>타 대학과 협력, 수요 맞춤형 SW전문 교재 공동 개발</li>
          <li>온라인 강좌 개방으로 SW교육(인프런) 대중화 선도</li>
          <li>부산·경남 대학, SW인재 양성을 위한 업무 협약 체결</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## 고교 AI·SW교육 확대 기여 방안

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">06</div><h2>고교 AI·SW교육 확대 기여 방안</h2></div>
  <div class="highschool-grid">
    <div class="hs-card au d1">
      <span class="hs-tag ht1">교과 연계</span>
      <h4>실생활 문제해결형 AI·SW 교육</h4>
      <p>「빅데이터 분석」 교과과정으로 데이터 역량 강화 — 공공데이터를 수집·분석하여 데이터 기반 의사결정 능력 양성</p>
    </div>
    <div class="hs-card au d2">
      <span class="hs-tag ht1">교과 연계</span>
      <h4>금융헬빈 교과과정 디지털 금융 리터러시</h4>
      <p>파이썬과 생성형 AI로 금융 챗봇, 노코드 가계부 앱 등을 제작</p>
    </div>
    <div class="hs-card au d3">
      <span class="hs-tag ht2">비교과 활동</span>
      <h4>맞춤형 비교과 프로그램 지역 교육 격차 해소</h4>
      <p>AI 특강과 글로벌 데이터 챌린지 멘토링 — 117명이 지원하여 사회 문제 해결을 위한 창의적 SW 솔루션 개발</p>
    </div>
    <div class="hs-card au d4">
      <span class="hs-tag ht2">비교과 활동</span>
      <h4>AI·SW융합 해커톤으로 실전 개발 경험 제공</h4>
      <p>창의·융합형 AI·SW 인재 양성 — 실전 프로젝트 기반의 문제해결 역량 강화</p>
    </div>
  </div>
</div>

<hr class="divider"/>




## 자립화 방안 확립

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">07</div><h2>자립화 방안 확립</h2></div>
  <div class="auto-grid">
    <div class="auto-card au d1">
      <h4>🏢 SW역량개발센터 확대 운영</h4>
      <p>SW교육의 개선과 발전을 위한 연구·개발, 교육 컨설팅, 교육 현장 지원 등을 수행할 수 있는 「SW역량개발센터」를 「AI융합교육원」 내에 설립하여 SW교육의 질적 향상</p>
    </div>
    <div class="auto-card au d2">
      <h4>🔗 지산학 협력네트워크를 통한 현장 중심 전공 교육</h4>
      <p>지자체와 긴밀하게 협력하여 대학의 기술, 인재, 인프라를 유기적으로 연결할 수 있는 상생협력 혁신 생태를 조성하고 지역 수요에 맞는 고급 SW 인재 양성</p>
    </div>
    <div class="auto-card au d3">
      <h4>🎯 자기주도적 학생 맞춤형 SW융합교육 확대</h4>
      <p>전교생 대상 자기 주도적 SW융합과정을 이수할 수 있는 교육 프로그램과 컨설팅 서비스를 제공하고 취업으로 연계될 수 있도록 SW융합지원시스템 구축</p>
    </div>
    <div class="auto-card au d4">
      <h4>🌱 SW가치확산을 위한 공유 성장 생태계 조성</h4>
      <p>공교육을 통한 SW·AI교육 확산하여 안정화하고 지역 사회 SW 공유 성장 생태계 조성</p>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 성과확산 및 인재기반 조성 (Chapter 06)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
