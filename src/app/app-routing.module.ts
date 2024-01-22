import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { EditarComponent } from './components/editar/editar.component';
import { DeletarComponent } from './components/deletar/deletar.component';
import { FuncionarioComponent } from './components-funcionarios/funcionario/funcionario.component';
import { CadastroFuncionarioComponent } from './components-funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { EditarFuncionarioComponent } from './components-funcionarios/editar-funcionario/editar-funcionario.component';
import { DeletarFuncionarioComponent } from './components-funcionarios/deletar-funcionario/deletar-funcionario.component';
const routes: Routes = [
  {path:'cadastro' , component: CadastroComponent },
  {path: '', component: DepartamentoComponent},
  {path:'editar/:id', component: EditarComponent},
  {path:'deletar/:id', component: DeletarComponent},
  {path: 'funcionario/:departamentoId', component: FuncionarioComponent},
  {path: 'funcionario/:departamentoId/cadastro', component: CadastroFuncionarioComponent},
  {path: 'funcionario/:departamentoId/editar/:id', component: EditarFuncionarioComponent},
  {path: 'funcionario/:departamentoId/deletar/:id', component: DeletarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
