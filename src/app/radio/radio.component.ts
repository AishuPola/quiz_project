import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioModule, ReactiveFormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  @Input() question: any;
  @Output() AnsEvent = new EventEmitter<any>();
  @Input() answer: any;
  testForm!: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      idx: '',
    });
  }

  ngOnChanges() {
    console.log('🛒', this.answer);
    if (this.answer) {
      this.testForm.patchValue(this.answer);
    } else {
      this.testForm.reset();
    }
  }

  updatedAnswer() {
    console.log(this.testForm.value);
    this.AnsEvent.emit(this.testForm.value);
  }
}
