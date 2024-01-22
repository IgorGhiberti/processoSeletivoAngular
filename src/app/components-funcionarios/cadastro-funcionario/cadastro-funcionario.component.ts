import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/funcionario.models';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar funcionário";
  departamentoId = Number(this.route.snapshot.paramMap.get('departamentoId'));

  constructor(private funcionarioService : FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createFuncionario(funcionario: Funcionarios){
    const idDepartamento = Number(this.route.snapshot.paramMap.get('departamentoId'));
    this.funcionarioService.postFuncionario(this.departamentoId, funcionario).subscribe((data) =>{
      this.router.navigate(['/funcionario/' + idDepartamento])
    });
  }

}
