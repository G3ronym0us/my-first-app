import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  let enableEthereumButton = useRef(null);
  const [showAccount, setShowAccount] = useState('Undefined');

  const getAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setShowAccount(account);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RealStake
        </p>
        {showAccount.length < 10 ? (
          <button onClick={getAccount} ref={enableEthereumButton} className='btn btn-success'>Enable Ethereum</button>
        ) : null}
        <h2>Account: <span>{ showAccount }</span></h2>        <i className="fas fa-solar-panel    "></i>
      </header>
    </div>
  );
}

export default App;
