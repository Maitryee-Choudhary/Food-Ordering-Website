import React ,{useContext} from "react";
import {reducer} from "./reducer";
import {ListContext} from "./Render";
import Display from "./Display";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    cards: {
        flexGrow: 1,
        float:"right",
        marginBottom:30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

});


const ItemContext = () => {
    const classes = useStyles();
    const {item_list} = useContext(ListContext);
    console.log(item_list);
    return (
        <>
        {
            item_list.map((curr_item)=>{
                return (
                  <Grid container xs={4} spacing={4} className={classes.cards}>
                      <Grid item>
                     <Display key={curr_item.id} {...curr_item} />
                     </Grid>
                  </Grid>
                );

               
            })
        }
        </>
    )
}

export default ItemContext;