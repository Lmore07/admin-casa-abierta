import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PreguntasServiceService {


  Api: string = "https://casa-abierta-api.herokuapp.com/api";

  constructor(private clientHttp: HttpClient) { }

  get_questions(datos:any): Observable<any> {
    return this.clientHttp.post(this.Api + "/pregunta/add", datos);
  }
  
  obtiene_primera_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/primera/primera");
  }

  obtiene_primera_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/primera/segunda");
  }

  obtiene_primera_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/primera/tercera");
  }

  obtiene_segunda_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/segunda/primera");
  }

  obtiene_segunda_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/segunda/segunda");
  }

  obtiene_segunda_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/segunda/tercera");
  }

  obtiene_tercera_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/tercera/primera");
  }

  obtiene_tercera_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/tercera/segunda");
  }

  obtiene_tercera_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/tercera/tercera");
  }

  obtiene_cuarta_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/cuarta/primera");
  }

  obtiene_cuarta_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/cuarta/segunda");
  }

  obtiene_cuarta_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/cuarta/tercera");
  }

  obtiene_quinta_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/quinta/primera");
  }
  obtiene_quinta_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/quinta/segunda");
  }
  obtiene_quinta_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/quinta/tercera");
  }
  obtiene_sexta_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/sexta/primera");
  }
  obtiene_sexta_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/sexta/segunda");
  }
  obtiene_sexta_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/sexta/tercera");
  }
  obtiene_septima_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/septima/primera");
  }
  obtiene_septima_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/septima/segunda");
  }
  obtiene_septima_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/septima/tercera");
  }
  obtiene_octava_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/octava/primera");
  }
  obtiene_octava_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/octava/segunda");
  }
  obtiene_octava_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/octava/tercera");
  }
  obtiene_novena_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/novena/primera");
  }
  obtiene_novena_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/novena/segunda");
  }
  obtiene_novena_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/novena/tercera");
  }
  obtiene_decima_prim(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/decima/primera");
  }
  obtiene_decima_segun(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/decima/segunda");
  }
  obtiene_decima_terc(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/decima/tercera");
  }

  obtiene_nivel_1(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/total/primera");
  }
  obtiene_nivel_2(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/total/segunda");
  }
  obtiene_nivel_3(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/total/tercera");
  }
  obtiene_nivel_4(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/total/cuarta");
  }
  obtiene_nivel_5(): Observable<any> {
    return this.clientHttp.get(this.Api + "/pregunta/total/quinta");
  }


}
