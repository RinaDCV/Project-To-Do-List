import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedStickyComponent } from './deleted-sticky.component';

describe('DeletedStickyComponent', () => {
  let component: DeletedStickyComponent;
  let fixture: ComponentFixture<DeletedStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
