import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[vikButton]',
})
export class ButtonDirective implements OnInit {
  @Input() kind: IButtonKind = 'default';

  private _color = purpleColor;

  @HostBinding('style.backgroundColor') backgroundColor = this._color.t0;
  @HostBinding('style.borderStyle') borderStyle = 'none';
  @HostBinding('style.borderRadius') borderRadius = '8px';
  @HostBinding('style.color') color = this._color.contrast;
  @HostBinding('style.minWidth') minWidth = '80px';
  @HostBinding('style.minHeight') minHeight = '40px';
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.fontWeight') fontWeight = 'bold';
  @HostBinding('style.textTransform') textTransform = 'uppercase';
  @HostBinding('style.padding') padding = '0 32px';

  constructor(private element: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    switch (this.kind) {
      case 'pink':
        this._color = pinkColor;
        break;
      default:
        this._color = purpleColor;
        break;
    }
    this.backgroundColor = this._color.t0;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this._color.t2;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = this._color.t0;
  }
  @HostListener('mousedown') onMouseDown() {
    this.element.nativeElement.style.backgroundColor = this._color.t2;
  }
  @HostListener('mouseup') onMouseUp() {
    this.element.nativeElement.style.backgroundColor = this._color.t1;
  }
}

type IButtonKind = 'default' | 'purple' | 'pink';
interface IColorPallet {
  t0: string;
  t1: string;
  t2: string;
  contrast: string;
}
const purpleColor: IColorPallet = {
  t0: '#99f',
  t1: '#77f',
  t2: '#55f',
  contrast: '#fff',
};
const pinkColor: IColorPallet = {
  t0: '#fbb',
  t1: '#f99',
  t2: '#f77',
  contrast: '#fff',
};