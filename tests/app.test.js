const request = require("supertest");
const express = require("express");
const app = require("../index");

// Test para la ruta /
describe("GET /", () => {
	it("responde con mensaje de bienvenida", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toBe(200);
		expect(res.text).toMatch(/¡Hola desde/);
	});
});

// Test para la ruta /saludo/:nombre
describe("GET /saludo/:nombre", () => {
	it("responde con saludo personalizado", async () => {
		const nombre = "Dagoberto";
		const res = await request(app).get(`/saludo/${nombre}`);
		expect(res.statusCode).toBe(200);
		expect(res.text).toContain(nombre);
	});
});

// Test para la ruta POST /mensaje
describe("POST /mensaje", () => {
	it("responde con el texto enviado", async () => {
		const res = await request(app)
			.post("/mensaje")
			.send({ texto: "¡Hola mundo!" })
			.set("Content-Type", "application/json");

		expect(res.statusCode).toBe(201);
		expect(res.body.recibido).toBe(true);
		expect(res.body.texto).toBe("¡Hola mundo!");
	});
});
