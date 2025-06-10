// src/server.ts
import express, { Request, Response, NextFunction } from 'express';
import { registerRoutes } from './shared/routes';

class Server {
  public app = express();
  public port = 3000;

  constructor() {
    this.app.use(express.json());

    registerRoutes(this.app);  

    this.app.get('/', (req, res) => {
      res.send('API running...');
    });

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Internal Server Error' });
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.listen();
