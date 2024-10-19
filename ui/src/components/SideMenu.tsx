import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './SelectContent';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import OptionsMenu from './OptionsMenu';
import {AuthUser} from "aws-amplify/auth";
import {useEffect, useState} from "react";
import {logo} from "../img";
import { fetchUserAttributes, FetchUserAttributesOutput } from '@aws-amplify/auth';



const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});
interface NavbarProps{
    onSignOut?: any;
    currentUser: AuthUser;

}
const SideMenu: React.FC<NavbarProps> =({onSignOut,currentUser}) =>{
    const [user, setUser] = useState<FetchUserAttributesOutput>({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const ccurrentUser = await fetchUserAttributes();
                setUser(ccurrentUser);
            } catch (error) {
                console.error('Error fetching authenticated user:', error);
            }
        };

        fetchUser();
    }, []);


  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >

        {/*<SelectContent />*/}
          <Stack
              direction="row"
              sx={{
                  p: 2,
                  gap: 1,
                  alignItems: 'center',
                  borderTop: '1px solid',
                  borderColor: 'divider',
              }}
          >
              <img
                  sizes="small"
                  alt="Anicle Logo"
                  src={logo}
              />
              {/*<Box sx={{ mr: 'auto' }}>*/}
              {/*    <Typography variant="body1" sx={{ fontSize:'1.5em',fontWeight: 600, lineHeight: '24px' }}>*/}
              {/*        Ancile*/}
              {/*    </Typography>*/}
              {/*    <Typography variant="caption" sx={{ color: 'text.secondary' }}>*/}
              {/*        Trade Insurance*/}
              {/*    </Typography>*/}
              {/*</Box>*/}
          </Stack>

      <Divider />
      <MenuContent />
      <CardAlert />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt={currentUser.username}
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
              {currentUser.username}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {user.email}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
export default SideMenu