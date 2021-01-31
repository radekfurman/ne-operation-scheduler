import {
    CLEAR_SCHEDULE_STATUS,
    ScheduleActionTypes,
    ScheduleState,
    SCHEDULE_FAILED,
    SCHEDULE_STARTED,
    SCHEDULE_SUCCEEDED,
    Status,
} from '../scheduleTypes';

const initialState: ScheduleState = {
    status: Status.init,
    networkElements: [],
    error: undefined
};

const scheduleRequestReducer = (
    state: ScheduleState = initialState,
    action: ScheduleActionTypes,
): ScheduleState => {
    switch (action.type) {
        case SCHEDULE_STARTED:
            return {
                ...state,
                status: Status.ongoing,
            };
        case SCHEDULE_SUCCEEDED:
            return {
                ...state,
                status: Status.success,
            };
        case SCHEDULE_FAILED:
            return {
                ...state,
                status: Status.fail,
                error: action.error
            };
        case CLEAR_SCHEDULE_STATUS:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default scheduleRequestReducer;
