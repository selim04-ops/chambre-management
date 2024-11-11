import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChambreListComponent } from './components/chambre-list/chambre-list.component';
import { ChambreAddComponent } from './components/chambre-add/chambre-add.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'chambre-list', component: ChambreListComponent },
  { path: 'add-chambre', component:ChambreAddComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
