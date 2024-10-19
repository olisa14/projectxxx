import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import BalanceCard from "../assets/BalanceCard";
import BalanceGraph from "../assets/BalanceGraph";
import BrokageCard, {BrokageCardProps} from "./BrokageCard";
import PolicyIcon from '@mui/icons-material/Policy';
import Button from "@mui/material/Button";
import AddBrokerCard from "../components/AddBrokerCard";


const data: BrokageCardProps[] = [
  {
    name: 'Robinhood',
    dateAdded: 'Added two days ago',
    balance: '$6,900',
    icon: 'up',
  },
  {
    name: 'Webull',
    dateAdded: 'Added two months ago',
    balance: '$5,000',
    icon: 'up',
  },
  {
    name: 'E*Trade',
    dateAdded: 'Added two days ago',
    balance: '$16,200',
    icon: 'up',
  },
];
const balanceData={
  title: 'Users',
  value: '14k',
  trend: 'up',
}

const Home: React.FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Stack
          direction="row"
          sx={{ flexGrow: 50, alignItems: 'center', gap: 1, justifyContent: 'space-between' }}
      >
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Overview
        </Typography>
        <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<PolicyIcon />}
        >
          Buy Coverage
        </Button>
      </Stack>

      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <BalanceCard {...balanceData} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 8 }}>
          <BalanceGraph />
        </Grid>

      </Grid>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Linked Accounts
        </Typography>
        <Grid
            container
            spacing={2}
            columns={12}
            sx={{ mb: (theme) => theme.spacing(2) }}
        >

            {data.map((card, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <BrokageCard {...card} />
                </Grid>
            ))}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <AddBrokerCard/>
          </Grid>
        </Grid>

<br/>
<br/>
      {/*<Copyright sx={{ my: 4 }} />*/}
    </Box>
  );
}
export default Home;