import React, { Component } from "react";
import Web3 from "web3";

const EtherWeb3 = () => {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546", null, {});

  // if (typeof web3 !== "undefined") {
  //   web3 = new Web3(web3.currentProvider);
  // } else {
  //   var net = require("net");
  //   var web3 = new Web3("/home/xxYourHomeFolderxx/.ethereum/geth.ipc", net);
  // }

  // let web3 = window.web3;

  web3.fromWei(
    web3.eth
      .getBalance("0xAA5c4244F05c92781C4F259913319d8ba1aCF05E")
      .then(console.log)
  );

  console.log();
};

export default EtherWeb3;
