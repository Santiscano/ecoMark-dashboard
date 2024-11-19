import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStarterComponent } from './test-starter.component';

describe('TestStarterComponent', () => {
  let component: TestStarterComponent;
  let fixture: ComponentFixture<TestStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestStarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
