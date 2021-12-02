
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartContext';
import { useContext } from 'react';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -10,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
 const NavCart = () => {
   const test = useContext(CartContext);

  return (
    
      <StyledBadge badgeContent={test.calculoQuantity} sx={{color:'white'}}>
        <ShoppingCartIcon />
      </StyledBadge>
    
  );
}

export default NavCart;