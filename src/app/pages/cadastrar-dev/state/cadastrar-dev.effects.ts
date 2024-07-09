import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CadastrarDevService } from '../service/cadastrar-dev.service';
import { inject } from '@angular/core';
import { cadastrarDevActions } from './cadastrar-dev.actions';
import { map, switchMap, tap } from 'rxjs';

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
