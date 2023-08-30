import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSalaryComponent } from './developer-salary.component';

describe('DeveloperSalaryComponent', () => {
  let component: DeveloperSalaryComponent;
  let fixture: ComponentFixture<DeveloperSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperSalaryComponent]
    });
    fixture = TestBed.createComponent(DeveloperSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
