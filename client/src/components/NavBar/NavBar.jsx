import { IconProductsSVG } from '../../assets/svg_react/icons/IconProductsSVG';
import { IconHistorySVG } from '../../assets/svg_react/icons/IconHistorySVG';
import { IconScanSVG } from '../../assets/svg_react/icons/IconScanSVG';
import { acquireCameraPermissions } from '../../lib/barcodeScanner';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import * as React from 'react';
import './NavBar.scss';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto'
});

async function openScanPage(navigate) {
  const hasPermissions = await acquireCameraPermissions();
  if (hasPermissions) navigate('/scan');
}

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ backgroundColor: 'transparent', top: 'auto', bottom: 0 }}
        elevation={0}
        className='footer'
      >
        <Toolbar>
          <IconButton color='inherit' onClick={() => navigate('/products')}>
            <SvgIcon>
              <IconProductsSVG />
            </SvgIcon>
          </IconButton>

          <StyledFab color='primary' onClick={() => openScanPage(navigate)}>
            <SvgIcon>
              <IconScanSVG />
            </SvgIcon>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton color='inherit' onClick={() => navigate('/history')}>
            <SvgIcon>
              <IconHistorySVG />
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export { Navigation };
