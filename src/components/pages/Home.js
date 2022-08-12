import React from 'react'
import { AppStatusFigures } from '../widgets/AppStatusFigures'
import { Card } from '../widgets/Card'
import { cardData } from '../shared/CardData'

export const Home = () => {
    return (
        <div className="container">
            <AppStatusFigures/>
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
