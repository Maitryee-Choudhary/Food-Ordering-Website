export const reducer = (state,action) => {
    
    if (action.type === "REMOVE_ITEM") {
        return {
          ...state,
          item_list: state.item_list.filter((curElem) => {
            return curElem.id !== action.payload;
          }),
        };
    }
}