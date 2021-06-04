<template>
  <nav class="nav">
    <div class="FooterContainer">
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 32px;
  padding-bottom: 16px;
  border-top: 2px solid #f00;
  z-index:2000;
  background-color: rgb(198, 247, 244);
}

.FooterContainer {
  text-align: center;
}

.logoImg {
  width: 100px;
  height: 100px;
}
</style>
