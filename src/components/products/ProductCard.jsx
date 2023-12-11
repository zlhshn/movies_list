import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

const ProductCard = ({title,price ,image ,id}) => {

  const [show, setShow] = useState(false)

  return (
    <Card key={id} className="rounded-2 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price} $</Card.Title>
        <MdFavorite size={30} className={show ? "text-danger" : "text-dark"} onClick={()=>setShow(!show)}/>
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;