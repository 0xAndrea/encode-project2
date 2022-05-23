//run with yarn run ts-node --files ./scripts/delegate.ts tokenAddress userAddress
import "dotenv/config";
import { connectToBlockchain, connectToToken } from "./utils"

async function main() {
    const signer = await connectToBlockchain();
    const tokenAddress = process.argv[2];
    const userAddress = process.argv[3];
    const tokenContract = connectToToken(tokenAddress, signer);



    console.log(`Delegating vote to ${userAddress}`);

    const delegateTx = await tokenContract.connect(signer).delegate(userAddress);
    console.log("Awaiting confirmation");
    await delegateTx.wait();
    console.log(`Transaction completed. Hash: ${delegateTx.hash}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});