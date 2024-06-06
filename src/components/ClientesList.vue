<!-- src/components/ClientesList.vue -->
<template>
    <div class="clientes-list">
      <h1>Lista de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientes" :key="cliente._id">
            <td>{{ cliente.ID }}</td>
            <td>{{ cliente.Nombre }}</td>
            <td>{{ cliente.Correo_electronico }}</td>
            <td>{{ cliente.Numero_de_telefono }}</td>
            <td>{{ cliente.Direccion }}</td>
            <td>
              <router-link :to="{ name: 'EditCliente', params: { id: cliente._id } }">Editar</router-link>
              <button @click="deleteCliente(cliente._id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '../services/api'
  
  export default {
    data() {
      return {
        clientes: []
      }
    },
    methods: {
      async fetchClientes() {
        try {
          const response = await api.getClientes()
          this.clientes = response.data
        } catch (error) {
          console.error('Error fetching clients:', error)
        }
      },
      async deleteCliente(id) {
        try {
          await api.deleteCliente(id)
          this.fetchClientes()
        } catch (error) {
          console.error('Error deleting client:', error)
        }
      }
    },
    created() {
      this.fetchClientes()
    }
  }
  </script>
  
  <style scoped>
  .clientes-list {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  
  th {
    background-color: #f9f9f9;
  }
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    color: white;
    background-color: #42b983;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #357a58;
  }
  </style>
  