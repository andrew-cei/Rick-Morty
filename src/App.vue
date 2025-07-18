<script setup lang="ts">
import GaleriaImg from './components/GaleriaImg.vue';
import MainHeader from './components/MainHeader.vue';
import { useData } from './composables/useData';
import type { APIResponse } from './interfaces/ApiResponse';
import { ref } from 'vue';

const personajesArray = ref<APIResponse[]>()

const obtenerGatos = async (numero: number) => {
  personajesArray.value = await useData(numero);
  console.log(personajesArray.value)
}

</script>
<template>
  <MainHeader @evento-gatos="obtenerGatos"/>
  <GaleriaImg :personajes="personajesArray"/>
</template>
