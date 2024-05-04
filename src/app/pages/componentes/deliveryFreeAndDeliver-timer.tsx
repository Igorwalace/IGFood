import React from 'react'
import { FaMotorcycle } from 'react-icons/fa'
import { PiTimer } from 'react-icons/pi'

const DeliveryTime_And_DeliveyFree = (restaurant:any) => {
    return (
        <>
            <div className="my-5 flex items-center justify-between px-12 py-2 rounded-full border-[1px] border-[#EEEEEE]" >
                <div>
                    <div className="flex items-center gap-1 text-[#7E8392] md:text-sm text-xs" >
                        <span>Entrega </span>
                        <span><FaMotorcycle /></span>
                    </div>
                    {restaurant.deliveryTotal == 'Grátis' ? <span className="md:text-sm text-xs" >{restaurant.deliveryTotal}</span> : <span className="md:text-sm text-xs" >R$ {restaurant.deliveryTotal}</span>}
                </div>
                <div>
                    <div className="flex items-center text-[#7E8392] md:text-sm text-xs" >
                        <span>Entrega </span><span><PiTimer /></span>
                    </div>
                    <span className="md:text-sm text-xs" >{restaurant.deliveryTime}min</span>
                </div>
            </div>
        </>
    )
}

export default DeliveryTime_And_DeliveyFree