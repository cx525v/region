import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  dataSource: Country[];

  @Input()
  set country(val: Country) {
    if (val) {
      this.dataSource = [];
      this.dataSource.push(val);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
