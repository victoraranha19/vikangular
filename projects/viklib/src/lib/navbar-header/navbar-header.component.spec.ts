/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeaderComponent } from './navbar-header.component';

describe('NavbarHeaderComponent', () => {
  let component: NavbarHeaderComponent;
  let fixture: ComponentFixture<NavbarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarHeaderComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarHeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
