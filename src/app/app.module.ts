import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormularioDepartamentoComponent } from './components/formulario-departamento/formulario-departamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';
import { DeletarComponent } from './components/deletar/deletar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionarioComponent } from './components-funcionarios/funcionario/funcionario.component';
import { CadastroFuncionarioComponent } from './components-funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { FormularioFuncionarioComponent } from './components-funcionarios/formulario-funcionario/formulario-funcionario.component';
import { EditarFuncionarioComponent } from './components-funcionarios/editar-funcionario/editar-funcionario.component';
import { DeletarFuncionarioComponent } from './components-funcionarios/deletar-funcionario/deletar-funcionario.component';
/*Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    CadastroComponent,
    FormularioDepartamentoComponent,
    EditarComponent,
    DeletarComponent,
    FuncionarioComponent,
    CadastroFuncionarioComponent,
    FormularioFuncionarioComponent,
    EditarFuncionarioComponent,
    DeletarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(), HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
