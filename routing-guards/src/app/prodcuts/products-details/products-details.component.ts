import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServiceService } from '../../_auth/service.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  id_param?: any;
  productdetails:any =[];
  constructor(
              private Activatedroute:ActivatedRoute,
              private router:Router,
              private pro_Service:ServiceService) { }

  ngOnInit() {

      this.id_param = this.Activatedroute.snapshot.paramMap.get('id')
      this.product_details(this.id_param )
  }

  product_details(id:any){

        return this.pro_Service.get_a_singlep_roduct(id).subscribe((res) => {

                this.productdetails = res

                console.log("" + this.productdetails)

        })
  }
}
