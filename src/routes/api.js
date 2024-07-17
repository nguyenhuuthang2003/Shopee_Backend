import express from "express";
import { handleHelloWord } from "../controller/homeController";

const router = express.Router();

const initWebRouters = (app) => {
    router.get("/", handleHelloWord);

    return app.use("/", router)
}

export default initWebRouters;