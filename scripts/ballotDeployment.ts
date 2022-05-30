import { ethers } from "ethers";
import * as customBallotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import { connectToBlockchain, convertStringArrayToBytes32 } from "./utils";

async function main() {
    const signer = await connectToBlockchain();
    console.log("Deploying Ballot contract");
    const proposals = ["Proposal 1", "Proposal 2", "Proposal 3"];


    const ballotFactory = new ethers.ContractFactory(
        customBallotJson.abi,
        customBallotJson.bytecode,
        signer
    );
    const ballotContract = await ballotFactory.deploy(
        convertStringArrayToBytes32(proposals),
        "address"
    );
    await ballotContract.deployed();
    console.log(`Contract deployed at ${ballotContract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});