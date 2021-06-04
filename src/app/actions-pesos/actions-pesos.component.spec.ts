import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPesosComponent } from './actions-pesos.component';

describe('ActionsPesosComponent', () => {
  let component: ActionsPesosComponent;
  let fixture: ComponentFixture<ActionsPesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPesosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
