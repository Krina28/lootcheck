import balanceReducer from './balance';
import balanceReduce2 from './balance';
import * as constants from '../actions/constants';
import balance from './balance';

//We can provide mock functions with jest.fn() 
//to the props interface of a component to check whether or 
//not redux action creators are dispatched.
describe('balanceReducer', () => {
    describe('when initializing ', () => {
        const balance = 10;
        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
                .toEqual(balance);
        });

        describe('then re-initializing ', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReduce2(undefined, {})).toEqual(balance);
            })
        })
    });

    it('deposits into the balance', () => {
        const deposit = 20;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
    })

    it('withdraws from the balance', () => {
        const withdraw = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw }))
            .toEqual(initialState - withdraw);
    })
});
