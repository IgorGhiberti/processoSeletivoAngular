import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/funcionario.models';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from '../../models/departamento.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios!: Funcionarios[];
  departamento!: Departamentos[];
  dataSourceFuncionario = new MatTableDataSource<Funcionarios>(this.funcionarios);
  funcionarioSelecionado: Funcionarios | null = null;
  id!: number;
  idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
  colunasFuncionarios = ['Situação', 'Nome', 'Foto', 'RG', 'Editar', 'Ações', 'Excluir'];


  constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFuncionarioByDepartamento();
  }


    getFuncionarioByDepartamento(){
      const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
      this.funcionarioService.getFuncionarioByDepartamento(idDepartamento).subscribe((data: Funcionarios[]) =>{
        this.funcionarios = data;
        this.dataSourceFuncionario.data = this.funcionarios;
      });
    }

  aplicarFiltroFuncionario(event: Event){
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if (valorFiltro == '')
    {
      this.getFuncionarioByDepartamento();
    }
    else{
      var listaData = this.dataSourceFuncionario.data;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.dataSourceFuncionario.data = listaFiltrada;
    }
  }


  desativarFunc(index: number) {
    const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
    const id = this.dataSourceFuncionario.data[index].id;
    this.funcionarioService.desativarFuncionario(idDepartamento, id).subscribe((data: Funcionarios) => {
      this.funcionarioSelecionado = data;
      this.getFuncionarioByDepartamento();
    });
  }

  reativarFunc(index: number) {
    const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
    const id = this.dataSourceFuncionario.data[index].id;
    this.funcionarioService.reativarFuncionario(idDepartamento, id).subscribe((data: Funcionarios) =>{
      this.funcionarioSelecionado = data;
      this.getFuncionarioByDepartamento();

    })
  }

}
