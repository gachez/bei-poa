import React from "react";
import { Link } from "gatsby";
import {Card, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../img/tv.jpg';
import SmartPhone from '../img/phone.jpg';
import Fridge from '../img/fridge.jpg'; 
import Sofa from '../img/sofa.jpg';
import Jumia from '../img/jumia.png';
import Jiji from '../img/jiji.jpg';
import Kilimall from '../img/kilimall.png';
import Masoko from '../img/masoko.jpg';
import Logo from '../img/logo.png';
import Money from '../img/money.png';
import Conservative from '../img/conmoney.png';
import Affordable from '../img/budget.png';
import Generous from '../img/generous.png';

const cards = [
  {
    color: 'green',
    title: 'Affordable',
    range: '0 - 20,000',
    img: Affordable
  },
  {
    color: 'red',
    title: 'Conservative',
    range: '20,000 - 80,000',
    img: Conservative
  },
  {
    color: 'blue',
    title: 'Generous',
    range: '80,000 - 250,000',
    img: Money
  },
  {
    color: 'yellow',
    title: 'Extravagant',
    range: '250,000+',
    img: Generous
  }
];

const sources = [
  {
    companyTitle: 'Jumia',
    companyLogo: Jumia
  },
  {
    companyTitle: 'Masoko',
    companyLogo: Masoko
  },
  {
    companyTitle: 'Jiji',
    companyLogo: Jiji
  },
  {
    companyTitle: 'Kilimall',
    companyLogo: Kilimall
  }
];


export default function PriceRange() {

return (
<div style={{
    backgroundColor: '#1e2129',
    position: 'fixed',
    height: '100%',
    width: '100%'
}}>
<Image src={Logo} style={{
  position: 'absolute',
  width: '128px',
  height: '64px',
  left: '1vw',
  top: '2%',
  margin: '10px'
}} />    

<h4 style={{
    marginTop: '10%',
    marginLeft: '7vw',
    color: '#8e95a5'
}}>What's your budget?</h4>
   
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
            <Link to={"/SelectedProducts"} style={{ textDecoration: 'none' }}>
              <Card key={card.title} style={{ width: '18rem', margin: '2rem', borderRadius: '8px'}}>
                <Card.Img onMouseOver = {() => console.log('hov')} src={card.img} style={{ width: '50%', height: '50%', objectFit: 'contain', padding: '10px', marginTop: '1rem', textAlign: 'center'}} />
                <Card.Body style={{  borderRadius: '8px' }}>
                <Card.Title style={{ color: '#000', fontSize: '1.5rem'}}>{card.title}</Card.Title>
                <Card.Text style={{ fontWeight: 'bold', fontSize: '1.25rem'}} >KSH {card.range}</Card.Text>
              
                </Card.Body>
              </Card>
            </Link>
            
          )
        })
      }
    </div>
    <div style={{
      width: '100vw',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '1rem',
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap'
    }}>
      {
        sources.map(source => {
          return(
            <Image style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '1rem' }} src={source.companyLogo} />
          )
        })
      }
    </div>
    
</div>) 
}
