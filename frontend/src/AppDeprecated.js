import React, { useEffect, useState } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import WalletPage from './pages/WalletPage';
import './App.css';

// import {
//   Program, 
//   Provider, 
//   // AnchorProvider,
//   web3
// } from '@project-serum/anchor';
// import { Connection, PublicKey } from '@solana/web3.js';

import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import idl from './idl.json';

// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;



// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;

// Create a keypair for the account that will hold the GIF data.
let baseAccount = Keypair.generate();

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
// const network = clusterApiUrl('devnet');
const network = "http://127.0.0.1:8899";

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}


const App = () => {
  /*
   * This function holds the logic for deciding if a Phantom Wallet is
   * connected or not
   */
  // State
  const [walletAddress, setWalletAddress] = useState(null);
  const [value, setValue] = useState(null);
  const [counter, setCounter] = useState(null);


  // // second set:
  // const wallet = useWallet()
  // console.log("wallet object: ", wallet)
  // const connection = new Connection('http://127.0.0.1:8899')
  // console.log("wallet.value:", wallet.value)

  // // const provider2 = computed(() => new AnchorProvider(connection, wallet.value, { preflightCommitment, commitment }))
  // const provider2 = computed(() => new AnchorProvider(connection, wallet.value, opts))
  // // const provider = computed(() => new AnchorProvider(connection, wallet, anchor.Provider.defaultOptions()))
  // // anchor.Provider.defaultOptions()
  // const program = computed(() => new Program(idl, programID, provider.value))
  // const program2 = computed(() => new Program(idl, programID, provider2.value))
  // console.log("this is the anchor program that is not working because of anchor provider:", program)


  // // second set:


  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
      connection, window.solana, opts.preflightCommitment,
    );
    // const provider = new AnchorProvider(
    //   connection, window.solana, opts.preflightCommitment,
    // );
    return provider;
  }

  async function createCounter() {    
    const provider = await getProvider()
    /* create the program interface combining the idl, program ID, and provider */
    const program = new Program(idl, programID, provider);
    console.log(program);
    try {
      /* interact with the program via rpc */
      await program.rpc.create({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      });

      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      console.log('account: ', account);
      setValue(account.count.toString());
    } catch (err) {
      console.log("Transaction error: ", err);
    }
  }

  async function incrementCounter() {    
    const provider = await getProvider()
    /* create the program interface combining the idl, program ID, and provider */
    const program = new Program(idl, programID, provider);
    console.log(program);
    try {
      /* interact with the program via rpc */
      await program.rpc.create({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      });

      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      console.log('account: ', account);
      setValue(account.count.toString());
    } catch (err) {
      console.log("Transaction error: ", err);
    }
  }

  async function increment() {
    console.log("increment function started")
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);
    await program.rpc.increment({
      accounts: {
        baseAccount: baseAccount.publicKey
      }
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('account: ', account);
    setValue(account.count.toString());
  }


const checkIfWalletIsConnected = async () => {
  try {
    const { solana } = window;

    if (solana) {
      if (solana.isPhantom) {
        console.log('Phantom wallet found!');
        /*
          * The solana object gives us a function that will allow us to connect
          * directly with the user's wallet!
        */
        const response = await solana.connect({ onlyIfTrusted: true });
        
        console.log(
          'Connected with Public Key:',
          response.publicKey.toString()
        );
        setWalletAddress(response.publicKey.toString());


      }
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  } catch (error) {
    console.error(error);
  }
};


  /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

/*
 * When our component first mounts, let's check to see if we have a connected
 * Phantom Wallet
 */
useEffect(() => {
  const onLoad = async () => {
    await checkIfWalletIsConnected();
  };
  window.addEventListener('load', onLoad);
  return () => window.removeEventListener('load', onLoad);
}, []);


return (
  <div className="App">
    <WalletPage></WalletPage>
  </div>
);
};
export default App;
