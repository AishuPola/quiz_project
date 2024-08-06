import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {}
