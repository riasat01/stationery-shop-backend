import app from "./app";
import mongoose from "mongoose";
import { dbUrl, port } from "./app/config";


const main = async () => {
    try {
        mongoose.connect(dbUrl as string);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}