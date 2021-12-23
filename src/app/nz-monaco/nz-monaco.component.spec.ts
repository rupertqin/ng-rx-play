import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzMonacoComponent } from './nz-monaco.component';

describe('NzMonacoComponent', () => {
  let component: NzMonacoComponent;
  let fixture: ComponentFixture<NzMonacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzMonacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzMonacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
