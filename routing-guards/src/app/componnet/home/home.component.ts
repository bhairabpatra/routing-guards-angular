import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_auth/user.service';
import { Title } from '@angular/platform-browser';
import {SearchService } from '../../_auth/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCountry: String = "--Choose Country--";
  states: Array<any> = []; //Angular 11
	cities: Array<any> = []; //Angular 11


  results: any[] = [];
	searchResults: any[] = [];


  constructor(private title: Title , private SearchService: SearchService) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Cascading or Dependent Dropdown');
    this.getSearchResults();
  }

  Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  changeCountry(country: any){
    this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; //Angular 11
    console.log( "  this.states--------" + JSON.stringify (this.states) )
	}
  changeState(state: any){
    this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
  }


  getSearchResults():void{

    this.SearchService.getResultList().subscribe(sr => {Object.assign(this.searchResults, sr);});

  }

  searchOnKeyUp(event:any) {
		let input = event.target.value;
		//console.log('event.target.value: ' + input);
		//console.log('this.searchResults: ' + this.searchResults);
		if (input.length > 1) {
			this.results = this.searchFromArray(this.searchResults, input);
		}
	}

  searchFromArray(arr: string | any[], regex: any) {
		let matches = [], i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].match(regex)) {
				matches.push(arr[i]);
			}
		}
		//console.log('matches: ' + matches);
		return matches;
	};

  }



