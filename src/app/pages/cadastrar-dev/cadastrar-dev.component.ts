import { Component } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { InputGroupDirective } from '../../common/directives/input/input-group.directive';
import { CardDevComponent } from '../../components/card-dev/card-dev.component';

@Component({
  selector: 'app-cadastrar-dev',
  standalone: true,
    imports: [TopbarComponent, InputGroupDirective, CardDevComponent],
  templateUrl: './cadastrar-dev.component.html',
  styleUrl: './cadastrar-dev.component.scss'
})
export class CadastrarDevComponent {

}
