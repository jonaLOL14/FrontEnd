<!-- src/components/CreateCliente.vue -->
<template>
    <div class="create-cliente">
        <h1>Crear Cliente</h1>
        <form @submit.prevent="createCliente">
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

            <button type="submit">Crear</button>
        </form>
        <div v-if="error" class="error">{{ error }}</div>
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
            },
            error: ''
        }
    },
    methods: {
        validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        validatePhone(phone) {
            const re = /^[0-9]+$/;
            return re.test(phone);
        },
        validateName(name) {
            const re = /^[A-Za-z\s]+$/;
            return re.test(name);
        },
        async createCliente() {
            // Validations
            if (!this.cliente.ID || !this.cliente.Nombre || !this.cliente.Correo_electronico || !this.cliente.Numero_de_telefono || !this.cliente.Direccion) {
                this.error = 'Todos los campos son obligatorios.';
                return;
            }

            if (!this.validateEmail(this.cliente.Correo_electronico)) {
                this.error = 'El correo electrónico no tiene un formato válido.';
                return;
            }

            if (!this.validatePhone(this.cliente.Numero_de_telefono)) {
                this.error = 'El número de teléfono solo debe contener números.';
                return;
            }

            if (!this.validateName(this.cliente.Nombre)) {
                this.error = 'El nombre solo debe contener letras y espacios.';
                return;
            }

            try {
                await api.createCliente(this.cliente)
                this.$router.push({ name: 'ClientesList' })
            } catch (err) {
                this.error = 'Hubo un error al crear el cliente. Inténtalo nuevamente.';
            }
        }
    }
}
</script>

<style scoped>
.create-cliente {
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

.error {
    color: red;
    margin-top: 10px;
}
</style>