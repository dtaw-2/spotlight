import request from "supertest";
import { describe, expect, test } from "vitest";
import app from "../app.js";

describe("GET /api/stylists", () => {
    test("returns all stylists", async () => {
        const response = await request(app).get("/api/stylists");

        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});import request from "supertest";
import { describe, expect, test } from "vitest";
import app from "../app.js";

describe("GET /api/stylists", () => {
    test("returns all stylists", async () => {
        const response = await request(app).get("/api/stylists");

        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});