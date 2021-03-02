import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./subserviceCard.styles.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SubserviceCard({sub_servicename,long_description,price,time_duration,image}) {
  const classes = useStyles();

  return (<div className='subServiceCard'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
          {sub_servicename}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {long_description}
          </Typography>
          <Typography className="spanTag" variant="body2" color="textSecondary" display="inline">
            <span>{price}</span><span>{time_duration}</span>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions className="spanTag">
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          View More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}