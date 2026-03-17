import { api } from './client';

export interface HelloResponse {
  message: string;
}

export const fetchHello = () => api.get('hello').json<HelloResponse>();
