# Prueba Técnica de Better Commerce hecha por Wilscónidel Yánez

La prueba consiste en recrear un diseño hecho en Figma sobre una página para visualizar productos de un e-commerce y consumir una API sencilla, la cual deberá incluirse en un elemento "select" dentro de la página.

---

## Requisitos de la Prueba

- Ser fiel al diseño en Figma.
- Debe ser responsivo.
- Debe entregarse en un repositorio GIT.
- No es excluyente entregar el proyecto completo, pero sí bien ordenado, desarrollado y funcionando.
- Desplegar en alguna plataforma (opcional).
- Utilizar React Js y Material UI (opcional).

---

## ¿Cómo Abordé el Proyecto?

Analicé los requisitos y el diseño en Figma, e hice un listado de las características que debía implementar y los extras que podía incluir.


### Características Relacionadas a los Requisitos

- Ya que el diseño en Figma no incluye una vista mobile, debo adaptarlo de manera que se vea bien (UI) y no disminuya la experiencia de usuario (UX).
- Debo utilizar un "hook useEffect" para hacer la solicitud al endpoint tan pronto cargue la página.
- Debo crear un componente de tipo "modal" para visualizar las opciones al seleccionar el tipo de entrega de producto.

### Características Extra

- Oculté la barra de navegación en modo mobile y abrí un menú desplegable al presionar un botón de tipo "hamburguesa".
- Hice que el usuario pueda agrandar las imágenes del producto y cambiar a la siguiente o la anterior imagen.
- Hice que la lista de comunas al seleccionar el tipo de envío no se pueda seleccionar sin antes elegir una región, ya que las opciones de esta dependen de la selección anterior.
- Hice que el componente tipo "slider" en la sección de "Te podría interesar también" sea funcional y reciba una lista de productos con diferentes imágenes, valores y opciones como "envío gratis".
- Hice que el componente principal y demás componentes hijos sean modulares, es decir, que puedan recibir información de la base de datos y mostrar diferentes imágenes, valores y extras (como la etiqueta de envío gratis) de manera dinámica.
- Hice que tanto el componente principal como el componente de tipo "slider" pudiesen recibir los valores "costo" y "descuento", los cuales se utilizan para obtener y mostrar dinámicamente el precio original, el precio con descuento y el porcentaje de descuento.

---

## 🚀 Despliegue en Línea

La aplicación está disponible para su visualización en Vercel:  
[https://prueba-tecnica-silk.vercel.app/](https://prueba-tecnica-silk.vercel.app/)

---

## Instalación

1. **Clona el repositorio**:

   git clone [https://github.com/WiusGH/prueba-tecnica.git](https://github.com/WiusGH/prueba-tecnica.git)
   
2. **Navega a la carpeta del proyecto**:

   cd tu-repositorio

3. **Instala las dependencias**:

   npm install
   
4. **Inicia la aplicación**:

   npm start
   
## Conclusión

   Este proyecto no solo cumple con los requisitos de la prueba, sino que también incluye componentes adicionales y una estructura modular que mejora la legibilidad, mantenibilidad y escalabilidad del código.
