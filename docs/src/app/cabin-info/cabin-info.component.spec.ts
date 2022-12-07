import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinInfoComponent } from './cabin-info.component';

describe('CabinInfoComponent', () => {
  let component: CabinInfoComponent;
  let fixture: ComponentFixture<CabinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
