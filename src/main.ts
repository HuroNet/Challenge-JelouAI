import { prisma } from "../prismaClient";
import express from "express";

class Server {
  app = express();
  port = 3000;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.app.get("/", async (req, res) => {
      try {
        // Ejemplo simple: cuenta cuántos contactos hay en la base de datos
        const contacts = await prisma.contact.findMany();
        res.json(contacts);
      } catch (error) {
        console.log(error)
        res.status(500).send("Error connecting to the database");
      }
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
