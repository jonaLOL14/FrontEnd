<!-- src/components/EditCliente.vue -->
<template>
    <div class="edit-cliente">
      <h1>Editar Cliente</h1>
      <form @submit.prevent="updateCliente">
        <label>ID</label>
        <input v-model="cliente.ID" required />
        
        <label>Nombre</label>
        <input v-model="cliente.Nombre" required />
        
        <label>Correo Electrónico</label>
        <input v-model="cliente.Correo_electronico" required />
        
        <label>Número de Teléfono</label>
        <input v-model="cliente.Numero_de_telefono" required />
        
        <label>Dirección</label>
        <input v-model="cliente.Direccion" required />
        
        <button type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api'
  
  export default {
    data() {
      return {
        cliente: {
          ID: '',
          Nombre: '',
          Correo_electronico: '',
          Numero_de_telefono: '',
          Direccion: ''
        }
      }
    },
    methods: {
      async fetchCliente() {
        const response = await api.getCliente(this.$route.params.id)
        this.cliente = response.data
      },
      async updateCliente() {
        await api.updateCliente(this.$route.params.id, this.cliente)
        this.$router.push({ name: 'ClientesList' })
      }
    },
    created() {
      this.fetchCliente()
    }
  }
  </script>
  
  <style scoped>
  .edit-cliente {
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    background-color: #42b983;
    border: none;
  }
  
  button:hover {
    background-color: #357a58;
  }
  </style>
      