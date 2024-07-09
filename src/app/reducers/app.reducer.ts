import {
  ActionReducerMap
} from '@ngrx/store';
import { devReducer, IDevState } from '../pages/cadastrar-dev/state/cadastrar-dev.reducer';

export interface State {
  devs: IDevState;
}

export const reducers: ActionReducerMap<State> = {
  devs: devReducer
};
