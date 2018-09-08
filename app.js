var express = require('express');
var Web3 = require("web3");
var contract = require("truffle-contract");

var provider    = new Web3.providers.HttpProvider("http://localhost:8545");

var web3 = new Web3();
web3.setProvider(provider);

var path = require("path");
var InvestNetwork = require(path.join(__dirname, "build/contracts/InvestNetwork.json"));
var InvestNetworkContract = contract(InvestNetwork);
InvestNetworkContract.setProvider(provider);

var accounts = web3.eth.accounts;

var app = express();
app.get("/api/save-portfolio", savePortfolio);
app.get("/api/get-portfolio", getPortfolio);

app.use("/", express.static("public"));

app.listen(3000)

function savePortfolio(req, res){
	var portfolio = req.query.portfolio;
    console.log("savePortfolio-portfolio[" + portfolio + "]"); 
	InvestNetworkContract.deployed().then(function(instance) {
		
  	return instance.savePortfolio(portfolio, {from: accounts[0],  gas: 200000})
  
  }).then(function(result) {
  	
    console.log("savePortfolio-Tx[" + result.tx + "]"); 
		res.send(result.tx);
		
	});
}

function getPortfolio(req, res){

	InvestNetworkContract.deployed().then(function(instance) {
		
		return instance.getPortfolio({from: accounts[0]})
  
  }).then(function(result) {
  	
    console.log("getPortfolio[" + result + "]"); 
		res.send(result.toString());
	});
}


