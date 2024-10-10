import { Router } from "express";
import {testUser} from "../controllers/user.js";

const router = Router();

//definir rutas de user

router.get('/test-user', testUser);

//Exportar el Router
export default router;

