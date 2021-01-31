import { NetworkElement } from "../components/Views/NetworkElement/networkElementsData";

export enum Status {
    init = 'INIT',
    ongoing = 'ONGOING',
    success = 'SUCCESS',
    fail = 'FAIL',
}

export interface ScheduleState {
    status: Status,
    networkElements: NetworkElement[]
    error: string | undefined
}

export const SCHEDULE = 'SCHEDULE';
export const SCHEDULE_STARTED = 'SCHEDULE_STARTED';
export const SCHEDULE_SUCCEEDED = 'SCHEDULE_SUCCEEDED';
export const SCHEDULE_FAILED = 'SCHEDULE_FAILED';
export const CLEAR_SCHEDULE_STATUS = 'CLEAR_SCHEDULE_STATUS';

interface ScheduleStartedAction {
    type: typeof SCHEDULE_STARTED;
}

interface ScheduleSucceededAction {
    type: typeof SCHEDULE_SUCCEEDED;
}

interface ScheduleFailedAction {
    type: typeof SCHEDULE_FAILED;
    error: string
}

interface ClearScheduleStatusAction {
    type: typeof CLEAR_SCHEDULE_STATUS;
}


export type ScheduleActionTypes = ScheduleStartedAction | ScheduleSucceededAction | ScheduleFailedAction | ClearScheduleStatusAction;