import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CadastrarDevService } from '../service/cadastrar-dev.service';
import { cadastrarDevActions } from './cadastrar-dev.actions';

const findAllDevsEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.loadDevs),
      switchMap(() => cadastrarDevService.listAll()
        .pipe(
          map((devs) => cadastrarDevActions.loadDevsSucess({ devs })),
        )
      ));
  }, { functional: true });

const registerDevEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.registerDev),
      switchMap((action) => cadastrarDevService.save(action)
        .pipe(
          map(() => cadastrarDevActions.loadDevs()),
        )
      ));
  }, { functional: true });

const removeDevEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.removeDev),
      switchMap((action) => cadastrarDevService.delete(action.id)
        .pipe(
          map(() => cadastrarDevActions.loadDevs()),
        ),
      ));
  }, { functional: true });

const editDevEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.editDev),
      switchMap((action) => cadastrarDevService.update(action)
        .pipe(
          map(() => cadastrarDevActions.loadDevs()),
        )
      ));
  }, { functional: true });

const searchDevEffect = createEffect(
  (actions$ = inject(Actions), cadastrarDevService = inject(CadastrarDevService)) => {
    return actions$.pipe(
      ofType(cadastrarDevActions.searchDev),
      switchMap((action) => cadastrarDevService.search(action.username)
        .pipe(
          map((devs) => cadastrarDevActions.loadDevsSucess({ devs })),
        )
      ));
  }, { functional: true }
);

export const cadastrarDevsEffects = {
  findAllDevsEffect,
  registerDevEffect,
  removeDevEffect,
  editDevEffect,
  searchDevEffect
};
