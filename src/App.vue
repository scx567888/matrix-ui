<template>
  <div>
    <a href="https://github.com/scx567888/matrix-ui" target="_blank">
      <img src="/matrix.svg" class="logo" alt="Scx Admin"/>
    </a>
  </div>
  <HelloWorld msg="Matrix"/>
  <scx-upload :onError="onError"></scx-upload>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

function onError(e) {
  alert("上传错误 !!!");
  console.log(e)
}
</script>

<style scoped>
.logo {
  height: 15em;
  padding: 1.5em;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #ff4c4baa);
}
</style>
