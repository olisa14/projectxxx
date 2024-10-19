import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from "@mui/material/Stack";

export default function AddBrokerCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <InsightsRoundedIcon />
        <Stack
            direction="column"
            sx={{ flexGrow: 50, alignItems: 'center', gap: 3, justifyContent: 'space-between' }}
        >
          <Typography
              component="h2"
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: '600' }}
          >
            Link your brokerage account
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
            Securely connect your accounts to start insured trading.
          </Typography>
          <Button
              variant="contained"
              size="small"
              color="primary"
              endIcon={<ChevronRightRoundedIcon />}
              fullWidth={isSmallScreen}
          >
            Link account
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
}
