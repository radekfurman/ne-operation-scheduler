import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../../../store/reducers/root';
import { Status } from '../../../store/scheduleTypes';
import { WizardStepType } from '../../../store/wizardNavigationTypes';
import { NetworkElementView } from '../../Views/NetworkElement/NetworkElementView';
import { OperationsView } from '../../Views/OperationType/OperationView';
import { SummaryView } from '../../Views/Summary/SummaryView';
import { WizardView } from './WizardView';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('WizardView', () => {
    let store: any;
    const state: Partial<RootState> = {
        wizardNavigation: { activeStep: WizardStepType.NetworkElement },
        networkElements: { selectedIds: [], searchText: '' },
        operationView: {
            selectedOperation: undefined,
        },
        scheduleRequest: { status: Status.init, networkElements: [], error: undefined },
    };
    it('should render NetworkElementView if it is activeStep', () => {
        store = mockStore(state);
        const wrapper = mount(
            <Provider store={store}>
                <WizardView />
            </Provider>,
        );
        expect(wrapper.find(NetworkElementView)).toHaveLength(1);
    });

    it('should render OperationsView if it is activeStep', () => {
        (state as RootState).wizardNavigation.activeStep = WizardStepType.OperationType;
        store = mockStore(state);
        const wrapper = mount(
            <Provider store={store}>
                <WizardView />
            </Provider>,
        );
        expect(wrapper.find(OperationsView)).toHaveLength(1);
    });

    it('should render SummaryView if it is activeStep', () => {
        (state as RootState).wizardNavigation.activeStep = WizardStepType.Summary;
        store = mockStore(state);
        const wrapper = mount(
            <Provider store={store}>
                <WizardView />
            </Provider>,
        );
        expect(wrapper.find(SummaryView)).toHaveLength(1);
    });
});
