import express from "express";
import company from "./companyRoutes.js";


const routes = (app)=>{
    app.route("/").get((req, res)=>{
        res.status(200).send({titulo: "Projeto Guelcos"})
    });

    app.use(
        express.json(),
        company
    )
}

export default routes