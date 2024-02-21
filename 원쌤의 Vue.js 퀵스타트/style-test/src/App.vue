<template>
  <Child1></Child1>
  <Child2/>
  <Child3/>
  
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
import Child3 from './components/Child3.vue'
export default{
  name :"App",
  components :{Child1, Child2, Child3}
}
/*
자식 컴포넌트가 서로 다른 스타일을 가지지만
모두 전역 클래스이기에 충돌
1,2,3 순으로 임포트 되었지만
스타일은 마지막에 임포트된 컴포넌트의 스타일 속성으로 적용됨
따라서 3번째 orange가 적용
*/
</script>

