import { Component, AfterViewInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PreguntasServiceService } from 'src/app/preguntas-service.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements AfterViewInit {
  Pregunta: any;
  @ViewChild('opcion1') public opcion1: ElementRef;
  @ViewChild('pregunta') public pregunta: ElementRef;
  @ViewChild('opcion2') public opcion2: ElementRef;
  @ViewChild('opcion3') public opcion3: ElementRef;
  @ViewChild('boton') public boton: ElementRef;
  faQuestion = iconos.faQuestionCircle;

  opciones: any;
  datos: any;
  num_pre: any = 1;

  puntaje1: any;
  opt1: any;
  puntaje2: any;
  opt2: any;
  puntaje3: any;
  opt3: any;
  puntaje4: any;
  opt4: any;
  puntaje5: any;
  opt5: any;
  puntaje6: any;
  opt6: any;
  puntaje7: any;
  opt7: any;
  puntaje8: any;
  opt8: any;
  puntaje9: any;
  opt9: any;
  puntaje10: any;
  opt10: any;
  puntaje_total: any;
  puntaje_texto: any;
  imagen: any;

  constructor(
    public ruta: Router,
    private preguntas: PreguntasServiceService
  ) {}

  ngAfterViewInit(): void {
    if (sessionStorage.getItem('num_preg') != null) {
      this.num_pre = sessionStorage.getItem('num_preg');
      this.cargar_elementos();
    } else {
      this.ruta.navigateByUrl('/encabezado');
    }
  }

  cargar_elementos() {
    this.datos = [this.opcion1, this.opcion2, this.opcion3];
    var sig = sessionStorage.getItem('num_preg').toString();
    if (sig == '1') {
      this.pregunta.nativeElement.innerText =
        '1. ¿Qué sentiría si se encuentra a la orilla de una terraza en un décimo piso?';
      this.datos[0].nativeElement.innerText = 'Miedo';
      this.datos[1].nativeElement.innerText = 'Nervios';
      this.datos[2].nativeElement.innerText = 'Tranquilidad';
    } else if (sig == '2') {
      this.pregunta.nativeElement.innerText =
        '2. Si va en un automóvil a máxima velocidad, ¿Cuál sería su reacción?';
      this.datos[0].nativeElement.innerText = 'Me bajo del automóvil';
      this.datos[1].nativeElement.innerText = 'Bajo la velocidad';
      this.datos[2].nativeElement.innerText = 'Acelero';
    } else if (sig == '3') {
      this.pregunta.nativeElement.innerText =
        '3. ¿En qué juego mecánico siente más adrenalina?';
      this.datos[0].nativeElement.innerText = 'Platillo';
      this.datos[1].nativeElement.innerText = 'La barca pirata';
      this.datos[2].nativeElement.innerText = 'Vértigo';
    } else if (sig == '4') {
      this.pregunta.nativeElement.innerText =
        '4. Si ve a un gatito en situación de peligro vial, ¿Qué haría?';
      this.datos[0].nativeElement.innerText = 'Ignorarlo';
      this.datos[1].nativeElement.innerText = 'Lo ahuyento de la vía';
      this.datos[2].nativeElement.innerText = 'Lo rescato';
    } else if (sig == '5') {
      this.pregunta.nativeElement.innerText = '5. ¿Cuánto peso podría cargar?';
      this.datos[0].nativeElement.innerText = 'Un bidón de agua';
      this.datos[1].nativeElement.innerText = 'Un tanque de gas lleno';
      this.datos[2].nativeElement.innerText = 'Un quintal de arroz';
    } else if (sig == '6') {
      this.pregunta.nativeElement.innerText =
        '6. ¿Qué tiempo resiste bajo el agua?';
      this.datos[0].nativeElement.innerText = '30 segundos';
      this.datos[1].nativeElement.innerText = '1 minuto';
      this.datos[2].nativeElement.innerText = '3 minutos';
    } else if (sig == '7') {
      this.pregunta.nativeElement.innerText =
        '7. ¿Qué medidas de seguridad toma si hay una fuga de gas?';
      this.datos[0].nativeElement.innerText =
        'Poner un trapo húmedo encima de la válvula del gas';
      this.datos[1].nativeElement.innerText =
        'Revisar si las perillas de la cocina están cerradas';
      this.datos[2].nativeElement.innerText = 'Encender la luz';
    } else if (sig == '8') {
      this.pregunta.nativeElement.innerText =
        '8. ¿En qué actividad tiene más agilidad?';
      this.datos[0].nativeElement.innerText = 'Rayuela';
      this.datos[1].nativeElement.innerText = 'CrossFit';
      this.datos[2].nativeElement.innerText = 'Cuerda floja';
    } else if (sig == '9') {
      this.pregunta.nativeElement.innerText =
        '9. Según su destreza, ¿Cuál de ellos puede construir?';
      this.datos[0].nativeElement.innerText = 'Bajo';
      this.datos[1].nativeElement.innerText = 'Medio';
      this.datos[2].nativeElement.innerText = 'Avanzado';
    } else if (sig == '10') {
      this.pregunta.nativeElement.innerText =
        '10. ¿Qué tan competitivo(a) te consideras?';
      this.datos[0].nativeElement.innerText = 'No me gusta competir';
      this.datos[1].nativeElement.innerText = 'Medio competitivo(a)';
      this.datos[2].nativeElement.innerText = 'Muy competitivo(a)';
    }
  }

  selecciona = false;

  fun_estilo1() {
    this.estilo1 = { border: '5px solid green', 'pointer-events': 'none' };
    this.estilo2 = this.concatJSON2(this.estilo2);
    this.estilo3 = this.concatJSON2(this.estilo3);
  }

  fun_estilo2() {
    this.estilo2 = { border: '5px solid green', 'pointer-events': 'none' };
    this.estilo1 = this.concatJSON2(this.estilo1);
    this.estilo3 = this.concatJSON2(this.estilo3);
  }

  fun_estilo3() {
    this.estilo3 = { border: '5px solid green', 'pointer-events': 'none' };
    this.estilo2 = this.concatJSON2(this.estilo2);
    this.estilo1 = this.concatJSON2(this.estilo1);
  }

  comprueba(opcion: any) {
    var sig = sessionStorage.getItem('num_preg').toString();
    this.selecciona = true;
    if (sig == '1') {
      if (opcion == 'opcion1') {
        this.opt1 = this.opcion1.nativeElement.innerText;
        this.puntaje1 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt1 = this.opcion2.nativeElement.innerText;
        this.puntaje1 = 5;
        this.fun_estilo2();
      } else if (opcion == 'opcion3') {
        this.opt1 = this.opcion3.nativeElement.innerText;
        this.puntaje1 = 10;
        this.fun_estilo3();
      }
      sessionStorage.setItem('puntaje1', this.puntaje1.toString());
      sessionStorage.setItem('pregunta1', this.opt1.toString());
    } else if (sig == '2') {
      if (opcion == 'opcion1') {
        this.opt2 = this.opcion1.nativeElement.innerText;
        this.puntaje2 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt2 = this.opcion2.nativeElement.innerText;
        this.puntaje2 = 5;
        this.fun_estilo2();
      } else if (opcion == 'opcion3') {
        this.opt2 = this.opcion3.nativeElement.innerText;
        this.puntaje2 = 10;
        this.fun_estilo3();
      }
      sessionStorage.setItem('puntaje2', this.puntaje2.toString());
      sessionStorage.setItem('pregunta2', this.opt2.toString());
    } else if (sig == '3') {
      if (opcion == 'opcion1') {
        this.opt3 = this.opcion1.nativeElement.innerText;
        this.puntaje3 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt3 = this.opcion2.nativeElement.innerText;
        this.puntaje3 = 5;
        this.fun_estilo2();
      } else if (opcion == 'opcion3') {
        this.opt3 = this.opcion3.nativeElement.innerText;
        this.puntaje3 = 10;
        this.fun_estilo3();
      }
      sessionStorage.setItem('puntaje3', this.puntaje3.toString());
      sessionStorage.setItem('pregunta3', this.opt3.toString());
    } else if (sig == '4') {
      if (opcion == 'opcion1') {
        this.opt4 = this.opcion1.nativeElement.innerText;
        this.puntaje4 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt4 = this.opcion2.nativeElement.innerText;
        this.puntaje4 = 5;
        this.fun_estilo2();
      } else if (opcion == 'opcion3') {
        this.opt4 = this.opcion3.nativeElement.innerText;
        this.puntaje4 = 10;
        this.fun_estilo3();
      }
      sessionStorage.setItem('puntaje4', this.puntaje4.toString());
      sessionStorage.setItem('pregunta4', this.opt4.toString());
    } else if (sig == '5') {
      if (opcion == 'opcion1') {
        this.opt5 = this.opcion1.nativeElement.innerText;
        this.puntaje5 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt5 = this.opcion2.nativeElement.innerText;
        this.puntaje5 = 5;
        this.fun_estilo2();
      } else if (opcion == 'opcion3') {
        this.opt5 = this.opcion3.nativeElement.innerText;
        this.puntaje5 = 10;
        this.fun_estilo3();
      }
      sessionStorage.setItem('puntaje5', this.puntaje5.toString());
      sessionStorage.setItem('pregunta5', this.opt5.toString());
    } else if (sig == '6') {
      if (opcion == 'opcion1') {
        this.opt6 = this.opcion1.nativeElement.innerText;
        this.puntaje6 = 0;
        this.fun_estilo1();
      } else if (opcion == 'opcion2') {
        this.opt6 = this.opcion2.nativeElement.innerText;
        this.puntaje6 = 5;
        this.fun_estilo2()
      } else if (opcion == 'opcion3') {
        this.opt6 = this.opcion3.nativeElement.innerText;
        this.puntaje6 = 10;
        this.fun_estilo3()
      }
      sessionStorage.setItem('puntaje6', this.puntaje6.toString());
      sessionStorage.setItem('pregunta6', this.opt6.toString());
    } else if (sig == '7') {
      if (opcion == 'opcion1') {
        this.opt7 = this.opcion1.nativeElement.innerText;
        this.puntaje7 = 0;
        this.fun_estilo1()
      } else if (opcion == 'opcion2') {
        this.opt7 = this.opcion2.nativeElement.innerText;
        this.puntaje7 = 5;
        this.fun_estilo2()
      } else if (opcion == 'opcion3') {
        this.opt7 = this.opcion3.nativeElement.innerText;
        this.puntaje7 = 10;
        this.fun_estilo3()
      }
      sessionStorage.setItem('puntaje7', this.puntaje7.toString());
      sessionStorage.setItem('pregunta7', this.opt7.toString());
    } else if (sig == '8') {
      if (opcion == 'opcion1') {
        this.opt8 = this.opcion1.nativeElement.innerText;
        this.puntaje8 = 0;
        this.fun_estilo1()
      } else if (opcion == 'opcion2') {
        this.opt8 = this.opcion2.nativeElement.innerText;
        this.puntaje8 = 5;
        this.fun_estilo2()
      } else if (opcion == 'opcion3') {
        this.opt8 = this.opcion3.nativeElement.innerText;
        this.puntaje8 = 10;
        this.fun_estilo3()
      }
      sessionStorage.setItem('puntaje8', this.puntaje8.toString());
      sessionStorage.setItem('pregunta8', this.opt8.toString());
    } else if (sig == '9') {
      if (opcion == 'opcion1') {
        this.opt9 = this.opcion1.nativeElement.innerText;
        this.puntaje9 = 0;
        this.fun_estilo1()
      } else if (opcion == 'opcion2') {
        this.opt9 = this.opcion2.nativeElement.innerText;
        this.puntaje9 = 5;
        this.fun_estilo2()
      } else if (opcion == 'opcion3') {
        this.opt9 = this.opcion3.nativeElement.innerText;
        this.puntaje9 = 10;
        this.fun_estilo3()
      }
      sessionStorage.setItem('puntaje9', this.puntaje9.toString());
      sessionStorage.setItem('pregunta9', this.opt9.toString());
    } else if (sig == '10') {
      if (opcion == 'opcion1') {
        this.opt10 = this.opcion1.nativeElement.innerText;
        this.puntaje10 = 0;
        this.fun_estilo1()
      } else if (opcion == 'opcion2') {
        this.opt10 = this.opcion2.nativeElement.innerText;
        this.puntaje10 = 5;
        this.fun_estilo2()
      } else if (opcion == 'opcion3') {
        this.opt10 = this.opcion3.nativeElement.innerText;
        this.puntaje10 = 10;
        this.fun_estilo3()
      }
      sessionStorage.setItem('puntaje10', this.puntaje10.toString());
      sessionStorage.setItem('pregunta10', this.opt10.toString());
    }
  }

  estilo1: any = {};
  estilo2: any = {};
  estilo3: any = {};

  concatJSON2(estilo: any) {
    const estiloaux = { 'pointer-events': 'none' };
    const merge = Object.assign({}, estilo, estiloaux);
    return merge;
  }

  siguiente() {
    if (this.selecciona) {
      var sig = sessionStorage.getItem('num_preg').toString();
      var num = parseInt(sig) + 1;
      sessionStorage.setItem('num_preg', num.toString());
      this.num_pre = sessionStorage.getItem('num_preg');
      if (num == 10) {
        this.boton.nativeElement.innerText = 'Finalizar ☑';
      }
      if (sig == '10') {
        this.puntaje_total =
          parseInt(sessionStorage.getItem('puntaje1')) +
          parseInt(sessionStorage.getItem('puntaje2')) +
          parseInt(sessionStorage.getItem('puntaje3')) +
          parseInt(sessionStorage.getItem('puntaje4')) +
          parseInt(sessionStorage.getItem('puntaje5')) +
          parseInt(sessionStorage.getItem('puntaje6')) +
          parseInt(sessionStorage.getItem('puntaje7')) +
          parseInt(sessionStorage.getItem('puntaje8')) +
          parseInt(sessionStorage.getItem('puntaje9')) +
          parseInt(sessionStorage.getItem('puntaje10'));
        if (this.puntaje_total <= 20) {
          this.puntaje_texto = 'MOTOCROSS';
        } else if (this.puntaje_total <= 40) {
          this.puntaje_texto = 'CANOPY';
        } else if (this.puntaje_total <= 60) {
          this.puntaje_texto = 'PARACAIDISMO';
        } else if (this.puntaje_total <= 80) {
          this.puntaje_texto = 'JUMPING';
        } else if (this.puntaje_total <= 100) {
          this.puntaje_texto = 'ESCALADA LIBRE';
        }
        this.muestra_mensaje();
        this.preguntas
          .get_questions({
            opcion1: sessionStorage.getItem('pregunta1'),
            opcion2: sessionStorage.getItem('pregunta2'),
            opcion3: sessionStorage.getItem('pregunta3'),
            opcion4: sessionStorage.getItem('pregunta4'),
            opcion5: sessionStorage.getItem('pregunta5'),
            opcion6: sessionStorage.getItem('pregunta6'),
            opcion7: sessionStorage.getItem('pregunta7'),
            opcion8: sessionStorage.getItem('pregunta8'),
            opcion9: sessionStorage.getItem('pregunta9'),
            opcion10: sessionStorage.getItem('pregunta10'),
            total_text: this.puntaje_texto,
            total_puntos: this.puntaje_total,
            carrera:sessionStorage.getItem('carrera')
          })
          .subscribe((res) => {
            console.log(res);
            sessionStorage.clear();
          });
      }
      this.cargar_elementos();
      this.estilo1 = {};
      this.estilo2 = {};
      this.estilo3 = {};
      this.selecciona = false;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Elija una opción',
      });
    }
  }

  muestra_mensaje() {
    if (this.puntaje_texto == 'MOTOCROSS') {
      Swal.fire({
        title: 'NIVEL 1: MOTOCROSS',
        text: 'Si llegaste a este nivel, eres una persona que le gusta pasear, divertirse, pero sin olvidar la seguridad.',
        imageUrl:
          'https://s7g10.scene7.com/is/image/ktm/SX23_Header_Pic_v1:Medium?wid=1615&hei=1209&dpr=off',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        this.ruta.navigateByUrl('/encabezado');
      });
    } else if (this.puntaje_texto == 'CANOPY') {
      Swal.fire({
        title: 'NIVEL 2: CANOPY',
        text: 'Si llegaste a este nivel, eres una persona que le gusta explorar, pero seguro de llevar la protección adecuada.',
        imageUrl:
          'https://cdn.getyourguide.com/img/tour/326c75974e94806f.jpeg/146.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        this.ruta.navigateByUrl('/encabezado');
      });
    } else if (this.puntaje_texto == 'PARACAIDISMO') {
      Swal.fire({
        title: 'NIVEL 3: PARACAIDISMO',
        text: 'Si llegaste a este nivel, eres una persona con iniciativa, segura de sí misma y le gusta sentirse libre.',
        imageUrl:
          'http://cdag.com.gt/wp-content/uploads/2020/05/Asociacio%CC%81n-Deportiva-Nacional-de-Paracaidismo-de-Guatemala_2020.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        this.ruta.navigateByUrl('/encabezado');
      });
    } else if (this.puntaje_texto == 'JUMPING') {
      Swal.fire({
        title: 'NIVEL 4: JUMPING',
        text: 'Si llegaste a este nivel, eres una persona que es capaz de resolver y afrontar diferentes tipos de riesgo.',
        imageUrl:
          'https://blog.jeep.com.ec/hubfs/7%20deportes%20extremos%20para%20realizar%20outdoor%20despu%C3%A9s%20de%20la%20cuarentena-1.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        this.ruta.navigateByUrl('/encabezado');
      });
    } else if (this.puntaje_texto == 'ESCALADA LIBRE') {
      Swal.fire({
        title: 'NIVEL 5: ESCALADA LIBRE',
        text: 'Si llegaste a este nivel, eres una persona competitiva, disciplinada, comprometida con sus decisiones y le gusta asumir riesgos extremos.',
        imageUrl:
          'https://cdn.getyourguide.com/img/tour/5b15783eb630e.jpeg/146.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      }).then((result) => {
        this.ruta.navigateByUrl('/encabezado');
      });
    }
  }

  empieza_nuevo() {
    this.puntaje1 = 0;
    this.puntaje2 = 0;
    this.puntaje3 = 0;
    this.puntaje4 = 0;
    this.puntaje5 = 0;
    this.puntaje6 = 0;
    this.puntaje7 = 0;
    this.puntaje8 = 0;
    this.puntaje9 = 0;
    this.puntaje10 = 0;
    this.opt1 = '';
    this.opt2 = '';
    this.opt3 = '';
    this.opt4 = '';
    this.opt5 = '';
    this.opt6 = '';
    this.opt7 = '';
    this.opt8 = '';
    this.opt9 = '';
    this.opt10 = '';
    this.puntaje_texto = '';
    this.puntaje_total = 0;
    sessionStorage.setItem('num_preg', '1');
  }
}