import React from 'react'
import cardItem from '../Components/cardsItem'

function card() {
    return (
        <div className = 'card-in'>
        <h1>LEARN HERE cards</h1>
        <div className = 'cards-container'>
            <div className = 'cards-wrapper'>
                <ul className = 'card-items'>
                    <cardItem/>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default card;
