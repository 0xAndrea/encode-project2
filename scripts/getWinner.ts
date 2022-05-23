//run with yarn run ts-node --files ./scripts/getWinner.ts ballotAddress
import { ethers } from "ethers";
import "dotenv/config";
import { connectToBlockchain, connectToBallot } from "./utils"

async function main() {
    const signer = await connectToBlockchain();
    const ballotAddress = process.argv[2];
    const ballotContract = connectToBallot(ballotAddress, signer);


    const winner = await ballotContract.winnerName();
    const winnerString = ethers.utils.parseBytes32String(winner);
    console.log(`The winner is proposal ${winnerString}`);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});