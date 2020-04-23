import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Formulario: FormGroup;

  usuario: Array<any> = [ {
    nombre:"",
    descripcion:"",
    precio:"",
    fecha:"",
    evaluacion:""
    
}];
  
  constructor(
    public router:Router,
    public datosservice:DatosService,
    public alertCtrl: AlertController
  ) {
  }
  
  
 async guardar(){
   console.log(this.usuario);

   const alert = await this.alertCtrl.create({
    header: 'Mensaje',
    message: 'El juego'+ "usuario.nombre",
    buttons: [{
      text: 'OK',
      handler: (blah) => {
        console.log('Boton OK');
      }
    }
  ]
  });
 }

 iraDatos(){
   this.datosservice.enviarDatos(this.usuario);
   this.router.navigate(['/datos'])
 }


 
}
