import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prueba-table',
  templateUrl: './prueba-table.component.html',
  styles: []
})
export class PruebaTableComponent implements OnInit {

  constructor(private _http: HttpClient) { }
 
  ngOnInit(): void {
    
  }
}
