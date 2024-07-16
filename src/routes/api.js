import express from "express";

const router = express.Router();

const initWebRouters = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello word");
    });

    return app.use("/", router)
}

export default initWebRouters;