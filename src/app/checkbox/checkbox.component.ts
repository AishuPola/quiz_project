import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() question: any;
}
