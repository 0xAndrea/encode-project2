//run with yarn run ts-node --files ./scripts/castVote.ts ballotAddress proposalChosen numberOfVotes

import "dotenv/config";
import { connectToBlockchain, connectToBallot } from "./utils"

async function main() {
    const signer = await connectToBlockchain();
    const ballotAddress = process.argv[2];
    const proposalChosen = process.argv[3];
    const numberOfVotes = process.argv[4];


    const ballotContract = connectToBallot(ballotAddress, signer);

    //trying to vote for Proposal A with 10 votes, fails, despite voters having tokens
    console.log(`Voting for proposal ${proposalChosen} with ${numberOfVotes}.`)
    const voteTx = await ballotContract.connect(signer).vote(proposalChosen, numberOfVotes);
    console.log("Awaiting confirmation");
    await voteTx.wait();
    console.log(`Transaction completed. Hash: ${voteTx.hash}`);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});