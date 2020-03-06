import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesRecordComponent } from './invoices-record.component';

describe('InvoicesRecordComponent', () => {
  let component: InvoicesRecordComponent;
  let fixture: ComponentFixture<InvoicesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
