import express from "express";
import http from "http";

const app = express();

const serverHttp = http.createServer(app);

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello Datadog" });
});

export { serverHttp };
