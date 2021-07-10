import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsColactionsComponent } from './components-colactions.component';

describe('ComponentsColactionsComponent', () => {
  let component: ComponentsColactionsComponent;
  let fixture: ComponentFixture<ComponentsColactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsColactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsColactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
