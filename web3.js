import Web3 from "web3";

let web3;

if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
    // we are in the browser and metamask is running
    window.ethereum.request({method: "eth_requestAccounts"});
    web3 = new Web3(window.ethereum);
}
else{
    // we are on the server or user does not use metamask

    const provider  = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/f8874783a3f44024abeaef1bf752a2c3"
    );

    web3 = new Web3(provider);
}



export default web3;