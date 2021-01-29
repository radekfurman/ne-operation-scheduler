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
    searchNetworkElement,
    selectNetworkElement,
} from '../../../store/actions/networkElements';
import { RootState } from '../../../store/reducers/root';
import { networksElementTestData } from './networkElementsData';
import './NetworkElement.css';
import { SearchInput } from '../../UI/SearchInput';

const useStyles = makeStyles({
    root: {},
});

export const NetworkElement: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedIds = useSelector((state: RootState) => {
        return state.networkElements.selectedIds;
    });
    const searchText = useSelector((state: RootState) => {
        return state.networkElements.searchText;
    });

    const isSelected = (id: number) => {
        return selectedIds.includes(id);
    };
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        isSelected(id) ? dispatch(deselectNetworkElement(id)) : dispatch(selectNetworkElement(id));
    };
    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchNetworkElement(event.target.value));
    };

    const filteredNEs = networksElementTestData.filter((networkElement) => {
        if (searchText === '') return true;

        return `${networkElement.ipAddress}${networkElement.type}${networkElement.distName}`
            .toLowerCase()
            .includes(searchText.toLowerCase());
    })

    return (
        <div className='NetworkElement'>
            <SearchInput
                className='SearchInput'
                value={searchText}
                onChange={handleSearchTextChange}
            ></SearchInput>
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
                        {filteredNEs.map((networkElement) => (
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
        </div>
    );
};
