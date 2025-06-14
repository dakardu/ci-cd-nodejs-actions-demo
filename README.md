# CI/CD Node.js Demo 🚀

![Node.js CI](https://github.com/dakardu/ci-cd-nodejs-actions-demo/actions/workflows/ci.yml/badge.svg)

> Proyecto de ejemplo que demuestra un flujo completo de integración y despliegue continuo (CI/CD) con Node.js, Express, Jest, Supertest y GitHub Actions.

---

## 🧰 Tecnologías utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Jest](https://jestjs.io/)
-   [Supertest](https://github.com/visionmedia/supertest)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
-   [Morgan](https://www.npmjs.com/package/morgan)
-   [GitHub Actions](https://docs.github.com/actions)

---

## 🚀 Instalación y uso local

1. Clona el repositorio:

    ```bash
    git clone https://github.com/dakardu/ci-cd-nodejs-actions-demo.git
    cd ci-cd-nodejs-actions-demo
    ```

## Pruebas con Jest

Este proyecto usa Jest para realizar pruebas automatizadas sobre la API.  
Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm test

## 🧪 Endpoints disponibles

-   `GET /` → Devuelve mensaje de bienvenida
-   `GET /saludo/:nombre` → Saluda con tu nombre parametro nombre
    _Ejemplo_: `/saludo/Dagoberto` → `"¡Hola, Dagoberto!"`
-   `POST /mensaje` → Envía un mensaje en JSON
    _Body_: `{ "texto": "Hola desde el frontend" }`

✍️ Autor
Dagoberto - @dakardu
```
