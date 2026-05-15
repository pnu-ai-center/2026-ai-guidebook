# 부산대학교 AI융합교육원 온라인 브로슈어 통합 관리 시스템

본 프로젝트는 부산대학교 AI융합교육원의 다양한 브로슈어와 안내서를 효율적으로 생성하고 관리하기 위해 개발된 템플릿 기반의 웹 애플리케이션입니다.

## 1. 프로젝트 개요 및 기획 배경

기존의 PDF 기반 브로슈어는 내용 수정이 어렵고, 모바일 환경에서 가독성이 떨어지며, 배포 후 업데이트가 불가능하다는 단점이 있었습니다. 이를 해결하기 위해 개발자 개입 없이도 비개발자(실무자)가 손쉽게 내용을 관리하고, 즉각적으로 웹에 배포할 수 있는 **문서 기반 동적 웹사이트 시스템**을 기획하였습니다.

### 기대 효과
- **유지보수 효율성 극대화**: 마크다운(Markdown) 작성만으로 즉시 웹사이트가 업데이트됩니다.
- **다중 브로슈어 관리**: 하나의 관리자 시스템에서 여러 레포지토리(브로슈어)를 동적으로 전환하며 관리할 수 있습니다.
- **반응형 웹 디자인 보장**: 모바일과 데스크톱을 모두 지원하는 현대적인 UI/UX를 기본적으로 제공합니다.
- **제로(Zero) 운영 비용**: GitHub Pages와 GitHub Actions를 활용하여 서버 호스팅 비용 없이 운영됩니다.

## 2. 기술 스택 (Tech Stack)

- **Core Framework**: [Docusaurus 3.x](https://docusaurus.io/) (React 기반 정적 사이트 생성기)
- **Admin UI**: Vanilla JavaScript, HTML5, CSS3
- **Content Management**: GitHub REST API (Git 기반 데이터베이스 역할)
- **CI/CD & Hosting**: GitHub Actions, GitHub Pages
- **Styling**: Custom CSS, Infima (Docusaurus 기본 테마 엔진)

## 3. 시스템 동작 아키텍처

1. **템플릿 레포지토리 활용**: 본 레포지토리(`2026-ai-guidebook`)는 GitHub Template으로 설정되어 있습니다. 새로운 브로슈어 생성 시 이 템플릿을 복제하여 사용합니다.
2. **동적 환경 설정**: `docusaurus.config.js`가 빌드 시 `GITHUB_REPOSITORY` 환경 변수를 인식하여 `baseUrl`과 `projectName`을 자동으로 설정하므로, 레포지토리 이름이 변경되어도 코드를 수정할 필요가 없습니다.
3. **Admin UI 통신**: 관리자 페이지(`static/admin/index.html`)는 사용자의 GitHub Personal Access Token(PAT)을 이용하여 브라우저 상에서 직접 GitHub API와 통신합니다. 서버 릴레이 없이 파일 업로드, 수정, 삭제가 즉시 커밋됩니다.
4. **자동 배포 파이프라인**: Admin UI를 통해 파일이 커밋되면 GitHub Actions가 이를 감지하여 Docusaurus 빌드를 수행하고, 결과물을 `gh-pages` 브랜치에 배포하여 최종 웹사이트를 갱신합니다.

## 4. 주요 디렉토리 구조

```text
├── docs/                     # 실제 화면에 렌더링되는 마크다운(.md) 문서 저장소
├── src/
│   ├── components/           # 커스텀 React 컴포넌트 (예: Columns 다단 레이아웃)
│   ├── css/                  # 전역 CSS 스타일 및 테마 정의
│   ├── data/                 # 메인 화면 렌더링을 위한 챕터 데이터 (빌드 시 자동 생성)
│   └── pages/                # 커스텀 페이지 (메인 홈페이지 index.js 등)
├── static/
│   ├── admin/                # 비개발자용 웹 브라우저 기반 관리자 페이지
│   └── img/                  # 이미지, 파비콘 등 정적 에셋
├── scripts/
│   └── generateChapters.js   # docs 폴더를 분석하여 메인 화면 카드 데이터를 생성하는 빌드 스크립트
├── docusaurus.config.js      # 시스템 전역 설정 (동적 라우팅 및 테마 설정)
└── sidebars.js               # 좌측 네비게이션 바 메뉴 구조 정의
```

## 5. 관리자 시스템 (Admin UI) 주요 기능

- **다중 레포지토리 지원**: 조직(Organization) 내에 생성된 다른 템플릿 기반 브로슈어 레포지토리 이름을 입력하여 즉시 타겟을 변경할 수 있습니다.
- **드래그 앤 드롭 업로드**: `.md` 파일을 드래그하여 간편하게 일괄 업로드 및 자동 배포할 수 있습니다.
- **메타데이터 인라인 편집**: 마크다운 파일 내부의 Frontmatter(순서, 제목, 테마 등)를 코드 수정 없이 팝업 모달에서 직관적으로 수정할 수 있습니다.
- **실시간 로그 및 에러 핸들링**: 통신 상태와 배포 진행 상황을 실시간으로 터미널 형태의 로그 뷰어로 제공합니다.
