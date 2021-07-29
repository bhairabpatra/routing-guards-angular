import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../_auth/service.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedValue = '';
  allProducts: any= []
  changeFilterData:any[] = [];
  pipeFilterData:any[] =  [];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    this.getallProducts()

  }


  getallProducts(){
      this.service.getallProducts().subscribe((products) =>{
            this.allProducts = products

      })

  }

   cars = ['price','popularity','rating']


   onSelectChange(event:any){
    let selectedValue = event.target.value;

    console.log(selectedValue)


    // You can implement filtering logic depending on the selectedValue
    if(selectedValue == 'price'){
      this.changeFilterData = this.allProducts.sort()
    }else if(selectedValue == 'popularity'){
      this.changeFilterData =  this.allProducts
    }else if(selectedValue == 'rating'){
      this.changeFilterData =  this.allProducts;
    }else{
      this.changeFilterData =  [];
    }
  }
}
