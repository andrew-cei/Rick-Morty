<script setup lang="ts">
// Importación de componentes
import GaleriaImg from './components/GaleriaImg.vue';
import MainHeader from './components/MainHeader.vue';
// Interfaces
import type { APIResponse } from './interfaces/ApiResponse';
// Composables
import { useData } from './composables/useData';
// Importación de vue
import { ref } from 'vue';

const personajesArray = ref<APIResponse[]>([])

const obtenerGatos = async (numero: number) => {
  personajesArray.value = await useData(numero);
  console.log(personajesArray.value)
}

</script>
<template>
  <MainHeader v-on:evento-gatos="obtenerGatos"/>
  <GaleriaImg v-bind:personajes="personajesArray"/>
</template>
