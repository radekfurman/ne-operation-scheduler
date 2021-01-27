import React from 'react';
import { Topbar } from './Topbar/Topbar';
import { WizardNavigation } from './WizardNavigation/WizardNavigation';
import { WizardView } from './WizardView/WizardView';
import './Layout.css';

interface LayoutProps {}

export const Layout: React.FunctionComponent<LayoutProps> = () => {
    return (
        <span className="Layout">
            <Topbar></Topbar>
            <WizardNavigation></WizardNavigation>
            <WizardView></WizardView>
        </span>
    );
};
