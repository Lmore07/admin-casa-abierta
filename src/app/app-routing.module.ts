import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"encabezado"},
  {path:"encabezado", component:EncabezadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
