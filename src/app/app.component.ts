import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFormComponent } from './main-form/main-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deep-angular-reused-form';
}
