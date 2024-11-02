import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViklibComponent } from './viklib.component';

describe('ViklibComponent', () => {
  let component: ViklibComponent;
  let fixture: ComponentFixture<ViklibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViklibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViklibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
