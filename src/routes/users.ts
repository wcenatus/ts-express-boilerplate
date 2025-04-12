import express from 'express';
import { getUsers, getOneUser} from '../controllers/users';

var router = express.Router();

router.get('/', getUsers);
router.get('/:id',getOneUser);

export default router;