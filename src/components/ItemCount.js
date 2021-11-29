import { Button, IconButton} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const ItemCount = ( { stock = 0, initial = 1, onAdd}) => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const increment = () =>{
        if (count < stock ) {
            setCount(count + 1);
        
    }
}


    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }


    return(
        
         <Box sx={{display:'inline-flex' , m:5, p:5, justifyContent:'center', alignItems:'center'}}>
             <Button variant="text" onClick={increment}><AddCircleOutlineIcon/></Button>
             <IconButton>{count}</IconButton>
             <Button variant="text" onClick={decrement}><RemoveCircleOutlineIcon/></Button>
         
             {
                stock && count
                ? <Button variant="contained" onClick={() => onAdd(count)}>Agregar</Button>
                : <Button variant="contained" > Agregar</Button>
                
            }
         
         </Box>
        

            
            
            
         
    );
}

export default ItemCount;