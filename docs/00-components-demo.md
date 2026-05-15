---
id: components-demo
title: "🎨 꾸미기 요소 데모"
sidebar_position: 0
theme: purple
description: 브로슈어를 예쁘게 꾸밀 수 있는 다양한 기능과 예시 모음
---

# 🎨 브로슈어 꾸미기 데모

이 문서는 관리자 페이지에서 텍스트를 작성하실 때 **단순한 글씨를 넘어서 예쁜 디자인 요소를 추가하는 방법**을 보여주는 샘플 문서입니다.

이 문서의 코드를 그대로 복사해서 다른 브로슈어에 활용해 보세요!

---

## 1. 하이라이트 (형광펜)

중요한 단어나 문장에 배경색을 칠해서 강조할 수 있습니다.
- 기본 색상: <Highlight>이것은 파란색 형광펜입니다.</Highlight>
- 노란색 색상: <Highlight color="#eab308">이것은 노란색 형광펜입니다.</Highlight>
- 빨간색 색상: <Highlight color="#ef4444">이것은 빨간색 형광펜입니다.</Highlight>

**코드 작성법:**
```mdx
중요한 단어는 <Highlight color="#eab308">이렇게 강조</Highlight> 하세요.
```

---

## 2. 알림 상자 (Callout)

중요한 공지나 경고사항 등을 박스 형태로 예쁘게 묶어서 보여줍니다. (종류별로 색상이 다릅니다)

:::info 공지사항
여기는 **안내문**이나 **공지사항**을 적는 파란색 박스입니다.
:::

:::tip 꿀팁
알아두면 좋은 정보나 **팁**을 적을 때 쓰는 초록색 박스입니다.
:::

:::warning 주의사항
원서 접수 마감일 등 **주의가 필요한 내용**을 적는 노란색 박스입니다.
:::

:::danger 경고
절대 해서는 안 될 행동 등 **경고문**을 적는 빨간색 박스입니다.
:::

**코드 작성법:**
```mdx
:::tip 꿀팁
이 안에 원하는 팁 내용을 적어주세요.
:::
```

---

## 3. 예쁜 버튼 (HeroButton)

클릭하면 다른 페이지나 사이트로 이동하는 예쁜 버튼을 만들 수 있습니다.

<HeroButton href="https://www.pusan.ac.kr">부산대학교 홈페이지 가기</HeroButton>
<HeroButton href="/docs/intro" outline={true}>안내서 홈으로 가기 (테두리 버튼)</HeroButton>

**코드 작성법:**
```mdx
<HeroButton href="링크주소">버튼 이름</HeroButton>
<HeroButton href="링크주소" outline={true}>테두리 버튼</HeroButton>
```

---

## 4. 탭 (Tabs)

여러 개의 내용을 메뉴(탭) 형식으로 나눠서 클릭할 때마다 바뀌게 만들 수 있습니다.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="🍎 사과" default>
    사과는 맛있는 빨간 과일입니다.
  </TabItem>
  <TabItem value="orange" label="🍊 오렌지">
    오렌지는 상큼한 비타민C 덩어리입니다.
  </TabItem>
  <TabItem value="banana" label="🍌 바나나">
    바나나는 노랗고 달콤합니다.
  </TabItem>
</Tabs>

**코드 작성법:**
```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="tab1" label="탭 이름 1" default>첫 번째 내용</TabItem>
  <TabItem value="tab2" label="탭 이름 2">두 번째 내용</TabItem>
</Tabs>
```

---

## 5. 다단 레이아웃 (Columns)

화면을 2칸, 3칸으로 쪼개서 볼 수 있습니다. (PC에서 효과적입니다)

<Columns>
  <Col>
  
  **✅ 인공지능 기초**
  - 파이썬 프로그래밍
  - 데이터 분석 기초
  - 기계학습 원리
  
  </Col>
  <Col>
  
  **🚀 인공지능 심화**
  - 딥러닝과 신경망
  - 컴퓨터 비전
  - 자연어 처리
  
  </Col>
</Columns>

**코드 작성법:**
```mdx
<Columns>
  <Col>
  
  첫 번째 칸 내용
  
  </Col>
  <Col>
  
  두 번째 칸 내용
  
  </Col>
</Columns>
```
