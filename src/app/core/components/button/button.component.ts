import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
