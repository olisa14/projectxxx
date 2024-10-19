import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Button from "@mui/material/Button";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export type BalanceCardProps = {
    title: string;
    value: string;
    trend: string,

};


export default function BalanceCard({
                                     title,
                                     value,
                                    trend,
                                 }: BalanceCardProps) {
    const theme = useTheme();

    const trendColors = {
        up:
            theme.palette.mode === 'light'
                ? theme.palette.success.main
                : theme.palette.success.dark,
        down:
            theme.palette.mode === 'light'
                ? theme.palette.error.main
                : theme.palette.error.dark,
        neutral:
            theme.palette.mode === 'light'
                ? theme.palette.grey[400]
                : theme.palette.grey[700],
    };

    const labelColors = {
        up: 'success' as const,
        down: 'error' as const,
        neutral: 'default' as const,
    };

    const color = labelColors[trend as keyof typeof labelColors];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent
                sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
                <Stack direction="column" sx={{ flexGrow: 1, gap: 1 }}
                >
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Balance
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    sx={{ flexGrow: 50, alignItems: 'center', gap: 1 }} >
                    <Typography
                        component="h2"
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: '600' }}>
                        $12,000.00
                    </Typography>
                    <Chip size="small" color={color} label={trendValues[trend as keyof typeof trendValues]} />
                </Stack>

                <Stack direction="row" sx={{ gap: 1, mt: 'auto' }} >
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        fullWidth
                        startIcon={<AddIcon />}
                    >
                        Add Funds
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        fullWidth
                        startIcon={<ArrowCircleDownIcon />}
                    >
                        Withdraw
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
