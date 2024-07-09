import { State } from '../../../reducers/app.reducer';

export const devsSelector = (state: State) => state.devs.devs;
