import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantasComponent } from './listar-plantas/listar-plantas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarPlantasComponent],
  declarations: [ListarPlantasComponent]
})
export class PlantasModule { }
