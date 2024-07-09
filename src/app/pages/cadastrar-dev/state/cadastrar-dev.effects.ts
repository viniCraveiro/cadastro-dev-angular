import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { CadastrarDevService } from '../service/cadastrar-dev.service';
import { cadastrarDevActions } from './cadastrar-dev.actions';

export const findAllDevsEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.loadDevs),
      tap(() => console.log('Passou pelo effect !')),
      switchMap(() => cadastrarDevService.listAll()
        .pipe(
          tap((devs) => console.log('devs:', devs)),
          map((devs) => cadastrarDevActions.loadDevsSucess({ devs })),
        )
      ));
  }, { functional: true });
