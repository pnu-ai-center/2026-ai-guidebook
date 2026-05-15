---
id: template
title: "템플릿 및 컴포넌트 가이드"
sidebar_position: 99
theme: blue
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

  /* 템플릿 전용 커스텀 스타일이 필요하다면 이곳에 추가하세요 */
`}</style>

<div className="hero fade-up">
  <div className="hero-grid" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    <div className="hero-content">
      <span className="hero-badge">컴포넌트 가이드</span>
      <h1 className="hero-title">
        매력적인 브로슈어 <br/>
        <span className="highlight-text">손쉽게 만들기</span>
      </h1>
      <p className="hero-desc">
        이 페이지는 브로슈어 작성에 사용할 수 있는 다양한 UI 컴포넌트의 모음입니다.<br/>
        원하는 디자인을 복사하여 새 문서에 붙여넣어 사용하세요.
      </p>
    </div>
  </div>
</div>

## 1. 하이라이트 & 강조 텍스트

기본적인 마크다운 문법 외에도 글자를 예쁘게 강조할 수 있습니다.

- <Highlight color="#1651c8">파란색 하이라이트</Highlight>
- <Highlight color="#e84b35">빨간색 하이라이트</Highlight>
- <Highlight color="#27c0a4">민트색 하이라이트</Highlight>

> **[참고]** 마크다운 인용구(`>`)를 사용하면 이렇게 깔끔한 박스 형태로 표시됩니다.

---

## 2. 2단 / 3단 반응형 다단 레이아웃 (Columns)

PC에서는 가로로 나란히, 모바일에서는 세로로 차곡차곡 쌓이는 반응형 레이아웃입니다.

<Columns>
  <Column>
    <h3>✨ 첫 번째 컬럼</h3>
    <p>여기에 첫 번째 내용을 적습니다. 사진이나 표를 넣어도 좋습니다.</p>
  </Column>
  <Column>
    <h3>🚀 두 번째 컬럼</h3>
    <p>가운데에 들어가는 내용입니다. <code>&lt;Columns&gt;</code> 컴포넌트는 알아서 공간을 분배합니다.</p>
  </Column>
  <Column>
    <h3>🎯 세 번째 컬럼</h3>
    <p>오른쪽에 들어가는 내용입니다. 3단 레이아웃도 문제 없습니다.</p>
  </Column>
</Columns>

---

## 3. 단계별 추진 로드맵 (Phase Blocks)

시간 순서대로 진행되는 단계나 중요한 구역을 나눌 때 사용하기 좋은 블록 디자인입니다.

<div className="phase-block fade-up">
  <div className="phase-block-header">
    <h3>1단계: 기반 구축 및 혁신 (STEP 1)</h3>
    <span className="period-tag">2023–2024</span>
  </div>
  <div className="phase-block-body">
    <div className="area-group">
      <div className="area-label">교육 부문</div>
      <ul className="item-list">
        <li>전공트랙 신설 및 교육과정 개편</li>
        <li>최신 기술(AI, 메타버스 등) 인프라 도입</li>
      </ul>
    </div>
    <div className="area-group">
      <div className="area-label">산학 부문</div>
      <ul className="item-list">
        <li>지역 기업 연계 프로젝트 발굴</li>
        <li>문제해결형 플랫폼 구축 완료</li>
      </ul>
    </div>
  </div>
</div>

<div className="phase-block pb2 fade-up" style={{ marginTop: '30px' }}>
  <div className="phase-block-header">
    <h3>2단계: 성과 고도화 (STEP 2)</h3>
    <span className="period-tag">2025–2026</span>
  </div>
  <div className="phase-block-body">
    <div className="area-group">
      <div className="area-label">확산 부문</div>
      <ul className="item-list">
        <li>부울경 지역으로 우수사례 확산</li>
        <li>맞춤형 인재 배출 및 취업 연계 90% 달성</li>
      </ul>
    </div>
  </div>
</div>

---

## 4. 눈에 띄는 통계 수치 (Data Highlights)

숫자를 강조해서 보여줘야 할 때 매우 유용한 레이아웃입니다.

<Columns>
  <Column>
    <div style={{ background: '#f5f8ff', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #d8e4f4' }}>
      <div style={{ fontSize: '36px', fontWeight: '900', color: '#1651c8', marginBottom: '8px' }}>+43.3%</div>
      <div style={{ fontSize: '15px', color: '#667799', fontWeight: '600' }}>SW전공정원 대폭 증원</div>
    </div>
  </Column>
  <Column>
    <div style={{ background: '#f5f8ff', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #d8e4f4' }}>
      <div style={{ fontSize: '36px', fontWeight: '900', color: '#27c0a4', marginBottom: '8px' }}>21,302㎡</div>
      <div style={{ fontSize: '15px', color: '#667799', fontWeight: '600' }}>최첨단 교육시설 확충</div>
    </div>
  </Column>
</Columns>

<br/><br/>

### 💡 사용 방법
1. 위 코드를 복사(Ctrl+C)합니다.
2. 관리자 페이지(`우측 상단 톱니바퀴` -> `새 문서 작성`)를 엽니다.
3. `Markdown` 탭에 붙여넣기(Ctrl+V) 한 뒤, 원하는 텍스트만 쏙쏙 바꿔서 사용하세요!
