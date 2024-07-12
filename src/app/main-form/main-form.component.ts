import { Component, inject, SkipSelf, ViewEncapsulation } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AddressFormComponent,
  ],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainFormComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
