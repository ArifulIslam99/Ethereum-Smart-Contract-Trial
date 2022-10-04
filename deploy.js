const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require("./build/ campaignFactory.json");
 
const provider = new HDWalletProvider(
  "pet urge issue april cave light million indoor describe hair daring vanish",
  "https://rinkeby.infura.io/v3/f8874783a3f44024abeaef1bf752a2c3"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  provider.engine.stop();
};
deploy();

// 0x8C6A864C0D1D029438890178881028A6d127934B