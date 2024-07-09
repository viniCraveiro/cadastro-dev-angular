import { createAction, props } from '@ngrx/store';
import { TDev, TRegisterDev } from '../cadastrar-dev.model';

const loadDevs = createAction('[CadastrarDev] Load Devs');
const loadDevsSucess = createAction('[CadastrarDev] Load Devs Sucess', props<{ devs: TDev[]; }>());
const registerDev = createAction('[CadastrarDev] Register Dev', props<TRegisterDev>());
const removeDev = createAction('[CadastrarDev] Remove Dev', props<{ id: string }>());
const editDev = createAction('[CadastrarDev] Edit Dev', props<TDev>());

export const cadastrarDevActions = {
  loadDevs,
  loadDevsSucess,
  registerDev,
  removeDev,
  editDev,
};
