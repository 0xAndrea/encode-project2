# CustomBallot project Report

## Deployed Token contract
**Address:** 0xC989Ba2573a021ed89DB784571EA8cF87F160fe4

**Etherscan:** https://ropsten.etherscan.io/address/0xc989ba2573a021ed89db784571ea8cf87f160fe4

## Deployed CustomBallot Contract
**Address:** 0x55842b81bbd8F140D1688e318C6D4326248f9619
**Etherscan:** https://ropsten.etherscan.io/address/0x55842b81bbd8f140d1688e318c6d4326248f9619
## Operations

### Deployment

**Script:** deployment.ts

**Txn Hashes:** 0xee6f79c33e60b30063cce2b3a15c1f0f129da8e38fa11d2fce0cec77466827e0, 0x303b4f71bfb470648a17cc2a09fdb49639057517f704236cf9d71aaafd827816

**Description:** Deploys Token contract and then Ballot contract with presets proposals

**Script:** 

`yarn yarn hardhat run scripts/deployment.ts`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.905062846487398
Deploying Ballot contract
Token contract deployed at 0xC989Ba2573a021ed89DB784571EA8cF87F160fe4
Awaiting confirmations
Completed
Contract deployed at 0x55842b81bbd8F140D1688e318C6D4326248f9619
```

------

### Mint Tokens

**Script:** mintTokens.ts

**Txn Hash:** 0x1faa8888bd9c91d398e2c3543111c0986f7a5d981a054c8d681f17446705bf8a

**Description:** Mint x amount of tokens to a give address

**Script:** 

`yarn run ts-node --files ./scripts/mintTokens.ts userAddress amountToBeMinted`
`yarn run ts-node --files ./scripts/mintTokens.ts 0x6b1e0D61eb90e529b198D69952C9e2F775101C74 100`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.887950986474726
Connecting to token 0xC989Ba2573a021ed89DB784571EA8cF87F160fe4
Minting 100 tokens to 0x6b1e0D61eb90e529b198D69952C9e2F775101C74.
```

------

### Get proposals

**Script:** getProposals.ts

**Txn Hash:** n/a (read-only)

**Description:** Get Ballot's proposals and it's votes

**Script:** 

`yarn run ts-node --files ./scripts/getProposals.ts ballotAdress`
`yarn run ts-node --files ./scripts/getProposals.ts 0x55842b81bbd8F140D1688e318C6D4326248f9619`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.88711859418624
Connecting to ballot 0x55842b81bbd8F140D1688e318C6D4326248f9619
Proposal 0 has name Proposal 1 and has 0 vote
Proposal 1 has name Proposal 2 and has 0 vote
Proposal 2 has name Proposal 3 and has 0 vote
```

------

### Delegate vote

**Script:** delegate.ts

**Txn Hash:** 0xda386167d65df048a17865a7b0b5d993a2b499efba11bdad205ddbb102c68054

**Description:** Delegates voting right to target account (The owner losses the voting ability, and the target gets more weight in it's vote)

**Script:** 

`yarn run ts-node --files ./scripts/delegate.ts tokenAddress userAddress`
`yarn run ts-node --files ./scripts/delegate.ts 0xC989Ba2573a021ed89DB784571EA8cF87F160fe4 0x6b1e0D61eb90e529b198D69952C9e2F775101C74`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.88711859418624
Connecting to token 0xC989Ba2573a021ed89DB784571EA8cF87F160fe4
Delegating vote to 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Awaiting confirmation
Transaction completed. Hash: 0xda386167d65df048a17865a7b0b5d993a2b499efba11bdad205ddbb102c68054
```

------

### Cast vote

**Script:** castVote.ts

**Txn Hash:** N/A

**Description:** Account votes in a chosen proposal(weight is converted into proposal votes) FAILED TO IMPLEMENT
**Script:** 

