import { AppBar, BottomNavigation, Breadcrumbs, MenuItem, Typography} from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import { Link } from 'react-router-dom';
import '../NavCart/NavCart.css'
import NavCart from '../NavCart/NavCart'
import { Box } from '@mui/system';

const NavBar = () => {
    return(
        
           <Box sx={{display:'inline-flex'}} position='relative'>    
           <AppBar>
            <Breadcrumbs sx={{bgcolor:'secondary.main'}}>
            <Link to='/' style={{textDecoration:'none', color:'orange', display:'flex' ,justifyContent:'left' }}><Typography sx={{fontWeight:'bold', fontFamily:'monospace', fontSize:25}}>Encestalo</Typography><SportsKabaddiIcon/></Link>
             </Breadcrumbs>
                
                
                    <BottomNavigation sx={{bgcolor:'secondary.main'}}>
                        <Link to='/category/13' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'center'}}><MenuItem>Woman</MenuItem></Link>
                        <Link to='/category/14' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'center'}}><MenuItem>Man</MenuItem></Link>
                        <Link to='/category/15' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'center'}}><MenuItem>Boy</MenuItem></Link>
                        <Link to='/category/16' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'center'}}><MenuItem>Girl</MenuItem></Link>
                        <Link to='/cart' underline='hover' style={{textDecoration:'none', color:'White', display:'flex', justifyContent:'end'}}><NavCart/></Link>
                        
                    </BottomNavigation>
                    
            </AppBar>                          
            </Box>
            
    )         
}

export default NavBar;