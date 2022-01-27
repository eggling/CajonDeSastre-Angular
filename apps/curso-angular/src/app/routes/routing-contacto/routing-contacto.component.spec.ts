import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingContactoComponent } from './routing-contacto.component';

describe('RoutingContactoComponent', () => {
  let component: RoutingContactoComponent;
  let fixture: ComponentFixture<RoutingContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
