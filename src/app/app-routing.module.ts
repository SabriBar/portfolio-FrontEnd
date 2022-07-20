import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Componentes/encabezado/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NewExperienciaComponent } from './Componentes/nav/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/nav/experiencia/edit-experiencia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent, outlet: "modal"},
  {path: 'nuevaexp', component: NewExperienciaComponent, outlet: 'nuevaExperiencia'},
  {path: 'editexp/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
