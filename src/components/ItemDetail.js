import { Card, CardContent, CardMedia,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from './ItemCount';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask'; 
import { CartContext } from './CartContext';

 const ItemDetail = ( { item } ) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
    
    const onAdd = (quantityToAdd) => {
        alert(" Se agregaron " +  quantityToAdd  +" productos");
        setItemCount(quantityToAdd);
        test.addToCart(item, quantityToAdd);
    }

    return(
        <>

        {
            item && item.imagen
            ?
        
        <Box sx={{display:'inline-flex' , m:5, p:5}}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mt:5}}>
            <CardMedia component="img" sx={{ width: 600 }} image={item.imagen[0]} alt="product"autoSave/>
            <CardContent>
                    <Typography sx={{textAlign:'center', fontSize:35, fontWeight:'800'}}>{item.name}</Typography>
                    <Typography sx={{textAlign:'center', fontSize:15, fontWeight:'400'}}>{item.descripcion}</Typography>                    
                    <Typography sx={{textAlign:'center', fontSize:20, fontWeight:'900', color:'warning.main'}}>{item.precio}</Typography>                    
                    <Typography sx={{textAlign:'center', fontSize:13, fontWeight:'300'}}>{item.stock}Unidades</Typography>                    
                    <ItemCount/>
                </CardContent>

                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    :  <Link to='/cart' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'end'}}><AddTaskIcon color="warning" m={5}/></Link>
                }
            </Card> 
        </Box>
        :<p>Loading</p>

        }
        
  
        </>
    );
 }

 export default ItemDetail;