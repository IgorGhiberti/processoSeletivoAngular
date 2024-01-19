import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Departamentos } from '../../models/departamento.model';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrl: './deletar.component.css'
})
export class DeletarComponent implements OnInit{

  departamento!: Departamentos;
  constructor(private departamentoService: DepartamentoService, private route:ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.departamentoService.getDepartamentoById(id).subscribe((data: Departamentos)=>{
      this.departamento = data;
    })
  }

  deleteDepartamento(departamento: Departamentos){
    this.departamentoService.deleteDepartamento(departamento).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
