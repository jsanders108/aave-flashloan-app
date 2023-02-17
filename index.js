let account
const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"})
        account = accounts[0]
        document.getElementById("metamask-connection-message").innerHTML = `User Account: ${account}`
    }
}

const connectContract = async () => {
    const ABI = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_addressProvider",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "ADDRESSES_PROVIDER",
          "outputs": [
            {
              "internalType": "contract IPoolAddressesProvider",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "POOL",
          "outputs": [
            {
              "internalType": "contract IPool",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "premium",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "params",
              "type": "bytes"
            }
          ],
          "name": "executeOperation",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "requestFlashLoan",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]; 
    const Address = "0xD32aFE08Fb57e8B4F21897386Fba3E654B5f6d41"
    window.web3 = await new Web3(window.ethereum)
    window.contract = await new window.web3.eth.Contract(ABI, Address)
    document.getElementById("contract-connection-message").innerHTML = "Connected to Contract"

    const amountUSDC = await window.contract.methods.getBalance("0x65afadd39029741b3b8f0756952c74678c9cec93").call({from: account});
    const convertedUSDC = amountUSDC / 10**6
    document.getElementById("USDC-balance").innerHTML = `Your balance: ${convertedUSDC} USDC`; 
}


const requestLoan = async () => {
    const amount = document.getElementById("flashloan-amount").value
    adjustedAmount = amount * 10**6
    await window.contract.methods.requestFlashLoan("0x65afadd39029741b3b8f0756952c74678c9cec93", adjustedAmount).send({from: account});
}

const withdrawUSDC = async () => {
    const amount = document.getElementById("withdrawal-amount").value
    adjustedAmount = amount * 10**6
    console.log(adjustedAmount)
    await window.contract.methods.withdraw("0x65afadd39029741b3b8f0756952c74678c9cec93", adjustedAmount).send({from: account});
}


