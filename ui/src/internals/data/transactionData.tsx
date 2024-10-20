import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { GridCellParams, GridRowsProp, GridColDef } from '@mui/x-data-grid';



function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderStatus(status: 'filled' | 'cancelled') {
  const colors: { [index: string]: 'success' | 'default' } = {
    Online: 'success',
    Offline: 'default',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>,
) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  { field: 'symbol', headerName: 'Symbol', flex: 1.5, minWidth: 200 },

  {
    field: 'side',
    headerName: 'Side',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'count',
    headerName: 'Count',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.value as any),
  },
  {
    field: 'timePlaced',
    headerName: 'Time Place',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'timeFilled',
    headerName: 'Time Filled',
    flex: 1,
    minWidth: 100,
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    symbol: 'SYP',
    side: 'sell',
    count: 20,
    price:1000,
    status: 'cancelled',
    timePlaced: '9/17/2024 14:02:33 EST',
    timeFilled: '9/17/2024 14:04:33 EST',
  },
  {
    id: 2,
    symbol: 'QQQ',
    side: 'buy',
    count: 2,
    price: 1000,
    status: 'filled',
    timePlaced: '9/17/2024 14:02:33 EST',
    timeFilled: '9/17/2024 14:03:33 EST',
  },
  {
    id: 1,
    symbol: 'SYP',
    side: 'sell',
    count: 20,
    price:1000,
    status: 'cancelled',
    timePlaced: '9/17/2024 14:02:33 EST',
    timeFilled: '9/17/2024 14:04:33 EST',
  },
  {
    id: 2,
    symbol: 'QQQ',
    side: 'buy',
    count: 2,
    price: 1000,
    status: 'filled',
    timePlaced: '9/17/2024 14:02:33 EST',
    timeFilled: '9/17/2024 14:03:33 EST',
  },

];
