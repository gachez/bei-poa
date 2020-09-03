import React from "react";
import { Link } from "gatsby";
import {Card, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../img/tv.jpg';
import Jumia from '../img/jumia.png';
import Jiji from '../img/jiji.jpg';
import Kilimall from '../img/kilimall.png';
import Masoko from '../img/masoko.jpg';
import Logo from '../img/logo.png';

const cards = [
  {
    title: 'HUAWEI Smartphone with 1tb storage!',
    price: 'KSH 20,000',
    img: Background,
    logo: Jumia,
    linkToShop: '#'
  },
  {
    title: 'HUAWEI Smartphone with 1tb storage!',
    price: 'KSH 20,000',
    img: Background,
    logo: Jumia,
    linkToShop: '#'
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
];


export default function SelectedProducts() {

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

    <div style={{ marginLeft: '7vw',marginTop: '7.5%', display: 'flex', position: 'relative' }}>
        <h4 style={{
            color: 'green',
            fontSize: '28px'
        }}><b style={{ color: '#00acc1'}}>Price range selected: <br /><br /></b> KSH 20,000 - 80,000</h4>
        <Link style={{
            position: 'absolute',
            bottom: '10px',
            left: '18rem',
            fontWeight: 'bold',
            height: 'auto',
            borderRadius: '8px',
            color: 'aliceblue',
            textAlign: 'center'
        }} to={"/PriceRange"}>Change range?</Link>

    </div>
    
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
                <Card key={card.title} style={{ width: '18rem', margin: '2rem', borderRadius: '8px', paddingBottom: '1rem'}}>
                    <Card.Img onMouseOver = {() => console.log('hov')} src={card.img} style={{ width: '100%', height: '50%', objectFit: 'contain', padding: '10px', marginTop: '1rem', textAlign: 'center'}} />
                    <Card.Body style={{  borderRadius: '8px' }}>
                    <Card.Title style={{ color: '#000', fontSize: '1.5rem'}}>{card.title}</Card.Title>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '1.25rem'}} >{card.price}</Card.Text>
                    <Card.Img src={card.logo} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                    <Button variant="danger" style={{ marginLeft: '4.5rem' }} onClick={() => window.location.href="https://www.khanacademy.org/computing/computer-programming"}>Buy Now</Button>
                    </Card.Body>
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
        marginTop: '1rem',
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap'
        }}>
        {
            sources.map(source => {
            return(
                <Image style={{  backgroundColor: 'white', width: '80px', height: '80px', borderRadius: '50%', margin: '1rem' }} src={source.companyLogo} />
            )
            })
        }
        </div>
    
</div>) 
}
