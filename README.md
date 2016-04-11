**Especificaciones del código**

## Creación De Trámites: Diagrama De Pasos Y Etapas

Los trámites tienen 4 pasos (círculos grandes):

1. Datos de la solicitud
2. Anexo
3. Resumen de trámite
4. Pago del trámite

El paso 1 (formulario) de los trámites más largos (ej. [ pus1-9.html ](https://github.com/pcuervo/ogpe/blob/master/pus1-9.html)) se puede dividir en etapas (círculos pequeños). Puede haber de 0 a 9 etapas y para cada etapa es necesario imprimir: `<span class="[ circle-proceso circle-etapas ]"></span>`. El código: `<span class="[ circle-proceso ]"></span>` evita que la línea que contiene las etapas pierda su posición cuando no se ha dividido esté paso (0 etapas), por lo que siempre debe estar presente. Ejemplo:[ tramite-form.html ](https://github.com/pcuervo/ogpe/blob/master/tramite-form.html).

Por cada etapa que se avance del primer paso tiene que agregarse la clase `circle-complete` a `<span class="[ circle-proceso circle-etapas ]"></span>` dando como resultado `<span class="[ circle-proceso circle-etapas ] circle-complete "></span>` lo que rellenará el círculo correspondiente a la etapa que se ha completado (ej. [ pus2-9.html ](https://github.com/pcuervo/ogpe/blob/master/pus2-9.html)).

## Creación De Proyecto: Diagrama De Pasos Y Etapas

**Nota:** Sólo hay un tipo de proyecto por lo que *no es necesario realizar ninguna modificación al diagrama* del proyecto como en el caso del diagrama de trámites, cada etapa del paso 1 (proyecto1-5.html, proyecto2-5.html, …) ya tiene la clase `circle-complete` en cada etapa que ha sido completada.

## PUS - Tipos de operación

En la etapa 1 del trámite PUS [ pus1-9.html ](https://github.com/pcuervo/ogpe/blob/master/pus1-9.html) hay una parte que muestra los *tipos de operación que se darán a la propiedad*:

Al darle click al algún checkbox se despliegan los usos para esa operación especifíca. La función está en functions.js

Para que esto suceda el checkbox tiene una clase `js-operacion-agricola`. Donde el nombre *agricola* cambiará de acuerdo al input que haya sido seleccionado (cheked). Por ejemplo: el input con label *comercial* corresponde a la clase `js-operacion-comercial`

Al ser seleccionado se despliegan los *usos de operación* donde sucede lo mismo, están en una clase llamada `.js-usos-operacion-agricola` donde *agricola* corresponde al input del que se ha desplegado. Si se despliega del input *comercial* debera mostrarse como `.js-usos-operacion-comercial`

```javascript
$('.js-operacion-agricola').change(function(){
    if(this.checked){
        $('.js-usos-operacion-agricola').fadeIn('slow');
        $('.js-usos-operacion-agricola').addClass('show');
    }
    else{
        $('.js-usos-operacion-agricola').fadeOut('slow');
        $('.js-usos-operacion-agricola').removeClass('show');
    }
});
```

## Botones A+ A-

El contenido de body (excepto header y footer) se pone dentro de una etiqueta con las clases `size-transform clear-size` para el funcionamiento de los botones.

En el caso de no querer modificar una parte en especifico se utiliza la clase `size-static`

Para evitar deformaciones en los diagramas de proyecto y trámites se dejan fuera de la etiqueta con las clases `size-transform clear-size`. Es decir, el div que contiene el diagrama es hermano de la etiqueta con `size-transform`

## Acciones de mi-bandeja.html

Dentro de solicitud de trámites se encuentra el botón acciones. Al darle clic deberá mostrar sólo las acciones que sí se pueden realizar con respecto al trámite al que pertenece (ej. añadir colindantes, historial de pago, ...)

## Casillas de estado actual

El icono de la casilla **estado actual** depende del estado en el que se encuentre el trámite. Todos los estados posibles están en la parte inferior de cada página.

1. mi-bandeja
2. busqueda-credenciales
3. busqueda-permisos
4. resumen-permiso

## Resultados de busqueda

Los resultados de busqueda deben resaltar en color amarillo `@secondary` la o las palabras de busqueda.

## Anexos de trámite

De lado derecho se encuentra un numero 0 que representa los archivos cargados y un icono para cargar archivos. El número 0 deberá modificarse cuando se haya subido un archivo (1,2,3...).

Sólo el archivo **memorial explicativo** permite la opción de redactar (*O si lo prefiere redáctelo (opcional)*). Los siguientes campos no deben estar en ningun otro archivo.

Una vez que se carga el archivo los datos aparecen en la lista de anexos.

Sólo si se ha subido al menos un archivo de cada anexo solicitado aparecerá el botón continuar y se ocultará la alerta *No puedes continuar hasta cargar todos los anexos requeridos*

## Ficha de trámite

Hay trámites que requieren un proyecto, crearlo o elegirlo si ya hay alguno. Para estos la ficha de trámite debe tener un aviso como en [ ficha-tramite-aviso.html ](https://github.com/pcuervo/ogpe/blob/master/ficha-tramite-aviso.html), el resto de los trámites son iguales pero sin aviso como en [ ficha-tramite.html ](https://github.com/pcuervo/ogpe/blob/master/ficha-tramite.html)

## Alertas recuperar usuario o contraseña

Los mensajes informativos aparecen una vez que se envia el formulario

## Header

El icono de header en index tiene etiqueta `h1`, el resto de las páginas tienen el `h1` en el título de cada una

## Footer fijo

El footer se ha fijado con la función `footerBottom()` en funcions.js. En el caso de agregar una nueva página es necesario que el contenido del body, excepto el header, estén dentro de un div con clase **main**.

## Mapas

Falta modificar los mapas de google maps por los que permiten seleccionar el catastro a partir de la busqueda con el número de catastro, las páginas son:

1. [ colindantes.html ](https://github.com/pcuervo/ogpe/blob/master/colindantes.html)
2. [ proyecto1-5.html ](https://github.com/pcuervo/ogpe/blob/master/proyecto1-5.html)

