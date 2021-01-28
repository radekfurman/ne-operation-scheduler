import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/root';
import { WizardStepType } from '../../store/types';
import { NetworkElement } from '../Views/NetworkElement/NetworkElement';
import { OperationType } from '../Views/OperationType/OperationType';
import { Summary } from '../Views/Summary/Summary';
import './Layout.css';
import { Topbar } from './Topbar/Topbar';
import { WizardNavigation } from './WizardNavigation/WizardNavigation';

interface LayoutProps {}

export const Layout: React.FunctionComponent<LayoutProps> = () => {
    const activeStep = useSelector((state: RootState) => {
        return state.wizardNavigation.activeStep;
    });

    const getView = (viewType: WizardStepType): JSX.Element => {
        switch (viewType) {
            case WizardStepType.NetworkElement:
                return <NetworkElement></NetworkElement>;
            case WizardStepType.OperationType:
                return <OperationType></OperationType>;
            case WizardStepType.Summary:
                return <Summary></Summary>;
            default:
                return <div>Empty view</div>;
        }
    };

    return (
        <span className='Layout'>
            <Topbar></Topbar>
            <WizardNavigation></WizardNavigation>
            {getView(activeStep)}
        </span>
    );
};
