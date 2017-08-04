import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http'
//import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto:FotoComponent = new FotoComponent()
  http:Http
  //formCadastro:FormGroup


  constructor(cadastroApi:Http) {
    this.http = cadastroApi

   // this.formCadastro = formBuilder.group({
   //   titulo:['',Validators.required],
   //   url:['',Validators.required],
   //   descricao:[]
   // })
   }

  cadastrar(submit:Event){

    submit.preventDefault()
    
    
    let cabecalho = new Headers()
    cabecalho.append('Content-Type', 'application/json')

    this.http.post(
      'http://localhost:3000/v1/fotos/'
    ,
    JSON.stringify(this.foto)
    ,
    {headers:cabecalho}

    ).subscribe(

      ()=> {
        console.log(this.foto)
        this.foto = new FotoComponent()
      }
      ,

      erro => console.log(erro)
      

    )


    console.log('CADASTROU!!');
    
  }

  ngOnInit() { }

}
