import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';





 const Item = ({id,title, stock, price, pictureUrl }) => {
     return(
        <Box sx={{ display:'inline-flex',flexWrap:'nowrap', alignItems:'center', p:3, borderRadius:2}}>
        <Card sx={{display:'grid', gridTemplateColumns:'repeat(1, 3fr)', gap:1,maxWidth: 350, m:5, pt:10 }}>
        <CardMedia component="img" height="300" image={pictureUrl} alt="producto"/>
        <CardContent>
          <Typography sx={{textAlign:'center', fontSize:18, fontWeight:'400'}}>{title}</Typography>
          <Typography sx={{textAlign:'center', fontSize:25, fontWeight:'800', color:'warning.main'}}>{price}</Typography>
          <Typography sx={{textAlign:'center', fontSize:13, fontWeight:'400'}}>{stock}Unidades</Typography>
          
          <IconButton>
          <Link to={`/item/${id}`}><AddBoxIcon/></Link>
          </IconButton>
          
          
        </CardContent>
        </Card>
        </Box>

     );
 }

 export default Item;