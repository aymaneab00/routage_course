import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Single({produits}) {
    const {id}=useParams();
    const product = produits.find((p)=>p.id===Number(id))
  return (
    <div>
<img src={product.thumbnail} alt={product.thumbnail}/>
<h1>  {product.title}</h1>
<p>{product.price}</p>
<Link to={'/'}> reviens sur Home</Link>

    </div>
  )
}
