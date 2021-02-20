import React from 'react'
import cardItem from '../Components/cardsItem'
// import {
//     Button,
//     Card,
//     CardBody,
//     CardImg,
//     CardTitle,
//     CardText,}
//    from "reactstrap";
import '../Styles/card.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



function cards() {
    return (

        <div className = 'card-back'>
            <h2>There are always going to be people willing to help. Reach out to some below</h2>
            <Row classname='info-cards'>
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">Everyday Health</CardTitle>
          <CardText> Learn and get access to treatment best for you</CardText>
          <a href = "https://www.everydayhealth.com/multiple-sclerosis/guide/resources/">
          <Button >Take Me There!</Button></a>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">National MS Society</CardTitle>
          <CardText> Financial and planning support from National MS Society</CardText>
          <a href = "https://www.nationalmssociety.org/Living-Well-With-MS/Work-and-Home/Insurance-and-Financial-Information/Financial-Resources"><Button>Take me There!</Button></a>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">Multiple Sclerosis Foundation</CardTitle>
          <CardText>Get support with grants, programs and life balance with MSF</CardText>
          <a href="https://msfocus.org/Get-Help/Grants-Programs"><Button>Take me There!</Button></a>
        </Card>
      </Col>
    </Row>



        
    {/* //     <div className = 'card-back'>
    //     <h1>LEARN HERE cards</h1>
    //     <div className = 'cards-container'>
    //         <div className = 'cards-wrapper'>
    //             <ul className = 'cards-items'>
    //                 <cardItem */}
    {/* //                 src="https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=6&m=636379014&s=612x612&w=0&h=tnYrf_O_nvT15N4mmjorIRvZ7lK4w1q1c7RSfrVmqKA="
    //                 text="ExploreMS in cards"
    //                 label = 'MS'
    //                 path ='/services'
                    
    //                 /> */}
    {/* //             </ul> */}
    {/* //         </div> */}
         {/* </div> */}
    {/* // </div> */}
    </div>
    )
};

export default cards;
