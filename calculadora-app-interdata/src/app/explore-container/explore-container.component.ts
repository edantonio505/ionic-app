import { Component, Input } from '@angular/core';
// import { Http, HttpResponse } from '@capacitor-community/http';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  constructor(private http: HttpClient) { }


  numero1:number = 0;
  numero2:number = 0;
  operacion:string = "";
  resultado:number = 0;


  async suma(){

    let operacion = "suma";
    console.log("suma")
    console.log(this.numero1)
    console.log(this.numero2)



    let dato = {
      "numero1": this.numero1,
      "numero2": this.numero2,
      "operacion": operacion
    };

    const options = {
      url: 'https://db0e-100-2-148-102.ngrok-free.app',
      headers: { 'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': '*',
    },
      data: dato
    };
    

    this.http.post('https://db0e-100-2-148-102.ngrok-free.app', dato).subscribe((response :any) => {
      console.log(response);
      this.resultado = response["resultado"];

    });



    // console.log(response.data);
  }

}
