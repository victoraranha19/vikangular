import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-text-input',
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
  input {
    font-size: 1em;
    padding: 8px 12px;
    border: none;
    border-bottom: 2px solid #999;
    background-color: #eee;
  }
  input:focus {
    outline: none;
    border-bottom: 2px solid #222;
  }
  `,
  template: `
    <section>
      <label for="text-input">{{ label }}</label>
      <input id="text-input" [placeholder]="placeholder" [value]="value" />
    </section>
  `,
})
export class TextInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';

  constructor() {}

  ngOnInit() {}
}
