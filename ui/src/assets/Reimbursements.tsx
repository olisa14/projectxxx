import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../internals/data/payoutData';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';

export default function Reimbursements() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Reimbursements
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                <DataGrid
                    autoHeight
                    checkboxSelection
                    rows={rows}
                    columns={columns}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                    initialState={{
                        pagination: { paginationModel: { pageSize: 20 } },
                    }}
                    pageSizeOptions={[10, 20, 50]}
                    disableColumnResize
                    density="compact"
                    slotProps={{
                        filterPanel: {
                            filterFormProps: {
                                logicOperatorInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                },
                                columnInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                    sx: { mt: 'auto' },
                                },
                                operatorInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                    sx: { mt: 'auto' },
                                },
                                valueInputProps: {
                                    InputComponentProps: {
                                        variant: 'outlined',
                                        size: 'small',
                                    },
                                },
                            },
                        },
                    }}
                />
            </Grid>
        </Box>


    );
}
