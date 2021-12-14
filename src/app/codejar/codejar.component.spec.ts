import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodejarComponent } from './codejar.component';

describe('CodejarComponent', () => {
  let component: CodejarComponent;
  let fixture: ComponentFixture<CodejarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodejarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodejarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
