import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProyectosComponent } from './routing-proyectos.component';

describe('RoutingProyectosComponent', () => {
  let component: RoutingProyectosComponent;
  let fixture: ComponentFixture<RoutingProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
