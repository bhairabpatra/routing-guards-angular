import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Iproperty} from '../model/iproperty'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(

    private http: HttpClient

  ) { }

  ApiUrl: string ='https://fakestoreapi.com/auth/login';

  getLogin(login:string){
    return this.http.post(this.ApiUrl , login )
  }


  isLoggedIn(): boolean {
    if(localStorage.getItem('userToken')){
      return true;
    }
    else{
      return false
    }

  }

  isChild(): boolean {
    return true;
  }

  getallProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  get_a_singlep_roduct(id:number){

      return this.http.get('https://fakestoreapi.com/products/' + id )
  }

  sort_results(){
        return this.http.get('https://fakestoreapi.com/products?sort=desc')
  }

  get_all_categories(){
        return this.http.get('https://fakestoreapi.com/products/categories')
  }

  specific_category(cateogry:any){
        return this.http.get('https://fakestoreapi.com/products/category/' + cateogry)
  }

  properties:any=[]
  get_all_Users(){
        return this.http.get('https://fakestoreapi.com/users').pipe(
          map(data => {
                console.log("all data " + JSON.stringify(data))
               this.properties = data
          })
        )
  }
}
