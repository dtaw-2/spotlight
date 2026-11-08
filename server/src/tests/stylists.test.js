//Supertest lets us send requests to the Express app during testing
import request from "supertest";

//Vitest provides the tools used to organize and check our test
import { describe, expect, test } from "vitest";

//Imports the Express app we want to test
import app from "../app.js";

//Tests the GET route for all stylists
describe("GET /api/stylists", () => {
    test("returns all stylists", async () => {
        const response = await request(app).get("/api/stylists");

        //The request should be sucessfull
        expect(response.status).toBe(200);

        //The request should contain a data property
        expect(response.body.data).toBeDefined();

        //The stylist data should be returned as an array
        expect(Array.isArray(response.body.data)).toBe(true);

        //The array should contain at least one stylist
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});