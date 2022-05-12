import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgProgramaComponent } from './arg-programa.component';

describe('ArgProgramaComponent', () => {
  let component: ArgProgramaComponent;
  let fixture: ComponentFixture<ArgProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
