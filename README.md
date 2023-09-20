# Proyecto Final - React Js Coder House

## Descripción del proyecto: 
El mismo es una demo de un e-commerce, en este caso sobre productos de decoración con temática animal (gatos).

## Cómo levantar el proyecto: 

Una vez clonado el repositorio, instalar las dependencias del mismo mediante ``npm i`` y correrlo mediante ``npm run dev``.
Serán necesarias las variables de entorno del proyecto. Las mismas, todas de Firebase son:

``VITE_FIRESTORE_API_KEY``: La Api key
``VITE_FIRESTORE_AUTH_DOMAIN``: Dominio de autenticación
``VITE_FIRESTORE_PROJECT_ID``: ID del proyecto
``VITE_FIRESTORE_STORAGE_BUCKET``: Bucket de almacenamiento
``VITE_FIRESTORE_MESSAGING_SENDER_ID``: ID del Sender
``VITE_FIRESTORE_APP_ID``: Id de la APP. 

## Componentes

### Navbar
El componente Navbar presenta los links de las distintas secciones de la app y muestra el CartWidget en que se contienen los items agregados al carrito.

### CartWidget
El componente muestra un resumen de los items agregados al carrito, con posibilidad de incrementar su cantidad, borrar por completo el producto, vaciar el carrito y redirige al usuario a finalizar la compra en el Checkout.

### Checkout
Presenta la información aún más resumida que en el CartWidget, incluye un formulario para incluir los datos del comprador.

### ItemList
El componente ItemList (en conjunto con su container) presentan el total de los productos del comercio, permitiendo también navegar entre las categorías.

### ItemDetail 
En este componente, al que se accede desde cada item, el mismo muestra el detalle del producto, permitiendo agregar items al carrito.

### Loading
Este componente muestra una imagen mientras alguno de los componentes se monta.

## Demo
En el siguiente video se presenta la demostración de la navegabilidad de la app desde el inicio de la página hasta la finalización de la compra.

[screen-capture.webm](https://github.com/CamilaRuizAmare/proyectofinal_react_ruiz-amare/assets/74116558/a727b4d9-8fc2-462f-ab19-37a26b69214a)
