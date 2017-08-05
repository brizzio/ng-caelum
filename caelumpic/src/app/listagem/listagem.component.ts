import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core'
import {Http} from '@angular/http'

import { FotoService } from '../foto/foto.service'


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

   title = 'SUPER COOL PHOTOS';
   fotos: FotoComponent[] = []
   servico:FotoService

  constructor(servico:FotoService){
    this.servico = servico
   
    servico.listar()

    .subscribe(
      
      fotosEmJson => {this.fotos = fotosEmJson}
        
      ,
      erro => console.log('falha na leitura dos dados')
    
    )


  }

    remover(foto:FotoComponent){
      console.log(foto._id)
      console.log('foto removida!!!!')

      this.servico.deletar(foto._id)
                  .subscribe(
                    ()=>{
                       this.fotos = this.fotos.filter(
                            fotoLista => fotoLista._id != foto._id
                              
                       )
                    }
                  )
      
    }
    
}
