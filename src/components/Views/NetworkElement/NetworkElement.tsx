import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import React from 'react';
import { networksElementTestData } from './networkElementsData';

const useStyles = makeStyles({
    root: {}

  });

export const NetworkElement: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    return (
        <TableContainer>
            <Table className={classes.root} aria-label='simple table' stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>IP Address</TableCell>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='left'>DN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {networksElementTestData.map((networkElement) => (
                        <TableRow key={networkElement.id}>
                            <TableCell component='th' scope='row'>
                                {networkElement.ipAddress}
                            </TableCell>
                            <TableCell align='left'>{networkElement.type}</TableCell>
                            <TableCell align='left'>{networkElement.distName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
