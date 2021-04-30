import { createConnection } from "typeorm";

export const connectionDB = async () => {
  const conn = await createConnection();
  console.log(":: DATABASE CONNECTION ON " + conn.options.database + " ::");

  process.on("SIGINT", () => {
    conn.close().then(() => console.log(":: DATABASE CLOSE"));
  });
};
