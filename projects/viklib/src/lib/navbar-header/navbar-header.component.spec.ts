import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarHeaderComponent } from './navbar-header.component';

describe('NavbarHeaderComponent', () => {
  let component: NavbarHeaderComponent;
  let fixture: ComponentFixture<NavbarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarHeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
