import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOpinionesComponent } from './listar-opiniones.component';

describe('ListarOpinionesComponent', () => {
  let component: ListarOpinionesComponent;
  let fixture: ComponentFixture<ListarOpinionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOpinionesComponent]
    });
    fixture = TestBed.createComponent(ListarOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
