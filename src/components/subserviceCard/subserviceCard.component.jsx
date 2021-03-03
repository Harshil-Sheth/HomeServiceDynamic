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
import MyVerticallyCenteredModal from '../subServiceModal/subServiceModel.component'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SubserviceCard({sub_servicename,short_description,price,time_duration,image, long_description,service_name}) {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);



  return (<div className='subServiceCard'>
    <Card className={classes.root, 'card'}>
      <CardActionArea onClick={() => setModalShow(true)}>
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
          {short_description}
          </Typography>
          <Typography className="spanTag" variant="body2" color="textSecondary" display="inline">
            <span className='price'>₹{price}</span><span>{time_duration}</span>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions className="spanTag">
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary" onClick={() => setModalShow(true)}>
          View More
        </Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        long_description={long_description}
        sub_servicename={sub_servicename}
        service_name={service_name}
      />
      </CardActions>
    </Card>
    </div>
  );
}