import React from 'react'
import '../App.css'
import {Button} from './button'
import '../Styles/section.css'

function section() {
    return (
        <div className = 'section-container'>
            {/* <video src="/video" autoPlay  loop muted/>
         */} 
         <h1>my ms journey in section</h1>

         <p>I have MS.</p>
         <p>MS doesn't have me
              in section </p>
         
            <div className= "section-btn">
                <Button 
                className = 'btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>SECTION BUTTON
                </Button>

                <Button className = 'btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>What is MS? in section
                <i className=
                'far fa-play-circle'/>
                </Button>


            </div>

        
        
        </div>
    )
}

export default section;
