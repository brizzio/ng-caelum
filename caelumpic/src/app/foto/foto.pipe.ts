import {Pipe, PipeTransform} from '@angular/core'
import {FotoComponent} from './foto.component'

@Pipe({
    name:'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{

    transform(fotos: FotoComponent[], digitado:string):FotoComponent[]{

        digitado = digitado.toLowerCase()

        
        return fotos.filter(
            (foto)=>{
                return foto.titulo.toLowerCase().includes(digitado)
            }
        )
    }

}