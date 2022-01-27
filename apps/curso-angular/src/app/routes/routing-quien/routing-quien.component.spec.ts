import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingQuienComponent } from './routing-quien.component';

describe('RoutingQuienComponent', () => {
  let component: RoutingQuienComponent;
  let fixture: ComponentFixture<RoutingQuienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingQuienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingQuienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
