// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ClientesList from '@/components/ClientesList.vue'
import CreateCliente from '@/components/CreateCliente.vue'
import EditCliente from '@/components/EditCliente.vue'

const routes = [
  {
    path: '/',
    name: 'ClientesList',
    component: ClientesList
  },
  {
    path: '/create',
    name: 'CreateCliente',
    component: CreateCliente
  },
  {
    path: '/edit/:id',
    name: 'EditCliente',
    component: EditCliente
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
