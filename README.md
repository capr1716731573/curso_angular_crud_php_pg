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

###Produccion
- Se debe colocar el comando ng build --prod, este comando puede dar errores en etse proyecto respecto a la paginacion o el filtrado de las tablas, para solucionar ese error solo hay que declarar dentro de cada componente las siguientes varicables: 

*//variables de paginacion y filter de busqueda
  p: number = 1;
  filter:string='';*

- Una vez que se cree la carpeta */dist* de produccion se debe quitar o comentar la siguiente linea de codigo en el archivo ***index.html***: 
    -  <base href="/">

- Las imagenes del *login* o *Register*, esas imagenes normalmente estan en cada pagina haciendo referencia al archivo */assests* de la siguiente manera : ***../../assets/***, hay que quitar todo lo anterior quedando de la siguiente forma ***assets/.....***, y prpbar con ng serve, esto se debe a que en la produccion el archivo *index.html* del proyecto esta dentro de la misma jerarquia de carpetas que la carpeta *assets*


