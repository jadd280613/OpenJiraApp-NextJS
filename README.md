# Next JS OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar variables de entorno

Renombrar el archivo **.env.template** a **.env**

## LLenar la base de datos con informacion de pruebas

Llamar a endpoint:
```
http://localhost:3000/api/seed
```
