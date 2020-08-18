import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule} from '@ngrx/store';
import { EffectsModule, Actions} from '@ngrx/effects';
import { effects, featureKey, reducer } from './store/index';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RegionsComponent } from './components/regions/regions.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

const COMPONENTS = [
  RegionsComponent, CountriesComponent, CountryDetailsComponent, DropdownComponent
];

const MODULES = [SharedModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES,
    RouterModule.forChild([{ path: '', component: RegionsComponent }]),
    EffectsModule.forFeature(effects),
    StoreModule.forFeature(featureKey, reducer)
  ],

  entryComponents: [],
})
export class RegionModule {}
