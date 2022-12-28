import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  miPortfolio:any;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data[0];
    });
  }

}
