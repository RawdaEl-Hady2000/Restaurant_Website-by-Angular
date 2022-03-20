import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DataInMenuComponent } from './pages/data-in-menu/data-in-menu.component';

const routes: Routes = [
  // default path open home component if the path is empty
  {path:'', redirectTo:'home',pathMatch:'full'}, 
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/: order_id',component:DataInMenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
