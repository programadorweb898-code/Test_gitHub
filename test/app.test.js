import request from "supertest";
import app from "../src/index.js";

test("GET / responde correctamente", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});
test("GET /test responde correctamente", async () => {
  const response = await request(app).get("/test");

  expect(response.status).toBe(200);
});

test("GET /login devuelve 401", async () => {
  const response = await request(app).get("/login");

  expect(response.status).toBe(404);
});
