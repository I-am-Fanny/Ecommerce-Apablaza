import { Card, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from './ItemCount';
 

 const ItemDetail = ({ item }) => {

    return(
        <>

        {
            item && item.image
            ?
        
        <Box sx={{display:'inline-flex' , m:5, p:5}}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mt:5}}>
            <CardMedia
            component="img"
            sx={{ width: 600 }}
            image={item.imagen[0]}
            alt="product"autoSave
            />
            <CardContent>
                    <Typography sx={{textAlign:'center', fontSize:35, fontWeight:'800'}}>{item.name}</Typography>
                    <Typography sx={{textAlign:'center', fontSize:15, fontWeight:'400'}}>{item.descripcion}</Typography>                    
                    <Typography sx={{textAlign:'center', fontSize:20, fontWeight:'900', color:'warning.main'}}>{item.precio}</Typography>                    
                    <Typography sx={{textAlign:'center', fontSize:13, fontWeight:'300'}}>{item.stock}Unidades</Typography>                    
                    <ItemCount/>
                </CardContent>
            </Card> 
        </Box>
        :<CircularProgress color="secondary" sx={{display:'flex',alignItems:'center'}}/>

        }
        
  
        </>
    );
 }

 export default ItemDetail;