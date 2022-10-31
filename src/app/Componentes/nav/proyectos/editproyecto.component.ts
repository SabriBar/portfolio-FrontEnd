import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto: Proyecto = null; 
  
  constructor(
    private proyectoS: ProyectoService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public urlService: UrlService) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      } 
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.urlService.uploadImage($event, name)

  }

}
