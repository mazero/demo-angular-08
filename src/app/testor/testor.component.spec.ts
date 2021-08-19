import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestorComponent } from './testor.component';

describe('TestorComponent', () => {
  let component: TestorComponent;
  let fixture: ComponentFixture<TestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
