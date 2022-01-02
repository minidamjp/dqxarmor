import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorAddComponent } from './armor-add.component';

describe('ArmorAddComponent', () => {
  let component: ArmorAddComponent;
  let fixture: ComponentFixture<ArmorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
