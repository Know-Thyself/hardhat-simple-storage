const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
	async (taskArg, hre) => {
		const blockNumber = await hre.ethers.provider.getBlockNumber()
		console.log(`Current block number is: ${blockNumber}`)
	}
)

module.exports = {}
