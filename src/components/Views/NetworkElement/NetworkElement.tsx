import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deselectNetworkElement,
    selectNetworkElement,
} from '../../../store/actions/networkElements';
import { RootState } from '../../../store/reducers/root';
import { networksElementTestData } from './networkElementsData';

const useStyles = makeStyles({
    root: {},
});

export const NetworkElement: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedIds = useSelector((state: RootState) => {
        return state.networkElements.selectedIds;
    });

    const isSelected = (id: number) => {
        return selectedIds.includes(id);
    };
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        isSelected(id) ? dispatch(deselectNetworkElement(id)) : dispatch(selectNetworkElement(id));
    };

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
                        <TableRow
                            key={networkElement.id}
                            onClick={(event) => handleClick(event, networkElement.id)}
                            selected={isSelected(networkElement.id)}
                        >
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
