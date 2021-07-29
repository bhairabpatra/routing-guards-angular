import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading!: boolean  ;
  constructor(private loaderService: LoaderService) {


     this.loaderService.isLoading.subscribe( res =>{
                this.isLoading = res

    })

  }



  ngOnInit(): void {

  }



}
