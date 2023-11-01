# Los Estudiantes Monkey-Cypress

Este proyecto realiza pruebas "monkey" sobre el sitio [Los Estudiantes](https://losestudiantes.co) utilizando el framework de pruebas de Cypress.

## Descripción de las Pruebas

El propósito principal de este código es simular acciones aleatorias en el sitio web de "Los Estudiantes". Se realizan una serie de eventos aleatorios, como:
- Hacer clic en enlaces.
- Llenar campos de texto con texto aleatorio.
- Seleccionar opciones de un menú desplegable de manera aleatoria.
- Hacer clic en botones de manera aleatoria.

El código ejecuta estas acciones aleatoriamente hasta que se agoten los "monkeys" especificados en `randomEvent(10)` (en este caso, 10 eventos).

## Pre-requisitos

- Tener instalado [Node.js](https://nodejs.org/).
- Tener instalado [Cypress](https://www.cypress.io/).

## Configuración y Ejecución

1. **Instalación de dependencias**: Si aún no has instalado Cypress, puedes hacerlo con npm (asegúrate de estar en el directorio del proyecto):

```npm install cypress --save-dev```

2. **Ejecución de las pruebas**: Para iniciar Cypress y ejecutar las pruebas, utiliza el siguiente comando:
```npx cypress open```

Luego, en la interfaz de Cypress, selecciona el archivo de prueba ````monkey_testing.cy.js``` que contiene el código y haz clic en él para ejecutar las prueba

## Ejecución del Código en Cypress
Este código se ha escrito para automatizar las pruebas "monkey" en el sitio web de "Los Estudiantes". A continuación, se presenta un desglose detallado de cómo se ejecuta el código:

1. **Descripción General**
describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    });
});

`describe`: Esta función define un conjunto de pruebas. En este caso, estamos describiendo pruebas que se ejecutarán bajo el nombre "Los estudiantes under monkeys".

`it`: Define una prueba individual. Aquí, la prueba visita el sitio web de "Los Estudiantes", espera 1 segundo y luego comienza la secuencia de eventos aleatorios.

2. **Generación de Números Aleatorios**
` function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} `

3. **Eventos Aleatorios**
function randomEvent(monkeysLeft)
Esta función simula una serie de eventos aleatorios en la página web.

4. **Eventos Específicos**
Eventos que pueden ocurrir:

`clickRandomLink`: Esta función selecciona un enlace de manera aleatoria y hace clic en él.

`fillRandomTextField`: Busca campos de texto en la página y, si encuentra alguno, selecciona uno al azar y escribe "Random Text" en él.

`selectRandomCombo`: Si encuentra un menú desplegable (o combobox) en la página, selecciona una de sus opciones al azar.

`clickRandomButton`: Selecciona un botón al azar en la página y hace clic en él.



## Contribuciones
Las contribuciones al código son bienvenidas. Si encuentras un error o consideras que hay una mejora que se puede realizar, no dudes en realizar una pull request o abrir un issue en el repositorio.

## Licencia
Este proyecto se puedes usar, copiar y modificar el código libremente.

##Ver codigo en Rama Master 
