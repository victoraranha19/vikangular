import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-textarea',
  standalone: true,
  styles: `
  section {
    display: grid;
    gap: 6px;
  }
  label {
    font-size: 0.9em;
    font-weight: bold;
  }
  textarea {
    font-size: 1em;
    padding: 8px 12px;
    border: none;
    border-bottom: 2px solid #999;
    background-color: #eee;
  }
  textarea:focus {
    outline: none;
    border-bottom: 2px solid #222;
  }
  `,
  template: `
    <section>
      <label for="textarea">{{ label }}</label>
      <textarea
        name=""
        id="textarea"
        [value]="value"
        [placeholder]="placeholder"
      ></textarea>
    </section>
  `,
})
export class TextareaComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';

  constructor() {}

  ngOnInit() {}
}
