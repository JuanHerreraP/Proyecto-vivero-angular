import { Component, OnInit } from '@angular/core';
import { Plantas } from '../plantas'
import { PlantasService } from '../plantas.service'

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  plantas:Array<Plantas> = [];
  contador_interior:number = 0;
  contador_exterior:number = 0;

  constructor(private plantasService:PlantasService) { }

  ngOnInit():void {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.contador_interior = plantas.reduce(function(contador, planta) {
        if (planta.tipo === "Interior") {
          return contador + 1;
        } else {
          return contador;
        }
      }, 0);
      this.contador_exterior = plantas.reduce(function(contador, planta) {
        if (planta.tipo === "Exterior") {
          return contador + 1;
        } else {
          return contador;
        }
      }, 0);
    });
  }

}
