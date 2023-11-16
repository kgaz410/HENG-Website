import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Box, Button, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link as Scroll} from 'react-scroll';
import { useState } from 'react';
import { Link, renderMatches } from 'react-router-dom';
import { styled } from '@mui/system';
import { HashLink } from 'react-router-hash-link'



const Navbar = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'sticky',
    top: 0,
    height: 100,
    // zIndex: 10,

    border: 'solid',
    borderColor: 'purple',
    backgroundColor: '#202020',
    opacity: '90%'
})

const LinkStyle = styled(Typography) ({
    color: '#FDF6EA',
    textDecoration: 'none',
    fontFamily: 'Fira Sans', 
    fontSize: '1rem',
    cursor: 'pointer',
    '&:hover' : {
        borderBottom: 'solid',
        borderBottomWidth: '0.10rem',
        borderBottomColor: '#FDF6EA',
    }

})

const CompanyName = styled(Typography) ({
    color: '#FDF6EA',
    fontFamily: 'Dosis', 
    fontSize: '2rem',
    border: 'solid',
    borderColor: 'green'

})




function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  

  return (
            <Navbar>
                <Toolbar sx={{width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>

                    <CompanyName className='menu-link' to='home' smooth='true' duration={500} spy={true} exact='true' offset={-100} activeClass='active'
                        component={Scroll}  sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Herrick Engineering
                    </CompanyName>
              
                  

                {/* DROPDOWN MENU */}
                {/* <Button sx={{border: 'solid', borderColor: 'yellow'}}
                   id="demo-positioned-button"
                   aria-controls={open ? 'demo-positioned-button' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} style={{color: '#FDF6EA', height: 30}}/> */}
                    {/* <MenuIcon sx={{color: 'rgb(224, 222, 222)', height: '100%'}}></MenuIcon> */}
                    {/* display: {xs: 'block', sm: 'none'} */}
                {/* </Button> */}


        
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}>
                        
                    <MenuItem component={HashLink} to='#home' onClick={handleClose}>Home</MenuItem>
                    <MenuItem component={HashLink} to='#about' onClick={handleClose}>About Us</MenuItem>
                    <MenuItem component={HashLink} to='#products' onClick={handleClose}>Products</MenuItem>
                    <MenuItem component={HashLink} to='#contact' onClick={handleClose}>Contact Us</MenuItem>
                </Menu>


             




                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', width: '100%', border: 'solid', borderColor: 'pink'}}>       
                    <LinkStyle className='menu-link' to='home' smooth='true' duration={500} spy={true} exact='true' offset={-100} activeClass='active'
                        component={Scroll}  sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Home
                    </LinkStyle>

                    <LinkStyle to='about' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll}  sx={{ display: {xs: 'none', sm: 'block'}}}>
                        About Us
                    </LinkStyle>

                    <LinkStyle to='products' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Products
                    </LinkStyle>

                    <LinkStyle to='contact' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Contact Us
                    </LinkStyle>
                </Box>     
                </Toolbar>
            
          
            </Navbar>


       

  );
}

export default NavBar;
