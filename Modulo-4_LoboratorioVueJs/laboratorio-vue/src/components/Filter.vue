<template>
  <div id="filterContainer">
    <input type="text" name="companyName" v-model="company" />
    <button id="filterButton" @click="newCompanyName()">Filtrar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      company: ""
    }
  }, created() { 
    this.company = 'lemoncode';
   },methods: {
    newCompanyName(): void {
      this.$emit('company-Name-Send', this.company)
    },
  },
})
</script>

<style></style>
