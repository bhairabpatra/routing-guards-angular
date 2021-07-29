import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../_auth/service.service';

@Component({
  selector: 'app-get-all-categories',
  templateUrl: './get-all-categories.component.html',
  styleUrls: ['./get-all-categories.component.scss']
})
export class GetAllCategoriesComponent implements OnInit {

  all_categories:any =[]
  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    this.get_all_categories()
  }

  get_all_categories(){

    this.service.get_all_categories().subscribe( (res) => {
          this.all_categories = res

    })

  }

}
