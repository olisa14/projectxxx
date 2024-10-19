import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from "@mui/material/Button";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Avatar from "@mui/material/Avatar";
import OptionsMenu from "../components/OptionsMenu";

export type BrokageCardProps = {
    name: string;
    dateAdded: string;
    balance: string,
    icon: string
};


export default function BrokageCard({
                                        name,
                                        dateAdded,
                                        balance,
                                        icon,
                                    }: BrokageCardProps) {
    const theme = useTheme();


    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', flexGrow: 1, gap: 1 }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            sizes="small"
                            alt={name}
                            src="/static/images/avatar/7.jpg"
                            sx={{ width: 36, height: 36 }}
                        />
                        <Box sx={{ mr: 'auto' }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                                {name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {dateAdded}
                            </Typography>
                        </Box>
                        <ExitToAppIcon />
                    </Stack>
                    <Stack
                        direction="column"
                        sx={{ paddingTop:'10px', alignItems: 'left', gap: 0 }}
                    >
                        <Typography
                            component="h4"
                            variant="h4"
                            sx={{ fontWeight: '600' }}
                        >
                            {balance}
                        </Typography>
                        <Typography
                            variant="caption" sx={{ color: 'text.secondary' }}>
                            Volume traded last month
                        </Typography>
                    </Stack>
                    <br />
                    <Stack
                        direction="row"
                        sx={{ flexGrow: 1,  alignItems: 'center' }}
                    >
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            fullWidth
                            startIcon={<SyncAltIcon />}
                        >
                            Trade
                        </Button>

                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
