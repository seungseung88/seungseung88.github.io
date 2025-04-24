---
title: 'Nuxt와 Github-Page로 블로그 만들기'
description: 'Nuxt와 Github-Page, 그리고 お名前.com에서 Domain구입해 커스텀 도메인으로 블로그 만드는 방법 소개'
date: '2025-04-24'
image: 'https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tag: ['nuxt', 'github']
---

# Nuxt와 Github Pages로 블로그 만들기

이 글에서는 Nuxt 3와 Github Pages를 사용하여 개인 블로그를 만들고, お名前.com에서 커스텀 도메인을 구입하여 연결하는 방법을 단계별로 설명합니다.

## 1. 준비 단계

### 1.1. Nuxt 프로젝트 생성하기

먼저 Nuxt 프로젝트를 생성합니다:

```
npm create nuxt <project-name>
```

프로젝트가 생성되면 `app.vue`에 간단한 내용을 추가해 봅시다:

```
<template>
  <div>
    <h1>Hello World</h1>
    <p>My Nuxt 3 Blog</p>
  </div>
</template>
```

아래는 초기 화면의 예시입니다:

![Nuxt 초기 화면](https://github.com/user-attachments/assets/fcba47ce-7069-447a-8c4e-168fde108677)

### 1.2. GitHub 레포지토리 생성

GitHub Pages를 사용하기 위해 레포지토리를 생성합니다:

1. [GitHub Pages 공식 문서](https://docs.github.com/ja/pages/quickstart)를 참조하세요
2. "Web サイトの作成" 섹션의 1~11번 단계를 따라주세요
3. **중요**: 레포지토리 이름은 반드시 `username.github.io` 형식으로 지정해야 합니다 (여기서 `username`은 본인의 GitHub 사용자 이름입니다)

## 2. 커스텀 도메인 구입하기

### 2.1. お名前.com에서 도메인 검색 및 구매

[お名前.com](https://www.onamae.com)에서 원하는 도메인을 구입합니다:

1. 원하는 도메인명으로 검색합니다

   ![도메인 검색](https://github.com/user-attachments/assets/0381f141-9b28-47f1-a740-c6cca134940f)

2. 적절한 도메인을 선택합니다. 예를 들어, `young-young.net`은 첫 해에 무료로 제공됩니다

   ![도메인 선택](https://github.com/user-attachments/assets/98f0d525-2d46-46dd-9490-dfad21e13a7f)

3. 렌탈 서버가 필요 없으므로 가장 아래 옵션을 선택합니다

   ![렌탈 서버 없음 선택](https://github.com/user-attachments/assets/308f97ae-a40b-44fe-ad49-af237149cd1d)

4. 구매 절차를 진행합니다 (렌탈 서버 권유는 무시해도 됩니다)

## 3. 블로그 배포하기

### 3.1. DNS 서버 설정

お名前.com에서 DNS 설정을 합니다:

1. 다음 경로로 이동합니다: ネームサーバー/DNS → ドメイン DNS 設定 → ドメイン DNS → DNS レコード設定

   ![DNS 설정 메뉴](https://github.com/user-attachments/assets/922dfacf-93fc-4062-8f2e-1637336011b1)

2. GitHub 공식 문서의 "Apex ドメインを設定する" 섹션 5번에 나온 것처럼 A 레코드를 추가합니다. 다음 IP 주소를 사용하세요:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. CNAME 레코드도 추가합니다.

4. 설정을 완료합니다

   ![DNS 설정 완료](https://github.com/user-attachments/assets/6f9aea32-506f-4dfb-9f11-3f5220729896)

### 3.2. Nuxt 프로젝트 GitHub Pages 설정

1. 프로젝트에 GitHub Actions 워크플로우 파일을 추가합니다:

```bash
mkdir -p .github/workflows
```

2. `.github/workflows/deploy.yml` 파일을 생성하고 다음 내용을 추가합니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm ci
      - run: npm run build
        env:
          NUXT_APP_BASE_URL: /

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

이제 GitHub 레포지토리에 변경사항을 푸시하면 자동으로 GitHub Pages에 배포됩니다!

## 4. 마무리 및 주의사항

- GitHub Pages 설정에서 커스텀 도메인을 추가하는 것을 잊지 마세요
- HTTPS 설정을 활성화하면 보안이 강화됩니다
- DNS 변경사항이 적용되기까지 최대 24시간이 소요될 수 있습니다
