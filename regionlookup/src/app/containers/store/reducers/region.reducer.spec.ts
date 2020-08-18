import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/region.actions';
import * as reducer from './region.reducer';
import { Region } from 'src/app/shared/models/region.model';
import { Country } from 'src/app/shared/models/country.model';

const mockCountries: Country[] = [
  {
    name: 'Bhutan',
    flag: 'https://restcountries.eu/data/btn.svg',
    currencies: [{name: 'Indian rupee'}],
    population: 	775620,
    capital: 'Thimphu'
  },
  {
    name: 'India',
    flag: 'https://restcountries.eu/data/ind.svg',
    currencies: [{name: 'Indian rupee'}],
    population: 	1295210000,
    capital: 'New Delhi'
  }
];

const regions: Region [] = [
  {
   name: 'asia',
   countries: mockCountries
  },
  {
    name: 'europe',
    countries: mockCountries
  }
 ];

describe('region reducer', () => {
  it('should reducer save', () => {

    const action = actions.saveRegion({val: regions});
    const state = reducer.reducer(reducer.initialState, action);

    expect(state.val[0].name).toEqual('asia');
    expect(state.val[1].name).toEqual('europe');

  });
});
