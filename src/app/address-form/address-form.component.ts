import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: ControlContainer, useExisting: FormGroupDirective
    }
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input({ required: true}) key: string = '';
  @Input({ required: true}) groupLabel: string = '';

  parentContainer = inject(ControlContainer);
  form = new FormGroup({
    zip: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl('')
  });

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.key, this.form);
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.key);
  }
}
