import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';

const Cards = ( {data} ) => {



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

      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
        <Link to={`/item/${data.id}`}>Ver en detalle</Link>
        </Button>
      </CardOverflow>
    </Card>
    </div>
  )
};
export default Cards