import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { EditarComponent } from './components/editar/editar.component';
import { DeletarComponent } from './components/deletar/deletar.component';

const routes: Routes = [
  {path:'cadastro' , component: CadastroComponent },
  {path: '', component: DepartamentoComponent},
  {path:'editar/:id', component: EditarComponent},
  {path:'deletar/:id', component: DeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
