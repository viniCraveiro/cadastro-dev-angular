import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { InputGroupDirective } from './common/directives/input/input-group.directive';
import { TopbarComponent } from './layout/topbar/topbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    InputGroupDirective,
  ],
  providers: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
