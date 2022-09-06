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
import './HomePage.scss';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function Home(props) {
    return (
      <SvgIcon {...props}>
       <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.22 108.07">
  
  <path className="cls-1" d="M360 308.31a19.89 19.89 0 0 1 2.25-2.33q27.9-20.48 55.83-40.89c2.07-1.51 3-1.51 5.1 0l56.21 41.15c2.31 1.69 2.45 4.37.29 5.64-1.42.83-2.69.44-3.94-.47q-9.37-6.92-18.79-13.78-17.7-13-35.39-25.95a1.34 1.34 0 0 0-1.92 0q-26.94 19.77-53.91 39.5c-2.52 1.84-4.29 1.45-5.73-1.26Z" transform="translate(-360.04 -263.96)"/>
  <path className="cls-1" d="M379.7 365.76h23.79c1.08 0 1.4-.28 1.39-1.38q-.06-12.84 0-25.68a15.71 15.71 0 0 1 31.37-1.56c.29 4.84.11 9.71.12 14.56v12.9c0 .73.08 1.15 1 1.15h23.44a5.44 5.44 0 0 0 .77-.11v-49.48c0-2.3 1.26-3.71 3.24-3.67a3 3 0 0 1 3 2.56 9.75 9.75 0 0 1 .09 1.53v52.31a3.1 3.1 0 0 1-3.31 3.13h-31.15c-2.15 0-3.34-1.29-3.34-3.56v-29.83a9.45 9.45 0 1 0-18.9-.14v30.19a3.11 3.11 0 0 1-3.32 3.34h-31.15a3.09 3.09 0 0 1-3.32-3.1v-52.19a11.12 11.12 0 0 1 .07-1.53 3 3 0 0 1 3.21-2.69 3.08 3.08 0 0 1 3 2.92v50.31Z" transform="translate(-360.04 -263.96)"/>
</svg>

       </SvgIcon>
    );
  }

  function Stats(props) {
    return (
      <SvgIcon {...props}>
       <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 237.43 142.52"
    {...props}
  >
    <path
      d="M519 298.67c-1 1.61-1.78 3.48-3.15 4.76a9.54 9.54 0 0 1-10.49 2c-4-1.53-6.16-4.46-6.25-8.51-.15-6.85-.06-13.7-.06-20.55v-32.64c-.94.85-1.57 1.39-2.16 2q-41.77 40-83.52 80.08c-3.12 3-6.66 4.82-11 3.3a13.75 13.75 0 0 1-5.64-3.94c-9.4-11.22-18.62-22.58-27.89-33.89-.53-.64-1.06-1.26-1.78-2.11-.66.56-1.28 1.05-1.86 1.58l-66 59.54c-4.39 4-9.89 4.36-14 1.1a9 9 0 0 1-1.5-13.06 19.35 19.35 0 0 1 2.06-2.09l74.41-67.15c5.82-5.24 11.89-4.8 16.83 1.23l27.82 33.94c.38.46.78.91.64.76l79.75-74.74c-1.59-.07-2.4-.14-3.21-.14h-51.7c-6.73 0-11.22-4.12-11-9.95a9.63 9.63 0 0 1 9.1-9c1-.06 2-.06 3-.06 25 0 49.93.09 74.89-.06 6.2 0 10.65 1.81 12.71 7.65Z"
      transform="translate(-281.57 -211.02)"
      style={{
        fill: "#35655b",
      }}
    />
  </svg>
       </SvgIcon>
    );
  }


  function Products(props) {
    return (
      <SvgIcon {...props}>
       <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 164.7 164.69"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#346559;}"}</style>
    </defs>
    <path
      className="cls-1"
      d="M363.34,277.79c.84-3.21,1.8-6.36,3.91-9,3.85-4.88,8.86-7.65,15.07-7.66q63.36-.09,126.72,0a19.22,19.22,0,0,1,19,19c.06,6.06,0,12.12,0,18.17,0,4.92-1.58,6.91-6.43,8v3.17q0,10.93,0,21.87c0,4.07-2.68,6.95-6.41,7s-6.45-2.87-6.45-6.91q0-11.65,0-23.32v-1.83H382.64V399c0,8.5,5.36,13.89,13.82,13.89q19.79,0,39.56,0c5,0,8.16,4.7,6.18,9.09a7.42,7.42,0,0,1-4.56,3.77h-45a2.81,2.81,0,0,0-.56-.26c-13.56-2.3-22.27-12.57-22.27-26.29q0-45.58,0-91.17v-1.88c-3.47-.3-5.41-2.2-6.44-5.2Zm12.89,15.32H515.16V281.59c0-5.25-2.41-7.66-7.65-7.66H383.85c-.54,0-1.08,0-1.61,0a6.29,6.29,0,0,0-6,5.88C376.13,284.22,376.23,288.61,376.23,293.11Z"
      transform="translate(-363.34 -261.06)"
    />
    <path
      className="cls-1"
      d="M441.81,382a43.42,43.42,0,0,1,45.94-43.28,51.11,51.11,0,0,1,8.85,1.48,6.22,6.22,0,0,1,4.79,7.82,6.36,6.36,0,0,1-8,4.55c-11.56-2.79-21.81-.28-30.07,8.3-8.58,8.93-11,19.72-6.8,31.36s12.67,18.43,24.9,20.05c16,2.12,30.45-8.38,33.76-24.24.83-3.95,4.1-6.32,7.67-5.55s5.73,4.1,4.94,8.05a43.4,43.4,0,0,1-86-8.54Z"
      transform="translate(-363.34 -261.06)"
    />
    <path
      className="cls-1"
      d="M485.68,383.4c6.94-7.19,13.67-14.18,20.43-21.14,1.9-2,3.86-3.87,5.82-5.77,2.84-2.77,6.72-2.87,9.34-.27a6.38,6.38,0,0,1-.22,9.33Q507.19,379.34,493.27,393a11.16,11.16,0,0,1-16.14-.07c-3.07-3-6.09-6-9.1-9.09-2.75-2.8-2.81-6.75-.2-9.34s6.51-2.49,9.34.29C479.83,377.46,482.45,380.14,485.68,383.4Z"
      transform="translate(-363.34 -261.06)"
    />
    <path
      className="cls-1"
      d="M445.31,331.83c-4.66,0-9.32,0-14,0-4,0-6.9-2.74-6.87-6.48s2.89-6.37,6.82-6.37q14.06,0,28.11,0c4,0,6.9,2.74,6.87,6.47s-2.88,6.37-6.82,6.38C454.73,331.84,450,331.83,445.31,331.83Z"
      transform="translate(-363.34 -261.06)"
    />
  </svg>
       </SvgIcon>
    );
  }


  function Scan(props) {
    return (
      <SvgIcon {...props}>
       <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 156.16 140.7"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#34665a;}"}</style>
    </defs>
    <path
      className="cls-1"
      d="M410.84,303.81H340.36a13.72,13.72,0,0,1-3.27-.25,6,6,0,0,1-4.26-6.28,5.83,5.83,0,0,1,5.08-5.4,17.84,17.84,0,0,1,2.19-.1H481.6a11.55,11.55,0,0,1,3.43.38,6,6,0,0,1-1.34,11.56,24.33,24.33,0,0,1-2.56.08Z"
      transform="translate(-332.82 -227.44)"
    />
    <path
      className="cls-1"
      d="M481,256.61c0,2.87,0,5.73,0,8.6-.06,3.82-2.56,6.48-6,6.47s-5.93-2.68-6-6.5c0-4.88,0-9.76,0-14.64,0-6.94-4.11-11-11.05-11-5,0-10,0-15,0a6,6,0,0,1-1.34-11.88,7.91,7.91,0,0,1,1.82-.16c5.24,0,10.49,0,15.73,0a22,22,0,0,1,21.74,20.72c.16,2.8,0,5.61,0,8.42Z"
      transform="translate(-332.82 -227.44)"
    />
    <path
      className="cls-1"
      d="M370,367.8c-3.59,0-7.24.39-10.77-.08a21.52,21.52,0,0,1-18.35-20.07c-.28-5.9-.16-11.83-.09-17.74a6,6,0,1,1,11.92.2c.06,4.94,0,9.88,0,14.82,0,7.06,4.08,11.11,11.14,11.11,4.7,0,9.4,0,14.09,0,4.08,0,6.83,2.43,6.86,6s-2.73,6.06-6.77,6.07h-8Z"
      transform="translate(-332.82 -227.44)"
    />
    <path
      className="cls-1"
      d="M481.34,339.11c-.38,4.24-.29,8.58-1.25,12.68a21.52,21.52,0,0,1-20.68,16.31c-5.37.06-10.74,0-16.11,0a6,6,0,1,1,0-12.06c5.06,0,10.12,0,15.18,0,6.23,0,10.46-4.15,10.56-10.4.08-5.37,0-10.74.07-16.11a5.75,5.75,0,0,1,5.12-5.55,5.84,5.84,0,0,1,6.37,3.82,9.42,9.42,0,0,1,.41,2.86c0,2.81,0,5.62,0,8.42Z"
      transform="translate(-332.82 -227.44)"
    />
    <path
      className="cls-1"
      d="M340.59,256.39c.22-3.77.07-7.61.74-11.29a21.75,21.75,0,0,1,21.14-17.63c5.37-.05,10.74,0,16.1,0a6,6,0,1,1,.05,12.05c-5.06,0-10.13,0-15.19,0-6.36,0-10.57,4.13-10.65,10.48-.06,5.31,0,10.62-.06,15.93a5.93,5.93,0,0,1-11.15,2.56,8.56,8.56,0,0,1-.74-3.33c-.1-2.92,0-5.85,0-8.78Z"
      transform="translate(-332.82 -227.44)"
    />
  </svg>
       </SvgIcon>
    );
  }




  function Profile(props) {
    return (
      <SvgIcon {...props}>
       <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 138.49 148.67"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#35665b;}"}</style>
    </defs>
    <path
      className="cls-1"
      d="M432.07,223.47c3.1.71,6.3,1.11,9.26,2.19,11.79,4.28,19.38,12.67,22.25,24.78,3.54,15-.15,28.27-11.18,39.22a33.55,33.55,0,0,1-44.5,2.16c-11.87-9.74-16.47-22.49-14.48-37.55,1.51-11.41,7.36-20.19,17.33-26.07a34.46,34.46,0,0,1,13.53-4.44c.47-.06.94-.19,1.4-.29Zm-28.34,36.25c.17,8.73,2.86,16,8.81,21.86a22.89,22.89,0,0,0,31.1,1.35c8.42-7.19,11.58-16.54,9.92-27.32-3-19.3-23.35-26.18-37.71-17.82C407.37,242.73,404,250.68,403.73,259.72Z"
      transform="translate(-359.63 -223.47)"
    />
    <path
      className="cls-1"
      d="M428.93,372.14H366.21c-4.67,0-6.67-2.13-6.58-6.78a66.19,66.19,0,0,1,4.69-24.49c5.17-12.4,14.17-21,26.29-26.54,8.74-4,18-5.81,27.49-6.63a122.94,122.94,0,0,1,26.64.54c11.4,1.5,22.22,4.69,31.74,11.42,10.89,7.69,17.39,18.27,20,31.21A122.89,122.89,0,0,1,498.1,366c.28,3.86-2.11,6.15-6,6.15ZM487,361.23a50.23,50.23,0,0,0-2.71-13.78A37.71,37.71,0,0,0,473.36,331c-7.5-6.53-16.48-9.72-26.09-11.41a110.91,110.91,0,0,0-27.18-1.16c-8.44.59-16.68,2.09-24.47,5.52a40.58,40.58,0,0,0-16.2,12.35c-4.67,6.07-7.06,13-8.25,20.48-.23,1.45-.3,2.93-.45,4.47Z"
      transform="translate(-359.63 -223.47)"
    />
  </svg>
       </SvgIcon>
    );
  }



  



const HomePage = () => {
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
          <StyledFab aria-label="add" color="primary" >
            <Scan />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Stats />
          </IconButton>
          <IconButton color="inherit">
            <Profile />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export {HomePage};