import React from 'react'
import cardItem from '../Components/cardsItem'
import { Button } from 'reactstrap';



function card() {
    return (
        <div className = 'card-in'>
        <h1>LEARN HERE cards</h1>
        <div className = 'cards-container'>
            <div className = 'cards-wrapper'>
                <ul className = 'cards-items'>
                    <cardItem
                    src="https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=6&m=636379014&s=612x612&w=0&h=tnYrf_O_nvT15N4mmjorIRvZ7lK4w1q1c7RSfrVmqKA="
                    text="ExploreMS in cards"
                    label = 'MS'
                    path ='/services'
                    
                    />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default card;
