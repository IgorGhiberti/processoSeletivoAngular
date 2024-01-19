import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from '../../models/departamento.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar"
  btnTitulo = "Editar Departamento"
  departamento!: Departamentos;

  constructor(private departamentoService : DepartamentoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.departamentoService.getDepartamentoById(id).subscribe((data: Departamentos) =>{
      this.departamento = data;
    });
  }

  editDepartamento(departamento: Departamentos){
    this.departamentoService.putDepartamento(departamento).subscribe((data) =>
    {
      this.router.navigate(['/'])
    })
  }
}
