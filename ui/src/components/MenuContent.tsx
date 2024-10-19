import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const mainListItems = [
  { text: 'Home', path:'/home', icon: <HomeRoundedIcon /> },
  { text: 'Trade', path:'/trade', icon: <CandlestickChartIcon /> },
  { text: 'Transaction', path:'/transactions', icon: <AnalyticsRoundedIcon /> },
  { text: 'Account', path:'/account', icon: <PeopleRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Settings', path:'/settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', path:'/about', icon: <InfoRoundedIcon /> },
  { text: 'Feedback',path:'/feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleListItemClick = (event: React.FormEvent, index:number, path:string) => {
        setSelectedIndex(index);
        navigate(path);
    };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === selectedIndex}
                            onClick={(event) => handleListItemClick(event, index, item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event) => {
                navigate(item.path)
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
