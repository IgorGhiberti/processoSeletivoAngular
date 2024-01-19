import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamentos } from '../../models/departamento.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos!: Departamentos[];
  departamentoSelecionado: Departamentos | null = null;;
  id!: number;
  colunas = ['Situação', 'Id', 'Nome', 'Sigla', 'Editar', 'Ações', 'Excluir'];

  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute) {}
  ngOnInit(): void {
      this.getDepartamentos();
  }

  getDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe((data: Departamentos[]) =>{
      this.departamentos=data;
    })
  }

  buscar(): void {
    this.departamentoService.getDepartamentoById(this.id).subscribe(
      (data: Departamentos) => {
        this.departamentoSelecionado = data;
        if (this.departamentoSelecionado){
        this.departamentos = this.departamentos.filter
        (departamento => departamento.id === this.departamentoSelecionado?.id);
      }},
      (error) => {
        console.error('Erro ao obter o departamento: ', error);
        this.departamentoSelecionado = null;
      }
    );
}


  desativar(index: number) {
    const id = this.departamentos[index].id;
    this.departamentoService.desativarDepartamento(id).subscribe((data: Departamentos) => {
      this.departamentoSelecionado = data;
      //this.departamentos = data.filter(depto => depto.id === id)
      this.getDepartamentos();
    });
  }

  reativar(index: number) {
    const id = this.departamentos[index].id;
    this.departamentoService.reativarDepartamento(id).subscribe((data: Departamentos) =>{
      this.departamentoSelecionado = data;

      this.getDepartamentos();

    })
  }


  }
