import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServiceService } from '../../_auth/service.service';
@Component({
  selector: 'app-specific-category',
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.scss']
})
export class SpecificCategoryComponent implements OnInit {

  cateogory_param?: any;
  productdetails:any =[];
  constructor(
              private Activatedroute:ActivatedRoute,
              private router:Router,
              private pro_Service:ServiceService) { }

  ngOnInit(): void {

      this.cateogory_param = this.Activatedroute.snapshot.paramMap.get('cat')
      console.log("cateogory_--------" + this.cateogory_param)
      this.category_details(this.cateogory_param )
  }

  category_details(cateogory_param:any){

    return this.pro_Service.specific_category(cateogory_param).subscribe((res) => {

      this.productdetails = res

      console.log("" + this.productdetails)

})
  }
}
