import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      imports:  [ SharedModule, BrowserModule,
        BrowserAnimationsModule, NoopAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display country', () => {
    component.country = {
      name: 'India',
      flag: 'https://restcountries.eu/data/ind.svg',
      currencies: [{name: 'Indian rupee'}],
      population: 1295210000,
      capital: 'New Delhi'
    };

    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('table'));
    const trs = table.queryAll(By.css('tr'));
    expect(trs.length).toEqual(2);

    const tds = trs[1].queryAll(By.css('td'));
    expect(tds[0].nativeElement.textContent.trim()).toEqual('India');
  });
});
