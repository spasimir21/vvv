import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import './Footer.scss';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';



  



const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0, backgroundColor: 'transparent' }} elevation={0} className="footer">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <Home />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <Products />
          </IconButton>
          <StyledFab aria-label="add" color="primary">
            <Scan color="secondary" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" >
            <Stats color='primary'/>
          </IconButton>
          <IconButton color="inherit">
            <Profile />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export { Footer };