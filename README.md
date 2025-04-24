# TP 1 - Grupo Piedra

## Integrantes del grupo

FAI-2378 Rossi Julia <br/>
FAI-2948 Lores Federico <br/>
FAI-5483 Millicay Lourdes Rocío <br/>

## Descripción básica de la aplicación 

La app es un gestor personal de peliculas/series (de aqui en mas referidas como peliseries) las cuales estan separadas por "vistas" y "por ver", uno puede subir las peliseries a la aplicación, editarlas y eliminarlas.<br/><br/>
Otras funcionalidades: <br/>
- Cambiar el estado de la peliserie (ej. de vista a por ver y viceversa)<br/>
- Filtrar por título de la peliserie o del director <br/>
- Ordenar las peliseries por año o rating (por default vienen sin orden) <br/>

## Instalacion

1.Clonar el repositorio<br>
2.Utilizar el comando "npm install -D vite"<br>
3.Listo para ejecutar<br>

## Demo

https://pwa-tp-1-seven.vercel.app/

## Teoria
app.js es el componente principal de la app, contiene la estructura y la logica de la interfaz (toda la que no exista en componentes que app llama)<br>
index.js es el punto de entrada por defecto de la app, y es responsable de renderizar app.js<br>
index.css es una hoja de estilos global que aplica css a toda la app<br>
package-json.js define informacion de versiones y dependencias del proyecto<br>
