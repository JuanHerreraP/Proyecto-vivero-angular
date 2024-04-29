/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarPlantasComponent } from './listar-plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { Plantas } from '../plantas';
import { PlantasService } from '../plantas.service';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantasComponent ],
      providers: [ PlantasService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const planta = new Plantas(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);
    }
 
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a thead', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });
  it('should have 3 rows', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3)
  });
});
