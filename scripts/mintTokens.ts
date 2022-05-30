//run with yarn run ts-node --files ./scripts/mintTokens.ts userAddress amountToBeMinted
import { ethers } from "ethers";
import "dotenv/config";
import { connectToToken } from "./utils";
import { connectToBlockchain } from "./utils"

async function main() {
    const signer = await connectToBlockchain();
    let myTokenAddress;
    if (process.argv.length < 2) {
        myTokenAddress = "0x0c6812bB78246540d5208f0e9E7e595eC45A6Cd5";
    }
    else {
        myTokenAddress = process.argv[2];
    }


    const userAddress = process.argv[2];
    const amountToBeMinted = process.argv[3];

    const tokenContract = connectToToken(myTokenAddress, signer);

    console.log(`Minting ${amountToBeMinted} tokens to ${userAddress}.`)
    const mintTx = await tokenContract.mint(
        userAddress,
        ethers.utils.parseEther(Number(amountToBeMinted).toFixed(18))
    );

    await mintTx.wait();
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
