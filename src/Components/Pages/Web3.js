import Web3 from "web3";

const EtherWeb3 = () => {
  let web3 = window.web3;

  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  var value = web3.fromWei("21000000000000", "finney");
  console.log(value);
};

EtherWeb3();

export default EtherWeb3;
