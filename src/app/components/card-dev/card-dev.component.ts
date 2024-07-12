import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TDev } from '../../pages/cadastrar-dev/cadastrar-dev.model';

@Component({
  selector: 'app-card-dev',
  standalone: true,
  imports: [],
  templateUrl: './card-dev.component.html',
  styleUrl: './card-dev.component.scss'
})
export class CardDevComponent {

  @Input({ required: true })
  data: TDev = { _id: '', name: '', city: '', technologies: '', avatarURL: '', userGithub: '' };
  @Output() delete = new EventEmitter<TDev>();
  @Output() edit = new EventEmitter<TDev>();


  openGitHub() {
    window.open('https://github.com/' + this.data.userGithub, '_blank');
  }

  editCard(dev: TDev) {
    this.edit.emit(dev);
  }

  deleteCard(dev: TDev) {
    this.delete.emit(dev);
  }

}
