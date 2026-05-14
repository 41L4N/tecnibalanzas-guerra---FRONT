<template>
    <Encabezado />
      <MenuNavegacion />
        <main>
            <router-view />
              </main>
              </template>

              <script setup>
              import Encabezado from './Encabezado.vue'
              import MenuNavegacion from './MenuNavegacion.vue'
              </script>
              
