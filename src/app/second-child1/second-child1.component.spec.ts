import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild1Component } from './second-child1.component';

describe('SecondChild1Component', () => {
  let component: SecondChild1Component;
  let fixture: ComponentFixture<SecondChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
