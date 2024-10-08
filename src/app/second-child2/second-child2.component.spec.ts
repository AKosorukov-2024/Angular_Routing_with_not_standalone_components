import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild2Component } from './second-child2.component';

describe('SecondChild2Component', () => {
  let component: SecondChild2Component;
  let fixture: ComponentFixture<SecondChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
