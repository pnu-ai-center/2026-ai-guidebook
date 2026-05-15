---
id: part-8
title: "대학 일반 현황"
sidebar_position: 8
---

<style>{`
  :root {
    --navy:   #0b1d40;
    --blue:   #1450c4;
    --sky:    #28aadc;
    --teal:   #18c2a8;
    --coral:  #e84530;
    --purple: #7c58e6;
    --gold:   #f0a600;
    --green:  #22a860;
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
    background:linear-gradient(148deg,#050f28 0%,#0e2255 52%,#1548a6 100%);
    padding:66px 32px 52px;color:white;position:relative;overflow:hidden;
  }
  .hero::before{content:'';position:absolute;width:460px;height:460px;border-radius:50%;top:-160px;right:-80px;background:rgba(40,170,220,.1);pointer-events:none;}
  .hero::after{content:'';position:absolute;width:200px;height:200px;border-radius:50%;bottom:-60px;left:7%;background:rgba(232,69,48,.08);pointer-events:none;}
  .hero-inner{max-width:980px;margin:0 auto;position:relative;z-index:1;}
  .hero-chip{
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);
    padding:5px 14px;border-radius:20px;font-size:11px;font-weight:600;
    letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px;color:rgba(255,255,255,.8);
  }
  .hero-chip span{font-family:'DM Mono',monospace;color:var(--sky);}
  .hero h1{
    font-family:'Syne',sans-serif;
    font-size:clamp(26px,5vw,50px);line-height:1.08;margin-bottom:14px;letter-spacing:-.5px;
  }
  .hero h1 em{color:var(--sky);font-style:normal;}
  .hero p.sub{font-size:14px;color:rgba(255,255,255,.55);max-width:560px;}
  .hero-stats{
    display:flex;flex-wrap:wrap;gap:16px;margin-top:28px;
  }
  .hero-stat{
    background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);
    border-radius:10px;padding:12px 20px;text-align:center;
  }
  .hero-stat strong{
    display:block;font-family:'DM Mono',monospace;
    font-size:24px;color:var(--sky);line-height:1;margin-bottom:4px;
  }
  .hero-stat span{font-size:11px;color:rgba(255,255,255,.55);}

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

  /* 학과 구조 카드 */
  .dept-structure{
    display:flex;flex-direction:column;gap:14px;
  }
  .dept-group{
    background:white;border-radius:14px;overflow:hidden;
    box-shadow:0 2px 14px rgba(11,29,64,.07);
  }
  .dept-group-head{
    padding:14px 22px;
    display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;
    color:white;font-size:14px;font-weight:700;
  }
  .dgh1{background:var(--navy);}
  .dgh2{background:#1a3a7a;}
  .dept-group-head .quota{
    font-family:'DM Mono',monospace;font-size:13px;
    background:rgba(255,255,255,.18);padding:3px 12px;border-radius:20px;
  }
  .dept-majors{
    display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:0;
  }
  .dept-major{
    padding:18px 22px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);
  }
  .dept-major:last-child{border-right:none;}
  @media(max-width:600px){.dept-major{border-right:none;}}
  .dm-name{font-size:14px;font-weight:700;margin-bottom:6px;}
  .dm-quota{
    font-family:'DM Mono',monospace;font-size:22px;font-weight:500;
    color:var(--blue);line-height:1;margin-bottom:4px;
  }
  .dm-quota small{font-size:13px;}
  .dm-note{font-size:11px;color:var(--gray);line-height:1.5;}

  /* 전형 유형 카드 */
  .admission-type-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  @media(max-width:600px){.admission-type-grid{grid-template-columns:1fr;}}
  .adm-type{
    background:white;border-radius:14px;overflow:hidden;
    box-shadow:0 2px 14px rgba(11,29,64,.07);
  }
  .adm-type-head{
    padding:14px 20px;color:white;font-size:14px;font-weight:700;
  }
  .at1{background:var(--blue);}
  .at2{background:var(--teal);}
  .adm-type-body{padding:16px 20px;}
  .adm-type-body ul{list-style:none;display:flex;flex-direction:column;gap:8px;}
  .adm-type-body ul li{
    font-size:13px;color:#334466;
    padding-left:14px;position:relative;line-height:1.6;
  }
  .adm-type-body ul li::before{
    content:'▸';position:absolute;left:0;top:3px;font-size:9px;color:var(--sky);
  }
  .adm-type-body ul li strong{color:var(--navy);}

  /* 전형 방법 상세 테이블 */
  .method-table{
    width:100%;background:white;border-radius:14px;
    box-shadow:0 2px 14px rgba(11,29,64,.07);overflow:hidden;
  }
  .method-table table{width:100%;border-collapse:collapse;}
  .method-table th{
    background:var(--navy);color:white;
    padding:12px 14px;font-size:12px;font-weight:600;text-align:center;
  }
  .method-table td{
    padding:11px 14px;font-size:12px;color:#334466;
    border-bottom:1px solid var(--border);text-align:center;
    vertical-align:middle;
  }
  .method-table tr:last-child td{border-bottom:none;}
  .method-table tr:nth-child(even) td{background:#f9fbff;}
  .type-tag{
    display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;
  }
  .tt-susi{background:var(--light);color:var(--blue);}
  .tt-jeongsi{background:#e6faf6;color:var(--teal);}
  .badge-o{color:var(--teal);font-weight:700;}
  .badge-x{color:var(--gray);}

  /* 모집 인원 바 차트 */
  .quota-chart{
    background:white;border-radius:14px;padding:28px 24px;
    box-shadow:0 2px 14px rgba(11,29,64,.07);
  }
  .quota-row{
    display:flex;align-items:center;gap:14px;margin-bottom:14px;
  }
  .quota-row:last-child{margin-bottom:0;}
  .quota-label{
    min-width:160px;font-size:13px;font-weight:500;color:var(--navy);text-align:right;
    flex-shrink:0;
  }
  .quota-bar-wrap{flex:1;background:var(--light);border-radius:6px;overflow:hidden;height:28px;}
  .quota-bar{
    height:100%;border-radius:6px;display:flex;align-items:center;
    padding-left:10px;
    font-family:'DM Mono',monospace;font-size:12px;font-weight:500;color:white;
    transition:width .8s ease;
  }
  .qb1{background:var(--blue);}
  .qb2{background:var(--sky);}
  .qb3{background:var(--teal);}
  .qb4{background:var(--purple);}

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
    <div class="hero-chip"><span>07</span> 대학 일반 현황</div>
    <h1>부산대학교 <em>SW중심대학</em><br />대학 일반 현황</h1>
    <p class="sub">AI·SW 학과 구조, 2026학년도 입학전형 유형 및 방법, 모집단위별 정원 현황</p>
    <div class="hero-stats">
      <div class="hero-stat"><strong>205명+</strong><span>AI·SW 주요 모집 정원</span></div>
      <div class="hero-stat"><strong>4개</strong><span>AI·SW 전공</span></div>
      <div class="hero-stat"><strong>2개</strong><span>학부 (정보컴퓨터공학부·의생명융합공학부)</span></div>
      <div class="hero-stat"><strong>전국 최초</strong><span>부산대-경북대 인공지능 공동학과</span></div>
    </div>
  </div>
</div>




## AI·SW 학과 구조 및 모집 정원

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">01</div><h2>AI·SW 학과 구조 및 모집 정원</h2></div>
  <div class="dept-structure">

    <div class="dept-group au d1">
      <div class="dept-group-head dgh1">
        정보컴퓨터공학부
        <span class="quota">주관 학부</span>
      </div>
      <div class="dept-majors">
        <div class="dept-major">
          <div class="dm-name">컴퓨터공학전공</div>
          <div class="dm-quota">84<small>명</small></div>
          <div class="dm-note">SW 전공 핵심 학과</div>
        </div>
        <div class="dept-major">
          <div class="dm-name">인공지능전공 <sup>①</sup></div>
          <div class="dm-quota">60<small>명</small></div>
          <div class="dm-note">경북대학교 전자공학부 인공지능전공과<br /><strong>공동학과</strong>로 운영 (전국 최초)</div>
        </div>
        <div class="dept-major">
          <div class="dm-name">디자인테크놀로지전공</div>
          <div class="dm-quota">17<small>명</small></div>
          <div class="dm-note">디자인 + 디지털 기술 융합 전공</div>
        </div>
        <div class="dept-major">
          <div class="dm-name">첨단IT자율전공 <sup>③</sup></div>
          <div class="dm-quota">-</div>
          <div class="dm-note">전공배정 시 정보컴퓨터공학부 선택 가능</div>
        </div>
      </div>
    </div>

    <div class="dept-group au d2">
      <div class="dept-group-head dgh2">
        의생명융합공학부
        <span class="quota">협력 학부</span>
      </div>
      <div class="dept-majors">
        <div class="dept-major">
          <div class="dm-name">데이터사이언스전공 <sup>②</sup></div>
          <div class="dm-quota">44<small>명</small></div>
          <div class="dm-note">전공배정 시 44명 선택 가능<br />(의생명융합공학부 입학정원 108명 기준)</div>
        </div>
        <div class="dept-major">
          <div class="dm-name">의생명융합공학부 자율전공</div>
          <div class="dm-quota">108<small>명</small></div>
          <div class="dm-note">입학 후 전공 배정</div>
        </div>
      </div>
    </div>

  </div>
  <div style={{marginTop: '14px', padding: '14px 18px', background: 'white', borderRadius: '10px', borderLeft: '4px solid var(--gold)', boxShadow: '0 1px 8px rgba(11,29,64,.06)', fontSize: '12px', color: 'var(--gray)'}}>
    <sup>①</sup> 인공지능전공은 경북대학교 전자공학부 인공지능전공과 공동학과로 운영 &nbsp;|&nbsp;
    <sup>②</sup> 데이터사이언스전공은 전공배정 시 44명 선택 가능 &nbsp;|&nbsp;
    <sup>③</sup> 첨단IT자율전공은 전공배정 시 정보컴퓨터공학부 선택 가능
  </div>
</div>

<hr class="divider"/>




## AI·SW학과 모집 정원 현황

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">02</div><h2>AI·SW학과 모집 정원 현황</h2></div>
  <div class="quota-chart au">
    <div class="quota-row">
      <div class="quota-label">컴퓨터공학전공</div>
      <div class="quota-bar-wrap">
        <div class="quota-bar qb1" style={{width: '82%'}}>84명</div>
      </div>
    </div>
    <div class="quota-row">
      <div class="quota-label">인공지능전공</div>
      <div class="quota-bar-wrap">
        <div class="quota-bar qb2" style={{width: '59%'}}>60명 (공동학과)</div>
      </div>
    </div>
    <div class="quota-row">
      <div class="quota-label">데이터사이언스전공</div>
      <div class="quota-bar-wrap">
        <div class="quota-bar qb3" style={{width: '43%'}}>44명</div>
      </div>
    </div>
    <div class="quota-row">
      <div class="quota-label">디자인테크놀로지전공</div>
      <div class="quota-bar-wrap">
        <div class="quota-bar qb4" style={{width: '17%'}}>17명</div>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## 2026학년도 AI·SW학과 입학전형 유형

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">03</div><h2>2026학년도 AI·SW학과 입학전형 유형</h2></div>
  <div class="admission-type-grid">
    <div class="adm-type au d1">
      <div class="adm-type-head at1">📋 수시 전형</div>
      <div class="adm-type-body">
        <ul>
          <li><strong>학생부교과전형</strong></li>
          <li><strong>지역인재전형</strong> (학생부 교과)</li>
          <li><strong>농어촌학생전형</strong></li>
          <li><strong>특성화고교졸업자전형</strong></li>
          <li><strong>학생부종합전형</strong></li>
          <li><strong>지역인재전형</strong> (학생부 종합)</li>
          <li><strong>지역인재 저소득층학생전형</strong></li>
          <li><strong>사회배려자전형</strong></li>
          <li><strong>저소득층학생전형</strong></li>
          <li><strong>특수교육대상자전형</strong></li>
          <li><strong>논술전형</strong></li>
          <li><strong>지역인재전형 논술</strong></li>
        </ul>
      </div>
    </div>
    <div class="adm-type au d2">
      <div class="adm-type-head at2">📑 정시 전형</div>
      <div class="adm-type-body">
        <ul>
          <li><strong>수능 가군</strong> — 정시 수능 성적 기반</li>
          <li><strong>수능 나군</strong> — 정시 수능 성적 기반</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="divider"/>




## 전형 방법 및 평가 요소

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">04</div><h2>전형 방법 및 평가 요소</h2></div>
  <div class="method-table au">
    <table>
      <thead>
        <tr>
          <th>전형 구분</th>
          <th>전형명</th>
          <th>전형요소 및 평가방법</th>
          <th>최고점</th>
          <th>최저점</th>
          <th>수능최저학력기준</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"><span class="type-tag tt-susi">수시</span><br />학생부 교과</td>
          <td>학생부교과전형</td>
          <td style={{textAlign: 'left'}}>서류(학생부) 평가 100%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td>지역인재전형 (교과)</td>
          <td style={{textAlign: 'left'}}>학생부 교과 80% + 학업역량평가 20%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td rowspan="4"><span class="type-tag tt-susi">수시</span><br />학생부 종합</td>
          <td>학생부종합전형</td>
          <td style={{textAlign: 'left'}}>1단계: 서류(학생부) 100% (3~4배수)<br />2단계: 1단계 성적 80% + 면접 20%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td>지역인재전형 (종합)</td>
          <td style={{textAlign: 'left'}}>1단계: 서류(학생부) 100% (3~4배수)<br />2단계: 1단계 성적 80% + 면접 20%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td>지역인재 저소득층·사회배려자·저소득층·특수교육대상자 등</td>
          <td style={{textAlign: 'left'}}>서류(학생부) 평가 100%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-x">미적용</span></td>
        </tr>
        <tr>
          <td>농어촌·특성화고교</td>
          <td style={{textAlign: 'left'}}>서류(학생부) 평가 100%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-x">미적용</span></td>
        </tr>
        <tr>
          <td rowspan="2"><span class="type-tag tt-susi">수시</span><br />논술</td>
          <td>논술전형</td>
          <td style={{textAlign: 'left'}}>논술 70% + 학생부 교과 30%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td>지역인재전형 논술</td>
          <td style={{textAlign: 'left'}}>논술 70% + 학생부 교과 30%</td>
          <td>100</td>
          <td>0</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
        <tr>
          <td><span class="type-tag tt-jeongsi">정시</span><br />수능</td>
          <td>수능 가군 / 나군</td>
          <td style={{textAlign: 'left'}}>수능 성적 기반</td>
          <td>—</td>
          <td>—</td>
          <td><span class="badge-o">적용</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="divider"/>




## 모집단위별 전형별 모집 인원 (2026학년도)

<div class="wrap">
  <div class="sec-head au"><div class="sec-num">05</div><h2>모집단위별 전형별 모집 인원 (2026학년도)</h2></div>
  <div style={{background: 'white', borderRadius: '14px', boxShadow: '0 2px 14px rgba(11,29,64,.07)', overflow: 'hidden'}} class="au">
    <table style={{width: '100%', borderCollapse: 'collapse'}}>
      <thead>
        <tr style={{background: 'var(--navy)', color: 'white'}}>
          <th style={{padding: '12px 14px', fontSize: '11px', textAlign: 'left'}}>모집단위</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>학생부교과</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>교과 지역인재</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>농어촌</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>학생부종합</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>종합 지역인재</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>저소득층</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>특수교육</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>사회배려</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>논술</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>가군</th>
          <th style={{padding: '12px 10px', fontSize: '11px', textAlign: 'center'}}>나군</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{borderBottom: '1px solid var(--border)'}}>
          <td style={{padding: '11px 14px', fontSize: '13px', fontWeight: '700'}}>컴퓨터공학전공</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>20</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>12</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>15</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>7</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>6</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>10</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>10</td>
        </tr>
        <tr style={{borderBottom: '1px solid var(--border)', background: '#f9fbff'}}>
          <td style={{padding: '11px 14px', fontSize: '13px', fontWeight: '700'}}>인공지능전공</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>12</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>8</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>3</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>6</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>5</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>12</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
        </tr>
        <tr style={{borderBottom: '1px solid var(--border)'}}>
          <td style={{padding: '11px 14px', fontSize: '13px', fontWeight: '700'}}>디자인테크놀로지전공</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>11</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>3</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
        </tr>
        <tr style={{borderBottom: '1px solid var(--border)', background: '#f9fbff'}}>
          <td style={{padding: '11px 14px', fontSize: '13px', fontWeight: '700'}}>데이터사이언스전공</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>28</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>15</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>3</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>20</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>15</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>2</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>30</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
        </tr>
        <tr>
          <td style={{padding: '11px 14px', fontSize: '13px', fontWeight: '700'}}>첨단IT자율전공</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>43</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>5</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>1</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>—</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>4</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>6</td>
          <td style={{padding: '11px 10px', textAlign: 'center', fontSize: '13px'}}>28</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style={{marginTop: '12px', fontSize: '11.5px', color: 'var(--gray)', padding: '0 4px'}}>
    ※ 인공지능전공 나군, 디자인테크놀로지전공 종합·논술·정시는 모집인원 미반영 또는 별도 확인 필요
  </div>
</div>

<footer>
  <strong>부산대학교 SW중심대학</strong> — 대학 일반 현황 (Chapter 07)<br />
  <span style={{fontSize: '11px'}}>본 문서는 부산대학교 SW중심대학 사업 보고서를 기반으로 정리되었습니다.</span>
</footer>
