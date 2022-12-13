import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(private httpClient: HttpClient){}

  datos: any = [];

    ngOnInit(){
      this.httpClient.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20").subscribe(data =>{
        console.log(data);
        this.datos = data;
      })
    }



}
