import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaPersonalizadaComponent } from './directiva-personalizada.component';

describe('DirectivaPersonalizadaComponent', () => {
  let component: DirectivaPersonalizadaComponent;
  let fixture: ComponentFixture<DirectivaPersonalizadaComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaPersonalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
