import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

    imc:number
    resultado: string;
    interpretacao: string;
    constructor(private route: ActivatedRoute){
      this.resultado= '';
      this.interpretacao= '';
      this.imc = +route.snapshot.paramMap.get('valorD')!;
      console.log(this.imc)
    }


ngOnInit(): void{
  this.getResultado();
}

getResultado(){
  if(this.imc > 25){
    this.resultado = 'Excesso de peso';
    this.interpretacao = 'Está acima do peso, precisa se exercitar!!'
  } else if(this.imc >= 18.5){
    this.resultado= 'Normal';
    this.interpretacao = 'Peso normal, bom trabalho amigo!'
  }else {
    this.resultado = 'Abaixo do peso ';
    this.interpretacao = 'Está a baixo do peso, deveria comer mais!'
  }

}


}
