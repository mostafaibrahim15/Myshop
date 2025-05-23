import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function CategoryCard({data}) {
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {data.updatedAt}
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  )
}
