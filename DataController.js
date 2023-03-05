import DataService from "./DataService.js";

class UserController {

    async getSteps(req, res) {
        try {
            const steps = await DataService.getSteps();
            return res.json(steps);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getStoragesDig(req, res) {
        try {
            const storagesDig = await DataService.getStoragesDig();
            return res.json(storagesDig);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getStorages(req, res) {
        try {
            const storages = await DataService.getStorages();
            return res.json(storages);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getStepOrders(req, res) {

        try {
            const storages = await DataService.getStepOrders(req.body);
            return res.json(storages);
        } catch (e) {
            res.status(500).json(e)
        }
    }




    async getAll(req, res) {
        try {
            const orders = await DataService.getAll();
            return res.json(orders);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const order = await DataService.getOne(req.params.id)
            return res.json(order)
            console.log(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }



    async create(req, res) {
        try {
            const user = await DataService.create(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await DataService.update(req.params.id, req.body.data);
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const user = await DataService.delete(req.params.id);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new UserController();