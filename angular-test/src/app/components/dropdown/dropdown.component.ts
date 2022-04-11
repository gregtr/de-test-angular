import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent{
  @Input() label!: string;
  @Input() optionsList!: string[] | any[];
  @Input() enabled: boolean = true;

  @Output() selectOption: EventEmitter<any> = new EventEmitter();
  
  onOptionChange(event: any): void {
    this.selectOption.emit(event.value);
  }
}