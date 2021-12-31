import { Router } from "express";
import multer from "multer";
import { createUserControler } from "../modules/accounts/useCases/createUser";
import { updateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar";
import uploadConfig from '../config/upload';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

usersRoutes.use(ensureAuthenticated);
usersRoutes.post('/', async (req, res) => await createUserControler.handle(req, res));
usersRoutes.patch('/avatar', uploadAvatar.single('avatar'), async (req, res) => await updateUserAvatarController.handle(req, res));

export { usersRoutes };