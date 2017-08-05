import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component'
import { FotoService} from '../foto/foto.service'
import{ActivatedRoute, Router} from '@angular/router'
//import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto:FotoComponent = new FotoComponent()
  servico:FotoService
  //formCadastro:FormGroup

  roteamento:Router


  constructor(cadastroApi:FotoService, rota:ActivatedRoute, router:Router) {
    this.servico = cadastroApi
    this.roteamento = router

    rota.params.subscribe(
      (parametros)=>{
        if(parametros.id){

            console.log(parametros.id)
            this.servico.obterFoto(parametros.id)
                .subscribe(
                  (foto)=>{
                    this.foto = foto
                  }
                )
          
          
          }
        }
    )

   // this.formCadastro = formBuilder.group({
   //   titulo:['',Validators.required],
   //   url:['',Validators.required],
   //   descricao:[]
   // })
   }

  cadastrar(submit:Event){

    submit.preventDefault()
    
    if (this.foto._id){

        this.servico.editar(this.foto).subscribe(
          ()=>{
            this.roteamento.navigate([''])
          }
        )
    
      }else{

        this.servico.salvar(this.foto)
        .subscribe(

          ()=> {
            console.log(this.foto)
            this.foto = new FotoComponent()
          }
          ,

          erro => console.log(erro)
          

        )


        console.log('CADASTROU!!');
        
    }
  }

  
  ngOnInit() { }

}
