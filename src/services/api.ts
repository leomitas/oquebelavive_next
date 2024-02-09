import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://54.87.236.129:5000/',
  timeout: 10000,
})
