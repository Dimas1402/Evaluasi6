import React from 'react';
import { Button, Card, CardDeck, Form, Col, Row} from 'react-bootstrap';
import './Users.css'

function Kontak() {
  return (
  	<Form className="coba">
     <h1 className="hub">Hubungi Kami</h1>
  	  <Form.Group as={Row} controlId="formPlaintextEmail">
  	    <Form.Label column sm="2">
  	      To
  	    </Form.Label>
  	    <Col sm="10">
  	      <Form.Control className="warna" plaintext readOnly defaultValue="anugerahdimas469@gmailcom" />
  	    </Col>
  	  </Form.Group>

  	 <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Masukan Komentar</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

   <Button variant="primary" type="submit">
    Kirim
  </Button>
  	</Form>
  )
}

export default Kontak