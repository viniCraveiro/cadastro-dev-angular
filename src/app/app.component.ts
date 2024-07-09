import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { InputGroupDirective } from './common/directives/input/input-group.directive';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, InputGroupDirective],
  providers: [CommonModule, BrowserModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
