import React,{createContext, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { food_item } from "./food_item";
import Display from "./Display";
import Grid from "@material-ui/core/Grid";

export const ListContext = createContext();


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


const Render = () =>
{
    const classes = useStyles();
    const[data,setData] = useState(food_item);
    return(
        <>
         <ListContext.Provider value={food_item} >
          {
              data.map((curr_item)=>{
                  return (
                    <Grid container xs={4} spacing={4} className={classes.cards}>
                       <Display key={curr_item.id} {...curr_item} />
                   </Grid>
                  );

                 
              })
          }
        </ListContext.Provider>
        </>
    )
}

export default Render;