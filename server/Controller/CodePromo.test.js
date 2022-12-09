const request = require("supertest");
const app = require("../server");

describe("From CodePromo", () => {
    try {
        test("GetData Test", async () => {
            const res = await request(app).get("/PromoCode")
            expect(res.statusCode).toBe(200);
        });
    } catch (err) {
        console.log(err);
    }
});