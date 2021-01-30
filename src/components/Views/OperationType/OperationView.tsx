import { Card, CardContent, makeStyles, Typography, useTheme } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOperation } from '../../../store/actions/operationView';
import { RootState } from '../../../store/reducers/root';
import { operations, OperationType } from './operationsData';
import './OperationView.css';

export const OperationsView: React.FunctionComponent<{}> = () => {
    const dispatch = useDispatch();
    const selectedOperation = useSelector((state: RootState) => {
        return state.operationView.selectedOperation;
    });

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            width: '80%',
        },
        content: {},
        description: {
            marginBottom: 12,
            color: 'black'
        },
        title: {
        },
        cardAction: {
            width: '100%',
            height: '100%',
            justifyContent: 'left',
            textTransform: 'none',
            '&.Mui-selected': {
                color: 'black',
                backgroundColor: theme.palette.action.selected,
            },
            '&.Mui-disabled': {
                backgroundColor: theme.palette.secondary.light,
                opacity: 0.6,
            },
            '&:hover': { background: theme.palette.action.hover },
        },
    });
    const classes = useStyles();

    const isOperationDisabled = (opType: OperationType): boolean => {
        return opType === OperationType.Downgrade;
    };
    const isOperationSelected = (opType: OperationType) => {
        return selectedOperation === opType;
    };
    const handleOperationClick = (opType: OperationType) => {
        if (!selectedOperation || selectedOperation !== opType) {
            dispatch(setOperation(opType));
        } else {
            dispatch(setOperation(undefined));
        }
    };

    return (
        <div className='OperationView'>
            {operations.map((operation) => (
                <Card key={operation.type} className={classes.root} variant='outlined'>
                    <ToggleButton
                        className={classes.cardAction}
                        onClick={() => handleOperationClick(operation.type)}
                        disabled={isOperationDisabled(operation.type)}
                        selected={isOperationSelected(operation.type)}
                        value={isOperationSelected(operation.type)}
                    >
                        <CardContent className={classes.content}>
                            <Typography
                                className={classes.title}
                                color='textSecondary'
                                gutterBottom
                                align='left'
                                variant='h5'
                                component='h5'
                            >
                                {operation.title}
                            </Typography>
                            <Typography
                                className={classes.description}
                                variant='body1'
                                component='p'
                                align='left'
                            >
                                {operation.description}
                            </Typography>
                        </CardContent>
                    </ToggleButton>
                </Card>
            ))}
        </div>
    );
};
