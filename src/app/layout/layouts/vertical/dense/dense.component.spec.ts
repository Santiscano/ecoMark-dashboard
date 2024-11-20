import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenseComponent } from './dense.component';

describe('DenseComponent', () => {
  let component: DenseComponent;
  let fixture: ComponentFixture<DenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
