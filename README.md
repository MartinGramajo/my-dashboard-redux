# My Dashboard - parte 2


### Generación de contenido estático    

El objetivo principal de este mecanismo es adelantarnos a las posibles solicitudes de nuestros usuarios y tener generadas de antemanos las posibles paginas que ellos van a solicitar. 
Es decir, en *build time* o tiempo de construcción, crearemos todas las paginas acorde a nuestras reglas, y luego le añadiremos condiciones de re-validación para que renueven cuando el momento lo amerite.

### Como genero el contenido estático        

Mediante esta función, la cual retorna los params que vamos a usar en nuestra interface,es decir, un arreglo con todos los params que quiero que sean en construcción.
En este caso la función genera 151 elementos, retornando el id que utilizamos para individualizar cada pagina.
Manteniendo la función para generar de manera dinámica todas las paginas.

```js
export async function generateStaticParams(){
  
  // con esta función generamos de forma estática 151 paginas 
  const static151Pokemons = Array.from({length:151}).map((v, i) =>`${i + 1}` )

  return  static151Pokemons.map( id => ({
    id:id
  }))
  
  
  // Con este return lo que nos mostraron fue que puedo crear 6 paginas estáticas, incluso antes de que el usuario haga la petición, es decir, que también tengo la forma de crearla de manera dinámica a mi disposición. 
  // return [
  //   {id: '1'},
  //   {id: '2'},
  //   {id: '3'},
  //   {id: '4'},
  //   {id: '5'},
  //   {id: '6'},

  // ]
}
```

### Revalidacion - Sin fetch Api 

En esta apartado de la documentación podemos hacer la revalidation  sin el uso de fetch por ejemplo con la librería de axios:
https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
