// src/services/api.js
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api-register-clients.vercel.app',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getClientes() {
        return apiClient.get('/cliente')
    },
    getCliente(id) {
        return apiClient.get(`/cliente/${id}`)
    },
    createCliente(cliente) {
        return apiClient.post('/cliente', cliente)
    },
    updateCliente(id, cliente) {
        return apiClient.put(`/cliente/${id}`, cliente)
    },
    deleteCliente(id) {
        return apiClient.delete(`/cliente/${id}`)
    }
}
