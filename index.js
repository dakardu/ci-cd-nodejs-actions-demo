const express = require("express");
const app = express();
const morgan = require("morgan");

// Middleware simple
app.use(express.json());
app.use(morgan("dev")); // Registra las solicitudes HTTP en la consola

// Ruta principal
app.get("/", (req, res) => {
	res.send("¡Hola desde Node.js + Express + CI/CD! 🚀");
});

// Nueva ruta GET con parámetro dinámico
app.get("/saludo/:nombre", (req, res) => {
	const { nombre } = req.params;
	res.send(`¡Hola, ${nombre}! Bienvenido al servidor Node.js ✨`);
});

// Ruta POST simulada (por ejemplo, para un formulario)
app.post("/mensaje", (req, res) => {
	const { texto } = req.body;
	res.status(201).json({ recibido: true, texto });
});

module.exports = app;
if (require.main === module) {
	// Si este archivo se ejecuta directamente, inicia el servidor
	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Servidor activo en http://localhost:${port}`);
	});
}
