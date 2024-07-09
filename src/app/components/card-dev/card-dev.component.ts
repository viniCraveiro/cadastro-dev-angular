import { Component, Input } from '@angular/core';
import { TDev } from '../../pages/cadastrar-dev/cadastrar-dev.model';

@Component({
  selector: 'app-card-dev',
  standalone: true,
  imports: [],
  templateUrl: './card-dev.component.html',
  styleUrl: './card-dev.component.scss'
})
export class CardDevComponent {

  @Input()
  data!: TDev;

  openGitHub() {
    window.open('https://github.com/' + this.data.userGithub, '_blank');
  }

}
