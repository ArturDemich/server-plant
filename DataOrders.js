export const orders = [{
    id: 1,
    nameClient: "Петров Іван Іванович, +380950000000, Кам'янець-Подільський, 1 СЦ ЛД",
    dateShipment: "31.03.2022",
    dateTransfer: "29.03.2022",
    status: [
        "готово",
        "в роботі",
        "нове"
    ],
    deliveredOnBase: "22.09.2022",
    shippingMethod: "Нова Пошта",
    sentForExcavation: "21.09.2022",
    orderItems: [
        {
            id: 11,
            name: "Chamaecyparis pisifera 'Squarrosa' Form, Кипарисовик 'Сквароза' Формований",
            characteristics: "CWRB110, H160-180, FORM/CHUPA CHUPS",
            quantity: 2,
            placing: "Барвінок",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 22,
            name: "Acer rubrum 'Burgundy Belle', Клен червоний 'Бургунді Бель'",
            characteristics: "Acer rubrum 'Burgundy Belle', Клен червоний 'Бургунді Бель'",
            quantity: 20,
            placing: "Барвінок",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 33,
            name: "Platanus x acerifolia 'Pendulum', Платан кленолистий 'Пендулум'",
            characteristics: "WRB, H250-300, TG10-12",
            quantity: 1000,
            placing: "Дубриничі",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 44,
            name: "Platanus x acerifolia, Платан кленолистий",
            characteristics: "CWRB110, H160-180, FORM/CHUPA CHUPS",
            quantity: 2,
            placing: "Перечин",
            statusDig: false,
            quantityExcavation: 1
        }
    ]
},
{
    id: 2,
    nameClient: "Горобок Василь Миколайович, +38095584525, Хмельницький, 1 СЦ ЛД ТОВ 'Грандіфандер",
    dateShipment: "31.03.2022",
    dateTransfer: "29.03.2022",
    status: [
        "готово",
        "в роботі",
        "нове"
    ],
    deliveredOnBase: "22.09.2022",
    shippingMethod: "Нова Пошта",
    sentForExcavation: "21.09.2022",
    orderItems: [
        {
            id: 111,
            name: "Chamaecyparis pisifera 'Squarrosa' Form, Кипарисовик 'Сквароза' Формований",
            characteristics: "CWRB110, H160-180, FORM/CHUPA CHUPS",
            quantity: 2,
            placing: "Дубриничі",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 222,
            name: "Acer rubrum 'Burgundy Belle', Клен червоний 'Бургунді Бель'",
            characteristics: "Acer rubrum 'Burgundy Belle', Клен червоний 'Бургунді Бель'",
            quantity: 20,
            placing: "Перечин",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 333,
            name: "Platanus x acerifolia 'Pendulum', Платан кленолистий 'Пендулум'",
            characteristics: "WRB, H250-300, TG10-12",
            quantity: 1000,
            placing: "Барвінок",
            statusDig: false,
            quantityExcavation: 1
        },
        {
            id: 444,
            name: "Platanus x acerifolia, Платан кленолистий",
            characteristics: "CWRB110, H160-180, FORM/CHUPA CHUPS",
            quantity: 2,
            placing: "Барвінок",
            statusDig: false,
            quantityExcavation: 1
        }
    ]
}]

