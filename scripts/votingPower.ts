import "dotenv/config";
import { ethers } from "hardhat";
import { connectToBlockchain, connectToBallot } from "./utils"

async function main() {
    const signer = await connectToBlockchain();
    const ballotAddress = process.argv[2];
    const proposalChosen = process.argv[3];
    const numberOfVotes = process.argv[4];


    const ballotContract = connectToBallot(ballotAddress, signer);

    //trying to vote for Proposal A with 10 votes, fails, despite voters having tokens
    const votingPowerBN = await ballotContract.votingPower();
    const votingPower = ethers.utils.formatEther(votingPowerBN);
    console.log(`has ${votingPower} voting power`);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});