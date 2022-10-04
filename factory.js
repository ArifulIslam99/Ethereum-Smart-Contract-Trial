import web3 from "./web3";

import campaignFactory from "./build/ campaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    "0x8C6A864C0D1D029438890178881028A6d127934B"

);

export default instance;