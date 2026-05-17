<script setup>
import { ref, onMounted } from 'vue'

const oscuro = ref(localStorage.getItem('tema') === 'oscuro')

const cambiarTema = () => {
  oscuro.value = !oscuro.value
  document.documentElement.classList.toggle('p-dark', oscuro.value)
  localStorage.setItem('tema', oscuro.value ? 'oscuro' : 'luz')
}

onMounted(() => {
  document.documentElement.classList.toggle('p-dark', oscuro.value)
})
</script>

<template>
  <Button
    :icon="oscuro ? 'pi pi-sun' : 'pi pi-moon'"
    :label="oscuro ? 'Modo claro' : 'Modo oscuro'"
    @click="cambiarTema"
  />
  <router-view />
</template>

<script setup lang="ts">
</script>

<style scoped></style>
