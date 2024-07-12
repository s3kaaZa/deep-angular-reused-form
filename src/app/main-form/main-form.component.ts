import { Component, inject, SkipSelf, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddressFormComponent } from '../address-form/address-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  encapsulation: ViewEncapsulation.None,
})
export class MainFormComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  snackBarMsg =
    "You can see the form data in the browser's developer console (Ctrl + Shift + J or Cmd + Option + J)";

  constructor(private snackBar: MatSnackBar) {}

  submit(): void {
    console.log(this.form.value);

    this.form.reset();

    this.openSnackBar(this.snackBarMsg, 'Done');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }
}
