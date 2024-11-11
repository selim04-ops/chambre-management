import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChambreListComponent } from './components/chambre-list/chambre-list.component';
import { ChambreAddComponent } from './components/chambre-add/chambre-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChambreListComponent,
    ChambreAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
