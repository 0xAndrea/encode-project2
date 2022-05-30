//run with yarn run ts-node --files ./scripts/getWinner.ts ballotAddress
import { ethers } from "ethers";
import "dotenv/config";
import { connectToBlockchain, connectToBallot } from "./utils"
import { customBallot } from "../artifacts/contracts/CustomBallot.sol"

async function getWinner(ballotContract: customBallot) {
    const winner = await ballotContract.winnerName();
    const winnerString = ethers.utils.parseBytes32String(winner);
    return winnerString;
}

async function main() {
    const signer = await connectToBlockchain();
    const ballotAddress = process.argv[2];
    const ballotContract = connectToBallot(ballotAddress, signer);
    const winner = getWinner(ballotContract);
    console.log(`The winner is proposal ${winner}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});