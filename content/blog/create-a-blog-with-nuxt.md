---
title: 'Nuxt와 GitHub Pages로 블로그 만들기'
description: 'GitHub Pages와 커스텀 도메인으로 나만의 Nuxt 블로그를 구축하기'
date: '2025-04-24'
image: 'https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tag: ['nuxt', 'github']
---

## 1. NUXT 어플리케이션 준비

### 1.1 NUXT 어플리케이션 빌드

```bash
npm create nuxt <project-name>
```

프로젝트 생성 후에 `app.vue`파일에 `Hello World`처럼 간단한 문구를 추가한다. 이번 글에서는 커스텀 도메인 접속 시에 "Hello World" 문구가 정상적으로 표시되는 것을 확인하는 것이 목표이다. 블로그에 글을 올리는 것에 대해서는 추후 새로운 글에서 다루고자 한다.

```html
<template>
  <h1>Hello World</h1>
</template>
```

### 1.2 GitHub Actions 워크플로우 설정

1. 프로젝트에 아래의 경로에 `deploy.yml`을 추가한다.

```
.github/workflows/deploy.yml
```

2. `.github/workflows/deploy.yml`에 다음 내용을 추가한다.

(참고: [Nuxt 공식 문서 - GitHub Pages](https://nuxt.com/deploy/github-pages))

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

## 2. GitHub 설정

### 2.1 레포지토리 설정

GitHub Pages를 사용하기 위해 레포지토리를 생성한다.

(참고: [깃허브 공식 문서 - Quickstart for GitHub Pages](https://docs.github.com/ja/pages/quickstart))

::WarningBlock
레포지토리 이름은 `<repository명>.github.io` 형식으로 지정해야 한다.
::

### 2.2 GitHub 환경변수 등록

환경 변수는 레포지토리에 들어간 후에 아래의 경로를 따라 등록한다.

> Settings > Secrets and variables > Actions > Variables > New repository variable

![image](https://github.com/seungseung88/seungseung88.github.io/blob/main/image/create-a-blog-with-nuxt/github-variable-config-1.png?raw=true)

등록할 값

- Name: `NUXT_APP_BASE_URL`
- Value: `/`

![image](https://github.com/seungseung88/seungseung88.github.io/blob/main/image/create-a-blog-with-nuxt/github-variable-config-2.png?raw=true)

::InfoBlock
만약 GitHub 기본 도메인 <repository명>.github.io를 그대로 사용할 경우,
Value를 /repository명/으로 설정하면 된다.
(이 경우, 이후 커스텀 도메인 설정 과정은 생략 가능)
::

## 3. 커스텀 도메인 준비

### 3.1 お名前.com에서 도메인 구매

- [お名前.com](https://www.onamae.com)에서 원하는 도메인을 입력 후 구입한다. 웬만하면 1년 무료나 싼 도메인을 고르자. 난 가난해서 1년 동안 무료인 도메인 명으로 등록했다 ㅋㅋ

- 도메인 구매 시에 렌탈 서버를 사라고 하는데 우리는 이미 깃허브 페이지를 통해 블로그를 배포하므로 필요없다.

### 3.2 구매한 도메인의 DNS 서버 설정(A 레코드, CNAME 레코드)

::SuccessBlock
우선 A 레코드, CNAME 레코드를 등록하는 이유를 알아보자

웹사이트에 접속은 실제로 IP 주소를 기반으로 이루어진다. 하지만, 긴 IP 주소를 매번 기억하고 입력하는 것은 매우 번거롭기 때문에, 쉽게 외울 수 있는 도메인 이름을 사용해 사이트에 접속한다.

첫 번째 단계(3.1)에서는 도메인 이름만 구매했다. 하지만 도메인 이름만 가지고는 어떤 서버로 접속해야 하는지 알 수 없다.

그래서 필요한 것이 바로 DNS 설정이다. DNS를 통해 우리가 구매한 도메인 이름이 실제 서버의 IP 주소를 가리키도록 연결해줘야 한다.

## A 레코드와 CNAME 레코드

| 종류             | 설명                                                                                            |
| :--------------- | :---------------------------------------------------------------------------------------------- |
| **DNS**          | `seung-seung.com` 같은 도메인 이름을 `192.168.10.1` 같은 IP 주소로 변환해주는 서비스            |
| **A 레코드**     | 도메인 이름을 직접 IP 주소에 연결하는 방법 <br>예: `seung-seung.com` → `192.168.10.1`           |
| **CNAME 레코드** | 도메인 이름을 다른 도메인 이름에 연결하는 방법 <br>예: `seung-seung.com` → `username.github.io` |

::

이유를 알았으니, お名前.com에서 DNS 레코드를 설정해보자

1. 다음 경로로 이동

> [お名前ナビ](https://navi.onamae.com) 에 로그인 > ネームサーバー/DNS 클릭 > ドメイン DNS 設定 클릭 > 도메인 목록에서 DNS レコード設定 버튼 클릭

![image](https://github.com/seungseung88/seungseung88.github.io/blob/main/image/create-a-blog-with-nuxt/onamae-dns-config-1.png?raw=true)

2. A 레코드 추가

(참고: [GitHub 공식 문서 - Apex ドメインを設定する](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain))

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

3. CNAME 레코드도 추가

- 호스트명: `www`
- 값(Value): `<repository명>.github.io`

![image](https://github.com/seungseung88/seungseung88.github.io/blob/main/image/create-a-blog-with-nuxt/onamae-dns-config-2.png?raw=true)

## 4. GitHub Pages 커스텀 도메인 등록

아래의 경로로 이동해 GitHub 레포지토리 설정에서 커스텀 도메인을 등록한다.

> Settings > Pages > Custom domain

![image](https://github.com/seungseung88/seungseung88.github.io/blob/main/image/create-a-blog-with-nuxt/github-custom-domain.png?raw=true)

정상적으로 설정되었다면,
브라우저에서 커스텀 도메인 접속 시 "Hello World" 화면이 보일 것이다.

# 최종 정리

- ✅ Nuxt 프로젝트 생성 및 초기 세팅
- ✅ GitHub Actions로 자동 배포 워크플로우 작성
- ✅ GitHub 환경변수 등록
- ✅ お名前.com에서 도메인 구매 및 DNS 연결
- ✅ GitHub Pages에 커스텀 도메인 등록
