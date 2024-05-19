import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchCompComponent } from './components/fetch/fetch-comp/fetch-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FetchCompComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
