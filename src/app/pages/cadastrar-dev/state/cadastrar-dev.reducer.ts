import { createReducer, on } from '@ngrx/store';
import { TDev } from '../cadastrar-dev.model';
import { cadastrarDevActions } from './cadastrar-dev.actions';

export interface IDevState {
  devs: TDev[],
  error: '' | null,
}

export const initialState: IDevState = {
  devs: [],
  error: null,
};

export const devReducer = createReducer(
  initialState,
  on(cadastrarDevActions.loadDevs, (actualState) => {
    console.log('--->', actualState);
    return {
      ...actualState,
    };
  }),
  on(cadastrarDevActions.loadDevsSucess, (actualState, devsObj) => {
    return {
      ...actualState,
      devs: devsObj.devs,
    };
  }),
  on(cadastrarDevActions.registerDev, (actualState, dev) => {
    return {
      ...actualState,
      devs: [...actualState.devs, dev],
    };
  }),
);
