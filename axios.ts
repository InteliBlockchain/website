import axios from 'axios'

const instance: any
    = axios.create({
        baseURL: process.env.NEXT_PUBLIC_SERVER_URL
    })

export default instance