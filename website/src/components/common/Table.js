// Table.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function MuiTableJSX({ headers, rows }) {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 230 }} size="small"  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell 
                                key={header}
                                sx={{ 
                                    fontWeight: 'bold', 
                                    fontSize: isMediumScreen ? '0.8rem' : '1.1rem',
                                    backgroundColor: 'rgb(40,34,92)',
                                    color: 'white',
                                    borderBottom: '1px solid black',
                                    width: `${100 / headers.length}%`
                                }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow 
                            key={index}
                            sx={{
                                backgroundColor: index % 2 !== 0 ? 'white' : 'grey.100'
                            }}
                        >
                            {headers.map((header) => (
                                
                                <TableCell 
                                    key={header}
                                >        
                                    {row[header]}
                                </TableCell>
                            ))}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}