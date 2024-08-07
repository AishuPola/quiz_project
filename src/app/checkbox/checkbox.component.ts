import { Component, Input } from '@angular/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, MatCheckboxModule,MatCheckbox],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() question: any;
}
