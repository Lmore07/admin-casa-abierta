import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { NgChartsModule } from 'ng2-charts';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';


@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    NgChartsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forChild(),
    SweetAlert2Module,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
