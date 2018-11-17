import React, {Component} from 'react';


import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody } from 'reactstrap';

const MainCards = (props) => {
 return (
   <CardDeck>
     <Card>
       <CardImg top width="100%" src="https://images.pexels.com/photos/1199588/pexels-photo-1199588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
       <CardBody>
         <CardTitle>Yoga</CardTitle>
         {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
         <CardText>To attain a sense of calmness and mindfulness, you need to feel your best.</CardText>
         <Button>Check Out Our Looks</Button>
       </CardBody>
     </Card>
     <Card>
       <CardImg top width="100%" src="https://images.pexels.com/photos/348487/pexels-photo-348487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
       <CardBody>
         <CardTitle>Lifting</CardTitle>
         {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
         <CardText>You deserve durable clothing to get you through the toughest workouts.</CardText>
         <Button>Check Out Our Looks</Button>
       </CardBody>
     </Card>
     <Card>
       <CardImg top width="100%" src="https://images.pexels.com/photos/42400/pexels-photo-42400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
       <CardBody>
         <CardTitle>Running</CardTitle>
         {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
         <CardText>You run the world, and you do it best when you're comfortable. We've got you covered.</CardText>
         <Button>Check Out Our Looks</Button>
       </CardBody>
     </Card>
   </CardDeck>
 );
};

export default MainCards;