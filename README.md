# **TEAM3 - 다이닝 예약 웹서비스**

## 📌 **Stack**

React, TypeScript, Style-Components

<br>

## 🎨 **UI/UX**

- [UI](<https://www.figma.com/file/nYOFEN9P3gkQjose5IsAOb/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B7%B0(page-view)?node-id=0%3A1>)
- [UX-와이어프레임](https://www.figma.com/file/hRU3MEFfLbzvmrZPO9ydnK/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1)
- [UX-기능정의서 & IA](https://docs.google.com/spreadsheets/d/1If_DiGqzzMLq2RoYxdmxknQlypDzHpWkzbWGPazsW0c/edit?usp=sharing)

<br>

## 🚙 **Initial Setting**

client, server 환경이 각자 구분되어 있어서 해당 작업 폴더로 들어가서 서버를 구동해야 한다.

```
cd ./client or cd ./server
npm i
npx prettier --write ".prettierrc.json" // prettier 설정
npm run start
```

## 🖥 **Client**

<br>

### **Client Architecture**

```
client
├─ public
│  ├─ images
│  │  ├─ favicon
│  ├─ index.html
│  └─ robots.txt
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ atoms
│  │  ├─ molecules
│  │  └─ oranisms
│  ├─ index.tsx
│  └─ pages
```

- client/public => static 파일 폴더
- clent/src/api => api 파일 폴더
- client/src/componets => components 파일 폴더 : atomic design pattern
  - client/src/componets/atoms => 인터페이스를 구성하는 기본 HTML 태그 구성
  - client/src/componets/molecules => atmos를 기반으로 결합하여 하나의 분자(inputSearch, menuItem) 생성
  - client/src/componets/oranisms => molecules를 기반으로 하나의 유기체(header, footer) 생성
- client/constants => 상수 파일 폴더
- client/src/pages => router에 연결되는 page 파일 폴더
- client/src/redux => redux 파일 폴더

[Atomic Design Pattern 관련 내용 바로가기 - 개념](https://brunch.co.kr/@ultra0034/63)<br>
[Atomic Design Pattern 관련 내용 바로가기 - 활용](https://yeoulcoding.me/m/220)
<br><br>

### **Client Folder & File Naming**

- ui 구성을 이루는 components, pages => PascalCase
- 그외 나머지 파일은 => camelCase
  <br><br>

## 🗄 Server

<br>

### **Title**

내용적기
