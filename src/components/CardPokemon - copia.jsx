import React, { useEffect, useState } from 'react';

import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material/';

//dudoso el useeffect
const CardPokemon = ( {data} ) => {
  
  const { name, url, index } = data;

  const [detailPokemon, setDetailPokemon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setDetailPokemon(data)
      })
}, [])

console.log(detailPokemon)

return (
/*     <div>
      <h2>{detailPokemon.name}</h2>
      <img src={detailPokemon.sprites.front_default} alt={detailPokemon} />
    </div> */
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detailPokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  
}


export default CardPokemon