import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionarios } from '../../models/funcionario.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html',
  styleUrls: ['./formulario-funcionario.component.css']
})
export class FormularioFuncionarioComponent implements OnInit {
  @Output() onSubmitFun = new EventEmitter<Funcionarios>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionarios | null = null;

  departamentoId!: number;

  funcionarioForm!: FormGroup;
  constructor(private route: ActivatedRoute, private funcionarioService: FuncionarioService, private router: Router,) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.departamentoId = Number(params.get('departamentoId'));
    });

    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      foto: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.foto : ''),
      rg: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.rg : '', [Validators.required]),
      departamentoId: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamentoId : this.departamentoId)
    });


  }

  submitFun(){
    this.onSubmitFun.emit(this.funcionarioForm.value);
  }

}
