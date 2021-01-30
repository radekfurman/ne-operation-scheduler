import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/root';
import { networksElementTestData } from '../NetworkElement/networkElementsData';

interface NetworkElementsSummaryProps {
    className?: string
}

export const NetworkElementsSummary: React.FunctionComponent<NetworkElementsSummaryProps> = (props: NetworkElementsSummaryProps) => {
    const selectedNEIds = useSelector((state: RootState) => {
        return state.networkElements.selectedIds;
    });
    const selectedNEs = networksElementTestData.filter((networkElement) => {
        return selectedNEIds.includes(networkElement.id);
    });
    return (
        <TableContainer className={props.className}>
            <Table aria-label='simple table' stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>IP Address</TableCell>
                        <TableCell align='left'>NE name</TableCell>
                        <TableCell align='left'>Technology</TableCell>
                        <TableCell align='left'>SW Version</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedNEs.map((networkElement) => (
                        <TableRow key={networkElement.id}>
                            <TableCell component='th' scope='row'>
                                {networkElement.ipAddress}
                            </TableCell>
                            <TableCell align='left'>{networkElement.name}</TableCell>
                            <TableCell align='left'>{networkElement.technology}</TableCell>
                            <TableCell align='left'>{networkElement.swVersion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
