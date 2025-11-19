# 개인 블로그

Next.js 기반의 개인 블로그입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
블로그/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 홈페이지
│   └── blog/         # 블로그 관련 페이지
├── components/       # React 컴포넌트
├── content/          # 마크다운 포스트
├── lib/              # 유틸리티 함수
├── public/           # 정적 파일
└── styles/           # 글로벌 스타일
```

## 블로그 포스트 작성

`content/` 디렉토리에 마크다운 파일을 추가하세요. 파일명이 URL 슬러그가 됩니다.

포스트 형식:
```markdown
---
title: 포스트 제목
date: 2024-01-01
description: 포스트 설명
---

포스트 내용...
```

