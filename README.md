# My Dashboard - parte 3

### Continuación de la aplicación

En este apartado, lo que hicimos fue crear una nueva vista para los pokemons favoritos y en el dashboard en la pagina del main creamos un nuevo component _SimpleWidget_ con el que vamos a trabajar.

### Instalación y configuración de Redux Toolkit

Link para la instalación

https://redux-toolkit.js.org/introduction/getting-started

Pasos de instalación

1. Creamos la carpeta store y en el archivo index.ts vamos a copiar lo siguiente de la documentación:

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

Nota: el _store_ en Redux es un objeto central que mantiene el estado global de la aplicación. Almacena el estado actual y permite que las distintas partes de la aplicación accedan a el y lo actualicen de manera predecible.

2. Tenemos que configurar el Provider con el store

El provider es un component de React que hace que el store de Redux este disponible para toda la aplicación o al menos para el arbol de componentes que se encuentre dentro de el.

Nota: Todos mis componentes en next +13 pasan por mi _layout.txt_, no por mi page.tsx
Esto se debe porque en mi layout es donde coloco cosas de _manera global_.

#### Porque no puedo utilizar el Provider como nos indica en la documentación?

Si colocamos el provider en nuestro archivo _layout.tsx_ (donde coloco las cosas que quiero que se rendericen de manera global) tal como nos indica la documentación, nos rompe la aplicación porque nos obliga a que utilicemos el 'use-client' y como es un archivo que no podemos utilizar el renderizado por parte del cliente tenemos que crear otro archivo.

Ahi es donde entra en juego el archivo _Providers.tsx_ que colocamos dentro de nuestra carpeta _store_. Este archivo es el que vamos a utilizar dentro de nuestro _layout.tsx_ de esta forma mantenemos las reglas impuesta por next.

```js
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

_Nota_: Si bien esta implementación no es perfecto, pero cumple con su finalidad.
