---
id: part-5
title: "SW전공교육 강화"
sidebar_position: 5
---

<style>{`
  :root {
    --navy:   #0b1d40;
    --blue:   #1550c4;
    --sky:    #2aabde;
    --teal:   #18c4a8;
    --coral:  #e84530;
    --purple: #7c5ae6;
    --gold:   #f0a700;
    --pink:   #e040fb;
    --green:  #26a669;
    --light:  #edf3ff;
    --bg:     #f3f7ff;
    --gray:   #667799;
    --border: #d4e1f5;
    --white:  #fff;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--navy);line-height:1.72;}

  /* ── HERO ── */
  .hero{
    background:linear-gradient(145deg,#060f25 0%,#0f2560 50%,#1648a8 100%);
    padding:64px 32px 50px;color:white;position:relative;overflow:hidden;
  }
  .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;top:-180px;right:-100px;background:rgba(42,171,222,.09);pointer-events:none;}
  .hero::after{content:'';position:absolute;width:200px;height:200px;border-radius:50%;bottom:-60px;left:7%;background:rgba(232,69,48,.08);pointer-events:none;}
  .hero-inner{max-width:980px;margin:0 auto;position:relative;z-index:1;}
  .hero-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:18px;}
  .hero-eyebrow .num{font-family:'DM Mono',monospace;font-size:12px;color:var(--sky);}
  .hero-eyebrow .label{
    background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);
    padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;
    letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.8);
  }
  .hero h1{
    font-family:'Bebas Neue',sans-serif;
    font-size:clamp(36px,7vw,72px);line-height:1;letter-spacing:2px;
    margin-bottom:14px;
  }
  .hero h1 em{color:var(--sky);font-style:normal;}
  .hero p.sub{font-size:14px;color:rgba(255,255,255,.55);max-width:540px;}

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

  /* ── 8 TRACK CARDS ── */
  .track-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(218px,1fr));
    gap:18px;
  }
  .track-card{
    background:white;border-radius:16px;padding:24px 20px;
    box-shadow:0 2px 16px rgba(11,29,64,.08);
    position:relative;overflow:hidden;
    transition:transform .22s,box-shadow .22s;
    border-top:4px solid transparent;
  }
  .track-card:hover{transform:translateY(-5px);box-shadow:0 10px 32px rgba(11,29,64,.13);}
  .t1{border-top-color:var(--blue);}
  .t2{border-top-color:var(--coral);}
  .t3{border-top-color:var(--teal);}
  .t4{border-top-color:var(--purple);}
  .t5{border-top-color:var(--pink);}
  .t6{border-top-color:var(--gold);}
  .t7{border-top-color:var(--green);}
  .t8{border-top-color:var(--sky);}

  .track-en{
    font-family:'DM Mono',monospace;font-size:10px;font-weight:500;
    letter-spacing:1px;text-transform:uppercase;
    margin-bottom:4px;opacity:.55;
  }
  .track-card h3{font-size:15px;font-weight:800;margin-bottom:10px;}
  .track-card p{font-size:12.5px;color:var(--gray);line-height:1.68;}
  .track-tag{
    display:inline-block;margin-top:12px;
    font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    padding:3px 9px;border-radius:4px;
  }
  .t1 .track-tag{background:#e8f0ff;color:var(--blue);}
  .t2 .track-tag{background:#ffeaea;color:var(--coral);}
  .t3 .track-tag{background:#e6faf6;color:var(--teal);}
  .t4 .track-tag{background:#f0ebff;color:var(--purple);}
  .t5 .track-tag{background:#fce8ff;color:#a000c8;}
  .t6 .track-tag{background:#fff5e0;color:#a06000;}
  .t7 .track-tag{background:#e6f8ee;color:var(--green);}
  .t8 .track-tag{background:#e2f4fd;color:#0076aa;}

  /* ── INDUSTRY COLLAB ── */
  .collab-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;}
  .collab-card{
    background:white;border-radius:14px;padding:24px 20px;
    box-shadow:0 2px 14px rgba(11,29,64,.07);
  }
  .collab-card h3{
    font-size:15px;font-weight:700;margin-bottom:10px;
    display:flex;align-items:center;gap:8px;
  }
  .collab-card ul{list-style:none;display:flex;flex-direction:column;gap:6px;}
  .collab-card ul li{
    font-size:12.5px;color:#334466;
    padding-left:14px;position:relative;line-height:1.6;
  }
  .collab-card ul li::before{
    content:'▸';position:absolute;left:0;top:3px;
    font-size:9px;color:var(--sky);
  }

  /* ── CURRICULUM REFORM ── */
  .reform-flow{
    display:flex;flex-direction:column;gap:0;
    background:white;border-radius:14px;overflow:hidden;
    box-shadow:0 2px 14px rgba(11,29,64,.07);
  }
  .reform-step{
    display:flex;align-items:flex-start;gap:18px;
    padding:22px 24px;border-bottom:1px solid var(--border);
  }
  .reform-step:last-child{border-bottom:none;}
  .reform-step-num{
    font-family:'DM Mono',monospace;font-size:13px;font-weight:500;
    color:white;background:var(--blue);
    width:32px;height:32px;border-radius:8px;
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
    margin-top:2px;
  }
  .reform-step:nth-child(2) .reform-step-num{background:var(--teal);}
  .reform-step:nth-child(3) .reform-step-num{background:var(--coral);}
  .reform-step h4{font-size:14px;font-weight:700;margin-bottom:6px;}
  .reform-step p{font-size:13px;color:var(--gray);line-height:1.65;}

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
      <span class="num">04</span>
      <span class="label">SW전공교육 강화</span>
    </div>
    <h1><em>AI·SW</em><br />전공교육 강화</h1>
    <p class="sub">신기술 분야 현장실무형 AI·SW 전공 특화 인재 양성을 위한 8개 전공트랙 개설, 산업체 수요 기반 교육과정 개편, 그리고 산학협력 플랫폼 일원화</p>
  </div>
</div>




## 8개 AI·SW 전공 특화 트랙

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>8개 AI·SW 전공 특화 트랙</h2></div>
  <div class="track-grid">

    <div class="track-card t1 au d1">
      <div class="track-en">Cloud</div>
      <h3>클라우드</h3>
      <p>실전적 클라우드 기술 역량 강화를 위해 특성화 교과목 신설 및 현장 실무형 실습 강화</p>
      <span class="track-tag">+18% / yr Market</span>
    </div>

    <div class="track-card t2 au d2">
      <div class="track-en">Convergence Security</div>
      <h3>융합보안</h3>
      <p>블록체인, 핀테크, 사이버 보안 등 지역특화 산업 전문인력 수요 대응. 기존 정보보안·네트워크 교과목 개선을 통한 융합보안 기술 교육 및 실습 강화</p>
      <span class="track-tag">×2.3 by 2026</span>
    </div>

    <div class="track-card t3 au d3">
      <div class="track-en">Intelligent IoT</div>
      <h3>지능형IoT</h3>
      <p>지역 제조업체의 디지털 전환으로 인한 지능형IoT 수요에 대응. 클라우드IoT 플랫폼 기반 설계·구축 전문 능력 및 현장실무형 기술 교육 강화</p>
      <span class="track-tag">1만 명+ 인력 부족</span>
    </div>

    <div class="track-card t4 au d4">
      <div class="track-en">Metaverse</div>
      <h3>메타버스</h3>
      <p>부산항만, 대형조선소 등 지역 메타버스/디지털트윈 기반 디지털 전환 기술 교육. 3D 가상환경 인식·활용 기술 및 디지털 공간 구축·동기화 기술 개발 능력 배양</p>
      <span class="track-tag">Gartner Top 10 ICT</span>
    </div>

    <div class="track-card t5 au d1">
      <div class="track-en">Generative AI</div>
      <h3>생성AI</h3>
      <p>자연어 처리, 이미지 및 영상 생성 등 다양한 생성 인공지능 지식을 바탕으로 시각 및 언어 지능 등 멀티 도메인에 특화된 학습 모델 개발 역량 강화</p>
      <span class="track-tag">+20% / yr Market</span>
    </div>

    <div class="track-card t6 au d2">
      <div class="track-en">Medical BigData Statistics</div>
      <h3>의생명빅데이터통계</h3>
      <p>수학·통계 기반 데이터 분석 기법의 심화 학습과 실습 강화를 통해 보건·의료·정책 등 빅데이터 활용 분야에서 요구되는 데이터 분석 기술 역량 강화</p>
      <span class="track-tag">6,407억 원 (2023)</span>
    </div>

    <div class="track-card t7 au d3">
      <div class="track-en">Application of AI</div>
      <h3>인공지능응용</h3>
      <p>데이터사이언스와 인공지능 기술의 전문성을 기반으로 SW 개발 프로그래밍 교육 및 실습을 강화하여 AI 중심 산업과 연구 분야에 대응하는 기술 역량 강화</p>
      <span class="track-tag">+30% / yr Market</span>
    </div>

    <div class="track-card t8 au d4">
      <div class="track-en">Design Technology</div>
      <h3>디자인테크</h3>
      <p>디자인과 디지털 기술을 기반으로 XR, 인터랙션, UX/UI 등 첨단 기술을 활용한 창의적 콘텐츠 기획 및 실습 강화. 메타버스·실감미디어·서비스 디자인 등 미래 산업 수요 대응</p>
      <span class="track-tag">두 자릿수 성장 ∼2030</span>
    </div>

  </div>
</div>

<hr class="divider"/>




## 산학협력 교육·취업 플랫폼 개선

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>산학협력 교육·취업 플랫폼 개선</h2></div>
  <div class="collab-grid">

    <div class="collab-card au d1">
      <h3>🎓 산학협력 교육</h3>
      <ul>
        <li>모든 AI·SW 전공자의 산학협력 프로젝트 참여 <strong>의무화</strong></li>
        <li>기업이 교육을 주도하고 교과목 운영에 참여하는 정규 교육 프로그램 운영</li>
        <li>산업 기술 수요 기반의 실전적 문제해결 역량 강화</li>
      </ul>
    </div>

    <div class="collab-card au d2">
      <h3>💼 취업 연계</h3>
      <ul>
        <li>기업–학생 매칭 고도화를 통해 산학협력 만족도 개선</li>
        <li>지속적 산학협력–취업 상호 협력 유도</li>
        <li>취업으로 연결되는 취업 연계형 프로그램 개발</li>
      </ul>
    </div>

    <div class="collab-card au d3">
      <h3>🔗 One-Stop 산학협력 플랫폼</h3>
      <ul>
        <li>SW산학협력센터 중심의 산학협력 관리체계 일원화</li>
        <li>산학협력 활동 전 과정을 효과적으로 관리하기 위한 One-Stop 플랫폼 운영</li>
      </ul>
    </div>

  </div>
</div>

<hr class="divider"/>




## 산업체 수요 기반 교육과정 개편 효율화

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>산업체 수요 기반 교육과정 개편 효율화</h2></div>
  <div class="reform-flow au">
    <div class="reform-step">
      <div class="reform-step-num">①</div>
      <div>
        <h4>산업체 의견수렴 방식 개선</h4>
        <p>핵심 산업체·유관기관으로 학과 교수진이 단체 방문하여 그룹 인터뷰 수행. 관심 산업체 대상 학과 초청 행사를 통한 산업체–교수–학생 교류 활동 추진. 교육과정 개편·산학교류 관련 의견수렴 방식 개선</p>
      </div>
    </div>
    <div class="reform-step">
      <div class="reform-step-num">②</div>
      <div>
        <h4>산업체 전문가 참여 위원회 운영</h4>
        <p>혁신위원회 및 트랙운영위원회에 산업체 전문가를 필수적으로 구성하여 지속적이고 민첩한 산업체 수요 기반 AI·SW 특화 트랙 교과과정 개편 추진</p>
      </div>
    </div>
    <div class="reform-step">
      <div class="reform-step-num">③</div>
      <div>
        <h4>결과 반영 교과과정 운영</h4>
        <p>의견수렴 결과를 교과과정에 즉시 반영하여 신기술 분야 현장실무형 AI·SW 전공 특화 인재 양성 교육과정 운영. 첨단분야 인재 양성을 위한 AI 전공 및 SW 등 신기술 교육과정과 산업계 수요를 반영한 문제해결형 산학협력 및 기업주도 교육 운영</p>
      </div>
    </div>
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — SW전공교육 강화 (Chapter 04)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
