# Instrucciones Entrega Final

**Se debe crear las siguientes variables de entorno:**

```
MONGODB_URI='url_de_mongo'

MONGODB_SECRET='secreto_de_mongo',

ACCOUNT_GMAIL= 'correo_de_gmail',

PASS_ACCOUNT='contrasena_al_agregar_nodemailer_ethereal'
```

**Para agregar inicialmente algunos productos se debe usar el script:**

`npm run start:seed`

**Para correr la aplicación localmente usar el script:**

`npm run start:dev`

**Para agregar productos se debe usar:**

_endpoint:_ http://localhost:8080/product

_método:_ POST

_body ejemplo:_

```JSON
{
    "title":"test",
    "price": "56",
    "picture": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
}
```
