import mongoose from "mongoose";

import dotenv from "dotenv"

export const Db = async () => {

    dotenv.config();
    try {
        
        await mongoose.connect(`${process.env.Db}`)
        console.log("db connection established");

    } catch (error) {
        console.log("db error: " + error);

    }

}