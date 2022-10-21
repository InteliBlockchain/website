import axios from 'axios'

const instance: any
    = axios.create({
        baseURL: 'http://localhost:3001',
    })

console.log(instance)

export default instance