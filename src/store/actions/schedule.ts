import { AxiosError } from "axios";
import { NetworkElement } from "../../components/Views/NetworkElement/networkElementsData";
import { CLEAR_SCHEDULE_STATUS, ScheduleActionTypes, SCHEDULE_FAILED, SCHEDULE_STARTED, SCHEDULE_SUCCEEDED } from "../scheduleTypes";
import axios from '../../axios-config'
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/root";
import { Action } from "redux";
import { OperationType } from "../../components/Views/OperationType/operationsData";

export const schedule = (networkElements: NetworkElement[], operation: OperationType): ThunkAction<void, RootState, unknown, Action<string>> => {
    return dispatch => {
        dispatch( scheduleStarted() );
        axios
            .post('/networkElements.json', {
                networkElements,
                operation
            })
            .then((response) => {
                console.log(response.data);
                dispatch(scheduleSucceeded());
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                dispatch(scheduleFailed(error.message));
            });
    }
};


export const scheduleStarted = (): ScheduleActionTypes => {
    return {
        type: SCHEDULE_STARTED
    };
};

export const scheduleSucceeded = (): ScheduleActionTypes => {
    return {
        type: SCHEDULE_SUCCEEDED
    };
};

export const scheduleFailed = (error: string): ScheduleActionTypes => {
    return {
        type: SCHEDULE_FAILED,
        error
    };
};

export const clearScheduleStatus = (): ScheduleActionTypes => {
    return {
        type: CLEAR_SCHEDULE_STATUS
    };
};