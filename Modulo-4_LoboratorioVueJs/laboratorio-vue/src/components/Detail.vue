<template>
  <div id="detailContainer">
    <img :src="`${member.avatar_url}`" />
    <h1>Nombre: {{member.login}}</h1>
    <h2>Id: {{member.id}}</h2>
    <p>Miembro de {{member.company}}</p>
    <p>Nombre de la compañía: {{company}}</p>
    <router-link :to="`/`">Volver</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';
import { getMember } from '../services/memberService';
import { Member } from '../types/index';
import store from '../store/index';

export default defineComponent({
  data() {
    return {
      company: "" as string,
      member: {} as Member
    }
  },
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id)
    },
  },
  async created() { 
    this.company = store.state.company;
    try{
      this.member = await getMember( this.id );
    }catch ( error ) {
      console.error( error.message )
    }
  },methods: {
  },

})
</script>

<style>
  #detailContainer{
    text-align: center;
  }

  img{
    width: 200px;
    padding: 20px;
  }
</style>
