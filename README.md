# App CRUD Angular PHP Postgres

Este proyecto tiene como fin mostrar un CRUD basico de angular PHP y postgres

## Librerias Externas

###Directivas

[mayusculas.directive] y [numeros.directive] = Son directivas que se utilizan para que los campos de texto donde se las ubique digite solo letras mayusculas y numeros.

Ejm:

<input type="text" class="form-control" placeholder="Buscar...." name="search" [(ngModel)]="filter" DirectivaMayusculas>

Se la coloca en el modulo exactamente en la parte de 
declarations:[
        NumerosDirective,
        MayusculasDirective
    ],

