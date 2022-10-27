import React from 'react'
import Card from 'react-bootstrap/Card';
import ig from '../multimedia/3721672-instagram_108066.png'


function Footer() {
  return (
    <card className="footer">
        <Card.Header className="text-center"><a href="https://www.instagram.com/"><img src={ig} alt="imagen instagram"/></a></Card.Header>
    </card>
  )
}

export default Footer