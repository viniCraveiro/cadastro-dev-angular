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
  on(cadastrarDevActions.removeDev, (actualState, { id }) => {
    return {
      ...actualState,
      devs: actualState.devs.filter((d) => d._id !== id),
    };
  }
  ),
  on(cadastrarDevActions.editDev, (actualState, dev) => {
    return {
      ...actualState,
      devs: actualState.devs.map((d) => d._id === dev._id ? dev : d),
    };
  }),
);
