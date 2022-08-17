import './App.css';
// import {
//   signer
// } from './waves-blockchain';
import {
  useEffect
} from 'react';

function App() {

  useEffect(() => {
    (async () => {
      const txData = {
        type: 4,
        data: {
          amount: {
            assetId: 'WAVES',
            tokens: '0.5',
          },
          fee: {
            assetId: 'WAVES',
            tokens: '0.001',
          },
          recipient: '3N4boZRUJ2LxY5jLyp6hmxGktqnawQidu6H',
        },
      };
      // eslint-disable-next-line no-undef
      const data = await KeeperWallet.signTransaction(txData)
      console.log(data);
      // const user = await signer.login();
      // console.log(user);
      // const balances = await signer.getBalance();
      // console.log(balances);
      // const result = await signer
      //   .transfer({
      //     amount: 10**4,
      //     recipient: '3N4boZRUJ2LxY5jLyp6hmxGktqnawQidu6H',
      //     assetId: "WAVES",
      //   })
      //   .broadcast();
      //   console.log(result);
      //   .broadcast(); // Promise will resolved after user sign and node response
      //   console.log(broadcastedTransfer);

      // const [signedTransfer] = await signer
      //   .transfer({
      //     amount: 100000000,
      //     recipient: 'alias:T:merry'
      //   }) // Transfer 1 WAVES to alias merry
      //   .sign(); // Promise will resolved after user sign
      //   console.log(signedTransfer);

      // await signer.invoke({
      //   dApp: '3N4boZRUJ2LxY5jLyp6hmxGktqnawQidu6H',
      //   call: { function: 'helloWorld', args: '' },
      // })
      // .sign();
    })()
  }, []);

  return ( <div> </div>
  );
}

export default App;