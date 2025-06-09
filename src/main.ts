import express from "express";

class Server {
  app = express();
  port = 3000;
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hello, World!");
    });
    this.app.patch("/", (req, res) => {
      res.send("Patch method received!");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.listen();
