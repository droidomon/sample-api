const app = require("../src/app");
const request = require("supertest");

describe("Testing /api/users endpoint", () => {
  it("GET to / with admin authToken should pass with 200 OK", (done) => {
    const res = request(app)
      .get("/api/users")
      .set("Authorization", "Bearer qwerty")
      .expect(200)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("GET to / with non-admin authToken should fail with 401 Unauthorized", (done) => {
    const res = request(app)
      .get("/api/users")
      .set("Authorization", "Bearer qwert")
      .expect(401)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("POST to / with all required fields should pass with 200 OK", (done) => {
    request(app)
      .post("/api/users")
      .send({ username: "some_user", password: "123456", name: "Some User" })
      .expect(200)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("POST to / without all required fields should fail with 400 Bad Request", (done) => {
    request(app)
      .post("/api/users")
      .send({
        username: "some_user",
        password: "123456",
      })
      .expect(400)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });
});

describe("Testing /api/auth endpoint", () => {
  it("POST to /login with correct credentials should succeed with 200 OK", (done) => {
    request(app)
      .post("/api/auth/login")
      .send({ username: "user_1", password: "abc123" })
      .expect(200)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("POST to /login with wrong credentials should fail with 401 Unauthorized", (done) => {
    request(app)
      .post("/api/auth/login")
      .send({ username: "something", password: "somepass" })
      .expect(401)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("GET to /logout with invalid authToken should fail with 401 Unauthorized", (done) => {
    request(app)
      .get("/api/auth/logout")
      .set("Authorization", "Bearer qqqqqq")
      .expect(401)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });

  it("GET to /logout with valid authToken should succeed with 200 OK", (done) => {
    request(app)
      .get("/api/auth/logout")
      .set("Authorization", "Bearer qwert")
      .expect(200)
      .end((err, res) => {
        done(err);
        if (!err) {
          console.log(`Code: ${res.status}, success: ${res.body.success}`);
          console.log("data:", res.body.data);
        }
      });
  });
});