import axios from 'axios'
import { API_URL } from '../config/env';

const httpClient = axios.create({
	baseURL: API_URL
})

export default httpClient
