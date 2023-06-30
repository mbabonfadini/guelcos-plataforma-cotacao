import company from "../models/Company.js";

class CompanyController {
    
    static createCompany = async (req, res)=>{
        try{

            const newCompany = new company(req.body);
            const createdCompany = await newCompany.save();
            res.status(201).send(createdCompany)

        }
        catch (err){

        }
    }
    
    static readCompany = async (req, res) => {

        try {

            const resultList = await company.find()
            res.status(200).json(resultList);
        }
        catch (err) {
            res.status(500).send({ message: err.message })

        }

    }


    static updateCompany = async (req, res) =>{
        try {
            const id = req.params.id
            const updatedCompany = await company.findByIdAndUpdate(id, {$set: req.body})

            res.status(200).send({message: "Company updated sucessufully"})
        }
        catch (err){
            res.status(500).send({message: err.message})
        }
    } 

    static deleteCompany = async (req, res)=>{
        try {
            const id = req.params.id
            const deletedCampany = await company.findByIdAndDelete(id)

            res.status(200).send({message: "Company deleted sucessufully"})
        }
        catch (err){
            res.status(500).send({message: err.message})
        }
    }
}

export default CompanyController;