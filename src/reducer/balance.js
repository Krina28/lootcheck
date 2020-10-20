import { read_cookie, bake_cookie } from 'sfcookies';
import * as constants from '../actions/constants';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
    let balance;

    switch (action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdraw;
            break;
        default:
            return parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }
    bake_cookie(BALANCE_COOKIE, balance);
    return balance;
}

export default balance;