import React from 'react';
import {Link} from 'react-router-dom';




 function cardItem() {
    return (
        <>
        <div calssName = 'card'>
            <li className = 'card-item'>
                <Link className='card-item-link'>
                    <figure className = 'cards-item-picwrap'>
                        <img src = '/' alt='Image in cards'
                        className = 'cards-item-img'/>
                    </figure>
                    <div className = 'cards-item-info'>
                        <h5 className = 'card-text'/>
                    </div>
                </Link>
            </li>
            
        </div>
        </>

    )
}

export default cardItem;
