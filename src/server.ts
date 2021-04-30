import dotenv from "dotenv";
import { app } from "./app";

const PORT = process.env.PORT || 3000;
dotenv.config();

const server = app.listen(PORT, () =>
  console.log(":: SERVER RUNNING IN " + PORT + "::")
);

process.on("SIGINT", () => {
  server.close();
  console.log(":: SERVER FINISHING");
});
