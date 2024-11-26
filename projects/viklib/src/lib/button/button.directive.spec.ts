import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDirective } from './button.directive';

describe('Directive: Button', () => {
  let directive: ButtonDirective;
  let fixture: ComponentFixture<ButtonDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDirective],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonDirective);
    directive = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
