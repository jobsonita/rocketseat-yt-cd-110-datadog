import express from "express";
import http from "http";
import crypto from "crypto";

const app = express();

const serverHttp = http.createServer(app);

app.use(express.json());

app.post("/users", (request, response) => {
  const { token } = request.headers;

  const { name, instagram } = request.body;

  if (!token) {
    return response.status(401).end();
  }

  if (!name || !instagram) {
    return response.status(500).end({ error: "Invalid parameters" });
  }

  const user = {
    id: crypto.randomBytes(16).toString("hex"),
    name: name,
    username: instagram,
  };

  return response.json(user);
});

export { serverHttp };
