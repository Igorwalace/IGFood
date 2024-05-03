import React from 'react'

const Discount = (price: any, discount: any) => {

    const discountTotal = Number((price * discount) / 100)
    const priceTotal = Number(price - discountTotal)

    return Number(priceTotal)
}

export default Discount