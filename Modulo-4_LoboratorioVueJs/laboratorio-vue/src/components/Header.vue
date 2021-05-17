<template>
  <nav class="nav">
    <div class="HeaderContainer">
      <h1>Lista de mienbros de github</h1>
      <img class="logoImg" alt="gitHub logo" src="../assets/github.png" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.nav {
  min-height: 80px;
  background-color: rgb(198, 247, 244);
  position: sticky;
  top: 0;
}

.HeaderContainer {
  text-align: center;
}

.logoImg {
  width: 100px;
  height: 100px;
}
</style>
