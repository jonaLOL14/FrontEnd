<template>
    <div class="create-cliente">
      <h1>Crear Cliente</h1>
      <form @submit.prevent="createCliente">
  
        <label for="ID">ID:</label>
        <input id="ID" v-model="cliente.ID" required pattern="[0-9]+" title="Solo se permiten números."/>
        <div v-if="idError" class="error">{{ idError }}</div>
        
        <label for="nombre">Nombre:</label>
        <input id="nombre" v-model="cliente.Nombre" required pattern="[A-Za-z\s]+" title="Solo se permiten letras y espacios."/>
        <div v-if="nombreError" class="error">{{ nombreError }}</div>
  
        <label for="correo">Correo Electrónico:</label>
        <input id="correo" v-model="cliente.Correo_electronico" required type="email" />
        <div v-if="correoError" class="error">{{ correoError }}</div>
  
        <label for="telefono">Número de Teléfono:</label>
        <input id="telefono" v-model="cliente.Numero_de_telefono" required pattern="[0-9]+" title="Solo se permiten números."/>
        <div v-if="telefonoError" class="error">{{ telefonoError }}</div>
  
        <label for="direccion">Dirección:</label>
        <input id="direccion" v-model="cliente.Direccion" required />
  
        <button type="submit">Crear</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        cliente: {
          ID: '',
          Nombre: '',
          Correo_electronico: '',
          Numero_de_telefono: '',
          Direccion: ''
        },
        idError: '',
        nombreError: '',
        correoError: '',
        telefonoError: ''
      };
    },
    computed: {
      idValido() {
        return /^[0-9]+$/.test(this.cliente.ID); 
      },
      nombreValido() {
        return /^[A-Za-z\s]+$/.test(this.cliente.Nombre); 
      },
      correoValido() {
        return /.+@.+\..+/.test(this.cliente.Correo_electronico); 
      },
      telefonoValido() {
        return /^[0-9]+$/.test(this.cliente.Numero_de_telefono); 
      }
    },
    watch: {
      idValido(newVal) {
        this.idError = newVal ? '' : 'El ID solo puede contener números.';
      },
      nombreValido(newVal) {
        this.nombreError = newVal ? '' : 'El nombre solo puede contener letras y espacios.';
      },
      correoValido(newVal) {
        this.correoError = newVal ? '' : 'Ingrese un correo electrónico válido.';
      },
      telefonoValido(newVal) {
        this.telefonoError = newVal ? '' : 'El número de teléfono solo puede contener números.';
      }
    },
    methods: {
      async createCliente() {
        if (this.idValido && this.nombreValido && this.correoValido && this.telefonoValido) {
          await api.createCliente(this.cliente);
          this.$router.push({ name: 'ClientesList' });
        } 
        // Si alguna validación falla, no se envía el formulario, y los mensajes de error se muestran.
      }
    }
  };
  </script>
  