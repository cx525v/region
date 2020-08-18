import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';
import * as action from '../../store/actions/region.actions';
import { Region } from 'src/app/shared/models/region.model';
import { Country } from 'src/app/shared/models/country.model';
import { RegionService } from 'src/app/shared/services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnDestroy {
  regions: Region[];
  countries: Country[];

  regions$: Subscription;

  constructor(private service: RegionService, private store: Store<State>) { }

  ngOnDestroy(): void {
    this.regions$.unsubscribe();
  }

  ngOnInit(): void {
    this.regions$ = this.store.select(selectors.regionSelector).subscribe(
      r =>  {
        this.regions = r as Region [];
      }
    );
  }

  getCountries(regionName: string) {
    this.countries = [];
    const region = this.regions.filter (r => r.name === regionName)[0];

    if (region.countries && region.countries.length > 0) {
      this.countries = region.countries;
    } else {
      this.service.getCountries(regionName).subscribe((res: Country[]) => {
        this.countries = res;
        const newRegions = [];

        this.regions.forEach(r => {
           if (r.name === regionName) {
             newRegions.push(
               {
                 name: r.name,
                 countries: res
               }
             );
          } else {
            newRegions.push(
              {
                name: r.name,
                countries: r.countries
              }
            );
          }
        });

        this.store.dispatch(action.saveRegion({val: newRegions}));
     });
   }
  }

  onRegionChange(event) {
    this.getCountries(event.name);
  }
}
