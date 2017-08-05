import { FotoComponent } from './foto.component';
import { Http , Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'


@Injectable()
export class FotoService{


url:string = 'http://localhost:3000/v1/fotos/'
cabecalho = new Headers()

        constructor(private http:Http){
                
                this.cabecalho.append('content-type','application/json')
        }

        listar():Observable<any>{

            return this.http.get(this.url)
                                          .map(response=>response.json())

        }

        salvar(foto:FotoComponent):Observable<Response>{

            return this.http.post(
                                    this.url
                                    ,
                                    JSON.stringify(foto)
                                    ,
                                    {headers: this.cabecalho}
            )

        }

        editar(foto:FotoComponent):Observable<Response>{

            return this.http.put(
                this.url + foto._id
                ,
                JSON.stringify(foto)
                ,
                {headers: this.cabecalho}
            )

        }

        deletar(id:string):Observable<Response>{

            return this.http.delete(
                this.url + id
            )

        }

        obterFoto(id):Observable<FotoComponent>{
            return this.http.get(
                this.url + id
            )
            .map(
                response => response.json()
            )
        }
}