import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://44.201.82.31:5000/',
  timeout: 10000,
})
