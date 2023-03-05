import Router from 'express'
import DataController from "./DataController.js";

const router = new Router()

router.post('/orders', DataController.create)


router.get('/getStepOrders', DataController.getStepOrders)
router.get('/getStorages', DataController.getStorages)
router.get('/getStoragesDig', DataController.getStoragesDig)
router.get('/getSteps', DataController.getSteps)

router.get('/orders', DataController.getAll)
router.get('/orders/:id', DataController.getOne)
router.put('/orders/:id', DataController.update)
router.delete('/orders/:id', DataController.delete)

export default router; 