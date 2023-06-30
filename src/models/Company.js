import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        id:{type:String},
        title: {type: String, required: true},
        cnpj: {type: String, required: true},
        admin: {type: String, index: true, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const company = mongoose.model("company", companySchema);

export default company