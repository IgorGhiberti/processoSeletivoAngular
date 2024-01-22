import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamentos } from '../../models/departamento.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos!: Departamentos[];
  dataSource = new MatTableDataSource<Departamentos>(this.departamentos);
  departamentoSelecionado: Departamentos | null = null;
  id!: number;
  colunas = ['Situação', 'Nome', 'Sigla', 'Editar', 'Ações', 'Excluir'];

  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute) {}
  ngOnInit(): void {
      this.getDepartamentos();
  }

  getDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe((data: Departamentos[]) =>{
      this.dataSource.data = data;
    })
  }

  aplicarFiltro(event: Event){
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if (valorFiltro == '')
    {
      this.getDepartamentos();
    }
    else{
      var listaData = this.dataSource.data;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.dataSource.data = listaFiltrada;
    }
  }


  desativar(index: number) {
    const id = this.dataSource.data[index].id;
    this.departamentoService.desativarDepartamento(id).subscribe((data: Departamentos) => {
      this.departamentoSelecionado = data;
      this.getDepartamentos();
    });
  }

  reativar(index: number) {
    const id = this.dataSource.data[index].id;
    this.departamentoService.reativarDepartamento(id).subscribe((data: Departamentos) =>{
      this.departamentoSelecionado = data;
      this.getDepartamentos();

    })
  }


  }
