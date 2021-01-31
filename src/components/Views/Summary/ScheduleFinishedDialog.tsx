import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Status } from '../../../store/scheduleTypes';

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    status: Status;
    error?: string;
}
const useStyles = makeStyles({
    success: {
        backgroundColor: '#F1FEE9',
    },
    fail: {
        backgroundColor: '#FFE1E2',
    },
});

export const ScheduleFinishedDialog: React.FunctionComponent<SimpleDialogProps> = (
    props: SimpleDialogProps,
) => {
    const { onClose, open, status, error } = props;
    const classes = useStyles();
    const getMessage = (): string => {
        return status === Status.success
            ? 'Schedule operation succeded'
            : 'Schedule operation failed due to:';
    };

    return (
        <Dialog
            onClose={onClose}
            aria-labelledby='simple-dialog-title'
            open={open}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            PaperProps={{
                classes: {
                    root: status === Status.success ? classes.success : classes.fail,
                },
            }}
        >
            <DialogTitle id='simple-dialog-title'>Request finished</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>{getMessage()}</DialogContentText>
                {error ? (
                    <DialogContentText id='alert-dialog-description'>{error}</DialogContentText>
                ) : null}
            </DialogContent>

            <DialogActions>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={onClose}
                    disabled={false}
                    autoFocus
                >
                    START OVER
                </Button>
            </DialogActions>
        </Dialog>
    );
};
