import { app } from "./app";

const PORT = 4000 || process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(":: SERVER RUNNING IN " + PORT + "::")
);

process.on("SIGINT", () => {
  server.close();
  console.log(":: SERVER FINISHING");
});
