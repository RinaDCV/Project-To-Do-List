import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedStickyComponent } from './archived-sticky.component';

describe('ArchivedStickyComponent', () => {
  let component: ArchivedStickyComponent;
  let fixture: ComponentFixture<ArchivedStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
