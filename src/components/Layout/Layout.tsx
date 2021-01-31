import React from 'react';
import './Layout.css';
import { Topbar } from './Topbar/Topbar';
import { WizardNavigation } from './WizardNavigation/WizardNavigation';
import { WizardView } from './WizardView/WizardView';

interface LayoutProps {}

export const Layout: React.FunctionComponent<LayoutProps> = () => {
    return (
        <div className='Layout'>
            <Topbar></Topbar>
            <WizardNavigation></WizardNavigation>
            <WizardView></WizardView>
        </div>
    );
};
