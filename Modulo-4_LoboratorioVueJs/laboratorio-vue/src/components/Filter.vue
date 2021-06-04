<template>
  <div id="filterContainer">
    <input type="text" name="companyName" v-model="company" />
    <button id="filterButton" @click="newCompanyName()">Filtrar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store/index';

export default defineComponent({
  data() {
    return {
      company: ""
    }
  }, created() { 
    this.company = 'lemoncode';
   },methods: {
    newCompanyName(): void {
      this.$emit('company-Name-Send', this.company);
      store.state.company = this.company;
      console.log(store.state.company)
    },
  },
})
</script>

<style></style>
