import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  @Input() text: string = "Click";
  @Input() color: string = "none";
  @Output() btnClick = new EventEmitter();
  
  onClick() {
    this.btnClick.emit();
  }
}
