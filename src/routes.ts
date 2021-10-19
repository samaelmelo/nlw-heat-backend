import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserControllers";

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

export {router}