import { Component, OnInit } from '@angular/core'
import {Http} from '@angular/http'
import { FotoComponent} from '../foto/foto.component'


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

   title = 'SUPER COOL PHOTOS';
  fotos: FotoComponent[] = []

  constructor(route:Http){

    route.get('http://localhost:3000/v1/fotos')
    .map(response => response.json())

    .subscribe(
      
      fotosEmJson => {this.fotos = fotosEmJson}
        
      ,
      erro => console.log('falha na leitura dos dados')
        


    )

  }

}
