import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStanariComponent } from './add-edit-stanari.component';

describe('AddEditStanariComponent', () => {
  let component: AddEditStanariComponent;
  let fixture: ComponentFixture<AddEditStanariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStanariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStanariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
