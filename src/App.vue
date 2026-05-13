<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tema = ref(localStorage.getItem('tema') || 'light')

const cambiarTema = () => {
  tema.value = tema.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', tema.value)
      localStorage.setItem('tema', tema.value)
      }

      onMounted(() => {
        document.documentElement.setAttribute('data-theme', tema.value)
        })
        </script>
        

<template>
    <button @click="cambiarTema">Cambiar Modo</button>
    
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style>
:root {
  --fondo: #ffffff;
    --texto: #000000;
    }

    [data-theme="dark"] {
      --fondo: #121212;
        --texto: #ffffff;
        }

        body {
          background-color: var(--fondo);
            color: var(--texto);
              transition: 0.3s;
              }
              </style>
          
