import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/funcionario.models';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-funcionario',
  templateUrl: './deletar-funcionario.component.html',
  styleUrls: ['./deletar-funcionario.component.css']
})
export class DeletarFuncionarioComponent implements OnInit {


  departamentoId = Number(this.route.snapshot.paramMap.get('departamentoId')) ;
  funcionario?: Funcionarios;
  constructor(private funcionarioService : FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.getFuncionarioById(id, this.departamentoId).subscribe((data) => {
      this.funcionario = data;

    });
  }

  deleteFuncionario(funcionario: Funcionarios){
    const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
    this.funcionarioService.deleteFuncionario(this.departamentoId, funcionario).subscribe((data) =>{
      this.router.navigate(['/funcionario/' + idDepartamento])
    });
  }

}
