//run with yarn run ts-node --files ./scripts/getProposals.ts ballotAddress
import { ethers } from "ethers";
import "dotenv/config";
import { connectToBallot, connectToBlockchain } from "./utils";

async function main() {

    const signer = await connectToBlockchain();
    const ballotAddress = process.argv[2];
    const ballotContract = connectToBallot(ballotAddress, signer)
    let index = 0;
    while (index !== -1) {
        try {
            const proposal = await ballotContract.proposals(index);
            const proposalName = ethers.utils.parseBytes32String(proposal.name);
            const voteCount = proposal.voteCount;

            console.log(`Proposal ${index} has name ${proposalName} and has ${voteCount} vote`);
            index++;
        } catch (e) {
            index = -1;
            break;
        }
    }

}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});