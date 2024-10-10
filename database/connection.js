import {connect} from "mongoose";
import dotenv from "dotenv";

//configurar el dotend para usar variables de entorno
dotenv.config();

const connection = async() => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Conectado correntamente a DB_Social_Network")
    } catch (error) {
        console.log("Error, falla en la conexion BD", error);
        throw new Error("¡No se a podido conectar a la BD !")
    }
};

export default connection;