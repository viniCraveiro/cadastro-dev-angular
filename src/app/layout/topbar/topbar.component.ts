import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {

  router = inject(Router);

  navigateCadastrarDev() {
    this.router.navigate(['/pages/cadastrar-dev']);
  }

}
