import {Router} from 'express';

import * as controller from '../controllers/auth.controller';

const router = Router()

router.route('/signup')
    .post(controller.signup)

router.route('/signin')
    .post(controller.signin)

export default router