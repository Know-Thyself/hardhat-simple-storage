const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("SimpleStorage", function () {
	let simpleStorageFactory, simpleStorage
	beforeEach(async function () {
		simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
		simpleStorage = await simpleStorageFactory.deploy()
	})

	it("Should start with a favorite number of 0", async function () {
		const currentValue = await simpleStorage.retrieve()
		const expectedValue = "0"
		// Then we can use either assert or expect keyword
		assert.equal(currentValue.toString(), expectedValue)
		// expect(currentValue.toString()).to.equal(expectedValue)
	})

	it("Should update when we call store function", async function () {
		const expectedValue = "7"
		const transactionResponse = await simpleStorage.store(expectedValue)
		await transactionResponse.wait(1)
		const currentValue = await simpleStorage.retrieve()
		assert.equal(currentValue.toString(), expectedValue)
	})

	it("Should push to people array", async function () {
		const personAndFavoriteNumber = { name: "Biruk", number: "7" }
		const transactionResponse = await simpleStorage.addPerson(
			personAndFavoriteNumber.name,
			personAndFavoriteNumber.number
		)
		await transactionResponse.wait(1)
		const favoriteNumber = await simpleStorage.nameToFavoriteNumber(
			personAndFavoriteNumber.name
		)
		expect(favoriteNumber).to.equal(personAndFavoriteNumber.number)
	})

	it("Should return the result of 1 + 1", async function () {
		const transactionResponse = await simpleStorage.add()
		expect(transactionResponse).to.equal(2)
	})
})
