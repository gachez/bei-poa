import React from "react";
import { Link } from "gatsby";
import {Card, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../img/tv.jpg';


const cards = [
  {
    color: 'green',
    title: 'Televisions'
  },
  {
    color: 'red',
    title: 'Smart Phones'
  },
  {
    color: 'blue',
    title: 'Fridges'
  },
  {
    color: 'yellow',
    title: 'Laptops'
  }
]

export default function Home() {
  return (
  <div style={{
    backgroundColor: '#1e2129',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
<h1 style={{
    marginTop: '2.5%',
    marginLeft: '7vw',
    color: '#00acc1'
}}>Welcome to Bei Poa</h1><br />

<h3 style={{
    marginTop: '.5%',
    marginLeft: '7vw',
    color: '#8e95a5'
}}>What do you want to buy?🛍️</h3>
   
<div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '90vw',
      marginLeft: '5vw'
    }}>
      {
        cards.map( card => {
          return (
            <Card key={card.title} style={{ width: '18rem', margin: '2rem', borderRadius: '8px'}}>
              <Card.Img src={Background} style={{ width: '100%', height: 'auto', objectFit: 'cover'}} />
              <Card.Body style={{  borderRadius: '8px' }}>
              <Card.Title>{card.title}</Card.Title>
                <Button variant="primary">Continue</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
</div>) 
}
