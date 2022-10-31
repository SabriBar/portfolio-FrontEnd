import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string = '';
  imagenP: string = '';
  linkP: string = '';
  descripcionP: string = '';
  fechaP: string = '';

  constructor(private proyectoS: ProyectoService,private activatedRouter: ActivatedRoute, private router: Router, public urlService: UrlService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.linkP,this.descripcionP,this.fechaP);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
      )
  }

  cerrar(){
    this.router.navigate([{outlets: {nuevoProyecto: null}}]);
  }
  
  uploadImage($event: any) {
    const name = "perfil_" + this.nombreP;
    this.urlService.uploadImage($event, name)

  }

}

