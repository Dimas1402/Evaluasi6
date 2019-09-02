import React from 'react';
import './Users.css'
import { Button, Card, CardDeck} from 'react-bootstrap';


function Users() {
  return (
  	<div>
<h1 className="tengah"> Minuman </h1>
<CardDeck className="card">
  <Card>
    <Card.Img className="sama" variant="top" src="https://cdn2.tstatic.net/palembang/foto/bank/images/es-teh-manis_20170907_143242.jpg" />
    <Card.Body>
      <Card.Title>Es Teh</Card.Title>
      <Card.Text>
       Harga : Rp.3.000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Button variant="primary">Pesan</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="sama" variant="top" src="https://1.bp.blogspot.com/-nwECc2NUxgY/XRIr8doUMGI/AAAAAAAAAB0/ehM1JHvdat84rf7ch2tA8ittHbr9hEHzwCLcBGAs/s1600/Es%2BCincau%2BHijau.jpg" />
    <Card.Body>
      <Card.Title>Es Cincau</Card.Title>
      <Card.Text>
      Harga : Rp.4.000
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Button variant="primary">Pesan</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="sama" variant="top" src="https://www.nibble.id/blog/wp-content/uploads/2018/04/jus-alpukat-di-jakarta-06.jpg" />
    <Card.Body>
      <Card.Title>Jus Alpukat</Card.Title>
      <Card.Text>
       Harga : Rp.8.000
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

export default Users