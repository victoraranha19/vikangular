import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-select-field',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./select-field.component.scss'],
  template: `
    <section>
      <label for="select">{{ label }}</label>
    </section>
  `,
})
export class SelectFieldComponent implements OnInit {
  @Input() label = '';
  @Input() options: string[] = [];

  constructor() {}

  ngOnInit() {}
}