`yarn run ts-node --files ./scripts/castVote.ts ballotAddress proposalChosen numberOfVotes`
`yarn run ts-node --files ./scripts/castVote.ts 0x55842b81bbd8F140D1688e318C6D4326248f9619 0 100`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.885545881547058
Connecting to ballot 0x55842b81bbd8F140D1688e318C6D4326248f9619
Voting for proposal 0 with 100.
<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"cannot estimate gas; transaction may fail or may require manual gas limit","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0x6b1e0D61eb90e529b198D69952C9e2F775101C74","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x079507f422"},"to":"0x55842b81bbd8F140D1688e318C6D4326248f9619","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064","type":2,"accessList":null}}, tx={"data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064","to":{},"from":"0x6b1e0D61eb90e529b198D69952C9e2F775101C74","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x079507f422"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.6.0)
    at Logger.makeError (/Users/andreamalortigue/Project/node_modules/@ethersproject/logger/src.ts/index.ts:261:28)
    at Logger.throwError (/Users/andreamalortigue/Project/node_modules/@ethersproject/logger/src.ts/index.ts:273:20)
    at /Users/andreamalortigue/Project/node_modules/@ethersproject/abstract-signer/src.ts/index.ts:301:31
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (method="estimateGas", transaction={"from":"0x6b1e0D61eb90e529b198D69952C9e2F775101C74","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x079507f422"},"to":"0x55842b81bbd8F140D1688e318C6D4326248f9619","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064","type":2,"accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.6.4)
      at Logger.makeError (/Users/andreamalortigue/Project/node_modules/@ethersproject/logger/src.ts/index.ts:261:28)
      at Logger.throwError (/Users/andreamalortigue/Project/node_modules/@ethersproject/logger/src.ts/index.ts:273:20)
      at /Users/andreamalortigue/Project/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:631:24
      at Array.forEach (<anonymous>)
      at /Users/andreamalortigue/Project/node_modules/@ethersproject/providers/src.ts/fallback-provider.ts:613:33
      at step (/Users/andreamalortigue/Project/node_modules/@ethersproject/providers/lib/fallback-provider.js:48:23)
      at Object.next (/Users/andreamalortigue/Project/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at step (/Users/andreamalortigue/Project/node_modules/@ethersproject/providers/lib/fallback-provider.js:33:139)
      at Object.next (/Users/andreamalortigue/Project/node_modules/@ethersproject/providers/lib/fallback-provider.js:29:53)
      at fulfilled (/Users/andreamalortigue/Project/node_modules/@ethersproject/providers/lib/fallback-provider.js:20:58) {
    reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
    code: 'UNPREDICTABLE_GAS_LIMIT',
    method: 'estimateGas',
    transaction: {
      from: '0x6b1e0D61eb90e529b198D69952C9e2F775101C74',
      maxPriorityFeePerGas: [BigNumber],
      maxFeePerGas: [BigNumber],
      to: '0x55842b81bbd8F140D1688e318C6D4326248f9619',
      data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064',
      type: 2,
      accessList: null
    }
  },
  tx: {
    data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064',
    to: Promise { '0x55842b81bbd8F140D1688e318C6D4326248f9619' },
    from: '0x6b1e0D61eb90e529b198D69952C9e2F775101C74',
    type: 2,
    maxFeePerGas: BigNumber { _hex: '0x079507f422', _isBigNumber: true },
    maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
    nonce: Promise { 17 },
    gasLimit: Promise { <rejected> [Circular *1] },
    chainId: Promise { 3 }
  }
}
error Command failed with exit code 1.
```

------

### Get voting results

**Script:** getWinner.ts

**Txn Hash:** n/a (read only)

**Description:** Get the winner proposal (the one with more votes)

**Script:** 

`yarn run ts-node --files ./scripts/getWinner.ts ballotAddress`

**Output:**

```
Using address 0x6b1e0D61eb90e529b198D69952C9e2F775101C74
Wallet balance 8.885545881547058
Connecting to ballot 0x55842b81bbd8F140D1688e318C6D4326248f9619
The winner is proposal Proposal 1
```
As all proposals have 0 votes, the first proposal wins.
