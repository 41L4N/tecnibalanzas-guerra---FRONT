<template>
  <nav class="navegacion-principal">
    <ul class="lista-menu">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/tienda">Tienda</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navegacion-principal {
  background-color: #333;
  padding: 1rem;
}

.lista-menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.lista-menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  .lista-menu {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
