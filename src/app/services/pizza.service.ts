import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza.model';

const baseUrl = 'http://localhost:8080/api/pizzeria/pizze';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) { }
  getAllPizze(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(baseUrl);
  }
  getPizza(id: any): Observable<Pizza> {
    return this.http.get<Pizza>(`${baseUrl}/${id}`);
  }
  createPizza(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  updatePizza(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deletePizza(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
