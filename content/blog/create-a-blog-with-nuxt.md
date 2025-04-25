---
title: 'Nuxt와 Github-Page로 블로그 만들기'
description: 'Nuxt와 Github-Page, 그리고 お名前.com에서 Domain구입해 커스텀 도메인으로 블로그 만드는 방법 소개'
date: '2025-04-24'
image: 'https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tag: ['nuxt', 'github']
---

## 이번 목표

- 커스텀 도메인으로 블로그에 접속

## 1. NUXT 어플리케이션 설정

### 1.1. NUXT 어플리케이션 빌드

```
npm create nuxt <project-name>
```

프로젝트가 생성되면 `app.vue`에 `Hello World`를 추가한다.

```
<template>
    <h1>Hello World</h1>
</template>
```

### 1.2. NUXT 깃허브 액션 워크플로우 생성

1. 프로젝트에 아래의 경로에 deploy.yml을 추가한다.

```
.github/workflows/deploy.yml
```

2. `.github/workflows/deploy.yml`에 다음 내용을 추가한다

[Nuxt 공식 문서 참고](https://nuxt.com/deploy/github-pages)

```yaml
# https://github.com/actions/deploy-pages#usage
name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: corepack enable
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      # Pick your own package manager and build script
      - run: npm install
      - run: npx nuxt build --preset github_pages
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.output/public
  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build
    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source
    # Deploy to the github_pages environment
    environment:
      name: github_pages
      url: ${{ steps.deployment.outputs.page_url }}
    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 2. 커스텀 도메인 구입하기

### 2.1 お名前.com에서 도메인 검색 및 구매

- [お名前.com](https://www.onamae.com)에서 원하는 도메인을 입력 후 구입한다.웬만하면 1년 무료나 싼 도메인을 고르자.. 난 가난해서 1년 동안 무료인 도메인 명으로 등록했다.

- 도메인 구매 시에 렌탈 서버를 사라고 하는데 우리는 이미 깃허브 페이지를 통해 블로그를 배포하므로 필요없다.

### 2.2 구매한 도메인의 DNS 서버 설정, A레코드,CNAME레코드 등록

우선 등록하는 이유를 알아보자

도메인을 구해했더라도, 도메인 이름만으로는 웹사이트에 접속할 수 없다.
도메인이 실제 서버의 IP주소를 가리키도록 DNS설정이 필요하다.
그래서 GitHub 페이지에 연결하려면 IP주소나 도메인 정보를 DNS에 등록해줘야 한다.

**DNS**란, `seung-seung.com`이라는 문자열 주소를 `192.168.10.1`와 같은 IPv4 주소로 변환해주는 서비스이다.

**A레코드**는, DNS에 저장되는 정보의 타입으로 도메인 주소와 서버의 IP주소를 직접 매핑 시키는 방식이다. 예를 들어, `seung-seung.com`은 `192.168.10.1`로 매핑된다.

**CNAME**레코드는, 도메인 주소를 또 다른 도메인 주소로 매핑한다. 원래 깃허브 페이지에는 기존 사용할 수 있는 도메인이 있다. `username.github.io`그래서 우리가 만든 커스텀 도메인이 해당 도메인으로 매핑되게 한다.

이유를 알았으니, お名前.com에서 DNS 레코드를 설정해보자

1. 다음 경로로 이동

- https://navi.onamae.com에 로그인 → ネームサーバー/DNS → ドメイン DNS 設定 → ドメイン DNS → DNS レコード設定

2. [GitHub 공식 문서](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)의 "Apex ドメインを設定する" 섹션 5번을 참고해 A 레코드를 추가

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

3. CNAME 레코드도 추가

- ホスト名에 www를 추가한 후 value에 {{자신의 레포지토리 이름}}.github.io를 추가

4. 설정을 완료

## 3. GitHub

### 3.1 GitHub 레포지토리 설정

GitHub Pages를 사용하기 위해 레포지토리를 생성한다.

- [GitHub Pages 공식 문서](https://docs.github.com/ja/pages/quickstart)를 참조하자
- **중요**: 레포지토리 이름은 반드시 `username.github.io` 형식으로 지정해야 한다 (여기서 `username`은 본인의 GitHub 사용자 이름이다)

### 3.2 GitHub 환경변수 등록

아래의 경로로 이동

- setting -> 왼쪽 사이드바의 secrets and variables 클릭 -> Actions -> variables탭 선택 -> new repository variable 초록 버튼 클릭

- Name에 NUXT_APP_BASE_URL을 입력 후, Value에 /를 입력 후에 저장

### 3.3 GitHub 커스텀 도메인 등록

아래의 경로로 이동

- settings -> 왼쪽 사이드바의 pages 클릭 -> Custom domain에 우리가 등록한 도메인을 입력 후 저장

# 마무리

- 로컬에서 만든 Nuxt App을 깃허브 리포지토리로 Push하자 그러면 우리가 등록한 도메인 명으로 접속이 가능할 것이다!
