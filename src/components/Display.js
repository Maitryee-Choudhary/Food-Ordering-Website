import React, { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStars from "react-rating-stars-component";
import IMG1 from "../assets/img1.jpg";
import Grid from "@material-ui/core/Grid";
import {ListContext} from "./Render";
const useStyles = makeStyles({
    cards: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    root: {
        width: 300,
        borderRadius: 15,
        // boxShadow: 0 4 8 0 rgba(0, 0, 0, 0.2),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    images: {
        height: 270,
        borderRadius: 15,
    },
    desc: {
        display: "flex",
        justifyContent: "space-between",
    },

});

const Display = ({id,title,type,price}) => {
    const classes = useStyles();
    
    //  const data = useContext(ListContext);
    //  console.log(data);

    

     const {removeItem} = useContext(ListContext);

    return (
        <>
            <div >
                
               
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    <img src={IMG1} className={classes.images} />
                                </Typography>
                                <Typography variant="h5" component="h2" className={classes.title}>
                                    <div className={classes.desc}>
                                        <div>{title}</div>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={20}
                                                edit={false}
                                                value={4}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <div className={classes.desc}>
                                        <div>{type}</div>
                                        <div>{price}</div>
                                    </div>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => removeItem(id)} >Add to Cart</Button>
                            </CardActions>
                        </Card>
   
            
            </div>
        </>
    )
}

export default Display;