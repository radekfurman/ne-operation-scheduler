import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Layout } from './Layout';
import { Topbar } from './Topbar/Topbar';
import { WizardNavigation } from './WizardNavigation/WizardNavigation';
import { WizardView } from './WizardView/WizardView';

configure({ adapter: new Adapter() });

describe('Layout', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it('should render Topbar', () => {
        expect(wrapper.find(Topbar)).toHaveLength(1);
    });

    it('should render WizardNavigation', () => {
        expect(wrapper.find(WizardNavigation)).toHaveLength(1);
    });

    it('should render WizardView', () => {
        expect(wrapper.find(WizardView)).toHaveLength(1);
    });
});
