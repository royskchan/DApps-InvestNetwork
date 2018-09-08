# DApps-InvestNetwork
This is a decentralized social network for SchoolOfAI DApps course (batch 2) final project

## Introduction
InvestNetwork is a decentralized social network for share investment portfolio. You can share your portfolio as well as subscribe other people's portfolio.

This sample project uses **Node** as middle tier, and uses private blockchain **ganache-cli** as storage. The smart contract inside the blockchian can store a portfolio publihsed by user.

## Environment Setup
The game is built on **Node** and requires **truffle**  and **ganache-cli** for running it. 

1) **truffle** is a build framework for smart contract.

2) **ganache-cli** is a standalone private blockchain.

```
npm install -g truffle
npm install -g ganache-cli
```
## Build and Compile Smart Contract
Clone the source first. Then, install all required **Node** packages and use **truffle** to compile smart contract. 

```
git clone https://github.com/royskchan/DApps-InvestNetwork
cd DApps-InvestNetwork
npm install
truffle compile
```
## Run The Project
Start **ganache-cli** in a separate console first.

```
ganache-cli
```
Go to the project folder to deploy the smart contract and run the app

```
truffle migrate
node app.js
```
Then launch the game at http://localhost:3000 

## How to Use
Input your investment portfolio, then press **Publish** to publish your portfolio to blockchain.
