import { Contract, ethers, Signer } from "ethers";
import * as customBallotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import * as myTokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { CustomBallot, MyToken } from "../typechain";
import "dotenv/config";

export const EXPOSED_KEY =
    "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";
export async function connectToBlockchain() {
    const wallet =
        process.env.MNEMONIC && process.env.MNEMONIC.length > 0
            ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
            : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
    console.log(`Using address ${wallet.address}`);
    const provider = getProvider();
    const signer = await wallet.connect(provider);
    const balanceBN = await signer.getBalance();
    const balance = Number(ethers.utils.formatEther(balanceBN));
    console.log(`Wallet balance ${balance}`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    return signer;
}
export function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}
export function getProvider() {
    const provider = ethers.providers.getDefaultProvider("ropsten", {
        etherscan: process.env.ETHERSCAN_API_KEY,
        alchemy: process.env.ALCHEMY_API_KEY
    });

    return provider;
}
export function connectToBallot(ballotAddress: string, signer: Signer) {
    console.log(
        `Connecting to ballot ${ballotAddress}`
    );

    return new Contract(ballotAddress, customBallotJson.abi, signer) as CustomBallot;
}
export function connectToToken(tokenAddress: string, signer: Signer) {
    console.log(
        `Connecting to token ${tokenAddress}`
    );

    return new Contract(tokenAddress, myTokenJson.abi, signer) as MyToken;
}
