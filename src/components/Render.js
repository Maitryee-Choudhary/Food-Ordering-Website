import React,{createContext, useContext, useReducer, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { food_item } from "./food_item";
import Display from "./Display";
import Grid from "@material-ui/core/Grid";
import {reducer} from "./reducer";
import ItemContext from "./ItemContext";
export const ListContext = createContext();




const initialState={
    item_list : food_item,
    totalAmount:0,
    totalItem:0,
    quantity:0
}
const Render = () =>
{
    // const classes = useStyles();
    //  const[data,setData] = useState(food_item);
  

    const[state,dispatch] = useReducer(reducer,initialState);

    const removeItem = (id) =>
    {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };
   
    return(
        <>
         <ListContext.Provider value={{...state,removeItem}} >
          <ItemContext />
        </ListContext.Provider>
        </>
    )
}

export default Render;