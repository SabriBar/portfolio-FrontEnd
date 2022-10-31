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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Componentes/home/home.component';
import { interceptorProvider, InterceptorServiceComponent } from './service/interceptor-service/interceptor-service.component';
import { NgxRerenderComponent, NgxRerenderModule } from 'ngx-rerender';
import { NewExperienciaComponent } from './Componentes/nav/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/nav/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/nav/educacion/neweducacion.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditeducacionComponent } from './Componentes/nav/educacion/editeducacion.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { EditAcercaDeComponent } from './Componentes/nav/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewskillComponent } from './Componentes/nav/skills/newskill.component';
import { EditskillComponent } from './Componentes/nav/skills/editskill.component';
import { EditproyectoComponent } from './Componentes/nav/proyectos/editproyecto.component';
import { NewproyectoComponent } from './Componentes/nav/proyectos/newproyecto.component';
import { SafeImagePipe } from './safe-image.pipe';

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
    NavComponent,
    HomeComponent,
    InterceptorServiceComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    FooterComponent,
    EditAcercaDeComponent,
    NewskillComponent,
    EditskillComponent,
    EditproyectoComponent,
    NewproyectoComponent,
    SafeImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxRerenderModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
