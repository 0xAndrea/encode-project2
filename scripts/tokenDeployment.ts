import { ethers } from "ethers";
import * as myTokenJson from "../artifacts/contracts/Token.sol/MyToken.json"; import { connectToBlockchain } from "./utils";

async function main() {
    const signer = await connectToBlockchain();
    console.log("Deploying token contract");
    const tokenFactory = new ethers.ContractFactory(myTokenJson.abi, myTokenJson.bytecode, signer);
    const tokenContract = await tokenFactory.deploy();
    await tokenContract.deployed();
    console.log(`Token contract deployed at ${tokenContract.address}`);

} main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});