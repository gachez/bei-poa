import React from "react";
import { Link } from "gatsby";
import {Card, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../img/tv.jpg';
import SmartPhone from '../img/phone.jpg';
import Logo from '../img/logo.png';
import Jumia from '../img/jumia.png';
import Kilimall from '../img/kilimall.png';
import Theatre from '../img/theatre.jpg';
import Printer from '../img/printers.jpg';
import '../styles/style.css';


const cards = [
  {
    color: 'green',
    title: 'Televisions',
    img: Background
  },
  {
    color: 'red',
    title: 'Smart Phones',
    img: SmartPhone
  },
  {
    color: 'blue',
    title: 'Home theatre',
    img: Theatre
  },
  {
    color: 'yellow',
    title: 'Printer',
    img: Printer
  }
];

const sources = [
  {
    companyTitle: 'Jumia',
    companyLogo: Jumia
  },
  {
    companyTitle: 'Kilimall',
    companyLogo: Kilimall
  }
]

export default function Home() {

return (
<div style={{
    backgroundColor: '#1e2129',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
    boxSizing: 'border-box'
}}>
<Image src={Logo} style={{
  position: 'absolute',
  width: '128px',
  height: '64px',
  left: '1vw',
  top: '2%',
  margin: '10px'
}} />  
<h1 style={{
    marginTop: '10%',
    marginLeft: '7vw',
    color: '#00acc1'
}}>Welcome Friend!</h1><br />

<h4 style={{
    marginTop: '.5%',
    marginLeft: '7vw',
    color: '#8e95a5'
}}>What do you want to buy?<span>🛍️</span></h4>
   
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
              <Link to="/PriceRange">
                <Card.Img src={card.img} style={{ height: '250px'}} />
              <Card.Body style={{  borderRadius: '8px' }}>
              <Card.Title style={{ color: '#000'}}>{card.title}</Card.Title>
               
              </Card.Body>
            </Link>
            </Card>
          )
        })
      }
    </div>
    <div style={{
      width: '100vw',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '2rem',
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap'
    }}>
      {
        sources.map(source => {
          return(

            <Image style={{ backgroundColor: 'white',width: '80px', height: '80px', borderRadius: '50%', margin: '1rem' }} src={source.companyLogo} />
          )
        })
      }
    </div>
</div>) 
}
