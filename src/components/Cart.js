import { Button, Card, CardActionArea, CardContent, CardMedia, Fab, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"


const Cart = () => {
    const test = useContext(CartContext);
    return(
        <Box>
           <Typography variant="h5" component="div" gutterBottom m={5} p={5} sx={{display:'flex', justifyContent:'center', color:'warning.main'}}>COMPRAS</Typography>
           <Link to='/'sx={{textDecoration:'none'}}><Button variant="contained" sx={{ listStyle:'none' ,bgcolor:'secondary.main'}}  m={3}><ArrowBackIcon/>Seguir Comprando</Button></Link>
           {
               (test.cartList.length > 0)
               ?<Button sx={{m:5, display:'inline-flex', justifyContent: 'flex-end' }} variant="outlined" type="filled" onClick={test.removeList}>BORRAR TODOS LOS PRODUCTOS</Button>
               :<Typography variant="h6" component="div" gutterBottom m={3} sx={{display:'flex', justifyContent:'center', color:'primary'}}>El carrito está vacío</Typography>
            }

            <Box>
                {
                    test.cartList.length > 0?
                    test.cartList.map(item => 
                    <Card key={item.itemId}>
                        <CardActionArea sx={{display:'grid', gridTemplateColumns:'repeat(1, 3fr)', gap:1,maxWidth: 350, m:5, pt:10 }}>
                        <CardMedia component="img" height="300" width="200" image={item.imgItem} alt="producto"/>
                        <CardContent> 
                            <Typography>Pruducto: {item.nameItem}</Typography>
                            <Button variant="outlined" type="filled" onClick={() => test.deleteItem(item.itemId)}>Eliminar</Button>  
                            
                        </CardContent>
                        <CardContent>
                           <Fab variant="extended" color="secondary">{item.qtyItem} producto(s)</Fab>
                           <Fab variant="extended" color="secondary">${item.precioItem}</Fab>
                        </CardContent>
                        </CardActionArea>
                    
                    </Card>
                    )
                    :<Typography variant="h6" component="div" m={5} p={5}></Typography>
                }
            </Box>
            
        </Box>

        
    );
}

export default Cart;