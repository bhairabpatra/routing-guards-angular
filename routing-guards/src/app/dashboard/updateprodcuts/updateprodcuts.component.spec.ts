import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprodcutsComponent } from './updateprodcuts.component';

describe('UpdateprodcutsComponent', () => {
  let component: UpdateprodcutsComponent;
  let fixture: ComponentFixture<UpdateprodcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprodcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprodcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
