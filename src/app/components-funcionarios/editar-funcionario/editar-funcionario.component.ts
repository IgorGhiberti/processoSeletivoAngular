import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from '../../models/funcionario.models';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {


  btnAcao = "Editar";
  btnTitulo = "Editar funcionário";
  departamentoId = Number(this.route.snapshot.paramMap.get('departamentoId')) ;
  funcionario!: Funcionarios;
  constructor(private funcionarioService : FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.getFuncionarioById(id, this.departamentoId).subscribe((data) => {
      this.funcionario = data;

    });
  }

  editFuncionario(funcionario: Funcionarios){
    const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
    this.funcionarioService.putFuncionario(this.departamentoId, funcionario).subscribe((data) =>{
      this.router.navigate(['/funcionario/' + idDepartamento])
    });
  }

}
