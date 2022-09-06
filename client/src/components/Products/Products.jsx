import * as React from 'react';
import './Products.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export function Products() {
  return (
    <div className="ProductsList">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem className="oneoflist">
        <ListItemAvatar>
          <Avatar variant="rounded" src="https://www.earda.bg/wp-content/uploads/2022/05/%D0%9C%D0%98%D0%A0%D0%98%D0%9D%D0%94%D0%90-%D0%9D%D0%90%D0%A0-%D0%98-%D0%93%D0%A0%D0%9E%D0%97%D0%94%D0%95-0.5-%D0%9B.jpg" >
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="МИРИНДА НАР И ГРОЗДЕ 0.5 Лhggggggggggggggggggggggggggggggggggggggggggggg" secondary="Jan 9, 2014" 
        primaryTypographyProps={{ style: { textOverflow: "ellipsis" } }}
        />
      </ListItem>
    </List>
    </div>
  );
}
