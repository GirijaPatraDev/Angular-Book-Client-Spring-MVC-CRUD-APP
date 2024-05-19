import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCompComponent } from './fetch-comp.component';

describe('FetchCompComponent', () => {
  let component: FetchCompComponent;
  let fixture: ComponentFixture<FetchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
