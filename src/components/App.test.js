import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Wallet from './wallet';

describe('App', () => {
    const app = shallow(<App />);
    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
});
