import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdminComponent } from './components/admin/admin.component';
import { TrainsComponent } from './components/trains/trains.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'search/:fromStationId/:toStationId/:dateOfTravel',
    component: SearchComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path:'trains',
    component:TrainsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
