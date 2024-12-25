import express from "express";
import { getAllNames, insertNewName } from "./database.js";
import { buildBodyResponse, getRandomName } from "./utils.js";

const app = express();

app.get("/", async (_request, response) => {
  const name = await getRandomName();

  if (name) {
    await insertNewName(name);
  }
  const namesList = await getAllNames();
  const bodyResponse = buildBodyResponse(namesList);
  response.send(bodyResponse);
});

app.listen(3000, () => console.log("app running..."));
