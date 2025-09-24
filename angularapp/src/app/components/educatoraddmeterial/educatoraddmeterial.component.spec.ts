import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatoraddmeterialComponent } from './educatoraddmeterial.component';

describe('EducatoraddmeterialComponent', () => {
  let component: EducatoraddmeterialComponent;
  let fixture: ComponentFixture<EducatoraddmeterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatoraddmeterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatoraddmeterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
