# [Bootstrap](http://getbootstrap.com)

[![Slack](https://bootstrap-slack.herokuapp.com/badge.svg)](https://bootstrap-slack.herokuapp.com)
![Bower version](https://img.shields.io/bower/v/bootstrap.svg)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Build Status](https://img.shields.io/travis/twbs/bootstrap/master.svg)](https://travis-ci.org/twbs/bootstrap)
[![devDependency Status](https://img.shields.io/david/dev/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap#info=devDependencies)
[![NuGet](https://img.shields.io/nuget/v/bootstrap.svg)](https://www.nuget.org/packages/Bootstrap)
[![Selenium Test Status](https://saucelabs.com/browser-matrix/bootstrap.svg)](https://saucelabs.com/u/bootstrap)

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thornton](https://twitter.com/fat), and maintained by the [core team](https://github.com/orgs/twbs/people) with the massive support and involvement of the community.

To get started, check out <http://getbootstrap.com>!


## Table of contents

* [Quick start](#quick-start)
* [Bugs and feature requests](#bugs-and-feature-requests)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [Community](#community)
* [Versioning](#versioning)
* [Creators](#creators)
* [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

* [Download the latest release](https://github.com/twbs/bootstrap/archive/v3.3.6.zip).
* Clone the repo: `git clone https://github.com/twbs/bootstrap.git`.
* Install with [Bower](http://bower.io): `bower install bootstrap`.
* Install with [npm](https://www.npmjs.com): `npm install bootstrap`.
* Install with [Meteor](https://www.meteor.com): `meteor add twbs:bootstrap`.
* Install with [Composer](https://getcomposer.org): `composer require twbs/bootstrap`.

Read the [Getting started page](http://getbootstrap.com/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   └── bootstrap-theme.min.css.map
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons are included, as is the optional Bootstrap theme.


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://getbootstrap.com>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v3.0.x).
   **Note for Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. From the root `/bootstrap` directory, run `jekyll serve` in the command line.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <http://getbootstrap.com/2.3.2/> while folks transition to Bootstrap 3.

[Previous releases](https://github.com/twbs/bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/bootstrap/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/twbs/bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

* Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
* Read and subscribe to [The Official Bootstrap Blog](http://blog.getbootstrap.com).
* Join [the official Slack room](https://bootstrap-slack.herokuapp.com).
* Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
* Implementation help may be found at Stack Overflow (tagged [`twitter-bootstrap-3`](https://stackoverflow.com/questions/tagged/twitter-bootstrap-3)).
* Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/bootstrap/releases) for changelogs for each release version of Bootstrap. Release announcement posts on [the official Bootstrap blog](http://blog.getbootstrap.com) contain summaries of the most noteworthy changes made in each release.


## Creators

**Mark Otto**

* <https://twitter.com/mdo>
* <https://github.com/mdo>

**Jacob Thornton**

* <https://twitter.com/fat>
* <https://github.com/fat>


## Copyright and license

Code and documentation copyright 2011-2015 Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).


**Especificaciones del código**

## Creación De Trámites: Diagrama De Pasos Y Etapas

Los trámites tienen 4 pasos (círculos grandes):

1. Datos de la solicitud
2. Anexo
3. Resumen de trámite
4. Pago del trámite

El paso 1 (formulario) de los trámites más largos (ej. [ pus1-9.html ](http://pcuervo.com/ogpe/pus1-9.html)) se puede dividir en etapas (círculos pequeños). Puede haber de 0 a 9 etapas y para cada etapa es necesario imprimir:

< span class="[ circle-proceso circle-etapas ]"></ span>

El código: <span class="[ circle-proceso ]"></span> evita que la línea que contiene las etapas pierda su posición cuando no se ha dividido esté paso (0 etapas), por lo que siempre debe estar presente. Ejemplo:[ tramite-form.html ](http://pcuervo.com/ogpe/tramite-form.html).

Por cada etapa que se avance del primer paso tiene que agregarse la clase **circle-complete** a <span class="[ circle-proceso circle-etapas ]"></span> dando como resultado <span class="[ circle-proceso circle-etapas ] circle-complete "></span>, lo que rellenará el círculo correspondiente a la etapa que se ha completado (ej. [ pus2-9.html ](http://pcuervo.com/ogpe/pus2-9.html)).

## Creación De Proyecto: Diagrama De Pasos Y Etapas

**Nota:** *Sólo hay un tipo de proyecto por lo que no es necesario realizar ninguna modificación al diagrama* del proyecto como en el caso del diagrama de trámites, cada etapa del paso 1 (proyecto1-5.html, proyecto2-5.html, …) ya tiene la clase .circle-complete en cada etapa que ha sido completada.


## PUS - Tipos de operación

En la etapa 1 del trámite PUS [ pus1-9.html ](http://pcuervo.com/ogpe/pus1-9.html) hay una parte que muestra los *tipos de operación que se darán a la propiedad*:

Al darle click al algún checkbox se despliegan los usos para esa operación especifíca. La función está en functions.js

Para que esto suceda el checkbox tiene una clase **js-operacion-agricola**. Donde el nombre *agricola* cambiará de acuerdo al input que haya sido seleccionado (cheked). Por ejemplo: el input con label *comercial* corresponde a la clase **js-operacion-comercial**

Al ser seleccionado se despliegan los *usos de operación* donde sucede lo mismo, están en una clase llamada **.js-usos-operacion-agricola** donde *agricola* corresponde al input del que se ha desplegado. Si se despliega del input *comercial* debera mostrarse como **.js-usos-operacion-comercial**

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

El contenido de body (excepto header y footer) se pone dentro de una etiqueta con las clases **size-transform clear-size** para el funcionamiento de los botones.

En el caso de no querer modificar una parte en especifico se utiliza la clase **size-static**

Para evitar deformaciones en los diagramas de proyecto y trámites se dejan fuera de la etiqueta con las clases **size-transform clear-size**. Es decir, el div que contiene el diagrama es hermano de la etiqueta con size-transform

## Acciones de mi-bandeja.html

Dentro de solicitud de trámites se encuentra el botón acciones. Al darle clic debera mostrar sólo las acciones que sí se pueden realizar con respecto al trámite al que pertenece (ej. añadir colindantes, historial de pago, ...)

## Casillas de estado actual

El icono de la casilla **estado actual** depende del estado en el que se encuentre el trámite. Todos los estados posibles están en la parte inferior de cada página.

1. mi-bandeja
2. busqueda-credenciales
3. busqueda-permisos
4. resumen-permiso

## Resultados de busqueda

Los resultados de busqueda deben resaltar en color amarillo (@secondary) la o las palabras de busqueda.

## Anexos de trámite

De lado derecho se encuentra un numero 0 que representa los archivos cargados y un icono para cargar archivos. El número 0 deberá modificarse cuando se haya subido un archivo (1,2,3...).

Sólo el archivo **memorial explicativo** permite la opción de redactar (*O si lo prefiere redáctelo (opcional)*). Los siguientes campos no deben estar en ningun otro archivo.

Una vez que se carga el archivo los datos aparecen en la lista de anexos.

Sólo si se ha subido al menos un archivo de cada anexo solicitado aparecerá el botón continuar y se ocultará la alerta *No puedes continuar hasta cargar todos los anexos requeridos*

## Ficha de trámite

Hay trámites que requieren un proyecto, crearlo o elegirlo si ya hay alguno. Para estos la ficha de trámite debe tener un aviso como en [ ficha-tramite-aviso.html ](http://pcuervo.com/ogpe/ficha-tramite-aviso.html), el resto de los trámites son iguales pero sin aviso como en [ ficha-tramite.html ](http://pcuervo.com/ogpe/ficha-tramite.html)

## Alertas recuperar usuario o contraseña

Los mensajes informativos aparecen una vez que se envia el formulario

## Header

El icono de header en index tiene etiqueta h1, el resto de las páginas tienen el h1 en el título de cada una

## Footer fijo

El footer se ha fijado con la función `footerBottom()` en funcions.js. En el caso de agregar una nueva página es necesario que el contenido del body, excepto el header, estén dentro de un div con clase **main**.

