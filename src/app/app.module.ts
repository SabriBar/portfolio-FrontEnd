import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ArgProgramaComponent } from './Componentes/encabezado/arg-programa/arg-programa.component';
import { LoginComponent } from './Componentes/encabezado/login/login.component';
import { AcercaDeComponent } from './Componentes/nav/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Componentes/nav/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/nav/educacion/educacion.component';
import { SkillsComponent } from './Componentes/nav/skills/skills.component';
import { ProyectosComponent } from './Componentes/nav/proyectos/proyectos.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { ModalModule } from 'ng-modal-lib';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ArgProgramaComponent,
    LoginComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    EncabezadoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
