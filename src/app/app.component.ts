import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { InputGroupDirective } from './common/directives/input/input-group.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, InputGroupDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
