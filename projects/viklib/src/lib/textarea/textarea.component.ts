import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  styleUrls: ['./textarea.component.scss'],
  template: `
    <section>
      <label for="textarea">{{ label }}</label>
      <textarea
        name="{{ label }}"
        id="textarea"
        [value]="value"
        [placeholder]="placeholder"
        [formControl]="formControl"
      ></textarea>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() formControl: UntypedFormControl = new UntypedFormControl(null);

  @ViewChild('textarea') textarea!: TemplateRef<Element>;

  constructor() {}

  ngOnInit() {}
}
