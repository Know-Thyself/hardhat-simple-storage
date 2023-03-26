require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/blockNumber")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */
// task("accounts", "Prints the list of accounts", async () => {
// 	const accounts = await ethers.getSigners()
// 	for (const account of accounts) {
// 		console.log(account.address)
// 	}
// })

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		sepolia: {
			url: SEPOLIA_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 11155111,
		},
		localhost: {
			url: "http://127.0.0.1:8545/",
			// accounts will automatically be picked by hardhat
			chainId: 31337, // hardhat chainId
		},
	},
	solidity: "0.8.18",
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	gasReporter: {
		enabled: true,
		outputFile: "gas-report.txt",
		noColors: true,
		currency: "GBP",
		coinmarketcap: COINMARKETCAP_API_KEY,
		token: "MATIC",
	},
}
