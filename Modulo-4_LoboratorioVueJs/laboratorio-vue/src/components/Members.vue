<template>
<div id="HomeContainer">
  <Filter :company="company" @company-Name-Send="updateCompanyName"/>
    <div id="tableContainer">
      <p>
      Lista de miembros de {{company}}
      </p>
      <table id="memberTable">
        <thead>
          <th>Avatar</th>
          <th>Id</th>
          <th>Name</th>
          <th>Ver detalles</th>
        </thead>
        <tr v-for="member in members" :key="member.id">
          <td><img :src="`${member.avatar_url}`" /></td>
          <td>{{member.id}}</td>
          <td>{{member.login}}</td>
          <td><router-link :to="`/detail/${member.login}`">Ver detalles</router-link></td>
        </tr>
      </table>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMembers, getMember } from '../services/memberService';
import { Member } from '../types/index';
import Filter from './Filter.vue';
import store from '../store/index';

export default defineComponent({
  name: "Home",
  components: {
      Filter,
    },
  data() {
    return {
      company: "" as string,
      members: [] as Member[]
    }
  }, async created() { 
    this.company = store.state.company;
    try{
      this.members = await getMembers( this.company );
    }catch ( error ) {
      console.error( error.message )
    }
  },methods: {
    updateCompanyName(company: string): void {
      this.company = company;
      this.changeMemberTable();
    },
    async changeMemberTable() { 
      try{
        this.members = await getMembers( this.company );
      }catch ( error ) {
        console.error( error.message )
      }
    },
  }
});
</script>

<style>
  #memberTable{
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    background-color: white;
  }

  thead {
    background-color: #246355;
    border-bottom: 5px solid black;
    color: white;
  }

  th, td {
    border: 1px solid black;
    padding: 20px;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }

  tr:hover {
    background-color: #369681;
    color:white;
  }

  img {
    max-width: 75px;
  }

  p {
    text-align: center;
  }
</style>
