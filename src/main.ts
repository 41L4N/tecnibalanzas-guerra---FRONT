import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/**
 * DOCUMENTACIÓN DE ARQUITECTURA (Issue #5):
 * -----------------------------------------
 * assets: Estilos globales y recursos estáticos.
 * components: Componentes reutilizables del sistema.
 * pages: Vistas principales de la aplicación (Views).
 * router: Gestión de rutas y navegación.
 * hooks/services/utils: Lógica de negocio y utilidades.
 */