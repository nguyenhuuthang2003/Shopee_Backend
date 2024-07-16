import express from "express";
import initWebRouters from "./routes/api";
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

initWebRouters(app);

app.listen(port, () => {
    console.log("Web is running on the port " + port);
})