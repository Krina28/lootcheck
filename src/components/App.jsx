import React from 'react';
import Loot from './Loot';
import Wallet from './wallet';

const App = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr />
            <Wallet />
            <br />
            <Loot />
            <div>
                Powered By <a href="https://www.coindesk.com/price">Coindesk</a>
            </div>
        </div>
    )
}

export default App;
