import React from 'react'
import { AppHilights } from './AppHilights'
import { Card } from './Card'
import { cardData } from './CardData'

export const Home = () => {
    return (
        <div className="container">
            <AppHilights/>
            <hr/>
            <div className="row">
                {
                    cardData.map((data, index) => (
                        <Card cardData={data} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
