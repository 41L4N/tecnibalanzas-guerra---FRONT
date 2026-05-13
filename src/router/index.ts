import { crearEnrutador, crearHistorialWeb } from 'vue-router'
import Error404 from './Error404.vue'

const enrutador = crearEnrutador({
  historia: crearHistorialWeb(import.meta.env.BASE_URL),
    rutas: [
        // Aquí irán tus otras rutas (Inicio, Tienda, etc.)
            {
                  path: '/:pathMatch(.*)*',
                        name: 'NotFound',
                              component: Error404
                                  }
                                    ],
                                    })

                                    export default enrutador
                                    
