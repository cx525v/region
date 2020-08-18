import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  dataSource: Country[];
  selectedCountry: Country;
  @Input()
  set countries(val: Country[]) {
    this.dataSource = val;
    this.selectedCountry = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onCountryChange(event: any) {
    this.selectedCountry = event;
  }
}
