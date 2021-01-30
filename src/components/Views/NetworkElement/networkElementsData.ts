export interface NetworkElement {
    id: number;
    ipAddress: string;
    type: string;
    distName: string;
    name: string;
    technology: string;
    swVersion: string;
}

export const networksElementTestData: NetworkElement[] = [
    {
        id: 1,
        ipAddress: '10.10.10.10',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-01',
        name: 'MRBTS_SM_AG',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 2,
        ipAddress: '10.10.10.12',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-02',
        name: 'MRBTS_SM_AG2',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_4212'
    },
    {
        id: 3,
        ipAddress: '10.10.10.13',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-03',
        name: 'MRBTS_SM_AG3',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_4213'
    },
    {
        id: 4,
        ipAddress: '10.10.10.14',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-04',
        name: 'MRBTS_SM_AG4',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_4214'
    },
    {
        id: 5,
        ipAddress: '10.10.10.15',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-05',
        name: 'MRBTS_SM_AG5',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_4215'
    },
    {
        id: 6,
        ipAddress: '10.10.10.16',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-06',
        name: 'MRBTS_SM_AG7',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_4217'
    },
    {
        id: 7,
        ipAddress: '10.10.10.17',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-07',
        name: 'MRBTS_SM_AG8',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_4218'
    },
    {
        id: 8,
        ipAddress: '10.10.10.18',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-08',
        name: 'MRBTS_SM_AG9',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_4219'
    },
    {
        id: 9,
        ipAddress: '10.10.10.19',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-09',
        name: 'MRBTS_SM_AG10',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_42110'
    },
    {
        id: 10,
        ipAddress: '10.10.10.10',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-10',
        name: 'MRBTS_SM_AG11',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_42111'
    },
    {
        id: 11,
        ipAddress: '10.10.10.11',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-11',
        name: 'MRBTS_SM_AG12',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_42121'
    },
    {
        id: 12,
        ipAddress: '10.10.10.12',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-12',
        name: 'MRBTS_SM_AG13',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_42131'
    },
    {
        id: 13,
        ipAddress: '10.10.10.13',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-13',
        name: 'MRBTS_SM_AG14',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_42141'
    },
    {
        id: 14,
        ipAddress: '10.10.10.14',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-14',
        name: 'MRBTS_SM_AG15',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 15,
        ipAddress: '10.10.10.15',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-15',
        name: 'MRBTS_SM_AG16',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_42116'
    },
    {
        id: 16,
        ipAddress: '10.10.10.16',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-16',
        name: 'MRBTS_SM_AG17',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_42171'
    },
    {
        id: 17,
        ipAddress: '10.10.10.17',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-17',
        name: 'MRBTS_SM_AG717',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_427171'
    },
    {
        id: 18,
        ipAddress: '10.10.10.18',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-18',
        name: 'MRBTS_SM_AG24',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 19,
        ipAddress: '10.10.10.19',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-19',
        name: 'MRBTS_SM_AG521',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 20,
        ipAddress: '10.10.10.20',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-20',
        name: 'MRBTS_SM_AG6432',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 21,
        ipAddress: '10.10.10.21',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-21',
        name: 'MRBTS_SM_AG7543',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 22,
        ipAddress: '10.10.10.22',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-22',
        name: 'MRBTS_SM_AG658',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 23,
        ipAddress: '10.10.10.23',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-23',
        name: 'MRBTS_SM_AG35dcvfsx',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 24,
        ipAddress: '10.10.10.24',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-24',
        name: 'MRBTS_SM_AGfdsa',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 25,
        ipAddress: '10.10.10.25',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-25',
        name: 'MRBTS_SM_AGgsad',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 26,
        ipAddress: '10.10.10.26',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-26',
        name: 'MRBTS_SM_AGhahfd',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 27,
        ipAddress: '10.10.10.27',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-27',
        name: 'MRBTS_SM_AGvcxz',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 28,
        ipAddress: '10.10.10.28',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-28',
        name: 'MRBTS_SM_AGnvc',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 29,
        ipAddress: '10.10.10.29',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-29',
        name: 'MRBTS_SM_AGnvcx',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 30,
        ipAddress: '10.10.10.30',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-30',
        name: 'MRBTS_SM_AGfdsa',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 31,
        ipAddress: '10.10.10.34',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-34',
        name: 'MRBTS_SM_AGbvc',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 32,
        ipAddress: '10.10.10.35',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-35',
        name: 'MRBTS_SM_AGdfsa',
        technology: 'eNodeB',
        swVersion: 'SW_00232_2921_421'
    },
    {
        id: 33,
        ipAddress: '10.10.10.36',
        type: 'eNodeB',
        distName: 'PLMN-PLMN/MRBTS-4321/LNBTS-36',
        name: 'MRBTS_SM_AGhafd',
        technology: 'gNodeB',
        swVersion: 'SW_00232_2921_421'
    },
];
