const supertest = require('supertest');
const request = supertest("https://jsonplaceholder.typicode.com");

describe("GET RESQUEST", () => {
    it("GET /users", async () => {
        const response = await request.get("/posts");
        expect(response.status).toBe(200);
        console.log(response.body);
    });
});

describe("DELETE REQUEST", () => {
    it("DELETE /post/1", async () => {
        const response = await request.delete("/posts/1");
        expect(response.status).toBe(200);
        console.log(response.body);
    });
});

let id;

describe("POST REQUEST", () => {
    it("POST data", async () => {
        const data = {
        "userId": (Math.random * 9),
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        const response = await request.post("/posts").send(data);
        expect(response.status).toBe(201);
        console.log(response.body);
        id = response.body.id;
    });
});

describe("PATCH REQUEST", () => {
    it("PATCH data", async () => {
        const data = {
            "title": "sunt aut facere repellat provident"
        }
        const response = await request.patch(`/posts/${id}`).send(data);
        expect(response.status).toBe(200);
        console.log(response.body);
    });
});