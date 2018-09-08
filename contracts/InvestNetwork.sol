pragma solidity ^0.4.24;

// This is a contract to store and get the best score for user on FlappyEther

contract InvestNetwork {
	mapping (address => string) portfolios;
	
	event Saved(address indexed, string portfolio);

	constructor() public {

	}

	function savePortfolio(string portfolio) public returns(bool) {
		portfolios[msg.sender] = portfolio;
		return true;
	}

	function getPortfolio() public view returns(string){
		string portfolio = portfolios[msg.sender];
		return portfolio;
	}
	
}
