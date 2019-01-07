
import { LOAD_PRODUCTS } from '../constants'

export function loadProducts(type, size) {
    //..
    // if type===elec, size===2

    const products = [
        {
            id: 1,
            name: 'Laptop',
            price: 198000,
            description: 'New MAC pro',
            canBuy: true,
            image: 'images/Laptop.png'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 18000,
            description: 'New  pro',
            canBuy: true,
            image: 'images/Mobile.png'
        }
    ]

    return { type: LOAD_PRODUCTS, products } // action

}