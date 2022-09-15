import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from '../models/ingrediente.model';

const baseUrl = 'http://localhost:8080/api/pizzeria/ingredienti';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  constructor(private http: HttpClient) { }
  getAllIngredienti(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(baseUrl);
  }
}
