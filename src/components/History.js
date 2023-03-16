import { Button, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './History.module.css';

const History = ({ filas }) => {

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
                                <TableCell align="center"><h4>3-day Forecast</h4></TableCell>
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
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="center">
                                        <Link to={`/detail/${row.cityName}`}>
                                            <Button
                                                size='small'
                                                variant="outlined"
                                                endIcon={<TravelExploreOutlinedIcon />}
                                                className={classes.btn}
                                            >
                                                View
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
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
