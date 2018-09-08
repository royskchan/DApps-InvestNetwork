var InvestNetwork = artifacts.require("./InvestNetwork.sol");

module.exports = function(deployer) {
  deployer.deploy(InvestNetwork);
};
