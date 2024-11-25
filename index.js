import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes/routes.js";

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
