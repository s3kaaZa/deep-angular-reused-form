import { Component, inject, Input } from '@angular/core';
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
  viewProviders: [
    {
      provide: ControlContainer, useExisting: FormGroupDirective
    }
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {
  @Input({ required: true}) key: string = '';
  @Input({ required: true}) groupLabel: string = '';

  parentContainer = inject(ControlContainer);
  form = new FormGroup({
    zip: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl('')
  });

  get parentFormGroup() {
    console.log(this.parentContainer.control);
    
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.key, this.form);
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.key);
  }
}
