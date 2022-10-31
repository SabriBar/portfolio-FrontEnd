import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Componentes/encabezado/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NewExperienciaComponent } from './Componentes/nav/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/nav/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/nav/educacion/neweducacion.component';
import { EditeducacionComponent } from './Componentes/nav/educacion/editeducacion.component';
import { AcercaDeComponent } from './Componentes/nav/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './Componentes/nav/acerca-de/edit-acerca-de.component';
import { NewskillComponent } from './Componentes/nav/skills/newskill.component';
import { EditskillComponent } from './Componentes/nav/skills/editskill.component';
import { EditproyectoComponent } from './Componentes/nav/proyectos/editproyecto.component';
import { NewproyectoComponent } from './Componentes/nav/proyectos/newproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent, outlet: "modal"},
  {path: 'nuevaexp', component: NewExperienciaComponent, outlet: 'nuevaExperiencia'},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent, outlet: 'nuevaEducacion'},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editDescripcion/:id', component: EditAcercaDeComponent},
  {path: 'nuevaSkill', component: NewskillComponent, outlet: 'nuevaSkill'},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'editproyecto/:id', component: EditproyectoComponent},
  {path: 'nuevoProyecto', component: NewproyectoComponent, outlet: 'nuevoProyecto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, CommonModule, ReactiveFormsModule ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
