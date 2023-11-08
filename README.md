## Project Introduction

- This is Template for Front-End Developers who want to side project based on NextJs with StoryBook, Emotion, Husky

## Conventions

#### Coding Convention

- `변수`: camelCase
- `클래스`: CamelCase with Capital letter

#### Commit Message Convention

- `feat`: 새로운 기능 추가 및 변화된 요구사항에 따른 기존 기능 수정
- `fix`: 버그로 인한 코드 수정
- `doc`: 문서 및 주석 수정 (eg. README)
- `css`: css 작업
- `pkg`: package.json 변경
- `refactor`: 코드 리팩터링 (eg. 네이밍 변경 및 줄바꿈 등 기능과 상관없는 코드 수정)
- `ci`: CI/CD 관련 설정 수정
- `etc`: 이외 기타 사항 (상세히 기술)

## Tips

- Storybook 실행: 'yarn storybook'
- commit message 변경: '.husky/commit-msg'에서,, 'README' 파일도 업데이트 할 것.
- tsconfig.json 에서 path를 추가한다면, .storybook/main.ts 에도 추가해야 storybook에서 정상적으로 import 할 수 있음.
- - 참고: https://storybook.js.org/docs/react/builders/webpack#typescript-modules-are-not-resolved-within-storybook

## Tech Spec

- FrontEnd: Next(v13), React(v18), Emotion, StoryBook
- BackEnd:
- DB:
- CI/CD:
- etc: Husky
