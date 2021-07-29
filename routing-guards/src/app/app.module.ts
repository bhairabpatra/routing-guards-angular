import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componnet/home/home.component';
import { PostComponent } from './componnet/post/post.component';
import { ServiceService } from './_auth/service.service';
import { TrackListComponent } from './_guards/componnet/track-list/track-list.component';
import { AlbumListComponent } from './_guards/componnet/album-list/album-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './_auth/user.service';
import { LoginComponent } from './_auth/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductComponent } from './prodcuts/product/product.component';
import { SortByPipe } from './prodcuts/sort-by.pipe';
import { ProductsDetailsComponent } from './prodcuts/products-details/products-details.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './shared/loader.service';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { GetAllCategoriesComponent } from './componnet/get-all-categories/get-all-categories.component';
import { SpecificCategoryComponent } from './componnet/specific-category/specific-category.component';
import { UserComponent } from './dashboard/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    TrackListComponent,
    AlbumListComponent,
    LoginComponent,
    ProductComponent,
    SortByPipe,
    ProductsDetailsComponent,
    LoaderComponent,
    GetAllCategoriesComponent,
    SpecificCategoryComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,

  ],
  providers: [ServiceService , LoaderService ,UserService ,

    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