export const data = {
    steps: [
        {
            id: "80b807a4-aed1-11ed-836a-00c12700489e",
            name: "Взято в копку",
            nextStepName: "Викопано (готово до транспорту)"
        },
        {
            id: "80b807a5-aed1-11ed-836a-00c12700489e",
            name: "Взято на транспорт",
            nextStepName: "Доставлено на базу"
        },
        {
            id: "80b807a6-aed1-11ed-836a-00c12700489e",
            name: "Викопано (готово до транспорту)",
            nextStepName: "Взято на транспорт"
        },
        {
            id: "80b807a7-aed1-11ed-836a-00c12700489e",
            name: "Доставлено на базу",
            nextStepName: ""
        },
        {
            id: "80b807a8-aed1-11ed-836a-00c12700489e",
            name: "Можна на копку",
            nextStepName: "Взято в копку"
        }
    ],

    storagesDig: [
        {
            id: "1faa2e6a-30ce-11e8-8130-00c12700489e",
            name: "Барвінок"
        },
        {
            id: "32d5b85f-552a-11e9-81a1-00c12700489e",
            name: "Перечин"
        },
        {
            id: "1a70db70-0d53-11e7-94c9-ccb0da71c396",
            name: "Дубриничі"
        },
        {
            id: "1f7d8631-b1a5-11e3-942e-001de01b93ef",
            name: "Поле1 (збоку теплиці)"
        },
        {
            id: "bcaf3d50-85ff-11e5-ab1a-001d60fd7257",
            name: "Поле2 (з Смарагдами)"
        },
        {
            id: "e21ce3ae-0bf3-11e2-a49f-bd0c35283c28",
            name: "Поле3 (за 4 скл.)"
        },
        {
            id: "afb58d81-c310-11e9-81d4-00c12700489e",
            name: "Поле4 (за 3 скл.)"
        },
        {
            id: "859ba315-621a-11ea-8243-00c12700489e",
            name: "Поле5 (нове поле)"
        },
    ],

    storages: [
        {
            id: "0110ab84-7422-11e1-b84c-00221590cc66",
            name: "Магазин"
        },
        {
            id: "753399e5-907e-11eb-82b6-00c12700489e",
            name: "На відправку 1"
        },
        {
            id: "753399e6-907e-11eb-82b6-00c12700489e",
            name: "На відправку 2"
        },
        {
            id: "753399e7-907e-11eb-82b6-00c12700489e",
            name: "На відправку 3"
        },
        {
            id: "753399e8-907e-11eb-82b6-00c12700489e",
            name: "На відправку 4"
        },
        {
            id: "753399e9-907e-11eb-82b6-00c12700489e",
            name: "На відправку 5"
        },
        {
            id: "753399ea-907e-11eb-82b6-00c12700489e",
            name: "На відправку 6"
        },
        {
            id: "753399eb-907e-11eb-82b6-00c12700489e",
            name: "На відправку 7"
        },
        {
            id: "8c98c18a-f966-11e9-8210-00c12700489e",
            name: "На відправку НП"
        },
    ],

    allOrders: [
        {
            orderId: "26f0bf06-9319-11ed-8367-00c12700489e",
            orderNo: "N_000000001",
            shipmentDate: "20230113",
            customerName: "фізособа - НЕ РЕДАГУВАТИ ЦЬОГО КОНТРАГЕНТА!!!!",
            products: [
                {
                    product: {
                        id: "6eebae20-c613-11e1-b1d8-9c95dd2a622e",
                        name: "Thuja occidentalis 'Danica', Туя західна 'Даніка'"
                    },
                    characteristic: {
                        id: "ae60b77d-7a74-11ea-8248-00c12700489e",
                        name: "WRB, D20-30"
                    },
                    unit: {
                        id: "b0e167a1-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 10,
                    storage: {
                        id: "32d5b85f-552a-11e9-81a1-00c12700489e",
                        name: "Перечин"
                    },
                    step: {
                        id: "80b807a4-aed1-11ed-836a-00c12700489e",
                        name: "Взято в копку"
                    }
                },
                {
                    product: {
                        id: "600ae0ef-4eec-11e5-8e2f-240a64d6a972",
                        name: "Thuja occidentalis 'Europe Gold', Туя західна 'Юроп Голд'"
                    },
                    characteristic: {
                        id: "a119f1dc-4c28-11ec-830b-00c12700489e",
                        name: "WRB, H140-160"
                    },
                    unit: {
                        id: "7c0b3cfd-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 50,
                    storage: {
                        id: "32d5b85f-552a-11e9-81a1-00c12700489e",
                        name: "Перечин"
                    },
                    step: {
                        id: "80b807a6-aed1-11ed-836a-00c12700489e",
                        name: "Викопано (готово до транспорту)"
                    }
                },
                {
                    product: {
                        id: "6eebae20-c613-11e1-b1d8-9c95dd2a622e",
                        name: "Thuja occidentalis 'Danica', Туя західна 'Даніка'"
                    },
                    characteristic: {
                        id: "ae60b77d-7a74-11ea-8248-00c12700489e",
                        name: "WRB, D20-30"
                    },
                    unit: {
                        id: "b0e167a1-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 10,
                    storage: {
                        id: "32d5b85f-552a-11e9-81a1-00c12700489e",
                        name: "Перечин"
                    },
                    step: {
                        id: "80b807a6-aed1-11ed-836a-00c12700489e",
                        name: "Викопано (готово до транспорту)"
                    }
                }
            ]
        },

        {
            orderId: "26f0bf06-9319-11ed-8367-00c12700489ee",
            orderNo: "N_000000002",
            shipmentDate: "20230113",
            customerName: "Петров Іван Іванович, +380950000000, Кам'янець-Подільський, 1 СЦ ЛД",
            products: [
                {
                    product: {
                        id: "6eebae20-c613-11e1-b1d8-9c95dd2a622e",
                        name: "Thuja occidentalis 'Danica', Туя західна 'Даніка'"
                    },
                    characteristic: {
                        id: "ae60b77d-7a74-11ea-8248-00c12700489e",
                        name: "WRB, D20-30"
                    },
                    unit: {
                        id: "b0e167a1-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 10,
                    storage: {
                        id: "1faa2e6a-30ce-11e8-8130-00c12700489e",
                        name: "Барвінок"
                    },
                    step: {
                        id: "80b807a4-aed1-11ed-836a-00c12700489e",
                        name: "Взято в копку"
                    }
                },
                {
                    product: {
                        id: "600ae0ef-4eec-11e5-8e2f-240a64d6a972",
                        name: "Thuja occidentalis 'Europe Gold', Туя західна 'Юроп Голд'"
                    },
                    characteristic: {
                        id: "a119f1dc-4c28-11ec-830b-00c12700489e",
                        name: "WRB, H140-160"
                    },
                    unit: {
                        id: "7c0b3cfd-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 50,
                    storage: {
                        id: "32d5b85f-552a-11e9-81a1-00c12700489e",
                        name: "Перечин"
                    },
                    step: {
                        id: "80b807a4-aed1-11ed-836a-00c12700489e",
                        name: "Взято в копку"
                    }
                },
                {
                    product: {
                        id: "6eebae20-c613-11e1-b1d8-9c95dd2a622e",
                        name: "Thuja occidentalis 'Danica', Туя західна 'Даніка'"
                    },
                    characteristic: {
                        id: "ae60b77d-7a74-11ea-8248-00c12700489e",
                        name: "WRB, D20-30"
                    },
                    unit: {
                        id: "b0e167a1-ae88-11e7-831a-5cac4cc0aa5a",
                        name: "шт"
                    },
                    qty: 10,
                    storage: {
                        id: "32d5b85f-552a-11e9-81a1-00c12700489e",
                        name: "Перечин"
                    },
                    step: {
                        id: "80b807a6-aed1-11ed-836a-00c12700489e",
                        name: "Викопано (готово до транспорту)"
                    }
                }
            ]
        }
    ],

}