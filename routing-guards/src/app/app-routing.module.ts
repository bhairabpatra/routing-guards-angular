import { SpecificCategoryComponent } from './componnet/specific-category/specific-category.component';
import { ProductsDetailsComponent } from './prodcuts/products-details/products-details.component';
import { ProductComponent } from './prodcuts/product/product.component';
import { LoginComponent } from './_auth/login/login.component';
import { AlbumListComponent } from './_guards/componnet/album-list/album-list.component';
import { PostComponent } from './componnet/post/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnet/home/home.component';
import { CanactiveGuard } from './_guards/canactive.guard';
import { AuthChildrenGuardGuard } from './_guards/auth-children-guard-.guard';
import { TrackListComponent } from './_guards/componnet/track-list/track-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post', component:PostComponent ,
                  canActivate: [CanactiveGuard],
                  canActivateChild: [AuthChildrenGuardGuard],

                  children: [

                    {path: 'tracks', component: AlbumListComponent},
                    {path: 'albums', component: TrackListComponent},
                  ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'app-product', component:ProductComponent ,  canActivate: [CanactiveGuard]},
  { path: 'app-product/:id', component:  ProductsDetailsComponent , canActivate: [CanactiveGuard] },
  {path:'categories/:cat' , component: SpecificCategoryComponent , canActivate: [CanactiveGuard]},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [CanactiveGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
