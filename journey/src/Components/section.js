import React from 'react';
import '../App.css';
import { Button } from './button';
import '../Styles/section.css';
import ReactPlayer from "react-player";
import { Facebook, Twitter, Tumblr, Reddit } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import { render } from 'react-dom';



function section() {
     
    return (
        <div className='section-container'>
            <div className='back-wrapper'>
                {/* <video src="/video" autoPlay  loop muted/>
          */}
                <div className='row'>
                    <div className='col-one'>
                        <h1><p>I HAVE MS</p>
                            <p>MS doesn't have me </p></h1>

                        <div className="story">

                            <strong>
<p>
                                
                                "I was diagnosed about 14 years ago when I was in my late 20s. I’d had symptoms for many years so ultimately it was good to finally get a diagnosis.  When I was told that it was primary progressive MS and that’s why I had been struggling to walk, along with other symptoms, I was just really glad to put a name to it and finally understand what had been going wrong with me. After diagnosis I absolutely did not want my friends to know about it. I did not want a single person to know I had MS. I was afraid of being judged because of the condition and of people changing the way they were around me. I didn’t want sympathy, nor did I want excuses being made for me.  For the first year or so, I only told my direct family and my boss and maybe two or three very close friends.
                        "</p>
                                </strong>
                                <p>Story from Kaz Laljee</p>
                                <p>Read more experiences <a href = "https://mstrust.org.uk/life-ms/your-stories/life-ms-stories">here</a> at </p>
                            
                        </div>

                    </div>

                    <div className='col-two'>

                        <h1>What is MS?</h1>

                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=geQP_zYS-6s"
                        />

                        <ul>
                            <li>Multiple sclerosis (MS) is the most widespread disabling neurological condition of young adults around the world</li>
                            <li>You can develop MS at any age, but most people receive diagnoses between the ages of 20 and 50</li>
                            <li>The rate of MS is between 57 and 78 cases per 100,000 people</li>
                            <li>MS is two to three times more common in women than men</li>


                        </ul>

                        <div className="section-btn">
                            {/* <Button 
                        className = 'btns' 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>SECTION 
                        </Button>

                        <Button className = 'btns' 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>SECTION
                        <i className=
                        'far fa-play-circle'/>
                        </Button> */}
                        </div>

                        <div className='col-three'>

                            <div className='connection'>
                                <Facebook url={"https://www.facebook.com/"} />


                                <Twitter url={"https://twitter.com/?lang=en"} />

                                <Tumblr url={"https://www.tumblr.com/"} />

                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};

export default section;
