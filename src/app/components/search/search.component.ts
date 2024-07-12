import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CadastrarDevService } from '../../pages/cadastrar-dev/service/cadastrar-dev.service';
import { cadastrarDevActions } from '../../pages/cadastrar-dev/state/cadastrar-dev.actions';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Input()
  width?: string = '100%';

  cadastrarDevService = inject(CadastrarDevService);
  store = inject(Store);

  private searchTerms = new Subject<string>();

  onSearch($event: any) {
    const term = $event.target.value.trim();
    this.searchTerms.next(term);

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => this.store.dispatch(cadastrarDevActions.searchDev({ username: term })));
  }


}
