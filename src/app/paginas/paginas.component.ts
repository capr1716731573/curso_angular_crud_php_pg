import { Component, OnInit } from '@angular/core';

//declaro funcion jquery de menu
declare function init_plugins_menu();

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styles: []
})
export class PaginasComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    init_plugins_menu();
   
  }

}
