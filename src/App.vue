<script setup lang="ts">

</script>

<template>
  <div class="layout-container">
    <main class="main-content">
      <router-view />
    </main>

    <footer class="custom-footer">
      <div class="footer-body">
        <p>&copy; 2026 Pro Store Kit - Todos los derechos reservados.</p>
        <p>Encuentra los mejores componentes de PC en un solo lugar.</p>
      </div>
    </footer>
  </div>
</template>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}


.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


.main-content {
  flex: 1;
}


.custom-footer {
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto; 
}

.footer-body p {
  margin: 5px 0;
  font-family: sans-serif;
  font-size: 14px;
}
</style>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}


.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


.main-content {
  flex: 1;
}


.custom-footer {
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto; 
}

.footer-body p {
  margin: 5px 0;
  font-family: sans-serif;
  font-size: 14px;
}
</style>