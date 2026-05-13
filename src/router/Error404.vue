<template>
  <div class="error-page">
    <h1>Error 404</h1>
    <p>Página no encontrada. El enlace que sigues puede estar roto o la página puede haber sido eliminada.</p>
    <router-link to="/" class="btn">Volver al Inicio</router-link>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  background-color: var(--fondo);
  color: var(--texto);
  font-family: sans-serif;
}

h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
  color: #e74c3c; /* Un rojo suave para indicar error */
}

.btn {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}
</style>
