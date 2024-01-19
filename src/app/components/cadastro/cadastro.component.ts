import { DepartamentoService } from './../../services/departamento.service';
import { Component } from '@angular/core';
import { Departamentos } from '../../models/departamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Departamento"

  constructor(private departamentoService : DepartamentoService, private router: Router) {


  }
  createDepartamento(departamento: Departamentos){
    this.departamentoService.postDepartamento(departamento).subscribe((data) =>{
      this.router.navigate(['/'])

    });
  }
}
