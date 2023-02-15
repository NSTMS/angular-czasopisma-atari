import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbooksComponent } from './yearbooks.component';

describe('YearbooksComponent', () => {
  let component: YearbooksComponent;
  let fixture: ComponentFixture<YearbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
