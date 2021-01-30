export enum OperationType {
    Update = 1,
    Downgrade = 2,
}

export interface OperationData {
    type: OperationType
    title: string;
    description: string;
}

export const operations: OperationData[] = [
    {
        type: OperationType.Update,
        title: 'Update Software',
        description: 'SW upgrade on NE to the latest version'
    },
    {
        type: OperationType.Downgrade,
        title: 'Downgrade Software',
        description: 'SW downgrade to the previous one'
    }
]