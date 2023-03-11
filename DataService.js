import { orders, data } from "./DataOrders.js";




class UserService {

    async getSteps() {
        return data.steps
    }

    async getStoragesDig() {
        return data.storagesDig
    }

    async getStorages() {
        return data.storages
    }

    async getStepOrders(body) {
        if (!body) {
            throw new Error('не вказано Body request')
        }
        const orderAll = await data.allOrders
        const stepOrders = []
        for (let i = 0; i < orderAll.length; i++) {
            const products = orderAll[i].products

            let eachOrder = {}
            eachOrder = orderAll[i]
            eachOrder.products = []
            for (let el = 0; el < products.length; el++) {
                if (products[el].step.id == body.stepId &&
                    products[el].storage.id == body.storageId
                ) {
                    eachOrder.products.push(products[el])
                }
            }
            stepOrders.push(eachOrder)
        }
        return stepOrders
    }







    async getAll() {

        return orders
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не вказано ID')
        }
        const orderAll = await orders
        let order = {}

        for (let i = 0; i < orderAll.length; i++) {
            if (orderAll[i].id == id) {
                order = orderAll[i]
            }
        }
        return order
    }




    /*  async create(user) {
         const createdUser = await User.create({ ...user.data })
         return createdUser
     }
 
     async update(id, event) {
         if (!id) {
             throw new Error('не вказано ID')
         }
         const { events } = await User.findById(id)
         events.push(event)
 
         const updatedUser = await User.findByIdAndUpdate(id, { events: events })
         return updatedUser
     }
 
     async delete(id) {
         if (!id) {
             throw new Error('не вказано ID')
         }
         const user = await User.findByIdAndDelete(id)
         return user
     } */
}


export default new UserService();