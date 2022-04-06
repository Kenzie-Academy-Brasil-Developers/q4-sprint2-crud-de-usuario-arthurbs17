import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import { PORT } from "./configs";

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running at http://localhost:${PORT}`);
    });
  })
  .catch((err: any) => console.log(err));
