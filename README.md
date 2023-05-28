## Ejecución del proyecto

Ejecute el servidor de backend localmente usando la instrucción npm start en el repositorio del servidor.

Ejecute el servidor de frontend localmente usando la instrucción npm start y escriba yes en consola cuando le pregunte por el puerto..

## Proceso de desarrollo

La página está dividida en 5 componentes + el component de la app. 
- El componente Login se utiliza para loggear a las personas y redirigirlas a home en caso de tener una respuesta positiva por parte del servidor backend
- El componente Books es el componente que maneja el home y revisa que tipo de rol es el usuario para desplegar de forma diferente el detalle de acuerdo al rol.
- El componente Book es la carta singular que se despliega para cada elemento traido del back.
- El component BookAdmin y BookUser son componentes para el detalle del libro, si el rol es diferente a Administrador entonces se mostrará BookUser de los contrario se mostrará BookAdmin
- Utilicé componentes de bootstrap para la realización del parcial como las Cards, Forms, colores, etc.
