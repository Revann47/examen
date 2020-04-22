import { Component, OnInit, NgModule } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { DatosService } from 'src/app/services/datos.service';



@NgModule({
  declarations: [HomePage]
})

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  videojuego:Array<any>[];

  constructor(
    public datosservice:DatosService
  ) { }

  ngOnInit() {

    this.datosservice.$obtenerdatos.subscribe(list => {console.log(list)
    this.videojuego = list;})    
    
  }

 
}
