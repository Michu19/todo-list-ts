import axios, { AxiosInstance } from 'axios'; 
import { ITodo } from '../actions/TodoActions';

export class apiService {

  private axios : AxiosInstance;

  constructor()
  {
    this.axios = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  async getTodos(): Promise<ITodo[]>{
    return await this.axios.get<ITodo[]>("/todos").then( (res) =>{
      
        return res.data;
      });
  }
}