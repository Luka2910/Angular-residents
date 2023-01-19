import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanariComponent } from './stanari.component';

describe('StanariComponent', () => {
  let component: StanariComponent;
  let fixture: ComponentFixture<StanariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StanariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
