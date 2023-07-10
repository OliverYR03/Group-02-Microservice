import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOpinionComponent } from './registrar-opinion.component';

describe('RegistrarOpinionComponent', () => {
  let component: RegistrarOpinionComponent;
  let fixture: ComponentFixture<RegistrarOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarOpinionComponent]
    });
    fixture = TestBed.createComponent(RegistrarOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
