This is a full-stack Solidity app which connects to a flas ERC20 smart contract which uses an interface to access multiple Chainlink oracle price feeds. Visitors to the page can connect to the smart contract (via Metamask) to view current prices for Bitcoin, Ethereum, Chainlink, Synthetix, and Gold.

The app has multiple components. First, I created a Solidity ERC20 smart contract, which I then compiled and deployed to the Goerli Ethereum Testnet using Hardhat and Visual Studio Code. The smart contract accesses Chainlink price feeds via an interface (AggregatorV3Interface). Next, I connected the React files to the Solidity smart contract on Goerli via Web3.js.

To use the app, one needs to install Metamask to their browser and connect it to the Goerli Ethereum testnet.

The smart contract can be viewed on the Goerli Testnet Explorer at the following website: https://goerli.etherscan.io/address/0x7b3691382b60F0Fe7E83dfE104c4B59f9D1d5366

The app can be accessed at the following website: https://chainlink-pricefeeds.netlify.app/
