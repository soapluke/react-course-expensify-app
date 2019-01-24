import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Loading from '../../components/Loading';

test('should render Loading correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});