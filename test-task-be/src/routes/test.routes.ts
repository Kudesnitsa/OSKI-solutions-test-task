import * as controller from '../controllers/test.controller';

import { Router } from 'express'
import {verifyToken} from "../middleware/authJwt";

const router = Router()

router.route('/')
    .get(verifyToken, controller.getTestList)

router.route('/:id(\\d+)')
    .get(verifyToken, controller.getTestItem)

router.route('/pass')
    .get(verifyToken, controller.passTest)

export default router