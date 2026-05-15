# 부산대학교 AI융합교육원 온라인 브로슈어 (2026 AI Guidebook)

본 프로젝트는 부산대학교 AI융합교육원의 2026년도 사업 안내 및 성과 확산을 위해 제작된 **웹 기반 반응형 온라인 브로슈어**입니다. [Docusaurus 3](https://docusaurus.io/) 기반으로 구축되었으며, 자체 개발한 **웹 기반 CMS(관리자 에디터)**를 통해 코딩 지식 없이도 누구나 손쉽게 문서를 수정하고 배포할 수 있습니다.

## ✨ 1. 주요 기능 및 특징

1. **커스텀 디자인 및 반응형 레이아웃**
   - 기존의 딱딱한 문서 형태를 벗어나 화려한 애니메이션, 그라데이션, 다단 레이아웃(Columns) 등 브로슈어 특화 커스텀 컴포넌트(MDX)를 내장했습니다.
2. **웹 기반 실시간 에디터 (CMS)**
   - 로컬 환경이나 복잡한 설정 없이, 브라우저 상에서 `/admin/index.html`에 접속해 직관적으로 브로슈어를 수정하고 새 페이지를 생성할 수 있습니다.
   - **실시간 미리보기**: 마크다운 편집 시 Docusaurus의 실제 디자인(CSS)이 실시간으로 100% 동일하게 렌더링되는 프리뷰를 제공합니다.
3. **자동화된 1-Click 배포 시스템**
   - GitHub Actions와 연동되어 에디터에서 [저장 및 배포] 버튼을 누르는 즉시 자동으로 백그라운드 빌드 및 배포가 진행됩니다. (약 1~2분 소요)
4. **동적 스크롤 트래킹 (TOC Scroll Spy)**
   - 긴 브로슈어 문서를 쉽게 탐색할 수 있도록, 스크롤 위치를 추적하여 동적으로 하이라이트되는 지능형 플로팅 목차가 구현되어 있습니다.

## 🚀 2. 빠른 시작 (로컬 개발 가이드)

### 설치
```bash
$ npm install
```

### 로컬 서버 실행
```bash
$ npm run start
```
서버가 실행되면 `http://localhost:3000`에서 결과를 확인할 수 있습니다.
실시간 프리로드 기능을 지원하므로 마크다운 파일이나 CSS를 수정하면 브라우저에 즉시 반영됩니다.

### 컴포넌트 템플릿 사용
- 홈페이지의 우측 상단 메뉴 **`[브로슈어 목차] -> [템플릿 및 컴포넌트 가이드]`**를 클릭하면 브로슈어 작성에 즉시 복사해서 사용할 수 있는 UI 템플릿 코드를 확인할 수 있습니다.
- 관리자 에디터 상세 사용법과 전체 스펙은 레포지토리 내의 **`USER_GUIDE.md`**를 참고하세요.

## 🏗 3. 빌드 및 수동 배포

```bash
$ npm run build
```
빌드 시 `generateChapters.js` 스크립트가 실행되어 마크다운 문서들로부터 자동으로 통합 네비게이션 드롭다운 메뉴 및 홈 화면 카드 구성 데이터를 생성합니다.

## 🛠 4. 기술 스택 (Tech Stack)

- **Core Framework**: [Docusaurus 3.x](https://docusaurus.io/) (React 기반 정적 사이트 생성기)
- **Admin UI**: Vanilla JavaScript, Toast UI Editor, HTML5, CSS3
- **Content Management**: GitHub REST API (Git 기반 데이터베이스 역할)
- **CI/CD & Hosting**: GitHub Actions, GitHub Pages
- **Styling**: Custom CSS, Infima (Docusaurus 기본 테마 엔진)

## 📁 5. 주요 디렉토리 구조

```text
├── docs/                     # 실제 화면에 렌더링되는 마크다운(.md) 문서 저장소
├── src/
│   ├── components/           # 커스텀 React 컴포넌트 (예: Columns 다단 레이아웃)
│   ├── css/                  # 전역 CSS 스타일 및 테마 정의
│   ├── data/                 # 메인 화면 렌더링을 위한 챕터 데이터 (빌드 시 자동 생성)
│   └── pages/                # 커스텀 페이지 (메인 홈페이지 index.js 등)
├── static/
│   ├── admin/                # 비개발자용 웹 브라우저 기반 관리자 페이지 (CMS)
│   └── img/                  # 이미지, 파비콘 등 정적 에셋
├── scripts/
│   └── generateChapters.js   # docs 폴더를 분석하여 메인 화면 카드 데이터를 생성하는 빌드 스크립트
├── docusaurus.config.js      # 시스템 전역 설정 (동적 라우팅 및 테마 설정)
├── sidebars.js               # 좌측 네비게이션 바 메뉴 구조 정의
└── USER_GUIDE.md             # 상세 사용자 가이드
```
