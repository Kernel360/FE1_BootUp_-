# FE1_BOOTUP_YEJIN

## 📋 수행 내용

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

3. 리액트 개발 환경 처음부터 세팅하기

    - React 설치
    - Babel 및 관련 패키지 설치
        - babel-loader
        - @babel/core
        - @bable/preset-env
        - @babel/preset-react
    - webpack 설치 및 연동
        - webpack cli
        - html-webpack-plugin
        - webpack-dev-server

4. 세팅한 리액트 개발환경으로 프로젝트 포팅하기
    - 기존 프로젝트 react로 변경
    - css loader 연동

## 🔥 어려웠던 점

-   **DOM-Manipulation**
    -   getElementsByClassName 을 활용하여 for 문을 사용하는 부분에서 어려움이 있었음
    -   for문 안에는 className을 다른 className으로 바꾸는 로직이 있었음
    -   원하는 className을 가진 태그들을 찾은 후 따로 변수 처리하지 않고 for 문에서 바로 사용했기 때문에 for문 안 로직이 끝날 때 마다 className 을 가진 태그 리스트가 변화 함
    -   for 문 조건에 사용되는 className 태그들의 집합이 계속 변화하기 때문에 원하는대로 로직이 수행되지 않았음
    -   디렉터님의 도움으로 해결 할 수 있었음
-   **Babel & Webpack**
    -   config 파일을 작성하는 것이 어려웠음
    -   공식 문서를 보고 config 파일을 작성해본 것이 처음이라 어려웠던 것 같음
-   **리액트 개발 환경 처음부터 세팅하기**
    -   설치한 모든 패키지를 로컬에 맞게 설정해야 한다는 점이 어려웠음
        => html-webpack-plugin의 경우, 로컬에서 만든 index.html을 option에 지정해주어야 했음
    -   설정에 어긋나는 것이 있을 때 아무런 경고 메세지도 뜨지 않아 디버깅 하는 과정이 어려웠음
-   **세팅한 리액트 개발환경으로 프로젝트 포팅하기**
    -   cra로 리액트 세팅했을 때 신경쓰지도 않았던 부분들을 신경써주어야 했음
        => React, ReactDOM을 import해주지를 않아 에러가 났었음
    -   ReferenceError: React is not defined
        => [stackoverflow](https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined)
        => {"runtime": "automatic"} 추가해줌. runtime 옵션은 어떤 것을 런타임 때 사용할 것인지 결정할 수 있고, automatic은 jsx 트랜스파일 해주는 함수를 자동으로 import 해주는 기능임

## 📝 새롭게 알게된 점

-   DOM
    -   DOM은 HTML을 트리 형식으로 만든 자바스크립트 객체
-   babel
    -   버전이 다른 JS를 상호 호환하기 위해서 사용. 높은 버전의 JS를 낮은 버전의 JS로 변경시켜줌
    -   버전이 낮은 브라우저에서도 코드가 실행가능하게 해 줌
-   webpack
    -   모던 JavaScript 어플리케이션을 위한 정적 모듈 번들러
    -   코드를 여러 개의 번들로 분할하여 필요한 번들만 가져다 쓸 수 있음 ⇒ 로딩 시간 단축
    -   다양한 형식의 파일들을 처리하고 변환할 수 있음
    -   웹 애플리케이션의 성능, 크기, 그리고 기능성을 향상시킬 수 있음
-   cra로 만든 리액트 앱에서 설정 없이 빌드가 가능했던 이유? cra가 babel과 webpack을 install 했기 때문
-   for 문 안 조건은 변화하지 않는 변수를 사용해야 함
-   babel, webpack config 파일 설정 방법
-   cra에서는 많은 webpack 패키지들을 설치해준다는 것을 알게됨
    -   html도 webpack을 사용한다면 패키지가 필요함
    -   css도 패키지가 필요함
-   npm start 로 화면에 html이 렌더링 되는 것은 webpack-dev-server를 이용하여 가능하다는 것을 알게됨

## 🫠 단계를 진행하며 느낀점

1. 요구사항 잘 읽기

    - 요구사항만 잘 읽었어도, 시간을 1시간은 아낄 수 있었음🥹

2. 원리를 이해하며 프로젝트를 작성하는 게 좀 어려웠음

    - 따로 webpack, babel에 대해 공부가 필요할 것 같음

3. 공식문서를 볼 때도 생각하면서 보기
    - 공식문서에 있는 설정 방법으로 로컬에 적용할 때 아무생각 없이 ctrl c + v 하면 안되는 경우도 있음을 기억할 것
    - 어떤 옵션을 어떻게 써야 하는지도 스스로 생각해야 함. 왜 이런 기능이 있는지, 어떤 기능을 위한 옵션인지 설명이 되어 있으므로, 꼼꼼하게 읽어 실수를 줄이도록 노력해야 함

## 실행 사진

-   프로젝트 실행 화면

<img src="https://github.com/user-attachments/assets/899feee7-2c4d-40c8-a9c7-8a7cd5e26774" width="700" height="400"/>
