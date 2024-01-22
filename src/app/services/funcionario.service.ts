import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from '../models/funcionario.models';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.apiUrl}/funcionarios/departamento`

constructor(private http: HttpClient) { }

  public getFuncionarioById(id: number, departamentoId: number): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(`${this.apiUrl}/${departamentoId}/${id}/selecionar`);
  }

  public getFuncionarioByDepartamento(departamentoId: number): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(`${this.apiUrl}/${departamentoId}`);
  }

  public postFuncionario(departamentoId: number, funcionario: Funcionarios): Observable<Funcionarios> {
    return this.http.post<Funcionarios>(`${this.apiUrl}/${departamentoId}`, funcionario);
  }

  public putFuncionario(departamentoId: number, funcionario: Funcionarios): Observable<Funcionarios>{
    return this.http.put<Funcionarios>(`${this.apiUrl}/${departamentoId}/${funcionario.id}`, funcionario);
  }

  public desativarFuncionario(departamentoId: number, id: number): Observable<Funcionarios>{
    return this.http.delete<Funcionarios>(`${this.apiUrl}/${departamentoId}/${id}/desativar`);
  }

  public reativarFuncionario(departamentoId: number, id: number): Observable<Funcionarios>{
    return this.http.put<Funcionarios>(`${this.apiUrl}/${departamentoId}/${id}/reativar`, []);
  }

  public deleteFuncionario(departamentoId: number, funcionario: Funcionarios): Observable<Funcionarios>{
    return this.http.delete<Funcionarios>(`${this.apiUrl}/${departamentoId}/${funcionario.id}/excluir`)
  }

}
