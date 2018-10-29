var PodCoin = artifacts.require("./PodCoin.sol");

module.exports = function(deployer) {

  deployer.deploy(PodCoin, {from: "0x83Bbe1e2a2F353E881Dcd7c57E830C285d7aAB0a"});

};
