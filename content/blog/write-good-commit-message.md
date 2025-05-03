---
title: '좋은 커밋을 작성하는 방법 - 첫번째'
description: 'Conventional Commits을 통해 일관된 커밋 메시지 작성'
date: '2025-05-04'
image: 'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tag: ['github']
---

## 좋은 커밋이란?

---

좋은 커밋이란, 미래의 나와 다른 사람이 내가 작성한 코드의 의도를 쉽게 이해할 수 있어야 한다. 이를 위한 첫 번째 단계로, **커밋 컨벤션**에 대해 알아보자.

## 커밋 메시지의 구조

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### type(scope)

---

타입은 아래의 단어들을 사용해 어떠한 종류의 커밋인지 표현한다.

스코프는 괄호로 둘러싸인 명사로 구성, 변경 사항의 영향을 받는 프로젝트의 특정 영역을 기재

`feat`: 새로운 기능을 추가 시 사용

```
feat(trial): 체험 수업 신청 폼 추가
```

`fix`: 버그 수정시 사용

```
fix(contact): 연락처 폼 전송 오류 수정
```

`style`: 스타일 수정, Tailwind에 대한 수정이 있을 때 사용

```
style(header): 로고 정렬 및 여백 조정
```

`docs`: 문서 작성

```
docs(readme): 개발 환경 설정 방법 추가
```

`test`: 테스트 추가 및 수정

```
test(contact): 무료 체험 시간 설정 테스트 추가
```

`refactor`: fix와 feat에 해당하지 않고, 코드 수정 시에 해당

```
refactor(layout): 헤더/푸터 구성 요소 정리
```

`perf`: 퍼포먼스 향상을 시키는 코드 변경

```
perf(image): 강사 사진 lazy loading 적용
```

`chore`: 정기적인 코드 유지보수 - 기능이나 동작에는 영향을 주지 않음

```
chore: Tailwind 설정 정리 및 불필요한 플러그인 제거
```

`build`: 빌드 시스템이나 외부 의존성에 영향을 주는 변경사항

```
build(nuxt): generate 설정 변경 및 output 경로 지정
```

`ci`: CI 설정 파일 및 스크립트에 대한 변경

```
ci(github): 배포 자동화를 위한 GitHub Actions 추가
```

### description

---

- 50자 이내로 작성한다
- 문장 끝에 마침표(구두점)를 붙이지 않는다
- 첫번째 글자는 대문자를 사용하지 않는다
- 명령형 현재 시제로 작성한다(예: change✅, changed❌, changes❌)

```
feat(button): add loading state to submit button
fix(api): handle null response from server
```

### body

---

본문에는 변경의 이유와 함께, 변경 전후의 동작 차이를 설명해야 한다.
아래 세 가지 항목을 포함하여, 왜 이러한 변경을 했는지 미래의 자신과 타인을 설득할 수 있어야 한다.

- before: 이전의 동작
- after: 이후의 동작
- why: 왜 이 방법으로 해결했는지 서술

### footer

---

footer에는 BREAKING CHANGE와 같은 중대한 변경 사항을 명시하며,
또한 이 커밋이 참조하거나 종료하는 GitHub 이슈를 함께 기록하는 곳이다.

```
feat(schedule)!: remove legacy timetable format

Replaced the old weekly schedule structure with a new flexible block-based format.

BREAKING CHANGE: The old 'timetable.json' structure is no longer supported.
All consumers must now use 'scheduleBlocks' format instead.

Refs: #123, #456
```

---

**참고**

- [Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
