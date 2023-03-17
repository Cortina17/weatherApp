import { Button, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './History.module.css';
import { capitalizeFirstLetter } from '../actions/capitalizeFirstLetterAction';

const History = ({ filas }) => {

    if (filas.length > 5) {
        filas.splice(0, filas.length - 5);
    }

    return (
        <Card className={classes.card}>
            <h3>Locations History</h3>
            <p>and weather for today</p>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className={classes.rowHeader}>
                            <TableRow>
                                <TableCell><h4>City</h4></TableCell>
                                <TableCell align="center"><h4>Temperature</h4></TableCell>
                                <TableCell align="center"><h4>Description</h4></TableCell>
                                <TableCell align="center"><h4>5-day Forecast</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filas.map((row) => (
                                <TableRow
                                    key={row.cityName}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.cityName}</TableCell>
                                    <TableCell align="center">{row.temp}</TableCell>
                                    <TableCell align="center">{capitalizeFirstLetter(row.description)}</TableCell>
                                    <TableCell align="center">
                                        <Link to={`/detail/${row.cityName}`}>
                                            <Button
                                                size='small'
                                                variant="contained"
                                                endIcon={<TravelExploreOutlinedIcon />}
                                                sx={{
                                                    '&:hover': { textDecoration: 'none' }
                                                }}
                                            >
                                                View
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )).reverse()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Card >
    );
}

const mapStateToProps = (state) => {
    return (
        {
            filas: state.searchHistory
        }
    );
}

export default connect(mapStateToProps)(History);
