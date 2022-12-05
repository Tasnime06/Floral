import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(nb:number): unknown {
    let aux="";
    for(let i=0;i<nb;i++){
      aux += "🧡";
    }
    if(nb<5){
      for(let i=nb;i<5;i++)
      aux+="🤍";
    }
    return aux;
}
}
