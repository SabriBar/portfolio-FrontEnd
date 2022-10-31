import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skill.service';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  skillUrl: string;
  rangoUrl: string;

  skill: Skills = null
  constructor(
    private skillS: SkillsService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute, 
    public urlService: UrlService) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const skills = new Skills(this.skillUrl, this.rangoUrl);
    this.skillS.save(skills).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
        window.location.reload();
      }, err => {
        this.router.navigate(['']);
      }
      )
  }


}
