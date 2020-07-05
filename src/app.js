import express from "express";
import path from "path";

import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );
  }
  routes() {
    this.server.use(routes);
  }
}
 
export default new App().server;

// Yarn Add express sequelize pg pg-hstore
// Add nodemon sucrase sequelize-cli -D
// yarn sucrase-node src/server.js
// Plugin: Prettier

//Migrations:
// yarn sequelize migration:create --name=create-users
// yarn sequelize db:migrate
// yarn sequelize db:migrate:undo
/*

*/
