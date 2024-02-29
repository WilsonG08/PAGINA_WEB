# CICLO-GO 
# INTEGRANTES
- Lizbeth García
- Kevin Veliz
- Christopher Vera
## PROYECTO
El proyecto consiste en un aplicativo móvil, el cual esta enfocado a ciclistas. El proyecto tiene como finalidad saber la geolocalización del ciclista y de los demás integrantes del equipo. 
de su equipo.

<img src="https://user-images.githubusercontent.com/65980001/188595111-4a745390-21fa-4187-a210-751fa04796f8.png" width="250" >

### COMPONENTES DEL APLICATIVO MÓVIL
#### REGISTRO
- El proyecto contiene un registro el cual debe ingresar su correo electrónico, contraseña, nombre completo, nombre del equipo, su teléfono celular y su edad

    <img src="https://user-images.githubusercontent.com/65980001/188596791-66aec19a-6069-4cd7-afcd-4a4bb1cf60fe.png" width="250" >
    
#### CONFIRMACIÓN DEL CORREO
- Además del registro, el usuario deberá confirmar el correo para poder ingresar al aplicativo móvil, para lo cual dentro de su correo electrónico le llegará 
un mensaje como el que se muestra acontinuación. Dentro del correo existe un enlace que le permitirá activar el correo.

    <img src="https://user-images.githubusercontent.com/65980001/188597498-132a2bed-d867-4d4b-8686-5faba268f645.png" width="850" >

#### PANTALLA PRINCIPAL
- Una vez, haya activado su correo electrónico le permitirá ingresar al aplicativo, para lo cual se tiene un dashboard en donde se meustra una tarjeta con 
la latitud y longitud actual de donde se encuentra el usuario. Además de incluir botones como "Mostrar Mapa", "Integrantes del Equipo" y "Cerrar Sesión"

    <img src="https://user-images.githubusercontent.com/65980001/188598360-7d867c0c-97f8-4f6f-bb8a-03c2efe2b4c2.png" width="250" >

- Al momento de dar clic en el botón "Mostrar Mapa", le mostrará su ubicación actual dentro de google maps

    <img src="https://user-images.githubusercontent.com/65980001/188598732-d6e0976f-dd73-4059-9fcc-f69b871bc1a8.png" width="250" >

- Además de esto al dar clic en ver Integrantes del Equipo, le mostrará una lista con los nombres de los corredores registrados y sus respectivos equipos
además de su número telefónico.

    <img src="https://user-images.githubusercontent.com/65980001/188598976-527e86c4-f0ae-4de5-b35a-5fb787bb1e46.png" width="250" >

      > Dentro de la interfaz de los ciclistas, al seleccionar en un ciclista le mostrará las ubicaciones en las que ha 
        estado cualquier ciclista. Además de proveer información como la fecha y hora en la que estuvo en esa posición
    
    <img src="https://user-images.githubusercontent.com/65980001/188599408-c1b31d00-c6f6-48ea-9165-4aef18e7a803.png" width="250" >

### RECOMENDACIONES
    > - La aplicación no mostrará s posición actual si no activa y da permisos de ubicación. 
        Para lo cual deberá activar el GPS de su dispositivo.
    > - Adicinal a esto deberá dar permisos de ubicación de la aplicación.
        Para otorgar estos permisos deberá acceder a los detalles de la aplicación tal como se indica en la figura.
        
   <img src="https://user-images.githubusercontent.com/65980001/188600475-614b77c5-c924-432a-a4bc-bbf1c1e51272.png" width="250" >

    > - Después procederá a establecer los permisos de ubicación
    
   <img src="https://user-images.githubusercontent.com/65980001/188601059-f28a2772-41d2-4ebe-b35f-21bda1f210d7.png" width="250" >

    > - Una vez establecido los permisos correspondientes la aplicación funcionará sin ningún problema.

## SITIO WEB
Acontinuación se presenta el sitio web, con la información que tiene el aplicativo móvil.
#### LOGIN
![image](https://user-images.githubusercontent.com/65980001/188602000-db417063-f3ca-4563-8eff-94505608cc61.png)

#### REGISTER
![image](https://user-images.githubusercontent.com/65980001/188602119-02c48f7a-3987-4fae-b2d9-4fd8eb54c758.png)

#### DASHBOARD
![image](https://user-images.githubusercontent.com/65980001/188602209-035213ed-3d4c-4b03-9ca5-9c6308be925a.png)

#### UBICACIONES DE LOS CICLISTAS
![image](https://user-images.githubusercontent.com/65980001/188602255-d330f1f8-56cf-425b-b370-9a789b9aa076.png)

#### MAPA
![image](https://user-images.githubusercontent.com/65980001/188602318-6ec35989-4f5c-40d3-98bb-cf5bb89a9a7d.png)


# VIDEOS
- Manual de Usuario: 
- Manual Técnico:

# ENLACES
- Página Web: https://ciclogo.vercel.app/
- APK: https://www.mediafire.com/file/5gcdmyins1tr4pe/Ciclogo.apk/file
# INSTALAR APLICATIVO MÓVIL 
- CLonar el repositorio
```
git clone https://github.com/Lizg19/ciclogo.git
```
- Iniciar el repositorio clonado en el respectivo IDE para dispositivos móviles.

# INSTALAR APLICATIVO WEB
- CLonar el repositorio
```
git clone https://github.com/Lizg19/ciclogo.git
```
- Instalar las respectivas dependencias
```
npm install
```
- Levantar Servidor
```
npm start
```

