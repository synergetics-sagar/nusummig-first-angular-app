import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
