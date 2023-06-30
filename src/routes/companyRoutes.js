import express from "express";
import companyController from "../Controller/companyController.js";

const routes = express.Router();

routes
    .get("/company", companyController.readCompany)
    .post("/company", companyController.createCompany)
    .put("/company/:id", companyController.updateCompany)
    .delete("/company/:id", companyController.deleteCompany)

export default routes;