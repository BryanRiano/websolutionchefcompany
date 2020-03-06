import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsCreateComponent } from './payments-create.component';

describe('PaymentsCreateComponent', () => {
  let component: PaymentsCreateComponent;
  let fixture: ComponentFixture<PaymentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
