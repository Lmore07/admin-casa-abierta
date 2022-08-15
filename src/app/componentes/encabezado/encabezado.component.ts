import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ChartOptions, ChartType } from 'chart.js';
import { PreguntasServiceService } from 'src/app/preguntas-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {

  //variables
  pregunta_texto: string;
  opcion_a:any;
  opcion_b:any;
  opcion_c:any;

  nivel_1:any; nivel_2:any;nivel_3:any; nivel_4:any; nivel_5:any;


  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ ];
  public pieChartDatasets = [ ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(public ruta: Router, public servicio:PreguntasServiceService) {}

  ngOnInit(): void {}
  
  seleccionado=0;

  empezar() {
    sessionStorage.setItem('num_preg', '1');
    Swal.fire({
      title: 'Ingresa tu carrera',
      input: 'text',
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      inputValidator: (nombre) => {
        // Si el valor es válido, debes regresar undefined. Si no, una cadena
        if (!nombre) {
          return 'Por favor escribe tu carrera';
        } else {
          return undefined;
        }
      },
    }).then((resultado) => {
      if (resultado.value) {
        this.ruta.navigateByUrl('/preguntas');
        sessionStorage.setItem('carrera', resultado.value);
      }
    });
    
  }

  elige_pregunta(){
    if(this.seleccionado==1){
      this.servicio.obtiene_primera_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_primera_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_primera_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="1. ¿Qué sentiría si se encuentra a la orilla de una terraza en un décimo piso?";
            this.pieChartLabels=[['Miedo'], ['Nervios'], 'Tranquilidad'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==2){
      this.servicio.obtiene_segunda_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_segunda_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_segunda_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="2. Si va en un automóvil a máxima velocidad, ¿Cuál sería su reacción?"
            this.pieChartLabels=[['Me bajo del automóvil'], ['Bajo la velocidad'], 'Acelero'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==3){
      this.servicio.obtiene_tercera_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_tercera_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_tercera_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="3. ¿En qué juego mecánico siente más adrenalina?";
            this.pieChartLabels=[['Platillo'], ['La barca pirata'], 'Vértigo'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==4){
      this.servicio.obtiene_cuarta_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_cuarta_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_cuarta_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="4. Si ve a un gatito en situación de peligro vial, ¿Qué haría?";
            this.pieChartLabels=[['Ignorarlo'], ['Lo ahuyento de la vía'], 'Lo rescato'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==5){
      this.servicio.obtiene_quinta_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_quinta_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_quinta_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="5. ¿Cuánto peso podría cargar?";
            this.pieChartLabels=[['Un bidón de agua'], ['Un tanque de gas lleno'], 'Un quintal de arroz'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==6){
      this.servicio.obtiene_sexta_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_sexta_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_sexta_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="6. ¿Qué tiempo resiste bajo el agua?";
            this.pieChartLabels=[['30 segundos'], ['1 minuto'], '3 minutos'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==7){
      this.servicio.obtiene_septima_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_septima_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_septima_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="7. ¿Qué medidas de seguridad toma si hay una fuga de gas?";
            this.pieChartLabels=[['Poner un trapo húmedo encima de la válvula del gas'], ['Revisar si las perillas de la cocina están cerradas'], 'Encender la luz'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==8){
      this.servicio.obtiene_octava_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_octava_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_octava_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="8. ¿En qué actividad tiene más agilidad?";
            this.pieChartLabels=[['Rayuela'], ['CrossFit'], 'Cuerda floja'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==9){
      this.servicio.obtiene_novena_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_novena_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_novena_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="9. Según su destreza, ¿Cuál de ellos puede construir?";
            this.pieChartLabels=[['Bajo'], ['Medio'], 'Avanzado'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==10){
      this.servicio.obtiene_decima_prim().subscribe(resp => {
        this.opcion_a = resp.total;
        this.servicio.obtiene_decima_segun().subscribe(resp => {
          this.opcion_b = resp.total;
          this.servicio.obtiene_decima_terc().subscribe(resp => {
            this.opcion_c = resp.total;
            console.log(this.opcion_a);
            console.log(this.opcion_b);
            console.log(this.opcion_c);
            this.pregunta_texto="10. ¿Qué tan competitivo(a) te consideras?";
            this.pieChartLabels=[['No me gusta competir'], ['Medio competitivo(a)'], 'Muy competitivo(a)'];
            this.pieChartDatasets=[{data:[this.opcion_a, this.opcion_b, this.opcion_c]}];
          });
        });
      });
    }else if(this.seleccionado==11){
      this.servicio.obtiene_nivel_1().subscribe(resp => {
        this.nivel_1 = resp.total;
        this.servicio.obtiene_nivel_2().subscribe(resp => {
          this.nivel_2 = resp.total;
          this.servicio.obtiene_nivel_3().subscribe(resp => {
            this.nivel_3 = resp.total;
            this.servicio.obtiene_nivel_4().subscribe(resp => {
              this.nivel_4 = resp.total;
              this.servicio.obtiene_nivel_5().subscribe(resp => {
                this.nivel_5 = resp.total;
                console.log(this.nivel_1);
                console.log(this.nivel_2);
                console.log(this.nivel_3);
                console.log(this.nivel_4);
                console.log(this.nivel_5);
                this.pregunta_texto="TOTAL DE NIVELES";
                this.pieChartLabels=[['NIVEL 1: MOTOCROSS'], ['NIVEL 2: CANOPY'], ["NIVEL 3: PARACAIDISMO"],["NIVEL 4: JUMPING"],["NIVEL 5: ESCALADA LIBRE"]];
                this.pieChartDatasets=[{data:[this.nivel_1, this.nivel_2, this.nivel_3,this.nivel_4,this.nivel_5]}];
              });
            });
          });
        });
      });
    }
  }
}
