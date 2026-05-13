<template>
  <header class="encabezado">
    <div class="contenedor">
      <h1 class="logo">Pro Store Kit</h1>
      <nav class="navegacion">
        <!-- Espacio para el futuro menú -->
      </nav>
    </div>
  </header>
</template>

<style scoped>
.encabezado {
  background-color: var(--color-fondo-secundario, #1a1a1a);
  color: var(--color-texto, #ffffff);
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
</style>
