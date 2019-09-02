import React from 'react';
import './About.css'
import { Button, Card, CardDeck} from 'react-bootstrap';


function About() {
  return (
  	<div>
<h1 className="tengah"> Makanan </h1>
<CardDeck className="card">
  <Card>
    <Card.Img className="sama" variant="top" src="https://craftlog.com/m/i/10728883=s1280=h960" />
    <Card.Body>
      <Card.Title>Ayam Geprek</Card.Title>
      <Card.Text>
       Harga : Rp.20.000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Button variant="primary">Pesan</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="sama" variant="top" src="https://i2.wp.com/eatwellabi.com/wp-content/uploads/2019/01/IMG_5172.jpg?fit=1260%2C840&ssl=1" />
    <Card.Body>
      <Card.Title>Nasi Goreng</Card.Title>
      <Card.Text>
      Harga : Rp.10.000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Button variant="primary">Pesan</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="sama" variant="top" src="https://img-global.cpcdn.com/003_recipes/62bc0149e02866d8/1200x630cq70/photo.jpg" />
    <Card.Body>
      <Card.Title>Bakso</Card.Title>
      <Card.Text>
       Harga : Rp.15.000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Button variant="primary">Pesan</Button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
  )
}

export default About