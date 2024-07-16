# FE1_BOOTUP_YEJIN

## 수행 내용

1. DOM-Manipulation 과제 수행

    - 새로고침 할 때마다 1에서 16까지 총 16개의 사각형이 Grid 형태로 화면에 표시됨
    - 사각형들을 포함하는 element의 `id`속성은 `container`로 지정
    - 각 사각형은 `id-<번호>` 형태의 `id` 속성을 가짐. (예: `id-1`, `id-2`)
    - 각 사각형은 red, green, blue 중 하나의 배경 색을 랜덤으로 가짐
    - CSS class 이름은 각각 `bg-red`, `bg-green`, `bg-blue`
    - 각 사각형은 bold, italic, strike, underline 중 하나의 텍스트 스타일을 랜덤으로 가짐
    - CSS class 이름은 각각 `text-bold`, `text-italic`, `text-strike`, `text-underline`
    - DOM Manipulation을 통해 기능이 작동하도록 이벤트 핸들러 구현
        - 특정 ID 값에 해당되는 사각형의 배경색을 변경하는 기능
        - 특정 class를 가진 사각형들의 텍스트 스타일을 한 번에 변경하는 기능
        - 특정 selector에 해당되는 사각형들의 스타일을 한 번에 초기화 하는 기능

2. Babel & Webpack 과제 수행
    - Babel, 관련 라이브러리 설치 및 설정 파일 작성
    - Webpack, 관련 라이브러리 설치 및 설정 파일 작성

## 어려웠던 점

1. DOM-Manipulation

    - getElementsByClassName 을 활용하여 for 문을 사용하는 부분에서 어려움이 있었음
    - for문 안에는 className을 다른 className으로 바꾸는 로직이 있었음.
    - 원하는 className을 가진 태그들을 찾은 후 따로 변수 처리하지 않고 for 문에서 바로 사용했기 때문에 for문 안 로직이 끝날 때 마다 className 을 가진 태그 리스트가 변화 함
    - for 문 조건에 사용되는 className 태그들의 집합이 계속 변화하기 때문에 원하는대로 로직이 수행되지 않았음
    - 디렉터님의 도움으로 해결 할 수 있었음

2. Babel & Webpack
    - config 파일을 작성하는 것이 어려웠음
    - 공식 문서를 보고 config 파일을 작성해본 것이 처음이라 어려웠던 것 같음

## 새롭게 알게된 점

1. for 문 안 조건은 변화하지 않는 변수를 사용해야 함
2. babel, webpack config 파일 설정 방법

## 단계를 진행하며 느낀점

1. 요구사항 잘 읽기

    - 요구사항만 잘 읽었어도, 시간을 1시간은 아낄 수 있었음🥹

2. 원리를 이해하며 프로젝트를 작성하는 게 좀 어려웠음
    - 따로 webpack, babel에 대해 공부가 필요할 것 같음
