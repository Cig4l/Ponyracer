import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsPoniesComponent } from './ns-ponies.component';

describe('NsPoniesComponent', () => {
  let component: NsPoniesComponent;
  let fixture: ComponentFixture<NsPoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NsPoniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsPoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
