import "./assets/main.css"; // .css 파일을 모듈처럼 임포트함

import { createApp } from "vue"; // createApp 함수를 임포트
import App from "./App.vue"; // App 컴포넌트를 임포트한 후 6행에서 App 컴포넌트를 import CheckboxItemVue from './components/CheckboxItem.vue'렌더링;

import CheckboxItem from "./components/CheckboxItem.vue"; // 전역 컴포넌트 등록시 루트 컴포넌트 하위의 모든 자식 컴포넌트에서 사용 가능

createApp(App).component("CheckboxItem", CheckboxItem).mount("#app"); // App 컴포넌트를 렌더링하는 Vue App 인스턴스를 생성하여 id가 app인 요소에 마운트하여 렌더링
