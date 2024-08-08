import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() question: any;
  @Output() AnsEvent = new EventEmitter<any>();
  @Input() answer: any;
  testForm!: FormGroup<any>;

  //  Only one time
  constructor(private fb: FormBuilder) {}

  // Every Time When Input or Output Chnages
  ngOnChanges() {
    console.log('cb⭐', this.answer);
    this.getpatchvalues();
  }

  getpatchvalues() {
    if (this.answer) {
      this.testForm?.patchValue(this.answer);
    } else {
      this.testForm?.reset();
    }
  }

  //  Only one time
  ngOnInit() {
    console.log('NgOnInit');
    this.testForm = this.fb.group({
      idx: this.fb.array(
        this.question.choices.map(() => this.fb.control(false))
      ),
    });

    this.getpatchvalues();
  }

  updatedAnswer() {
    console.log(this.testForm.value);
    this.AnsEvent.emit(this.testForm.value);
  }
}
