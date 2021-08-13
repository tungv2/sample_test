import express from 'express'
import TestController from '../controller/TestController.js'

const router = express.Router()
router.get('/transition', TestController.getValue)

export default router
