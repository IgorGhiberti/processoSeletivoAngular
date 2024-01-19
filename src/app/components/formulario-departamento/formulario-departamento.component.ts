import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamentos } from '../../models/departamento.model';

@Component({
  selector: 'app-formulario-departamento',
  templateUrl: './formulario-departamento.component.html',
  styleUrl: './formulario-departamento.component.css'
})
export class FormularioDepartamentoComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Departamentos>();
  departamentoForm!: FormGroup;
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosDepartamento: Departamentos | null = null;

  constructor(){ }

  ngOnInit(): void {

    this.departamentoForm = new FormGroup({
      id: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.id: 0),
      nome: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.nome: '', [Validators.required]),
      sigla: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.sigla: '', [Validators.required]),
      ativo: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.ativo: true)
    });
  }

  submit(){


    this.onSubmit.emit(this.departamentoForm.value)
  }

}
