import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should render ExpenseDashboard', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});