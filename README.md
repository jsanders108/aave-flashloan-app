This is a full-stack Solidity app which connects to a smart contract which requests USDC flash loans from Aave. The app is essentially a custom-built interface to interact with the smart contract. 

The app has multiple components. First, I created a Solidity smart contract, which I then compiled and deployed to the Goerli Ethereum Testnet using Hardhat and Visual Studio Code. When called, the contract requests a USDC flash loan from Aave (via an Aave provider pool address). Note that USDC has been sent to the smart contract via Metamask to pay for the necessary fees. This USDC can be withdrawn out of the smart contract via the interface. 

Currently, use of this app is restricted to "onlyOwner", which is the address used to deploy the contract. In other words, if anyone else tries to request a flash loan via the app it won't work. Future iterations could include removing this restriction. 

The smart contract can be viewed on the Goerli Testnet Explorer at the following website: 
https://goerli.etherscan.io/address/0xD32aFE08Fb57e8B4F21897386Fba3E654B5f6d41

The app can be accessed at the following website: https://aave-flashloan-app.netlify.app/

An example of a successfully executed flash loan can be viewed at the following website: 
https://goerli.etherscan.io/tx/0x825f1634d3ac92508f9b93b01164dc2036d9675fcd680d193c23e42cf4d53157
