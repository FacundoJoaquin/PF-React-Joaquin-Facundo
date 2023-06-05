import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';

const CardPokemon = ( {data} ) => {
console.log(data)

function numeroRandom() {
  return Math.floor(Math.random() * 30) + 1;
}

  return (
    <div>
<Card sx={{ width: 420, gap:"10px", height: 450, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200}}
        objectFit='contain'>
          <img
            src={data.image}
            srcSet={data.image}
            loading="lazy"
            alt={data.title}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body3">{data.category}</Typography>
        <Typography fontWeight="xl">{data.title}</Typography>

        <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>
          ${data.price}
        </Typography>
        <Typography level="body2">
          (¡Solo quedan {numeroRandom()} disponibles!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
        <Link to={`/item/${data.id}`}>Ver en detalle</Link>
        </Button>
      </CardOverflow>
    </Card>
    </div>
  )
}

export default CardPokemon




/* import React from 'react'
import "./CardPokemon.css"
import { Link } from 'react-router-dom';

const CardPokemon = ({ data, index }) => {
  console.log(data)
  return (
    <div className="sec">
      <div className="card">
        <img src={data.image} alt={data.title} />
        <div className="textos">
          <h2>{data.category}</h2>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="price">
            <div className="actual">${data.price}</div>
            <div className="old"><p>${parseFloat(data.price)}</p></div>
          </div>
          <Link>
          <form action="">
            <input type="button" value="Add to cart" />
          </form>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default CardPokemon
 */
















/* import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardPokemon = ({ data } ) => {
  console.log
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>{data.title}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardPokemon */