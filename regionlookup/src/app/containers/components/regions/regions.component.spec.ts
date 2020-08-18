import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, inject } from '@angular/core';
import { RegionService } from 'src/app/shared/services/region.service';
import { of } from 'rxjs';
import * as action from '../../store/actions/region.actions';
import { Region } from 'src/app/shared/models/region.model';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/shared/models/country.model';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CountriesComponent } from '../countries/countries.component';
import { CountryDetailsComponent } from '../country-details/country-details.component';

const mockCountries: Country[] = [
];

@Injectable()
export class MockService extends RegionService {
  getCountries(regionName: string) {
    return of(mockCountries);
   }

}

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

@Injectable()
export class StoreMock {
  pipe = jasmine.createSpy();
  select =  jasmine.createSpy().and.returnValue(of(regions));
  dispatch = () => action.saveRegion({val: regions});
}

@Injectable()
export class EmptyStoreMock {
  pipe = jasmine.createSpy();
  select =  jasmine.createSpy().and.returnValue(of([]));
  dispatch = () => action.saveRegion({val: []});
}

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, BrowserModule,
        BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [ RegionsComponent, DropdownComponent, CountriesComponent, CountryDetailsComponent],
      providers: [
         { provide: Store, useClass: StoreMock },
         { provide: RegionService, useClass: MockService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscibe', () => {
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.regions$.closed).toBeTruthy();
   });

  it('should getCountries', () => {
    spyOn(component, 'getCountries').and.callThrough();
    const evt = fixture.debugElement.query(By.css('app-dropdown'));
    evt.triggerEventHandler('itemChange', regions[0]);
    fixture.detectChanges();

    expect(component.getCountries).toHaveBeenCalled();
  });
});
