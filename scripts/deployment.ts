import { ethers } from "ethers";
import * as customBallotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import * as myTokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { connectToBlockchain, convertStringArrayToBytes32 } from "./utils";

// This key is already public on Herong's Tutorial Examples - v1.03, by Dr. Herong Yang
// Do never expose your keys like this
const EXPOSED_KEY =
    "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";



async function main() {
    const signer = await connectToBlockchain();
    console.log("Deploying Ballot contract");
    const proposals = ["Proposal 1", "Proposal 2", "Proposal 3"];


    const ballotFactory = new ethers.ContractFactory(
        customBallotJson.abi,
        customBallotJson.bytecode,
        signer
    );
    const tokenFactory = new ethers.ContractFactory(
        myTokenJson.abi,
        myTokenJson.bytecode,
        signer
    );
    const tokenContract = await tokenFactory.deploy();
    await tokenContract.deployed();
    console.log(`Token contract deployed at ${tokenContract.address}`);
    const ballotContract = await ballotFactory.deploy(
        convertStringArrayToBytes32(proposals),
        tokenContract.address
    );
    console.log("Awaiting confirmations");
    await ballotContract.deployed();
    console.log("Completed");
    console.log(`Contract deployed at ${ballotContract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
