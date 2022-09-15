import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Impasto } from '../models/impasto.model';

const baseUrl = 'http://localhost:8080/api/pizzeria/impasti';

@Injectable({
  providedIn: 'root'
})
export class ImpastoService {
  constructor(private http: HttpClient) { }
  getAllImpasti(): Observable<Impasto[]> {
    return this.http.get<Impasto[]>(baseUrl);
  }
}
