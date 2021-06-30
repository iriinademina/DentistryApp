import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoPatientComponent } from './detail-info-patient.component';

describe('DetailInfoPatientComponent', () => {
  let component: DetailInfoPatientComponent;
  let fixture: ComponentFixture<DetailInfoPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInfoPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
