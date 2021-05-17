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
  min-height: 30px;
  background-color: rgb(198, 247, 244);
  position: sticky;
  bottom: 0;
}

.FooterContainer {
  text-align: center;
}

.logoImg {
  width: 100px;
  height: 100px;
}
</style>
