import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/region.actions';
import { Region } from 'src/app/shared/models/region.model';

export interface State {
  val: Region[];
}

export const initialState: State = {
  val: [
    {
      name: 'europe',
      countries: []
    },
    {
      name: 'asia',
      countries: []
    },
  ]
};


const saveRegion = createReducer(
  initialState,
  on(actions.saveRegion, (state, props) => ({
    ...state,
    val: props.val
  }))
);

export function reducer(state: State | undefined, action: Action) {
    return saveRegion(state, action);
}
