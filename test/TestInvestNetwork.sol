pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/InvestNetwork.sol";

contract TestInvestNetwork {

  function testPortfolioStored() public {
    InvestNetwork investNetwork = InvestNetwork(DeployedAddresses.InvestNetwork());

    bool expected = true;
    var portfolio = '{ "stock0":"BTC", "quantity0":30, "target0":9000, "stock1":"GOOG", "quantity1":3000, "target1":1800,  "stock2":"ETH", "quantity2":700, "target2":450 }';

    Assert.equal(investNetwork.savePortfolio(portfolio), expected, "User save portfolio");
   	Assert.equal(investNetwork.getPortfolio(), portfolio, "User load portfolio");
  }

}
