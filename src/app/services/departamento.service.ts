import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamentos } from '../models/departamento.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = `${environment.apiUrl}/departamentos`

  constructor(private http: HttpClient) { }

    public getDepartamentos():Observable<Departamentos[]>{
      return this.http.get<Departamentos[]>(this.apiUrl);
    }

    public getDepartamentoById(id: number): Observable<Departamentos> {
      return this.http.get<Departamentos>(`${this.apiUrl}/${id}/selecionar`);
    }

    public postDepartamento(departamento: Departamentos): Observable<Departamentos> {
      return this.http.post<Departamentos>(`${this.apiUrl}`, departamento);
    }

    public putDepartamento(departamento: Departamentos): Observable<Departamentos>{
      return this.http.put<Departamentos>(`${this.apiUrl}/${departamento.id}`, departamento);
    }

    public desativarDepartamento(id: number): Observable<Departamentos>{
      return this.http.delete<Departamentos>(`${this.apiUrl}/${id}/desativar`);
    }

    public reativarDepartamento(id: number): Observable<Departamentos>{
      return this.http.put<Departamentos>(`${this.apiUrl}/${id}/reativar`, []);
    }

    public deleteDepartamento(departamento: Departamentos): Observable<Departamentos>{
      return this.http.delete<Departamentos>(`${this.apiUrl}/${departamento.id}/deletar`)
    }

}
