import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public urlService: UrlService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.url = this.urlService.enlace
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar descripcion");
        this.router.navigate(['']);
      }
    )
  }


  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.urlService.uploadImage($event, name)

  }
}
