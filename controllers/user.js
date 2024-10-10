// Metodo de prueba del controlador
export const testUser = (req, res) =>{
    return res.status(200).send({
        messege: "Mensaje enviado desde el controlador de usuarios"
    });
};